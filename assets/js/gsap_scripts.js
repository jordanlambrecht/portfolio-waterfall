// For Debugging & Diagnostics
var screenobject = document.querySelector(".screeninfo");

function reportWindowSize() {
  screenobject.innerHTML = window.innerWidth + " x " + window.innerHeight;
}
window.onresize = reportWindowSize;
window.onload = reportWindowSize;

// END DEBUGGING //

// INITIALIZATION //
gsap.registerPlugin(ScrollTrigger);
// END INITIALIZATION //

var tl_sectionOne = gsap.timeline({
  scrollTrigger: {
    trigger: "#thingsChange",
    start: "top center",
    end: "+=45%",
    scrub: true,
    toggleActions: "play pause reverse restart",
  }
});
tl_sectionOne
  .from('#thingsChangeHeader', {
    opacity: 0
  })
  .from('ul.showslides li', {
    opacity: 0,
    y: -30,
    stagger: 0.2
  });

var tl_sectionOne_mobile = gsap.timeline();
tl_sectionOne_mobile
  .from('#thingsChangeHeader--mobile', {
    opacity: 0,
    ease: "power3"
  }, "here")
  .from('ul.showslides-mobile li', {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    ease: "power3"
  })
  .add("end");
// ANIMATE SECTION 04 - PIE CHART //

var tl_pieGraph = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-piegraph",
    start: "top top",
    end: "+=2000",
    scrub: 2,
    snap: {
      snapTo: "labels",
      duration: {
        min: 1,
        max: 3
      },
      delay: 0.6,
      ease: "power3"
    },
    pin: true,
  }
});

// END PIE CHART ANIMATION
// START PIE PIPELINE TIMELINE

var tl_technology_mobile = gsap.timeline();
tl_technology_mobile
  .from(".phone-wrapper .phone",{
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.333,
    ease: "back"
  }, "here")
  .add("end");

var tl_interestRates = gsap.timeline();
tl_interestRates
  .from(".timeline-block .marker", {
    duration: 1
  }, "animpause")
  .from(".timeline-block .marker", {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    ease: "back"
  }, "here")
  .from(".timeline-block .timeline-content", {
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.15,
    ease: "back"
  }, "-=.5")
  .add("end");

var tl_stockMarket =  gsap.timeline();
tl_stockMarket
  .from(".stock-card--inner .display-3", {
    duration: 1.333
  })
  .from(".stock-card--inner .display-3", {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    ease: "back"
  }, "here")
  .from(".stock-card--inner .arrow", {
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.15,
    ease: "back"
  }, "-=1")
  .from(".stock-card--inner .display-2", {
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.15,
    ease: "back"
  }, "-=1")
  .add("end");

// govt Spending
var tl_govtSpending = gsap.timeline();
tl_govtSpending
  .from(".govt-card--inner h4", {
    duration: 1.333
  }, "animpause")
  .from(".govt-card--inner h4", {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    ease: "back"
  }, "here")
  .from(".govt-card .govt-arrow", {
    duration: 0.5,
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    ease: "back"
  }, "-=0.55")
  .add("end");

var tl_piePipeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-piepipe",
    start: "top top",
    end: "+=3000",
    scrub: 2,
    snap: {
      snapTo: "labels",
      duration: {
        min: 1,
        max: 3
      },
      delay: 0.6,
      ease: "power3"
    },
    pin: true,
  }
});

tl_piePipeline
  // first
  .addLabel("first")
  .from("#pie-first svg", {
    duration: 3,
    x: -700,
    opacity: 0,
    scale: 0,
    ease: "back"
  }, "-=2")
  .from("#pie-first svg g.title", {
    duration: 0.33,
    x: -25,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .from("#pie-first svg g.text", {
    duration: 1,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .from("#moneydrop-1", {
    duration: 2,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  }, "+=1")

  // 	second
  .addLabel("second")
  .to({}, {
    duration: 2
  })

  .from("#pie-second svg", {
    duration: 3,
    x: -700,
    opacity: 0,
    scale: 0,
    ease: "back"
  })
  .from("#pie-second svg g.title ", {
    duration: 0.33,
    x: -25,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .from("#pie-second svg g.text", {
    duration: 0.33,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .to("#moneydrop-1", {
    duration: 1,
    y: 150,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .from("#moneydrop-2", {
    duration: 2,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })

  // 	Third
  .addLabel("third")
  .to({}, {
    duration: 2
  })

  .from("#pie-third svg", {
    duration: 3,
    x: -700,
    opacity: 0,
    scale: 0,
    ease: "back"
  })
  .from("#pie-third svg g.title ", {
    duration: 0.33,
    x: -25,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .from("#pie-third svg g.text", {
    duration: 0.33,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .to("#moneydrop-2", {
    duration: 1,
    y: 150,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .from("#moneydrop-3", {
    duration: 2,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })

  // fourth
  .addLabel("fourth")
  .to({}, {
    duration: 2
  })

  .from("#pie-fourth svg", {
    duration: 3,
    x: -700,
    opacity: 0,
    scale: 0,
    ease: "back"
  })
  .from("#pie-fourth svg g.title ", {
    duration: 0.33,
    x: -25,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .from("#pie-fourth svg g.text ", {
    duration: 0.33,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .to("#moneydrop-3", {
    duration: 1,
    y: 150,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  }, "+=1")
  .from("#moneydrop-4", {
    duration: 2,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })

  // fifth
  .addLabel("fifth")
  .to({}, {
    duration: 2
  })

  .from("#pie-fifth svg", {
    duration: 3,
    y: 50,
    opacity: 0,
    ease: "back"
  })
  .from("#pie-fifth svg g.title", {
    duration: 0.33,
    x: -25,
    opacity: 0,
    scale: 0,
    ease: "ease"
  }, "+=2")
  .to("#moneydrop-4", {
    duration: 2,
    y: 150,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  }, "+=3")

  // final
  .addLabel("final")
  .from("#moneydrop-5", {
    duration: 1,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  }, "+=1")
  .to({}, {
    duration: 2
  })
  .to("#moneydrop-5", {
    duration: 2,
    y: 150,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  }, "+=3")
  .addLabel("endofstory")
  .to({}, {
    duration: 2
  });
// END PIE PIPELINE TIMELINE


tl_pieGraph.addLabel("piegraph--begin")
  .from("svg#piegraph g", {
    duration: 1.66,
    opacity: 0,
    scale: 0,
    stagger: 0.3,
    ease: "back"
  } )

  .addLabel("piegraph--labels")

  .from("svg#piegraph--label g", {
    duration: 1.66,
    opacity: 0,
    scale: 0,
    stagger: 1,
    ease: "back"
  }, "+=3")

  .addLabel("piegraph--finished")
  .to({}, {
    duration: 12
  })

  .to("svg#piegraph g", {
    duration: 1.66,
    opacity: 0,
    scale: 0,
    stagger: 0.3,
    ease: "back"
  })

  .to("svg#piegraph--label g", {
    duration: 3,
    opacity: 0,
    scale: 0,
    stagger: 0.3,
    ease: "back"
  }, "<")

  .addLabel("piegraph--end");

// END PIEGRAPH TIMELINE
// END SECTION 04 - PIE CHART //

// ANIMATE FOOTER WAVES //

var tlCheckBounce = new TimelineMax({
  repeat: -1
});



tlCheckBounce
  .to(".gsap--hover", 1, {})
  .to(".gsap--hover", 4, {
    y: '-=20',
    rotation: '+=2.33',
    ease: Sine.easeInOut
  })
  .to(".gsap--hover", 1, {})
  .to(".gsap--hover", 4, {
    y: '+=20',
    rotation: '0',
    ease: Power1.easeInOut
  })
  .to(".gsap--hover", 1, {})
  .to(".gsap--hover", 4, {
    y: '-=20',
    rotation: '-=2.33',
    ease: Sine.easeInOut
  })
  .to(".gsap--hover", 1, {})
  .to(".gsap--hover", 4, {
    y: '+=20',
    rotation: '0',
    ease: Power1.easeInOut
  });

// END FOOTER WAVES //

// HEADER //

gsap.timeline({
    scrollTrigger: {
      trigger: '.section.header-container',
      start: 'top center',
      end: '+=66%',
      markers: true,

    }
  })
  .set('#landing-logo', {
    opacity: 0,
    yPercent: -25
  })
  .set('#landing-tagline', {
    opacity: 0,
    yPercent: -25
  })
  .set('.scroll-down', {
    opacity: 0,
    yPercent: 25
  })
  .to('#landing-logo', {
    duration: 1,
    opacity: 1,
    yPercent: 0,
    ease: 'power3.inout'
  }, 0)
  .to('#landing-tagline', {
    duration: 1,
    opacity: 1,
    yPercent: 1,
    ease: 'power3.inOut'
  }, "-=.25")
  .to('.scroll-down', {
    duration: 1,
    yPercent: 0,
    opacity: 1,
    ease: 'power3.inOut'
  }, "-=.5");

var tl_header = gsap.timeline({
    scrollTrigger: {
      trigger: '.content',
      start: 'top bottom',
      end: '+=66%',
      scrub: true
    }
  });
tl_header
  .to('section.header-container', {
    duration: 10,
    yPercent: -50,
    ease: 'none'
  }, 0)

  .fromTo('#landing-logo', {
    opacity: 1,
    scale: 1,
    yPercent: 0,
    ease: 'power3.inOut'
  }, {
    duration: 9,
    opacity: 0,
    scale: 0.95,
    yPercent: 25,
    ease: 'power3.inOut'
  }, "-=9")
  .fromTo('#landing-tagline', {
    duration: 8,
    scale: 1,
    opacity: 1,
    yPercent: 0,
    ease: 'power3.inOut'
  }, {
    duration: 8,
    scale: 0.9,
    yPercent: 25,
    opacity: 0,
    ease: 'power3.inOut'
  }, "-=8")
  .fromTo('.scroll-down', {
    duration: 4,
    yPercent: 0,
    opacity: 1,
    ease: 'power3.inOut'
  }, {
    duration: 4,
    yPercent: -55,
    opacity: 0,
    ease: 'power3.inOut'
  }, "-=9");

// END HEADER //

// FOOTER //

gsap.set('section.footer-container', {
  yPercent: -50
});

// const uncover = gsap.timeline({ paused:true })
gsap.timeline({
    scrollTrigger: {
      trigger: '.content',
      start: 'bottom bottom',
      end: '+=66%',
      scrub: true
    }
  })
  .to('section.footer-container', {
    duration: 10,
    yPercent: 0,
    ease: 'none'
  }, 0)
  .from('.footer-content', {
    duration: 4,
    opacity: 0,
    ease: 'back.inOut'
  }, "+=2")
  .from('.footer-card', {
    duration: 2,
    opacity: 0,
    ease: 'back.inOut'
  }, "=-.25")
  .from('.footer-icon-outer', {
    duration: 2,
    stagger: 0.2,
    yPercent: 25,
    opacity: 0,
    ease: 'back.inOut'
  }, "-=.25");

// END FOOTER //
