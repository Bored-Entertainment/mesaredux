---
layout: default
title: "home"
---

# games 

  <ul>
    {% assign directories = site.games | group_by: 'parent_dir' %}
    {% for directory in directories %}
      <li>
        <h2>{{ directory.name }}</h2>
        <ul>
          {% for item in directory.items %}
            <li><a href="{{ item.url }}">{{ item.title }}</a></li>
          {% endfor %}
        </ul>
      </li>
    {% endfor %}
  </ul>





