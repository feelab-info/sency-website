---
layout: post
title: During the first week of November 2024 the ALAMO project was presented in two international events in Chicago, IL, USA.
date: 2024-11-11 00:00:00-0000
inline: false
---

## @ IEEE IECON 2024 ##

On November 6, Lucas Pereira presented the paper titled **Data-Driven Approach to Predict the Consumption of Electrical Energy in Households Using Features from Non-Electric Data** in an interactive session at IECON 2024. You can find and read the paper <a href="https://www.alspereira.info/pubs/iecon-2024/" target="_blank"> here</a>.

## @ CIRED Chicago 2024 ##

On November, 7th, Lucas Pereira presented two papers at CIRED Chicago 2024. The first paper titled **Enhancing LV System Resilience through Probabilistic Forecasting of Interdependent Variables: Voltage, Reactive and Active Power**, can be found <a href="https://www.alspereira.info/pubs/cired-chicago-2024-b/" target="_blank"> here</a>. The second paper, titled **Federated Learning Forecasting for Strengthening Grid Reliability and Enabling Markets for Resilience** can be found <a href="https://www.alspereira.info/pubs/cired-chicago-2024-a/" target="_blank"> here</a>.

Together, these events hosted over 500 people during five days. Learn more about these two events at their official websites:
- <a href="https://www.iecon-2024.org/" target="_blank"> IEEE IECON 2024 </a> 
- <a href="https://cired2024chicago.org/" target="_blank"> CIRED Chicago 2024 </a>


<!-- Change the folder inbetween the '' -->
**Photos**
<div class="gallery">
  {% for image in site.static_files %}
    {% if image.path contains '/assets/post_img/announcement_4/' %}
      <div class="gallery-item">
        <img src="{{ image.path | relative_url }}" alt="{{ image.name }}" onclick="showFullscreen(this)">
      </div>
    {% endif %}
  {% endfor %}
</div>


<!-- Code for the gallery -->

<!-- Can re-use the code, just change the folder -->


<div class="fullscreen-preview">
  <button type="button" class="close-button" onclick="hideFullscreen()">
    &times;
  </button>
  <button type="button" class="nav-button left-button" onclick="navigateFullscreen(-1)">
    &lt;
  </button>
  <img src="" alt="">
  <p class="subtitle"></p> <!-- Element to display the subtitle -->
  <button type="button" class="nav-button right-button" onclick="navigateFullscreen(1)">
    &gt;
  </button>
</div>

<!-- End of the Gallery with full-screen preview -->

<br/>
<div style="width:100%; text-align:center">
<a href="#" onclick="window.history.back()">Back</a>
</div>