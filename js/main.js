$(function () {
  $(".box").each(function () {
    $(this).click(function () {
      var img_name = $(this).find("a");
      var img_src = $(img_name).attr("phref");
      var img_title = $(img_name).attr("title");
      var img_size = $(img_name).attr("data");
      $(".pop").show();
      $(".pop img").attr("src", img_src);
      $(".pop .txt").text(img_title);
      $(".pop img").width(img_size);
      $(".pop_2").show();
      $(".pop_2 img").attr("src", img_src);
      $(".pop_2 .txt").text(img_title);
      $(".pop_2 img").width(img_size);
    });

    $(".close, .pop").click(function () {
      $(".pop").hide();
    });
    $(".close_2, .pop_2").click(function () {
      $(".pop_2").hide();
    });
  });
});
