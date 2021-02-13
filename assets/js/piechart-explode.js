const screenobject = document.querySelector(".screeninfo");
function reportWindowSize() {
  screenobject.innerHTML= window.innerWidth + " x " + window.innerHeight;
}
window.onresize = reportWindowSize;
window.onload = reportWindowSize;


gsap.registerPlugin(ScrollTrigger);

let first = gsap.timeline({
  scrollTrigger: {
   trigger: ".container-piepipe",
    start: "top top",
end: "+=2000",
    scrub: 2,
		snap: {
      snapTo: "labels",
      duration: { min: 0.6, max: 1 },
      delay: 0.6,
      ease: "power3"
    },
    pin: true,
  }
});

first.addLabel("first")
  	.from("#pie-first svg",
		{ x: -700,
		 opacity: 0,
		 scale: 0,
		 ease: "back"
		})
		.from("#pie-first svg g.title", {
			x: -25,
			opacity: 0,
			scale: 0,
			ease: "power1.inOut"
		})
  .from("#pie-first svg g.text", {
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
	.from("#moneydrop-1", {
		opacity: 0,
		scale: 0,
		ease: "power1.inOut"
	},"+=1")

  .addLabel("second")

  .from("#pie-second svg", {
					duration: 3,  x: -700, opacity: 0, scale: 0, ease: "back" })
  .from("#pie-second svg g.title ",  {
    x: -25,
    opacity: 0,

    scale: 0,
    ease: "power1.inOut"
  })
  .from("#pie-second svg g.text", {
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .to("#moneydrop-1", {
		y: 150,
		opacity: 0,
		scale: 0,
		ease: "power1.inOut"
	})
  .from("#moneydrop-2", {
		opacity: 0,
		scale: 0,
		ease: "power1.inOut"
	})
  .addLabel("third")
 	.from("#pie-third svg",  {
		duration: 3,
		x: -700,
		opacity: 0,
		scale: 0,
		ease: "back"
	})
  .from("#pie-third svg g.title ",  {
    x: -25,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .from("#pie-third svg g.text",  {
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .to("#moneydrop-2",  {
		y: 150,
		opacity: 0,
		scale: 0,
		ease: "power1.inOut"
	})
  .from("#moneydrop-3",  {
		opacity: 0,
		scale: 0,
		ease: "power1.inOut"
	})
  .addLabel("fourth")
	.from("#pie-fourth svg",  {
		x: -700,
		opacity: 0,
		scale: 0,
		ease: "back"
	})
  .from("#pie-fourth svg g.title ",  {
    x: -25,
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .from("#pie-fourth svg g.text ",  {
    opacity: 0,
    scale: 0,
    ease: "power1.inOut"
  })
  .to("#moneydrop-3",  {
		y: 150,
		opacity: 0,
		scale: 0,
		ease: "power1.inOut"
	},"+=1")
  .from("#moneydrop-4",  {
		opacity: 0,
		scale: 0,
		ease: "power1.inOut"
	})
  .addLabel("fifth")
  .from("#pie-fifth svg",  {
		duration: 3,
		y: 50,
		opacity: 0,
		ease: "back" })
  .from("#pie-fifth svg g.title", {
    x: -25,
    opacity: 0,
    scale: 0,
    ease: "ease"
  })
  .to("#moneydrop-4", {
		duration: 2,
		y: 150,
		opacity: 0,
		scale: 0,
		ease: "power1.inOut"
	},"+=1")
  .addLabel("final")
	.from("#moneydrop-5",  {
		duration: 1,
		opacity: 0,
		scale: 0,
		ease: "power1.inOut"
	}, "+=1")
	.to("#moneydrop-5",  {
		duration: 2,
		y: 150,
		opacity: 0,
		scale: 0,
		ease: "power1.inOut"
	}, "+=1")
  .addLabel("endofstory");
