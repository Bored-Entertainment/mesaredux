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
});
