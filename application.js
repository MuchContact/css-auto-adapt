$(document).ready(function(){
	// $(window).resize(function(){
	// 	var cellWidth = $(".home-product-image").outerWidth(true) + 1;
	// 	var width = parseInt($("body").width() / cellWidth) * cellWidth;
	// 	$(".images-div").css("width", width + "px");
	// });
	$(window).resize(function(){
		var cellWidth = 330;
		var cols = parseInt($("body").width() / cellWidth);
		var width = "calc("+100/cols+"% - 50px)";
		$(".home-product-image").css("width", width);
	});
});