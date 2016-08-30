$(function(){

    var start = document.getElementsByClassName('start');
    var reset = document.getElementsByClassName('reset');
    reset[0].style.display = 'none';
    start[0].addEventListener("click",startSimon);

  

    function startSimon(){
      start[0].style.display = 'none';
      reset[0].style.display = 'block';
     /*start[0].className = 'reset';*/
     /*var node = action[0].firstChild;
     node.style.display = 'none';
     var resetButton = document.createElement("button");
     var resetText = document.createTextNode('Reset');
     resetButton.appendChild(resetText);
     var resetDiv = document.createElement("div");
     resetDiv.appendChild(resetButton)
     action[0].appendChild(resetDiv);*/
     
    }
    

})