const artcom = [{
  id: 0,
  video: 'CG64qH09SFc',
  title: 'Artcom (10/2021 - 8/2022)',
  name: 'Artcom',
  description: 'Site feito para a empresa Artcom. Ele também conta com um backend, pois existe uma dashboard onde se pode controlar tanto as postagens do blog, quanto as próprias campanhas espalhadas pelo site. O site conta, inclusive, com login personalizado por email da empresa, usando Auth0. Link: https://www.artcom.com.br/',
  badges: `<img alt="CSS3"
  src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
<img alt="JavaScript"
  src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
<img alt="TypeScript"
  src="https://img.shields.io/badge/typescript-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white" />
<img alt="React"
  src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img alt="NextJs"
  src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" /> <img
  alt="NodeJS"
  src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" /> <img alt="DigitalOcean"
  src="https://img.shields.io/badge/Digital Ocean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white" />`,
  theme: {
    textColor: '#030303',
    h1Color: '#F4B328',
    h2Color: '#3B7B7B',
    bgColor: '#FFFFFF',
    secBgColor: '#FBD637',
    buttonColor: '#FBD637',
  },
}, {
  id: 2,
  video: 'D1S-4n7P2RM',
  title: 'Artcom (10/2021 - 8/2022)',
  name: 'Atelier do Chá',
  description: 'Este site também contém um backend simples, para adicionar mais produtos na home. Ele conta com um login criado por mim, sendo que as contas para entrar neste site só podem ser criadas por um administrador. Link: https://atelierdocha.com/',
  badges: `<img alt="CSS3"
  src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
<img alt="JavaScript"
  src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
<img alt="TypeScript"
  src="https://img.shields.io/badge/typescript-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white" />
<img alt="React"
  src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img alt="NextJs"
  src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" /> <img
  alt="NodeJS"
  src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" /> <img alt="DigitalOcean"
  src="https://img.shields.io/badge/Digital Ocean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white" />`,
  theme: {
    textColor: '#000',
    h1Color: '#fff',
    h2Color: '#fff',
    bgColor: '#5B7300 ',
    secBgColor: '#6B5F00',
    buttonColor: '#42510B',
  },
}, {
  id: 1,
  video: 'W0sFnwEnZLA',
  title: 'Artcom (10/2021 - 8/2022)',
  name: 'FullTime Filmes',
  description: 'Site de uma produtora de filmes, sendo ele uma única página. Foi o último trabalho que eu fiz na Artcom. Link: https://fulltimefilmes.com.br/',
  badges: `<img alt="HTML5"
  src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
<img alt="CSS3"
  src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
<img alt="JavaScript"
  src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" /> <img alt="DigitalOcean"
  src="https://img.shields.io/badge/Digital Ocean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white" />`,
  theme: {
    textColor: '#000',
    h1Color: '#000000',
    h2Color: '#BA3D1B',
    bgColor: '#FFFFFF ',
    secBgColor: '#E54D24',
    buttonColor: '#E54D24',
  },
}];

const enterprise = document.querySelector('.enterprise');
const wIframe = document.querySelector('.work-iframe');
const workDescritption = document.querySelector('.work-description');
const badges = document.querySelector('.badges');

const jobs = document.querySelector('.jobs');
const jobTitle = document.createElement('h2');
const jobDescription = document.createElement('p');
jobDescription.classList.add('job-description');

workDescritption.appendChild(jobTitle);
workDescritption.appendChild(jobDescription);

const makeJob = (item) => {
  document.documentElement.style.setProperty('--bg-color', item.theme.bgColor);
  document.documentElement.style.setProperty('--sec-bg-color', item.theme.secBgColor);
  document.documentElement.style.setProperty('--text-color', item.theme.textColor);
  document.documentElement.style.setProperty('--h1-color', item.theme.h1Color);
  document.documentElement.style.setProperty('--h2-color', item.theme.h2Color);
  document.documentElement.style.setProperty('--button-color', item.theme.buttonColor);

  enterprise.innerText = item.title;
  wIframe.src = `https://www.youtube.com/embed/${item.video}`
  jobTitle.innerText = item.name;
  jobDescription.innerText = item.description;
  badges.innerHTML = item.badges;

}

const artcomDiv = document.querySelector('.artcom');
const cedisaDiv = document.querySelector('.cedisa');

artcomDiv.addEventListener('click', () => {

  jobs.innerHTML = '';
  for (const item of artcom) {
    const span = document.createElement('span');
  
    span.classList.add('job');
    span.innerText = item.name;
  
    span.addEventListener('click', () => {
      makeJob(item);
    });
  
    jobs.appendChild(span);
  }
})

for (const item of artcom) {
  const span = document.createElement('span');

  span.classList.add('job');
  span.innerText = item.name;

  span.addEventListener('click', () => {
    makeJob(item);
  });

  jobs.appendChild(span);
}
