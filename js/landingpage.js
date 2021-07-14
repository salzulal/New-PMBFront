// searchbar
var offsetTop = $("#page-search-bar").offset().top;
$(window).resize(function () {
  offsetTop = $("#page-search-bar").offset().top;
});
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > offsetTop - 96) {
    $("#header-search-bar").fadeIn(200);
  } else {
    $("#header-search-bar").fadeOut(200);
  }
});

// equal height col
var row = $(".equalize");
$.each(row, function () {
  var maxh = 0;
  $.each($(this).find(".equalize-this"), function () {
    if ($(this).height() > maxh) maxh = $(this).height();
  });
  $.each($(this).find(".equalize-this"), function () {
    $(this).height(maxh);
  });
});


// section jalur pendaftaran
$("#jalur-seleksi-carousel").each(function () {
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
      dots: false,
      responsiveClass: true,
      responsive: {
        1: {
          items: 1.1,
        },
        360: {
          items: 1.2,
        },
        460: {
          items: 2.2,
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

// section berita
$("#carousel-berita").each(function () {
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
      // center: true,
      responsiveClass: true,
      responsive: {
        576: {
          items: 2.2,
        },
        767: {
          items: 2,
          stagePadding: 100,
        },
        991: {
          items: 3,
          stagePadding: 100,
        },
        1199: {
          items: 4,
          stagePadding: 100,
        },
        1649: {
          items: 5,
          stagePadding: 100,
        },
      },
    });
});

var divWidth = $("#carousel-berita .item .img").width();

$(document).ready(function () {
  $("#carousel-berita .item .img").height(divWidth);
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
