document.addEventListener('DOMContentLoaded', function() {
    var headerBanner = document.getElementById("ttSwap");
    if (headerBanner !== null)
        headerBanner.parentNode.removeChild(headerBanner);

    var customTagsAll = document.getElementsByClassName('sku-custom-tags');
    if (customTagsAll.length > 0) {
        Array.from(customTagsAll).forEach(element => {
            var children = element.children;
            var trueTags = [];
            Array.from(children).forEach(productTag => {
                if (productTag.dataset.vis === "True")
                    trueTags.push(productTag);
            });
            if (trueTags.length > 0) {
                var dotspan = trueTags[trueTags.length - 1].children[0];
                if (typeof dotspan !== 'undefined')
                    dotspan.classList.add("tag");
            }
        });
    }

    // Obtaining keyword value from URL
    var path_parts = location.pathname.split('/');
    var url_keyword = path_parts[path_parts.length - 1].replace('.html', '');

    function isMobile() {
        return Boolean(document.querySelector('body.as-mobile'));
    }

    // Validating values
    var pageNameAux = 'seop:' + url_keyword + ':n/a:*';
    s.pageName = pageNameAux;
    s.pageType = 'seop';
    s.eVar6 = 'D=pageName';
    s.eVar19 = getPlatform(navigator.userAgent);
    s.eVar21 = experience = !isMobile() ? 'web' : 'mobile';
    s.eVar63 = 'D=g';
    s.eVar93 = 'seop';
    s.eVar94 = url_keyword;
    s.eVar95 = 'n/a';
    s.eVar97 = 'D=pageName';
    s.linkInternalFilters = 'sephora.com';

    var s_code = s.t();
    if (s_code)
        document.write(s_code);

    // BV Pixel
    let PathBVAnalytics = window.BV.analytics.create({
        cl: 'PageView',
        name: 'pathPV',
        commonData: {
            bvProduct: 'PathPV',
            type: 'Misc'
        },
        source: 'path',
        client: 'sephora',
        environment: 'production'
    });
    PathBVAnalytics.trackPageView({
        pageName: 'sephoraPath'
    });

    //Platform Logic
    function getPlatform(userAgent) {
        userAgent = (userAgent || '').toLowerCase();
        if (isMobile()) {
            return 'mobile';
        } else if (userAgent.match(/ipad|android/i) && !userAgent.match(/android.*mobile/i)) {
            return 'tablet web';
        } else {
            return 'desktop web';
        }
    }

}, false);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunc(id) {
    document.getElementById(id).classList.toggle("show");
}

function hamburguerMenu() {
    document.getElementById("HamburgerMenuScrollContainer").classList.toggle("showHamburguer");
    document.getElementById("hamburguerBox").classList.toggle("hamburguerBox");
}

function hideHM() {
    if (document.getElementById("hamburguerBox").classList.contains("hamburguerBox")) {
        document.getElementById("HamburgerMenuScrollContainer").classList.remove("showHamburguer");
        document.getElementById("hamburguerBox").classList.remove("hamburguerBox");
    }
}

function conversionTracker() {
    let PathBVConversionTracker = window.BV.analytics.create({
        name: 'pathConversion',
        commonData: {
            bvProduct: 'PathConversion'
        },
        source: 'path',
        client: 'sephora',
        environment: 'production'
    });
    let eventType = 'PageView';
    let data = {
        name: 'pathConversion',
        type: 'Misc'
    };
    // Fire a conversion event.
    PathBVConversionTracker.trackEvent(eventType, data);
}