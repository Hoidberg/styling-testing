window.onload = function() {
	var interval = setInterval(function() {
		if (Modernizr.mq('only all and (max-width: 480px)')) {
			if ($("body").hasClass("w3-mobile") == false) {
				$("body").addClass("w3-mobile");
			}
		} else {
			if ($("body").hasClass("w3-mobile") == true) {
				$("body").removeClass("w3-mobile");
			}
		}
	}, 250);
}
