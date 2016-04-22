
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
   
  
   /* $.getJSON("https://api.twitch.tv/kraken/streams/comster404?callback=?",success);
  

   function success(data){
    alert(JSON.stringify(data));
    }*/

    //constructing the api call to twitch.tv
    function getTwitchStatus(channel){

    function buildUrl(type,channelName){
      $.getJSON("https://api.twitch.tv/kraken/streams/"+channelName+"?callback=?",success).fail(error);
    }

     buildUrl("streams",channel);     
    
    // populate the streamer data using constructor call
    function StreamData(channelData){
       this.channelName = channelData.name;       
       this.channelLang = channelData.language;
       this.logo = channelData.logo;
       this.url = channelData.url;
       this.followers = channelData.followers;
    }


     function success(streamersData){
        alert("dfgdf");
        if(streamersData.stream === null){
        $.getJSON("https://api.twitch.tv/kraken/channels/"+channel+"?callback=?",function(channelData){
        var channelObj = new StreamData(channelData);   
        channelObj.channelStatus = "offline";
        alert(JSON.stringify(channelObj));
        }).fail(error);
        insertStream(channelObj);
       }


       else if(streamersData.stream === undefined){
           var accountBlocked = {status: "No Account Found"};
           insertStream(accountBlocked);
      }

       else{
          var streamObj = new StreamData(streamersData);
          streamObj.channelStatus = "Online";
          insertstream(streamObj);
       }

    
    }
    }
   function error(){
          alert("The requested data is not available at the moment. Please try after sometime.");
     }
    
   streamers.forEach(getTwitchStatus);    

   
 })();

   


