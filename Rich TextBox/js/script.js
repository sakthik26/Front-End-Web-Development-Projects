  
var app = angular.module('richtextbox',[]);

app.controller('ConvertController',function($scope){
   
   $scope.textvalue='';
   $scope.op = function(message){
    alert(JSON.stringify(message));
   }   
 });

app.directive('emoji',function(){
  return{
   restrict : 'AE',
   scope: {
     convert : "&"
   },
   template: '<button type="button" class="btn btn-default">Send</div>',
   link: function(scope,elm,attr){
      elm.bind('click',function(){
        convert();
      })
   }
  }
})


