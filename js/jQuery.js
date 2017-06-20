$(document).ready(function() {



  $(".moreMoviesBtn").click(function() {
    $(".moreMoviesBox").slideToggle("slow");
    $(".moreMoviesBtn").hide();
  });

  $(".lessMoviesBtn").click(function() {
    $(".moreMoviesBox").slideToggle("slow");
    $(".moreMoviesBtn").show();
  });

  $(".moreSeriesBtn").click(function() {
    $(".moreSeriesBox").slideToggle("slow");
    $(".moreSeriesBtn").hide();
  });

  $(".lessSeriesBtn").click(function() {
    $(".moreSeriesBox").slideToggle("slow");
    $(".moreSeriesBtn").show();
  });

});
