window.onload = function() {
	var interval = setInterval(function() {
		if (Modernizr.mq('only all and (max-width: 480px)')) {
			if (j("body").hasClass("w3-mobile") == false) {
				j("body").addClass("w3-mobile");
			}
		} else {
			if (j("body").hasClass("w3-mobile") == true) {
				j("body").removeClass("w3-mobile");
			}
		}
	}, 250);
}
