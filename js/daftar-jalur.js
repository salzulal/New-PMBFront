$(".filter-tags .tag").on("click", function () {
  $(this).toggleClass("active");
});

$("#carousel-ulasan").each(function () {
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
      center: true,
      responsiveClass: true,
      responsive: {
        1: {
          items: 1,
        },
        767: {
          items: 2,
          dots: false,
        },
        1199: {
          items: 3,
          dots: false,
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
