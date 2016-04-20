
$(function(){

   var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
   
  
    $.getJSON("https://api.twitch.tv/kraken/streams/test_channel?callback=?",success);
  

   function success(data){
    alert(JSON.stringify(data));
    }

    alert("sdfgfdf");
 })();

   


