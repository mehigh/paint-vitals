(function($) {
    "use strict";

    function msccOnConsent() {
        $('body').addClass( 'mscc-has-consent' );

	    $('iframe').attr('src', function() { return $(this).attr('data-src'); })
		    .removeAttr('data-src');
	    $('button.cookie-consent-btn').attr('aria-hidden','true');
    }

    // cookie consent
    var body = $( 'body' );
    if ( 'undefined' !== typeof mscc && ! mscc.hasConsent() ) {
        body.addClass( 'mscc-no-consent' );
    } else {
        msccOnConsent();
    }

    if ( 'undefined' !== typeof mscc ) {
        mscc.on( 'hide', function() {
            // set appropriate classes on body
            body.removeClass( 'mscc-no-consent' );
            msccOnConsent();
        } );
    }

    $(body).on( 'click', msccOnConsent );

})(jQuery);