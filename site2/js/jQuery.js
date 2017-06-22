$(document).ready(function() {


  $("a[href^='#']").click(function() {
    var target = $(this).attr("href");
    $("html, body").stop().animate({scrollTop: $(target).offset().top}, 1000);
  });

  $("#story").mouseenter(function(){
    $("#bandeau-blue").css("margin-top","15px");
  });
  $("#story").mouseleave(function(){
    $("#bandeau-blue").css("margin-top","10px");
  });

  $("#series").mouseenter(function(){
    $("#bandeau-orange").css("margin-top","15px");
  });
  $("#series").mouseleave(function(){
    $("#bandeau-orange").css("margin-top","10px");
  });

  $("#series-next").mouseenter(function(){
    $("#bandeau-purple").css("margin-top","15px");
  });
  $("#series-next").mouseleave(function(){
    $("#bandeau-purple").css("margin-top","10px");
  });

  $("#movies").mouseenter(function(){
    $("#bandeau-red").css("margin-top","15px");
  });
  $("#movies").mouseleave(function(){
    $("#bandeau-red").css("margin-top","10px");
  });

  $("#story").click(function(){
    $("#story-panel").slideToggle("slow");
  });
  $("#series").click(function(){
    $("#series-panel").slideToggle("slow");
  });
  $("#series-next").click(function(){
    $("#series-next-panel").slideToggle("slow");
  });
  $("#movies").click(function(){
    $("#movies-panel").slideToggle("slow");
  });


  var angle = 0;
  setInterval(function(){
      angle+=3;
     $("#logo-footer").rotate(angle);
},50);

});
