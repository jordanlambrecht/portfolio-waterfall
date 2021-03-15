console.log("Website developed with love by Pixel Bakery Design Studio in Lincoln, NE. https://pixelbakery.com");
// import PanelSnap from 'panelsnap';


// For Debugging & Diagnostics
  // const screenObject = document.querySelector(".screeninfo");
  //
  // function reportWindowSize() {
  //   screenObject.innerHTML = window.innerWidth + " x " + window.innerHeight;
  // }
  // window.onresize = reportWindowSize();
  // window.onload = reportWindowSize();
  // window.addEventListener('resize', reportWindowSize);



// END DEBUGGING //


// SIDE NAV
//
// const sections =  document.querySelectorAll('section.chapter ');
// const sectionsMenu = document.getElementById("sectionMenu");
// const sectionMenuUL = document.createElement("ul");
// sectionMenuUL.classList.add("nav");
// sectionMenuUL.classList.add("flex-column");
//
// function iterate(section, index) {
//    let listItem = document.createElement("LI");
//    listItem.classList.add("nav-item");
//    listItem.id = "scrollTo--" + index;
//
//    let listLink = document.createElement("A");
//    listLink.href = "#" + section.id;
//    listLink.classList.add("nav-link");
//
//    let listCircle = document.createElement("Span");
//     listCircle.classList.add("sectionMenu--circle");
//    listLink.appendChild(listCircle);
//
//
//    let listContent = document.createTextNode(section.dataset.sectionName);
//    listLink.appendChild(listContent);
//    console.log(section.dataset.sectionName);
//    listItem.appendChild(listLink);
//    sectionMenuUL.appendChild(listItem);
//   console.log("#" + section.id + " | " + section.dataset.sectionName + ' has index ' + index );
// }
// sections.forEach((iterate));
// sectionMenu.appendChild(sectionMenuUL);


// END SIDE NAV



// individual slide animations
var thingsChangeSlides = function thingsChangeSlides(i) {
  switch(i) {
    case 1:
      console.log("slide " + i);
      tl_sectionOne_mobile.tweenFromTo("here", "end");
    break;
    case 2:
      console.log("slide " + i);
      tl_technology_mobile.tweenFromTo("here", "end");
    break;
    case 3:
      console.log("slide " + i);
      tl_interestRates.tweenFromTo("here", "end");
    break;
    case 4:
      console.log("slide " + i);
      tl_stockMarket.tweenFromTo("here", "end");
    break;
    case 5:
      console.log("slide " + i);
      tl_govtSpending.tweenFromTo("here", "end");
    break;
    }
  };

  // individual slide animations
  var strategySlides = function strategySlides(i) {
    switch(i) {
      case 1:
        console.log("slide " + i);
        tl_sectionThree_marketVolatility.tweenFromTo("start", "end");
      break;
      case 2:
        console.log("slide " + i);
        tl_sectionThree_lowInterestRates.tweenFromTo("start", "end");
      break;
      case 3:
        console.log("slide " + i);
        tl_sectionThree_longevity.tweenFromTo("start", "end");
      break;
      }
    };


// section_01_thingsChange_mobile Flickity
var thingsChangeFlickity = function thingsChangeFlickity() {
  var flkty = new Flickity( '.thingsChange-mobile', {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    watchCSS: true
  });
  thingsChangeClick(flkty);
};


var thingsChangeClick = function thingsChangeClick(flkty) {
  flkty.on( 'select', function( index ) {
    var incIndex = this.selectedIndex + 1;
     thingsChangeSlides(incIndex);
  });
};
thingsChangeFlickity();

// section_03_strategy_mobile flickity
var strategyFlickity = function strategyFlickity() {
  var flkty = new Flickity( '.strategy-mobile', {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    watchCSS: true
  });
  strategyClick(flkty);
};


var strategyClick = function strategyClick(flkty) {
  flkty.on( 'select', function( index ) {
    var incIndex = this.selectedIndex + 1;
     strategySlides(incIndex);
  });
};
strategyFlickity();
//
// document.addEventListener("DOMContentLoaded", function() {
//           var defaultOptions = {
//             container: document.getElementsByTagName("MAIN")[0],
//             panelSelector: 'main section',
//             directionThreshold: 50,
//             delay: 0,
//             duration: 300,
//             easing: function(t) { return t },
//           };
//           new PanelSnap();
//         });
