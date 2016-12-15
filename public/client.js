
console.log('JS');
$(document).ready(function(){
	console.log('JQ');

if($(document).width()>= 1200){
	$('#social-icons').insertBefore($('#footer-img-wrapper'));
	$('#social-icon-wrapper').insertBefore($('#social-text-wrapper'));
}//if

});//document.width conditional

var myApp = angular.module('myApp',[]);

myApp.controller('testController',['$scope',function($scope){
	console.log('NG');
	
}]);