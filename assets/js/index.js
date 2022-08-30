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
      const contactSec = document.querySelector('.contact');
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
        document.documentElement.style.setProperty('--bg-color', workList[0].theme.bgColor);
        document.documentElement.style.setProperty('--sec-bg-color', workList[0].theme.secBgColor);
        document.documentElement.style.setProperty('--text-color', workList[0].theme.textColor);
        document.documentElement.style.setProperty('--h1-color', workList[0].theme.h1Color);
        document.documentElement.style.setProperty('--h2-color', workList[0].theme.h2Color);
        document.documentElement.style.setProperty('--button-color', workList[0].theme.buttonColor);
        enterprise.innerText = workList[0].title;
        wIframe.src = `https://www.youtube.com/embed/${workList[0].video}`
        jobTitle.innerText = workList[0].name;
        jobDescription.innerText = workList[0].description;
        badges.innerHTML = workList[0].badges;
        works.style.display = 'flex';
      } else {
        works.style.display = 'none';
      }

      if (swiper.activeIndex === 2) {
        document.documentElement.style.setProperty('--bg-color', '#22223b');
        document.documentElement.style.setProperty('--sec-bg-color', '#4a4e69');
        document.documentElement.style.setProperty('--text-color', '#9a8c98');
        document.documentElement.style.setProperty('--h1-color', '#c9ada7');
        document.documentElement.style.setProperty('--h2-color', '#f2e9e4');
        document.documentElement.style.setProperty('--button-color', '#9a8c98');
        contactSec.style.display = 'flex';
      } else {
        contactSec.style.display = 'none';
      }
    },
  },
})

window.addEventListener(
  "keydown",
  (e) => {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
        e.code
      )
    ) {
      e.preventDefault();
    }
  },
  false
);

