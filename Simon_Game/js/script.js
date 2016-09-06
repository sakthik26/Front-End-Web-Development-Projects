

    var start = document.getElementsByClassName('start');
    var reset = document.getElementsByClassName('reset');
    var green = document.getElementById('green');
    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var yellow = document.getElementById('yellow');
    reset[0].style.display = 'none';
    start[0].addEventListener("click",startSimon);
    

    green.addEventListener('click',function(){
    	var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    	audio.play();
    })

    red.addEventListener('click',function(){
    	var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    	audio.play();
    })

    blue.addEventListener('click',function(){
    	var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    	audio.play();
    })

    yellow.addEventListener('click',function(){
    	var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    	audio.play();
    })


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
          for(i=1;i<=20;i++){
	          	(function(index){
	          		setTimeout(function(){dashboard[0].innerHTML= "Roun-"+index},index*1000)
	          	})(i);
	      }
      }
    }   
