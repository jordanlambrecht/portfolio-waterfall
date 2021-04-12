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
  id: "dropletIn",
  animate: 'from',
  props:{
    opacity:0,
    yPercent: -15,
    scale: 0.95,
    ease: "power1",
    yoyo: false,
    repeat: 0
  }
},
{
  id: "dropletFall",
  animate: 'to',
  props:{
    opacity: 0,
    scale: .88,
    x: 12,
    yPercent: 300,
    ease: "none",
    yoyo: false,
    repeat: 0
  }
},
  {
    id: "slideDown",
    animate: 'from',
    props: {
      opacity: 0,
      yPercent: -25,
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
        return gsap.from(targets, {...effect.props,...config });
      }
      else if (effect.animate === 'fromTo'){
        return gsap.fromTo(targets, {...effect.props,...config }, {...effect.props2});
        }
      else {
        return gsap.to(targets, {...effect.props,...config });
      }
    }
  });
});

// Splash Animation

const splashCanvas = document.getElementById("hero-lightpass");
const sContext = splashCanvas.getContext("2d");

splashCanvas.width = 863.8;
splashCanvas.height = 370;

const rootSplashPath = '../assets/img/splashFrames/';

const splashVersion = 'v06';
const splashPrefix = 'PW_' + splashVersion + '_splash_';
const splashFType = '.svg';


const splashFrameCount = 12;
const splashCurrentFrame = index => ( rootSplashPath + splashPrefix + `${(index + 1).toString().padStart(2, '0')}` + splashFType
);

const splashImages = [];
const splash = {
  frame: 0
};

for (let i = 0; i < splashFrameCount; i++) {
  const splashImg = new Image();
  splashImg.src = splashCurrentFrame(i);
  splashImg.alt = "Portfolio Waterfall increases retirement income";
  splashImages.push(splashImg);
  // console.log(splashImg.src);
}

let splash_tl = gsap.timeline({ paused: true })
.addLabel("splashStart")
.to(splash, {
  frame: splashFrameCount - 1,
  snap: "frame",
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
}, "splash")
.addLabel("splashEnd");

splashImages[0].onload = render;

function render() {
  sContext.clearRect(0, 0, splashCanvas.width, splashCanvas.height);
  sContext.drawImage(splashImages[splash.frame], 0, 0);
}
// End Splash Animation

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

  // var M2 = TweenMax.to(".character2", 1, {
  //
  //   timeScale:2,
  //   repeat: -1,
  //   x: -2000,
  //   ease: SteppedEase.config(8)
  // });
  // function timeScale(X) {
  //   TweenLite.to([M2], 1, { timeScale: X });
  // }
  // timeScale(2);

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


// What Limits Mobile animations
var tl_sectionTwo_whatLimits = gsap.timeline({
  scrollTrigger: {
    trigger: "#whatLimits",
    start: "top +=25%",
    toggleActions: "play pause restart reverse",
  }
});
tl_sectionTwo_whatLimits
  .fade("#whatLimits h1.display-2", { duration: 0.22 }, "+=0.11")
  .fade("#whatLimits #limits-card-01", { duration: 0.2 })
  .slideIn("#whatLimits #limits-card-01 .limits-card", { duration: 0.66, y:100})
  .slideIn("#whatLimits #limits-card-01 .limits-card h3", { duration: 0.22, ease: "back" }, "-=.15")
  .fade("#whatLimits  #limits-card-01 .limits-card h3 span", { duration: 0.22, ease: "back" }, "-=0.11")
  .slideIn("#whatLimits  #limits-card-01 .limits-card img", { duration: 0.33, ease: "back" }, "-=.13")

  .fade("#whatLimits #whatlimits-iconbox-desktop", {duration: 0.15})
  .fade("#whatLimits #whatlimits-iconbox-mobile", {duration: 0.15}, "<")
  .slideIn("#whatLimits #whatlimits-iconbox-desktop .image-column", { duration: 0.66, stagger:0.15, ease: "back"}, "-=.15")
  .slideIn("#whatLimits #whatlimits-iconbox-mobile .blocktest", { duration: 0.66, stagger:0.15, ease: "back"}, "<")

  .fade("#whatLimits #limits-card-02", { duration: 0.22 }, "-=.25")
  .slideIn("#whatLimits #limits-card-02 .limits-card", { duration: 0.66, y:100, ease:"power3.inOut"}, "-=.15")
  .slideIn("#whatLimits #limits-card-02 .limits-card h3", { duration: 0.22, ease: "back" }, "-=.15")
  .fade("#whatLimits  #limits-card-02 .limits-card h3 span", { duration: 0.22, ease: "back" }, "-=0.11")
  .slideIn("#whatLimits  #limits-card-02 .limits-card img", { duration: 0.33, ease: "back" }, "-=.15");

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





// Section 03 - Our Strategy (desktop)
  var tl_sectionThree_strategy = gsap.timeline({
    scrollTrigger: {
      trigger: "section#strategy",
      start: "top +=15%",
      toggleActions: "play pause restart reverse",
    }
  });
  tl_sectionThree_strategy
  .addLabel("Our Strategy")
  .slideIn("#strategy h1#strategyHeader", { duration: 0.666 })
  .slideDown("#strategy #stratcard-01-wrapper .strategy-card", { duration: 1 },  "-=0.44")
  .from("#strategy #stratcard-01-wrapper .line-down", {
    duration: .75,
    scale: 0,
    yPercent: -100,
    opacity: 0,
    ease: "power3.inOut"
  }, "-=0.44")
  .slideDown("#strategy #stratcard-01-wrapper .general-card", {duration: 1}, "-=0.66")
  .slideDown("#strategy #stratcard-01-wrapper .general-card *", {duration: .5, stagger: 0.15}, "-=0.66")

  .slideDown("#strategy #stratcard-02-wrapper .strategy-card", { duration: 0.666},  "-=0.66")
  .from("#strategy #stratcard-02-wrapper .line-down", {
    duration: .75,
    scale: 0,
    yPercent: -100,
    opacity: 0,
    ease: "power3.inOut"
  }, "-=0.44")
  .slideDown("#strategy #stratcard-02-wrapper .general-card", { duration: 1}, "-=0.66")
  .slideDown("#strategy #stratcard-02-wrapper .general-card *", {duration: 0.5, stagger: 0.15}, "-=0.66")

  .slideDown("#strategy #stratcard-03-wrapper .strategy-card", { duration: 0.666 }, "-=0.66" )
  .from("#strategy #stratcard-03-wrapper .line-down", {
    duration: .75,
    scale: 0,
    yPercent: -100,
    opacity: 0,
    ease: "power3.inOut"
  }, "-=0.44")
  .slideDown("#strategy #stratcard-03-wrapper .general-card", {duration: 1}, "-=0.66")
  .slideDown("#strategy #stratcard-03-wrapper .general-card *", {duration: .5, stagger: 0.15}, "-=0.66")
  .addLabel("End Our Strategy");

  // ANIMATE SECTION 04 - PIE CHART //
  function goToSection(section, anim) {
    gsap.to(window, {
      scrollTo: {y: section, autoKill: false},
      duration: 1
    });

    if(anim) {
      anim.restart();
    }
  }
  var tl_pieGraph = gsap.timeline({
    // scrollTrigger: {
    //   trigger: ".container-piegraph",
    //   start: "top top",
    //   end: "+=1500",
    //   scrub: 2,
    //   snap: {
    //     snapTo: "labels",
    //     duration: {
    //       min: 1,
    //       max: 2
    //     },
    //     delay: 0.4,
    //     ease: "power3"
    //   },
    //   pin: true,
    // }
  });

  tl_pieGraph



  // END PIEGRAPH TIMELINE

// START SECTION 06 - PIE PIPELINE TIMELINE //
let direction = 1;
function getDir(self) {
  direction = self.direction;
}

const tl_piePipes = gsap.timeline({
  scrollTrigger: {
        trigger: ".piePipe-outerContainer",
    start: "top top",
    end: "+=3600",
    scrub: 2,
    onUpdate: getDir,
    snap: {
      snapTo: "labels",
      duration: {
        min: 1,
        max: 2,
      },
      delay: 1,
      ease: "power1"
    },
    pin: true,
    anticipatePin: true,
  }
});

tl_piePipes
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
.slideIn("#piePipe-check", {duration:0.33}, "-=1", "check")
.addLabel("piepipes--start")
.from("#piePipe-lastPipe", {
  duration:1.33,
  opacity: 0,
  yPercent: 80,
  xPercent: 30,
  x: -70,
  scale: 0,
  ease: "back.inOut"
}, "-=0.33", "last pipe")
.addLabel("last pipe")
.slideIn("#piePipe-first", {},"+=1", "first pipe")
.dropletIn("#piePipe-droplet01 ", {})
.addLabel("first pipe")
.dropletFall("#piePipe-droplet01", {  yPercent: 333 }, "+=1")
.call(() => { splash_tl.restart(); })

// .call(() => {
//   if(direction > 0) {
//   else { splash_tl.reverse(); }
// })
.addLabel("first pipe dropped")
.slideIn("#piePipe-second", {}, "+=1", "second pipe")
.dropletIn("#piePipe-droplet02 ", {})
.addLabel("secondpipe")
.dropletFall("#piePipe-droplet02", {  yPercent: 255 }, "+=1")
.call(() => { splash_tl.restart(); })
.addLabel("second pipe dropped")

.slideIn("#piePipe-third", {}, "+=1", "third pipe")
.dropletIn("#piePipe-droplet03 ", {})
.addLabel("thirdpipe")
.dropletFall("#piePipe-droplet03", {  yPercent: 175 }, "+=1")
.call(() => { splash_tl.restart(); })
.addLabel("third pipe dropped")

.slideIn("#piePipe-fourth", {}, "+=1", "fourth pipe")
.dropletIn("#piePipe-droplet04 ", {})
.addLabel("fourthpipe")
.dropletFall("#piePipe-droplet04", {  yPercent: 100 }, "+=1")
.call(() => { splash_tl.restart(); })
.addLabel("fourth pipe dropped")
.to({}, {duration: 2}, "+=2")
.addLabel("end");
// END PIE PIPELINE TIMELINE //




const tl_footer = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: '.content',
      start: 'bottom bottom',
      end: '+=90%',
      scrub: 2
    }
  });
tl_footer
  .from('footer section.footer-container', {
    duration: 10,
    yPercent: 100,
    ease: 'power1'
  }, 0)
  .fade('h1#footerdry', {duration: 3}, "+=1")
  .slideIn('.footer-wrapper-logo', { duration: 3 }, "+=1")
  .from('section.footer-container .footer-icon-panel', {
    duration: 4,
    stagger: 2,
    yPercent: 25,
    opacity: 0,
    ease: 'back.inOut'
  }, "-=.25")
  .fade(".footer-copyright", {duration: 2, stagger: 1}, "-=.22")
  .addLabel("endfooter");

// END FOOTER //
