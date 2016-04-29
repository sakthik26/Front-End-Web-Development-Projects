$(function(){

  // Implementing backspace 
  $("#backspace").click(function handler(){
     var screenContent = ($(".screen").text());

     //extract everything except the last number
     /*screenContent = screenContent/10;
     screenContent = Math.floor(screenContent);*/

    /* screenContent = screenContent.split("").slice(0,screenContent.length-1).join("");*/
      screenContent = screenContent.slice(0,-1);
     
     $(".screen").text(screenContent);
     
  })

  // Clear screen
  $("#clearscreen").click(function handler(){
       $(".screen").text("");
  })

  //displaying contents on the screen
  $(".key").click(function handler(){
        var element =  $(this).text();
       if( element !== 'AC'  &&  element !== 'CE' && element !== '='){
        var element = $(this).text();
        /*if(!isNaN(element))
         element = Number(element);*/      
      
     $(".screen").append(element);}
  })


  //evaluate the contents
  $("#result").click(function endResult(){
     var resultOf = eval($(".screen").text());
     $(".screen").text(resultOf);

  })

  



})();