$(function(){
	var colors = ['#B4FF97', '#5A7F4B', '#97FFCD', '#ADEAFF', '#ADC3FF', '#384B7F', '#72757F', '#3C1C7F', '#CF6EFF', '#5F1C7F'];
    $(document).on('keydown',function(event){
    	var allColors = colors[Math.floor(Math.random() * colors.length)];
        if (event.keyCode === 37 && $('.shape').position().left >= 20) { //left
        	$('.shape')
        	.animate({
        			'left': '-=30'
        		}, 'fast')
        	.css('background-color', allColors),
        	console.log($('.shape').position());
        }
        if (event.keyCode === 38 && $('.shape').position().top > 20) { //up
        	$('.shape').animate({
        			'top': '-=30'
        		}, 'fast')
        	.css('background-color', allColors),
        	console.log($('.shape').position());

        }
        if (event.keyCode === 39 && $('.shape').position().left < 780) { //right
        	$('.shape').animate({
        			'left': '+=30'
        		}, 'fast')
        	.css('background-color', allColors),
        	console.log($('.shape').position());
        }
        if (event.keyCode === 40 && $('.shape').position().top < 370) { //down
        	$('.shape').animate({
        			'top': '+=30'
        		}, 'fast')
        	.css('background-color', allColors),
        	console.log($('.shape').position());
        }
        if (event.keyCode === 83) { 
        	//tried using shake to no avail
        	// $('.shape').effect('shake');
        	$('.shape').animate({
        		left: ['-=30' && '+=30']
        	}, 40)
        	$('.shape').animate({
        		left: ['+=30' && '-=30']
        		
        	}, 40)
        }
    });

});

