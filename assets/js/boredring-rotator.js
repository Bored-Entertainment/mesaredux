    // Dynamically scale the rotated boredring so it fits its box while centered
    (function() {
      function fitBoredring() {
        const wrapper = document.querySelector('.boredring-rotator');
        if (!wrapper) return;
        const el = wrapper.querySelector('#boredring');
        if (!el) return;
        // Reset scale for accurate measurement
        el.style.transform = 'rotate(90deg) scale(1)';
        const bbox = el.getBoundingClientRect();
        const wrapRect = wrapper.getBoundingClientRect();
        if (bbox.width === 0 || bbox.height === 0) return; // not ready yet
        // Always fit completely inside (no forced minimum to avoid overflow)
        const fitScale = Math.min(wrapRect.width / bbox.width, wrapRect.height / bbox.height);
        el.style.transform = `rotate(90deg) scale(${fitScale})`;
      }
      function scheduleFits() {
        [200, 500, 1200].forEach(t => setTimeout(fitBoredring, t));
      }
      window.addEventListener('load', () => { fitBoredring(); scheduleFits(); });
      window.addEventListener('resize', fitBoredring);
      const observerInterval = setInterval(() => {
        const target = document.querySelector('.boredring-rotator #boredring');
        if (target) {
          const mo = new MutationObserver(fitBoredring);
          mo.observe(target, { childList: true, subtree: true });
          clearInterval(observerInterval);
        }
      }, 150);
      setTimeout(() => clearInterval(observerInterval), 5000);
    })();