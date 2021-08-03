// ヘッダーメニュー用js
window.onload = function(){
  // ハンバーガーメニュー
  $("#hamburger").on("click", function(){
    $("#sp-nav").css("display","flex");
  });

  // メニュー項目クリック後メニューを閉じる
  $("#sp-nav > ul > li > a, #sp-nav > ul > li > span").on("click", function(){
    $("#sp-nav").css("display","none");
  });

  // アンカーリンク先の位置調整（ヘッダーの高さ分下げる）
  var headerHeight = 60;
  $("a[href^='#']").on("click", function(){
    var href = $(this).attr("href");
    var target = $((href == "#" || href == "") ? "html" : href);
    var position = target.offset().top - headerHeight;
    $("html").animate({scrollTop:position}, 800, "swing");
  })
}
