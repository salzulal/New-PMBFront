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

// Select City Phone Code
$(".city-select").mousedown(function (e) {
  e.preventDefault();
});
$(".city-select").click(function (e) {
  e.preventDefault();
  $("#list-select").toggleClass("show");
  $(".phone-number input").focus();
});
var listoptions = $("#list-select").hasClass("option");

$("#list-select .option").click(function () {
  $("#citycode :selected").val($(this).data("option"));
  $("#citycode option").html($(this).data("option"));
  $(".phone-number input").focus();
  $("#list-select").toggleClass("show");
});
// $(".phone-number").focusin(function(e) {
// 	$(".city-select").addClass('show');
// });

// End Select City Phone Code

// Input Password Eye
$(".showhide").click(function () {
  $(this).toggleClass("show");
  var input = $($(this).attr("toggle"));
  if ($(this).hasClass("show")) {
    $(this).html("visibility_off");
  } else {
    $(this).html("visibility");
  }
  if ($(".password input").attr("type") == "password") {
    $(".password input").attr("type", "text");
  } else {
    $(".password input").attr("type", "password");
  }
});
// End Input Password Eye

// KODE OTP 
$('.digit-group').find('input').each(function() {
	$(this).attr('maxlength', 1);
	$(this).on('keyup', function(e) {
		var parent = $($(this).parent());
		
		if(e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.find('input#' + $(this).data('previous'));
			
			if(prev.length) {
				$(prev).select();
			}
		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = parent.find('input#' + $(this).data('next'));
			
			if(next.length) {
				$(next).select();
			} else {
				if(parent.data('autosubmit')) {
					parent.submit();
				}
			}
		}
	});
});

setInterval(function(){
  $('#modalLoading').modal('hide');
  $('#modalLoading').on('hidden.bs.modal', function () {
    $('#modalBerhasilDaftar').modal('show')
  })
}, 3000);

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
  var currentItem = event.item.index;
  if ($(".owl-item").eq(currentItem).children().hasClass("highlight-1")) {
    $(".col-sm-6.images").attr("class", "col-sm-6 images highlight-1");
  }
  if ($(".owl-item").eq(currentItem).children().hasClass("highlight-2")) {
    $(".col-sm-6.images").attr("class", "col-sm-6 images highlight-2");
  }
  if ($(".owl-item").eq(currentItem).children().hasClass("highlight-3")) {
    $(".col-sm-6.images").attr("class", "col-sm-6 images highlight-3");
  }
  if ($(".owl-item").eq(currentItem).children().hasClass("highlight-4")) {
    $(".col-sm-6.images").attr("class", "col-sm-6 images highlight-4");
  }
  if ($(".owl-item").eq(currentItem).children().hasClass("highlight-5")) {
    $(".col-sm-6.images").attr("class", "col-sm-6 images highlight-5");
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
