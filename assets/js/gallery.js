function showFullscreen(imageElement) {
  const fullscreenPreview = document.querySelector('.fullscreen-preview');
  const img = fullscreenPreview.querySelector('img');
  img.src = imageElement.src;
  fullscreenPreview.classList.add('show-fullscreen');
}

function hideFullscreen() {
  const fullscreenPreview = document.querySelector('.fullscreen-preview');
  fullscreenPreview.classList.remove('show-fullscreen');
}
