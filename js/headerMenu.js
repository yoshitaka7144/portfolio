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
}
