$('.section-8 .regular-text').hide();
$('.fag-card-text').on('click', function(e){
  $(this).next('.section-8 .regular-text').slideToggle();
  $(this).find('.faq-card-icon').toggleClass('faq-card-icon-rotate');
});

const slider = new Swiper('.partner-swiper', {
  loop: false,
  slidesPerView: 1.4,
  spaceBetween: 40,
  navigation: {
    nextEl: document.querySelector('[data-next]'),
    prevEl: document.querySelector('[data-prev]'),
  },
  preloadImages: false,
  lazy: true,
  speed: 400,
  watchSlidesVisibility: true,
});

