const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-image');
const nextButton = document.querySelector('.arrow.right');
const prevButton = document.querySelector('.arrow.left');
const fadeSlide = document.querySelector('.fade-carousel');
const fadeImages = document.querySelectorAll('.fade-image');
const fadeNextButton = document.querySelector('.arrow.right.fade');
const fadePrevButton = document.querySelector('.arrow.left.fade');
let currentIndex = 0;
let fadeIndex = 0;


function showImage(index) {
    slide.style.transform = `translateX(${-index * 100}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

setInterval(nextImage, 5000);

function showFadeImage(index) {
    fadeImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextFadeImage() {
    fadeIndex = (fadeIndex + 1) % fadeImages.length;
    showFadeImage(fadeIndex);
}

function prevFadeImage() {
    fadeIndex = (fadeIndex - 1 + fadeImages.length) % fadeImages.length;
    showFadeImage(fadeIndex);
}

fadeNextButton.addEventListener('click', nextFadeImage);
fadePrevButton.addEventListener('click', prevFadeImage);

setInterval(nextFadeImage, 5000);