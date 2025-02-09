---
layout: post
title: Between July 11 and July 12, the ALAMO project was presented at LARSyS 2024, in Lisbon, Portugal.
date: 2024-07-12 00:00:00-0000
inline: false
---

Between July 11 and July 12, Diogo Monteiro, Herbert Amexquita, and Tomás Glória presented the ALAMO project at the LARSyS 2024 annual meeting. This event brought together over 200 researcher from the LARSyS associate laboratory.


<!-- Change the folder inbetween the '' -->
**Photos**
<div class="gallery">
  {% for image in site.static_files %}
    {% if image.path contains '/assets/post_img/announcement_3a/' %}
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
