var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  
const scroll = new LocomotiveScroll({
  el: document.querySelector('body'),
  smooth: true
});