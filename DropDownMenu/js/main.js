$(".trigger").click(function() {
  //alert("Clicked li!!!");
  $(this).toggleClass("open");
  $(this).siblings().toggleClass("open");
  $(".trigger").not(this).removeClass("open");
  $(".top-level-menu > li").not(this).siblings().removeClass("open");
});
