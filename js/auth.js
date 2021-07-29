// Select City Phone Code
$(".city-select").mousedown(function (e) {
  e.preventDefault();
});
$(".city-select").click(function (e) {
  e.preventDefault();
  $("#list-select").toggleClass("show");
  $(".phone-number input").focus();
});

$("#list-select .option").click(function () {
  $("#citycode :selected").val($(this).data("option"));
  $("#citycode").attr("value", $(this).data("option"));
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
$(".showhide-confirm").click(function () {
  $(this).toggleClass("show");
  var input = $($(this).attr("toggle"));
  if ($(this).hasClass("show")) {
    $(this).html("visibility_off");
  } else {
    $(this).html("visibility");
  }
  if ($(".confirm-password input").attr("type") == "password") {
    $(".confirm-password input").attr("type", "text");
  } else {
    $(".confirm-password input").attr("type", "password");
  }
});
// End Input Password Eye

// KODE OTP
$(".digit-group")
  .find("input")
  .each(function () {
    $(this).attr("maxlength", 1);
    $(this).on("keyup", function (e) {
      var parent = $($(this).parent());

      if (e.keyCode === 8 || e.keyCode === 37) {
        var prev = parent.find("input#" + $(this).data("previous"));

        if (prev.length) {
          $(prev).select();
        }
      } else if (
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        e.keyCode === 39
      ) {
        var next = parent.find("input#" + $(this).data("next"));

        if (next.length) {
          $(next).select();
        } else {
          if (parent.data("autosubmit")) {
            parent.submit();
          }
        }
      }
    });
  });

setInterval(function () {
  $("#modalLoading").modal("hide");
  $("#modalLoading").on("hidden.bs.modal", function () {
    $("#modalBerhasilDaftar").modal("show");
  });
}, 3000);

// Global Select
$("<div id='select-dropdown'></div>").insertAfter(".select-pmb select");
var selectPmb = $(".select-pmb #select-dropdown");
$(".select-pmb").each(function (e) {
  $(this)
    .click(function (e) {
      e.stopPropagation();
      selectPmb.empty();
      $(this)
        .find("option")
        .each(function () {
          selectPmb.append(
            '<div class="option" data-option="' +
              $(this).val() +
              '">' +
              $(this).text() +
              "</div>"
          );
        });
      $(".showDropdown").removeClass("showDropdown", 20, "swing");
      $(this).find("#select-dropdown").addClass("showDropdown");
    });
});
selectPmb.on("click", ".option", function () {
  $(this).parent().parent().find("select").val($(this).data("option"));
  $(this)
    .parent()
    .parent()
    .find("select")
    .attr("value", $(this).data("option"));
  });
$(document).click(function (e) {
  selectPmb.empty();
  selectPmb.removeClass("showDropdown" , "swing");
});
