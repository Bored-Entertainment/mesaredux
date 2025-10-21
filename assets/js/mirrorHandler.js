document.addEventListener('DOMContentLoaded', () => {
  const mainSite = { label: 'mesaredux.mesagrey.ca', descriptor: 'main site' };

  const lists = [
    {
      selector: '[data-mirror-type="official"]',
      jsonPath: '/assets/js/json/officialmirrors.json',
      emptyMessage: 'No official mirrors available right now.',
      preprocess: (entries) => [mainSite, ...entries]
    },
    {
      selector: '[data-mirror-type="unofficial"]',
      jsonPath: '/assets/js/json/unofficalmirrors.json',
      emptyMessage: 'No unofficial mirrors submitted yet.',
      hideWhenEmpty: true
    }
  ];

  lists.forEach(({ selector, jsonPath, emptyMessage, hideWhenEmpty, preprocess }) => {
    const mirrorList = document.querySelector(selector);
    if (!mirrorList) {
      return;
    }

    fetch(jsonPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${jsonPath}: ${response.status}`);
        }
        return response.json();
      })
      .then((mirrors) => {
        mirrorList.innerHTML = '';

        const normalizedEntries = normalizeEntries(mirrors);
        const processedEntries = preprocess ? preprocess(normalizedEntries) : normalizedEntries;
        const dedupedEntries = dedupeEntries(processedEntries);

        if (dedupedEntries.length === 0) {
          if (hideWhenEmpty) {
            const container = mirrorList.closest('.mirror-box') || mirrorList.closest('.contactbox');
            if (container) {
              container.style.display = 'none';
            }
          } else {
            const emptyItem = document.createElement('li');
            emptyItem.textContent = emptyMessage;
            mirrorList.appendChild(emptyItem);
          }
          return;
        }

        dedupedEntries.forEach(({ label, descriptor }) => {
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          const hasProtocol = /^https?:\/\//i.test(label);
          const href = hasProtocol ? label : `https://${label}`;

          link.href = href;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = descriptor ? `${label} - ${descriptor}` : label;

          listItem.appendChild(link);
          mirrorList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error(error);
        mirrorList.innerHTML = '';
        const errorItem = document.createElement('li');
        errorItem.textContent = 'Unable to load mirrors right now.';
        mirrorList.appendChild(errorItem);
      });
  });
});

function normalizeEntries(rawMirrors) {
  if (!Array.isArray(rawMirrors)) {
    return [];
  }

  return rawMirrors
    .map((entry) => {
      if (entry && typeof entry === 'object') {
        const label = String(entry.label || entry.url || '').trim();
        const descriptor = entry.descriptor ? String(entry.descriptor).trim() : '';
        return label ? { label, descriptor } : null;
      }

      const raw = String(entry || '').trim();
      if (!raw) {
        return null;
      }

      const parts = raw.split(' - ');
      const label = parts.shift();
      const descriptor = parts.join(' - ').trim();
      return { label, descriptor };
    })
    .filter(Boolean);
}

function dedupeEntries(entries) {
  const seen = new Set();
  const output = [];

  entries.forEach(({ label, descriptor }) => {
    const trimmedLabel = String(label || '').trim();
    if (!trimmedLabel) {
      return;
    }

    const key = trimmedLabel
      .replace(/^https?:\/\//i, '')
      .replace(/\/$/, '')
      .toLowerCase();

    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    output.push({ label: trimmedLabel, descriptor });
  });

  return output;
}
