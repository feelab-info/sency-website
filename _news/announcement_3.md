---
layout: post
title: Between June 19 and June 20, the ALAMO project was presented at CIRED 2024 in Viena, Austria.
date: 2024-06-21 00:00:00-0000
inline: false
---

Between June 19 and June 20, the ALAMO project was presented at the CIRED Workshop 2024. You can find and read the paper <a href="https://www.alspereira.info/pubs/cired-2024/" target="_blank"> here</a>.


<!-- Change the folder inbetween the '' -->
**Photos**
<div class="gallery">
  {% for image in site.static_files %}
    {% if image.path contains '/assets/post_img/announcement_3/' %}
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
