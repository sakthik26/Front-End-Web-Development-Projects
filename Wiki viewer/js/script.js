$(function(){

	$("#random").click(function(){
	   window.location.href="http://en.wikipedia.org/wiki/Special:Random";
	})

	$("#searchwiki").click(function(){

		$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=BatMan&limit=10&namespace=0&format=json&callback=?",success).fail(error);
	
     function success(data){
        var searchTerms=[];

     	searchTerms=data[1].slice(); 
     	searchDescription = data[2].slice();
     	searchLink = data[3].slice();
        createblock(searchTerms,searchDescription,searchLink);
     	/*$("#block").append($.parseHTML(htmlData));*/
     }

      function createblock(searchTerms,searchDescription,searchLink){
        for(var i=0;i<searchTerms.length;i++){
      	$("#searchresults").append("<a href="+ searchLink[i] + "><div class=block>"+
      		searchTerms[i] +"<br>" + searchDescription[i] +
      		"</div></a>");}
      }
      

      function error() {
      alert("Error retrieving location information. Please reload the page or try again later.");
    }
	})
})
