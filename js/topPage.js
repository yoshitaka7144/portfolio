// ポートフォリオトップページ用js
window.addEventListener("load", function () {
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
});
