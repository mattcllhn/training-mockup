
console.log('JS');
$(document).ready(function(){
	console.log('JQ');

	$(document).watch(function(){

	});//document.

});

var myApp = angular.module('myApp',[]);

myApp.controller('testController',['$scope',function($scope){
	console.log('NG');
	
}]);