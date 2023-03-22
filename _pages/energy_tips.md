---
layout: page
permalink: /tips/
title: Tips
description: Tips to reduce energy usage

nav: true
---

#### Current energy saving tips

{% for tip in site.data.tips %}

<div class="clearfix" id = "{{tip.name | replace: ' ', '-'}}" style="padding-top: 60px; margin-top: -60px;">
    <img style="border:1px solid; float: left; width: 33%; margin-right: 20px;" src="{{ tip.image | prepend: '/assets/img/' | prepend: site.baseurl | prepend: site.url }}" alt="photo of {{tip.name}}">
    <div style="height: 35px">
        <h3>{{tip.name}}</h3>
        {{tip.position}} <br>
    </div>
    <div class="col-sm-12" style="padding:0">
        <p class="text-justify">{{tip.description | markdownify | newline_to_br}}</p>
    </div>
</div>
<hr>

{% endfor %}
