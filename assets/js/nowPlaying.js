document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('BGM');
  var nowPlaying = document.getElementById('now-playing');

  if (!audio || !nowPlaying) {
    return;
  }

  var playToggle = document.getElementById('bgm-play-toggle');
  var muteToggle = document.getElementById('bgm-mute-toggle');

  var syncPlayLabel = function() {
    if (!playToggle) {
      return;
    }
    playToggle.textContent = audio.paused ? 'play' : 'pause';
  };

  var syncMuteLabel = function() {
    if (!muteToggle) {
      return;
    }
    muteToggle.textContent = audio.muted ? 'unmute' : 'mute';
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
      audio.muted = !audio.muted;
      syncMuteLabel();
    });
  }

  audio.addEventListener('playing', updateNowPlaying);
  audio.addEventListener('ended', function() {
    updateNowPlaying();
    syncPlayLabel();
  });
  audio.addEventListener('loadedmetadata', updateNowPlaying);
  audio.addEventListener('pause', syncPlayLabel);
  audio.addEventListener('volumechange', syncMuteLabel);
  audio.addEventListener('trackmetadatachange', updateNowPlaying);

  updateNowPlaying();
  syncPlayLabel();
  syncMuteLabel();

  
    //nice comments, grey
    // you too harper
    /////// harper + grey code
    var volumeslider = document.querySelector('#volume-slider');
    if (volumeslider) {
      var VOLUME_STORAGE_KEY = 'mesaredux.bgmVolume';
      var DEFAULT_PERCENT = 50;
      var DEFAULT_VOLUME = DEFAULT_PERCENT / 100;

      var clampValue = function(value, min, max) {
        var numeric = typeof value === 'number' ? value : parseFloat(value);
        if (!Number.isFinite(numeric)) {
          return NaN;
        }
        return Math.min(Math.max(numeric, min), max);
      };

      var clampPercent = function(value, fallback) {
        var clamped = clampValue(value, 0, 100);
        if (Number.isFinite(clamped)) {
          return clamped;
        }
        return typeof fallback === 'number' ? fallback : DEFAULT_PERCENT;
      };

      var clampVolume = function(value, fallback) {
        var clamped = clampValue(value, 0, 1);
        if (Number.isFinite(clamped)) {
          return clamped;
        }
        return typeof fallback === 'number' ? fallback : null;
      };

      var readStoredVolume = function() {
        try {
          var stored = window.localStorage.getItem(VOLUME_STORAGE_KEY);
          if (stored === null || stored === '') {
            return null;
          }
          return clampVolume(parseFloat(stored));
        } catch (error) {
          console.warn('Audio volume persistence unavailable:', error);
          return null;
        }
      };

      var persistVolume = function(volumeValue) {
        var normalized = clampVolume(volumeValue);
        if (normalized === null) {
          return;
        }
        try {
          window.localStorage.setItem(VOLUME_STORAGE_KEY, String(normalized));
        } catch (error) {
          if (!persistVolume._warned) {
            console.warn('Audio volume persistence unavailable:', error);
            persistVolume._warned = true;
          }
        }
      };

      var updateSliderFill = function(value) {
        var numeric = clampPercent(value, DEFAULT_PERCENT);
        volumeslider.style.setProperty('--value', numeric);
        volumeslider.style.setProperty('--value-percent', numeric + '%');
        return numeric;
      };

      var applyVolume = function(rawValue, options) {
        var percent = updateSliderFill(rawValue);
        var normalized = clampVolume(percent / 100, clampVolume(audio.volume, DEFAULT_VOLUME));
        if (normalized === null) {
          normalized = DEFAULT_VOLUME;
        }
        if (!options || !options.skipAssign) {
          audio.volume = normalized;
        }
        if (!options || !options.skipPersist) {
          persistVolume(normalized);
        }
        return normalized;
      };

      var storedVolume = readStoredVolume();
      var startingVolume = storedVolume;

      if (startingVolume === null) {
        var sliderPresetPercent = clampPercent(volumeslider.value, DEFAULT_PERCENT);
        startingVolume = clampVolume(sliderPresetPercent / 100, DEFAULT_VOLUME);
      }

      if (startingVolume === null) {
        startingVolume = DEFAULT_VOLUME;
      }

      audio.volume = startingVolume;

      var initialPercent = clampPercent(Math.round(startingVolume * 100), DEFAULT_PERCENT);

      volumeslider.value = initialPercent;
      updateSliderFill(initialPercent);

      volumeslider.addEventListener('input', function(event) {
        applyVolume(event.target.value);
      });

      volumeslider.addEventListener('change', function(event) {
        applyVolume(event.target.value);
      });

      audio.addEventListener('volumechange', function() {
        var currentVolume = clampVolume(audio.volume);
        if (currentVolume === null) {
          return;
        }
        var currentPercent = clampPercent(Math.round(currentVolume * 100), DEFAULT_PERCENT);
        if (volumeslider.value !== String(currentPercent)) {
          volumeslider.value = currentPercent;
        }
        updateSliderFill(currentPercent);
        persistVolume(currentVolume);
      });
    }
});
