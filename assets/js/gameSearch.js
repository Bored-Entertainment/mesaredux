
(function () {
	'use strict';

	var input = document.getElementById('gameSearch');
	var grid = document.getElementById('gamesGrid');
	var noResults = document.getElementById('noResults');
	if (!input || !grid) return; // nothing to do

	var cards = Array.prototype.slice.call(grid.querySelectorAll('.game-card'));
	var debounceTimer = null;
	var DEBOUNCE_MS = 150;

	function normalize(str) {
		return (str || '').toString().trim().toLowerCase();
	}

	function setCardVisible(card, visible) {
		if (visible) {
			card.style.display = ''; // revert to CSS default
			card.removeAttribute('aria-hidden');
			card.removeAttribute('tabindex');
		} else {
			card.style.display = 'none';
			card.setAttribute('aria-hidden', 'true');
			// remove from tab order when hidden
			card.setAttribute('tabindex', '-1');
		}
	}

	function filterGames(query) {
		var q = normalize(query);
		var visibleCount = 0;

		if (!q) {
			// show all
			cards.forEach(function (c) { setCardVisible(c, true); });
			if (noResults) noResults.style.display = 'none';
			return;
		}

		cards.forEach(function (card) {
			var title = normalize(card.getAttribute('data-title') || card.textContent || '');
			var match = title.indexOf(q) !== -1;
			setCardVisible(card, match);
			if (match) visibleCount += 1;
		});

		if (noResults) {
			noResults.style.display = visibleCount === 0 ? '' : 'none';
		}
	}

	function onInput(e) {
		var val = e.target.value || '';
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(function () { filterGames(val); }, DEBOUNCE_MS);
	}

	// Clear search on Escape
	function onKeyDown(e) {
		if (e.key === 'Escape' || e.key === 'Esc') {
			input.value = '';
			filterGames('');
			input.blur();
		}
	}

	// Initialize
	input.addEventListener('input', onInput, false);
	input.addEventListener('keydown', onKeyDown, false);

	// If there's a pre-filled value (e.g., from browser restore), run filter once on load
	if (normalize(input.value)) filterGames(input.value);

})();

