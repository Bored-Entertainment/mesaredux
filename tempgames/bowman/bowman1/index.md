---
layout: alt
title: "Bowman"
---

<style>
.fullscreen-center-wrapper:fullscreen {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

/* Smoother scaling */
#game-iframe { will-change: transform; }
</style>

<div class="fullscreen-center-wrapper" id="fullscreen-wrapper">
  <iframe id="game-iframe" srcdoc='
  <object width="100" height="100">
      <embed src="src/bowman.swf" flashvars="" base="" quality="high" allowscriptaccess="always" allowfullscreen="true" wmode="window" width="800" height="700" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">
  </object>
  ' width="810" height="725" allowfullscreen style="border:none;"></iframe>
</div>
<br>
<button id="fullscreen-btn" style="margin-top:10px;">Fullscreen</button>
<a href="src/bowman.swf" download class="btn btn-secondary">Download</a>
<script>
    // Scale iframe to fit screen while preserving aspect ratio when fullscreened
    function applyFullscreenScale() {
        var wrapper = document.getElementById('fullscreen-wrapper');
        var iframe = document.getElementById('game-iframe');
        var baseW = 810; // iframe's normal width
        var baseH = 725; // iframe's normal height
        var isFs = document.fullscreenElement === wrapper ||
                   document.webkitFullscreenElement === wrapper ||
                   document.mozFullScreenElement === wrapper ||
                   document.msFullscreenElement === wrapper;
        if (isFs) {
            var scale = Math.min(window.innerWidth / baseW, window.innerHeight / baseH);
            iframe.style.transformOrigin = 'center center';
            iframe.style.transform = 'scale(' + scale + ')';
        } else {
            iframe.style.transform = '';
        }
    }
    // Recalculate on fullscreen changes and on resize
    document.addEventListener('fullscreenchange', applyFullscreenScale);
    document.addEventListener('webkitfullscreenchange', applyFullscreenScale);
    document.addEventListener('mozfullscreenchange', applyFullscreenScale);
    document.addEventListener('MSFullscreenChange', applyFullscreenScale);
    window.addEventListener('resize', applyFullscreenScale);
    document.getElementById('fullscreen-btn').onclick = function() {
        var wrapper = document.getElementById('fullscreen-wrapper');
        if (wrapper.requestFullscreen) {
            wrapper.requestFullscreen();
        } else if (wrapper.mozRequestFullScreen) {
            wrapper.mozRequestFullScreen();
        } else if (wrapper.webkitRequestFullscreen) {
            wrapper.webkitRequestFullscreen();
        } else if (wrapper.msRequestFullscreen) {
            wrapper.msRequestFullscreen();
        }
        // Apply initial scale shortly after entering fullscreen
        setTimeout(applyFullscreenScale, 50);
    };
</script>