/* Hide loading placeholder and show site content when document is ready */
$(function() {
	$('div#loading-site').hide();
	$('header#siteHeader').show();
});

( function( $ ) {
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() { 
		      // Resize sections
		      adjustWindow();
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
		}, 800);
	});
	
	function adjustWindow(){		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if (winH < 551) {
            winH = 500;
        }
	    // Resize our slides
	    $slide.height(winH);
        $("#slide-5").height(100); //This slide is a special case, and should be no higher than 100px
	}	
} )( jQuery );

/* Jump navigation */
$(".jump-nav").click(function() {
	var jumpNavId = $(this).attr("id");
	slideId = "#slide-"+jumpNavId.split("-").pop();
	$('html, body').animate({
		scrollTop: $(slideId).offset().top
	}, "slow");
});