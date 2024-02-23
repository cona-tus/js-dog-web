// slide-show swiper
const mainSwiper = new Swiper('.slideshow-swiper', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 0,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.slideshow-swiper-btn--next',
    prevEl: '.slideshow-swiper-btn--prev',
  },
});

let titleAnimation = anime({
  targets: '.slideshow-swiper-slide-text__title',
  translateY: [30, 0],
  duration: 500,
  opacity: [0, 1],
  easing: 'easeInOutQuad',
});

let descAnimation = anime({
  targets: '.slideshow-swiper-slide-text__desc',
  translateY: [30, 0],
  duration: 500,
  opacity: [0, 1],
  delay: 300,
  easing: 'easeInOutQuad',
});

let btnAnimation = anime({
  targets: '.slideshow-swiper-slide-text__btn',
  translateX: [-30, 0],
  duration: 500,
  opacity: [0, 1],
  delay: 500,
  easing: 'easeInOutQuad',
});

mainSwiper.on('slideChange', function () {
  titleAnimation.restart();
  descAnimation.restart();
  btnAnimation.restart();
});

// testimonial swiper
const testimonialSwiper = new Swiper('.testimonial-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  centeredSlides: true,
  breakpoints: {
    912: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
