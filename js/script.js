Modernizr.addTest('hasJquery', 'jQuery' in window);

const RenderHtmlApp = {
	data() {
		return {
			mainTitle: '<h1>Styling Test</h1>',
			bar: '<div class="w3-bar-block w3-black" style="height: 12px;"></div>',
	    		barItem: '<div class="w3-bar-item"></div>',
			cardTitle: '<p>This is a card</p>',
			cardDesc: '<p>A card is a container for any HTML content</p>'
		}
	}
}

Vue.createApp(RenderHtmlApp).mount('body')

$(document).ready(function(){
	$("#main").addClass("w3-container w3-flat-peter-river");
	$("body").addClass("w3-flat-green-sea iconsize1 fontsize1");
	$("body").css({
		"overflow": "hidden",
		"font-family": "Open Sans, sans-serif"
	});
	$("link[rel='icon']").addClass("icon");
});
