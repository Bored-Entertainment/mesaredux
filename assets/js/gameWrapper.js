(function () {
    var wrapper = document.getElementById('fullscreen-wrapper');
    var iframe = document.getElementById('game-iframe');
    var fullscreenButton = document.getElementById('fullscreen-btn');

    if (!wrapper || !iframe || !fullscreenButton) {
        return;
    }

    var isFlashPage = false;
    if (document.body && typeof document.body.dataset !== 'undefined') {
        var flashValue = document.body.dataset.flash;
        isFlashPage = flashValue === 'true' || flashValue === 'True' || flashValue === '1';
    }

    // Scale iframe to fit screen while preserving aspect ratio when fullscreened
    function applyFullscreenScale() {
        if (!wrapper || !iframe) {
            return;
        }

        var baseW = parseInt(iframe.getAttribute('width'), 10) || iframe.offsetWidth;
        var baseH = parseInt(iframe.getAttribute('height'), 10) || iframe.offsetHeight;
        var isFs = document.fullscreenElement === wrapper ||
                   document.webkitFullscreenElement === wrapper ||
                   document.mozFullScreenElement === wrapper ||
                   document.msFullscreenElement === wrapper;

        if (isFs && baseW && baseH) {
            iframe.style.width = baseW + 'px';
            iframe.style.height = baseH + 'px';

            var targetH = wrapper.clientHeight || window.innerHeight;
            var scale = targetH / baseH;

            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '50%';
            iframe.style.transformOrigin = '50% 0%';
            iframe.style.transform = 'translateX(-50%) scale(' + scale + ')';
        } else {
            iframe.style.position = '';
            iframe.style.top = '';
            iframe.style.left = '';
            iframe.style.width = '';
            iframe.style.height = '';
            iframe.style.transformOrigin = '';
            iframe.style.transform = '';
        }
    }

    function requestNativeFullscreen() {
        if (wrapper.requestFullscreen) {
            wrapper.requestFullscreen();
        } else if (wrapper.mozRequestFullScreen) {
            wrapper.mozRequestFullScreen();
        } else if (wrapper.webkitRequestFullscreen) {
            wrapper.webkitRequestFullscreen();
        } else if (wrapper.msRequestFullscreen) {
            wrapper.msRequestFullscreen();
        } else {
            return false;
        }
        return true;
    }

    function findRuffleController() {
        if (!iframe.contentDocument) {
            return null;
        }

        var doc = iframe.contentDocument;
        var directPlayer = doc.querySelector('ruffle-player');
        if (directPlayer) {
            return directPlayer;
        }

        var embed = doc.querySelector('ruffle-embed');
        if (embed) {
            if (typeof embed.enterFullscreen === 'function' || typeof embed.enter_fullscreen === 'function') {
                return embed;
            }
            if (embed.ruffle) {
                return embed.ruffle;
            }
            if (embed.shadowRoot) {
                var shadowPlayer = embed.shadowRoot.querySelector('ruffle-player');
                if (shadowPlayer) {
                    return shadowPlayer;
                }
            }
        }

        if (iframe.contentWindow && iframe.contentWindow.RufflePlayer) {
            var ruffleGlobal = iframe.contentWindow.RufflePlayer;
            if (typeof ruffleGlobal.newest === 'function') {
                var newest = ruffleGlobal.newest();
                if (newest) {
                    return newest;
                }
            }
            if (Array.isArray(ruffleGlobal.players) && ruffleGlobal.players.length > 0) {
                return ruffleGlobal.players[0];
            }
            if (ruffleGlobal.player && typeof ruffleGlobal.player.enterFullscreen === 'function') {
                return ruffleGlobal.player;
            }
        }

        return null;
    }

    function tryEnterRuffleFullscreen() {
        var controller = findRuffleController();
        if (!controller) {
            return false;
        }

        var target = controller;
        if (controller.shadowRoot) {
            var nestedPlayer = controller.shadowRoot.querySelector('ruffle-player');
            if (nestedPlayer) {
                target = nestedPlayer;
            }
        }

        var enterFns = [
            target.enterFullscreen,
            target.enter_fullscreen,
            target.requestFullscreen
        ];

        if ((!enterFns[0] || typeof enterFns[0] !== 'function') && controller.ruffle) {
            enterFns.unshift(controller.ruffle.enterFullscreen);
            target = controller.ruffle;
        }

        for (var i = 0; i < enterFns.length; i++) {
            if (typeof enterFns[i] === 'function') {
                try {
                    enterFns[i].call(target);
                    return true;
                } catch (err) {
                    console.error('Failed to invoke Ruffle fullscreen method.', err);
                }
            }
        }

        return false;
    }

    document.addEventListener('fullscreenchange', applyFullscreenScale);
    document.addEventListener('webkitfullscreenchange', applyFullscreenScale);
    document.addEventListener('mozfullscreenchange', applyFullscreenScale);
    document.addEventListener('MSFullscreenChange', applyFullscreenScale);
    window.addEventListener('resize', applyFullscreenScale);

    fullscreenButton.addEventListener('click', function () {
        if (isFlashPage) {
            var usedRuffle = tryEnterRuffleFullscreen();
            if (!usedRuffle) {
                console.warn('Ruffle fullscreen unavailable, falling back to browser fullscreen.');
                if (requestNativeFullscreen()) {
                    setTimeout(applyFullscreenScale, 50);
                }
            }
        } else if (requestNativeFullscreen()) {
            setTimeout(applyFullscreenScale, 50);
        }
    });
})();