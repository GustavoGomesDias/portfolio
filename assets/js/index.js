var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  sliderPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  on: {
    slideChange: () => {
      const about = document.querySelector('.about');
      const works = document.querySelector('.works');
      if (swiper.activeIndex === 0) {
        document.documentElement.style.setProperty('--bg-color', '#0D1117');
        document.documentElement.style.setProperty('--sec-bg-color', '#161B22');
        document.documentElement.style.setProperty('--text-color', '#ed3b65');
        document.documentElement.style.setProperty('--h1-color', '#d55d92');
        document.documentElement.style.setProperty('--h2-color', '#7209b7');
        document.documentElement.style.setProperty('--button-color', '#ed3b65');
        about.style.display = 'flex';
      } else {
        about.style.display = 'none';
      }

      if (swiper.activeIndex === 1) {
        document.documentElement.style.setProperty('--bg-color', artcom[0].theme.bgColor);
        document.documentElement.style.setProperty('--sec-bg-color', artcom[0].theme.secBgColor);
        document.documentElement.style.setProperty('--text-color', artcom[0].theme.textColor);
        document.documentElement.style.setProperty('--h1-color', artcom[0].theme.h1Color);
        document.documentElement.style.setProperty('--h2-color', artcom[0].theme.h2Color);
        document.documentElement.style.setProperty('--button-color', artcom[0].theme.buttonColor);
        enterprise.innerText = artcom[0].title;
        wIframe.src = `https://www.youtube.com/embed/${artcom[0].video}`
        jobTitle.innerText = artcom[0].name;
        jobDescription.innerText = artcom[0].description;
        badges.innerHTML = artcom[0].badges;
        works.style.display = 'flex';
      } else {
        works.style.display = 'none';
      }
    },
  },
})

