---
layout: page
permalink: /publications/
title: Publications
description: Project related publications and theses by categories in reversed chronological order.
years: [2025, 2024]
nav: false
yearst: [2024]
---

<div class="publications">

{% for y in page.years %}
  <h2 style="margin-bottom:0" class="year">{{y}}</h2>
  {% bibliography -f publications -q @*[year={{y}}]* %}
{% endfor %}

</div>


#### Theses

<div class=publications>

{% for y in page.yearst %}
  <h2 style="margin-bottom:0" class="year">{{y}}</h2>
  {% bibliography -f theses -q @*[year={{y}}]* %}
{% endfor %}

</div>