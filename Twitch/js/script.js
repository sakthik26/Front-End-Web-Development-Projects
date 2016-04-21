
"use strict";
$(function(){

   var streamers = ["freecodecamp",
                     "storbeck", 
                     "terakilobyte",
                     "habathcx",
                     "RobotCaleb",
                     "thomasballinger",
                     "noobs2ninjas",
                     "beohoff"];
   
  
    $.getJSON("https://api.twitch.tv/kraken/channels/freecodecamp?callback=?",success);
  

   function success(data){
    alert(JSON.stringify(data));
    }

    //constructing the api call to twitch.tv
   /* function getTwitchStatus(element){
    alert(element);
    $.getJSON("https://api.twitch.tv/kraken/channels/freecodecamp?callback=?",success).fail(error);
  

     function success(streamersData){
       alert(JSON.stringify(streamersData));
      }
    }

    function error(){
      alert("The requested data is not available at the moment. Please connect after sometime.")
    }
    

    
    streamers.forEach(getTwitchStatus);    
*/

 })();

   


