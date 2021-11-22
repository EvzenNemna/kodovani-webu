$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 10,
      loop: true,
      nav: false,
      items: 1,
      dots: false,
      autoplay: true,
      autoplayHoverpause: true,
      autplayTimeout: 4,
    });
  });