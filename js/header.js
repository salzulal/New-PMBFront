var offsetTop = $("#page-search-bar").offset().top;

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > offsetTop - 96) {
    $("#header-search-bar").fadeIn(200);
  } else {
    $("#header-search-bar").fadeOut(200);
  }
});
