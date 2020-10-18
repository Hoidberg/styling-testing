var j = jQuery.noConflict();

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
			cardDesc: '<p>A card is a container for any HTML content</p>',
			third: '<h3 class="w3-center">&#8531;</h3>'
		}
	}
}

Vue.createApp(RenderHeader).mount('#header')
Vue.createApp(RenderMain).mount('#main')

j("#main").addClass("w3-container w3-flat-peter-river");
j("body").addClass("iconsize1 fontsize1");
j("body").css({"overflow": "hidden", "font-family": "Open Sans, sans-serif", "background-image": "url('https://3.bp.blogspot.com/-EmR1DjLYxYU/UhKNSsqUEgI/AAAAAAAALCM/88EZ6wZHNIE/s1600/Green-Grass-Ground-Texture-DISP.jpg')", "background-repeat": "repeat", "background-blend-mode": "overlay", "background-size": "50px 50px", "background-color": "#136d15"});
j("link[rel='icon']").addClass("icon");
