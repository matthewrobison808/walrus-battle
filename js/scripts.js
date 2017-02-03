$(document).ready(function(){
  $("#good-attack").click(function(){
    $("#evil-healed").hide();
    $("#evil-hurt").show();
    $("#good-hurt").hide();
    $("#good-healed").show();
  });

  $("#evil-attack").click(function(){
    $("#evil-healed").show();
    $("#evil-hurt").hide();
    $("#good-healed").hide();
    $("#good-hurt").show();
  });

  $("#king").click(function(){
    $("#evil-healed").hide();
    $("#evil-hurt").hide();
    $("#good-hurt").hide();
    $("#good-healed").hide();
    $("#walrus-king").fadeIn();
  });
});
