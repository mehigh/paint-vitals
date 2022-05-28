/* Get current consent items, loop through them, and allow the ones approved */
function setupCookies() {
    const savedCategories = siteConsent.getConsent();
    const selectedCats = [];

    Object.keys(savedCategories).forEach(function (item) {
        /* Skip past required because we don't need it */
        if ( item === 'Required' ) {
            return;
        }

        /* if approved, send unblocked function */
        if ( savedCategories[item] === true ) {
            if ( cookie_cats[item].length === 0 ) {
                return;
            }
            unblockCategory( cookie_cats[item] );
            selectedCats.push( item );
        }
    });

    /* if more than one are selected, check dual categories */
    if ( selectedCats.length === 2 ) {
        if ( selectedCats.includes('SocialMedia') && selectedCats.includes('Analytics') ) {
            unblockCategory( dual_cats.social_analytics );
        }

        if ( selectedCats.includes('SocialMedia') && selectedCats.includes('Advertising') ) {
            unblockCategory( dual_cats.ad_social );
        }

        if ( selectedCats.includes('Advertising') && selectedCats.includes('Analytics') ) {
            unblockCategory( dual_cats.ad_analytics );
        }
    }

    /* if all 3 are selected, unblock the all cats category */
    if ( selectedCats.length === 3  ) {
        unblockCategory( dual_cats.social_analytics );
        unblockCategory( dual_cats.ad_social );
        unblockCategory( dual_cats.ad_analytics );
        unblockCategory( all_cats );
    }
}

function waitForOneDS( item ){
    if( window.oneDS !== undefined ){
        yett.unblock( item );
    } else{
        setTimeout(waitForOneDS, 500);
    }
}

/* Yett unblock function that loops through all items in a category and allows them */
function unblockCategory( cat ) {
    if ( cat.length === 0 ) {
        return;
    }

    cat.forEach( function( item ) {
        // Because of race conditions, need to wait for the window.oneDS object to be available
        if ( item == '/1ds/' ) {
            waitForOneDS( item );
        } else {
            yett.unblock( item );
        }
    });
}

/* Setup cookies when UHF callback is available */
WcpConsent.onInitCallback(setupCookies);
WcpConsent.onConsentChanged(setupCookies);
