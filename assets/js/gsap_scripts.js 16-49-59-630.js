// For Debugging & Diagnostics
const screenobject = document.querySelector(".screeninfo");
function reportWindowSize() {
  screenobject.innerHTML= window.innerWidth + " x " + window.innerHeight;
}
window.onresize = reportWindowSize;
window.onload = reportWindowSize;

// END DEBUGGING //

// INITIALIZATION //
gsap.registerPlugin(ScrollTrigger);
// END INITIALIZATION //

// ANIMATE SECTION 04 - PIE CHART //

let tl_pieGraph = gsap.timeline({
	 scrollTrigger: {
   trigger: ".container-piegraph",
    start: "top top",
		end: "+=2000",
    scrub: 2,
		snap: {
      snapTo: "labels",
      duration: { min: 1, max: 3 },
      delay: 0.6,
      ease: "power3"
    },
    pin: true,
  }
});

// START PIEGRAPH TIMELINE
tl_pieGraph.addLabel("piegraph--begin")
	.from("svg#piegraph g", {
		duration: 1.66,
		opacity: 0,
		scale: 0,
		stagger:0.3,
		ease:"back"
	},)

	.addLabel("piegraph--labels")

	.from("svg#piegraph--label g", {
		duration: 1.66,
		opacity: 0,
		scale: 0,
		stagger:1,
		ease:"back"
		}, "+=3")

	.addLabel("piegraph--finished")
	.to({}, {duration: 12})

	.to("svg#piegraph g", {
		duration: 1.66,
		opacity: 0,
		scale: 0,
		stagger:0.3,
		ease:"back"
	})

	.to("svg#piegraph--label g", {
		duration: 3,
		opacity: 0,
		scale: 0,
		stagger:0.3,
		ease:"back"
		}, "<")

		.addLabel("piegraph--end")

// END PIEGRAPH TIMELINE 
// END SECTION 04 - PIE CHART //

// ANIMATE FOOTER WAVES //

let tlCheckBounce= new TimelineMax({repeat: -1});



tlCheckBounce
	.to(".gsap--hover", 1, {})
	.to(".gsap--hover", 4,{
		y:'-=20',
		rotation: '+=2.33',
		ease: Sine.easeInOut
	})
	.to(".gsap--hover", 1, {})
	.to(".gsap--hover", 4, {
		y:'+=20',
		rotation: '0',
		ease: Power1.easeInOut
	})
		.to(".gsap--hover", 1, {})
	.to(".gsap--hover", 4,{
		y:'-=20',
		rotation: '-=2.33',
		ease: Sine.easeInOut
	})
	.to(".gsap--hover", 1, {})
	.to(".gsap--hover", 4, {
		y:'+=20',
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
.set('#landing-logo', { opacity: 0, yPercent:-25 })
.set('#landing-tagline', { opacity: 0, yPercent:-25 })
.set('.scroll-down', { opacity: 0, yPercent:25 })
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

gsap.timeline({
  scrollTrigger: {
    trigger: '.content',
    start: 'top bottom',
    end: '+=66%',
    scrub: true
  }
})
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
},{
  duration: 9,
  opacity: 0,
  scale: .95,
  yPercent: 25,
  ease: 'power3.inOut'
}, "-=9")
.fromTo('#landing-tagline', {
  duration: 8,
  scale: 1,
  opacity: 1,
  yPercent: 0,
  ease: 'power3.inOut'
},{
  duration: 8,
  scale: 0.9,
  yPercent: 25,
  opacity: 0,
  ease: 'power3.inOut'
}, "-=8")
.fromTo('.scroll-down',{
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

gsap.set('section.footer-container', { yPercent: -50 })

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
