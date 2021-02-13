// FOOTER
gsap.set('section.footer-container', { yPercent: -50 })

// const uncover = gsap.timeline({ paused:true })

gsap.to('section.footer-container', {
  scrollTrigger: {
    trigger: '.content',
    start: 'bottom bottom',
    end: '+=66%',
    markers: true,
    scrub: true,
  },
  yPercent: 0,
  ease: 'none'
});


// HEADER

gsap.to('section.header-container', {
  scrollTrigger: {
    trigger: '.content',
    start: 'top bottom',
    end: '=66%',
    markers: true,
    scrub: true,
  },
  yPercent: -50,
  ease: 'none'
});
