// 制作物紹介ページ用js
window.addEventListener("load", function () {
  const navLinkList = document.querySelectorAll(".nav-link-list li a");

  let idList = new Array();
  let scrollOffsetList = new Array();
  navLinkList.forEach(item => {
    const id = item.getAttribute("href").replace(/#/g, "");
    const offsetTop = document.getElementById(id).offsetTop;
    idList.push(id);
    scrollOffsetList[id] = offsetTop;
  });

  window.addEventListener("scroll", function () {
    const scrollDistance = window.scrollY;
    
  });
});