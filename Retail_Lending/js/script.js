$(document).ready(function(){

})


$(function(){

  $('body').on('focus',"#datepicker", function(){
    $(this).datepicker();
  })
  
  var mainBlockNames = ["Personal Details","Property Details","Work Details","Other Details"]
  var colorassignment = ["blue","green","red","yellow"];
  
  $(".mainblock").click(function(){
    var chosencss='';
    var chosenmb = '';
    var mainBlockCopy = mainBlockNames.slice();
    var blockName = ($(this).children('div:first').text()).trim();
    if(blockName === "Personal Details"){
     chosencss = "block_blue";
     }
   else if(blockName === "Property Details"){
     chosencss= "block_green";
    }
   else if(blockName === "Work Details"){
    chosencss = "block_red";
    }
  else 
     {chosencss ="block_yellow";
      }

     colorassignment.splice(colorassignment.indexOf(chosencss.slice(6,chosencss.length)),1)
     

    var index = mainBlockNames.indexOf(blockName);
    mainBlockCopy.splice(index,1);

    $(".new").html("");
    
    $(".new").html("<div class='col-sm-4  col-md-4  col-lg-4  margin'>"+
"<div class='mainblock' id='1'><div class='block_"+colorassignment[0]+"'>"+ mainBlockCopy[0] +"</div> <div class='internalblock'><span class='backgroundblock'>Add Details</span></div></div><div class='mainblock margin' id='2'><div class='block_"+colorassignment[1]+"'>"+ mainBlockCopy[1] +"</div> <div class='internalblock'><span class='backgroundblock'>Add Details</span></div></div><div class='mainblock margin' id='3'><div class='block_"+colorassignment[2]+"'>"+ mainBlockCopy[2] +"</div> <div class='internalblock'><span class='backgroundblock'>Add Details</span></div></div></div>"+
"<div class='col-sm-8 col-md-8 col-lg-8 margin'><div class='formblock'><div class="+chosencss+">"+ blockName +" </div>"+
"<form id='validateform' method='get' action=''><div class ='input-group'>"+
"Name : <input type='text' id='name' class='form-control' minlength=4  required=true  name='name' placeholder ='Type full name'/></div>"+

"<div class='input-group'>Gender: <br/><input type='radio'  name ='gender' value='male' required='true'/> Male <input type='radio' name ='gender' value='female' required='true'/> Female</div>" +

"<div class ='input-group'>DOB: <input type='text' class='form-control' id='datepicker' name='dob' placeholder='Date' required='true'/></div>"+
"<div class ='input-group'>"+
"Mobile Number : <input class='form-control' number='true'  name='mob' placeholder ='Type Mobile Number' required='true'/>"+

"</div>"+
"<div class ='input-group'>"+
"Email : <input class='form-control' name='email' email='true' placeholder ='Type Email' required='true' />"+
"</div>"+
"<div class ='input-group'>PAN : <input class='form-control' name='pan' placeholder ='Type PAN' required='true'/></div>"+
"<div class ='input-group'>House No./Building Name : <input class='form-control' name='house' placeholder ='Type House No./Building Name' required='true'/></div>"+

"<div class ='input-group'>street Name : <input class='form-control' name='street' placeholder ='Type street Name' required='true'/></div>"+

"<div class ='input-group'>Locality and Area : <input class='form-control' name='locality' placeholder ='Type Locality and Area' required='true'/></div>"+

"<div class ='input-group'>City Name : <input class='form-control' name='city' placeholder ='Type City Name' required='true'/></div>"+

"<div class ='input-group'>State Name : <input class='form-control' name='state' placeholder ='Type State Name' required='true'/></div>"+

"<div class ='input-group'>Pincode : <input class='form-control' number='true' name='pincode' placeholder ='Type Pincode' required='true' /></div>"+
"<div class='input-group'><input class='submit' type='submit' value='submit'></div></form></div>")

})




$("body").on('input','#validateform',function(){
  $("#validateform").validate({
    submitHandler:function(){
      alert("successfully submitted");
      return true;
    }
  });
}) 


/*$("body").on('submit',function(){
  $("#name").rules("add",{
    minlength:2
  })
})*/

/*$("#name").rules("add" ,{
  minlength : 2
})*/
/*$("#validateform").validate({
  rules: {
    name:{
      required:true,
      minlength: 5
    }

  }


});*/
  
})
