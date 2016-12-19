
console.log('JS');
$(document).ready(function(){
	console.log('JQ');

	$(window).resize(function(){
		if($(window).width()< 1200){
			moveTheThingBack();
		}else if($(window).width()>= 1200){
			moveTheThing()
		}
	});//window.resize



$('#hamburger').click(function(){
	$('#content').toggleClass('content-menu-open');
	$('.menu').toggleClass('menu-menu-open');


});//ham on click

if($(window).width()>= 1200){
			moveTheThing()
		}//window.width conditional
});//docready

var myApp = angular.module('myApp',[]);

myApp.controller('testController',['$scope',function($scope){
	console.log('NG');


	
}]);




	function moveTheThing(){
			$('#social-icons').insertBefore($('#footer-img-wrapper'));
			$('#social-icon-wrapper').insertBefore($('#social-text-wrapper'));
	}//moveTheThing
	function moveTheThingBack(){

			$('#social-icons').insertBefore($('#nav-li'));
			$('#social-text-wrapper').insertBefore($('#social-icon-wrapper'));
	}//moveTheThingBack