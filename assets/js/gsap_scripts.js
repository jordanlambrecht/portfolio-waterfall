/*jshint esversion: 6 */



// INITIALIZATION //
gsap.registerPlugin(ScrollTrigger);
// END INITIALIZATION //









// REGISTER EFFECTS
const gsapEffects = [
  {
    id: "slideIn",
    animate: 'from',
    props: {
      opacity: 0,
      scale: 1.022,
      yPercent: 16,
      ease: "back",
      yoyo: false,
      repeat: 0
    }
  },
  {
    id: "slideUp",
    animate: 'from',
    props: {
      opacity: 0,
      scale: 1.066,
      xPercent: 16,
      ease: "power3",
      yoyo: false,
      repeat: 0
    }
  },
  {
    id: "fade",
    animate: 'from',
    props: {
      opacity: 0,
      ease: "power3",
      yoyo: false,
      repeat: 0
    }
  },
  {
    id: "scaleUpFadeIn",
    animate: 'from',
    props: {
      opacity: 0,
      scale: 0,
      ease: "power1.inOut",
      yoyo: false,
      repeat: 0
    }
  }
];
gsapEffects.forEach(effect => {
  gsap.registerEffect({
    name: effect.id,
    defaults: { duration: 1 },
    extendTimeline: true,
    effect(targets, config) {
      if(effect.animate === 'from'){
        return gsap.from(targets, {...effect.props,...config })
      }
      else if (effect.animate === 'fromTo'){
        return gsap.fromTo(targets, {...effect.props,...config }, {...effect.props2})
        }
      else {
        return gsap.to(targets, {...effect.props,...config })
      }
    }
  });
});

// Splash Animation

const splashCanvas = document.getElementById("hero-lightpass");
const sContext = splashCanvas.getContext("2d");

splashCanvas.width = 856*2;
splashCanvas.height = 250*2;

const splashFrameCount = 12;
const splashCurrentFrame = index => (
  `./assets/PW_splash_${(index + 1).toString().padStart(2, '0')}.svg`
);

const splashImages = []
const splash = {
  frame: 0
};

for (let i = 0; i < splashFrameCount; i++) {
  const splashImg = new Image();
  splashImg.src = splashCurrentFrame(i);
  splashImages.push(splashImg);
  console.log(splashImg.src);
}

const splash_tl = gsap.timeline({ paused: true, })
.add("splashStart")
.to(splash, {
  frame: splashFrameCount - 1,
  snap: "frame",
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
})
.add("splashEnd");

splashImages[0].onload = render;

function render() {
  sContext.clearRect(0, 0, splashCanvas.width, splashCanvas.height);
  sContext.drawImage(splashImages[splash.frame], 0, 0);
}
// End Splash Animation

//
// let h1 = document.querySelector("h1"),
//     hover = gsap.to(h1, {scale: 1.12, color: "blue", duration: 1.5, paused: true, ease: "power1.inOut"});
//
// h1.addEventListener("mouseenter", () => hover.play());
// h1.addEventListener("mouseleave", () => hover.reverse());

const sectionMenu_tl = gsap.timeline();
sectionMenu_tl
  .add("start")
  .from("#sectionMenu ul li a span", {
    duration: .22,
    stagger: 0.11,
    xPercent: 100,
    opacity: 0,
    ease: 'back'
  }, "+=1")
  .add("end");
// HEADER //
sectionMenu_tl.play();
const header_tl_onload = gsap.timeline();
header_tl_onload
  .add("start")
  .set("#landing-logo", { yPercent: -25, opacity:0} , -1)
  .set('#landing-tagline', { yPercent: -15, opacity: 0 }, -1)
  .set('.scroll-down', { yPercent: -50, opacity: 0 }, -1)
  .to('#landing-logo', {
    duration: 1,
    opacity: 1,
    yPercent: 0,
  }, "+=1")
  .to('#landing-tagline', {
    duration: 1,
    opacity: 1,
    yPercent: 0,
    ease: 'power3.inOut'
  })
  .to('.scroll-down', {
    duration: 1,
    yPercent: 0,
    opacity: 1,
    ease: 'power3.inOut'
  }, "-=.5")
  .add("end");
  // .set('#landing-tagline', {
  //   opacity: 0,
  //   yPercent: -25
  // })
  // .set('.scroll-down', {
  //   opacity: 0,
  //   yPercent: 25
  // })



let tl_header = gsap.timeline({

    paused: true,
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
  .add("withoutScroll")
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
// tl_header.reverse("withoutScroll");
// END HEADER //

// What Limits Mobile animations
var tl_sectionTwo_whatLimits = gsap.timeline({
  scrollTrigger: {
    trigger: "#whatLimits",
    start: "top +=25%",
    toggleActions: "play pause restart reverse",
  }
});
tl_sectionTwo_whatLimits
  .fade("#whatLimits h1.display-2", { duration: 0.33 }, "+=0.11")
  .fade("#whatLimits #limits-card-01", { duration: 0.2 })
  .slideIn("#whatLimits #limits-card-01 .limits-card", { duration: 0.66, y:100})
  .slideIn("#whatLimits #limits-card-01 .limits-card h3", { duration: 0.44, ease: "back" }, "+=.15")
  .fade("#whatLimits  #limits-card-01 .limits-card h3 span", { duration: 0.33, ease: "back" }, "+=0.11")
  .slideIn("#whatLimits  #limits-card-01 .limits-card img", { duration: 0.44, ease: "back" }, "+=.33")

  .fade("#whatLimits #whatlimits-iconbox-desktop", {duration: 0.22})
  .fade("#whatLimits #whatlimits-iconbox-mobile", "<")
  .slideIn("#whatLimits #whatlimits-iconbox-desktop .image-column", { duration: 1, stagger:0.22, ease: "back"}, "-=.15")
  .slideIn("#whatLimits #whatlimits-iconbox-mobile .blocktest", { duration: 1, stagger:0.22, ease: "back"}, "<")

  .fade("#whatLimits #limits-card-02", { duration: 0.2 })
  .slideIn("#whatLimits #limits-card-02 .limits-card", { duration: 0.66, y:100, ease:"power3.inOut"}, "+=.25")
  .slideIn("#whatLimits #limits-card-02 .limits-card h3", { duration: 0.44, ease: "back" }, "+=.15")
  .fade("#whatLimits  #limits-card-02 .limits-card h3 span", { duration: 0.33, ease: "back" }, "+=0.11")
  .slideIn("#whatLimits  #limits-card-02 .limits-card img", { duration: 0.44, ease: "back" }, "+=.33");

// Strategy Slides Animation (Section 03)
// Header of section 03
var tl_sectionThree_header = gsap.timeline({
  scrollTrigger: {
    trigger: "#strategy-mobile",
    start: "top +=25%",
    // end: "+=45%",
    toggleActions: "play pause restart reverse",
  }
});
tl_sectionThree_header
  .from('#strategy-mobile h2.display-2', {
    opacity: 0
  });

  // Section 03- MARKET VOLATILITY MOBILE
const tl_sectionThree_marketVolatility = gsap.timeline();
tl_sectionThree_marketVolatility
  .add("start")
  .slideIn("#strat-market .strategy-card-mobile", {duration: .55}, "+=.33")
  .slideUp("#strat-market .strategy-img-wrapper", {duration: .22},  "-=.1")
  .slideUp("#strat-market h4", {duration: .22},  "-=.1")
  .slideIn("#strat-market .strategy-mobile-logo-wrapper img", {duration: .66},  "-=.33")
  .slideIn("#strat-market .strategy-mobile-logo-wrapper p", {duration: .66}, "-=.33")
  .add("end");
  ScrollTrigger.create( {
    animation: tl_sectionThree_marketVolatility,
    trigger: "#strategy-mobile",
    start: "top center",
    toggleActions: "play pause restart reverse",
  });

// Section 03- LOW INTEREST RATES
const tl_sectionThree_lowInterestRates = gsap.timeline();
tl_sectionThree_lowInterestRates
  .add("start")
  .slideIn("#strat-interest .strategy-card-mobile", {duration: .55}, "+=.33")
  .slideUp("#strat-interest .strategy-img-wrapper", {duration: .22},  "-=.1")
  .slideUp("#strat-interest h4", {duration: .22},  "-=.1")
  .slideIn("#strat-interest .strategy-mobile-logo-wrapper img", {duration: .66},  "-=.33")
  .slideIn("#strat-interest .strategy-mobile-logo-wrapper p", {duration: .66}, "-=.33")
  .add("end");

const tl_sectionThree_longevity = gsap.timeline();
tl_sectionThree_longevity
  .add("start")
  .slideIn("#strat-longevity .strategy-card-mobile", {duration: .55}, "+=.33")
  .slideUp("#strat-longevity .strategy-img-wrapper", {duration: .33},  "-=.1")
  .slideUp("#strat-longevity h4", {duration: .22},  "-=.1")
  .slideIn("#strat-longevity .strategy-mobile-logo-wrapper img", {duration: .66},  "-=.33")
  .slideIn("#strat-longevity .strategy-mobile-logo-wrapper p", {duration: .66}, "-=.33")
  .add("end");

// End Strat slideShow

// Things Change Animations (Section 01)
const tl_sectionOne = gsap.timeline({
  scrollTrigger: {
    trigger: "#thingsChange",
    start: "top center",
    end: "+=45%",
    scrub: true,
    toggleActions: "play pause reverse restart",
  }
});
tl_sectionOne
  .fade('#thingsChangeHeader')
  .from('ul.showslides li', {
    opacity: 0,
    y: -30,
    stagger: 0.33
  });

const tl_sectionOne_mobile = gsap.timeline();
tl_sectionOne_mobile
  .add("here")
  .from('#thingsChangeHeader--mobile', {
    duration: 1,
    opacity: 0,
    ease: "power3"
  }, "+=.25")
  .from('ul.showslides-mobile li', {
    opacity: 0,
    yPercent: 20,
    stagger: 0.2,
    ease: "back"
  })
  .add("end");

  ScrollTrigger.create( {
    animation: tl_sectionOne_mobile,
    trigger: "#thingschangemobile",
    start: "top center",
    // toggleActions: "play pause reverse restart"
     toggleActions: "play reverse restart reverse"
  });
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

const tl_technology_mobile = gsap.timeline();
tl_technology_mobile
  .add("here")
  .fade(".showslides--mobile h3", {duration: .33}, "+=.22")
  .scaleUpFadeIn(".phone-wrapper .phone",{ duration: .66, stagger: 0.533, ease: "back"}, "-=.15")
  .add("end");

const tl_interestRates = gsap.timeline();
tl_interestRates
  .from(".timeline-block .marker", {duration: 1
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

  var M2 = TweenMax.to(".character2", 1, {

    timeScale:2,
    repeat: -1,
    x: -2000,
    ease: SteppedEase.config(8)
  });
  function timeScale(X) {
    TweenLite.to([M2], 1, { timeScale: X });
  }
  timeScale(2);

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


let direction = 1;
function getDir(self) {
  direction = self.direction;
}
var tl_piePipeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-piepipe",
    start: "top top",
    end: "+=3000",
    scrub: 2,
    onUpdate: getDir,
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
  .scaleUpFadeIn("#pie-first svg g.text", { duration:  1 })
  .scaleUpFadeIn("#moneydrop-1", { duration:  2 }, "+=1")
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
  .scaleUpFadeIn("#pie-second svg g.text", { duration:  0.33 })

  .to("#moneydrop-1", {
    duration: 1,
    y: 150,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .scaleUpFadeIn("#moneydrop-2", { duration: 2 })

  // 	Third
  .addLabel("third")
  .to({}, { duration: 2 })

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
  .scaleUpFadeIn("#pie-third svg g.text", { duration: 0.33 })
  .to("#moneydrop-2", {
    duration: 1,
    y: 150,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .scaleUpFadeIn("#moneydrop-3", { duration: 2 })


  // fourth
  .addLabel("fourth")
  .to({}, { duration: 2 })
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
  .scaleUpFadeIn("#pie-fourth svg g.text", { duration:  0.33 })
  .to("#moneydrop-3", {
    duration: 1,
    y: 150,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  }, "+=1")
  .scaleUpFadeIn("#moneydrop-4", { duration:  2 })

  // fifth
  .addLabel("fifth")
  .to({}, { duration: 2 })
  .to(".container-piepipe .piepipe-wrapper:not(#pie-fifth)", {yPercent: -30, stagger: 0.125, ease: "back"})
  // .to("#pie-third", {yPercent: -20, ease: "back"}, "<")
  // .to("#pie-second", {yPercent: -20, ease: "back"}, "<")
  // .to("#pie-first", {yPercent: -20, ease: "back"}, "<")
  .from("#pie-fifth", {
    duration: 3,
    yPercent: 50,
    opacity: 0,
    ease: "back"
  }, "+=.22")
  .to("pie-fifth",{
    yPercent: -20
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
  .call(() => {
  if(direction > 0) {
    splash_tl.play();
  } else {
    splash_tl.reverse();
  }
})
  .add( function(){ M2.play() } , 'label' )

  // final
  .addLabel("final")
  .scaleUpFadeIn("#moneydrop-5", { duration:  1 }, "+=1")
  .to({}, { duration: 2 })
  .addLabel("endofstory")
  .to({}, { duration: 2 });

  // var tl_lastDrop = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".container-piepipe",
  //     start: "bottom center",
  //     end: "+=10%",
  //     scrub: true,
  //     toggleActions: "play pause reverse resume",
  //   },
  // });
  // tl_lastDrop.to("#moneydrop-5", {
  //   y: 150,
  //   opacity: 0,
  //   scale: 0,
  //   ease: "power1.inOut"
  // });
// END PIE PIPELINE TIMELINE


tl_pieGraph
  .addLabel("piegraph--begin")
  .scaleUpFadeIn("svg#piegraph g", { duration:  1.66, ease: "back", stagger: 0.33 })
  .addLabel("piegraph--labels")
  .scaleUpFadeIn("svg#piegraph--label g", { duration:  1.66, ease: "back", stagger: 1 }, "+=3")
  .addLabel("piegraph--finished")
  .to({}, { duration: 12})
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
      scrub: 2
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
