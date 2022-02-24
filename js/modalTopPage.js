// トップページのモーダル用js

window.addEventListener("load", () => {
  const modal = document.getElementById("modal-container");
  const modalSkillCircleElement = modal.querySelector(".skill-circle");
  const modalSkillNameElement = modal.querySelector(".skill-info .name");
  const modalSkillRemarksElement = modal.querySelector(".skill-info .remarks");
  const modalSkillDetailsElement = modal.querySelector(".skill-info .details");

  // モーダルクリック時に解除
  modal.addEventListener("click", () => {
    modalSkillCircleElement.removeChild(modalSkillCircleElement.firstElementChild);
    modal.style.display = "none";
  });

  // スキルのアイテムにクリック時にモーダルを表示
  document.querySelectorAll("#skills .item-list .item").forEach(item => {
    item.addEventListener("click", () => {
      const skillName = item.querySelector(".skill-name").textContent;
      const skillRemarks = item.querySelector(".skill-remarks").textContent;
      const skillDetails = item.querySelector(".skill-details").innerHTML;
      const circleElement = item.querySelector(".skill-circle .circle").cloneNode(true);

      modalSkillNameElement.textContent = skillName;
      modalSkillRemarksElement.textContent = skillRemarks;
      modalSkillDetailsElement.innerHTML = skillDetails;
      modalSkillCircleElement.appendChild(circleElement);

      modal.style.display = "block";
    })
  });
});