// 制作物紹介ページ用js
window.addEventListener("load", function () {
  let targetLinkList = new Array();
  const navLinkList = document.querySelectorAll(".nav-link-list li a");
  navLinkList.forEach(item => {
    const id = item.getAttribute("href").replace(/#/g, "");
    const offset = document.getElementById(id).offsetTop;
    const navLinkOffset = item.offsetTop;
    targetLinkList.push({
      id: id,
      offset: offset,
      navLinkOffset: navLinkOffset,
    });
  });
  // 
  targetLinkList.sort((a, b) => a.offset - b.offset);

  // ページ読み込み時にサイドナビを連動
  sideNavScroll();

  // スクロール時にサイドナビを連動
  window.addEventListener("scroll", sideNavScroll);

  /**
   * サイドナビをスクロールさせる
   */
  function sideNavScroll() {
    const headerHeight = document.querySelector('#header').offsetHeight;
    const listLength = targetLinkList.length;
    for (let i = 0; i < listLength; i++) {
      if (window.scrollY >= targetLinkList[i].offset - headerHeight) {
        navLinkList.forEach(item => {
          item.classList.remove("scroll");
        });
        document.querySelector(".nav-link-list li a[href='#" + targetLinkList[i].id + "']").classList.add("scroll");
        document.querySelector(".sideNav").scrollTop = targetLinkList[i].navLinkOffset;
      } else {
        break;
      }
    }
  }

});