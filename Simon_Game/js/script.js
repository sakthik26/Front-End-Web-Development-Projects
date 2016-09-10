

    var start = document.querySelector('.start');
    var reset = document.querySelector('.reset');
    var green = document.getElementById('green');
    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var yellow = document.getElementById('yellow');
    reset.style.display = 'none';
    start.addEventListener("click",startSimon);
    

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
      var dashboard = document.querySelector('.blackbox');

      start.style.display = 'none';
      reset.style.display = 'block';     

      //changing the display portion
      var begin = setTimeout(begin,1000);


      /*dashboard[0].innerHTML = "Round - 1";*/
      
	  function begin(){
	      dashboard.innerHTML = "GET READY"
	      clearTimeout(begin);
          

      //Make it common for all the rounds
          for(i=1;i<=20;i++){
	          	(function(index){
	          		setTimeout(function(){dashboard.innerHTML= "Round-"+index},index*1000)
	          	})(i);
	      }
      }
    }   
