document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('BGM');
    if (!audio) {
        return;
    }

    const baseUrl = 'https://mesareudx.mesagrey.ca/';
    const defaultLocalSrc = audio.getAttribute('data-local-src') || '/assets/music/whosthere.mp3';
    const playlistSrc = audio.getAttribute('data-track-list');

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
        audio.volume = 0.5;
        audio.loop = true;
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

    const pickTrack = (data) => {
        if (!data) {
            return null;
        }
        const tracks = Array.isArray(data) ? data : (Array.isArray(data.tracks) ? data.tracks : []);
        if (!tracks.length) {
            return null;
        }
        return tracks[Math.floor(Math.random() * tracks.length)];
    };

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
                const selection = pickTrack(data);
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
            })
            .catch(err => {
                console.error('Error loading audio playlist:', err);
                return playDefault();
            });
    };

    startFromPlaylist();
});