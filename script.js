// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Slider
let currentIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.querySelectorAll("img").length;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}vw)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

document.getElementById("next").addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

let slideInterval = setInterval(nextSlide, 4000);

function resetAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
}
