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

   //  You go first everytime - inital assumption
    
   //possible wins
   var possibleWins = [[1,2,3], [4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
   var userInput = [];
   var computerInput =[];
   // Main logic resides here
   $(".tile").click(function(){
      $(this).text(input);
      userInput.push($(this).data('value'));
      isItAWin("X");
   })

   function isItAWin(input){
         let c;

      for(var i=0;i<=7;i++){
          
           c=0;
           if(userInput.every(function(val)
            possibleWins[i].indexOf(val)>=0 && userInput.length >=3)
         ){
            c++;
           }
                 
         if(c === 1){
            alert("you win");
           }
      }
      
     }
   

})();