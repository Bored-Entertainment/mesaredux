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