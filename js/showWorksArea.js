// 制作物表示切替用js
$(function () {
  // 表示切替
  $("input[name=radio-works]").on("change", function () {
    // 全て非表示設定
    $("[id^='works-']").css({ display: "none", opacity: 0 });

    // 選択されたスキルを表示
    var val = $("input[name=radio-works]:checked").val();
    $("#works-" + val).css("display", "flex").animate({ opacity: 1 }, 600, "swing");
  })
});