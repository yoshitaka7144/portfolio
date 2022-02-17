// ヘッダーメニュー用js
window.onload = function () {

  // ページ内リンク遷移処理
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  const header = document.querySelector('#header');
  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      const headerHeight = header.offsetHeight;
      const totalScrollAmount = targetOffsetTop - headerHeight;
      window.scrollTo({
        top: totalScrollAmount,
        behavior: "smooth"
      });
    });
  });

  // トップへ戻るボタンの表示処理
  if (window.scrollY >= 100) {
    showBackBtn();
  }

  // メニューリンクをクリックしたときメニューを閉じる
  document.querySelectorAll("#sp-nav > .menu-list > li > a").forEach(menu => {
    menu.addEventListener("click", closeSpNavMenu);
  });

  // メニュー以外の要素クリック時にメニューを閉じる
  document.addEventListener("click", e => {
    if (!e.target.closest("#sp-nav")) {
      closeSpNavMenu();
    }
  });

  // スクロール時にトップへ戻るボタンの表示処理
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      showBackBtn();
    } else {
      hideBackBtn();
    }
  });

  /**
   * ナビメニューを閉じる
   */
  function closeSpNavMenu() {
    document.getElementById("hamburger-menu").checked = false;
  }

  /**
   * トップへ戻るボタン非表示
   */
  function hideBackBtn() {
    const backBtn = document.getElementById("back-btn");
    const style = window.getComputedStyle(backBtn);
    if (style.visibility === "visible") {
      backBtn.animate({
        opacity: ["1", "0.5", "0"],
        visibility: ["visible", "hidden"],
      }, {
        duration: 300,
        fill: "forwards",
      });
    }
  }

  /**
   * トップへ戻るボタン表示
   */
  function showBackBtn() {
    const backBtn = document.getElementById("back-btn");
    const style = window.getComputedStyle(backBtn);
    if (style.visibility === "hidden") {
      backBtn.animate({
        opacity: ["0", "0.5", "1"],
        visibility: ["hidden", "visible"],
      }, {
        duration: 300,
        fill: "forwards",
      });
    }
  }
}
