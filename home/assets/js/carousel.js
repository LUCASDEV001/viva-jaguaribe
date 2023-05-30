const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 100,
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  parallax: true,
  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


