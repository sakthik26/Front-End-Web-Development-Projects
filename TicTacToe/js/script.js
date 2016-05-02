$(function(){
   var input ='';
   $("#dialog").dialog({
   	        dialogClass: "no-close",
   	        buttons:[
   	        	{ text : "X",
                 click : function(){
                  $(this).dialog("close");
                  input = "X";
   	        	}},
   	        	{ text : "O",
                 click : function(){
                  $(this).dialog("close");
                  input = "O";
               }}]
   	        });
})();