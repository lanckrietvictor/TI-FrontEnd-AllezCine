$(document).ready(function() {

  $("a[href^='#']").click(function() {
    var target = $(this).attr("href");
    $("html, body").stop().animate({scrollTop: $(target).offset().top}, 1000);
  });

  $("#story-title").click(function(){
    $("#story-panel").slideToggle("slow");
  });
  $("#series-title").click(function(){
    $("#series-panel").slideToggle("slow");
  });
  $("#series-next-title").click(function(){
    $("#series-next-panel").slideToggle("slow");
  });
  $("#movies-title").click(function(){
    $("#movies-panel").slideToggle("slow");
  });


});
