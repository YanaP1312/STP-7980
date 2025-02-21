const closeMobMenuBtn = document.querySelector('.btn-mob-close');
const mobMenu = document.querySelector('.mob-menu');
const openMobMenuBtn = document.querySelector('.btn-mob-open');
const linkNav = document.querySelectorAll('.nav-link');

const openMobMenu = () => {
  mobMenu.classList.add('is-open');
};
const closeMobMenu = () => {
  mobMenu.classList.remove('is-open');
  openMobMenuBtn.blur();
};

openMobMenuBtn.addEventListener('click', openMobMenu);
closeMobMenuBtn.addEventListener('click', closeMobMenu);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMobMenu();
  }
});
linkNav.forEach(link => {
  link.addEventListener('click', closeMobMenu);
});

document.addEventListener('click', e => {
  if (!e.target.closest('.mob-menu') && !e.target.closest('.btn-mob-open')) {
    closeMobMenu();
  }
});
