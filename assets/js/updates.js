function onReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
        callback();
    }
}

fetch('/assets/js/json/updates.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('updates: failed to load updates.json');
        }
        return response.json();
    })
    .then(data => {
        const updates = Array.isArray(data) ? data.slice(-3) : [];

        onReady(() => {
            const updatesContainer = document.getElementById('updates-list');
            if (!updatesContainer) {
                console.warn('updates: element with id "updates-list" not found');
                return;
            }

            updatesContainer.innerHTML = '';

            const ul = document.createElement('ul');
            updates.forEach(update => {
                const li = document.createElement('li');
                li.textContent = update;
                ul.appendChild(li);
            });
            updatesContainer.appendChild(ul);
        });
    })
    .catch(error => {
        console.error('updates error:', error);
    });