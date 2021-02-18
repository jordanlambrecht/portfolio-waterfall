/*jshint esversion: 6 */
var technology          = document.getElementById( "technology" ),
      technologyBox     = document.getElementById( "technology-box" ),
      interestRates     = document.getElementById( "interestrates" ),
      interestRatesBox  = document.getElementById( "interestrates-box" ),
      stockMarket       = document.getElementById( "stockmarket" ),
      stockMarketBox    = document.getElementById( "stockmarket-box" ),
      govtSpending      = document.getElementById( "govtspending" ),
      govtSpendingBox   = document.getElementById( "govtspending-box" );
$(document).ready(function(){
  turnOff(technology);
});

$(technology).click(function() {
  if (!$(this).hasClass("selected")) {
    $(this).addClass("selected");
    var color = $( this ).css( "color" );
    changeBgColor(color);
    $(technologyBox).addClass("showBox");
    tl_technology_mobile.play();
    turnOff(technology);
  }
});
$(govtSpending).click(function() {
  if (!$(this).hasClass("selected")) {
    $(this).addClass("selected");
    var color = $( this ).css( "color" );
      changeBgColor(color);
    $(govtSpendingBox).addClass("showBox");
    // $(govtSpendingBox).show();
    turnOff(govtSpending);
    tl_govtSpending.play();
  }
});
$(interestRates).click(function() {
  if (!$(this).hasClass("selected")) {
    $(this).addClass("selected");
    var color = $( this ).css( "color" );
      changeBgColor(color);
    $(interestRatesBox).addClass("showBox");
    turnOff(interestRates);
    tl_interestRates.play();
  }
});
$(stockMarket).click(function() {
  if (!$(this).hasClass("selected")) {
    $(this).addClass("selected");
    var color = $( this ).css( "color" );
      changeBgColor(color);
    $(stockMarketBox).addClass("showBox");
    turnOff(stockMarket);
    tl_stockMarket.play();
  }
});
function changeBgColor(color){
  // console.log(color);
  gsap.to('.showslides--right', {
    backgroundColor: color,
    duration: 0.66,
    ease: "none"
  });
//   var animateBackground = anime({
//     targets: '.showslides--right',
//     backgroundColor: color,
//     duration: 4000,
//     autoplay: true
// });
}
// TO-DO:
// function animateIn(navItem){
//   var animateBackground = anime({
//     targets: '.animateIn',
//     backgroundColor: color,
//     duration: 4000,
//     autoplay: true
// });
// }
function turnOff(navItem){
  if(navItem != technology){
   $(technology).removeClass("selected");
   $(technologyBox).removeClass("showBox");
    slideAway(technologyBox);
  }
  if(navItem != interestRates){
    $(interestRates).removeClass("selected");
    $(interestRatesBox).removeClass("showBox");
    tl_interestRates.reverse();
    slideAway(interestRatesBox);
  }
  if(navItem != stockMarket){
    $(stockMarket).removeClass("selected");
    $(stockMarketBox).removeClass("showBox");
    tl_stockMarket.reverse();
    slideAway(stockMarketBox);
    $(stockMarketBox).hide();
  }
  if(navItem != govtSpending){
    $(govtSpending).removeClass("selected");
    $(govtSpendingBox).removeClass("showBox");
    tl_govtSpending.reverse();
    slideAway(govtSpendingBox);
  }
}
function slideAway(hideaway){
  // var getOutaHere = document.querySelectorAll('.box:not(.showBox)');
  let tl_slideAway = gsap.timeline();

  tl_slideAway.to(hideaway, {
    opacity: 0,
    duration: 0.124,
    ease: "sine.inOut",
  })
  .to(hideaway, {
    duration: 0,
    display: 'none'
  });
  // $(hideaway).hide();
  // var hide = anime({
  //     targets: document.querySelectorAll('.box:not(.showBox)'),
  //     opacity: 0,
  //     direction: 'normal',
  //     duration: 600,
  //     loop: false,
  //     autoplay: true,
  //     easing: 'easeInOutSine',
  //     complete: function(anim) {
  //       $(hideaway).hide();
  //
  //     }
  //   });
    slideIn();
}
function slideIn(){
 let showIt = document.querySelector('.box.showBox');

  let tl_showIt = gsap.timeline();
  tl_showIt.set(showIt, { opacity: 0});
  $(showIt).show();
  tl_showIt.to(showIt, {
    opacity: 1,
    duration: 0.66,
    ease: "sine.inOut"
  });

  // $(showIt).css("opacity", "0");
  // $(showIt).show();
  //  var show = anime({
  //     targets: '.showBox',
  //     opacity: [0,1],
  //     direction: 'normal',
  //     duration: 600,
  //     loop: false,
  //     autoplay: true,
  //     easing: 'easeInOutSine',
  //   });
}
