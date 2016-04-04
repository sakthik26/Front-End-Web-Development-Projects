
$(function(){
    
    var apiKey = "27616280e5d9fd54e35fb59233db001e";

 function displayweather(unit){
    $.getJSON("http://ip-api.com/json",success).fail(error);


        function success(data){
    	var latitude = data["lat"];
    	var longitude = data.lon;
    	var city = data.city + ", " + data.region;
    	var weatherAppUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&lat=" + latitude +"&lon"+longitude+"&appid="+apiKey;
       
        getweatherreport(weatherAppUrl,unit);

     }}
    
     function error() {
      alert("Error retrieving location information. Please reload the page or try again later.");
    }

     function getweatherreport(url,unit){
       
     	$.getJSON(url,function(data){
           
            var country = data.sys.country;
            var city = data.name;
            var description = data.weather[0].description;
            var image = data.weather[0].icon;
            var temp = converttemp(data.main.temp,unit);
            var wind = getwindspeed(data.wind.speed,unit);
            var hum = data.main.humidity;
          var sunrise = data.sys.sunrise
          var sunset = data.sys.sunset
           $("#city").html(city+","+country);
           $("#weathericon").html("<img src=http://openweathermap.org/img/w/"+image+".png width=100 height=100/>");
           $("#description").html(description);
           $("#temp").html(temp);
           $("#hum").html(hum+"%");
           $("#wind").html(wind);
          daynight(sunrise,sunset);
           
     	})
     }  
       

    function daynight(sunrise,sunset){
      var currtime= Math.round(new Date()/1000);

      if(currtime>=sunrise && currtime < sunset){
        $("body").removeClass("night");
        $("body").addClass("day");
      }
      else{
        $("body").removeClass("day");
        $("body").addClass("night");
      }


     } 
     function getwindspeed(wind,unittype){
        if(unittype == "imperial"){
        return Math.round((wind) * 2.23694)+" M/Hr";
       } else if(unittype == "metric"){
        return Math.round(wind)+" M/Sec";
       }
     }
     function converttemp(temp,unittype){
      if(unittype == "imperial"){
        return Math.round((temp) * 9/5 - 459.67)+" F";
       } else if(unittype == "metric"){
        return Math.round((temp) - 273.15)+" C";
       }
     }
    
      displayweather("imperial");

         $(".btn").click(function(){
         if($(this).hasClass("imperial")){
            $(this).removeClass("imperial");
            $(this).addClass("metric");
            $(this).text("metric");
            displayweather("imperial");
         }
         else {
            $(this).removeClass("metric");
            $(this).addClass("imperial");
            $(this).text("imperial");
            displayweather("metric");
         }}

         );


      })
      
     
	 /*$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=27616280e5d9fd54e35fb59233db001e" , function(json){
       alert(JSON.stringify(json));
     });*/

