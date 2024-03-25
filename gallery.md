---
layout: base
title: Gallery
permalink: /gallery/
---

<div class="gallery-container">
  {% for image in site.data.gallery %}
    <div class="gallery-item">
      <img src="{{ image.url }}" alt="{{ image.caption }}">
      <p>{{ image.caption }}</p>
    </div>
  {% endfor %}
</div>
<button id="grid-view">Grid View</button>
<button id="horizontal-scroll-view">Horizontal Scroll</button>
<button id="vertical-scroll-view">Vertical Scroll</button>
