Modernizr.addTest('hasJquery', 'jQuery' in window);
$(document).ready(function(){
	$("#main").addClass("w3-container w3-flat-peter-river");
	$("body").addClass("w3-flat-green-sea iconsize1 fontsize1");
	$("body").css({
		"overflow": "hidden",
		"font-family": "Open Sans, sans-serif"
	});
	$(".bar").addClass("w3-bar-block w3-black");
	$(".bar").css("height", "12px");
	$("link[rel='icon']").addClass("icon");
});
