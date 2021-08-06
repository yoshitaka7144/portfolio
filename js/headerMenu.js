// ヘッダーメニュー用js
window.onload = function () {
  // ハンバーガーメニュー
  $("#hamburger").on("click", function () {
    $("#sp-nav").css("display", "flex");
  });

  // メニュー項目クリック後メニューを閉じる
  $("#sp-nav > ul > li > a, #sp-nav > ul > li > span").on("click", function () {
    $("#sp-nav").css("display", "none");
  });

  // アンカーリンク先の位置調整（ヘッダーの高さ分下げる）
  var headerHeight = $(".header-container").outerHeight();
  var urlHash = location.hash;
  // ページ外
  if (urlHash) {
    $('body,html').stop().scrollTop(0);
    var target = $(urlHash);
    // アニメーション設定の分ずれるのでクラスを消しておく
    target.removeClass("fadein");

    setTimeout(function () {
      var position = target.offset().top - headerHeight;
      $('body,html').animate({ scrollTop: position }, 1250);
    }, 100);
  }
  // ページ内
  $("a[href^='#']").on("click", function () {
    var href = $(this).attr("href");
    var target = $((href == "#" || href == "") ? "html" : href);
    var position = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: position }, 1250);
    
  });

}
