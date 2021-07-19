var divWidth = $(".berita-lain .item .img").width();

$(document).ready(function () {
  $(".berita-lain .item .img").height(divWidth);
});
var $window = $(window);
var windowWidth = $(window).width();
var windowHeight = $(window).height();
$(window).resize(function () {
  setInterval(function () {
    if (windowWidth != $window.width() || windowHeight != $window.height()) {
      windowWidth = $window.width();
      windowHeight = $window.height();

      $("#carousel-berita .item .img").height(divWidth);
    }
  }, 300);
});

// section breakingnews
$("#carousel-breakingnews").each(function () {
  var $this = $(this);

  $this
    .on({
      "initialized.owl.carousel": function () {
        $this.find(".item").show();
      },
    })
    .owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 1,

      responsiveClass: true,
      responsive: {
        1: {
          dots: true,
          mouseDrag: true,
          touchDrag: true,
        },
        576: {
          dots: false,
          mouseDrag: false,
          touchDrag: false,
          animateOut: "fadeOut",
        },
      },
    });

  $this
    .parent()
    .find(".NextBtn")
    .click(function () {
      $this.trigger("next.owl.carousel");
    });
  $this
    .parent()
    .find(".PreviousBtn")
    .click(function () {
      $this.trigger("prev.owl.carousel");
    });
});

// section testimoni
$("#carousel-testimoni").each(function () {
  var $this = $(this);

  $this
    .on({
      "initialized.owl.carousel": function () {
        $this.find(".item").show();
      },
    })
    .owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 1,
      dots: false,
    });

  $this
    .parent()
    .find(".NextBtn")
    .click(function () {
      $this.trigger("next.owl.carousel");
    });
  $this
    .parent()
    .find(".PreviousBtn")
    .click(function () {
      $this.trigger("prev.owl.carousel");
    });
});

var carouselItem = $(".testimoni .owl-carousel .owl-item .item");
var carouselItemActive = $(".testimoni .owl-carousel .owl-item.highlight");
var owl = $(".testimoni .owl-carousel");

owl.on("changed.owl.carousel", function (event) {
  var currentItem = event.item.index + 1;
  if ($(".owl-item").eq(currentItem).children().hasClass("highlight-1")) {
    $(".col-md-6.images").attr("class", "col-md-6 images highlight-1");
  }
  if ($(".owl-item").eq(currentItem).children().hasClass("highlight-2")) {
    $(".col-md-6.images").attr("class", "col-md-6 images highlight-2");
  }
  if ($(".owl-item").eq(currentItem).children().hasClass("highlight-3")) {
    $(".col-md-6.images").attr("class", "col-md-6 images highlight-3");
  }
  if ($(".owl-item").eq(currentItem).children().hasClass("highlight-4")) {
    $(".col-md-6.images").attr("class", "col-md-6 images highlight-4");
  }
  if ($(".owl-item").eq(currentItem).children().hasClass("highlight-5")) {
    $(".col-md-6.images").attr("class", "col-md-6 images highlight-5");
  }
});
