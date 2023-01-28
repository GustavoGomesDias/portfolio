const tecs = {
  1: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  2: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
  3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
  4: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  6: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg',
  7: '/assets/images/logo/logo.svg',
}

function randomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

const tecImg = document.querySelector('.tec-img');