$(function(){

	  $(".btn").click(function(){
      $("#add").append('<div><input name=input[] type=text/><button class="delete">Delete</button></div><br/>');
    })


$("body").on("click",".delete",function(){
   $(this).parent("div").remove();
})

});