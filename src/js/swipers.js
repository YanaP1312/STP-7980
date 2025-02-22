import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.wrap-for-btn').forEach(swiperContainer => {
    const swiperType = swiperContainer.dataset.swiper;
    const swiperElement = swiperContainer.querySelector('.swiper');
    let swiperOptions = {
      modules: [Navigation, Pagination, Keyboard],
      slidesPerView: 1,
      loop: false,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
      grabCursor: true,
      touchRatio: 1,
      simulateTouch: true,
      touchAngle: 60,
      threshold: 5,

      pagination: {
        el: swiperContainer.querySelector('.swiper-pagination'),
        clickable: true,
      },

      navigation: {
        nextEl: swiperContainer.querySelector('.swiper-button-next'),
        prevEl: swiperContainer.querySelector('.swiper-button-prev'),
      },

      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    };

    if (swiperType === 'reviews') {
      swiperOptions.breakpoints = {
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      };
    }

    if (swiperType === 'gallery') {
      swiperOptions.slidesPerView = 1;
      swiperOptions.loop = false;
    }

    const swiperInstance = new Swiper(swiperElement, swiperOptions);

    swiperContainer.addEventListener('mouseenter', () => {
      swiperInstance.keyboard.enable();
    });

    swiperContainer.addEventListener('mouseleave', () => {
      swiperInstance.keyboard.disable();
    });

    swiperContainer.addEventListener('focusin', () => {
      swiperInstance.keyboard.enable();
    });

    swiperContainer.addEventListener('focusout', () => {
      swiperInstance.keyboard.disable();
    });
  });
});
