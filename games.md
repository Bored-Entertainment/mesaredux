---
layout: default
title: "home"
---

# games 
  <ul>
    {% assign game_dir = '/game/' %}
    {% for game in fs.glob(game_dir + '**/*', { recursive: true }) %}
      {% if game.end_with?('.md') == false %}
        <li>{{ game.split('/').last }}</li>
      {% endif %}
    {% endfor %}
  </ul>