const technology        = document.getElementById( "technology" ),
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
  var animateBackground = anime({
    targets: '.showslides--right',
    backgroundColor: color,
    duration: 4000,
    autoplay: true
});
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
    slideAway(stockMarketBox);
    tl_stockMarket.reverse();
    // $(stockMarketBox).hide();
  }
  if(navItem != govtSpending){
    $(govtSpending).removeClass("selected");
    $(govtSpendingBox).removeClass("showBox");
    slideAway(govtSpendingBox);
    tl_govtSpending.reverse();
  }

}
function slideAway(hideaway){
  let getOutaHere = document.querySelectorAll('.box:not(.showBox)');

  var hide = anime({
      targets: document.querySelectorAll('.box:not(.showBox)'),
      opacity: 0,
      direction: 'normal',
      duration: 600,
      loop: false,
      autoplay: true,
      easing: 'easeInOutSine',
      complete: function(anim) {
        $(hideaway).hide();
        slideIn();
      }
    });
}
function slideIn(){
  var showIt = document.querySelector('.box.showBox');
  $(showIt).css("opacity", "0");
  $(showIt).show();
   var show = anime({
      targets: '.showBox',
      opacity: [0,1],
      direction: 'normal',
      duration: 600,
      loop: false,
      autoplay: true,
      easing: 'easeInOutSine',
    });
}
