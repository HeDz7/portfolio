(function () {
  "use strict";

  const scrollClassItems = $("[data-scrollclass]");

  if (!scrollClassItems.length) return false;

  let classAppender = (toScroll) => {
    scrollClassItems.each((key, el) => {
      let elm = $(el);

      if (elm.hasClass("scroll-fired")) return true;

      let classToAdd = elm.data("scrollclass");

      let elPos = elm.offset().top;

      let winHeight = window.innerHeight;

      if (toScroll >= elPos - winHeight + 120) {
        elm.addClass(classToAdd + " scroll-fired");

        if (elm.hasClass("invisible")) elm.removeClass("invisible");

        if (elm.hasClass("hidden")) elm.removeClass("hidden");
      }
    });
  };

  let nextScroll = 0;

  $(window).on("scroll load", function () {
    let win = $(this);

    if (!(win.scrollTop() >= nextScroll)) return;

    nextScroll = Math.ceil(win.scrollTop() / 100) * 100;
    classAppender(win.scrollTop());
  });
})();