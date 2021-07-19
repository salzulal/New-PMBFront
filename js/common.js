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

// horizontal-drag-scroll
const slider = document.querySelector(".scroll");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
