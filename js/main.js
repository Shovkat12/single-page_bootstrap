$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
      
        responsive : {
            // breakpoint from 0 up
            375 : {
                items:1.5,
            },
            // breakpoint from 480 up
            768 : {
                items:1.5,
            },
            992: {
                items: 3,
            }
        }
    });
  });