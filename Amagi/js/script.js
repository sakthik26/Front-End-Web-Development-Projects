$(function() {

    var count;
    var tmpArray = [];
    var timeSortCount = 0;
    var searchResult = [];
    
    $("#dinput").datepicker({
      dateFormat: 'yy-mm-dd'
    });

    //creating Array of objects from JSON
    function Airedspots(sample) {
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

    function extractDate(date) {
      return date.slice(0, 10);
    }

    // Extracting time and converting it into user local time (Assuming the time specificed in JSON is in 
    //   UTC format
    function extractTime(time) {
      var offset = Number(new Date().getTimezoneOffset() * -1);
      var hour = Number(time.slice(11, 13)) + Math.floor(offset / 60);
      var ampm = (hour >= 12 ? 'pm' : 'am');
      var hours = (hour > 12 ? hour - 12 : hour);
      var of = Number(String((offset / 60 - Math.floor(offset / 60))).slice(2, 3)) * 6;

      var minutes = Number(time.slice(14, 16)) + of;
      if (minutes > 60) {
        hours = (hours + 1 > 12 ? hours - 12 : hours);
        minutes = minutes % 60;
      }
      return hours + ":" + minutes + " " + ampm;

    }

    //handling the date search
    $("#dsearch").click(function() {

      if ($("#dinput").val() === "")
        return;
      searchResult = [];
      var inputString = $("#dinput").val();
      sampleAiredSpotsArr.forEach(function(element) {
        if (element.date === String(inputString)) {
          searchResult.push(element);
        }
      })

      //create the UI block
      $("#block").html("");
      $(".nilresult").html("");
      insertBlockCount = 0;
      timeSortCount = 0;
      if (searchResult.length == 0) {
        $('.nilresult').html("0 Results Returned");
        return;
      }
      handleDate(searchResult);
      $(".sortdate").remove(".sortdate");

    })

    // Handling the string search
    $("#search").click(function() {

        if ($("#sinput").val() === "") {
          return;
        }

        searchResult = [];
        var inputString = $("#sinput").val();
        sampleAiredSpotsArr.forEach(function(element) {

            if (element.client_name === inputString) {
              searchResult.push(element);
            } else if (element.channel_name === inputString) {
              searchResult.push(element);
            } else if (element.city_name === inputString) {
              searchResult.push(element);
            } else if (element.campaign_name === inputString) {
              searchResult.push(element);
            } else if (element.brand_name === inputString) {
              searchResult.push(element);
            }

          })
          //create the UI
        $("#block").html("");
        $(".nilresult").html("");
        insertBlockCount = 0;
        timeSortCount = 0;
        if (searchResult.length == 0) {
          $('.nilresult').html("0 Results Returned");
          return;
        }
        handleDate(searchResult);
        $(".sortdate").remove(".sortdate");

      }

    );

    var sampleAiredSpotsArr = [];
    //function start
    function start() {

      $.getJSON("https://amagi.herokuapp.com/ui-test/api/v1/spots", success).fail(error);

      function success(data) {

      data.forEach(function(element){
          sampleAiredSpots = new Airedspots(element);
          sampleAiredSpotsArr.push(sampleAiredSpots);
       })

        handleDate(sampleAiredSpotsArr);
      }
    }

    //find distinct dates from the Array of objects
    function returnDistinct(arr, attr) {

      var flags = [],
        returnArray = [],
        length = arr.length,
        i;
      for (i = 0; i < length; i++) {
        if (flags[arr[i][attr]]) continue;
        flags[arr[i][attr]] = true;
        returnArray.push(arr[i][attr]);
      }
      return returnArray.length;
    }

    //finding distinct dates from the Array of objects
    //creating blocks for individual dates 
    function handleDate(sampleAiredSpotsArr) {

      var flags = [],
        dateArray = [],
        length = sampleAiredSpotsArr.length,
        i;
      for (i = 0; i < length; i++) {
        if (flags[sampleAiredSpotsArr[i].date]) continue;
        flags[sampleAiredSpotsArr[i].date] = true;
        dateArray.push(sampleAiredSpotsArr[i].date);
      }

      for (var j = 0; j < dateArray.length; j++) {
        count = 0;
        
        tmpArray = [];
        sampleAiredSpotsArr.forEach(function(element) {
          if (element.date === dateArray[j]) {
            count++;
            tmpArray.push(element);
            insertBlock(element);

          }

        })
        
        
        $('.classflag'+classcount).wrapAll("<div class=airdate id=id" + j + " ></div>")
        /*$("#id"+j).prepend("<span id=idcon"+j+">"+dateArray[j] + "</span>");*/
       /* $("#id"+j).wrapAll("<span id=idcon"+j+">"+dateArray[j] + "</span>")*/

       $("<button id=idbtn"+j+" type =button style='margin-left:300px;' class='btn btn-default toggle'><i class='fa fa-sort'></i></button>").insertBefore("#id"+j);
        
      /* $("<Strong><span class='col-xs-8 col-xs-offset-2' style='margin-left:100px; margin-top:50px' id=idcon"+j+">"+dateArray[j] + "</span></Strong>").insertBefore("#id"+j);
      */  $("#idbtn"+j).wrapAll("<span class='col-xs-8 col-xs-offset-2' style='position:relative;z-index:100;float:left;color:white;background-color:black;border-radius:10px;margin-top:100px;' id=idcon"+j+">"+dateArray[j] + "</span>");

        sendCount(String("id" + j + "&" + count));
        individualCount(tmpArray, String("id" + j + "&" + count));
        classcount++;
      }
    }
    //Handle the show/hide of blocks
    $("#block").on("click",".toggle",function(){
      var btnid= $(this).attr('id');
      var btnNumber = btnid.slice(5,btnid.length);
      if($("#id"+btnNumber).hasClass('displaynone')){
        $('#id'+btnNumber).addClass('displayblock')
        $('#id'+btnNumber).removeClass('displaynone')
        $('#timeasc'+btnNumber).addClass('displayblock');
        $('#timedes'+btnNumber).addClass('displayblock');
        $('#timeasc'+btnNumber).removeClass('displaynone');
        $('#timedes'+btnNumber).removeClass('displaynone');

      }else{
        $('#id'+btnNumber).addClass('displaynone')
        $('#id'+btnNumber).removeClass('displayblock')
         $('#timeasc'+btnNumber).addClass('displaynone');
         $('#timedes'+btnNumber).addClass('displaynone');
         $('#timeasc'+btnNumber).removeClass('displayblock');
         $('#timedes'+btnNumber).removeClass('displayblock');
         
      }

    })

    //To include the number of spot counts

    function sendCount(str) {
      var c = str.indexOf('&');
      var totalCount = Number(str.slice(c + 1, str.length));
      var id = str.slice(0, c);
      var idcontain = id.slice(2,id.length);  
      /*alert("#" + id+" "+"#idcon"+idcontain);*/
      $("#idcon"+idcontain).append("<br/> Spots:" + totalCount);
    } 

    // To include the total number of clients/channels/cities to which services were provided
    // on a day

    function individualCount(tmpArray, str) {
      var clientCount = returnDistinct(tmpArray, "client_name");
      var channelCount = returnDistinct(tmpArray, "channel_name");
      var cityCount = returnDistinct(tmpArray, "city_name");
      var campaignCount = returnDistinct(tmpArray, "campaign_name");
      var brandCount = returnDistinct(tmpArray, "brand_name"),
        c = str.indexOf('&');
      var id = str.slice(0, c);
      var idcontain = id.slice(2,id.length);
      $("#idcon"+idcontain).append("<br/>Clients:" + clientCount + " Channels:" + channelCount + " Cities:" + cityCount +
        " Campaigns:" + campaignCount + " Brands:" + brandCount +
        " <div class='sortdate'><button id=timeasc" + timeSortCount + " type=button class='btn remove'><span style=font-size:14px class=icon><i class='fa fa-sort-amount-asc'></i></button></div>" +
        "<div class='sortdate'><button id=timedes" + timeSortCount + " type=button class='btn remove'><span style=font-size:14px class=icon><i class='fa fa-sort-amount-desc'></i></button></div>");
      timeSortCount++;
    }
    var insertBlockCount = 0;
    var classcount=0;
    // Insert the block onto the page
    function insertBlock(obj) {

      $("#block").append("<div class='col-md-6  classflag"+classcount+"' id=ibc" + insertBlockCount + " style=display:block> <div class=overlay><div class=row ><div class='col-xs-12 col-sm-3'> <img class='img img-responsive center-block' src=" + obj.thumbnail_path + "></img></div><div class='col-xs-12 col-sm-9'><span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-clock-o'></i>" + obj.airedTime + "," + obj.date + "</span><br>" + "<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-user'></i>" + obj.client_name + "</span>" + "<br>" + "<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-bolt'></i>" + obj.brand_name + "</span>" + "<br>" + "<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-film'></i>" + obj.channel_name + "</span>" + "<br>" + "<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-bullhorn'></i>" + obj.city_name + "</span></div></div></div></div>")
      insertBlockCount++;
    }

    //handling the sorting of dates.

    $("#asc").click(function() {
      $("#block").html("");
      sampleAiredSpotsArr.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
      })
      insertBlockCount = 0;
      timeSortCount = 0;
      handleDate(sampleAiredSpotsArr);
    })

    // descending sort
    $("#des").click(function() {
      $("#block").html("");
      sampleAiredSpotsArr.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      })
      insertBlockCount = 0;
      timeSortCount = 0;
      handleDate(sampleAiredSpotsArr);
    })

    // Display blocks after time sort
    $("#block").on('click', '.btn', function(event) {
      var btnid = event.target.id;
      var sort = btnid.slice(0, 7);
      var count = Number(btnid.slice(7, btnid.length));
      var date = $("#idcon" + count).text().slice(0, 10);

      var ibcId = $("#id" + count).children(":first").attr('id');
      var ibcCount = Number($("#id" + count).children(":first").attr('id').slice(3, ibcId.length));
      var timeSortedArray = searchDate(date, sort),
        length = timeSortedArray.length;

      timeSortedArray.forEach(function(element) {

        $($("#ibc" + ibcCount)).html("<div class=overlay><div class=row ><div class='col-xs-12 col-sm-3'> <img class='img img-responsive center-block' height=150 width=80 src=" + element.thumbnail_path + "></img></div><div class='col-xs-12 col-sm-9'><span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-clock-o'></i>" + element.airedTime + "," + element.date + "</span><br>" + "<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-user'></i>" + element.client_name + "</span>" + "<br>" + "<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-bolt'></i>" + element.brand_name + "</span>" + "<br>" + "<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-film'></i>" + element.channel_name + "</span>" + "<br>" + "<span style='font-size:14px' class='icon'><i style='margin-left:0px;margin-right:4px' class='fa fa-bullhorn'></i>" + element.city_name + "</span></div></div></div>")
        ibcCount++;
      });
    });

    // Time sort
    function searchDate(date, sort) {

      var selectedDateArr = []

      sampleAiredSpotsArr.forEach(function(element) {

        if (element.date === date) {
          selectedDateArr.push(element);
        }
      })

      //sort time
      if (sort === 'timedes') {
        selectedDateArr.sort(function(a, b) {
          return Date.parse('01/01/2013 ' + b.airedTime) - Date.parse('01/01/2013 ' + a.airedTime);
        })
      } else if (sort === 'timeasc') {
        selectedDateArr.sort(function(a, b) {
          return Date.parse('01/01/2013 ' + a.airedTime) - Date.parse('01/01/2013 ' + b.airedTime);
        })
      }

      return selectedDateArr;

    }

    function error() {
      alert("Error retrieving location information. Please reload the page or try again later.");
    }
    start();
  })
  /**/