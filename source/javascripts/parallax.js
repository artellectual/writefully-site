$(document).ready(function() {
	$(window).bind('scroll', function(e) {
		parallax();
	});

});


function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#parallax-bg').css('top',(230 - (scrollPosition * 0.2))+ 'px' );
}
