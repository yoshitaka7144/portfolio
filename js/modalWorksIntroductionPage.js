// 制作物紹介ページのモーダル用js

window.addEventListener("load", () => {
  const modal = document.getElementById("modal-container");
  const modalImgElement = document.getElementById("popup-img");

  // モーダルクリック時に解除
  modal.addEventListener("click", () => {
    modalImgElement.src = "";
    modal.style.display = "none";
  });

  // popup対象の要素クリック時にモーダル表示
  document.querySelectorAll(".popup").forEach(item => {
    item.addEventListener("click", () => {
      modalImgElement.src = item.src;
      modal.style.display = "block";
    });
  });
});