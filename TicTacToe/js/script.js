$(function(){
   var input ='';
   var cInput ='';
   $("#dialog").dialog({
   	        dialogClass: "no-close",
   	        buttons:[
   	        	{ text : "X",
                 click : function(){
                  $(this).dialog("close");
                  input = "X";
                  cInput = "O"

   	        	}},
   	        	{ text : "O",
                 click : function(){
                  $(this).dialog("close");
                  input = "O";
                  cInput ="X"
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
      isItAWin(userInput,input);
      random = systemPlay();
      computerInput.push(random);
      
     // computerInput.push(random);
     $("div[data-value="+random+"]").text(cInput);
      // Mark computer input
      /*computerInput.forEach(function systemInput(val){
        
      })*/
      isItAWin(computerInput,cInput);

   })
   var random;
   var recursionValue;
   //randomly picks the value
   function systemPlay(){
     
   var random = Math.floor(Math.random()*9)+1;
   
   if(userInput.indexOf(random)>=0 || computerInput.indexOf(random)>=0)
     recursionValue = systemPlay();
     else
      recursionValue = random;

      return recursionValue;
   
   }

   function isItAWin(arr,input){
         let c;

      for(var i=0;i<=7;i++){
          
           c=0;
           if(possibleWins[i].every(function(val)
            arr.indexOf(val)>=0 && arr.length >=3)
         ){
            c++;
           }
                 
         if(c === 1){
             if(arr == userInput)
            alert("Game over. you win");
             else
            alert("Game Over.Computer wins");
           }
      }
      
     }
   

})();