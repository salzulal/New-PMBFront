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
