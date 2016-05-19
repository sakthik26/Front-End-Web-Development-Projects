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
                  
                  input = "O";
                  cInput ="X"
                  computerStarts();
                  $(this).dialog("close");

               }}]
   	        });

    
   //  You go first everytime - inital assumption
    
     //possible wins
   var possibleWins = [[1,2,3], [4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
   var userInput = [];
   var computerInput =[];
   // Main logic resides here
 function computerStarts(){
   if(cInput === "X"){
        $("div[data-value=5]").text(cInput);
        computerInput.push(5);
      }}
   $(".tile").click(function(){
      
      $(this).text(input);
      userInput.push($(this).data('value'));
      isItAWin(userInput,input);
      if(userInput.indexOf(5) <0 && userInput.length === 1 && computerInput.length === 0){
        $("div[data-value=5]").text(cInput);
        computerInput.push(5);
      } else{
      random = systemPlay();
      computerInput.push(random);
      
     // computerInput.push(random);
     $("div[data-value="+random+"]").text(cInput);
      // Mark computer input
      /*computerInput.forEach(function systemInput(val){
        
      })*/
      isItAWin(computerInput,cInput); 
    }

   })
   var random;
   var recursionValue;
   //randomly picks the value
   function systemPlay(){

     //When two of your inputs on line - win it
      var win=0;
      for(var i=0;i<possibleWins.length;i++){
      count = 0;
      win =0;
     possibleWins[i].forEach(function(val){
       if(computerInput.indexOf(val)>=0)
         count++;
       else if(computerInput.indexOf(val)!== 0)
         win = val;

     })
     //win it
     if(count==2 && computerInput.indexOf(win)<0 && userInput.indexOf(win)<0){
     return win; 
     }
    }




     //Any two opponents input on the same line block
     var count = 0;
     var block=0;
     for(var i=0;i<possibleWins.length;i++){
      count = 0;
      block =0;
     possibleWins[i].forEach(function(val){
       if(userInput.indexOf(val)>=0)
         count++;
       else if(userInput.indexOf(val)!== 0)
         block = val;

     })
     //block
     if(count==2 && computerInput.indexOf(block)<0){
     return block; 
     }
    }

    //Block the fork created by the opponent
   
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
             if(arr == userInput){
            alert("Game over. you win");
            window.location.reload();}
             else
            {alert("Game Over.Computer wins");
          window.location.reload();}
           }
      }
      
     }
   

})