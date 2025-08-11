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

function plusSlides(n) {
  showSlides((slideIndex += n));
}

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

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});

//loading screen

window.addEventListener("load", function () {
  const loaderContainer = document.getElementById("loader-container");
  const content = document.getElementById("content");

  loaderContainer.style.display = "none";

  content.style.display = "block";
});
