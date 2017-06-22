$(document).ready(function() {


  $("a[href^='#']").click(function() {
    var target = $(this).attr("href");
    $("html, body").stop().animate({scrollTop: $(target).offset().top}, 1000);
  });

  $("#story-title").mouseenter(function(){
    $(".bandeau-img").css("margin-top","15px");
  });
  $("#story-title").mouseleave(function(){
    $(".bandeau-img").css("margin-top","10px");
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
