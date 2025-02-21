import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Keyboard],
    slidesPerView: 1,
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: false,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 32,
        navigation: {
          enabled: true,
        },
      },
    },
  });

  const reviewsSection = document.querySelector('.swiper');
  reviewsSection.addEventListener('touchstart', function (event) {
    event.stopPropagation();
  });
  reviewsSection.addEventListener('touchmove', function (event) {
    event.stopPropagation();
  });
  reviewsSection.addEventListener('touchend', function (event) {
    event.stopPropagation();
  });
});
