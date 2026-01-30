---
---
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('BGM');
    if (!audio) {
        return;
    }

    const baseUrl = '{{ site.url }}';
    const defaultLocalSrc = audio.getAttribute('data-local-src') || '/assets/music/whosthere.mp3';
    const playlistSrc = audio.getAttribute('data-track-list');

    // playlist state
    let playlist = [];
    let currentIndex = 0;
    let shuffleMode = false; // whether shuffle is enabled
    let shuffledIndices = [];
    let shufflePosition = 0;

    const shuffleArray = (arr) => {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const generateShuffleOrder = () => {
        shuffledIndices = shuffleArray([...Array(playlist.length).keys()]);
        shufflePosition = 0;
    };

    const getCurrentPlayIndex = () => {
        return shuffleMode ? shuffledIndices[shufflePosition] : currentIndex;
    };

    const setTrackMetadata = (metadata = {}, resolvedSrc = '') => {
        const rawTitle = metadata.title || metadata.name || '';
        const rawArtist = metadata.artist || metadata.by || metadata.author || '';
        const album = metadata.album || '';
        const label = metadata.display || metadata.label || '';

        const srcForFallback = resolvedSrc || metadata.src || '';
        const fallbackName = srcForFallback
            ? decodeURIComponent(srcForFallback.split('/').pop() || '')
            : '';

        const title = rawTitle || fallbackName;
        const artist = rawArtist;
        const display = label || [artist, title].filter(Boolean).join(' — ') || fallbackName || '';

        if (title) {
            audio.dataset.trackTitle = title;
        } else {
            delete audio.dataset.trackTitle;
        }

        if (artist) {
            audio.dataset.trackArtist = artist;
        } else {
            delete audio.dataset.trackArtist;
        }

        if (album) {
            audio.dataset.trackAlbum = album;
        } else {
            delete audio.dataset.trackAlbum;
        }

        if (display) {
            audio.dataset.trackDisplay = display;
        } else {
            delete audio.dataset.trackDisplay;
        }

        if (srcForFallback) {
            audio.dataset.trackSource = srcForFallback;
        } else {
            delete audio.dataset.trackSource;
        }

        audio.dispatchEvent(new CustomEvent('trackmetadatachange', {
            detail: {
                title: audio.dataset.trackTitle || '',
                artist: audio.dataset.trackArtist || '',
                album: audio.dataset.trackAlbum || '',
                display: audio.dataset.trackDisplay || '',
                src: audio.dataset.trackSource || ''
            }
        }));
    };

    const buildRemoteUrl = (path) => {
        if (!path) {
            return '';
        }
        const trimmedBase = baseUrl.replace(/\/+$/, '');
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;
        return `${trimmedBase}${normalizedPath}`;
    };

    const finalizePlayback = () => {
        const wasMuted = audio.muted; // Preserve mute state
        const previousVolume = audio.volume; // Preserve volume state
        audio.loop = false; // don't loop single track, handle playlist advancement !
        audio.volume = previousVolume; // Restore volume state
        audio.muted = wasMuted; // Restore mute state
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            return playPromise.catch(err => {
                console.warn('Audio playback was prevented:', err);
            });
        }
        return Promise.resolve();
    };

    const ensureSource = (candidate, options = {}) => new Promise((resolve) => {
        const remoteFallback = options.remoteFallback;

        if (!candidate) {
            if (remoteFallback) {
                audio.src = remoteFallback;
            } else {
                audio.src = buildRemoteUrl(defaultLocalSrc);
            }
            resolve(audio.src);
            return;
        }

        if (/^https?:\/\//i.test(candidate)) {
            audio.src = candidate;
            resolve(audio.src);
            return;
        }

        fetch(candidate, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    audio.src = candidate;
                } else if (remoteFallback) {
                    audio.src = remoteFallback;
                } else {
                    audio.src = buildRemoteUrl(candidate);
                }
            })
            .catch(() => {
                if (remoteFallback) {
                    audio.src = remoteFallback;
                } else {
                    audio.src = buildRemoteUrl(candidate);
                }
            })
            .finally(() => resolve(audio.src));
    });

    const playWithSource = (candidate, metadata = {}, options = {}) =>
        ensureSource(candidate, options).then(resolvedSrc => {
            setTrackMetadata({ ...metadata, src: resolvedSrc || candidate || '' }, resolvedSrc || candidate || '');
            return finalizePlayback();
        });

    const playDefault = () => playWithSource(defaultLocalSrc);

    const playTrackAtIndex = (index) => {
        if (!playlist.length) {
            return playDefault();
        }

        const actualIndex = index % playlist.length;
        if (actualIndex < 0) {
            index = playlist.length + actualIndex;
        }
        currentIndex = actualIndex;

        const selection = playlist[actualIndex];
        if (!selection) {
            return playDefault();
        }

        if (typeof selection === 'string') {
            return playWithSource(selection);
        }

        if (selection && typeof selection === 'object') {
            const metadata = {
                title: selection.title || selection.name,
                artist: selection.artist || selection.by || selection.author,
                album: selection.album,
                display: selection.display || selection.label
            };

            const sources = selection.sources || {};
            const localCandidate = selection.local || selection.src || selection.path || selection.file || sources.local || sources.src || sources.path;
            const remoteCandidate = selection.remote || selection.url || selection.href || sources.remote || sources.url;

            if (localCandidate) {
                return playWithSource(localCandidate, metadata, { remoteFallback: remoteCandidate });
            }

            if (remoteCandidate) {
                audio.src = remoteCandidate;
                setTrackMetadata({ ...metadata, src: remoteCandidate }, remoteCandidate);
                return finalizePlayback();
            }
        }

        return playDefault();
    };

    const playNext = () => {
        if (!playlist.length) {
            return playDefault();
        }

        if (shuffleMode) {
            shufflePosition = (shufflePosition + 1) % shuffledIndices.length;
            return playTrackAtIndex(shuffledIndices[shufflePosition]);
        } else {
            return playTrackAtIndex((currentIndex + 1) % playlist.length);
        }
    };

    const playPrevious = () => {
        if (!playlist.length) {
            return playDefault();
        }

        if (shuffleMode) {
            shufflePosition = (shufflePosition - 1 + shuffledIndices.length) % shuffledIndices.length;
            return playTrackAtIndex(shuffledIndices[shufflePosition]);
        } else {
            return playTrackAtIndex((currentIndex - 1 + playlist.length) % playlist.length);
        }
    };

    const toggleShuffle = () => {
        shuffleMode = !shuffleMode;
        if (shuffleMode) {
            generateShuffleOrder();
            // Find current track in shuffle order
            shufflePosition = shuffledIndices.indexOf(currentIndex);
            if (shufflePosition === -1) {
                shufflePosition = 0;
            }
        }
        return shuffleMode;
    };

    // Listen for track end to play next
    audio.addEventListener('ended', () => {
        playNext();
    });

    const startFromPlaylist = () => {
        if (!playlistSrc) {
            return playDefault();
        }

        return fetch(playlistSrc)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load playlist: ${playlistSrc}`);
                }
                return response.json();
            })
            .then(data => {
                const tracks = Array.isArray(data) ? data : (Array.isArray(data.tracks) ? data.tracks : []);
                if (!tracks.length) {
                    return playDefault();
                }

                // Store playlist for navigation
                playlist = tracks;
                generateShuffleOrder();

                // Start at random track
                const startIndex = Math.floor(Math.random() * tracks.length);
                return playTrackAtIndex(startIndex);
            })
            .catch(err => {
                console.error('Error loading audio playlist:', err);
                return playDefault();
            });
    };

    const loadEggPlaylist = () => {
        // Only work if there's a playlist source (not on 404 page)
        if (!playlistSrc) {
            console.log('easter eggs disabled on this page');
            return Promise.resolve();
        }
        return fetch('/assets/js/json/music/egglist.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('failed to load egg list');
                }
                return response.json();
            })
            .then(data => {
                const tracks = Array.isArray(data) ? data : (Array.isArray(data.tracks) ? data.tracks : []);
                if (!tracks.length) {
                    console.log('error loading egg - no tracks found');
                    return;
                }

                console.log('λ mesacomplex 3 is REAL!');
                // Randomize the egg playlist itself, then start at index 0
                playlist = shuffleArray(tracks);
                shuffleMode = true;
                generateShuffleOrder();
                shufflePosition = 0;
                // Ensure autoplay
                if (audio.paused) {
                    audio.play().catch(() => {});
                }
                return playTrackAtIndex(0);
            })
            .catch(err => {
                console.error('error loading egg:', err);
            });
    };

    const loadLostGirlPlaylist = () => {
        // Only work if there's a playlist source (not on 404 page)
        if (!playlistSrc) {
            console.log('easter eggs disabled on this page');
            return Promise.resolve();
        }
        return fetch('/assets/js/json/music/lostgirl.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('error loading egg');
                }
                return response.json();
            })
            .then(data => {
                const tracks = Array.isArray(data) ? data : (Array.isArray(data.tracks) ? data.tracks : []);
                if (!tracks.length) {
                    console.log('error loading egg - no tracks found');
                    return;
                }

                console.log('findher');
                // Randomize the lost girl playlist itself, then start at index 0
                playlist = shuffleArray(tracks);
                shuffleMode = true;
                generateShuffleOrder();
                shufflePosition = 0;
                // Ensure autoplay
                if (audio.paused) {
                    audio.play().catch(() => {});
                }
                return playTrackAtIndex(0);
            })
            .catch(err => {
                console.error('error loading egg:', err);
            });
    };

    // easter egg: type "mesacomplex3" in console
    Object.defineProperty(window, 'mesacomplex3', {
        get: function() { loadEggPlaylist(); return 'λ'; }
    });

    // easter egg: lostgirl
    Object.defineProperty(window, 'findher1225', {
        get: function() { loadLostGirlPlaylist(); return '🎸'; }
    });

    // go back to regular playlist
    Object.defineProperty(window, 'takemeback', {
        get: function() { 
            if (!playlistSrc) {
                console.log('no playlist to return to');
                return '🚫';
            }
            startFromPlaylist(); 
            return '🏠'; 
        }
    });

    // Expose controls globally for button handlers
    window.bgmControls = {
        playNext,
        playPrevious,
        toggleShuffle,
        isShuffleMode: () => shuffleMode,
        loadEggPlaylist,
        loadLostGirlPlaylist,
        takemeback: () => { if (playlistSrc) startFromPlaylist(); }
    };

    startFromPlaylist();
});