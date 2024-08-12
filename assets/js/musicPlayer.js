document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const playPauseImage = document.getElementById('playPauseImage');
    const baseUrl = 'https://mesagrey.ca/';
    let linkOpened = false; // Flag to track if the link has been opened

    fetch('/assets/js/json/music.json')
        .then(response => response.json())
        .then(songs => {
            const randomIndex = Math.floor(Math.random() * songs.length);
            const localSrc = songs[randomIndex];
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
        });

    audio.volume = 1;
    playPauseImage.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseImage.src = '/assets/images/gordon/gordon.gif';
        } else {
            audio.pause();
            playPauseImage.src = '/assets/images/gordon/stillgordon.gif';
        }

        // Open the link in a new tab with a 2-second delay, only once
        if (!linkOpened) {
            setTimeout(() => {
                window.open('/follow-freeman', '_blank');
                linkOpened = true; // Set the flag to true after opening
            }, 4500); 
        }
    });
});
