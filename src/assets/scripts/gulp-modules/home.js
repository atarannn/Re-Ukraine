$('.section-8 .regular-text').hide();
$('.fag-card-text').on('click', function(e){
  $(this).next('.section-8 .regular-text').slideToggle();
});

const slider = new Swiper('.swiper', {
  loop: false,
  speed: 1000,
  spaceBetween: 20,
  width: 320,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
