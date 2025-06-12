let currentIndex = 0;
const slides = document.querySelector("#slides");
const totalSlides = document.querySelectorAll("#slides img").length;

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

let slideInterval = setInterval(nextSlide, 3000);

function resetAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");          // Correct class toggle for menu
  document.body.classList.toggle("menu-open"); // Controls slider arrow hiding
});
