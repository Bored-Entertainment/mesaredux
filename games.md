---
layout: default
title: "games"
header: "* GAMES: *"
---

<input type="text" id="gameSearch" placeholder="search games">
<div id="noResults" style="display:none; color: #888; margin: 1em 0; font-style: italic;">No results found.</div>
<ul id="gamesList">
  {% assign directories = site.games | group_by: 'parent_dir' %}
  {% for directory in directories %}
    <li class="directory">
      <ul>
        {% for item in directory.items %}
          <li class="game-item">
            <a href="{{ item.url }}">{{ item.title }}</a><br>
              <!-- <img src="{{ item.url | append: '/thumb.png' }}" alt="{{ item.title }} thumbnail" style="max-width:120px; max-height:90px; margin-top:4px; display:block;"> -->
          </li>
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>
<script src="/assets/js/gameSearch.js"></script>





