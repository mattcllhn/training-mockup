
console.log('JS');
$(document).ready(function(){
	console.log('JQ');

});

var myApp = angular.module('myApp',[]);

myApp.controller('testController',['$scope',function($scope){
	console.log('NG');
	
}]);