

jQuery('.slick-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  infinite: true,
  cssEase: 'linear',
  speed: 1000,
  mobileFirst:true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// Slick Scroll
// jQuery(function () {
//   const slider = jQuery(".slick-slider");
//   slider;

//   slider.on("wheel", function (e) {
//     e.preventDefault();

//     if (e.originalEvent.deltaY < 0) {
//       jQuery(this).slick("slickNext");
//     } else {
//       jQuery(this).slick("slickPrev");
//     }
//   });
// });

// var wheel, scrolling;
// var $carousel = jQuery('#owl-slider');
// $carousel.on('init', () => {
// 	wheel = new WheelIndicator({
// 		elem: $carousel[0],
// 		callback: wheelHandler,
// 	});
// })
// .on('beforeChange', () => {
// 	scrolling = true;
// })
// .on('afterChange', () => {
// 	scrolling = false;
// })

// function wheelHandler(e) {
// 	if (!scrolling) {
// 		console.log('Mouse wheel scroll:', e.direction);
// 		$carousel.slide(e.direction === 'up' ? 'slickPrev' : 'slickNext');
// 	}
// }

jQuery(document).ready(function () {
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (window.location.hash && isChrome) {
      setTimeout(function () {
          var hash = window.location.hash;
          window.location.hash = "";
          window.location.hash = hash;
      }, 300);
  }
});