$(document).ready(function(){
  $("#submit").click(function(){
  	$("#thanks").append("<div class='col-sm-4 col-sm-offset-4 hidden-xs'><br><p class='thankyou'>Thank you!</p></div>");
  	$("#thanks").append("<div class='col-xs-8 col-xs-offset-2 visible-xs'><br><p class='thankyou'>Thank you!</p></div>");
  });
 });