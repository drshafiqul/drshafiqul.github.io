---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% assign publications_by_year = site.publications | group_by_exp: "post", "post.date | date: '%Y'" | reverse %}

{% for year in publications_by_year %}
  <h2 id="{{ year.name }}" class="archive__subtitle">{{ year.name }}</h2>
  {% for post in year.items %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}