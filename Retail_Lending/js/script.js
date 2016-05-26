$(function(){

  $("#datepicker").datepicker();
  
  var mainBlockNames = ["Personal Details","Property Details","Work Details","Other Details"]
  $(".mainblock").click(function(){
    
    val blockName = ($(this).children('div:first').text());
  })

})
