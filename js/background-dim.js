// https://github.com/andywer/jquery-dim-background

!(function (a) {
  "use strict";
  function b(a, b) {
    return (
      "function" == typeof a && ((b = a), (a = {})),
      "object" != typeof a && (a = {}),
      "function" != typeof b && (b = function () {}),
      { options: a, callback: b }
    );
  }
  var c = [];
  (a.fn.dimBackground = function (d, e) {
    var f = b(d, e);
    (d = f.options),
      (e = f.callback),
      (d = a.extend({}, a.fn.dimBackground.defaults, d));
    var g = a('<div class="dimbackground-curtain"></div>');
    return (
      g.css({
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        background: "black",
        opacity: 0,
        zIndex: d.curtainZIndex,
      }),
      a("body").append(g),
      this.each(function () {
        var b = a(this),
          c = a.meta ? a.extend({}, d, b.data()) : d;
        (this._$curtain = g),
          (this._originalPosition = b.css("position").toLowerCase()),
          "absolute" != this._originalPosition &&
            "fixed" != this._originalPosition &&
            b.css("position", "relative"),
          (this._originalZIndex = b.css("z-index")),
          ("auto" == this._originalZIndex ||
            this._originalZIndex <= c.curtainZIndex) &&
            b.css("z-index", c.curtainZIndex + 1);
      }),
      g.stop().animate({ opacity: d.darkness }, d.fadeInDuration, e),
      c.push({ $curtain: g, $nodes: this }),
      this
    );
  }),
    (a.fn.undim = function (d, e) {
      var f = b(d, e);
      (d = f.options),
        (e = f.callback),
        (d = a.extend({}, a.fn.dimBackground.defaults, d));
      var g,
        h = [];
      if (
        (this.each(function () {
          {
            var b = a(this);
            a.meta ? a.extend({}, d, b.data()) : d;
          }
          this._$curtain &&
            (g || (g = this._$curtain),
            "undefined" != typeof this._originalPosition &&
              h.push([this, this._originalPosition, this._originalZIndex]),
            (this._$curtain = void 0),
            (this._originalPosition = void 0),
            (this._originalZIndex = void 0));
        }),
        g)
      ) {
        g.animate({ opacity: 0 }, d.fadeOutDuration, function () {
          for (var b = 0; b < h.length; b++) {
            var c = h[b][0],
              d = h[b][1],
              f = h[b][2];
            a(c).css({ position: d, zIndex: f });
          }
          g.remove(), e();
        });
        for (var i, j = 0; j < c.length; j++) {
          var k = c[j];
          if (k.$curtain == g) {
            i = j;
            break;
          }
        }
        i && (c = c.slice(0, j).concat(c.slice(j + 1)));
      }
      return this;
    }),
    (a.undim = function (d, e) {
      function f() {
        i++, i == j && e();
      }
      var g = b(d, e);
      (d = g.options),
        (e = g.callback),
        (d = a.extend({}, a.fn.dimBackground.defaults, d));
      for (var h = c.slice(), i = 0, j = h.length, k = 0; k < c.length; k++)
        h[k].$nodes.undim(d, f);
      0 === j && e();
    }),
    (a.fn.dimBackground.defaults = {
      darkness: 0.6,
      fadeInDuration: 300,
      fadeOutDuration: 300,
      curtainZIndex: 999,
    });
})(jQuery);

$(function () {
  $(".dim")
    .focus(function () {
      $(this).dimBackground();
    })
    .focusout(function () {
      $(this).undim(); // Note: We could also use `$.undim();`
    });
});
// $(function () {
//   $(".dim")
//     .on("shown.bs.dropdown", function () {
//       $(this).dimBackground();
//     })
//     .on("hidden.bs.dropdown", function () {
//       $(this).undim(); // Note: We could also use `$.undim();`
//     });
// });
