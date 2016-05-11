$(function(){

   var count; 
   var tmpArray=[];
   var timeSortCount=0;
   var searchResult=[];

   $("#dinput").datepicker({dateFormat: 'yy-mm-dd'});
  function Airedspots(sample){
    this.id = sample.id; 
    this.aired_at = sample.aired_at;
    this.duration = sample.duration;
    this.client_name = sample.client_name;
    this.channel_name = sample.channel_name;
    this.city_name = sample.city_name;
    this.campaign_name = sample.campaign_name;
    this.brand_name = sample.brand_name;
    this.video_path = sample.video_path;
    this.thumbnail_path = "http://www.afaqs.com/all/news/images/news_story_grfx/2015/43255_1_home_big.jpg";
    this.date = extractDate(sample.aired_at);
    this.airedTime = extractTime(sample.aired_at);
  }

  function extractDate(date){
    return date.slice(0,10);
  }

  function extractTime(time){
    var offset = Number(new Date().getTimezoneOffset() * -1);
    var hour = Number(time.slice(11,13)) + Math.floor(offset/60);
    var ampm = (hour >= 12 ? 'pm':'am'); 
    var hours = (hour > 12 ? hour-12 : hour );
    var of =  Number(String((offset/60 - Math.floor(offset/60))).slice(2,3))*6;
   
    var minutes =Number(time.slice(14,16))+of;
    if(minutes > 60){
      hours = (hours+1 > 12 ? hours-12 : hours);
      minutes = minutes % 60;
    }
    return hours+ ":" + minutes+" "+ ampm;


  }

  $("#dsearch").click(function(){

      if($("#dinput").val() === "")
        return;
      searchResult=[];
      var inputString = $("#dinput").val();
      sampleAiredSpotsArr.forEach(function(element){
        if(element.date === String(inputString)){
          searchResult.push(element);
        }
      })

      //create the UI
       $("#block").html("");
       $(".nilresult").html("");
       insertBlockCount=0;
       timeSortCount=0;
       if(searchResult.length ==0)
        {$('.nilresult').html("0 Results Returned"); return;}
       handleDate(searchResult);
        $(".sortdate").remove(".sortdate");

  })

  $("#search").click(function(){

    
    if($("#sinput").val() === ""){
         return;}
    
      searchResult=[];
      var inputString =  $("#sinput").val();
      sampleAiredSpotsArr.forEach(function(element){
        

        if(element.client_name === inputString){
          searchResult.push(element);
         }
        else if(element.channel_name === inputString){
          searchResult.push(element);
        }
         else if(element.city_name === inputString){
          searchResult.push(element);
        }
         else if(element.campaign_name === inputString){
          searchResult.push(element);
        }
         else if(element.brand_name === inputString){
          searchResult.push(element);
        }

      })
       //create the UI
       $("#block").html("");
       $(".nilresult").html("");
       insertBlockCount=0;
       timeSortCount=0;
       if(searchResult.length ==0)
        {$('.nilresult').html("0 Results Returned"); return;}
       handleDate(searchResult);
        $(".sortdate").remove(".sortdate");


     }
      
  );

  var sample,
        sample1 ,
        sample2 ,
        sample3 ,
        sample4 ,
        sampleAiredSpots ,
        sampleAiredSpots1,
        sampleAiredSpots2,
        sampleAiredSpots3,
        sampleAiredSpots4,
        sampleAiredSpots5,
        sampleAiredSpots6,
        sampleAiredSpots7,
        sampleAiredSpots8,
        sampleAiredSpots9,
        sampleAiredSpots10,
        sampleAiredSpotsArr=[];
	function start(){
    
	   $.getJSON("https://amagi.herokuapp.com/ui-test/api/v1/spots",success).fail(error);
	
     function success(data){
        /*sample = data[0];
        sample1 = data[1];
        sample2 = data[2];
        sample3 = data[3];
        sample4 = data[4];
        sample5 = data[5];
        sample6 =  data[6];
        sample7 =  data[7];
        sample8 =  data[8];
        sample9 =  data[9];
        sample10 =  data[10];*/
        data.forEach(function(element){
          sampleAiredSpots = new Airedspots(element);
          sampleAiredSpotsArr.push(sampleAiredSpots);
        })
       /* sampleAiredSpots = new Airedspots(sample);
        sampleAiredSpots1 = new Airedspots(sample1);
        sampleAiredSpots2 = new Airedspots(sample2);
        sampleAiredSpots3 = new Airedspots(sample3);
        sampleAiredSpots4 = new Airedspots(sample4);
        sampleAiredSpots5 = new Airedspots(sample5);
        sampleAiredSpots6 = new Airedspots(sample6);
        sampleAiredSpots7 = new Airedspots(sample7);
        sampleAiredSpots8 = new Airedspots(sample8);
        sampleAiredSpots9 = new Airedspots(sample9);
        sampleAiredSpots10 = new Airedspots(sample10);*/
        /*sampleAiredSpotsArr = [sampleAiredSpots,sampleAiredSpots1,sampleAiredSpots2,sampleAiredSpots3,sampleAiredSpots4,sampleAiredSpots5,sampleAiredSpots6,sampleAiredSpots7,sampleAiredSpots8,sampleAiredSpots9,sampleAiredSpots10];
*/
        
       
        handleDate(sampleAiredSpotsArr);

        //sort date 
        /*sampleAiredSpotsArr.sort(function(a,b){
          return new Date(a.date) - new Date(b.date);
        })

        sampleAiredSpotsArr.forEach(function(element){
          insertBlock(element);
        }) */

      //sort time 
       /*sampleAiredSpotsArr.sort(function(a,b){
        return Date.parse('01/01/2013 '+ a.airedTime) - Date.parse('01/01/2013 '+ b.airedTime);
       })

       sampleAiredSpotsArr.forEach(function(element){
          insertBlock(element);
        })*/
        
     }
   }

      //find distinct dates from the Array of objects
      function returnDistinct(arr,attr){

        var flags=[], returnArray=[], length = arr.length,i;
        for(i=0;i<length;i++){
          if(flags[arr[i][attr]]) continue;
          flags[arr[i][attr]] = true;
          returnArray.push(arr[i][attr]);
        }
        return returnArray.length;
      }


      function handleDate(sampleAiredSpotsArr){

         //finding distinct dates from the Array of objects
        
        var flags = [], dateArray =[],length = sampleAiredSpotsArr.length,i;
        for(i=0;i<length;i++){
          if(flags[sampleAiredSpotsArr[i].date]) continue;
          flags[sampleAiredSpotsArr[i].date] = true;
          dateArray.push(sampleAiredSpotsArr[i].date);
        }

        //creating blocks for individual dates  

         for(var j=0;j<dateArray.length;j++){
         count =0;
         tmpArray=[];
         $('#block').append("<div class=airdate id=id"+j+" style=margin-top:30px;>"+dateArray[j]+"</div>")
         sampleAiredSpotsArr.forEach(function(element){
            if(element.date === dateArray[j]){
              count++;
              tmpArray.push(element);
              insertBlock(element);   
              
            } 

         })
         sendCount(String("id"+j+"&"+count));         
         individualCount(tmpArray,String("id"+j+"&"+count));
       }

      }

      //To include the number of spot counts

      function sendCount(str){
       var c = str.indexOf('&');
       var totalCount = Number(str.slice(c+1,str.length));
       var id=str.slice(0,c);
       $("#"+id).append("  Spots:"+ totalCount);
      }

      // To include the total number of clients/channels/cities to which services were provided
      // on a day

      function individualCount(tmpArray,str){
         var clientCount = returnDistinct(tmpArray,"client_name");
         var channelCount = returnDistinct(tmpArray,"channel_name");
         var cityCount = returnDistinct(tmpArray,"city_name");
         var campaignCount = returnDistinct(tmpArray,"campaign_name");
         var brandCount = returnDistinct(tmpArray,"brand_name"),c=str.indexOf('&');
         var id=str.slice(0,c);
         $("#"+id).append("  Clients:"+ clientCount+" Channels:"+ channelCount+" Cities:"+cityCount
                           +" Campaigns:"+campaignCount+" Brands:"+brandCount +
                           " <div class='sortdate'><button id=timeasc&"+timeSortCount+" type=button class='btn'><span style=font-size:14px class=icon><i class='fa fa-sort-amount-asc'></i></button></div>"+
       "<div class='sortdate'><button id=timedes&"+timeSortCount+" type=button class='btn'><span style=font-size:14px class=icon><i class='fa fa-sort-amount-desc'></i></button></div>");
        timeSortCount++;
      }
      var insertBlockCount =0;
      function insertBlock(obj){      
      /*if(count ===0){
      $("#block").append("<div class=airdate style=margin-top:30px;>"+date+"</div><div class='col-md-6 col-lg-4' style=display:block><div class=overlay><div class=row ><div class='col-xs-12 col-sm-3'> <img class='img img-responsive center-block' height=150 width=80 src="+obj.thumbnail_path+"></img></div><div class='col-xs-12 col-sm-9'><span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-clock-o'></i>"+obj.airedTime+","+obj.date+"</span><br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-user'></i>"+  obj.client_name+"</span>"+"<br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-bolt'></i>"+  obj.brand_name+"</span>"+"<br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-film'></i>"+  obj.channel_name+"</span>"+"<br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-bullhorn'></i>"+  obj.city_name+"</span></div></div></div></div>")
       count++;
      }*/
     
      $("#block").append("<div class='col-md-6 col-lg-4' id=ibc"+insertBlockCount+" style=display:block> <div class=overlay><div class=row ><div class='col-xs-12 col-sm-3'> <img class='img img-responsive center-block' src="+obj.thumbnail_path+"></img></div><div class='col-xs-12 col-sm-9'><span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-clock-o'></i>"+obj.airedTime+","+obj.date+"</span><br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-user'></i>"+  obj.client_name+"</span>"+"<br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-bolt'></i>"+  obj.brand_name+"</span>"+"<br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-film'></i>"+  obj.channel_name+"</span>"+"<br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-bullhorn'></i>"+  obj.city_name+"</span></div></div></div></div>")
      insertBlockCount++;
      }

      //handling the sorting of dates.

      $("#asc").click(function(){
        $("#block").html("");
        sampleAiredSpotsArr.sort(function(a,b){
          return new Date(a.date) - new Date(b.date);
        })
        insertBlockCount=0;
        timeSortCount=0;
        handleDate(sampleAiredSpotsArr);
      })


      $("#des").click(function(){
        $("#block").html("");
        sampleAiredSpotsArr.sort(function(a,b){
          return new Date(b.date) - new Date(a.date);
        })
        insertBlockCount=0;
        timeSortCount=0;
        handleDate(sampleAiredSpotsArr);
      })
     
      $("#block").on('click','.btn',function(event){
          var btnid= event.target.id;
          var sort = btnid.slice(0,7);
          var count= btnid.slice(btnid.indexOf('&')+1 , btnid.length);
          var date = $("#id"+count).text().slice(0,10);
          var ibcId= $("#id"+count).next().attr('id');
          var ibcCount= Number($("#id"+count).next().attr('id').slice(3,ibcId.length));
          var timeSortedArray = searchDate(date,sort),length=timeSortedArray.length;
          
          timeSortedArray.forEach(function(element){
              
              $($("#ibc"+ibcCount)).html("<div class=overlay><div class=row ><div class='col-xs-12 col-sm-3'> <img class='img img-responsive center-block' height=150 width=80 src="+element.thumbnail_path+"></img></div><div class='col-xs-12 col-sm-9'><span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-clock-o'></i>"+element.airedTime+","+element.date+"</span><br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-user'></i>"+  element.client_name+"</span>"+"<br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-bolt'></i>"+  element.brand_name+"</span>"+"<br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-film'></i>"+  element.channel_name+"</span>"+"<br>"+"<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-bullhorn'></i>"+  element.city_name+"</span></div></div></div>")
              ibcCount++;
           });
          });
          

      

      function searchDate(date,sort){
       
        var selectedDateArr = []

        sampleAiredSpotsArr.forEach(function(element){

          if(element.date === date){
            selectedDateArr.push(element);
          }
        })

        //sort time
        if(sort === 'timedes'){
        selectedDateArr.sort(function(a,b){
        return Date.parse('01/01/2013 '+ b.airedTime) - Date.parse('01/01/2013 '+ a.airedTime);
        })
        }
        else if(sort === 'timeasc'){
        selectedDateArr.sort(function(a,b){
        return Date.parse('01/01/2013 '+ a.airedTime) - Date.parse('01/01/2013 '+ b.airedTime);
        })
        }
       
        return selectedDateArr;
        
      }
      function resultcount(){
      	/*alert($('#searchresults').children().length);*/
      	var cond = $('#searchresults').children().length;
      	  if(cond == 0){
      		$('.nilresult').html("0 Results Returned");
      	}else{
      		$('.nilresult').html("");
      	}

      	}
      
      
    
      function error() {
      alert("Error retrieving location information. Please reload the page or try again later.");
    }
	   start();
})
/**/