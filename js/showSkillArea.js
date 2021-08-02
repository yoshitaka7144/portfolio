// スキル表示用js
$(function () {
  // スキル表示切替
  $("input[name=radio-skill]").on("change", function () {
    // 全て非表示設定
    $("[id^='skill-']").css({ display: "none", opacity: 0 });

    // 選択されたスキルを表示
    var val = $("input[name=radio-skill]:checked").val();
    $("#skill-" + val).css("display", "flex").animate({ opacity: 1 }, 600, "swing");
  })
});