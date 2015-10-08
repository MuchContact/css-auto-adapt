$(document).ready(function(){
	$(window).resize(function(){
		var cellWidth = $(".home-product-image").outerWidth(true) + 1;
		var width = parseInt($("body").width() / cellWidth) * cellWidth;
		$(".images-div").css("width", width + "px");
	});	
});