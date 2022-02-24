// 
window.addEventListener("load", () => {
  const modal = document.getElementById("modal-container");
  const imgElement = document.getElementById("popup-img");

  // モーダルクリック時に解除
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // popup対象の要素にclickイベント設定
  document.querySelectorAll('.popup').forEach(item => {
    item.addEventListener("click", () => {
      imgElement.src = item.src;
      modal.style.display = "block";
    });
  });
});