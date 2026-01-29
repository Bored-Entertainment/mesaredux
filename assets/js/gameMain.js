// alt game page mesaredux javascript

// aspect ratio handling
// aspectRatio.js
// Usage: aspectRatioInfo = getAspectRatioInfo('4:3')
// aspectRatioInfo.width, aspectRatioInfo.height, aspectRatioInfo.scaleToWidth(w), aspectRatioInfo.scaleToHeight(h)

function getAspectRatioInfo(ratioStr, refWidth = 800, refHeight = 700, scale = 1) {
	// Parse string like '4:3' or '16:9'
	const match = /^([0-9.]+)\s*:\s*([0-9.]+)$/.exec(ratioStr);
	if (!match) return null;
	const w = parseFloat(match[1]);
	const h = parseFloat(match[2]);
	// Default: scale so width = refWidth
	let width = refWidth;
	let height = Math.round((h / w) * refWidth);
	// If height would exceed refHeight, scale to fit height
	if (height > refHeight) {
		height = refHeight;
		width = Math.round((w / h) * refHeight);
	}
        // Apply scale factor
        width = Math.round(width * scale);
        height = Math.round(height * scale);

        return {
            width,
            height,
            scaleToWidth: (newWidth, scaleFactor = 1) => ({
                width: Math.round(newWidth * scaleFactor),
                height: Math.round((h / w) * newWidth * scaleFactor)
            }),
            scaleToHeight: (newHeight, scaleFactor = 1) => ({
                width: Math.round((w / h) * newHeight * scaleFactor),
                height: Math.round(newHeight * scaleFactor)
            })
        };
}

document.addEventListener("DOMContentLoaded", function () {
    
    let iframe = document.getElementById("game-iframe");
    if (iframe && typeof aspectRatioInfo !== "undefined") {
        iframe.width = aspectRatioInfo.width + 10;
        iframe.height = aspectRatioInfo.height + 25;
        console.log("Set iframe size to " + iframe.width + "x" + iframe.height + " for aspect ratio " + aspectRatioInfo.width + ":" + aspectRatioInfo.height);
    } else {
        console.log("Iframe or aspectRatioInfo not found");
    }

});

document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("game-iframe");
    if (iframe) {
        iframe.addEventListener("load", function () {
            try {
                let embed = iframe.contentDocument.getElementById("game-embed");
                if (embed && typeof aspectRatioInfo !== "undefined") {
                    embed.width = aspectRatioInfo.width;
                    embed.height = aspectRatioInfo.height;
                    console.log("Set embed size to " + embed.width + "x" + embed.height + " for aspect ratio " + aspectRatioInfo.width + ":" + aspectRatioInfo.height);
                } else {
                    if (!embed) {
                        console.error("Error: 'game-embed' not found inside iframe.");
                    } else if (typeof aspectRatioInfo === "undefined") {
                        console.error("Error: aspectRatioInfo is undefined.");
                    } else {
                        console.error("Unknown error setting embed size.");
                    }
                }
            } catch (err) {
                console.error("Exception while accessing embed in iframe:", err);
            }
        });
    }
});

// game wrapper logic

(function () {
    var wrapper = document.getElementById('fullscreen-wrapper');
    var iframe = document.getElementById('game-iframe');
    var fullscreenButton = document.getElementById('fullscreen-btn');

    if (!wrapper || !iframe || !fullscreenButton) {
        return;
    }

    var gameType = 'html';
    if (document.body && typeof document.body.dataset !== 'undefined') {
        if (document.body.dataset.type && document.body.dataset.type.trim() !== '') {
            gameType = document.body.dataset.type.trim().toLowerCase();
        } else if (document.body.dataset.flash) {
            var legacyFlashValue = document.body.dataset.flash;
            var legacyIsFlash = legacyFlashValue === 'true' || legacyFlashValue === 'True' || legacyFlashValue === '1';
            if (legacyIsFlash) {
                gameType = 'flash';
            }
        }
    }

    var isFlashPage = gameType === 'flash';
    var isDosPage = gameType === 'dos';
    var borderWasInline = !!(iframe.style && iframe.style.border && iframe.style.border.trim() !== '');
    var originalBorderValue = borderWasInline ? iframe.style.border : '';
    var borderHiddenForFullscreen = false;

    function setIframeBorderHidden(hidden) {
        if (!iframe) {
            return;
        }

        if (hidden && !borderHiddenForFullscreen) {
            iframe.style.border = 'none';
            borderHiddenForFullscreen = true;
        } else if (!hidden && borderHiddenForFullscreen) {
            if (borderWasInline) {
                iframe.style.border = originalBorderValue;
            } else if (iframe.style) {
                iframe.style.removeProperty('border');
            }
            borderHiddenForFullscreen = false;
        }
    }

    // Scale iframe to fit screen while preserving aspect ratio when fullscreened
    function applyFullscreenScale() {
        if (!wrapper || !iframe) {
            return;
        }

        var baseW = parseInt(iframe.getAttribute('width'), 10) || iframe.offsetWidth;
        var baseH = parseInt(iframe.getAttribute('height'), 10) || iframe.offsetHeight;
        var fullscreenElement = document.fullscreenElement ||
                                 document.webkitFullscreenElement ||
                                 document.mozFullScreenElement ||
                                 document.msFullscreenElement;
        var isFs = fullscreenElement === wrapper;
        var shouldHideBorder = false;

        if (fullscreenElement) {
            if (fullscreenElement === wrapper || fullscreenElement === iframe || wrapper.contains(fullscreenElement)) {
                shouldHideBorder = true;
            }
        }

        setIframeBorderHidden(shouldHideBorder);

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

    function tryEnterDosFullscreen() {
        if (!isDosPage || !iframe || !iframe.contentWindow) {
            return false;
        }

        try {
            var childWindow = iframe.contentWindow;

            if (typeof childWindow.requestDosFullscreen === 'function') {
                return childWindow.requestDosFullscreen() === true;
            }

            var legacyInstance = childWindow.dosInstance || childWindow.__dosInstance;
            if (legacyInstance && typeof legacyInstance.setFullScreen === 'function') {
                legacyInstance.setFullScreen(true);
                return true;
            }
        } catch (err) {
            console.error('Failed to invoke DOS fullscreen method.', err);
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
        } else if (isDosPage) {
            var dosHandled = tryEnterDosFullscreen();
            if (!dosHandled && requestNativeFullscreen()) {
                setTimeout(applyFullscreenScale, 50);
            }
        } else if (requestNativeFullscreen()) {
            setTimeout(applyFullscreenScale, 50);
        }
    });
})();
// resource fallback logic

/*
 * Lightweight loader that retries resource URLs until one succeeds.
 * Keeps logic generic so future assets can reuse the same fallback behaviour.
 */
(function (global) {
    'use strict';

    if (!global || !global.document) {
        return;
    }

    var doc = global.document;
    var DEFAULT_TIMEOUT = 8000;

    function toArray(value) {
        if (!value) {
            return [];
        }
        return Array.isArray(value) ? value.slice() : [value];
    }

    function gatherSources(config) {
        var sources = [];

        function add(url) {
            if (url && sources.indexOf(url) === -1) {
                sources.push(url);
            }
        }

        add(config.url);
        add(config.primary);
        add(config.source);

        toArray(config.sources).forEach(add);
        toArray(config.fallback).forEach(add);
        toArray(config.fallbacks).forEach(add);
        toArray(config.alternates).forEach(add);

        return sources;
    }

    function applyAttributes(element, attrs, urlProp) {
        if (!attrs) {
            return;
        }

        Object.keys(attrs).forEach(function (key) {
            if (key === urlProp) {
                return;
            }

            var value = attrs[key];
            if (value === undefined || value === null) {
                return;
            }

            if (key in element) {
                element[key] = value;
            } else {
                element.setAttribute(key, value);
            }
        });
    }

    function ensureTarget(target) {
        if (target) {
            return target;
        }
        if (doc.head) {
            return doc.head;
        }
        if (doc.body) {
            return doc.body;
        }
        return doc.documentElement;
    }

    function load(config) {
        if (!config || !config.type) {
            throw new Error('ResourceFallback.load requires both config and config.type.');
        }

        var type = config.type;
        var sources = gatherSources(config);
        if (!sources.length) {
            return Promise.reject(new Error('ResourceFallback: no sources supplied.'));
        }

        var target = ensureTarget(config.target);
        var timeout = typeof config.timeout === 'number' ? config.timeout : DEFAULT_TIMEOUT;
        var urlProp = type === 'style' ? 'href' : 'src';

        return new Promise(function (resolve, reject) {
            var index = 0;

            function attempt() {
                if (index >= sources.length) {
                    reject(new Error('ResourceFallback: all sources failed for ' + (config.name || type) + '.'));
                    return;
                }

                var url = sources[index++];
                var element = type === 'style' ? doc.createElement('link') : doc.createElement('script');

                if (type === 'style') {
                    element.rel = element.rel || 'stylesheet';
                }

                applyAttributes(element, config.attributes, urlProp);

                if (type !== 'style' && !('async' in element) && !(config.attributes && ('async' in config.attributes || 'defer' in config.attributes))) {
                    element.defer = true;
                }

                var hasFinished = false;
                var timeoutId = null;

                function cleanup() {
                    if (hasFinished) {
                        return;
                    }
                    hasFinished = true;
                    element.removeEventListener('load', handleLoad);
                    element.removeEventListener('error', handleError);
                    if (timeoutId !== null) {
                        global.clearTimeout(timeoutId);
                    }
                }

                function handleLoad() {
                    cleanup();
                    if (global.console && typeof global.console.log === 'function') {
                        try {
                            var resolvedUrl = new URL(url, (global.location && global.location.href) || doc.baseURI || doc.URL);
                            var currentOrigin = global.location ? global.location.origin : resolvedUrl.origin;
                            var locationType = resolvedUrl.origin === currentOrigin ? 'local' : 'CDN';
                            global.console.log('ResourceFallback: loaded ' + (config.name || type) + ' from ' + locationType + ' source (' + resolvedUrl.href + ').');
                        } catch (e) {
                            global.console.log('ResourceFallback: loaded ' + (config.name || type) + ' from ' + url + '.');
                        }
                    }
                    resolve({ url: url, element: element });
                }

                function handleError() {
                    cleanup();
                    if (element.parentNode) {
                        element.parentNode.removeChild(element);
                    }
                    if (global.console && typeof global.console.warn === 'function') {
                        global.console.warn('ResourceFallback: failed to load ' + url + ', trying next source.');
                    }
                    attempt();
                }

                element.addEventListener('load', handleLoad);
                element.addEventListener('error', handleError);

                if (timeout > 0) {
                    timeoutId = global.setTimeout(function () {
                        handleError();
                    }, timeout);
                }

                element[urlProp] = url;
                target.appendChild(element);
            }

            attempt();
        });
    }

    function loadScript(config) {
        var options = config || {};
        options.type = 'script';
        return load(options);
    }

    function loadStyle(config) {
        var options = config || {};
        options.type = 'style';
        return load(options);
    }

    global.ResourceFallback = {
        load: load,
        loadScript: loadScript,
        loadStyle: loadStyle
    };
})(typeof window !== 'undefined' ? window : null);
