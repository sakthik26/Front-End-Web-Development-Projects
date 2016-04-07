$(function(){

	$("#random").click(function(){
	   window.location.href="http://en.wikipedia.org/wiki/Special:Random";
	})

	$("#searchwiki").click(function(){

		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&titles=hello%20world&prop=revisions&rvprop=content&format=json&callback=?",success).fail(error);
	
     function success(data){
     	alert(JSON.stringify(data));
     }

      function error() {
      alert("Error retrieving location information. Please reload the page or try again later.");
    }
	})
})