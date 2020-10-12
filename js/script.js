Modernizr.addTest('hasJquery', 'jQuery' in window);

const RenderHeader = {
	data() {
		return {
			mainTitle: '<h1>Styling Test</h1>',
			bar: '<div class="w3-bar-block w3-black" style="height: 12px;"></div>',
		}
	}
}
const RenderMain = {
	data() {
		return {
			cardTitle: '<p>This is a card</p>',
			cardDesc: '<p>A card is a container for any HTML content</p>'
		}
	}
}
const RenderSymbols = {
	data() {
		return {
			third: '<h3 class="w3-center">&#8531;</h3>',
		}
	}
}

Vue.createApp(RenderHeader).mount('#header')
Vue.createApp(RenderMain).mount('#main')
Vue.createApp(RenderSymbols).mount('.symbol')

$(document).ready(function(){
	$("#main").addClass("w3-container w3-flat-peter-river");
	$("body").addClass("w3-flat-green-sea iconsize1 fontsize1");
	$("body").css({
		"overflow": "hidden",
		"font-family": "Open Sans, sans-serif"
	});
	$("link[rel='icon']").addClass("icon");
});
