---
layout: default
title: "games"
header: "* GAMES: *"
---

<div style="display: flex; justify-content: center; align-items: center; width: 100%; margin: 2em 0 1em 0;">
  <input type="text" id="gameSearch" placeholder="search games" aria-label="Search games"
    onfocus="this.style.borderColor='#FF4500';this.style.boxShadow='0 0 0 2px #531600ff';"
    onblur="this.style.borderColor='#bbb';this.style.boxShadow='0 2px 12px 0 rgba(0,0,0,0.08)';"
  />
</div>
<div id="noResults" style="display:none; color: #888; margin: 1em 0; font-style: italic;">No results found.</div>

<!--
  Gallery can be forced to a single, horizontally scrollable row by adding the class 'one-row'
  to the container below: class="games-gallery one-row"
-->
<div style="max-height: 50vh; overflow-y: auto;" id="gamesScroll">
  <div id="gamesGrid" class="games-gallery">
  {% assign games = site.games | sort: 'title' %}
  {% for item in games %}
    {% assign thumb = item.url | append: 'thumb.png' %}
    <a class="game-card" href="{{ item.url }}" data-title="{{ item.title | downcase }}">
      <div class="thumb-wrap">
        <img src="{{ thumb }}"
             alt="{{ item.title }} thumbnail"
             loading="lazy"
             onerror="this.onerror=null;this.src='/assets/images/placeholder.png';" />
      </div>
      <div class="game-meta">
        <div class="game-title">{{ item.title }}</div>
      </div>
    </a>
  {% endfor %}
  

  </div>
</div>

<script src="/assets/js/gameSearch.js"></script>





