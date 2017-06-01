$(document).ready(function(){
	setHamburguerClick();
});

function setHamburguerClick(){

	$(".hamburguer").click(function(){
		$(".menu-container").toggleClass("aberto");
		$(".menu-container").toggleClass("fechado");
	});
}