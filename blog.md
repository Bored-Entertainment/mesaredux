---
layout: default
title: blog
---

# λ blog λ <a href="/feed.xml"><img src="/assets/images/rss_ani.gif"></a>

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}...</p>
  <a href="{{ post.url }}">Read more</a>
{% endfor %}
