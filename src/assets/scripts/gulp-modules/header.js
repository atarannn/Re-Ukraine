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

function formOpen() {
  formOpenAnim();
}

function formClose() {
  formCloseAnim();
}

function formOpenAnim(evt, reverseArg) {
  const form = document.querySelector('[data-form]');
  if (form === null) return;
  const tl = gsap.timeline({ paused: true });
  tl.add(() => {
    form.classList.add('active');
  });
  tl.fromTo(form,{autoAlpha: 0},{autoAlpha: 1, duration: 0.4, clearProps: 'all' }, '<');
  tl.play();
}

function formCloseAnim(evt, reverseArg) {
  const form = document.querySelector('[data-form]');
  if(form === null) return;
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(form, {autoAlpha: 1},{autoAlpha: 0, duration: 0.4 }, '<');
  tl.add(() => {
    form.classList.remove('active');
  });
  tl.play();
}

function formInit() {
  const form = document.querySelector('[data-form]');
  document.querySelectorAll('[data-open-form]').forEach(el => {
    el.addEventListener('click', () => formOpen(form));
  });
  document.querySelector('[data-close-form]').addEventListener('click', () => formClose(form));
}

function init() {
  menuInit();
  formInit();
}

window.addEventListener('DOMContentLoaded', init);
