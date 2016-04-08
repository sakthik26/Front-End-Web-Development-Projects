$(function(){

	$("#random").click(function(){
	   window.location.href="http://en.wikipedia.org/wiki/Special:Random";
	})

	$("#searchwiki").click(function(){

		$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=IronMan&limit=20&namespace=0&format=json&callback=?",success).fail(error);
	
     function success(data){

       
     	var htmlData=data[1][1];
     	alert(htmlData);
     	alert(JSON.stringify(data));
     	/*$("#block").append($.parseHTML(htmlData));*/
     }

      function error() {
      alert("Error retrieving location information. Please reload the page or try again later.");
    }
	})
})
