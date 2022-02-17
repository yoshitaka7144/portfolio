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

  // 年齢表示
  const ageElement = document.getElementById("age-text");
  const birthday = ageElement.dataset.birthday;
  ageElement.textContent = getAge(birthday);

  /**
   * 現在年齢を取得
   * @param {String} birthdayString 生年月日(yyyy/mm/dd)
   * @returns {Number} 年齢
   */
  function getAge(birthdayString) {
    const arr = birthdayString.split("/");
    const birthday = {
      year: Number(arr[0]),
      month: Number(arr[1]),
      date: Number(arr[2]),
    };

    const today = new Date();

    // 今年の誕生日
    const thisYearsBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.date);

    // 年齢算出
    let age = today.getFullYear() - birthday.year;
    if (today < thisYearsBirthday) {
      // 今年の誕生日がまだ来ていない場合
      age--;
    }

    return age;
  }

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
