$(document).ready(function() {

  $(".moreMoviesBtn").click(function() {
    $(".moreMoviesBox").slideToggle("slow")
    $(".moreMoviesBtn").text("Moins de films");
  });

  $(".moreSeriesBtn").click(function() {
    $(".moreSeriesBox").slideToggle("slow")
//    $(".moreSeriesBtn").text("Moins de films");
  });

});
