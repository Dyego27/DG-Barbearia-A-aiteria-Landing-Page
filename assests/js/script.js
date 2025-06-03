const iconMenu = document.querySelector(".mobile-menu-icon button");
const menuMobile = document.querySelector(".mobile-menu");
const openMenuIcon = document.querySelector(".open-menu");
const closeMenuIcon = document.querySelector(".close-menu");

const menuShow = () => {
  menuMobile.classList.toggle("active");
  openMenuIcon.classList.toggle("hide");
  closeMenuIcon.classList.toggle("show");
};

let slideIndex = 1;
showSlides(slideIndex);

// Avança/retrocede os slides
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Define o slide atual
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-img");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active");

  if (dots.length > 0) {
    dots[slideIndex - 1].classList.add("active");
  }
}
