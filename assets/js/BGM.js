document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('BGM');
    if (!audio) {
        return;
    }

    const baseUrl = 'https://mesareudx.mesagrey.ca/';
    const defaultLocalSrc = audio.getAttribute('data-local-src') || '/assets/music/whosthere.mp3';
    const playlistSrc = audio.getAttribute('data-track-list');

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

    const ensureSource = (candidate) => new Promise((resolve) => {
        if (!candidate) {
            audio.src = buildRemoteUrl(defaultLocalSrc);
            resolve();
            return;
        }

        if (/^https?:\/\//i.test(candidate)) {
            audio.src = candidate;
            resolve();
            return;
        }

        fetch(candidate, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    audio.src = candidate;
                } else {
                    audio.src = buildRemoteUrl(candidate);
                }
            })
            .catch(() => {
                audio.src = buildRemoteUrl(candidate);
            })
            .finally(resolve);
    });

    const playWithSource = (candidate) => ensureSource(candidate).then(finalizePlayback);
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
                    const localCandidate = selection.local || selection.src || selection.path;
                    const remoteCandidate = selection.remote || selection.url;

                    if (localCandidate) {
                        return playWithSource(localCandidate);
                    }

                    if (remoteCandidate) {
                        audio.src = remoteCandidate;
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