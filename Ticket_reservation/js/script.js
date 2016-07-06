
var app = angular.module('reservation',[]);

app.controller('TicketReservation',function($scope){

  $scope.reserve={};
  $scope.available = false;
  $scope.selectedseats = [];
  $scope.allusers=[];
  $scope.reservedSeats =[];
  $scope.table = false;
  $scope.screen = false;
   $scope.indicator = false;
  var temp ={}
  var i=0;
  $scope.submit = function(){
   if($scope.reserve.name !== null && $scope.reserve.seats !==null && $scope.reserve.name !== undefined && $scope.reserve.seats !== undefined ){
   $scope.indicator = true;
   $scope.table = true;
   $scope.available = true; 
   $scope.screen = true;   
   if($scope.reserve.seats > (85 - $scope.reservedSeats.length)){
    alert((85 - $scope.reservedSeats.length) + " Seats available" )
    $scope.available = false;
    }
   }
   else{
    alert("enter user name and number of seats required")
   }
  }
   
  function Temp(){
    this.totalSeats = 0;
    this.seatNumbers = "";
    this.name = "";
  } 
  $scope.showtables = function(){

     if($scope.selectedseats.length === $scope.reserve.seats){

     var tempObj = new Temp();
     tempObj.name = $scope.reserve.name;
     tempObj.totalSeats = $scope.reserve.seats;
     tempObj.seatNumbers = $scope.selectedseats.toString();
     $scope.selectedseats.forEach(function(element){
      $scope.reservedSeats.push(element);
     })
     seatReserved();
     $scope.allusers.push(tempObj);
     $scope.reserve.seats = null;
     $scope.reserve.name = null;
     $scope.selectedseats =[];
   }
   else{
    alert("Kindly select "+ $scope.reserve.seats + " Seats to confirm");
   }
  }

  function seatReserved(){
    $scope.reservedSeats.forEach(function(element){
       $("#find").find('.seat').each(function(){
           if(element === $(this).text()){
               $(this).removeClass("red");
               $(this).addClass("green");
           }
       }) 
  })
}

  $(".seat").click(function(){
    if($scope.reservedSeats.indexOf($(this).children().text().trim()) < 0 ){
     if($(this).hasClass("red")){
       $(this).removeClass("red");
       i = $scope.selectedseats.length;
       while(i--){
        if($scope.selectedseats[i] && $scope.selectedseats[i] === $(this).children().text().trim()){
          $scope.selectedseats.splice(i,1);
        }
       }
     }
     else if($scope.selectedseats.length < $scope.reserve.seats && !($(this).hasClass("red"))) {
      $(this).addClass("red");
      $scope.selectedseats.push($(this).children().text().trim());
     }
     else if($scope.reserve.name === null  ||  $scope.reserve.seats === null){
      alert("Enter the name and number of seats required.");
     }
     else if($scope.selectedseats.length >= $scope.reserve.seats ){
     alert("Exceeding the number of seat selected");
   }
  }
  else{
    alert("Seat has already been reserved by another user")
  }

   console.log($scope.selectedseats)
   })
})


