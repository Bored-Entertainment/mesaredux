fetch('/assets/js/json/updates.json')
    .then(response => response.json())
    .then(data => {
    const updates = data.slice(-3); // last 3, oldest first
        const updatesContainer = document.getElementById('updates-list');
        if (updatesContainer) {
            updatesContainer.innerHTML = '';
            updates.forEach(update => {
                const li = document.createElement('li');
                li.textContent = update;
                updatesContainer.appendChild(li);
            });
        }
    });