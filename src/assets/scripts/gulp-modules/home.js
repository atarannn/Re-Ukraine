$('.section-8 .regular-text').hide();
$('.fag-card-text').on('click', function(e){
  $(this).next('.section-8 .regular-text').slideToggle();
});

const slider = new Swiper('.swiper-1', {
  loop: false,
  speed: 1000,
  spaceBetween: 20,
  width: 150,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

const slider2 = new Swiper('.swiper-2', {
  loop: false,
  speed: 1000,
  spaceBetween: 20,
  width: 320,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
