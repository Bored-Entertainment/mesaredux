function onReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
        callback();
    }
}

function toOrdinal(num) {
    const mod10 = num % 10;
    const mod100 = num % 100;

    if (mod10 === 1 && mod100 !== 11) return `${num}st`;
    if (mod10 === 2 && mod100 !== 12) return `${num}nd`;
    if (mod10 === 3 && mod100 !== 13) return `${num}rd`;
    return `${num}th`;
}

function getCacheKey() { return 'blurbPayload'; }
function getExpiryKey() { return 'blurbExpiry'; }

function isCacheValid() {
    const expiry = localStorage.getItem(getExpiryKey());
    if (!expiry) return false;
    const now = new Date();
    const valid = now.getTime() < parseInt(expiry, 10);
    console.log(`[blurb] Cache valid: ${valid}`);
    return valid;
}

function getNextExpiryTimestamp() {
    const now = new Date();
    const expiry = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        21, 15, 0, 0 // 9:15 PM UTC
    ));
    if (now >= expiry) {
        expiry.setUTCDate(expiry.getUTCDate() + 1);
    }
    return expiry.getTime();
}

function fetchBlurb() {
    console.log('[blurb] Fetching fresh data from API...');
    return fetch('https://api.mesagrey.ca/blurb', {
        method: 'GET',
        headers: {
            'x-api-key': '3x;d4wz>]HKv@88p1hFusBvWT*xbN!HN067pea00@kg2&BD1SwjnBWu;J(9g&qR)'
        }
    })
        .then(response => {
            if (!response.ok) throw new Error('blurb: failed to load remote blurb');
            return response.json();
        });
}

function displayBlurb(payload) {
    const entries = Array.isArray(payload?.data) ? payload.data : [];
    if (!entries.length) {
        console.warn('blurb: payload missing city data');
        return;
    }

    const randomIndex = Math.floor(Math.random() * entries.length);
    const randomEntry = entries[randomIndex];
    const { weektopCity: city = 'Unknown City', weektopRegion: region = 'Unknown Region', weektopCountry: country = 'Unknown Country' } = randomEntry;
    const rank = randomIndex + 1;
    const ordinalRank = toOrdinal(rank);

    onReady(() => {
        const blurbContainer = document.getElementById('blurb');
        if (!blurbContainer) {
            console.warn('blurb: element with id "blurb" not found');
            return;
        }

    const showRegion = country === 'United States' || country === 'Canada';
    const location = showRegion ? `${city}, ${region}` : `${city}, ${country}`;
    const brand = 'MESλREDUX';
    const rankingPhrase = rank === 1 ? 'biggest source' : `${ordinalRank} biggest source`;
    const shoutoutText = `shoutout ${location} for being the ${rankingPhrase} of traffic for ${brand} this week!`;
    const lowerShoutout = shoutoutText.toLowerCase();

        blurbContainer.textContent = lowerShoutout.replace(brand.toLowerCase(), brand);
    });
}

// Main logic
if (isCacheValid()) {
    console.log('[blurb] Using cached payload.');
    const cachedPayload = JSON.parse(localStorage.getItem(getCacheKey()));
    displayBlurb(cachedPayload);
} else {
    fetchBlurb()
        .then(payload => {
            localStorage.setItem(getCacheKey(), JSON.stringify(payload));
            localStorage.setItem(getExpiryKey(), getNextExpiryTimestamp());
            console.log('[blurb] Cached new payload until next 9:15 PM UTC.');
            displayBlurb(payload);
        })
        .catch(error => console.error('blurb error:', error));
}
