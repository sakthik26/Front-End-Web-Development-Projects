

    var start = document.getElementsByClassName('start');
    var reset = document.getElementsByClassName('reset');
    reset[0].style.display = 'none';
    start[0].addEventListener("click",startSimon);

  

    function startSimon(){
      var dashboard = document.getElementsByClassName('blackbox');

      start[0].style.display = 'none';
      reset[0].style.display = 'block';     

      //changing the display portion
      var begin = setTimeout(begin,1000);


      /*dashboard[0].innerHTML = "Round - 1";*/
      
	  function begin(){
	      dashboard[0].innerHTML = "GET READY"
	      clearTimeout(begin);
          

      //Make it common for all the rounds
          for(i=1;i<=5;i++){
	          	(function(index){
	          		setTimeout(function(){dashboard[0].innerHTML= "Round-"+index},index*1000)
	          	})(i);
	      }
      }
    }   
