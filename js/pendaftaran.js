$(".info-step").hide();
$(".active .info-step").show();
$("#jadwal-datepicker").datepicker({
  dateFormat: "d MM yyyy",
  classes: "datepicker-style",
  width: "100%",
  autoClose: true,
});
// Access instance of plugin
$("#jadwal-datepicker").data("datepicker");

(function ($) {
  var Defaults = $.fn.select2.amd.require("select2/defaults");

  $.extend(Defaults.defaults, {
    dropdownPosition: "auto",
  });

  var AttachBody = $.fn.select2.amd.require("select2/dropdown/attachBody");

  var _positionDropdown = AttachBody.prototype._positionDropdown;

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass("select2-dropdown--above");
    var isCurrentlyBelow = this.$dropdown.hasClass("select2-dropdown--below");

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false),
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false),
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height(),
    };

    var enoughRoomAbove = viewport.top < offset.top - dropdown.height;
    var enoughRoomBelow = viewport.bottom > offset.bottom + dropdown.height;

    var css = {
      left: offset.left,
      top: container.bottom,
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css("position") === "static") {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    var dropdownPositionOption = this.options.get("dropdownPosition");

    if (
      dropdownPositionOption === "above" ||
      dropdownPositionOption === "below"
    ) {
      newDirection = dropdownPositionOption;
    } else {
      if (!isCurrentlyAbove && !isCurrentlyBelow) {
        newDirection = "below";
      }

      if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
        newDirection = "above";
      } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
        newDirection = "below";
      }
    }

    if (
      newDirection == "above" ||
      (isCurrentlyAbove && newDirection !== "below")
    ) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass("select2-dropdown--below select2-dropdown--above")
        .addClass("select2-dropdown--" + newDirection);
      this.$container
        .removeClass("select2-container--below select2-container--above")
        .addClass("select2-container--" + newDirection);
    }

    this.$dropdownContainer.css(css);
  };
})(window.jQuery);

$(".select2-pmb-sekolah").select2({
  placeholder: "Asal Sekolah",
  dropdownPosition: "below",
  // minimumResultsForSearch: Infinity
});
$(".card-main-pendaftaran").each(function () {
  $(this).find(".form-select-pmb #placeholder").data("placeholder");
});
$(".select2-pmb").select2({
  dropdownPosition: "below",
  minimumResultsForSearch: Infinity,
});

////// Pembelian Formulir

$(".pilihan-item").click(function () {
  $(".pilihan-item").removeClass("active");
  $(this).addClass("active");
  $(".pilihan-item .radio-icon").text("radio_button_unchecked");
  $(this).find(".radio-icon").text("radio_button_checked");
});

// Upload Image 
const progressBar = document.querySelector('.progress-input');
const fileImage = document.querySelector('.input-preview__src');
const filePreview = document.querySelector('.input-preview');
const uploadInput = document.querySelector('.upload-input');
const loadingInput = document.querySelector('.loading-input');
const pdfFile = document.querySelector('.pdfFile');
// Info File 
const filePreviewClass = document.getElementsByClassName('input-preview');
const result = document.getElementById('percent');
const filesize = document.getElementById('filesize');
const fileformat = document.getElementById('fileformat');
const namaFile = document.getElementById('namaFile');
$("#btn-metode-pembayaran").click(function () {
  var metode = $("#select-metode-pembayaran").val();
  if (metode == "online") {
    $(".transfer-bank").hide();
    $(".pilihan-pembayaran").show();
    $("#metode-divider").show();
  } else if (metode == "offline") {
    $(".pilihan-pembayaran").hide();
    $(".transfer-bank").show();
    $("#metode-divider").show();
  } else {
    $(".pilihan-pembayaran").hide();
    $(".transfer-bank").hide();
    $("#metode-divider").hide();
  }
});

// Upload Image
const progressBar = document.querySelector(".progress-input");
const fileImage = document.querySelector(".input-preview__src");
const filePreview = document.querySelector(".input-preview");
const uploadInput = document.querySelector(".upload-input");
const loadingInput = document.querySelector(".loading-input");
const pdfFile = document.querySelector(".pdfFile");
// Info File
const result = document.getElementById("percent");
const filesize = document.getElementById("filesize");
const fileformat = document.getElementById("fileformat");
const namaFile = document.getElementById("namaFile");

fileImage.onchange = function () {
  const reader = new FileReader();
  var fileTypes = ["jpg", "jpeg", "png", "gif", "jfif", "svg"]; //acceptable file types
  var extension = this.files[0].name.split(".").pop().toLowerCase(),
    isSuccess = fileTypes.indexOf(extension) > -1; //is extension in acceptable types

  if (isSuccess) {
    reader.onload = function (e) {
      pdfFile.style.display = "none";
      filePreview.style.backgroundImage = "url(" + e.target.result + ")";
      showLoading();
    };
  } else {
    reader.onload = function (e) {
      filePreview.style.backgroundImage = "none";
      showLoading();
      showPDF();
    };
  }

  // get loaded data and render thumbnail.
  // filePreview.style.backgroundImage  = "url("+e.target.result+")";
  // uploadInput.style.display  = "none";
  // filePreview.classList.add("has-image");

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);

  function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  }

  filesize.innerHTML = bytesToSize(this.files[0].size);
  namaFile.innerHTML = this.files[0].name;
  fileformat.innerHTML = this.files[0].name.split(".").pop();

  let progress = 0;
  const progressInterval = setInterval(generateProgress, 20);
  function showPercent() {
    currentPercent = 0;
    window.setInterval(function () {
      if (currentPercent < 100) {
        currentPercent += 1;
      }
      result.innerHTML = currentPercent + "%";
    }, 20);
  }
  function showLoading() {
    uploadInput.style.display = "none";
    filePreview.classList.add("has-image");
    showPercent();
    generateProgress();
  }
  function generateProgress() {
    loadingInput.style.display = "block";
    progress += 1;
    progressBar.style.width = `${progress}%`;
    if (progress === 100) {
      stopProgress();
      loadingInput.style.display = "none";
      filePreview.classList.remove("has-image");
    }
  }
  function showPDF() {
    pdfFile.style.display = "block";
  }
  function stopProgress() {
    clearInterval(progressInterval);
  }
};
