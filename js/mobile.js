jQuery.noConflict();

jQuery( document ).ready(function() {
	var interval = setInterval(function() {
		if (Modernizr.mq('only all and (max-width: 480px)')) {
			if (jQuery("body").hasClass("w3-mobile") == false) {
				jQuery("body").addClass("w3-mobile");
			}
		} else {
			if (jQuery("body").hasClass("w3-mobile") == true) {
				jQuery("body").removeClass("w3-mobile");
			}
		}
	}, 250);
});
