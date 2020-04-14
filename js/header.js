//	TAKEN FROM https://codepen.io/seanburke/pen/gMLeOX


function parallaxFade() {
	scrollPos = $(this).scrollTop();
	//	parallax
	$('#home').css({
		'background-position' : '50% ' + (-scrollPos/3)+"px"
	});
	//	header fade
	$('.fade').css({
		'margin-top': (scrollPos/3.5)+"px",
		'opacity': 1-(scrollPos/215)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		parallaxFade();
	});
});