var app = angular.module('myApp', []);

app.controller('DynamicForm', function($scope , $http, displaysessiondetails) {
    $scope.newObject = {};
   /*$http.get('Angular/sessiondetails.json').success(function(data){
        $scope.sessionDetailsJson = data;
    })*/
    /*$scope.sessionDetailsJson = {
        "status": {
            "statusCode": "y",
            "errorCode": null,
            "errorMessage": null
        },
        "forms": [{
            "id": "SET113",
            "name": "Session Details",
            "tip": null,
            "version": 1,
            "tabs": [{
                "id": "TAB338",
                "name": "Session Details",
                "tip": null,
                "sequence": 1,
                "attributes": [{
                    "attributeId": "ATR2873",
                    "attributeName": "Name of the group",
                    "tips": null,
                    "fieldType": "TEXT_FIELD",
                    "validationParam": "^[A-Za-z ]{3,20}$",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 1,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2874",
                    "attributeName": "Block",
                    "tips": null,
                    "fieldType": "TEXT_FIELD",
                    "validationParam": "^[A-Za-z ]{3,20}$",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 2,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2875",
                    "attributeName": "Name of the health worker",
                    "tips": null,
                    "fieldType": "TEXT_FIELD",
                    "validationParam": "^[A-Za-z ]{3,20}$",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 3,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2876",
                    "attributeName": "Village",
                    "tips": null,
                    "fieldType": "TEXT_FIELD",
                    "validationParam": "^[A-Za-z ]{3,20}$",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 4,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2877",
                    "attributeName": "Date of screening",
                    "tips": null,
                    "fieldType": "DATE_FIELD",
                    "validationParam": "dd-MM-yyyy",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": 1451586600000,
                    "maxDate": 1577817000000,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 5,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2878",
                    "attributeName": "District",
                    "tips": null,
                    "fieldType": "TEXT_FIELD",
                    "validationParam": "^[A-Za-z ]{3,20}$",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 6,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2879",
                    "attributeName": "Name of the organization",
                    "tips": null,
                    "fieldType": "TEXT_FIELD",
                    "validationParam": "^[A-Za-z ]{3,20}$",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 7,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2880",
                    "attributeName": "No of attendees",
                    "tips": null,
                    "fieldType": "TEXT_FIELD",
                    "validationParam": "[0-9]{6}",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 8,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2881",
                    "attributeName": "Name of the video",
                    "tips": null,
                    "fieldType": "TEXT_FIELD",
                    "validationParam": "[A-Za-z 0-9 ]{1-100}",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 9,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2882",
                    "attributeName": "Video ID",
                    "tips": null,
                    "fieldType": "TEXT_FIELD",
                    "validationParam": "[A-Za-z 0-9 ]{1-100}",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 10,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2883",
                    "attributeName": "Video screened through",
                    "tips": null,
                    "fieldType": "TEXT_FIELD",
                    "validationParam": "[A-Za-z 0-9 ]{1-100}",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 11,
                    "docType": null,
                    "min": null,
                    "max": null
                }, {
                    "attributeId": "ATR2884",
                    "attributeName": "Comments",
                    "tips": null,
                    "fieldType": "TEXT_AREA",
                    "validationParam": "^([A-Za-z0-9]+\\.[A-Za-z0-9]+(\\r)?(\\n)?)+$",
                    "optionName": null,
                    "optionValue": null,
                    "minDate": null,
                    "maxDate": null,
                    "editable": true,
                    "mandatory": true,
                    "sequence": 12,
                    "docType": null,
                    "min": null,
                    "max": null
                }]
            }],
            "status": 1
        }],
        "enrolSequence": 87593,
        "maxPartialEnrolments": 10,
        "maxAcceptedEnrolDuration": 14,
        "maxRejectedEnrolDuration": 14
    }*/
    displaysessiondetails.getsessiondetails(function(response){
        $scope.sessionDetailsJson = response;
        $scope.sessionDetailsForm = $scope.sessionDetailsJson.forms[0];
    $scope.formcontrols = $scope.sessionDetailsJson.forms[0].tabs[0].attributes;
    })
   
    /*$scope.formcontrols = [{
        type: "text",
        name: "name",
        label: "Name",
        required: true,
        data: "",
        model: "name1"
    }, {
        type: "select",
        name: "dropdown",
        label: "Select",
        options: [{
            id: 1,
            name: "option1"
        }, {
            id: 2,
            name: "option2"
        }, {
            id: 3,
            name: "option3"
        }],
        required: true,
        data: "",
        model: "select1"
    }, {
        type: "text",
        name: "name2",
        label: "Name",
        required: true,
        data: "",
        model: "name2"
    }, {
        type: "textarea",
        name: "name3",
        label: "NameArea",
        required: true,
        data: "",
        model: "txtarea"
    }, {
        type: "select",
        name: "dropdown2",
        label: "Select",
        options: [{
            id: 1,
            name: "option1"
        }, {
            id: 2,
            name: "option2"
        }, {
            id: 3,
            name: "option3"
        }],
        required: true,
        data: "",
        model: "select2"
    }]*/


    $scope.form = {};
    $scope.form.name = "hello";
    $scope.form.select = "sdfsf"


    $scope.getFormValues = function() {
        console.log($scope.newObject);
        $scope.form = {};
        $scope.form.name = "its me";
        $scope.form.select = "sdfsf"
        alert("form submitted");

    }

    /* $scope.formcontrols.forEach(function(data){

           if(data.type === "text"){
            $scope.$broadcast('emittext',data); 
           }
           else if(data.type === "select"){
            $scope.$broadcast('emittext',data); 
           }
           else if(data.type === "select"){
            $scope.$broadcast('emittext',[1,2,3]);
           }
       })*/
    /*alert(JSON.stringify($scope.controlTypeArray));*/
    /* $scope.$on('returntext',function(event,data){
        
          $scope.controlTypeArray.push(data);
         })*/

    /* $scope.ShowValue= function(){
    
    $scope.$broadcast('emittext',[1,2,3]);}*/

    $scope.ShowValue = function() {
        $scope.formcontrols.forEach(function(data) {
            $scope.$broadcast('emittext', data);
        })
    }

    $scope.$on('returntext', function(event, data) {
        $scope.controlTypeArray.push(data);

    })



})

app.directive('textareaTemplate', function() {

    return {
        templateUrl: 'textarea-template.html'
    };

})

app.directive('textTemplate', function() {

    return {
        templateUrl: 'text-template.html'
    };

})

app.directive('selectTemplate', function() {

    return {
        templateUrl: 'select-template.html'
    };


})
app.controller('textController', function($scope) {

    $scope.$on('emittext', function(event, data) {
        $scope.values = data;

        $scope.$emit('returntext', $scope.values);
    })
})

app.controller('selectController', function($scope) {

    $scope.$on('emitselect', function(event, data) {

    })
})

app.factory('displaysessiondetails',function($http){
    return{
        getsessiondetails:function(successcallback){
            $http({method:'GET', url:'./sessiondetails.json'}).
             success(function(data,status,header,config){
                successcallback(data);
             });
        }
    }
})

/*app.service('sessionDetails',function($scope,$http){
    $http({
        method: 'GET',
        url: 'http://192.168.68.103:8080/ProjectingHealth/services/session/findAll'
    }).success(function(data,status,header,config){
        $scope.jsoncheck =  data;
    })*/

