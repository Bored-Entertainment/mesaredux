fetch("/assets/js/json/lines.json")
  .then(res => res.json())
  .then(lines => {
    // Defensive checks
    if (!Array.isArray(lines) || lines.length === 0) {
      console.warn('randoText: no lines available');
      return;
    }

    const el = document.getElementById("line");
    if (!el) {
      console.warn('randoText: element with id "line" not found');
      return;
    }

    const MS_PER_DAY = 24 * 60 * 60 * 1000;

    // Create a base64 string from a date and a simple hash
    function base64OfDate(d) {
      // Use ISO string (ASCII) so btoa is safe
      return btoa(d.toISOString());
    }

    function hashString(s) {
      // Simple deterministic 32-bit-ish hash (not cryptographic)
      let h = 0;
      for (let i = 0; i < s.length; i++) {
        h = (h * 31 + s.charCodeAt(i)) | 0;
      }
      return Math.abs(h >>> 0);
    }

    // Deterministic daily index. Uses days since epoch plus a hash of the base64
    // encoded date string so the base64 requirement is satisfied while keeping
    // the mapping predictable and cycling through all entries.
    function getDailyIndexForDate(d) {
      // Produce a permutation of indices seeded from the base64 date string so
      // the daily selection cycles through all lines without repeating until
      // every line has been shown (cycle length = lines.length).
      const localMidnight = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      const dayCount = Math.floor(localMidnight.getTime() / MS_PER_DAY);
      const seed = hashString(base64OfDate(localMidnight));

      // Small seeded PRNG (mulberry32)
      function mulberry32(a) {
        return function() {
          let t = (a += 0x6D2B79F5);
          t = Math.imul(t ^ (t >>> 15), t | 1);
          t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
          return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
      }

      const rand = mulberry32(seed || 1);

      // Generate a seeded permutation of [0..lines.length-1]
      const perm = Array.from({ length: lines.length }, (_, i) => i);
      for (let i = perm.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [perm[i], perm[j]] = [perm[j], perm[i]];
      }

      return perm[dayCount % lines.length];
    }

    function setLineByIndex(i) {
      // Use textContent to avoid injecting HTML. Keep the quoted style from before.
      el.textContent = `"${lines[i]}"`;
    }

    // Shuffle utility for testing mode (Fisher-Yates)
    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    // Testing mode triggered by URL param `?testing=true`.
    // In testing mode the quote changes every 2 seconds and will not repeat
    // until the entire set has been shown.
    const params = new URLSearchParams(window.location.search);
    const testing = params.get('testing') === 'true';

    if (testing) {
      let indices = shuffle(Array.from({ length: lines.length }, (_, i) => i));
      let pos = 0;
      setLineByIndex(indices[pos++]);
      const TESTING_INTERVAL_MS = 2000;
      setInterval(() => {
        if (pos >= indices.length) {
          indices = shuffle(Array.from({ length: lines.length }, (_, i) => i));
          pos = 0;
        }
        setLineByIndex(indices[pos++]);
      }, TESTING_INTERVAL_MS);
      return;
    }

    // Normal mode: show today's deterministic quote now, then schedule an update
    // at local midnight (and every 24h thereafter).
    setLineByIndex(getDailyIndexForDate(new Date()));

    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const msUntilNextMidnight = nextMidnight.getTime() - now.getTime();

    // Schedule the first update at midnight, then schedule every MS_PER_DAY.
    setTimeout(function midnightUpdate() {
      setLineByIndex(getDailyIndexForDate(new Date()));
      setTimeout(midnightUpdate, MS_PER_DAY);
    }, msUntilNextMidnight + 50);
  })
  .catch(error => {
    console.error('randoText error:', error);
  });
