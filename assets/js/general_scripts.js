console.log("Website developed with love by Pixel Bakery Design Studio in Lincoln, NE. https://pixelbakery.com");

// individual slide animations
var thingsChangeSlides = function thingsChangeSlides(i) {
  switch(i) {
    case 1:
      tl_sectionOne_mobile.tweenFromTo("here", "end");
    break;
    case 2:
      tl_technology_mobile.tweenFromTo("here", "end");
    break;
    case 3:
      tl_interestRates.tweenFromTo("here", "end");
    break;
    case 4:
      tl_stockMarket.tweenFromTo("here", "end");
    break;
    case 5:
      tl_govtSpending.tweenFromTo("here", "end");
    break;
    }
  };

  // individual slide animations
  var strategySlides = function strategySlides(i) {
    switch(i) {
      case 1:
        tl_sectionThree_marketVolatility.tweenFromTo("start", "end");
      break;
      case 2:
        tl_sectionThree_lowInterestRates.tweenFromTo("start", "end");
      break;
      case 3:
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
