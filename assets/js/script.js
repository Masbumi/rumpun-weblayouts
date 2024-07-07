const toggleButton = document.querySelector('.button-toggle');
const menuColumn = document.querySelector('.menu-column ul');

toggleButton.addEventListener('click', () => {
  // Toggle the display property of the menu
  menuColumn.style.display = menuColumn.style.display === 'flex' ? 'none' : 'flex';
});

const images = [
    "assets/img/photo-about.jpeg",
    "assets/img/photo-about-1.jpeg",
    // Add more image paths here
];
let currentImageIndex = 0;

const imageSlider = document.getElementById("image-slider");

function changeImage() {
    imageSlider.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 3000); 