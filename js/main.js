$(document).ready(function () {
  $("[data-scroll]").click(function (evt) {
    evt.preventDefault();

    const $this = $(this),
      blockId = $this.data("scroll");

    if ($(blockId).length) {
      blockOffset = $(blockId).offset().top;

      $("html, body").animate(
        {
          scrollTop: blockOffset,
        },
        500
      );
    }
  });

  function checkScroll(
    scrollOffset,
    block,
    blockH,
    blockOffset,
    bockTarget,
    customClass
  ) {
    if (scrollOffset >= blockOffset + blockH) {
      bockTarget.addClass(customClass);
    } else {
      bockTarget.removeClass(customClass);
    }
  }

  if ($(window).width() < 767) {
    let scrollOffset = $(window).scrollTop();
    let headerReg = $(".header__btn");
    let headerRegFixed = $(".header__btn--fixed");
    let headerRegH = headerReg.innerHeight();
    let headerRegOffstet = headerReg.offset().top;

    checkScroll(
      scrollOffset,
      headerReg,
      headerRegH,
      headerRegOffstet,
      headerRegFixed,
      "header__btn--active"
    );

    $(window).on("scroll", function () {
      scrollOffset = $(this).scrollTop();

      checkScroll(
        scrollOffset,
        headerReg,
        headerRegH,
        headerRegOffstet,
        headerRegFixed,
        "header__btn--active"
      );
    });
  }
});
