

$(function(){

   var streamers = ["freecodecamp",
                     "storbeck", 
                     "terakilobyte",
                     "habathcx",
                     "RobotCaleb",
                     "thomasballinger",
                     "noobs2ninjas",
                     "beohoff",
                     "qazitv"];
   
  
   /* $.getJSON("https://api.twitch.tv/kraken/streams/comster404?callback=?",success);
  

   function success(data){
    alert(JSON.stringify(data));
    }*/

    //constructing the api call to twitch.tv
    function getTwitchStatus(channel){

    function buildUrl(channelName){
      $.getJSON("https://api.twitch.tv/kraken/streams/"+channelName+"?callback=?",success).fail(error);
    }

     buildUrl(channel);     
    
    // populate the streamer data using constructor call
    function StreamData(channelData){
       this.channelName = channelData.name;       
       this.channelLang = channelData.language;
       this.logo = channelData.logo || "https://jpk-image-hosting.s3.amazonaws.com/twitch-app/no-image-available.jpg";
       this.url = channelData.url;
       this.followers = channelData.followers;
    }


     function success(streamersData){
        if(streamersData.stream === null){
        var channelObj={};
        $.getJSON("https://api.twitch.tv/kraken/channels/"+channel+"?callback=?",function(channelData){
        channelObj= new StreamData(channelData);   
        channelObj.channelStatus = "offline";
         insertStream(channelObj);
        }).fail(error);
       
       }


       else if(streamersData.stream === undefined){
           var accountBlocked = {status: "No Account Found"};
           insertStream(accountBlocked);
      }

       else{
          /*alert(JSON.stringify(streamersData));*/
          var streamObj = new StreamData(streamersData.stream.channel);
          streamObj.channelStatus = "Online";
          
         /* alert(JSON.stringify(streamersData.stream.channel));*/
          insertStream(streamObj);
          
       }   
    }

    }
    
   function insertStream(obj){
    
   alert(JSON.stringify(obj));
   $("#streambody").append("<div class=col-lg-4><div class=streamers><img src="+ obj.logo +" width=40 height=40></img><br/>"+obj.channelName+"</div></div>");

    }
  
   function error(){
          alert("The requested data is not available at the moment. Please try after sometime.");
     }
    
   streamers.forEach(getTwitchStatus);    

   
 })

   


