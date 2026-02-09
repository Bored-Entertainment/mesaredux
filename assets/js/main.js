---
---
//main page mesaredux javascript

function onReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
        callback();
    }
}
// BLURB LOADER SCRIPT
// Fetches and displays a random top city blurb from the mesaredux API.
// Caches the payload in localStorage until the next 9:15 PM UTC.

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
    return fetch('https://api.mesaredux.com/blurb', {
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

    const invalidValues = ['(not set)'];

    const validEntries = entries
        .map((entry, index) => ({ entry, index }))
        .filter(({ entry, index }) => {
            const city = entry?.weektopCity?.trim?.();
            const region = entry?.weektopRegion?.trim?.();
            const country = entry?.weektopCountry?.trim?.();
            const isValid = Boolean(city && region && country)
                && !invalidValues.includes(city.toLowerCase())
                && !invalidValues.includes(region.toLowerCase())
                && !invalidValues.includes(country.toLowerCase());
            if (!isValid) {
                console.warn(`blurb: skipping entry at source index ${index} due to missing/invalid data`);
            }
            return isValid;
        })
        .map(({ entry }, idx) => ({
            ...entry,
            weektopCity: entry.weektopCity.trim(),
            weektopRegion: entry.weektopRegion.trim(),
            weektopCountry: entry.weektopCountry.trim(),
            rank: idx + 1
        }));

    if (!validEntries.length) {
        console.warn('blurb: no valid entries remain after filtering');
        return;
    }

    // expose the filtered list for console debugging via blurblist()
    window.blurblist = function() {
        console.table(validEntries.map(e => ({
            rank: e.rank,
            city: e.weektopCity,
            region: e.weektopRegion,
            country: e.weektopCountry
        })));
    };

    const topTwenty = validEntries.slice(0, 20);
    if (!topTwenty.length) {
        console.warn('blurb: no entries available after applying top 20 limit');
        return;
    }


    const randomIndex = Math.floor(Math.random() * topTwenty.length);
    const randomEntry = topTwenty[randomIndex];
    const { weektopCity: city = 'Unknown City', weektopRegion: region = 'Unknown Region', weektopCountry: country = 'Unknown Country', rank } = randomEntry;
    const ordinalRank = toOrdinal(rank);

    onReady(() => {
        const blurbContainer = document.getElementById('blurb');
        if (!blurbContainer) {
            console.warn('blurb: element with id "blurb" not found');
            return;
        }

        const showRegion = country === 'United States' || country === 'Canada';
        const location = showRegion ? `${city}, ${region}` : `${city}, ${country}`;
        const brand = '{{ site.title }}';
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
// nowplaying 
document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('BGM');
  var nowPlaying = document.getElementById('now-playing');

  if (!audio || !nowPlaying) {
    return;
  }

  var playToggle = document.getElementById('bgm-play-toggle');
  var muteToggle = document.getElementById('bgm-mute-toggle');
  var prevButton = document.getElementById('bgm-prev');
  var nextButton = document.getElementById('bgm-next');
  var volumeslider = document.querySelector("#volume-slider");
  var volumeBeforeMute = 50; // Store volume before muting

  var syncPlayLabel = function() {
    if (!playToggle) {
      return;
    }
    playToggle.textContent = audio.paused ? '▶' : '⏸';
  };

  var syncMuteLabel = function() {
    if (!muteToggle) {
      return;
    }
    muteToggle.textContent = audio.muted ? '🔇' : '🔊';
  };

  var syncVolumeSlider = function() {
    if (!volumeslider) {
      return;
    }
    var displayValue = audio.muted ? 0 : (audio.volume * 100);
    volumeslider.value = displayValue;
    document.documentElement.style.setProperty('--value', `${displayValue}%`);
  };

  function getTrackLabel() { 
    var display = audio.dataset.trackDisplay;
    if (display) {
      return display;
    }

    var artist = audio.dataset.trackArtist;
    var title = audio.dataset.trackTitle;
    var combined = [artist, title].filter(Boolean).join(' — ');
    if (combined) {
      return combined;
    }

    var src = audio.dataset.trackSource || audio.currentSrc || audio.src;
    if (!src) {
      return '';
    }

    var fileName = src.split('/').pop();
    return fileName ? decodeURIComponent(fileName) : ''; 
  }

  function updateNowPlaying() {
    var label = getTrackLabel();
    nowPlaying.textContent = label || 'none';
    syncPlayLabel();
    syncMuteLabel();
  }

  if (playToggle) {
    playToggle.addEventListener('click', function() {
      if (audio.paused) {
        audio.play().catch(function(err) {
          console.error('Audio play failed:', err);
          syncPlayLabel();
        });
      } else {
        audio.pause();
      }
    });
  }

  if (muteToggle) {
    muteToggle.addEventListener('click', function() {
      if (!audio.muted) {
        // Store current volume before muting
        volumeBeforeMute = audio.volume * 100;
      }
      audio.muted = !audio.muted;
      syncMuteLabel();
      syncVolumeSlider();
    });
  }

  if (prevButton) {
    prevButton.addEventListener('click', function() {
      if (window.bgmControls && window.bgmControls.playPrevious) {
        window.bgmControls.playPrevious();
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', function() {
      if (window.bgmControls && window.bgmControls.playNext) {
        window.bgmControls.playNext();
      }
    });
  }

  audio.addEventListener('playing', updateNowPlaying);
  audio.addEventListener('ended', function() {
    updateNowPlaying();
    syncPlayLabel();
  });
  audio.addEventListener('loadedmetadata', updateNowPlaying);
  audio.addEventListener('pause', syncPlayLabel);
  audio.addEventListener('volumechange', function() {
    syncMuteLabel();
    syncVolumeSlider();
  });
  audio.addEventListener('trackmetadatachange', updateNowPlaying);

  updateNowPlaying();
  syncPlayLabel();
  syncMuteLabel();
  syncVolumeSlider();

  //nice comments, grey
  // thanks harper
  /////// harper code
  if (volumeslider) {
    volumeslider.addEventListener('input', function() {
      // unmute if muted and user adjusts volume
      if (audio.muted && volumeslider.value > 0) {
        audio.muted = false;
        syncMuteLabel();
      }
      audio.volume = volumeslider.value / 100;
      volumeBeforeMute = volumeslider.value; // update stored volume
      /////// grey code (singular)
      document.documentElement.style.setProperty('--value', `${volumeslider.value}%`);
    });
  }
});
// update box logic
fetch('/assets/js/json/updates.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('updates: failed to load updates.json');
        }
        return response.json();
    })
    .then(data => {
    const updates = Array.isArray(data) ? data.slice(-3) : [];
    updates.reverse();

        onReady(() => {
            const updatesContainer = document.getElementById('updates-list');
            if (!updatesContainer) {
                console.warn('updates: element with id "updates-list" not found');
                return;
            }

            updatesContainer.innerHTML = '';

            const ul = document.createElement('ul');
            updates.forEach(update => {
                const li = document.createElement('li');
                li.textContent = update;
                ul.appendChild(li);
            });
            updatesContainer.appendChild(ul);
        });
    })
    .catch(error => {
        console.error('updates error:', error);
    });
// q.u.i.p. box logic
fetch('/assets/js/json/lines.json')
  .then(res => {
    if (!res.ok) {
      throw new Error('randoText: failed to load lines.json');
    }
    return res.json();
  })
  .then(json => {
    if (!Array.isArray(json) || json.length === 0) {
      console.warn('randoText: lines.json is empty or invalid');
      return;
    }

    onReady(() => {
      const target = document.getElementById('line');
      if (!target) {
        console.warn('randoText: element with id "line" not found');
        return;
      }

      const refreshButton = document.getElementById('refresh');
      // keep css font scaling aligned with the current quote length.
      const updateTextLength = length => {
        const safeLength = Math.max(length, 1);
        document.documentElement.style.setProperty('--text-length', `${safeLength}`);
      };

      const setRandomQuote = () => {
        const quote = json[Math.floor(Math.random() * json.length)];
        const quoteText = typeof quote === 'string' ? quote : String(quote ?? '');
        target.textContent = `"${quoteText}"`;
        updateTextLength(quoteText.length);
      };

      setRandomQuote();

      if (refreshButton) {
        refreshButton.addEventListener('click', setRandomQuote);
      }
    });
  })
  .catch(error => {
    console.error(error);
  });
// copybutton logic
    document.addEventListener('DOMContentLoaded', function() {
      var copyButtons = document.querySelectorAll('#copy');
      if (copyButtons.length) {
        copyButtons.forEach(function(button) {
          var originalLabel = button.textContent.trim();
          var revertTimer = null;

          button.addEventListener('click', function() {
            var targetId = button.getAttribute('data-target');
            if (!targetId) {
              return;
            }

            var codeBlock = document.getElementById(targetId);
            if (!codeBlock) {
              return;
            }

            var snippet = codeBlock.textContent.trim();
            if (!snippet) {
              return;
            }

            var handleSuccess = function() {
              clearTimeout(revertTimer);
              button.textContent = 'copied!';
              button.disabled = true;
              revertTimer = setTimeout(function() {
                button.textContent = originalLabel;
                button.disabled = false;
              }, 2000);
            };

            var handleError = function(error) {
              if (error) {
                console.error('Clipboard copy failed:', error);
              }
              clearTimeout(revertTimer);
              button.textContent = 'copy failed';
              button.disabled = false;
              revertTimer = setTimeout(function() {
                button.textContent = originalLabel;
              }, 2000);
            };

            var fallbackCopy = function(text) {
              var textarea = document.createElement('textarea');
              textarea.value = text;
              textarea.setAttribute('readonly', '');
              textarea.style.position = 'absolute';
              textarea.style.left = '-9999px';
              document.body.appendChild(textarea);

              var selection = document.getSelection();
              var selectedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

              textarea.select();
              var succeeded = false;
              try {
                succeeded = document.execCommand('copy');
              } catch (err) {
                succeeded = false;
              }

              document.body.removeChild(textarea);

              if (selectedRange) {
                selection.removeAllRanges();
                selection.addRange(selectedRange);
              }

              return succeeded;
            };

            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(snippet)
                .then(handleSuccess)
                .catch(function(err) {
                  if (fallbackCopy(snippet)) {
                    handleSuccess();
                  } else {
                    handleError(err);
                  }
                });
            } else if (fallbackCopy(snippet)) {
              handleSuccess();
            } else {
              handleError();
            }
          });
        });
      }
// badge marquee logic
      var badgeMarquees = document.querySelectorAll('.badge-marquee');
      if (!badgeMarquees.length) {
        return;
      }

      var DEFAULT_SCROLL_DELAY_MS = 85;
      var MIN_DURATION_SECONDS = 5;

      var calculateDuration = function(marquee) {
        var track = marquee.querySelector('.badge-track');
        if (!track) {
          return;
        }

        // Remove any pending inline duration before measurement to avoid compounding.
        track.style.removeProperty('--badge-marquee-duration');

        var totalWidth = track.scrollWidth;
        if (!totalWidth) {
          return;
        }

        var singleCycleWidth = totalWidth / 2;
        if (!singleCycleWidth) {
          return;
        }

        var speedAttr = parseFloat(marquee.getAttribute('data-speed'));
        var scrollAmount = !isNaN(speedAttr) && speedAttr > 0 ? speedAttr : 7;
        var pixelsPerSecond = scrollAmount * (1000 / DEFAULT_SCROLL_DELAY_MS);
        if (!pixelsPerSecond) {
          return;
        }

        var duration = singleCycleWidth / pixelsPerSecond;
        track.style.setProperty('--badge-marquee-duration', Math.max(duration, MIN_DURATION_SECONDS).toFixed(2) + 's');
      };

      var prepareMarquee = function(marquee) {
        var track = marquee.querySelector('.badge-track');
        if (!track) {
          return;
        }

        var images = track.querySelectorAll('img');
        if (!images.length) {
          calculateDuration(marquee);
          return;
        }

        var remaining = images.length;
        var finalize = function() {
          remaining -= 1;
          if (remaining <= 0) {
            calculateDuration(marquee);
            setTimeout(function() {
              calculateDuration(marquee);
            }, 100);
          }
        };

        images.forEach(function(img) {
          if (img.complete) {
            finalize();
          } else {
            img.addEventListener('load', finalize, { once: true });
            img.addEventListener('error', finalize, { once: true });
          }
        });
      };

      badgeMarquees.forEach(prepareMarquee);

      window.addEventListener('load', function() {
        badgeMarquees.forEach(calculateDuration);
      });

      var resizeTimer = null;
      window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          badgeMarquees.forEach(calculateDuration);
        }, 150);
      });
    });
