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
$(".city-select").mousedown(function(e) { 
	e.preventDefault();
});
$(".city-select").click(function(e) { 
	$("#list-select").toggleClass('show');
});
var listoptions = $("#list-select").hasClass("option");

$('#list-select .option').click(function () {
  $("#citycode :selected").val($(this).data('option'));
  $("#citycode option").html($(this).data('option'));
  $('.phone-number input').focus();
  $("#list-select").toggleClass('show');
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

// Validate Input 
$(".group input").on("keyup", function () {
  let empty = false;
  let invalid = false;

  $(".group input").each(function () {
    empty = $(this).val().length == 0;
  });

  if (empty) {
    $(".btn-primary-auth").addClass("disabled");
    $(".btn-primary-auth").attr("disabled", "disabled");
  } else {
    $(".btn-primary-auth").removeClass("disabled");
    $(".btn-primary-auth").attr("disabled", false);
  }
});