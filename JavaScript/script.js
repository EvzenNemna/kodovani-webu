$(document).ready(function() {
  $(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 10,
      loop: true,
      nav: false,
      items: 1,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autplayTimeout: 4,
    });
  });

  var open = false;

  $("#topnav-bars").click(function() {
    if (open == false) {
      $("li:not(:first-child)").css("display", "initial").css("width", "100%");
      open = true;
    } else {
      $("li:not(:first-child)").css("display", "none");
      $("#topnav-bars").css("display", "initial");
      open = false;
    }
  });

  lightbox.option({
    'fadeDuration': 500,
    'imageFadeDuration': 500,
    'resizeDuration': 400
  });
});

var center = SMap.Coords.fromWGS84(14.41790, 50.12655);
var m = new SMap(JAK.gel("m"), center, 13);
m.addDefaultLayer(SMap.DEF_BASE).enable();


