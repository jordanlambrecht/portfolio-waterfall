console.log("Website developed with love by Pixel Bakery Design Studio in Lincoln, NE. https://pixelbakery.com");

// individual slide animations
var slides = function slides(i) {
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



// element argument can be a selector string
//   for an individual element
var slideFlickity = function slideFlickity() {
  var flkty = new Flickity( '.thingsChange-mobile', {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    watchCSS: true
  });
  slideClick(flkty);
};


var slideClick = function slideClick(flkty) {
  flkty.on( 'select', function( index ) {
    var incIndex = this.selectedIndex + 1;
     slides(incIndex);
  });
};

slideFlickity();
