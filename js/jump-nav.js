$(".jump-nav").click(function() {
	var jumpNavId = $(this).attr("id");
	slideId = "#slide-"+jumpNavId.split("-").pop();
	$('html, body').animate({
		scrollTop: $(slideId).offset().top
	}, "slow");
});