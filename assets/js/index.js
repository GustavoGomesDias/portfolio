var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  sliderPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
      el:'.swiper-pagination',
      type: 'progressbar',
  },
  on: {
    slideChange: () => {
      const about = document.querySelector('.about');
      if (swiper.activeIndex === 0) {
        about.style.display = 'flex';
      } else {
        about.style.display = 'none';
      }
    },
  },
}) 

