function homeAnimationAdditional() {
  const addIntersectionOnceWithCallback = (el, cb = () => {}, config = {}) => {
    const image = el;
    const target = image;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          cb();
          observer.unobserve(target);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1,
      ...config
    });
    observer.observe(target);
  }
  function splitToLinesAndFadeUp(selector, $scroller) {
    document.querySelectorAll(selector).forEach(text => {
      let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      if (mathM === null) return;
      mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
      text.innerHTML = mathM.join(' ');

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            // scroller: $scroller ? $scroller : null,
            trigger: text,
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100, start: '-100% top', },
          { yPercent: 0,  stagger: 0.1, duration: 2, end: '100% top', ease: 'power4.out' },
        );
      addIntersectionOnceWithCallback(text, () => {
        tl.play();
      })
    });
  }

  splitToLinesAndFadeUp('.section-1-title, .section-1-text-block-top .white-text, .section-2 .white-title, .section-4 .white-title, .section-6 .white-title, .section-8 .white-title, .class-page-partners .white-title, .class-page-about .white-title, .about-section-4 .yellow-title, .about-section-2-title');

  const paralaxImages = document.querySelectorAll('.section-1-img1 img, .section-1-img2 img,  .section-1-img3 img, .section-3-img-wrapper img, .section-9-img img');
  paralaxImages.forEach((image) => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: image,
        },
      })
      .fromTo(
        image,
        {
          scale: 1.1,
          y: 10,
          transition: 1,
        },
        {
          y: -10,
          transition: 1,
        },
      );
    return tl;
  });
}

homeAnimationAdditional();
