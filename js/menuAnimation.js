$(function () {
  scroll_effect();

  $(window).scroll(function () {
    scroll_effect();
  });

  function scroll_effect() {
    $(".fadein").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 70) {
        $(this).addClass("scrollin");
      }
    });
  }


});