$(function(){
	var colors = ['#B4FF97', '#5A7F4B', '#97FFCD', '#ADEAFF', '#ADC3FF', '#384B7F', '#72757F', '#3C1C7F', '#CF6EFF', '#5F1C7F'];
	$( '.shape' ).hover(function() {
		var allColors = colors[Math.floor(Math.random() * colors.length)];
		$(this)
		.removeClass('ball')
		.css('background-color', allColors)	
	}, function() {
		$(this)
		.addClass('ball')
	})
});

