$(function(){
	var colors = ['#B4FF97', '#5A7F4B', '#97FFCD', '#ADEAFF', '#ADC3FF', '#384B7F', '#72757F', '#3C1C7F', '#CF6EFF', '#5F1C7F'];
	var ballAction = function(event) {
		var allColors = colors[Math.floor(Math.random() * colors.length)];
		var xAxis = Math.random() * 500
		var yAxis = Math.random() * 900
		var keepInBounds = function(xaxis, yaxis) {
			if (xaxis > 500) { xAxis -= 100 }
			if (yaxis > 900) { yAxis -= 300 }
		}
		keepInBounds(xAxis, yAxis);
		console.log(xAxis, yAxis);
		$(this)
			.fadeOut('fast')
			.css('background-color', allColors)
			.animate({
				top: xAxis,
				left: yAxis
			},300)
			.fadeIn('slow')
	};
	$('.stage').on('click', '#ball', ballAction)
});


