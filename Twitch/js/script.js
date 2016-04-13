$(function(){

	$("#random").click(function(){
	   window.open("http://en.wikipedia.org/wiki/Special:Random", "_blank");
	})



	$("#searchwiki").click(function(){
       $("#searchresults").html("");
       var key= $("#search").val();
      /* alert("https://en.wikipedia.org/w/api.php?action=opensearch&search="+key+
	   	"&limit=10&namespace=0&format=json&callback=?");*/
	   $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+key+
	   	"&limit=10&namespace=0&format=json&callback=?",success).fail(error);
	
     function success(data){
        var searchTerms=[];

     	searchTerms=data[1].slice(); 
     	searchDescription = data[2].slice();
     	searchLink = data[3].slice();
        createblock(searchTerms,searchDescription,searchLink);
        resultcount();
     	/*$("#block").append($.parseHTML(htmlData));*/
     }

      function createblock(searchTerms,searchDescription,searchLink){
        for(var i=0;i<searchTerms.length;i++){
      	$("#searchresults").append("<a href="+ searchLink[i] +"><div class=block>"+
      		"<strong>"+searchTerms[i]+"</strong> <br>" + searchDescription[i] +
      		"</div></a>");}
      	$("a").attr('target','_blank');
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
	})
})
