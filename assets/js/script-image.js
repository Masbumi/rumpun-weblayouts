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