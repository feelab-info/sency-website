---
layout: page
permalink: /publications/
title: Publications
description: Project related publications by categories in reversed chronological order.
years: [2021, 2020]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 style="margin-bottom:0" class="year">{{y}}</h2>
  {% bibliography -f publications -q @*[year={{y}}]* %}
{% endfor %}

</div>
