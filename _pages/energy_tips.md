---
layout: page
permalink: /tips/
title: Tips
description: Tips to reduce energy usage

nav: true
---
<script async src="{{ base.url | prepend: site.url }}/assets/js/search.js"></script>


#### Current energy saving tips

<!-- <input type="text" onkeyup="searchFunction()" class="form-control" id="mySearch" placeholder="Search for tips..."> -->


<div id="tipsWrapper">

{% for tip in site.data.tips %}

<div class="tipContainer" style="height: 200px; padding: 0.5rem">
    <div style="display:flex">
        <div style="display: flex; width: 30%; justify-content: center; align-items: center;">
            <img style="border:1px solid; float: left; width: 75%; margin-right: 20px;" src="{{ tip.image | prepend: '/assets/img/' | prepend: site.baseurl | prepend: site.url }}" alt="photo of {{tip.name}}">
        </div>
        <div style="display: flex; flex-direction: column;justify-content: center; width: 70%">
            <h3 class="tipTitle">{{tip.name}}</h3>
            <h6>{{tip.brief}}</h6>
            <button type="button" class="btn btn-default btn-sm" data-toggle="collapse" data-target="#collapse{{ tip.id }}">
            View more...
            </button>
        </div>
    </div>
    <div class="collapse" id="collapse{{ tip.id }}" style="padding: 0.5rem; margin: auto; width: 95%; position: center">
        <div class="card bg-dark text-white card-body">
        {{tip.description}}
        </div>
    </div>
    <hr>
<div>

{% endfor %}

</div>
