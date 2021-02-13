// Create a timeline with default parameters
var tl = anime.timeline({
  easing: 'easeInOutSine',
  duration: 3000,
  loop: true,
  direction: 'alternate'
});

// Add children
tl
.add({
  targets: '.float.negoffset',
  translateY: 50,
  autoplay: true,
  loop: true,
  direction: 'alternate',
}, 100)
.add({
  targets: '.float.offset',
  translateY: 40,
  autoplay: true,
  loop: true,
  direction: 'alternate',
}, 1700);
