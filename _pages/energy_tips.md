---
layout: page
permalink: /tips/
title: Tips
description: Tips to reduce energy usage

nav: false
---
<script async src="{{ base.url | prepend: site.url }}/assets/js/search.js"></script>
<script async src="{{ base.url | prepend: site.url }}/assets/js/calculator.js"></script>

#### Current energy saving tips

<input type="text" onkeyup="searchFunction()" class="form-control" id="mySearch" placeholder="Search for tips...">

<div id="tipsWrapper">

{% for tip in site.data.tips %}

<div class="tipContainer" style="padding: 0.5rem">
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
</div>

{% endfor %}

<div style="display:flex; justify-content:center; align-items:center;">
    <h4> Tips Calculator </h4>
</div>

<div style="display:block; height:auto;">
    <div style="display:flex;">
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width: 50%">
            <label>Input Type: </label>
            <div class="inputField1_1">
                    <div>Euro (€):<input class="inputType" type="radio" name="option" value="euro"></div>
                    <div>Energy (kWh):<input class="inputType" type="radio" name="option" value="energy" checked></div>
            </div>
            <label for="energyInput" style="margin-top:0.5rem; margin-bottom:0 !important;"> Estimated Energy:</label>
            <input id="energyInput" type="text" onkeypress="isNumberKey(event)">
            <label for="priceInput" style="margin-top:0.5rem; margin-bottom:0 !important;"> Price (€/kWh):</label>
            <input id="priceInput" type="text" value="0.16" onkeypress="isNumberKey(event)">
            <label for="basePrice" style="margin-top:0.5rem; margin-bottom:0 !important;">Base Price:</label>
            <p id="basePrice">0 €</p>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; width: 50%">
            <label for="Select Tips">Select Tips:</label>
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%;">
                <div style="display:flex; flex-direction:row; width:100%;">
                <label style="width:75%;">Air Conditioning: </label>
                <input id="tip1" type="checkbox">
                </div>
                <div style="display:flex; flex-direction:row; width:100%;">
                <label style="width:75%;">Dishwasher: </label>
                <input id="tip2" type="checkbox" >
                </div>
                <div style="display:flex; flex-direction:row; width:100%;">
                <label style="width:75%;">Illumination: </label>
                <input id="tip3" type="checkbox" >
                </div>
                <div style="display:flex; flex-direction:row; width:100%;">
                <label style="width:75%;">Fridge: </label>
                <input id="tip4" type="checkbox" >
                </div>
            </div>
        </div>
    </div>
</div>

<hr>
<div style="display:flex; justify-content:center; align-items:center;">
<p id="showResultElement"> Final Result: 0 kWh (0 €) | Savings: 0 kWh (0 €) </p>
</div>

<div>
    <canvas id="myChart"></canvas>
</div>
