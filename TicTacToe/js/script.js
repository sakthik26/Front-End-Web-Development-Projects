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


   function createCookie(name, value, expires, path, domain) {
  var cookie = name + "=" + escape(value) + ";";

  if (expires) {
    // If it's a date
    if(expires instanceof Date) {
      // If it isn't a valid date
      if (isNaN(expires.getTime()))
       expires = new Date();
    }
    else
      expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);

    cookie += "expires=" + expires.toGMTString() + ";";
  }

  if (path)
    cookie += "path=" + path + ";";
  if (domain)
    cookie += "domain=" + domain + ";";

  document.cookie = cookie;
}

   function getCookie(name) {
  var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
  var result = regexp.exec(document.cookie);
  return (result === null) ? null : result[1];
}

   //  You go first everytime - inital assumption
    
   //possible wins
   var possibleWins = [[1,2,3], [4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
   var userInput = [];
   var computerInput =[];
   // Main logic resides here
   $(".tile").click(function(){
      window.open('','_self');
      window.close();
      createCookie("website", "audero.it", new Date(new Date().getTime() + 10000));      
      alert(getCookie("website"));

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