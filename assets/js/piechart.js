console.clear();
gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".container-pie",
      pin: true,
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=1500", // end after scrolling 500px beyond the start
      scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 1}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      }
    }
  });

// add animations and labels to the timeline
timeline.addLabel("start")
  .from(".container-pie .wrapper-pie svg#piechart g", { opacity: 0, stagger:0.1, scale: 0, ease:"back" })
  .from(".container-pie .wrapper-pie svg#piechart--label g", { opacity: 0, stagger:0.1, scale: 0, ease:"back" })
  .from("#piechart--label g g", {scale: 0.3, rotation:45, autoAlpha: 0})
  .addLabel("moveDown")
  .to("#piechart--label g", {opacity:0})
  .to("#piechart g", { x:50, y:300, stagger:0.1, opacity:0, scale:0}, "<")
  .addLabel("end");
