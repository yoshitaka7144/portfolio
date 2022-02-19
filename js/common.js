// 全ページ共通js
window.addEventListener("load", function () {

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
      window.scroll({
        top: totalScrollAmount,
        behavior: "smooth"
      });
    });
  });

  // スクロールトップボタン
  const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
  scrollToTopBtn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  });


  // スクロールトップボタンの表示処理
  if (window.scrollY >= 100) {
    showScrollToTopBtn();
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

  // スクロール時にスクロールトップボタンの表示処理
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      showScrollToTopBtn();
    } else {
      hideScrollToTopBtn();
    }
  });

  /**
   * ナビメニューを閉じる
   */
  function closeSpNavMenu() {
    document.getElementById("hamburger-menu").checked = false;
  }

  /**
   * スクロールトップボタン非表示
   */
  function hideScrollToTopBtn() {
    const style = window.getComputedStyle(scrollToTopBtn);
    if (style.visibility === "visible") {
      scrollToTopBtn.animate({
        opacity: ["1", "0.5", "0"],
        visibility: ["visible", "hidden"],
      }, {
        duration: 400,
        fill: "forwards",
      });
    }
  }

  /**
   * スクロールトップボタン表示
   */
  function showScrollToTopBtn() {
    const style = window.getComputedStyle(scrollToTopBtn);
    if (style.visibility === "hidden") {
      scrollToTopBtn.animate({
        opacity: ["0", "0.5", "1"],
        visibility: ["hidden", "visible"],
      }, {
        duration: 400,
        fill: "forwards",
      });
    }
  }
});
