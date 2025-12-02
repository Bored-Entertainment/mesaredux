(function () {
    let started = false;

    function attemptStart() {
        if (started) {
            return;
        }
        if (typeof window.godotRunStart === 'function') {
            started = true;
            window.godotRunStart();
            return;
        }
        requestAnimationFrame(attemptStart);
    }

    attemptStart();
}());