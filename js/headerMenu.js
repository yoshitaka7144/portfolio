// ヘッダーメニュー用js
window.onload = function () {
  // メニューリンクをクリックしたときメニューを閉じる
  document.querySelectorAll("#sp-nav > .menu-list > li > a").forEach(menu => {
    menu.addEventListener("click", closeSpNavMenu);
  });

  // メニュー以外の要素クリック時にメニューを閉じる
  document.addEventListener("click", e => {
    if(!e.target.closest("#sp-nav")){
      closeSpNavMenu();
    }
  });

  /**
   * ナビメニューを閉じる
   */
  function closeSpNavMenu() {
    document.getElementById("hamburger-menu").checked = false;
  }
}
