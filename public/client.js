
console.log('JS');
$(document).ready(function(){
	console.log('JQ');

	$(window).resize(function(){
		if($(window).width()< 1200){
			moveTheThingBack();
		}else if($(window).width()>= 1200){
			moveTheThing()
			$('#content').removeClass('content-menu-open');
			$('.menu').removeClass('menu-menu-open');
		}	
	});//window.resize



$('#hamburger').click(function(){
	toggleMenu()
});//ham on click
$('#onet').click(function(){
	toggleMenu();
});//onet on click

$('.text').click(function(){
	if($(this).parent().find('ul').hasClass('collapse')){
		num = 0;
	}else{
		num = -90;
	}
	$(this).parent().find('ul').toggleClass('collapse');
	$(this).parent().find('.caret').css('transform','rotate('+num+'deg)');
});//nav text on mousedown


$('.text').parent().find('ul').addClass('collapse');

if($(window).width()>= 1200){
			moveTheThing()
		}//window.width conditional


$('.glyphicon-search').click(function(){
	console.log($(this).css('display') =='none');
});//glyphicon-search




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

	function toggleMenu(){
	$('#content').toggleClass('content-menu-open');
	$('.menu').toggleClass('menu-menu-open');
}//toggleMenu