
   // Scale iframe to fit screen while preserving aspect ratio when fullscreened
    function applyFullscreenScale() {
        var wrapper = document.getElementById('fullscreen-wrapper');
        var iframe = document.getElementById('game-iframe');
        // Determine the base (unscaled) size of the iframe
        var baseW = parseInt(iframe.getAttribute('width')) || iframe.offsetWidth;
        var baseH = parseInt(iframe.getAttribute('height')) || iframe.offsetHeight;
        var isFs = document.fullscreenElement === wrapper ||
                   document.webkitFullscreenElement === wrapper ||
                   document.mozFullScreenElement === wrapper ||
                   document.msFullscreenElement === wrapper;

        if (isFs) {
            // Ensure known base size so scaling is deterministic
            if (baseW) iframe.style.width = baseW + 'px';
            if (baseH) iframe.style.height = baseH + 'px';

            // Scale based on the wrapper's fullscreen height so it fills top-to-bottom
            var targetH = wrapper.clientHeight || window.innerHeight;
            var scale = targetH / baseH;

            // Anchor at the top and center horizontally so the top and bottom edges align
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '50%';
            iframe.style.transformOrigin = '50% 0%';
            iframe.style.transform = 'translateX(-50%) scale(' + scale + ')';
        } else {
            // Reset styles when exiting fullscreen
            iframe.style.position = '';
            iframe.style.top = '';
            iframe.style.left = '';
            iframe.style.width = '';
            iframe.style.height = '';
            iframe.style.transformOrigin = '';
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