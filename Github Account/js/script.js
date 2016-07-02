$(function() {
  
  // initial github accounts to display
  var streamers = ["addyosmani", "storbeck","Adam"];
  var ghAccountObj =[];
  // retrieves json data from the github api 
  function getGhInfo(Name) {

    // default stream values
    var stream = {
      name: Name,
      location: "",
      logo: "https://jpk-image-hosting.s3.amazonaws.com/twitch-app/no-image-available.jpg",
      link: "#",
      followers: ""
    }
    
    // assemble the github api url
    function buildUrl(name) {
      return "https://api.github.com/users/"+name;
    }
    
    // make ajax call to github api
    $.getJSON(buildUrl(Name), function(streamData) {
      
      if (streamData.id !== null) {
       
          stream.name = streamData.name;
          stream.location = streamData.location;
          stream.logo = streamData.avatar_url || "https://jpk-image-hosting.s3.amazonaws.com/twitch-app/no-image-available.jpg";
          stream.link = streamData.html_url;
          stream.followers = streamData.followers;
          ghAccountObj.push(stream);
          // insert this stream into the DOM
          insertStream(stream);
        
      // if no account exists, keep the default account
      } else if (streamData.message === "Not Found") {
        stream.name = "no account found";
        stream.location = "";
        stream.logo ="https://jpk-image-hosting.s3.amazonaws.com/twitch-app/no-image-available.jpg";
        stream.link = "#";
        stream.followers = 0;
        ghAccountObj.push(stream);
        // insert this stream into the DOM
        insertStream(stream);
      
      } 
    }).fail(error);
   
    function error() {
      alert("Error connecting to Github API!");
    }
  } // /getGhInfo
   
  //ascending
  $('#name').click(function(){
     
     $('.js-streams').html("");
     console.log(ghAccountObj);
     ghAccountObj.sort(function(a,b){
      
      if(a.name < b.name)
        return -1
       if(a.name > b.name)
        return 1
       return 0;
     })
     console.log(ghAccountObj);
     ghAccountObj.forEach(function(stream) {
      insertStream(stream);
    });
  }) 

  $('#location').click(function(){
     
     $('.js-streams').html("");
     ghAccountObj.sort(function(a,b){
      if(a.location < b.location)
        return -1
       if(a.location > b.location)
        return 1
       return 0;
     })
     ghAccountObj.forEach(function(stream) {
      insertStream(stream);
    });
  }) 

  $('#followers').click(function(){
     
     $('.js-streams').html("");
     ghAccountObj.sort(function(a,b){
      if(a.followers < b.followers)
        return -1
       if(a.followers > b.followers)
        return 1
       return 0;
     })
     ghAccountObj.forEach(function(stream) {
      insertStream(stream);
    });
  }) 

  //descending
   $('#name1').click(function(){
     
     $('.js-streams').html("");
     console.log(ghAccountObj);
     ghAccountObj.sort(function(a,b){
      
      if(a.name > b.name)
        return -1
       if(a.name < b.name)
        return 1
       return 0;
     })
     console.log(ghAccountObj);
     ghAccountObj.forEach(function(stream) {
      insertStream(stream);
    });
  }) 

  $('#location1').click(function(){
     
     $('.js-streams').html("");
     ghAccountObj.sort(function(a,b){
      if(a.location > b.location)
        return -1
       if(a.location < b.location)
        return 1
       return 0;
     })
     ghAccountObj.forEach(function(stream) {
      insertStream(stream);
    });
  }) 

  $('#followers1').click(function(){
     
     $('.js-streams').html("");
     ghAccountObj.sort(function(a,b){
      if(a.followers > b.followers)
        return -1
       if(a.followers < b.followers)
        return 1
       return 0;
     })
     ghAccountObj.forEach(function(stream) {
      insertStream(stream);
    });
  }) 



  // builds html string from the account data and inserts it on the page
  function insertStream(stream) {
    var status_class = "";
    var html_to_insert;
   
    
    html_to_insert = "<div class='col-md-6 col-lg-4 stream'><a href='#' class='remove-link'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a><a href='" + stream.link + "' target='_blank'><div class='well " + status_class + "'><div class='overlay'></div><div class='row'><div class='col-xs-12 col-sm-3'><img class='img img-responsive center-block' src='" + stream.logo + "' alt='" + stream.name + "'></div><div class='col-xs-12 col-sm-9'><h2>" + stream.name + "</h2><h3>" + stream.location + "</h3><p>Followers:" + stream.followers + "</p></div></div></div></a></div>";
 
    $(html_to_insert).appendTo('.js-streams').fadeIn(800); 
    
    // set the boxes to equal height after insertion
    eqHeight();
    
    // ensure new elements have this event listener 
    $(".remove-link").on("click", function(e) {
      e.preventDefault();
      removeObj($(this).parent().find("h2").text());
      $(this).removeStream();
    });
  }  // /insertStream
  
  // hides a stream div
  $.fn.removeStream = function() {

    $(this).closest(".stream").fadeOut(800);
  }

  //removes the object once account deleted.
   function removeObj(uname){
    console.log(uname);
    var len = ghAccountObj.length;

    while(len--){
      console.log(JSON.stringify(ghAccountObj[len]));
     if(ghAccountObj[len] && (ghAccountObj[len].name === uname)) {
      ghAccountObj.splice(len,1);
     }
    }    
    console.log(ghAccountObj);
   }
  // sets all the boxes to the height of the tallest box
  // compensates for bootstrap float and ensures proper layout
  function eqHeight() {
    var winWidth = window.innerWidth;
    var divs = $('.well .row');
    var new_height = 0;
    divs.css("height", "auto");
    if ( winWidth > 768) {
      divs.each(function() {
        if ( $(this).height() > new_height ) {
          new_height = $(this).height();
        }
      });
      divs.css("height", new_height + "px");
    }
  }
  
  // get the stream info for the initial array of streamers
  streamers.forEach(function(stream) {
    getGhInfo(stream);
  });
 
  // ensure equal height boxes on window resize
  $(window).on("resize", function() {
    eqHeight();
  });
  
  // form submit retreives and displays a new account name from the github api
  $(document).on("submit", "form", function(e) {
    e.preventDefault();
    getGhInfo($("input").val());
    $("input").val("");
  });
  
});