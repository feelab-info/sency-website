
const gallery = document.querySelector('.gallery');

if(gallery) {

let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-item img');
const fullscreenPreview = document.querySelector('.fullscreen-preview');
const img = fullscreenPreview.querySelector('img');

function showFullscreen(imageElement) {
  currentImageIndex = Array.from(galleryImages).indexOf(imageElement);
  updateFullscreenImage();
  fullscreenPreview.classList.add('show-fullscreen');

  // Extract the subtitle from the image name
  const imageName = imageElement.getAttribute('alt');
  const subtitle = extractSubtitle(imageName);
  updateSubtitle(subtitle);
}

// Function to extract the subtitle from the image name
function extractSubtitle(imageName) {
  // Assuming the image name follows the pattern "name_subtitle.extension"
  const parts = imageName.split('_');
  if (parts.length > 1) {
    return parts[1].split('.')[0]; // Remove the extension
  }
  return '';
}

// Function to update the subtitle in the fullscreen preview
function updateSubtitle(subtitle) {
  const subtitleElement = fullscreenPreview.querySelector('.subtitle');
  subtitleElement.textContent = subtitle;
}

function hideFullscreen() {
  fullscreenPreview.classList.remove('show-fullscreen');
}

function navigateFullscreen(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  } else if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }
  updateFullscreenImage();

  // Extract the subtitle from the new image name
  const imageElement = galleryImages[currentImageIndex];
  const imageName = imageElement.getAttribute('alt');
  const subtitle = extractSubtitle(imageName);
  updateSubtitle(subtitle);
}

function updateFullscreenImage() {
  const imageUrl = galleryImages[currentImageIndex].src;
  img.src = imageUrl;
}

}
