document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('BGM');
    const baseUrl = 'https://mesareudx.mesagrey.ca/';
    const localSrc = '/assets/music/whosthere.mp3';
    const remoteSrc = baseUrl + localSrc;

    // Check if the local file exists
    fetch(localSrc, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                audio.src = localSrc;
            } else {
                audio.src = remoteSrc;
            }
        })
        .catch(() => {
            // If there's an error (e.g., network error), use the remote URL
            audio.src = remoteSrc;
        });

    // Set the audio source directly
    audio.volume = 0.5;
    audio.loop = true;
    audio.play();
});