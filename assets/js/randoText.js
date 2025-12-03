function onReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}

fetch('/assets/js/json/lines.json')
  .then(res => {
    if (!res.ok) {
      throw new Error('randoText: failed to load lines.json');
    }
    return res.json();
  })
  .then(json => {
    if (!Array.isArray(json) || json.length === 0) {
      console.warn('randoText: lines.json is empty or invalid');
      return;
    }

    onReady(() => {
      const target = document.getElementById('line');
      if (!target) {
        console.warn('randoText: element with id "line" not found');
        return;
      }

      const refreshButton = document.getElementById('refresh');
      // keep css font scaling aligned with the current quote length.
      const updateTextLength = length => {
        const safeLength = Math.max(length, 1);
        document.documentElement.style.setProperty('--text-length', `${safeLength}`);
      };

      const setRandomQuote = () => {
        const quote = json[Math.floor(Math.random() * json.length)];
        const quoteText = typeof quote === 'string' ? quote : String(quote ?? '');
        target.textContent = `"${quoteText}"`;
        updateTextLength(quoteText.length);
      };

      setRandomQuote();

      if (refreshButton) {
        refreshButton.addEventListener('click', setRandomQuote);
      }
    });
  })
  .catch(error => {
    console.error(error);
  });