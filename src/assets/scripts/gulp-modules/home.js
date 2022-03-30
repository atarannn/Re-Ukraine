$('.section-8 .regular-text').hide();
$('.fag-card-text').on('click', function(e){
  $(this).next('.section-8 .regular-text').slideToggle();
  $(this).find('.faq-card-icon').toggleClass('faq-card-icon-rotate');
  window.locoScroll.update();
});
window.locoScroll.update();
