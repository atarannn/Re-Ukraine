
function menuOpen() {
  menuOpenAnim();
}

function menuClose() {
  menuCloseAnim();
}

function menuOpenAnim(evt, reverseArg) {
  const menu = document.querySelector('[data-menu]');
  const menuClose = document.querySelector('[data-close-menu]');
  if (menu === null) return;
  const tl = gsap.timeline({ paused: true });
  tl.add(() => {
    menu.classList.add('active');
  });
  tl.fromTo(menu,{x: 700},{x: 0, duration: 0.5, clearProps: 'all' }, '<');
  tl.fromTo(menuClose, {autoAlpha: 0},{autoAlpha: 1, delay: 0.5, duration: 0.5 }, '<');
  tl.play();
}

function menuCloseAnim(evt, reverseArg) {
  const menu = document.querySelector('[data-menu]');
  const menuClose = document.querySelector('[data-close-menu]');
  if(menu === null) return;
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(menuClose, {autoAlpha: 1},{autoAlpha: 0, duration: 0.5 }, '<');
  tl.fromTo(menu, {x: 0},{x: 700, delay: 0.5, duration: 0.5 }, '<');
  tl.add(() => {
    menu.classList.remove('active');
  });
  tl.play();
}

function menuInit() {
  const menu = document.querySelector('[data-menu]');
  document.querySelector('[data-open-menu]').addEventListener('click', () => menuOpen(menu));
  document.querySelector('[data-close-menu]').addEventListener('click', () => menuClose(menu));
}

function init() {
  menuInit();
}

window.addEventListener('DOMContentLoaded', init);
