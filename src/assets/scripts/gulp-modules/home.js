const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$('.section-8 .regular-text').hide();
$('.fag-card-text').on('click', function(e){
  $(this).next('.section-8 .regular-text').slideToggle();
  $(this).find('.faq-card-icon').toggleClass('faq-card-icon-rotate');
});

function copy(el) {
  var $tmp = $("<textarea>");
  $("body").append($tmp);
  $tmp.val($(el).text()).select();
  document.execCommand("copy");
  $tmp.remove();
  alert("success!");
}

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
