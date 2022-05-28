/* All Blacklisted Items */
window.YETT_BLACKLIST = [
    /addthis/, // Add This
    /MSCOM_DIL_JSLL/, // Adobe Script
    /clicktale/, // Clicktale
    /facebook/, // Facebook
    /query.prod.cms.rt.microsoft/, // GDC (hotjar)
    /hotjar/, //Hotjar
    /licdn/, // Linkedin
    /moatads/, // Moat
    /optimizely/, // Optimizely
    /quantserve/, // Quantcast
    /gwallet/, // Radiumone
    /stackadapt/, // Stackadapt
    /tiqcdn/, // Tealium
    /twitter/, // Twitter
    /statcounter/, // Statcounter
    /amazon-cookies/, //Amazon (loads a lot of different ones)
    /googleadservices/, // GoogleAds
    /clarity/, // Clarity
    /1ds/, // 1DS
    /ms.analytics/ // analytics part of 1DS
]

/* Again add items here, but in their specific categories */
const cookie_cats = {
    SocialMedia: [
        /addthis/,
    ],
    Analytics: [
        /hotjar/,
        /clicktale/,
        /statcounter/,
        /ms.analytics/,
    ],
    Advertising: [
        /MSCOM_DIL_JSLL/,
        /quantserve/,
        /gwallet/,
        /stackadapt/,
        /tiqcdn/,
        /moatads/,
    ],
};

const dual_cats = {
    ad_analytics : [
        /optimizely/,
    ],
    social_analytics: [
        /googleadservices/,
    ],
    ad_social: [

    ],
};

const all_cats = [
    /facebook/,
    /licdn/,
    /twitter/,
    /query.prod.cms.rt.microsoft/,
    /amazon-cookies/,
    /clarity/,
    /1ds/,
];
