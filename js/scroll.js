function preloader(){
	$(document).ready(()=>{
		
		let preloader = $('.preloader')
		
		setInterval(()=>{
			preloader.css('opacity', 0)
		},2000)

		// let preloader = $('.preloader')
		// preloader.css('opacity', 0)

		setInterval(()=>{
			preloader.remove()
		}, 3000)
	
	})
}

preloader()

    
// By default, swipe is enabled.
$('.section').horizon();

$('#next').on('click', function(){
	$(document).horizon('scrollRight');
})

$('#prev').on('click', function(){
	$(document).horizon('scrollLeft');
})

// If you do not want to include another plugin, TouchSwipe, you can set it to false in the default options by passing in the option as false.
$('section').horizon({swipe: true});