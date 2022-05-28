/*! Copyright 2016 Microsoft Corporation | This software is based on or incorporates
material from the files listed below (collectively, “Third Party Code”). Microsoft
is not the original author of the Third Party Code. The original copyright notice
and the license under which Microsoft received Third Party Code are set forth below
together with the full text of such license. Such notices and license are provided
solely for your information. Microsoft, not the third party, licenses this Third
Party Code to you under the terms in which you received the Microsoft software or the
services, unless Microsoft clearly states that such Microsoft terms do NOT apply
for a particular Third Party Code. Unless applicable law gives you more rights,
Microsoft reserves all other rights not expressly granted under such agreement(s),
whether by implication, estoppel or otherwise.
 */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// This simply tests for IE8 as Hammer does not support IE8
// This prevents Hammer from being required in IE8

var _Alert = require('./mwf/modules/alert/scripts/Alert.js');

var _Alert2 = _interopRequireDefault(_Alert);

var _AutoSuggest = require('./mwf/components/auto-suggest/scripts/AutoSuggest.js');

var _AutoSuggest2 = _interopRequireDefault(_AutoSuggest);

var _BackToTop = require('./mwf/modules/back-to-top/scripts/BackToTop.js');

var _BackToTop2 = _interopRequireDefault(_BackToTop);

var _Carousel = require('./mwf/components/carousel/scripts/Carousel.js');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Checkbox = require('./mwf/components/checkbox/scripts/Checkbox.js');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Combo = require('./mwf/components/combo/scripts/Combo.js');

var _Combo2 = _interopRequireDefault(_Combo);

var _CompareChart = require('./mwf/modules/compare-chart/scripts//CompareChart.js');

var _CompareChart2 = _interopRequireDefault(_CompareChart);

var _ContentToggle = require('./mwf/components/content-toggle/scripts/ContentToggle.js');

var _ContentToggle2 = _interopRequireDefault(_ContentToggle);

var _DateTimePicker = require('./mwf/components/datetime-picker/scripts/DateTimePicker.js');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

var _Dialog = require('./mwf/components/dialog/scripts/Dialog.js');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Drawer = require('./mwf/components/drawer/scripts/Drawer.js');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _File = require('./mwf/components/file/scripts/File.js');

var _File2 = _interopRequireDefault(_File);

var _Flyout = require('./mwf/components/flyout/scripts/Flyout.js');

var _Flyout2 = _interopRequireDefault(_Flyout);

var _InPageNavigation = require('./mwf/components/in-page-navigation/scripts/InPageNavigation.js');

var _InPageNavigation2 = _interopRequireDefault(_InPageNavigation);

var _PageBar = require('./mwf/modules/page-bar/scripts/PageBar.js');

var _PageBar2 = _interopRequireDefault(_PageBar);

var _Pagination = require('./mwf/components/pagination/scripts/Pagination.js');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Pivot = require('./mwf/components/pivot/scripts/Pivot.js');

var _Pivot2 = _interopRequireDefault(_Pivot);

var _MosaicPlacement = require('./mwf/components/mosaic-placement/scripts/MosaicPlacement.js');

var _MosaicPlacement2 = _interopRequireDefault(_MosaicPlacement);

var _ProductPlacementModule = require('./mwf/modules/product-placement/scripts/ProductPlacementModule.js');

var _ProductPlacementModule2 = _interopRequireDefault(_ProductPlacementModule);

var _RefineItem = require('./mwf/components/refine-item/scripts/RefineItem.js');

var _RefineItem2 = _interopRequireDefault(_RefineItem);

var _RefineMenu = require('./mwf/components/refine-menu/scripts/RefineMenu.js');

var _RefineMenu2 = _interopRequireDefault(_RefineMenu);

var _SelectButton = require('./mwf/components/select-button/scripts/SelectButton.js');

var _SelectButton2 = _interopRequireDefault(_SelectButton);

var _SelectMenu = require('./mwf/components/select-menu/scripts/SelectMenu.js');

var _SelectMenu2 = _interopRequireDefault(_SelectMenu);

var _Social = require('./mwf/modules/social/scripts/Social.js');

var _Social2 = _interopRequireDefault(_Social);

var _Slider = require('./mwf/components/slider/scripts/Slider.js');

var _Slider2 = _interopRequireDefault(_Slider);

var _SupplementalNav = require('./mwf/components/supplemental-navigation/scripts/SupplementalNav.js');

var _SupplementalNav2 = _interopRequireDefault(_SupplementalNav);

var _Table = require('./mwf/components/table/scripts/Table.js');

var _Table2 = _interopRequireDefault(_Table);

var _Toggle = require('./mwf/components/toggle/scripts/Toggle.js');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _Tooltip = require('./mwf/components/tooltip/scripts/Tooltip.js');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _UniversalHeader = require('./mwf/components/universal-header/scripts/UniversalHeader.js');

var _UniversalHeader2 = _interopRequireDefault(_UniversalHeader);

var _Video = require('./mwf/components/video/scripts/Video.js');

var _Video2 = _interopRequireDefault(_Video);

var _bindPolyfill = require('./vendor/bind-polyfill.js');

var _bindPolyfill2 = _interopRequireDefault(_bindPolyfill);

var _helpers = require('./mwf/helpers.js');

var _handleImgError = require('./mwf/handle-img-error.js');

var _handleImgError2 = _interopRequireDefault(_handleImgError);

var _indexOfPolyfill = require('./vendor/indexOf-polyfill.js');

var _indexOfPolyfill2 = _interopRequireDefault(_indexOfPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

if (document.addEventListener) {
    var hammer = require('./vendor/hammer.min.js');
}

var pictureFill = require('./vendor/picturefill.min.js');

// The getElementsByClassName method is faster than querySelectorAll but is not
// supported in ie8. If it exists, we should use it. Otherwise, use querySelectorAll
// We should switch to only using getElementsByClassName with task #6687534
if (document.getElementsByClassName) {
    var alerts = document.querySelectorAll('.c-alert, .m-alert');
    var autoSuggests = document.getElementsByClassName('c-auto-suggest');
    var backToTops = document.querySelectorAll('.c-back-to-top, .m-back-to-top');
    var carousels = document.getElementsByClassName('c-carousel');
    var checkboxes = document.getElementsByClassName('c-checkbox');
    var combo = document.getElementsByClassName('c-combo');
    var compareChart = document.querySelectorAll('.c-compare-chart, .m-compare-chart');
    var contentToggles = document.getElementsByClassName('c-content-toggle');
    var dateTimePicker = document.getElementsByClassName('c-date-time-picker');
    var dialogs = document.getElementsByClassName('c-dialog');
    var drawers = document.getElementsByClassName('c-drawer');
    var files = document.getElementsByClassName('c-file');
    var flyouts = document.getElementsByClassName('c-flyout');
    var inPageNavigation = document.getElementsByClassName('c-in-page-navigation');
    var pageBar = document.getElementsByClassName('m-page-bar');
    var paginations = document.getElementsByClassName('c-pagination');
    var pivots = document.getElementsByClassName('c-pivot');
    var mosaicPlacement = document.getElementsByClassName('c-mosaic-placement');
    var productPlacement = document.getElementsByClassName('m-product-placement');
    var refineMenus = document.getElementsByClassName('c-refine-menu');
    var selectButtons = document.getElementsByClassName('c-select-button');
    var selectMenus = document.querySelectorAll('.c-select-menu, .c-select-menu .c-menu-item.f-sub-menu');
    var socials = document.querySelectorAll('.c-social, .m-social');
    var sliders = document.getElementsByClassName('c-slider');
    var supplementalNavs = document.getElementsByClassName('c-supplemental-nav');
    var tables = document.getElementsByClassName('c-table');
    var toggles = document.getElementsByClassName('c-toggle');
    var tooltips = document.getElementsByClassName('c-tooltip');
    var universalHeaders = document.getElementsByClassName('c-universal-header');
    var videos = document.getElementsByClassName('c-video');
} else {
    var alerts = document.querySelectorAll('.c-alert, .m-alert');
    var autoSuggests = document.querySelectorAll('.c-auto-suggest');
    var backToTops = document.querySelectorAll('.c-back-to-top, .m-back-to-top');
    var carousels = document.querySelectorAll('.c-carousel');
    var checkboxes = document.querySelectorAll('.c-checkbox');
    var combo = document.querySelectorAll('.c-combo');
    var compareChart = document.querySelectorAll('.c-compare-chart, .m-compare-chart');
    var contentToggles = document.querySelectorAll('.c-content-toggle');
    var dateTimePicker = document.querySelectorAll('.c-date-time-picker');
    var dialogs = document.querySelectorAll('.c-dialog');
    var drawers = document.querySelectorAll('.c-drawer');
    var files = document.querySelectorAll('.c-file');
    var flyouts = document.querySelectorAll('.c-flyout');
    var inPageNavigation = document.querySelectorAll('.c-in-page-navigation');
    var pageBar = document.querySelectorAll('.m-page-bar');
    var paginations = document.querySelectorAll('.c-pagination');
    var pivots = document.querySelectorAll('.c-pivot');
    var mosaicPlacement = document.querySelectorAll('.c-mosaic-placement');
    var productPlacement = document.querySelectorAll('.m-product-placement');
    var refineMenus = document.querySelectorAll('.c-refine-menu');
    var selectButtons = document.querySelectorAll('.c-select-button');
    var selectMenus = document.querySelectorAll('.c-select-menu, .c-select-menu .c-menu-item.f-sub-menu');
    var socials = document.querySelectorAll('.c-social, .m-social');
    var supplementalNavs = document.querySelectorAll('.c-supplemental-nav');
    var tables = document.querySelectorAll('.c-table');
    var toggles = document.querySelectorAll('.c-toggle');
    var tooltips = document.querySelectorAll('.c-tooltip');
    var universalHeaders = document.querySelectorAll('.c-universal-header');
    var sliders = document.querySelectorAll('.c-slider');
    var videos = document.querySelectorAll('.c-video');
}

// Helper function to initialize sets of UI components obtained
// from getElementsByClassName/querySelectorAll
function initializeUI(elementList, init) {
    var storage = [];

    for (var i = 0; i < elementList.length; i++) {
        storage.push(new init(elementList[i]));
    }

    return storage;
}

// Helper function to stop initializing UI components if
// it is a child of another component
function isDescendant(childElements, parentElements) {
    if (parentElements.length > 0) {
        for (var i = 0; i < childElements.length; i++) {
            var node = childElements[i].parentNode;
            while (node !== null) {
                for (var j = 0; j < parentElements.length; j++) {
                    if (node === parentElements[i]) {
                        return true;
                    }
                    node = node.parentNode;
                }
            }
            return false;
        }
    } else {
        return false;
    }
}

// If we've found elements that correspond to our javascript components,
// initialize them.
if (alerts.length) {
    alerts = initializeUI(alerts, _Alert2['default']);
}

if (autoSuggests.length) {
    autoSuggests = initializeUI(autoSuggests, _AutoSuggest2['default']);
}

if (backToTops.length) {
    backToTops = initializeUI(backToTops, _BackToTop2['default']);
}

if (carousels.length) {
    carousels = initializeUI(carousels, _Carousel2['default']);
}

if (checkboxes.length) {
    checkboxes = initializeUI(checkboxes, _Checkbox2['default']);
}

if (combo.length) {
    combo = initializeUI(combo, _Combo2['default']);
}

if (compareChart.length) {
    compareChart = initializeUI(compareChart, _CompareChart2['default']);
}

if (contentToggles.length) {
    contentToggles = initializeUI(contentToggles, _ContentToggle2['default']);
}

if (dateTimePicker.length) {
    dateTimePicker = initializeUI(dateTimePicker, _DateTimePicker2['default']);
}

if (dialogs.length) {
    dialogs = initializeUI(dialogs, _Dialog2['default']);
}

if (drawers.length) {
    drawers = initializeUI(drawers, _Drawer2['default']);
}

if (files.length) {
    files = initializeUI(files, _File2['default']);
}

if (flyouts.length) {
    flyouts = initializeUI(flyouts, _Flyout2['default']);
}

if (inPageNavigation.length) {
    inPageNavigation = initializeUI(inPageNavigation, _InPageNavigation2['default']);
}

if (pageBar.length) {
    pageBar = initializeUI(pageBar, _PageBar2['default']);
}

if (paginations.length) {
    paginations = initializeUI(paginations, _Pagination2['default']);
}

if (pivots.length) {
    pivots = initializeUI(pivots, _Pivot2['default']);
}

if (mosaicPlacement.length) {
    mosaicPlacement = initializeUI(mosaicPlacement, _MosaicPlacement2['default']);
}

if (productPlacement.length) {
    productPlacement = initializeUI(productPlacement, _ProductPlacementModule2['default']);
}

if (refineMenus.length) {
    refineMenus = initializeUI(refineMenus, _RefineMenu2['default']);
}

if (selectButtons.length) {
    selectButtons = initializeUI(selectButtons, _SelectButton2['default']);
}

if (selectMenus.length) {
    selectMenus = initializeUI(selectMenus, _SelectMenu2['default']);
}

if (socials.length) {
    socials = initializeUI(socials, _Social2['default']);
}

if (supplementalNavs.length) {
    supplementalNavs = initializeUI(supplementalNavs, _SupplementalNav2['default']);
}

if (tables.length) {
    tables = initializeUI(tables, _Table2['default']);
}

if (toggles.length) {
    toggles = initializeUI(toggles, _Toggle2['default']);
}

if (tooltips.length) {
    tooltips = initializeUI(tooltips, _Tooltip2['default']);
}

if (universalHeaders.length) {
    universalHeaders = initializeUI(universalHeaders, _UniversalHeader2['default']);
}

if (sliders.length) {
    if (!isDescendant(sliders, videos)) {
        sliders = initializeUI(sliders, _Slider2['default']);
    }
}

if (videos.length) {
    videos = initializeUI(videos, _Video2['default']);
}

// Remove focus state from elements onclick and ontouch
(0, _helpers.removeFocus)();

},{"./mwf/components/auto-suggest/scripts/AutoSuggest.js":3,"./mwf/components/carousel/scripts/Carousel.js":4,"./mwf/components/checkbox/scripts/Checkbox.js":5,"./mwf/components/combo/scripts/Combo.js":6,"./mwf/components/content-toggle/scripts/ContentToggle.js":7,"./mwf/components/datetime-picker/scripts/DateTimePicker.js":8,"./mwf/components/dialog/scripts/Dialog.js":9,"./mwf/components/drawer/scripts/Drawer.js":10,"./mwf/components/file/scripts/File.js":11,"./mwf/components/flyout/scripts/Flyout.js":12,"./mwf/components/in-page-navigation/scripts/InPageNavigation.js":13,"./mwf/components/mosaic-placement/scripts/MosaicPlacement.js":14,"./mwf/components/pagination/scripts/Pagination.js":15,"./mwf/components/pivot/scripts/Pivot.js":16,"./mwf/components/refine-item/scripts/RefineItem.js":17,"./mwf/components/refine-menu/scripts/RefineMenu.js":18,"./mwf/components/select-button/scripts/SelectButton.js":19,"./mwf/components/select-menu/scripts/SelectMenu.js":20,"./mwf/components/slider/scripts/Slider.js":21,"./mwf/components/supplemental-navigation/scripts/SupplementalNav.js":22,"./mwf/components/table/scripts/Table.js":23,"./mwf/components/toggle/scripts/Toggle.js":24,"./mwf/components/tooltip/scripts/Tooltip.js":25,"./mwf/components/universal-header/scripts/UniversalHeader.js":26,"./mwf/components/video/scripts/Video.js":27,"./mwf/handle-img-error.js":29,"./mwf/helpers.js":30,"./mwf/modules/alert/scripts/Alert.js":31,"./mwf/modules/back-to-top/scripts/BackToTop.js":32,"./mwf/modules/compare-chart/scripts//CompareChart.js":33,"./mwf/modules/page-bar/scripts/PageBar.js":34,"./mwf/modules/product-placement/scripts/ProductPlacementModule.js":35,"./mwf/modules/social/scripts/Social.js":36,"./vendor/bind-polyfill.js":38,"./vendor/hammer.min.js":39,"./vendor/indexOf-polyfill.js":40,"./vendor/picturefill.min.js":41}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('./helpers.js');

var _configBreakpoints = require('./config.breakpoints.js');

var _configBreakpoints2 = _interopRequireDefault(_configBreakpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BreakpointTracker = {};

BreakpointTracker.identifyBreakpoint = function (windowWidth) {
    for (var i = _configBreakpoints2['default'].length - 1; i >= 0; i--) {
        if (windowWidth >= _configBreakpoints2['default'][i]) {
            return i; // array is 0-based, add 1 if you need to look up the viewport (i.e. "vp1")
        }
    }
};

BreakpointTracker.subscribe = function (subscriber, callback) {
    this.subscribers.push({
        subscriber: subscriber,
        callback: callback
    });
};

BreakpointTracker.unsubscribe = function (subscriber) {
    var index = this.subscribers.indexOf(subscriber);

    if (index !== -1) {
        this.subscribers.splice(index, 1);
    }
};

BreakpointTracker.trigger = function () {
    for (var i = 0; i < this.subscribers.length; i++) {
        this.subscribers[i].callback.call(this.subscribers[i].subscriber, _configBreakpoints2['default'][this.currentBreakpoint]);
    }
};

BreakpointTracker.handleEvent = function (e) {
    this.checkBreakpoint();
};

BreakpointTracker.checkBreakpoint = function () {
    var newBreakpoint = this.identifyBreakpoint((0, _helpers.getWindowWidth)());

    if (this.currentBreakpoint !== newBreakpoint) {
        this.currentBreakpoint = newBreakpoint;
        this.trigger();
    }
};

BreakpointTracker.getCurrentBreakpoint = function () {
    return this.identifyBreakpoint((0, _helpers.getWindowWidth)());
};

BreakpointTracker.init = function () {
    this.subscribers = [];

    // Set currentBreakpoint
    this.currentBreakpoint = this.identifyBreakpoint((0, _helpers.getWindowWidth)());

    // Attach window listener
    if (window.addEventListener) {
        window.addEventListener('resize', this, false);
    } else if (window.attachEvent) {
        var that = this;
        window.attachEvent('onresize', function () {
            that.handleEvent.call(that);
        });
    }
};

BreakpointTracker.init();

exports['default'] = BreakpointTracker;

},{"./config.breakpoints.js":28,"./helpers.js":30}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var AutoSuggest = function AutoSuggest(el) {
    this.element = el;

    return this.init();
};

AutoSuggest.prototype.init = function () {
    var that = this;
    this.id = this.element.getAttribute('id');
    this.input = document.querySelector('[aria-controls=' + this.id + ']');
    this.menu = this.element.querySelector('ul');
    this.noResults = this.element.querySelector('ul.f-auto-suggest-no-results');
    this.matched = false;

    if (window.addEventListener) {
        this.input.addEventListener('focus', this, true);

        document.addEventListener('click', function (e) {
            var target = e.target || e.srcElement;
            var parent = target.parentNode;
            var isClickInside = that.element.contains(target);
            if (!isClickInside) {
                if (target !== this.menu) {
                    if (parent !== this.menu) {
                        that.menu.setAttribute('aria-hidden', 'true');
                    }
                }
            }
        });
    } else if (window.attachEvent) {
        this.input.attachEvent('onfocus', function () {
            that.handleEvent.call(that);
        });

        document.attachEvent('onclick', function (e) {
            var target = e.target || e.srcElement;
            var parent = target.parentNode;
            var isClickInside = that.element.contains(target);
            if (!isClickInside) {
                if (target !== this.menu) {
                    if (parent !== this.menu) {
                        that.menu.setAttribute('aria-hidden', 'true');
                    }
                }
            }
        });
    }

    return this;
};

AutoSuggest.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    this.keypress(target);
};

AutoSuggest.prototype.keypress = function (target) {
    var currentMenu = this.menu;
    var noResults = this.noResults;
    var currentTarget = target;
    var inputTextValue;

    currentTarget.onkeyup = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        inputTextValue = target.value;

        if (inputTextValue === '') {
            noResults.setAttribute('aria-hidden', 'true');
            AutoSuggest.prototype.hide(currentMenu, inputTextValue);
        } else {
            if (AutoSuggest.prototype.contains(currentMenu, inputTextValue)) {
                currentMenu.setAttribute('aria-hidden', 'true');
                noResults.setAttribute('aria-hidden', 'true');
                AutoSuggest.prototype.show(currentMenu, inputTextValue);
            } else {
                currentMenu.setAttribute('aria-hidden', 'true');
                noResults.setAttribute('aria-hidden', 'false');
            }
        }
    };
};

AutoSuggest.prototype.contains = function (menu, val) {
    this.menu = menu;
    var autoCompleteOptions = this.menu.querySelectorAll('span, a');

    for (var i = 0; i < autoCompleteOptions.length; i++) {
        var string = autoCompleteOptions[i].innerText;

        for (var j = 0; j < string.length; j++) {
            var res = string.split(val);

            if (res[0] === '') {
                return true;
            }
        }
    }
};

AutoSuggest.prototype.show = function (menu, val) {
    this.menu = menu;
    this.menu.setAttribute('aria-hidden', 'false');
    var autoCompleteOptions = this.menu.querySelectorAll('span, a');
    var itemScrollCount = 5;

    for (var i = 0; i < autoCompleteOptions.length; i++) {
        var string = autoCompleteOptions[i].innerText;

        if (autoCompleteOptions.length >= itemScrollCount) {
            if ((0, _helpers.hasClass)(this.menu, 'f-auto-suggest-scroll')) {
                var maxHeight = 0;

                for (var l = 0; l < itemScrollCount; l++) {
                    maxHeight += autoCompleteOptions[i].offsetHeight;
                }
                this.menu.style.maxHeight = maxHeight + 'px';
            }
        }

        for (var j = 0; j < string.length; j++) {
            var result = string.split(val);

            if (result[0] === '') {
                this.matched = true;
                autoCompleteOptions[i].innerHTML = "<strong>" + val + "</strong>" + result[1];
            }
        }
    }
};

AutoSuggest.prototype.hide = function (menu, val) {
    this.menu = menu;
    this.matched = false;
    var autoCompleteOptions = this.menu.querySelectorAll('span');

    for (var i = 0; i < autoCompleteOptions.length; i++) {
        autoCompleteOptions[i].innerHTML = autoCompleteOptions[i].innerText;
    }
    this.menu.setAttribute('aria-hidden', 'true');
};

exports['default'] = AutoSuggest;

},{"../../../helpers.js":30}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var Carousel = function Carousel(el) {
    this.element = el;
    return this.init();
};

Carousel.prototype.init = function () {

    /*
    * Use .f-previous and .f-next
    * .f-left and f-left deprecated v1.3.0
    */

    this.previousButton = this.element.querySelector('.c-flipper.f-previous');
    if (this.previousButton === null) {
        this.previousButton = this.element.querySelector('.c-flipper.f-left');
    }
    this.nextButton = this.element.querySelector('.c-flipper.f-next');
    if (this.nextButton === null) {
        this.nextButton = this.element.querySelector('.c-flipper.f-right');
    }
    this.activeIndex = null;
    this.slides = [];
    this.multiSlide = (0, _helpers.hasClass)(this.element, 'f-multi-slide');
    this.sequenceIndicators = null;
    this.singleSlideWidth = null;
    this.touchManager = null;
    this.primaryDirection = document.querySelector('html').getAttribute('dir').toLowerCase() === 'rtl' ? 'right' : 'left';
    this.itemsContainer = this.element.querySelector('.c-group');

    if (this.multiSlide) {
        var children = this.element.querySelectorAll('ul > li');

        for (var i = 0, ii = children.length; i < ii; i++) {
            var item = children[i];
            this.slides.push(item);

            if ((0, _helpers.hasClass)(item, 'f-active')) {
                this.activeIndex = this.slides.length - 1;
            }
        }
    } else {
        this.activeIndex = 0;
        this.slides[this.activeIndex] = this.element.querySelector('ul');
    }

    if (this.slides[this.activeIndex].hasAttribute('data-f-theme')) {
        (0, _helpers.addClass)(this.element, 'theme-' + this.slides[this.activeIndex].getAttribute('data-f-theme'));
    }

    // Configure options specific to carousel type
    if (this.multiSlide) {
        this.sequenceIndicators = this.element.querySelectorAll('.c-sequence-indicator button');
    } else {
        this.singleSlideWidth = this.slides[this.activeIndex].clientWidth;
    }

    // Show flippers if necessary
    if (this.isScrollablePrevious()) {
        this.showPreviousFlipper();
    }

    if (this.isScrollableNext()) {
        this.showNextFlipper();
    }

    // Bind events
    var that = this;
    var handleTouchEvent = function handleTouchEvent(e) {
        that.handleEvent.call(that, e);
    };

    var handleIeEvent = function handleIeEvent() {
        that.handleEvent.call(that);
    };

    if (typeof Hammer !== 'undefined') {
        this.touchManager = new Hammer(this.element);
        this.touchManager.on("swipeleft", handleTouchEvent);
        this.touchManager.on("swiperight", handleTouchEvent);
    }

    if (window.addEventListener) {
        this.previousButton.addEventListener('click', this, false);
        this.nextButton.addEventListener('click', this, false);
        window.addEventListener('resize', function () {
            that.handleResize();
        }, true);

        if (this.multiSlide) {
            for (var j = 0, jj = this.sequenceIndicators.length; j < jj; j++) {
                this.sequenceIndicators[j].addEventListener('click', this, false);
            }
        }
    } else if (window.attachEvent) {
        this.previousButton.attachEvent('onclick', handleIeEvent);
        this.nextButton.attachEvent('onclick', handleIeEvent);
        window.attachEvent('onresize', function () {
            that.handleResize();
        });

        if (this.multiSlide) {
            for (var k = 0, kk = this.sequenceIndicators.length; k < kk; k++) {
                this.sequenceIndicators[k].attachEvent('onclick', handleIeEvent);
            }
        }
    }
    this.handleResize();

    return this;
};

Carousel.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var type = e.type;
    var swipeLeft = this.primaryDirection === 'left' ? 'swipeleft' : 'swiperight';
    var swipeRight = this.primaryDirection === 'left' ? 'swiperight' : 'swipeleft';

    if (target === this.previousButton || type === swipeRight) {
        if (this.multiSlide) {
            this.previousSlide();
        } else {
            this.scrollPrevious();
        }
    } else if (target === this.nextButton || type === swipeLeft) {
        if (this.multiSlide) {
            this.nextSlide();
        } else {
            this.scrollNext();
        }
    } else if ((0, _helpers.hasClass)(target.parentNode, 'c-sequence-indicator')) {
        var id = target.getAttribute("aria-controls");

        for (var i = 0, ii = this.slides.length; i < ii; i++) {
            if (id === this.slides[i].getAttribute('id')) {
                this.setActiveSlide(i);
            }
        }
    }
};

Carousel.prototype.handleResize = function () {
    if (!this.itemsContainer) {
        return;
    }
    var containerWidth = (0, _helpers.getClientRect)(this.element);
    var carouselWidth = (0, _helpers.getClientRect)(this.itemsContainer);
    if (carouselWidth.width < containerWidth.width) {
        this.disableScrollableNext();
        this.disableScrollablePrevious();
    } else {
        if (this.isScrollableNext()) {
            this.showNextFlipper();
        }

        if (this.isScrollableNext()) {
            this.showNextFlipper();
        }
    }
};

Carousel.prototype.isScrollablePrevious = function () {
    if (this.multiSlide) {
        return true;
    } else {
        var offset = this.slides[this.activeIndex].style[this.primaryDirection];

        if (offset === "0" || offset === "" || offset === "0px") {
            return false;
        } else {
            return true;
        }
    }
};

Carousel.prototype.isScrollableNext = function () {
    if (this.multiSlide) {
        return true;
    } else {
        var offset = parseInt(this.slides[this.activeIndex].style[this.primaryDirection], 10);
        var carouselWidth = this.element.clientWidth;
        var itemSize = this.getScrollItemSize();

        if (isNaN(offset)) {
            offset = 0;
        }

        if (carouselWidth + Math.abs(offset) + itemSize.gutter >= this.singleSlideWidth) {
            return false;
        } else {
            return true;
        }
    }
};

Carousel.prototype.showPreviousFlipper = function () {
    (0, _helpers.addClass)(this.element, 'f-scrollable-previous');
};

Carousel.prototype.showNextFlipper = function () {
    (0, _helpers.addClass)(this.element, 'f-scrollable-next');
};

Carousel.prototype.disableScrollablePrevious = function () {
    (0, _helpers.removeClass)(this.element, 'f-scrollable-previous');
};

Carousel.prototype.disableScrollableNext = function () {
    (0, _helpers.removeClass)(this.element, 'f-scrollable-next');
};

// Multi-slide functions
Carousel.prototype.setActiveSlide = function (index, direction) {
    // Remove active class from current slide
    (0, _helpers.removeClass)(this.slides[this.activeIndex], 'f-active');
    // Remove checked status from sequence indicator
    this.sequenceIndicators[this.activeIndex].setAttribute("aria-checked", "false");
    // remove animation classes

    (0, _helpers.removeClass)(this.slides[this.activeIndex], 'f-animate-next');
    (0, _helpers.removeClass)(this.slides[this.activeIndex], 'f-animate-previous');

    // Remove theme classes if there are any
    if ((0, _helpers.hasClass)(this.element, 'theme-light')) {
        (0, _helpers.removeClass)(this.element, 'theme-light');
    }

    if ((0, _helpers.hasClass)(this.element, 'theme-dark')) {
        (0, _helpers.removeClass)(this.element, 'theme-dark');
    }

    // Add active class to incoming slide
    (0, _helpers.addClass)(this.slides[index], 'f-active');
    // Add checked state to sequence indicator
    this.sequenceIndicators[index].setAttribute("aria-checked", "true");
    // Add theme class if there is one
    if (this.slides[index].hasAttribute('data-f-theme')) {
        (0, _helpers.addClass)(this.element, 'theme-' + this.slides[index].getAttribute('data-f-theme'));
    }

    if (direction === 'next') {
        (0, _helpers.addClass)(this.slides[index], 'f-animate-next');
    } else {
        (0, _helpers.addClass)(this.slides[index], 'f-animate-previous');
    }

    this.activeIndex = index;

    if (this.isScrollableNext()) {
        if (!(0, _helpers.hasClass)('f-scrollable-next')) {
            this.showNextFlipper();
        }
    } else {
        this.disableScrollableNext();
    }

    if (this.isScrollablePrevious()) {
        if (!(0, _helpers.hasClass)('f-scrollable-previous')) {
            this.showPreviousFlipper();
        }
    } else {
        this.disableScrollablePrevious();
    }
};

Carousel.prototype.nextSlide = function () {
    var nextIndex = this.activeIndex + 1;

    if (nextIndex >= this.slides.length) {
        nextIndex = 0;
    }

    this.setActiveSlide(nextIndex, 'next');

    return true;
};

Carousel.prototype.previousSlide = function () {
    var previousIndex = this.activeIndex - 1;

    if (previousIndex < 0) {
        previousIndex = this.slides.length - 1;
    }

    this.setActiveSlide(previousIndex, 'previous');

    return true;
};

Carousel.prototype.getScrollItemSize = function () {
    var child = this.slides[this.activeIndex].querySelector('li > *'),
        childStyles = child.currentStyle || window.getComputedStyle(child);

    return {
        width: child.offsetWidth,
        gutter: this.primaryDirection === 'left' ? parseInt(childStyles.marginRight, 10) : parseInt(childStyles.marginLeft, 10)
    };
};
// Single Slide functions
Carousel.prototype.scrollNext = function () {
    var currentOffset = parseInt(this.slides[this.activeIndex].style[this.primaryDirection], 10),
        itemDimensions = this.getScrollItemSize(),
        maxScrollCount = Math.floor(this.element.clientWidth / (itemDimensions.width + itemDimensions.gutter)),
        maxScrollDistance = null;

    if (isNaN(currentOffset)) {
        currentOffset = 0;
    }

    if (maxScrollCount === 0) {
        // We should always ensure that this is at least one. Otherwise,
        // if the content is wider then the container, it won't scroll at all
        maxScrollCount = 1;
    }
    // If we can fit exactly a number in a set, we should subtract one element so the last element becomes the first
    maxScrollCount = this.element.clientWidth % (itemDimensions.width + itemDimensions.gutter) === 0 ? maxScrollCount - 1 : maxScrollCount;
    maxScrollDistance = maxScrollCount * (itemDimensions.width + itemDimensions.gutter);
    var distanceToEdge = this.singleSlideWidth - this.element.clientWidth + currentOffset;
    // if we can scroll the distance of elements * scrollcount without going past the edge, we should

    if (maxScrollDistance <= distanceToEdge) {
        this.slides[this.activeIndex].style[this.primaryDirection] = maxScrollDistance * -1 + currentOffset + "px";
    } else {
        this.slides[this.activeIndex].style[this.primaryDirection] = distanceToEdge * -1 + currentOffset + itemDimensions.gutter + "px";
    }

    if (this.isScrollableNext()) {
        if (!(0, _helpers.hasClass)('f-scrollable-next')) {
            this.showNextFlipper();
        }
    } else {
        this.disableScrollableNext();
    }

    if (this.isScrollablePrevious()) {
        if (!(0, _helpers.hasClass)('f-scrollable-previous')) {
            this.showPreviousFlipper();
        }
    } else {
        this.disableScrollablePrevious();
    }
};

Carousel.prototype.scrollPrevious = function () {
    var currentOffset = parseInt(this.slides[this.activeIndex].style[this.primaryDirection], 10),
        itemDimensions = this.getScrollItemSize(),
        maxScrollCount = Math.floor(this.element.clientWidth / (itemDimensions.width + itemDimensions.gutter)),
        maxScrollDistance = null;

    if (isNaN(currentOffset)) {
        currentOffset = 0;
    }

    if (maxScrollCount === 0) {
        // We should always ensure that this is at least one. Otherwise,
        // if the content is wider then the container, it won't scroll at all
        maxScrollCount = 1;
    }

    // If we can fit exactly a number in a set, we should subtract one element so the last element becomes the first
    maxScrollCount = this.element.clientWidth % (itemDimensions.width + itemDimensions.gutter) === 0 ? maxScrollCount - 1 : maxScrollCount;
    maxScrollDistance = maxScrollCount * (itemDimensions.width + itemDimensions.gutter);
    var distanceToEdge = Math.abs(currentOffset);
    // if we can scroll the distance of elements * scrollcount without going past the edge, we should

    if (maxScrollDistance <= distanceToEdge) {
        this.slides[this.activeIndex].style[this.primaryDirection] = maxScrollDistance + currentOffset + "px";
    } else {
        this.slides[this.activeIndex].style[this.primaryDirection] = distanceToEdge + currentOffset + "px";
    }

    if (this.isScrollableNext()) {
        if (!(0, _helpers.hasClass)('f-scrollable-next')) {
            this.showNextFlipper();
        }
    } else {
        this.disableScrollableNext();
    }

    if (this.isScrollablePrevious()) {
        if (!(0, _helpers.hasClass)('f-scrollable-previous')) {
            this.showPreviousFlipper();
        }
    } else {
        this.disableScrollablePrevious();
    }
};

exports['default'] = Carousel;

},{"../../../helpers.js":30}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var Checkbox = function Checkbox(el) {
    this.element = el;
    return this.init();
};

Checkbox.prototype.init = function () {
    if (window.addEventListener) {
        window.addEventListener("load", function () {
            setIndeterminateCheckboxes();
        });
    } else if (window.attachEvent) {
        window.attachEvent("onload", function () {
            setIndeterminateCheckboxes();
        });
    }
};

function setIndeterminateCheckboxes() {
    var indeterminateCheckboxes = document.querySelectorAll('[data-js-checkbox="indeterminate"]');
    for (var i = 0; i < indeterminateCheckboxes.length; i++) {
        indeterminateCheckboxes[i].indeterminate = true;
    }
}

exports["default"] = Checkbox;

},{}],6:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var Combo = function Combo(el) {
    this.element = el;

    return this.init();
};

Combo.prototype.init = function () {
    this.input = this.element.querySelector('input');
    this.button = this.element.querySelector('button');
    this.menu = this.element.querySelector('ul');
    this.listItems = this.menu.querySelectorAll('span, a');
    this.matched = false;
    this.changeCallback = [];

    if (window.addEventListener) {
        var that = this;
        this.input.addEventListener('focus', this, true);
        this.input.addEventListener('keydown', this, true);
        this.input.addEventListener('blur', this, true);
        this.input.addEventListener('click', this, true);
        this.button.addEventListener('click', this, true);

        for (var i = 0; i < this.listItems.length; i++) {
            this.listItems[i].addEventListener('mousedown', this, true);
            this.listItems[i].addEventListener('keyup', this, true);
            if (this.listItems.length - 1 === i) {
                this.listItems[i].addEventListener('blur', this, true);
            }
        }

        document.addEventListener('click', function (e) {
            var target = e.target || e.srcElement;
            var parent = target.parentNode;
            var isClickInside = that.element.contains(target);
            if (!isClickInside) {
                if (target !== this.menu) {
                    if (parent !== this.menu) {
                        that.menu.setAttribute('aria-hidden', 'true');
                        that.input.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    } else if (window.attachEvent) {
        var handleEvent = function handleEvent() {
            that.handleEvent.call(that);
        };
        this.input.attachEvent('onfocus', handleEvent);
        this.input.attachEvent('onkeydown', handleEvent);
        this.input.attachEvent('onblur', handleEvent);
        this.input.attachEvent('onclick', handleEvent);
        this.button.attachEvent('onclick', handleEvent);

        for (var j = 0; j < this.listItems.length; j++) {
            this.listItems[j].attachEvent('onmousedown', handleEvent);
            this.listItems[j].attachEvent('onkeyup', handleEvent);
            if (this.listItems.length - 1 === j) {
                this.listItems[j].attachEvent('blur', handleEvent);
            }
        }

        document.attachEvent('onclick', function (e) {
            var target = e.target || e.srcElement;
            var parent = target.parentNode;
            var isClickInside = that.element.contains(target);
            if (!isClickInside) {
                if (target !== this.menu) {
                    if (parent !== this.menu) {
                        that.menu.setAttribute('aria-hidden', 'true');
                        that.input.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    }
    return this;
};

Combo.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (e.type === 'blur') {
        this.onblur(e, target);
    } else if (e.type === 'focus' || e.type === 'keydown') {
        this.keydown(e, target);
    } else if (e.type === 'click') {
        this.onclick(e, target);
    } else if (e.type === 'mousedown') {
        this.onmousedown(target);
    } else if (e.type === 'keyup') {
        this.onkeyup(e, target);
    }
};

Combo.prototype.onclick = function (e, target) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    var menu = this.menu;
    var input = this.input;
    var listItems = this.listItems;
    var inputTextValue = target.value;

    if (menu.getAttribute('aria-hidden') === 'true') {
        menu.setAttribute('aria-hidden', 'false');
        input.setAttribute('aria-expanded', 'true');
        this.show(menu, listItems, inputTextValue);
    } else {
        menu.setAttribute('aria-hidden', 'true');
        input.setAttribute('aria-expanded', 'false');
        this.hide(menu, listItems);
    }
};

Combo.prototype.onmousedown = function (target) {
    var menu = this.menu;
    var listItems = this.listItems;

    this.setActive(menu, listItems, target);
    this.input.value = this.getActive(listItems);
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('aria-expanded', 'false');
    this.hide(menu, listItems);
    this.executeCallback();
};

Combo.prototype.onblur = function (e) {
    var currentMenu = this.menu;
    var input = this.input;
    var listItems = this.listItems;

    currentMenu.setAttribute('aria-hidden', 'true');
    input.setAttribute('aria-expanded', 'false');
    this.hide(currentMenu, listItems);
    this.executeCallback();
};

Combo.prototype.onkeyup = function (event, target) {
    var currentMenu = this.menu;
    var listItems = this.listItems;
    var key = event.which || event.keyCode || event.charCode;

    if (key === 9) {
        this.setActive(currentMenu, listItems, target);
    } else if (key === 13) {
        this.input.value = this.getActive(listItems);
        this.hide(currentMenu, listItems);
    }
};

Combo.prototype.keydown = function (event, target) {
    var that = this;
    var currentMenu = this.menu;
    var listItems = this.listItems;
    var currentTarget = target;
    var inputTextValue;
    var showMenu = true;
    var key = event.which || event.keyCode || event.charCode;
    var activeItem;

    if (key === 13) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        activeItem = this.getActive(listItems);

        if (activeItem !== undefined) {
            this.input.value = this.getActive(listItems);
        }

        this.hide(currentMenu, listItems);
        showMenu = false;
        this.executeCallback();
    } else {
        showMenu = true;
    }

    currentTarget.onkeyup = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        inputTextValue = target.value;

        if (that.input.value === '') {
            showMenu = false;
            that.hide(currentMenu, listItems);
        }

        if (showMenu === true) {
            that.show(currentMenu, listItems, inputTextValue);
        }
    };
};

Combo.prototype.setActive = function (menu, listItems, item) {
    this.menu = menu;
    this.listItems = listItems;
    var activeItem = item;
    var activeItemOffsetTop;

    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i] !== activeItem && listItems[i].className === 'active') {
            listItems[i].className = '';
            break;
        }
    }

    if (activeItem !== undefined) {
        activeItem.className = 'active';
        activeItemOffsetTop = activeItem.offsetTop;
        this.menu.scrollTop = activeItemOffsetTop;
    }
};

Combo.prototype.getActive = function (listItems) {
    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].className === 'active') {
            return listItems[i].innerHTML;
        }
    }
};

Combo.prototype.show = function (menu, listItems, val) {
    this.menu = menu;
    this.menu.setAttribute('aria-hidden', 'false');
    this.input.setAttribute('aria-expanded', 'true');
    this.listItems = listItems;
    var itemScrollCount = 5;

    for (var i = 0; i < listItems.length; i++) {
        var string = listItems[i].innerText;
        var substring = '';
        if (val !== undefined) {
            substring = string.slice(0, val.length);
        }

        if (listItems.length >= itemScrollCount) {
            var maxHeight = 0;

            for (var l = 0; l < itemScrollCount; l++) {
                maxHeight += listItems[i].offsetHeight;
            }
            this.menu.style.maxHeight = maxHeight + 'px';
        }

        if (substring === val && substring !== '') {
            this.setActive(menu, listItems, listItems[i]);
            break;
        } else {
            this.setActive(menu, listItems, undefined);
        }
    }
};

Combo.prototype.hide = function (menu, listItems) {
    this.menu = menu;
    this.listItems = listItems;

    this.setActive(menu, listItems, undefined);
    this.menu.setAttribute('aria-hidden', 'true');
    this.input.setAttribute('aria-expanded', 'false');
};

Combo.prototype.registerCallback = function (callback, options, callbackObj) {
    this.changeCallback.push({
        options: options,
        callback: callback,
        callbackObj: callbackObj
    });
};

Combo.prototype.executeCallback = function () {
    if (this.changeCallback.length > 0) {
        for (var i = 0; i < this.changeCallback.length; i++) {
            if (typeof this.changeCallback[i].callback === "function") {
                this.changeCallback[i].callback.call(this.changeCallback[i].callbackObj, this.changeCallback[i].options);
            }
        }
    }
};

exports['default'] = Combo;

},{}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var ContentToggle = function ContentToggle(el) {
    this.element = el;

    return this.init();
};

ContentToggle.prototype.init = function () {
    this.target = this.element.getElementsByTagName("p")[0];
    this.trigger = this.element.getElementsByTagName('button')[0];
    this.strings = {
        moreText: this.trigger.getAttribute('data-f-more'),
        lessText: this.trigger.getAttribute('data-f-less')
    };

    if (this.isExpanded()) {
        this.expand();
    } else {
        this.collapse();
    }

    if (window.addEventListener) {
        this.trigger.addEventListener('click', this, false);
    } else if (window.attachEvent) {
        var that = this;
        this.trigger.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }

    return this;
};

ContentToggle.prototype.handleEvent = function (e) {
    if (this.isExpanded()) {
        this.collapse();
    } else {
        this.expand();
    }
};

ContentToggle.prototype.isExpanded = function () {
    return this.trigger.getAttribute("aria-expanded") === 'true';
};

ContentToggle.prototype.expand = function () {
    this.target.setAttribute('data-f-expanded', true);
    this.trigger.setAttribute('aria-expanded', true);
    this.trigger.innerHTML = this.strings.lessText;
};

ContentToggle.prototype.collapse = function () {
    this.target.setAttribute('data-f-expanded', false);
    this.trigger.setAttribute('aria-expanded', false);
    this.trigger.innerHTML = this.strings.moreText;
};

exports['default'] = ContentToggle;

},{}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _helpers = require('../../../helpers.js');

var DateTimePicker = function DateTimePicker(el) {
    this.element = el;

    if (this.element !== null) {
        return this.init();
    }

    return null;
};

DateTimePicker.prototype.init = function () {
    var datetimeControl = this.element.getAttribute('data-date-time-picker');
    this.cancelButton = "";
    this.firstSelection = "";
    if (datetimeControl === "date") {
        this.dateSelector = this.element.querySelector("[data-date-time-picker='date-selector']");
        this.monthColumn = this.dateSelector.querySelector("[data-date-time-picker='month'] ul");
        this.dayColumn = this.dateSelector.querySelector("[data-date-time-picker='day'] ul");
        this.yearColumn = this.dateSelector.querySelector("[data-date-time-picker='year'] ul");
        this.cancelButton = this.dateSelector.querySelector("[data-date-time-picker='cancel']");

        this.totalMonths = 12;
        this.totalDays = null;
        this.dateData = [];
        this.months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ["", 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        for (var h = 0; h <= 12; h++) {
            this.dateData[h] = {
                "month": this.months[h],
                "days": days[h]
            };
        }
        this.clearColumn(this.monthColumn);
        this.clearColumn(this.dayColumn);
        this.clearColumn(this.yearColumn);
        this.buildSelector(this.monthColumn, "month", null);
        this.buildSelector(this.dayColumn, "day", null);
        this.buildSelector(this.yearColumn, "year", null);
    } else if (datetimeControl === "time") {
        this.ampmSelection = ["AM", "PM"];
        this.timeSelector = this.element.querySelector("[data-date-time-picker='time-selector12']");
        this.hourColumn = this.timeSelector.querySelector("[data-date-time-picker='hour'] ul");
        this.minuteColumn = this.timeSelector.querySelector("[data-date-time-picker='minute'] ul");
        this.ampmColumn = this.timeSelector.querySelector("[data-date-time-picker='ampm'] ul");
        this.cancelButton = this.timeSelector.querySelector("[data-date-time-picker='cancel']");
        this.clearColumn(this.hourColumn);
        this.clearColumn(this.minuteColumn);
        this.buildSelector(this.hourColumn, "hour", null);
        this.buildSelector(this.minuteColumn, "minute", null);
        this.buildAMPM(this.ampmColumn);
    } else if (datetimeControl === "time24") {
        this.timeSelector24 = this.element.querySelector("[data-date-time-picker='time-selector24']");
        this.hour24Column = this.timeSelector24.querySelector("[data-date-time-picker='hour24'] ul");
        this.minute24Column = this.timeSelector24.querySelector("[data-date-time-picker='minute24'] ul");
        this.cancelButton = this.timeSelector24.querySelector("[data-date-time-picker='cancel']");
        this.clearColumn(this.hour24Column);
        this.clearColumn(this.minute24Column);
        this.buildSelector(this.hour24Column, "hour24", null);
        this.buildSelector(this.minute24Column, "minute24", null);
    }

    this.attachEvents(this.element);
};

DateTimePicker.prototype.attachEvents = function (el) {
    (0, _helpers.addEventListeners)(el, 'keydown', this);
    (0, _helpers.addEventListeners)(el, 'click', this);

    var scrollButtons = null;
    if (_typeof(this.dateSelector) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
        scrollButtons = this.dateSelector.querySelectorAll('button');
    } else if (_typeof(this.timeSelector) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
        scrollButtons = this.timeSelector.querySelectorAll('button');
    } else if (_typeof(this.timeSelector24) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
        scrollButtons = this.timeSelector24.querySelectorAll('button');
    }

    for (var k = 0; k < scrollButtons.length; k++) {
        if ((0, _helpers.hasClass)(scrollButtons[k], 'c-glyph') === false) {
            (0, _helpers.addEventListeners)(scrollButtons[k], 'mouseenter', this);
            (0, _helpers.addEventListeners)(scrollButtons[k], 'mouseleave', this);
        }
    }
};

DateTimePicker.prototype.handleEvent = function (e) {
    e = e || window.event;
    var keyCode = e.keyCode || e.which;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.returnValue = false;
    }
    var target = e.target || e.srcElement;
    var targetAttributeValue = target.getAttribute('data-date-time-picker');
    var ariaLabel = target.getAttribute('aria-label');

    var selectorType = null;
    if (_typeof(this.dateSelector) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
        selectorType = this.dateSelector;
    } else if (_typeof(this.timeSelector) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
        selectorType = this.timeSelector;
    } else if (_typeof(this.timeSelector24) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
        selectorType = this.timeSelector24;
    }

    //Open Date Selector
    if (selectorType.getAttribute('aria-hidden') === 'true') {
        this.firstSelection = selectorType.querySelector("[aria-checked='true']");
        if (targetAttributeValue === "month" || targetAttributeValue === "day" || targetAttributeValue === "year") {
            this.clearColumn(this.monthColumn);
            this.clearColumn(this.dayColumn);
            this.clearColumn(this.yearColumn);
            this.buildSelector(this.monthColumn, "month", null);
            this.buildSelector(this.dayColumn, "day", null);
            this.buildSelector(this.yearColumn, "year", null);
            selectorType.setAttribute('aria-hidden', 'false');
            selectorType.querySelector("[aria-checked='true']").focus();
            (0, _helpers.addEventListeners)(window, 'click', this);
        } else if (targetAttributeValue === "hour" || targetAttributeValue === "minute" || targetAttributeValue === "ampm") {
            this.clearColumn(this.hourColumn);
            this.clearColumn(this.minuteColumn);
            this.buildSelector(this.hourColumn, "hour", null);
            this.buildSelector(this.minuteColumn, "minute", null);
            this.selectAMPM(null);
            selectorType.setAttribute('aria-hidden', 'false');
            selectorType.querySelector("[aria-checked='true']").focus();
            (0, _helpers.addEventListeners)(window, 'click', this);
        } else if (targetAttributeValue === "hour24" || targetAttributeValue === "minute24") {
            this.clearColumn(this.hour24Column);
            this.clearColumn(this.minute24Column);
            this.buildSelector(this.hour24Column, "hour24", null);
            this.buildSelector(this.minute24Column, "minute24", null);
            selectorType.setAttribute('aria-hidden', 'false');
            selectorType.querySelector("[aria-checked='true']").focus();
            (0, _helpers.addEventListeners)(window, 'click', this);
        }
        return;
    } else {
        //Keyup Events
        if (e.type === "keydown") {
            this.keyColumnEl = target.parentNode.parentNode;
        }
        switch (keyCode) {

            // Esc
            case 27:
                selectorType.setAttribute('aria-hidden', 'true');
                (0, _helpers.removeEventListeners)(window, 'click', this);
                return;

            //Enter
            case 13:
                this.updatePicker();
                selectorType.setAttribute('aria-hidden', 'true');
                (0, _helpers.removeEventListeners)(window, 'click', this);
                return;

            //Left Arrow
            case 37:
                if (this.keyColumnEl !== null) {
                    this.keyColumnEl.previousElementSibling.querySelector('[aria-checked]').focus();
                }
                return;

            //Right Arrow
            case 39:
                if (this.keyColumnEl.nextElementSibling !== null) {
                    this.keyColumnEl.nextElementSibling.querySelector('[aria-checked]').focus();
                }
                return;

            //Up Arrow
            case 38:
                this.scrollColumn(this.keyColumnEl.querySelector("button"), "Scroll Up");
                return;

            //Down Arrow
            case 40:
                this.scrollColumn(this.keyColumnEl.querySelector("button"), "Scroll Down");
                return;

            //Tab + Shift
            case 9:
                this.cancelButton.onkeydown = function (e) {
                    if (e.which === 9 && !e.shiftKey) {
                        selectorType.setAttribute('aria-hidden', 'true');
                        (0, _helpers.removeEventListeners)(window, 'click', this);
                    }
                };
                this.firstSelection.onkeydown = function (e) {
                    if (e.which === 9 && e.shiftKey) {
                        selectorType.setAttribute('aria-hidden', 'true');
                        (0, _helpers.removeEventListeners)(window, 'click', this);
                    }
                };
                return;

            default:
                break;
        }
    }

    //Clicked Apply or Cancel
    if (targetAttributeValue === "cancel" && e.type === "click") {
        selectorType.setAttribute('aria-hidden', 'true');
        (0, _helpers.removeEventListeners)(window, 'click', this);
        return;
    } else if (targetAttributeValue === "apply" && e.type === "click") {
        this.updatePicker();
        selectorType.setAttribute('aria-hidden', 'true');
        (0, _helpers.removeEventListeners)(window, 'click', this);
        return;
    }

    if (ariaLabel === "Scroll Up" || ariaLabel === "Scroll Down") {
        //Control repeated scrolling action
        var that = this;
        if (e.type === 'mouseenter') {
            that.scrollDelay = setTimeout(function () {
                that.scrollInterval = false;
                clearTimeout(that.scrollDelay);
                that.scrollDelay = false;
                that.scrollInterval = setInterval(function () {
                    that.scrollColumn(target, ariaLabel);
                }, 300);
            }, 150);
            return;
        } else if (e.type === 'mouseleave') {
            clearTimeout(that.scrollDelay);
            clearInterval(that.scrollInterval);
            that.scrollInterval = false;
            this.thirtyOneDays(target);
            return;
        }

        //Scroll Column
        if (ariaLabel !== null) {
            this.scrollColumn(target, ariaLabel);
        }
    } else if (target.type === "") {
        //Item clicked, rebuild columns
        var columnType = target.parentNode.parentNode.getAttribute('data-date-time-picker');
        if (columnType === "ampm") {
            this.selectAMPM(ariaLabel);
        } else {
            var targetCol = target.parentNode;
            this.clearColumn(target.parentNode);
            this.buildSelector(selectorType.querySelector("[data-date-time-picker='" + columnType + "'] ul"), columnType, ariaLabel);
            this.thirtyOneDays(targetCol);
        }
        return;
    }

    //Clicked outside of date selector while open
    if (this.element.contains(target) === false && selectorType.getAttribute('aria-hidden') === 'false') {
        this.updatePicker();
        selectorType.setAttribute('aria-hidden', 'true');
        (0, _helpers.removeEventListeners)(window, 'click', this);
        return;
    }
};

DateTimePicker.prototype.scrollColumn = function (target, ariaButton) {
    var li = target.parentNode.querySelector("ul li");
    var ul = target.parentNode.querySelector("ul");
    var newText = null;
    var colType = target.parentNode.getAttribute('data-date-time-picker');

    if (colType === "ampm") {
        if (ariaButton === "Scroll Up") {
            this.selectAMPM("AM");
        } else if (ariaButton === "Scroll Down") {
            this.selectAMPM("PM");
        }
        return;
    }

    if (ariaButton === "Scroll Up") {
        newText = this.newContent(target.parentNode, "up");
        this.prependChildren(li, newText[2]);
        this.isLastInList(ul, newText[0], "up", newText[1]);
        this.removeChildren(target.parentNode, "bottom");
    } else if (ariaButton === "Scroll Down") {
        this.removeChildren(target.parentNode, "top");
        newText = this.newContent(target.parentNode, "down");
        this.appendChildren(ul, newText[2]);
        this.isLastInList(ul, newText[0], "down", newText[1]);
    }
};

DateTimePicker.prototype.buildSelector = function (columnEl, dateTime, clickedSelected) {
    var selected = null;
    if (clickedSelected === null) {
        selected = this.element.querySelector('[data-date-time-picker="' + dateTime + '"]').getAttribute('aria-label');
    } else {
        selected = clickedSelected;
    }

    switch (dateTime) {

        case "month":
            var monthPos = this.months.indexOf(selected, 0);
            this.buildNodes(monthPos, columnEl, 12, "month", false);
            this.setFocus(columnEl);
            break;

        case "day":
            var currentMonth = this.element.querySelector("[aria-checked]").getAttribute('aria-label');
            var dataKey = this.months.indexOf(currentMonth, 0);
            var totalDays = this.dateData[dataKey].days;
            this.buildNodes(parseInt(selected), columnEl, totalDays, null, false);
            this.setFocus(columnEl);
            break;

        case "year":
            this.buildNodes(parseInt(selected), columnEl, null, null, true);
            this.setFocus(columnEl);
            break;

        case "hour":
            this.buildNodes(parseInt(selected), columnEl, 12, null, false);
            this.setFocus(columnEl);
            break;

        case "minute":
            this.buildNodes(parseInt(selected), columnEl, 60, null, true);
            this.setFocus(columnEl);
            break;

        case "ampm":
            var ampmPos = this.ampmSelection.indexOf(selected, 0);
            this.buildAMPM(ampmPos, columnEl);
            break;

        case "hour24":
            this.buildNodes(parseInt(selected), columnEl, 24, null, true);
            this.setFocus(columnEl);
            break;

        case "minute24":
            this.buildNodes(parseInt(selected), columnEl, 60, null, true);
            this.setFocus(columnEl);
            break;
    }
};

DateTimePicker.prototype.buildNodes = function (selectedPos, columnEl, totalEl, colType, zerobased) {
    var lastEl;
    if (zerobased) {
        lastEl = totalEl - 1;
    } else {
        lastEl = totalEl;
    }

    for (var i = selectedPos - 5; i < selectedPos + 6; i++) {
        var posNum, innerContent;

        if (i === 0 && zerobased) {
            posNum = 0;
        } else if (i === totalEl && zerobased) {
            posNum = 0;
        } else if (i < 1) {
            posNum = i + totalEl;
        } else if (i > totalEl) {
            posNum = i - totalEl;
        } else {
            posNum = i;
        }

        if (colType === "month") {
            innerContent = this.dateData[posNum].month;
        } else {
            innerContent = posNum;
        }

        this.appendChildren(columnEl, innerContent);

        if (i === selectedPos) {
            columnEl.lastChild.setAttribute('aria-checked', 'true');
            columnEl.lastChild.setAttribute('tabindex', '0');
        }

        if (lastEl === posNum) {
            (0, _helpers.addClass)(columnEl.lastChild, 'f-js-last');
        }
    }
};

DateTimePicker.prototype.appendChildren = function (nodeEl, innerContent) {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(innerContent));
    node.setAttribute('aria-label', innerContent);
    nodeEl.appendChild(node);
};

DateTimePicker.prototype.prependChildren = function (nodeEl, innerContent) {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(innerContent));
    node.setAttribute('aria-label', innerContent);
    nodeEl.parentNode.insertBefore(node, nodeEl);
};

DateTimePicker.prototype.buildAMPM = function (columnEl) {
    this.appendChildren(columnEl, "AM");
    columnEl.lastChild.setAttribute('aria-checked', 'true');
    columnEl.lastChild.setAttribute('tabindex', '0');
    this.appendChildren(columnEl, "PM");
};

DateTimePicker.prototype.selectAMPM = function (selected) {
    if (selected === null) {
        selected = this.element.querySelector('[data-date-time-picker="ampm"]').getAttribute('aria-label').toUpperCase();
    }
    if (_typeof(this.ampmColumn.querySelector('[aria-checked]')) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
        this.ampmColumn.querySelector('[aria-checked]').removeAttribute('tabindex');
        this.ampmColumn.querySelector('[aria-checked]').removeAttribute('aria-checked');
    }
    if (selected === "AM") {
        (0, _helpers.removeClass)(this.ampmColumn, "f-js-pm");
        this.ampmColumn.querySelector('[aria-label="AM"]').setAttribute('aria-checked', "true");
        this.ampmColumn.querySelector('[aria-label="AM"]').setAttribute('tabindex', "0");
    } else {
        (0, _helpers.addClass)(this.ampmColumn, "f-js-pm");
        this.ampmColumn.querySelector('[aria-label="PM"]').setAttribute('aria-checked', "true");
        this.ampmColumn.querySelector('[aria-label="PM"]').setAttribute('tabindex', "0");
    }
};

DateTimePicker.prototype.newContent = function (el, dir) {
    var currentSelected = el.querySelector('[aria-checked]').getAttribute('aria-label');
    var column = el.getAttribute("data-date-time-picker");
    var returnArray = [];
    var nc = null;
    var stagedPos = null;

    if (column === "month") {
        this.removeAriaSelected(this.monthColumn);
        var monthPos = this.months.indexOf(currentSelected, 0);
        nc = this.nextCurrent(monthPos, dir, this.totalMonths, false);
        this.setAriaSelected(this.monthColumn, this.months[nc]);
        stagedPos = this.stagedElement(this.monthColumn, nc, dir, this.totalMonths, false);
        returnArray[0] = stagedPos[1];
        returnArray[1] = this.totalMonths;
        returnArray[2] = this.months[stagedPos[0]];
        return returnArray;
    } else if (column === "day") {
        var currentMonth = this.monthColumn.querySelector("[aria-checked]").getAttribute('aria-label');
        var dataKey = this.months.indexOf(currentMonth, 0);
        var totalDays = this.dateData[dataKey].days;
        this.removeAriaSelected(this.dayColumn);
        nc = this.nextCurrent(parseInt(currentSelected), dir, totalDays, false);
        this.setAriaSelected(this.dayColumn, nc);
        stagedPos = this.stagedElement(this.dayColumn, nc, dir, totalDays, false);
        returnArray[0] = stagedPos[1];
        returnArray[1] = totalDays;
        returnArray[2] = stagedPos[0];
        return returnArray;
    } else if (column === "year") {
        this.removeAriaSelected(this.yearColumn);
        nc = this.nextCurrent(parseInt(currentSelected), dir, 9999, true);
        this.setAriaSelected(this.yearColumn, nc);
        stagedPos = this.stagedElement(this.yearColumn, nc, dir, 9999, true);
        returnArray[0] = stagedPos[1];
        returnArray[1] = 9999;
        returnArray[2] = stagedPos[0];
        return returnArray;
    } else if (column === "hour") {
        this.removeAriaSelected(this.hourColumn);
        nc = this.nextCurrent(parseInt(currentSelected), dir, 12, false);
        this.setAriaSelected(this.hourColumn, nc);
        stagedPos = this.stagedElement(this.hourColumn, nc, dir, 12, false);
        returnArray[0] = stagedPos[1];
        returnArray[1] = 12;
        returnArray[2] = stagedPos[0];
        return returnArray;
    } else if (column === "minute") {
        this.removeAriaSelected(this.minuteColumn);
        nc = this.nextCurrent(parseInt(currentSelected), dir, 60, true);
        this.setAriaSelected(this.minuteColumn, nc);
        stagedPos = this.stagedElement(this.minuteColumn, nc, dir, 60, true);
        returnArray[0] = stagedPos[1];
        returnArray[1] = 59;
        returnArray[2] = stagedPos[0];
        return returnArray;
    } else if (column === "hour24") {
        this.removeAriaSelected(this.hour24Column);
        nc = this.nextCurrent(parseInt(currentSelected), dir, 24, true);
        this.setAriaSelected(this.hour24Column, nc);
        stagedPos = this.stagedElement(this.hour24Column, nc, dir, 24, true);
        returnArray[0] = stagedPos[1];
        returnArray[1] = 23;
        returnArray[2] = stagedPos[0];
        return returnArray;
    } else if (column === "minute24") {
        this.removeAriaSelected(this.minute24Column);
        nc = this.nextCurrent(parseInt(currentSelected), dir, 60, true);
        this.setAriaSelected(this.minute24Column, nc);
        stagedPos = this.stagedElement(this.minute24Column, nc, dir, 60, true);
        returnArray[0] = stagedPos[1];
        returnArray[1] = 59;
        returnArray[2] = stagedPos[0];
        return returnArray;
    }
};

DateTimePicker.prototype.removeAriaSelected = function (columnEl) {
    columnEl.querySelector('[aria-checked]').removeAttribute('tabindex');
    columnEl.querySelector('[aria-checked]').removeAttribute('aria-checked');
};

DateTimePicker.prototype.setAriaSelected = function (columnEl, el) {
    columnEl.querySelector('[aria-label="' + el + '"]').setAttribute('aria-checked', 'true');
    columnEl.querySelector('[aria-label="' + el + '"]').setAttribute('tabindex', '0');
    columnEl.querySelector('[aria-label="' + el + '"]').focus();
};

DateTimePicker.prototype.setFocus = function (columnEl) {
    if (columnEl.style.display !== "") {
        columnEl.querySelector('[aria-checked]').focus();
    }
};

DateTimePicker.prototype.nextCurrent = function (currentSelected, dir, total, zerobased) {
    if (dir === "up") {
        if (zerobased === true && currentSelected - 1 === 0) {
            return 0;
        } else if (currentSelected - 1 <= 0) {
            if (zerobased === true) {
                return total - 1;
            } else {
                return total;
            }
        } else {
            return currentSelected - 1;
        }
    } else if (dir === "down") {
        if (zerobased === true && currentSelected + 1 === total) {
            return 0;
        } else if (currentSelected + 1 > total) {
            return 1;
        } else {
            return currentSelected + 1;
        }
    }
    return false;
};

DateTimePicker.prototype.stagedElement = function (el, newContent, dir, total, zerobased) {
    var nextNum = [];
    if (dir === "down") {
        newContent = newContent + 5;
    } else if (dir === "up") {
        newContent = newContent - 5;
    }

    if (zerobased === true && newContent === 0 || zerobased === true && newContent === total) {
        nextNum[0] = 0;
        nextNum[1] = total;
    } else if (newContent < 1) {
        nextNum[0] = nextNum[1] = newContent + total;
    } else if (newContent > total) {
        nextNum[0] = nextNum[1] = newContent - total;
    } else {
        nextNum[0] = nextNum[1] = newContent;
    }
    return nextNum;
};

DateTimePicker.prototype.isLastInList = function (el, nc, dir, total) {

    // Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
    if (!("firstElementChild" in document.documentElement)) {
        Object.defineProperty(Element.prototype, "firstElementChild", {
            get: function get() {
                for (var nodes = this.children, n, i = 0, l = nodes.length; i < l; ++i) {
                    if (n = nodes[i], 1 === n.nodeType) {
                        return n;
                    }
                }
                return null;
            }
        });
    }

    // Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
    if (!("lastElementChild" in document.documentElement)) {
        Object.defineProperty(Element.prototype, "lastElementChild", {
            get: function get() {
                for (var nodes = this.children, n, i = nodes.length - 1; i >= 0; --i) {
                    if (n = nodes[i], 1 === n.nodeType) {
                        return n;
                    }
                }
                return null;
            }
        });
    }

    if (nc === total) {
        if (dir === "down") {
            (0, _helpers.addClass)(el.lastElementChild, 'f-js-last');
        } else if (dir === "up") {
            (0, _helpers.addClass)(el.firstElementChild, 'f-js-last');
        }
    }
};

DateTimePicker.prototype.removeChildren = function (columnEl, listPos) {
    var liList = columnEl.querySelectorAll('li');
    if (listPos === "top") {
        liList[0].parentNode.removeChild(liList[0]);
    } else if (listPos === "bottom") {
        var lastLi = liList.length - 1;
        liList[0].parentNode.removeChild(liList[lastLi]);
    }
};

DateTimePicker.prototype.clearColumn = function (columnEl) {
    columnEl.innerHTML = "";
};

DateTimePicker.prototype.updatePicker = function () {
    var datetimeControl = this.element.getAttribute('data-date-time-picker');
    if (datetimeControl === "date") {
        this.changeText(this.element.querySelector('[data-date-time-picker="month"]'), this.monthColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
        this.element.querySelector('[data-date-time-picker="month"]').setAttribute('aria-label', this.monthColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));

        this.changeText(this.element.querySelector('[data-date-time-picker="day"]'), this.dayColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
        this.element.querySelector('[data-date-time-picker="day"]').setAttribute('aria-label', this.dayColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));

        this.changeText(this.element.querySelector('[data-date-time-picker="year"]'), this.yearColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
        this.element.querySelector('[data-date-time-picker="year"]').setAttribute('aria-label', this.yearColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
    } else if (datetimeControl === "time") {
        this.changeText(this.element.querySelector('[data-date-time-picker="hour"]'), this.hourColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
        this.element.querySelector('[data-date-time-picker="hour"]').setAttribute('aria-label', this.hourColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));

        this.changeText(this.element.querySelector('[data-date-time-picker="minute"]'), this.minuteColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
        this.element.querySelector('[data-date-time-picker="minute"]').setAttribute('aria-label', this.minuteColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));

        this.changeText(this.element.querySelector('[data-date-time-picker="ampm"]'), this.ampmColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
        this.element.querySelector('[data-date-time-picker="ampm"]').setAttribute('aria-label', this.ampmColumn.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
    } else if (datetimeControl === "time24") {
        this.changeText(this.element.querySelector('[data-date-time-picker="hour24"]'), this.hour24Column.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
        this.element.querySelector('[data-date-time-picker="hour24"]').setAttribute('aria-label', this.hour24Column.querySelector('[aria-checked="true"]').getAttribute('aria-label'));

        this.changeText(this.element.querySelector('[data-date-time-picker="minute24"]'), this.minute24Column.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
        this.element.querySelector('[data-date-time-picker="minute24"]').setAttribute('aria-label', this.minute24Column.querySelector('[aria-checked="true"]').getAttribute('aria-label'));
    }
};

DateTimePicker.prototype.changeText = function (el, changeVal) {
    if (typeof el.textContent !== "undefined") {
        el.textContent = changeVal;
    } else {
        el.innerText = changeVal;
    }
};

DateTimePicker.prototype.thirtyOneDays = function (target) {
    var colType = target.parentNode.getAttribute('data-date-time-picker');

    if (colType !== "month") {
        return;
    }

    var selectedDay = parseInt(this.dayColumn.querySelector('[aria-checked]').getAttribute('aria-label'));
    var currentMonth = target.parentNode.querySelector("[aria-checked]").getAttribute('aria-label');
    var dataKey = this.months.indexOf(currentMonth, 0);
    var totalDays = this.dateData[dataKey].days;

    if (selectedDay === 31 && totalDays < 31) {
        this.clearColumn(this.dayColumn);
        this.buildNodes(totalDays, this.dayColumn, totalDays, null, false);
    } else {
        this.clearColumn(this.dayColumn);
        this.buildNodes(selectedDay, this.dayColumn, totalDays, null, false);
    }
};

exports['default'] = DateTimePicker;

},{"../../../helpers.js":30}],9:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var Dialog = function Dialog(el) {
    this.element = el;
    return this.init();
};

Dialog.prototype.show = function () {
    this.shown = true;
    this.dialog.setAttribute('aria-hidden', 'false');
    this.dialogContent.focus();
    document.body.style.overflow = 'hidden';

    var openID = this.dialogID;
    var openDialogContent = this.dialogContent;
    var openEl = document.getElementById(openID);
    var inputs = this.dialogInputs;
    var firstInput = inputs[0];
    var lastInput = inputs[inputs.length - 1];

    document.onkeydown = function (e) {
        var keyCode = e.keyCode || e.which;
        var target = e.target || e.srcElement;
        var theEvent = e;

        switch (keyCode) {

            //enter keystroke
            case 13:
                if (target.getAttribute('data-js-dialog-hide') !== null) {
                    e.preventDefault();
                    Dialog.prototype.escape(openEl);
                }
                break;

            //escape keystroke
            case 27:
                e.preventDefault();
                Dialog.prototype.escape(openEl);
                break;

            //tab keystroke
            case 9:

                if (inputs.length === 1) {
                    e.preventDefault();
                    firstInput.focus();
                } else {
                    lastInput.onkeydown = function (e) {
                        if (e.which === 9 && !e.shiftKey) {
                            e.preventDefault();
                            firstInput.focus();
                        }
                    };
                    firstInput.onkeydown = function (e) {
                        if (e.which === 9 && e.shiftKey) {
                            e.preventDefault();
                            lastInput.focus();
                        }
                    };
                }
                break;
            default:
                break;
        }
    };
};

Dialog.prototype.escape = function (el) {
    this.dialog = el;
    this.hide();
};

Dialog.prototype.hide = function () {
    this.shown = false;
    this.dialog.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
};

Dialog.prototype.init = function () {
    this.dialog = this.element;
    this.dialogID = this.element.getAttribute('id');
    this.openButton = document.querySelectorAll("[data-js-dialog-show=" + this.dialogID + "]");
    this.closeButton = this.element.querySelector("#" + this.dialogID + " button[data-js-dialog-hide]");
    this.closeGlyph = this.element.querySelector("#" + this.dialogID + " .c-glyph[data-js-dialog-hide]");
    this.dialogContent = this.element.querySelector("#" + this.dialogID + " div[role='dialog']");
    this.backdrop = this.element.querySelector("#" + this.dialogID + ".c-dialog div[role='presentation']");
    this.dialogInputs = this.element.querySelectorAll('select, input, textarea, button, a, .c-glyph[data-js-dialog-hide]');
    this.firstInput = this.dialogInputs[0];
    this.lastInput = this.dialogInputs[this.dialogInputs.length - 1];
    this.shown = false;

    if (window.addEventListener) {
        for (var i = 0; i < this.openButton.length; i++) {
            this.openButton[i].addEventListener('click', this, false);
        }
        if (this.closeButton !== null) {
            this.closeButton.addEventListener('click', this, false);
        }
        if (this.closeGlyph !== null) {
            this.closeGlyph.addEventListener('click', this, false);
        }
        if (this.backdrop !== null) {
            this.backdrop.addEventListener('click', this, false);
        }
    } else if (window.attachEvent) {
        var that = this;
        var handleEvent = function handleEvent() {
            that.handleEvent.call(that);
        };
        for (var j = 0; j < this.openButton.length; j++) {
            this.openButton[j].attachEvent('onclick', handleEvent);
        }

        if (this.closeButton !== null) {
            this.closeButton.attachEvent('onclick', handleEvent);
        }
        if (this.closeGlyph !== null) {
            this.closeGlyph.attachEvent('onclick', handleEvent);
        }
        if (this.backdrop !== null) {
            this.backdrop.attachEvent('onclick', handleEvent);
        }
    }

    return this;
};

Dialog.prototype.handleEvent = function (e) {
    var target = e.target || e.srcElement;

    //dialog closing elements
    if (target == this.closeButton || target == this.closeGlyph || target == this.backdrop) {
        this.hide();
    }
    //dialog opening elements
    else if (this.openButton.length > 1) {
            for (var i = 0; i < this.openButton.length; i++) {
                if (target == this.openButton[i]) {
                    this.show();
                }
            }
        } else if (target == this.openButton[0]) {
            this.show();
        }
};

exports['default'] = Dialog;

},{}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _configBreakpoints = require('../../../config.breakpoints.js');

var _configBreakpoints2 = _interopRequireDefault(_configBreakpoints);

var _breakpointTracker = require('../../../breakpointTracker.js');

var _breakpointTracker2 = _interopRequireDefault(_breakpointTracker);

var _helpers = require('../../../helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Drawer = function Drawer(el) {
    this.element = el;
    this.toggleButton = this.element.querySelector('button[aria-controls], .f-toggle[aria-controls]');
    this.drawerTarget = document.getElementById(this.toggleButton.getAttribute('aria-controls'));
    this.responsiveDrawer = (0, _helpers.hasClass)(el, 'f-responsive') === true ? true : false;

    return this.init();
};

Drawer.prototype.init = function () {

    if (this.isExpanded()) {
        this.expand();
    } else {
        this.collapse();
    }

    if (window.addEventListener) {
        this.element.addEventListener('click', this, false);

        // only activate responsive drawer for modern browsers (MQs don't work in IE8)
        if (this.responsiveDrawer) {
            this.update((0, _helpers.getWindowWidth)());
            _breakpointTracker2['default'].subscribe(this, this.update);
        }
    } else if (window.attachEvent) {
        var that = this;
        this.element.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }

    return this;
};

Drawer.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    // Drawers can host interactive items, so we need to ensure that
    // we only trigger the drawer when the drawer's toggle button is the element
    // that is clicked
    if (target === this.toggleButton) {
        if (this.isExpanded()) {
            this.collapse();
        } else {
            this.expand();
        }
    }
};

Drawer.prototype.isExpanded = function () {
    return this.toggleButton.getAttribute('aria-expanded') === 'true';
};

Drawer.prototype.expand = function () {
    this.toggleButton.setAttribute('aria-expanded', 'true');
    this.drawerTarget.style.height = 'auto';
    this.drawerTarget.style.overflow = 'visible';
    this.drawerTarget.removeAttribute('hidden');
    this.drawerTarget.setAttribute('aria-hidden', 'false');
};

Drawer.prototype.collapse = function () {
    this.toggleButton.setAttribute('aria-expanded', 'false');
    this.drawerTarget.style.overflow = 'hidden';
    this.drawerTarget.style.height = '0';
    this.drawerTarget.setAttribute('hidden', '');
    this.drawerTarget.setAttribute('aria-hidden', 'true');
};

Drawer.prototype.update = function (windowWidth) {
    // add 1 since breakpoints are identified at 0-based array
    this.viewport = _breakpointTracker2['default'].identifyBreakpoint(windowWidth) + 1;

    if (this.viewport > 1) {
        // expand content and remove visible "drawer" cues for anything larger than vp1
        this.toggleButton.setAttribute('disabled', 'disabled');
        (0, _helpers.addClass)(this.element, 'f-show');
        this.expand();
    } else {
        // collapse drawer and restore visual cues in vp1
        this.toggleButton.removeAttribute('disabled');
        (0, _helpers.removeClass)(this.element, 'f-show');
        this.collapse();
    }
};

exports['default'] = Drawer;

},{"../../../breakpointTracker.js":2,"../../../config.breakpoints.js":28,"../../../helpers.js":30}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var File = function File(el) {
    this.element = el;
    return this.init();
};

File.prototype.init = function () {

    this.fileInput = this.element.querySelector('input[type="file"]');
    this.textInput = this.element.querySelector('input[type="text"]');
    this.fileButton = this.element.querySelector('button');

    if (window.addEventListener) {

        this.fileInput.addEventListener('change', this, false);
        this.textInput.addEventListener('click', this, false);
        this.fileButton.addEventListener('click', this, false);
    } else if (window.attachEvent) {
        var that = this;

        this.fileInput.attachEvent('onchange', function () {
            that.handleEvent.call(that);
        });
        this.textInput.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
        this.fileButton.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }

    return this;
};

File.prototype.handleEvent = function (e) {
    e = e || window.event;
    e.preventDefault();

    if (e.type === 'click') {

        // click adjacent file input to open native file picker
        this.fileInput.click();

        return false;
    } else if (e.type === 'change') {

        this.fileValue = this.fileInput.value;

        // clean up browser security string for user clarity
        this.fileValue = this.fileValue.replace('C:\\fakepath\\', '');

        // display selected file in readonly textbox
        // TODO carrisa #6911960: make this work in IE8 (nextElementSibling not supported)
        this.textInput = this.fileInput.nextElementSibling;
        this.textInput.value = this.fileValue;
    }
};

exports['default'] = File;

},{}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var _viewportCollision = require('../../../viewport-collision.js');

var _viewportCollision2 = _interopRequireDefault(_viewportCollision);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Flyout = function Flyout(el) {
    this.element = el;

    return this.init();
};

Flyout.prototype.hide = function () {
    this.shown = false;
    this.flyout.setAttribute('aria-hidden', 'true');
};

Flyout.prototype.escape = function (el) {
    this.flyout = el;
    this.hide();
};

Flyout.prototype.open = function () {
    var flyoutEl = this.flyout;
    var openEl = this.openButton;
    var that = this;

    if (window.addEventListener) {
        document.addEventListener("click", function (e) {
            var target = e.target || e.srcElement;
            var parent = target.parentNode;
            var isClickInside = flyoutEl.contains(target);
            if (!isClickInside) {
                if (target !== openEl) {
                    if (parent !== openEl) {
                        that.escape(flyoutEl);
                    }
                }
            }
        });
    } else if (window.attachEvent) {
        document.attachEvent("onclick", function (e) {
            var target = e.target || e.srcElement;
            var parent = target.parentNode;
            var isClickInside = flyoutEl.contains(target);
            if (!isClickInside) {
                if (target !== openEl) {
                    if (parent !== openEl) {
                        that.escape(flyoutEl);
                    }
                }
            }
        });
    }
};

Flyout.prototype.show = function () {
    this.shown = true;
    this.flyout.setAttribute('aria-hidden', 'false');
    this.placement = this.flyout.getAttribute('data-js-flyout-placement');
    this.dimensions = (0, _helpers.getClientRect)(this.openButton);
    this.offsetLeft = this.openButton.offsetLeft;
    this.offsetTop = this.openButton.offsetTop;
    this.width = this.openButton.offsetWidth;
    this.height = this.openButton.offsetHeight;
    this.gutter = 8;
    this.flyOutHeight = this.flyout.offsetHeight;
    this.flyOutWidth = this.flyout.offsetWidth;

    if (this.placement == 'right') {
        this.placeRight();
    } else if (this.placement == 'top') {
        this.placeTop();
    } else if (this.placement == 'left') {
        this.placeLeft();
    } else if (this.placement == 'bottom') {
        this.placeBottom();
    }

    if (_viewportCollision2['default'].collidesWith(this.flyout)) {
        this.placeLeft();
        if (_viewportCollision2['default'].collidesWith(this.flyout)) {
            this.placeRight();
            if (_viewportCollision2['default'].collidesWith(this.flyout)) {
                this.placeBottom();
                if (_viewportCollision2['default'].collidesWith(this.flyout)) {
                    this.placeTop();
                    if (_viewportCollision2['default'].collidesWith(this.flyout)) {
                        this.placeBottomFinal();
                        if (_viewportCollision2['default'].collidesWith(this.flyout)) {
                            this.placeTopFinal();
                        }
                    }
                }
            }
        }
    }

    this.open();
};

Flyout.prototype.placeTopFinal = function () {
    this.flyout.style.top = this.offsetTop - this.flyOutHeight - this.gutter + 'px';
    this.flyout.style.left = this.gutter + 'px';
};

Flyout.prototype.placeBottomFinal = function () {
    this.flyout.style.top = this.offsetTop + this.height + this.gutter + 'px';
    this.flyout.style.left = this.gutter + 'px';
};

Flyout.prototype.placeBottom = function () {
    this.flyout.style.top = this.offsetTop + this.height + this.gutter + 'px';
    this.flyout.style.left = (this.width - this.flyOutWidth) / 2 + this.offsetLeft + 'px';
};

Flyout.prototype.placeLeft = function () {
    this.flyout.style.left = this.offsetLeft - this.flyOutWidth - this.gutter + 'px';
    this.flyout.style.top = (this.height - this.flyOutHeight) / 2 + this.offsetTop + 'px';
};

Flyout.prototype.placeTop = function () {
    this.flyout.style.top = this.offsetTop - this.flyOutHeight - this.gutter + 'px';
    this.flyout.style.left = (this.width - this.flyOutWidth) / 2 + this.offsetLeft + 'px';
};

Flyout.prototype.placeRight = function () {
    this.flyout.style.left = this.width + this.offsetLeft + this.gutter + 'px';
    this.flyout.style.top = (this.height - this.flyOutHeight) / 2 + this.offsetTop + 'px';
};

Flyout.prototype.init = function () {
    this.flyout = this.element;
    this.flyoutID = this.flyout.getAttribute('id');
    this.openButton = document.querySelector("[data-js-flyout=" + this.flyoutID + "]");
    this.shown = false;

    if (window.addEventListener) {
        this.openButton.addEventListener('click', this, false);
        window.addEventListener('resize', this, false);
    } else if (window.attachEvent) {
        var that = this;
        var handleEvent = function handleEvent() {
            that.handleEvent.call(that);
        };

        this.openButton.attachEvent('onclick', handleEvent);
        window.attachEvent("onresize", handleEvent);
    }

    return this;
};

Flyout.prototype.handleEvent = function (e) {
    e = e || window.event;

    if (e.type === 'resize') {
        this.hide();
    } else if (this.shown) {
        this.hide();
    } else {
        this.show();
    }
};

exports['default'] = Flyout;

},{"../../../helpers.js":30,"../../../viewport-collision.js":37}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var InPageNavigation = function InPageNavigation(el) {
    this.element = el;

    return this.init();
};

InPageNavigation.prototype.init = function () {
    var that = this;

    if (window.addEventListener) {
        window.addEventListener('resize', function () {
            that.resize();
        }, false);
    } else if (window.attachEvent) {
        window.attachEvent('onresize', function () {
            that.handleEvent.call(that.resize);
        });
    }

    this.checkCollapse();
    this.setOffsetTop();
    this.setAnchorPositions();
    this.setStickyLinks();
};

InPageNavigation.prototype.resize = function () {
    this.checkCollapse();
    this.setWidth(true);
    this.setOffsetTop();
    this.setAnchorPositions();
};

InPageNavigation.prototype.checkCollapse = function () {
    this.listItems = this.element.querySelectorAll('li');
    this.elementWidth = (0, _helpers.getClientRect)(this.element.parentElement).width;
    this.lastItemLoc = undefined;

    if (!(0, _helpers.hasClass)(this.element, 'f-dropdown') && !(0, _helpers.hasClass)(this.element, 'f-vertical')) {
        this.lastItemLoc = (0, _helpers.getClientRect)(this.listItems[this.listItems.length - 1]).right;
    } else if ((0, _helpers.hasClass)(this.element, 'f-dropdown') && !(0, _helpers.hasClass)(this.element, 'f-vertical')) {
        for (var i = 0; i < this.element.parentElement.children.length; i++) {
            this.listItems = this.element.parentElement.children[i].querySelectorAll('li');
            if (!(0, _helpers.hasClass)(this.element.parentElement.children[i], 'f-dropdown')) {
                this.lastItemLoc = (0, _helpers.getClientRect)(this.listItems[this.listItems.length - 1]).right;
            }
        }
    }

    if ((0, _helpers.hasClass)(this.element, 'f-vertical')) {
        if ((0, _helpers.getWindowWidth)() < 100 + this.elementWidth) {
            this.convertMenu('dropdown');
        } else {
            this.convertMenu('vertical');
        }
    } else {
        if (this.lastItemLoc > this.elementWidth || this.lastItemLoc === 0) {
            this.convertMenu('dropdown');
        } else {
            this.convertMenu('horizontal');
        }
    }
};

InPageNavigation.prototype.convertMenu = function (format) {
    if (format === 'dropdown') {
        if ((0, _helpers.hasClass)(this.element, 'f-dropdown')) {
            if ((0, _helpers.hasClass)(this.element, 'f-hide')) {
                (0, _helpers.removeClass)(this.element, 'f-hide');
            }
        } else {
            if (!(0, _helpers.hasClass)(this.element, 'f-hide')) {
                (0, _helpers.addClass)(this.element, 'f-hide');
            }
        }
    } else {
        if (!(0, _helpers.hasClass)(this.element, 'f-dropdown')) {
            if ((0, _helpers.hasClass)(this.element, 'f-hide')) {
                (0, _helpers.removeClass)(this.element, 'f-hide');
            }
        } else {
            if (!(0, _helpers.hasClass)(this.element, 'f-hide')) {
                (0, _helpers.addClass)(this.element, 'f-hide');
            }
        }
    }
};

InPageNavigation.prototype.setOffsetTop = function () {
    if (document.querySelector('[data-js-in-page-navigation-wrapper]') !== null && document.querySelector('[data-js-in-page-navigation-wrapper]') !== undefined) {
        this.stickyOffsetTop = (0, _helpers.getClientRect)(this.element).top + window.scrollY;
        if (this.stickyOffsetTop < 0) {
            (0, _helpers.addClass)(this.element, 'f-sticky');
            this.stickyOffsetTop = this.stickyOffsetTop - (0, _helpers.getClientRect)(document.body).top;
            this.element.style.marginLeft = this.stickyOffsetLeft;
        }
    } else {
        this.stickyOffsetTop = 0;
    }
};

InPageNavigation.prototype.getAnchorElements = function () {
    this.anchorElements = [];
    var anchors = this.element.querySelectorAll('a');
    for (var i = 0; i < anchors.length; i++) {
        var tempId = anchors[i].getAttribute('href').split("#")[1];
        this.anchorElements.push(document.getElementById(tempId));
    }
    return this.anchorElements;
};

InPageNavigation.prototype.setAnchorPositions = function () {
    this.anchorElements = this.getAnchorElements();
    this.anchorPositions = [];
    for (var l = 0; l < this.anchorElements.length; l++) {
        this.anchorPositions[this.anchorElements[l].id] = (0, _helpers.getClientRect)(this.anchorElements[l]).top - (0, _helpers.getClientRect)(document.body).top;
    }
};

InPageNavigation.prototype.setStickyLinks = function () {
    this.stickyLinks = this.element.querySelectorAll('ul a');
    this.dropdownLink = undefined;

    if ((0, _helpers.hasClass)(this.element, 'f-dropdown')) {
        this.dropdownLink = this.element.querySelector('a');
        this.attachEvents(undefined, this.dropdownLink);
    }

    for (var i = 0; i < this.stickyLinks.length; i++) {
        this.attachEvents(i);
    }
};

InPageNavigation.prototype.setWidth = function (resize) {
    var stickyElement = this.element;
    var stickElementList = stickyElement.querySelector('ul');
    var isSticky = (0, _helpers.hasClass)(stickyElement, 'f-sticky');
    var scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    this.stickyOffsetTop = (0, _helpers.getClientRect)(this.element.parentElement).top + window.scrollY;
    this.stickyOffsetLeft = (0, _helpers.getClientRect)(this.element.parentElement).left;
    this.elementWidth = (0, _helpers.getClientRect)(this.element.parentElement).width;

    if (resize === true && (0, _helpers.hasClass)(stickyElement, 'f-sticky')) {
        stickElementList.style.width = this.elementWidth + "px";
        stickElementList.style.marginLeft = this.stickyOffsetLeft + "px";
    }

    if (document.querySelector('[data-js-in-page-navigation-wrapper]') !== null && document.querySelector('[data-js-in-page-navigation-wrapper]') !== undefined) {
        if (this.stickyOffsetTop < scroll) {
            if (!(0, _helpers.hasClass)(stickyElement, 'f-sticky')) {
                (0, _helpers.addClass)(stickyElement, 'f-sticky');
                stickElementList.style.width = this.elementWidth + "px";
                stickElementList.style.marginLeft = this.stickyOffsetLeft + "px";
            }
        } else if (isSticky !== false) {
            (0, _helpers.removeClass)(stickyElement, 'f-sticky');
            if (stickElementList.style.removeProperty) {
                stickElementList.style.removeProperty('margin-left');
                stickElementList.style.removeProperty('width');
            } else {
                stickElementList.style.removeAttribute('margin-left');
                stickElementList.style.removeAttribute('width');
            }
        }
    }
};

InPageNavigation.prototype.attachEvents = function (i, dropdownLink) {
    var that = this;

    if (i === undefined) {
        if (window.addEventListener) {
            dropdownLink.addEventListener('click', this, false);
        } else if (window.attachEvent) {
            dropdownLink.attachEvent('onclick', function () {
                that.handleEvent.call(that);
            });
        }
    } else {
        if (window.addEventListener) {
            this.stickyLinks[i].addEventListener('click', this, false);
            window.addEventListener('scroll', this, false);
        } else if (window.attachEvent) {
            this.stickyLinks[i].attachEvent('onclick', function () {
                that.handleEvent.call(that);
            });
            window.attachEvent('scroll', function () {
                that.handleEvent.call(that);
            });
        }
    }
};

InPageNavigation.prototype.handleEvent = function (e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    this.anchorElements = this.getAnchorElements();
    this.collapse = false;
    var stickyElement = this.element;
    var target = e.target || e.srcElement;
    var dropdownMenu = this.element.querySelector('ul');
    var visible = dropdownMenu.getAttribute('aria-hidden');

    if (document.querySelector('[data-js-in-page-navigation-wrapper]') !== null && document.querySelector('[data-js-in-page-navigation-wrapper]') !== undefined) {
        document.querySelector('[data-js-in-page-navigation-wrapper]').style.top = this.element.offsetHeight + "px";
        for (var k = this.anchorElements.length - 1; k >= 0; k--) {
            if (this.anchorElements[k].getBoundingClientRect().top <= 50) {
                this.updateLinks(stickyElement.getElementsByTagName('a')[k]);
                break;
            }
        }
    }

    if (e.type === "scroll") {
        if (visible === 'false' || visible === false) dropdownMenu.setAttribute('aria-hidden', true);
        this.setWidth();
    } else if (e.type === "click") {
        var anchor = target.getAttribute('href').split("#")[1];

        if ((0, _helpers.hasClass)(e.target, 'f-dropdown-link')) {
            if (visible === 'true' || visible === true) dropdownMenu.setAttribute('aria-hidden', false);
            if (visible === 'false' || visible === false) dropdownMenu.setAttribute('aria-hidden', true);
        } else {
            if (!(0, _helpers.hasClass)(stickyElement, 'f-vertical')) {
                if (document.querySelector('[data-js-in-page-navigation-wrapper]') !== null && document.querySelector('[data-js-in-page-navigation-wrapper]') !== undefined) {
                    window.scrollTo(0, this.anchorPositions[anchor] - 50);
                } else {
                    window.scrollTo(0, this.anchorPositions[anchor]);
                }
            } else {
                if (document.querySelector('[data-js-in-page-navigation-wrapper]') !== null && document.querySelector('[data-js-in-page-navigation-wrapper]') !== undefined) {
                    if ((0, _helpers.hasClass)(this.element, 'f-dropdown')) {
                        window.scrollTo(0, this.anchorPositions[anchor] - 50);
                    } else {
                        window.scrollTo(0, this.anchorPositions[anchor]);
                    }
                } else {
                    window.scrollTo(0, this.anchorPositions[anchor]);
                }
            }
            this.updateLinks(target);
        }
    }
};

InPageNavigation.prototype.updateLinks = function (target) {
    for (var j = 0; j < this.stickyLinks.length; j++) {
        this.stickyLinks[j].blur();
        (0, _helpers.removeClass)(this.stickyLinks[j], 'f-active');
    }
    (0, _helpers.addClass)(target, 'f-active');
    if ((0, _helpers.hasClass)(this.element, 'f-dropdown')) {
        var activeItem = this.element.querySelector('a');
        activeItem.setAttribute('href', target.getAttribute('href'));
        activeItem.innerHTML = target.innerHTML;
    }
};

exports['default'] = InPageNavigation;

},{"../../../helpers.js":30}],14:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _configBreakpoints = require('../../../config.breakpoints.js');

var _configBreakpoints2 = _interopRequireDefault(_configBreakpoints);

var _breakpointTracker = require('../../../breakpointTracker.js');

var _breakpointTracker2 = _interopRequireDefault(_breakpointTracker);

var _helpers = require('../../../helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MosaicPlacement = function MosaicPlacement(element) {
    this.element = element;

    return this.init();
};

MosaicPlacement.prototype.init = function () {
    this.update((0, _helpers.getWindowWidth)());
    _breakpointTracker2['default'].subscribe(this, this.update);
    return this;
};

MosaicPlacement.prototype.removeSizeClasses = function () {
    this.element.className = this.element.className.replace(/(?:^|\s)(f-height-[a-zA-Z]+|f-width-[a-zA-Z]+)(?!\S)/g, '');
};

MosaicPlacement.prototype.sizeClassNames = {
    width: {
        large: "f-width-large",
        small: "f-width-small"
    },
    height: {
        large: "f-height-large",
        medium: "f-height-medium",
        small: "f-height-small"
    }
};

MosaicPlacement.prototype.getDimensions = function () {
    return {
        width: this.element.clientWidth,
        height: this.element.clientHeight
    };
};

// This defines mappings between breakpoints, widths, and heights of MosaicPlacements.
// The index of the array for each set of mappings correspond to the breakpoint
// index that they should be applied to. Within each mapping the values resolve
// height and width.
MosaicPlacement.prototype.mappings = [[[300, 0], [150, 320], [0, 160]], [[300, 540], [150, 270], [0, 135]], [[400, 768], [200, 384], [0, 0]], [[400, 542], [200, 271], [0, 135]], [[400, 542], [200, 271], [0, 135]], [[400, 542], [200, 271], [0, 135]]];

MosaicPlacement.prototype.applySizeClasses = function (windowWidth) {
    var dimensions = this.getDimensions(),
        sizeClasses = {};

    for (var i = _configBreakpoints2['default'].length - 1; i >= 0; i--) {
        if (windowWidth >= _configBreakpoints2['default'][i]) {
            if (dimensions.height >= this.mappings[i][0][0]) {
                // large
                sizeClasses.h = this.sizeClassNames.height.large;
                sizeClasses.w = dimensions.width >= this.mappings[i][0][1] ? this.sizeClassNames.width.large : this.sizeClassNames.width.small;
            } else if (dimensions.height >= this.mappings[i][1][0]) {
                sizeClasses.h = this.sizeClassNames.height.medium;
                sizeClasses.w = dimensions.width >= this.mappings[i][1][1] ? this.sizeClassNames.width.large : this.sizeClassNames.width.small;
            } else {
                sizeClasses.h = this.sizeClassNames.height.small;
                sizeClasses.w = dimensions.width >= this.mappings[i][2][1] ? this.sizeClassNames.width.large : this.sizeClassNames.width.small;
            }

            break;
        }
    }

    this.element.className += " " + sizeClasses.w + " " + sizeClasses.h;
};

MosaicPlacement.prototype.update = function (windowWidth) {
    this.removeSizeClasses();
    this.applySizeClasses(windowWidth);
};

exports['default'] = MosaicPlacement;

},{"../../../breakpointTracker.js":2,"../../../config.breakpoints.js":28,"../../../helpers.js":30}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var Pagination = function Pagination(el) {
    this.element = el;
    return this.init();
};

Pagination.prototype.init = function () {
    this.activeItem = this.element.querySelector('.f-active');
    this.activeItem.activeLink = document.createElement('a');

    //this attribute would eventually set by some outside system that preserves the url on the current page
    this.activeItem.activeLink.setAttribute('href', '#');
    this.activeItem.activeLink.innerHTML = this.activeItem.firstChild.innerHTML;
    this.activeItem.activeLink.setAttribute('aria-label', this.activeItem.getAttribute('data-label'));

    var buttons = this.element.querySelectorAll('.c-glyph');
    this.previousButtonLink = buttons[0];
    this.nextButtonLink = buttons[1];

    this.updateButtonViews(this.activeItem);

    return this;
};

Pagination.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (!(0, _helpers.hasClass)(target, 'c-glyph')) {
        var listItem = target.parentNode;

        this.updateButtonViews(listItem);

        if (!(0, _helpers.hasClass)(listItem, 'f-active')) {

            //swap labels of active
            var dataLabel = this.activeItem.firstChild.getAttribute('aria-label');
            this.activeItem.setAttribute('data-label', this.activeItem.firstChild.getAttribute('aria-label'));
            this.activeItem.innerHTML = this.activeItem.activeLink.outerHTML;
            (0, _helpers.removeClass)(this.activeItem, 'f-active');

            //swap current selected item labels and inject span
            var ariaLabel = listItem.getAttribute('data-label');
            var listItemSpan = document.createElement('span');

            listItem.setAttribute('data-label', listItem.firstChild.getAttribute('aria-label'));
            listItemSpan.setAttribute('aria-label', ariaLabel);
            listItemSpan.innerHTML = listItem.firstChild.innerHTML;

            listItem.activeLink = listItem.firstChild;
            listItem.innerHTML = "";
            listItem.appendChild(listItemSpan);

            (0, _helpers.addClass)(listItem, 'f-active');
            this.activeItem = listItem;
        }
    }
};

Pagination.prototype.isFirstPage = function (el) {
    return el === this.element.children[1];
};

Pagination.prototype.isLastPage = function (el) {
    return el === this.element.children[this.element.children.length - 2];
};

Pagination.prototype.updateButtonViews = function (el) {
    if (this.isFirstPage(el)) {
        (0, _helpers.addClass)(this.previousButtonLink.parentElement, 'f-hide');
    } else {
        (0, _helpers.removeClass)(this.previousButtonLink.parentElement, 'f-hide');
    }

    if (this.isLastPage(el)) {
        (0, _helpers.addClass)(this.nextButtonLink.parentElement, 'f-hide');
    } else {
        (0, _helpers.removeClass)(this.nextButtonLink.parentElement, 'f-hide');
    }
};

exports['default'] = Pagination;

},{"../../../helpers.js":30}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _helpers = require("../../../helpers.js");

var Pivot = function Pivot(el) {
    this.element = el;
    this.contentSections = this.element.getElementsByTagName("section");
    this.activePivotHeader = this.element.querySelector(".f-active");
    return this.init();
};

Pivot.prototype.init = function () {
    if (this.activePivotHeader !== null) {
        this.update(document.getElementById(this.activePivotHeader.getAttribute("aria-controls")));

        this.headerElement = this.element.querySelector('header');

        if (window.addEventListener) {
            this.headerElement.addEventListener('click', this, false);
        } else if (window.attachEvent) {
            var that = this;
            this.headerElement.attachEvent('onclick', function () {
                that.handleEvent.call(that);
            });
        }

        return this;
    }
};

Pivot.prototype.handleEvent = function (e) {
    e = e || window.event;

    //If IE8, use returnValue instead as preventDefault not supported.
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    var target = e.target || e.srcElement;

    if (target.nodeName === 'A') {
        (0, _helpers.removeClass)(this.activePivotHeader, "f-active");
        (0, _helpers.addClass)(target, "f-active");
        this.activePivotHeader = target;

        this.update(document.getElementById(target.getAttribute("aria-controls")));
    }
};

Pivot.prototype.update = function (target) {
    for (var i = 0; i < this.contentSections.length; i++) {
        var section = this.contentSections[i];
        if (target === section) {
            this.show(section);
        } else {
            this.hide(section);
        }
    }
};

Pivot.prototype.show = function (section) {
    section.setAttribute("aria-hidden", false);
};

Pivot.prototype.hide = function (section) {
    section.setAttribute("aria-hidden", true);
};

exports["default"] = Pivot;

},{"../../../helpers.js":30}],17:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var RefineItem = function RefineItem(el) {
    this.element = el;

    return this.init();
};

RefineItem.prototype.init = function () {
    this.isRadio = this.element.getAttribute('role') === 'radio';

    if (this.isSelected()) {
        this.select();
    } else {
        this.deselect();
    }

    // Attach window listener
    if (window.addEventListener) {
        this.element.addEventListener('click', this, false);
    } else if (window.attachEvent) {
        var that = this;
        this.element.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }

    return this;
};

RefineItem.prototype.handleEvent = function (e) {
    if (this.isSelected()) {
        this.deselect();
    } else {
        this.select();
    }
};

RefineItem.prototype.isSelected = function () {
    if (this.isRadio) {
        return this.element.getAttribute('aria-checked') === 'true';
    } else {
        return this.element.getAttribute('aria-selected') === 'true';
    }
};

RefineItem.prototype.select = function () {
    if (this.isRadio) {
        this.element.setAttribute('aria-checked', 'true');
    } else {
        this.element.setAttribute('aria-selected', 'true');
    }
};

RefineItem.prototype.deselect = function () {
    if (this.isRadio) {
        this.element.setAttribute('aria-checked', 'false');
    } else {
        this.element.setAttribute('aria-selected', 'false');
    }
};

exports['default'] = RefineItem;

},{}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _breakpointTracker = require('../../../breakpointTracker.js');

var _breakpointTracker2 = _interopRequireDefault(_breakpointTracker);

var _configBreakpoints = require('../../../config.breakpoints.js');

var _configBreakpoints2 = _interopRequireDefault(_configBreakpoints);

var _RefineItem = require('../../refine-item/scripts/RefineItem.js');

var _RefineItem2 = _interopRequireDefault(_RefineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RefineMenu = function RefineMenu(el) {
    this.element = el;
    this.collapseButton = this.element.querySelector('.c-heading + button.c-action-trigger');
    this.expandButton = this.element.querySelector('[data-mobile-target] + button.c-action-trigger');
    this.mobileTarget = this.element.querySelector('[data-mobile-target]');

    this.refineItems = [];
    var elementList = this.element.querySelectorAll('.c-refine-item');

    for (var i = 0; i < elementList.length; i++) {
        this.refineItems.push(new _RefineItem2['default'](elementList[i]));
    }

    return this.init();
};

RefineMenu.prototype.init = function () {

    _breakpointTracker2['default'].subscribe(this, this.update);

    if (window.addEventListener) {
        this.element.addEventListener('click', this, false);
    } else if (window.attachEvent) {
        var that = this;
        this.element.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }

    return this;
};

RefineMenu.prototype.stateNames = {
    expanded: {
        data: 'expanded'
    },
    collapsed: {
        data: 'collapsed'
    }
};

RefineMenu.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target === this.collapseButton) {
        this.collapse();
    } else if (target === this.expandButton) {
        this.expand();
    } else {
        var refineGroup = null,
            normalizedTarget = null;

        // Because the span inside of the button can be the click target,
        // we need to normalize our checks against the button element.
        if (target.nodeName === 'SPAN') {
            refineGroup = target.parentNode.parentNode;
            normalizedTarget = target.parentNode;
        } else {
            refineGroup = target.parentNode;
            normalizedTarget = target;
        }

        //each category will have only one item selected at once if category is radio grouped
        for (var i = 0; i < this.refineItems.length; i++) {
            if (this.refineItems[i].element.parentNode === refineGroup && this.refineItems[i].element !== normalizedTarget && refineGroup.getAttribute('role') === 'radiogroup') {
                this.refineItems[i].deselect();
            }
        }
    }
};

RefineMenu.prototype.update = function (breakPoint) {
    if (breakPoint <= _configBreakpoints2['default'][1]) {
        this.collapse();
    } else {
        this.expand();
    }
};

RefineMenu.prototype.isExpanded = function () {
    return this.mobileTarget.getAttribute('aria-expanded') === 'true';
};

RefineMenu.prototype.expand = function () {
    this.mobileTarget.style.overflow = 'visible';
    this.mobileTarget.style.height = 'auto';
    this.mobileTarget.setAttribute('aria-hidden', 'false');

    this.expandButton.setAttribute('aria-expanded', 'true');
    this.collapseButton.setAttribute('aria-expanded', 'true');
    this.expandButton.style.display = 'none';
};

RefineMenu.prototype.collapse = function () {
    this.mobileTarget.style.overflow = 'hidden';
    this.mobileTarget.style.height = 0;
    this.mobileTarget.setAttribute('aria-hidden', 'true');

    this.expandButton.setAttribute('aria-expanded', 'false');
    this.collapseButton.setAttribute('aria-expanded', 'false');
    this.expandButton.style.display = 'block';
};

exports['default'] = RefineMenu;

},{"../../../breakpointTracker.js":2,"../../../config.breakpoints.js":28,"../../refine-item/scripts/RefineItem.js":17}],19:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var SelectButton = function SelectButton(el) {
    this.element = el;

    return this.init();
};

SelectButton.prototype.setPressed = function () {
    this.element.setAttribute('aria-pressed', 'true');
};

SelectButton.prototype.removePressed = function (howMany) {
    if (howMany === "all") {
        var name = this.element.getAttribute('name');
        var associatedButtons = document.querySelectorAll('.c-select-button[name="' + name + '"]');

        for (var i = 0; i < associatedButtons.length; i++) {
            associatedButtons[i].setAttribute('aria-pressed', 'false');
        }
    } else if (howMany === "single") {
        this.element.setAttribute('aria-pressed', 'false');
        this.element.blur();
    }
};

SelectButton.prototype.isPressed = function () {
    return this.element.getAttribute('aria-pressed') === 'true';
};

SelectButton.prototype.init = function () {
    if (window.addEventListener) {
        this.element.addEventListener('click', this, false);
    } else if (window.attachEvent) {
        var that = this;
        this.element.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }

    this.prepareSwatches();

    return this;
};

SelectButton.prototype.prepareSwatches = function () {
    if (this.element.getAttribute('data-select-button-swatch')) {
        var hexVal = this.element.getAttribute('data-select-button-swatch');

        this.element.style.backgroundColor = "#" + hexVal;

        if (this.element.disabled) {
            var r = parseInt(hexVal.substring(0, 2), 16);
            var g = parseInt(hexVal.substring(2, 4), 16);
            var b = parseInt(hexVal.substring(4, 6), 16);
            var disableOverlay = this.detectContrast(r, g, b);

            //Add diagonal line class to disabled swatches
            (0, _helpers.addClass)(this.element, "f-swatch-disabled");
            if (disableOverlay === "light") {
                //Make diagonal line light, the color is dark
                (0, _helpers.addClass)(this.element, "f-swatch-disabled-dark");
            }
        }
    }
};

SelectButton.prototype.detectContrast = function (red, green, blue) {
    //http://stackoverflow.com/questions/5650924/javascript-color-contraster
    var brightness = (red * 299 + green * 587 + blue * 114) / 255000;

    if (brightness >= 0.5) {
        return "dark";
    } else {
        return "light";
    }
};

SelectButton.prototype.handleEvent = function () {
    if (this.element.getAttribute('data-select-button-multiselect')) {
        if (this.isPressed()) {
            this.removePressed("single");
        } else {
            this.setPressed();
        }
    } else {
        this.removePressed("all");
        this.setPressed();
    }
};

exports['default'] = SelectButton;

},{"../../../helpers.js":30}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var SelectMenu = function SelectMenu(el) {
    this.element = el;
    this.trigger = el.querySelector('[aria-haspopup="true"]');
    this.menu = el.querySelector('.c-menu');
    this.linkList = el.querySelectorAll('.c-menu-item a');

    return this.init();
};

SelectMenu.prototype.init = function () {
    this.changeCallback = [];
    if (!this.isExpanded()) {
        this.collapse();
    }
    this.persist = (0, _helpers.hasClass)(this.element, 'f-persist');

    this.addDefaultListener();

    return this;
};

SelectMenu.prototype.expand = function () {
    this.trigger.setAttribute('aria-expanded', 'true');
    this.menu.setAttribute('aria-hidden', 'false');
};

SelectMenu.prototype.collapse = function () {
    this.trigger.setAttribute('aria-expanded', 'false');
    this.menu.setAttribute('aria-hidden', 'true');
};

SelectMenu.prototype.isExpanded = function () {
    if (this.trigger.getAttribute('aria-expanded') === 'true' && this.menu.getAttribute('aria-hidden') === 'false') {
        return true;
    } else {
        return false;
    }
};

SelectMenu.prototype.addDefaultListener = function () {
    var that = this;

    if (window.addEventListener) {
        this.trigger.addEventListener('click', this, false);
        for (var i = 0; i < this.linkList.length; i++) {
            this.linkList[i].addEventListener('click', this, false);
        }

        document.addEventListener('click', function (e) {
            var target = e.target || e.srcElement;
            var parent = target.parentNode;
            var isClickInside = that.element.contains(target);
            if (!isClickInside) {
                if (target !== that.menu) {
                    if (parent !== that.menu) {
                        that.collapse();
                    }
                }
            }
        });
    } else if (window.attachEvent) {
        this.ieClick = function () {
            that.handleEvent.call(that);
        };

        this.trigger.attachEvent('onclick', this.ieClick);
        for (var j = 0; j < this.linkList.length; j++) {
            this.linkList[j].attachEvent('onclick', this.ieClick);
        }

        document.attachEvent('onclick', function (e) {
            var target = e.target || e.srcElement;
            var parent = target.parentNode;
            var isClickInside = that.element.contains(target);
            if (!isClickInside) {
                if (target !== that.menu) {
                    if (parent !== that.menu) {
                        that.collapse();
                    }
                }
            }
        });
    }
};

SelectMenu.prototype.removeDefaultListener = function () {
    if (window.addEventListener) {
        this.trigger.removeEventListener('click', this, false);
    } else if (window.attachEvent) {
        this.trigger.detachEvent('onclick', this.ieClick);
    }
};

SelectMenu.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.getAttribute('aria-haspopup')) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        if (this.isExpanded()) {
            this.collapse();
        } else {
            this.expand();
        }
    } else {
        if (this.persist) {
            var text = target.innerText || target.textContent;
            this.trigger.innerHTML = text;
            this.collapse();
        }
        this.executeCallback();
    }
};

SelectMenu.prototype.registerCallback = function (callback, options, callbackObj) {
    this.changeCallback.push({
        options: options,
        callback: callback,
        callbackObj: callbackObj
    });
};

SelectMenu.prototype.executeCallback = function () {
    if (this.changeCallback.length > 0) {
        for (var i = 0; i < this.changeCallback.length; i++) {
            if (typeof this.changeCallback[i].callback === "function") {
                this.changeCallback[i].callback.call(this.changeCallback[i].callbackObj, this.changeCallback[i].options);
            }
        }
    }
};

exports['default'] = SelectMenu;

},{"../../../helpers.js":30}],21:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var Slider = function Slider(el) {
    this.element = el;

    return this.init();
};

Slider.prototype.init = function () {
    this.input = this.element.querySelector('input[type="range"]');
    this.primaryDirection = document.querySelector('html').getAttribute('dir').toLowerCase() === 'rtl' ? 'right' : 'left';
    this.verticalSlider = (0, _helpers.hasClass)(this.input, 'f-vertical') === true ? true : false;
    this.subscribers = [];
    this.eventHandlerReferences = {};

    // Create replacement elements
    this.mockSlider = document.createElement('div');
    this.mockSlider.setAttribute('aria-hidden', true);
    this.thumb = document.createElement('button');
    this.valueTooltip = document.createElement('span');
    this.track = document.createElement('span');

    // Combine replacement elements
    this.thumb.appendChild(this.valueTooltip);
    this.mockSlider.appendChild(this.thumb);
    this.mockSlider.appendChild(this.track);

    // Hide input element and add new component elements to DOM
    (0, _helpers.addClass)(this.input, 'x-screen-reader');
    this.element.appendChild(this.mockSlider);

    this.max = parseInt(this.input.getAttribute('max'), 10) || 100;
    this.min = parseInt(this.input.getAttribute('min'), 10) || 0;

    this.setupDimensions();

    this.update();

    var that = this;
    if (window.addEventListener) {
        this.element.addEventListener('mousedown', this, false);
        this.thumb.addEventListener('keydown', this, false);
        window.addEventListener('resize', function () {
            that.setupDimensions();
        }, true);

        window.addEventListener('scroll', function () {
            that.setupDimensions();
        }, true);
    } else if (window.attachEvent) {
        this.element.attachEvent('onmousedown', function () {
            that.handleEvent.call(that);
        });

        this.thumb.attachEvent('onkeydown', function () {
            that.handleEvent.call(that);
        });

        window.attachEvent('onresize', function () {
            that.setupDimensions();
        });

        window.attachEvent('onscroll', function () {
            that.setupDimensions();
        });
    }
};

Slider.prototype.setupDimensions = function () {
    this.dimensions = (0, _helpers.getClientRect)(this.mockSlider);
    this.maxThumbOffset = this.verticalSlider === false ? this.dimensions.width - this.thumb.clientWidth : this.dimensions.height - this.thumb.clientWidth;
    this.thumbOffset = null;

    var initValue = parseInt(this.input.getAttribute('value'), 10);
    this.thumbOffset = initValue / this.max * this.maxThumbOffset;
};

Slider.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target === this.thumb) {
        if (typeof e.which !== 'undefined' && e.which === 39 || e.which === 37) {
            // Keyboard accessability
            switch (e.which) {
                case 39:
                    // Right key
                    this.thumbOffset = this.normalizeThumbOffset(this.thumbOffset + 10);
                    this.update();
                    break;
                case 37:
                    // Left key
                    this.thumbOffset = this.normalizeThumbOffset(this.thumbOffset - 10);
                    this.update();
                    break;
            }
        } else {
            this.eventHandlerReferences.mouseMove = this.handleMouseMove.bind(this);
            this.eventHandlerReferences.mouseUp = this.removeMouseMove.bind(this);

            if (window.addEventListener) {
                document.addEventListener('mousemove', this.eventHandlerReferences.mouseMove, false);
                document.addEventListener('mouseup', this.eventHandlerReferences.mouseUp, false);
            } else if (window.attachEvent) {
                document.attachEvent('onmousemove', this.eventHandlerReferences.mouseMove);
                document.attachEvent('onmouseup', this.eventHandlerReferences.mouseUp);
            }
        }
    } else {
        var pixelOffset = e.clientX - this.dimensions[this.primaryDirection];

        // Invert RTL because max value is to the left of 0
        if (this.primaryDirection === 'right') {
            pixelOffset = pixelOffset * -1;
        }

        this.thumbOffset = this.normalizeThumbOffset(pixelOffset);
        this.update();
    }
};

Slider.prototype.normalizeThumbOffset = function (px) {
    if (px < 0) {
        return 0;
    }

    return px > this.maxThumbOffset ? this.maxThumbOffset : px;
};

Slider.prototype.setCallback = function (subscriber, callback) {
    this.subscribers.push({
        subscriber: subscriber,
        callback: callback
    });
};

Slider.prototype.setValue = function () {
    var value = Math.floor(this.thumbOffset / this.maxThumbOffset * 100);
    this.input.setAttribute('value', value);
    if (this.subscribers.length > 0) {
        this.subscribers[0].callback.call(this.subscribers[0].subscriber, value);
    } else {
        this.valueTooltip.innerHTML = value;
    }
};

Slider.prototype.update = function () {
    this.thumb.style[this.primaryDirection] = this.thumbOffset + 'px';
    this.track.style.width = this.thumbOffset + 'px';
    this.setValue();
};

Slider.prototype.handleMouseMove = function (e) {
    e = e || window.event;

    var clientDir = null;
    var isLessThanMin = null;
    var isGreaterThanMax = null;
    if (this.verticalSlider === false) {
        clientDir = e.clientX;
        // if e.x is greater than the right edge do nothing
        // if e.x is less than the left edge do nothing
        isLessThanMin = this.primaryDirection === 'left' ? e.clientX < this.dimensions[this.primaryDirection] : e.clientX > this.dimensions[this.primaryDirection];

        isGreaterThanMax = this.primaryDirection === 'right' ? e.clientX > this.dimensions[this.primaryDirection] + this.dimensions.width : e.clientX < this.dimensions[this.primaryDirection] - this.dimensions.width;
    } else {
        clientDir = e.clientY;
        isLessThanMin = e.clientY < this.dimensions.top;
        isGreaterThanMax = e.clientY > this.dimensions.bottom;
    }

    if (isLessThanMin || isGreaterThanMax) {
        return;
    } else {
        var offset;

        if (this.verticalSlider === false) {
            // otherwise, calculate the offset from current x  and set UI to that
            offset = e.clientX - this.dimensions[this.primaryDirection];

            // Invert RTL because max value is to the left of 0
            if (this.primaryDirection === 'right') {
                offset = offset * -1;
            }
        } else {
            offset = this.dimensions.bottom - e.clientY;
        }

        this.thumbOffset = this.normalizeThumbOffset(offset);
        this.update();
    }
};

Slider.prototype.removeMouseMove = function () {
    if (window.addEventListener) {
        document.removeEventListener('mousemove', this.eventHandlerReferences.mouseMove, false);
        document.removeEventListener('mouseup', this.eventHandlerReferences.mouseUp, false);
    } else if (window.attachEvent) {
        document.detachEvent('onmousemove', this.eventHandlerReferences.mouseMove);
        document.detachEvent('onmouseup', this.eventHandlerReferences.mouseUp);
    }
};

exports['default'] = Slider;

},{"../../../helpers.js":30}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _helpers = require("../../../helpers.js");

var SupplementalNav = function SupplementalNav(el) {
    this.element = el;
    this.activeLink = this.element.querySelector(".f-active");
    return this.init();
};

SupplementalNav.prototype.init = function () {
    var triggers = this.element.querySelectorAll("a[data-state]");
    var expandedNavID = this.activeLink.parentNode.getAttribute('id');

    for (var i = 0; i < triggers.length; i++) {
        if (triggers[i].getAttribute("aria-controls") === expandedNavID) {
            this.expand(triggers[i]);
            this.activeTrigger = triggers[i];
        } else {
            this.collapse(triggers[i]);
        }
    }

    if (window.addEventListener) {
        this.element.addEventListener('click', this, false);
    } else if (window.attachEvent) {
        var that = this;
        this.element.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }

    return this;
};

SupplementalNav.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (this.isParent(target)) {
        this.collapse(this.activeTrigger);
        this.expand(target);
    } else {
        (0, _helpers.removeClass)(this.activeLink, "f-active");
        (0, _helpers.addClass)(target, "f-active");
        this.activeLink = target;
    }
};

SupplementalNav.prototype.stateNames = {
    expanded: {
        data: "expanded"
    },
    collapsed: {
        data: "collapsed"
    }
};

SupplementalNav.prototype.isExpanded = function (el) {
    return el.getAttribute("data-state") === this.stateNames.expanded.data ? true : false;
};

SupplementalNav.prototype.expand = function (el) {
    var targetNav = document.getElementById(el.getAttribute("aria-controls"));
    el.setAttribute("data-state", this.stateNames.expanded.data);
    targetNav.setAttribute("aria-hidden", false);
    targetNav.style.height = "auto";
    targetNav.style.overflow = "visible";
    this.activeTrigger = el;
};

SupplementalNav.prototype.collapse = function (el) {
    var targetNav = document.getElementById(el.getAttribute("aria-controls"));
    el.setAttribute("data-state", this.stateNames.collapsed.data);
    targetNav.setAttribute("aria-hidden", true);
    targetNav.style.overflow = "hidden";
    targetNav.style.height = "0";
};

SupplementalNav.prototype.isParent = function (el) {
    return el.hasAttribute("data-state") && el.hasAttribute("aria-controls") ? true : false;
};

exports["default"] = SupplementalNav;

},{"../../../helpers.js":30}],23:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var Table = function Table(el) {
    this.element = el;

    this.tableToSort = this.element.querySelector('[data-f-sort="true"]');

    if (this.tableToSort !== null) {
        return this.init();
    }

    return null;
};

Table.prototype.init = function () {
    this.tableCells = [];
    this.thSortable = [];
    this.tableContent = this.tableToSort.querySelectorAll("tbody");

    var rows = this.tableToSort.querySelectorAll("tbody > tr");
    this.rowLength = rows.length;
    var cellLength, cell;
    for (var i = 0; i < this.rowLength; i++) {
        cell = rows[i].cells;
        cellLength = cell.length;
        this.tableCells[i] = [];
        for (var j = 0; j < cellLength; j++) {
            this.tableCells[i][j] = {
                "html": cell[j].innerHTML,
                "txt": this.convertToRawVal(cell[j])
            };
        }
    }

    this.thSortable = this.tableToSort.querySelectorAll("thead .f-sortable");
    for (var k = 0; k < this.thSortable.length; k++) {
        var sortButton = this.thSortable[k].querySelector("button");
        (0, _helpers.addClass)(sortButton, 'c-glyph');
        this.thSortable[k].ts = {
            "asc": 1,
            "col": k
        };
        this.attachEvents(sortButton);
    }
};

Table.prototype.attachEvents = function (thClickable) {
    var that = this;
    if (window.addEventListener) {
        thClickable.addEventListener('click', this, false);
    } else if (window.attachEvent) {
        thClickable.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }
};

Table.prototype.clearArrows = function () {
    for (var l = 0; l < this.thSortable.length; l++) {
        this.thSortable[l].setAttribute('aria-sort', 'none');
        var sortButton = this.thSortable[l].querySelector("button");
        (0, _helpers.removeClass)(sortButton, 'f-descending');
        (0, _helpers.removeClass)(sortButton, 'f-ascending');
    }
};

Table.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var targetParent = target.parentElement;
    this.clearArrows();
    this.performSort(targetParent.ts.col, targetParent.ts.asc);

    if (targetParent.ts.asc === 1) {
        targetParent.setAttribute('aria-sort', 'ascending');
        (0, _helpers.addClass)(target, 'f-ascending');
        targetParent.ts.asc = -1;
    } else {
        targetParent.setAttribute('aria-sort', 'descending');
        (0, _helpers.addClass)(target, 'f-descending');
        targetParent.ts.asc = 1;
    }
};

Table.prototype.performSort = function (col, asc) {
    this.tableCells.sort(function (a, b) {
        var retval = 0;
        var aVal = a[col].txt;
        var bVal = b[col].txt;
        var fA = parseFloat(aVal);
        var fB = parseFloat(bVal);
        if (aVal !== bVal) {
            if (fA === aVal && fB === bVal) {
                retval = fA > fB ? asc : -1 * asc;
            } else {
                retval = aVal > bVal ? asc : -1 * asc;
            }
        }
        return retval;
    });

    this.rebuildTable();
};

Table.prototype.rebuildTable = function () {
    for (var rowidx = 0; rowidx < this.rowLength; rowidx++) {
        for (var colidx = 0; colidx < this.tableCells[rowidx].length; colidx++) {
            this.tableContent[0].rows[rowidx].cells[colidx].innerHTML = this.tableCells[rowidx][colidx].html;
        }
    }
};

Table.prototype.convertToRawVal = function (content) {
    var retVal;

    //Find numerical values and strip everything except the int
    if ((0, _helpers.hasClass)(content, "f-numerical")) {

        //set free item to 0
        if (content.querySelectorAll('[content="0.00"]').length > 0) {
            retVal = 0;
        } else {
            var regx = /\d+|\.\d{0,2}|\,\d{0,2}$/g;
            var str = this.extractRawValue(content);
            var intVal;
            var intArr = [];
            while ((intVal = regx.exec(str)) !== null) {
                intArr.push(intVal);
            }
            retVal = intArr.join("");
        }
    } else if (content === ' ') {
        //Put empty cells on top or bottom
        retVal = -1;
    } else {
        //Not a numerical value or empty, return full raw string
        retVal = this.extractRawValue(content);
    }

    return retVal;
};

Table.prototype.extractRawValue = function (content) {
    return content.textContent || content.innerText;
};

exports['default'] = Table;

},{"../../../helpers.js":30}],24:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var Toggle = function Toggle(el) {
    this.element = el;
    return this.init();
};

Toggle.prototype.setChecked = function () {
    this.toggleButton.setAttribute('aria-checked', 'true');
    this.checkedIndicator.innerHTML = this.checkedString;
};

Toggle.prototype.setUnchecked = function () {
    this.toggleButton.setAttribute('aria-checked', 'false');
    this.checkedIndicator.innerHTML = this.uncheckedString;
};

Toggle.prototype.isChecked = function () {
    return this.toggleButton.getAttribute('aria-checked') == 'true';
};

Toggle.prototype.isDisabled = function () {
    return this.toggleButton.hasAttribute("disabled");
};

Toggle.prototype.setDisabled = function () {
    (0, _helpers.addClass)(this.element, "f-disabled");
};

Toggle.prototype.setEnabled = function () {
    (0, _helpers.removeClass)(this.element, "f-disabled");
    this.checkedIndicator.addEventListener('click', this, false);
};

Toggle.prototype.init = function () {
    this.toggleButton = this.element.querySelector("button");
    this.checkedIndicator = this.element.querySelector("button + span");
    this.checkedString = this.checkedIndicator.getAttribute("data-on-string");
    this.uncheckedString = this.checkedIndicator.getAttribute("data-off-string");

    if (this.isDisabled()) {
        this.setDisabled();
    } else {
        this.setEnabled();
    }

    if (this.isChecked()) {
        this.checkedIndicator.innerHTML = this.checkedString;
    } else {
        this.checkedIndicator.innerHTML = this.uncheckedString;
    }

    if (window.addEventListener) {
        this.toggleButton.addEventListener('click', this, false);
        //this.checkedIndicator.addEventListener('click', this, false);
    } else if (window.attachEvent) {
        var that = this;
        this.toggleButton.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
        this.checkedIndicator.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }
    return this;
};

Toggle.prototype.handleEvent = function (e) {
    if (!this.isChecked()) {
        this.setChecked();
    } else {
        this.setUnchecked();
    }
};

exports['default'] = Toggle;

},{"../../../helpers.js":30}],25:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var Tooltip = function Tooltip(el) {
    this.element = el;

    return this.init();
};

Tooltip.prototype.init = function () {
    this.controller = document.querySelector("[aria-describedby=" + this.element.getAttribute('id') + "]");
    this.isVisible = false;
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    if (window.addEventListener) {
        this.controller.addEventListener('mouseover', this, false);
    } else if (window.attachEvent) {
        var that = this;

        this.controller.attachEvent('onmouseover', function () {
            that.handleEvent.call(that);
        });
    }

    return this;
};

Tooltip.prototype.handleEvent = function (e) {
    e = e || window.event;

    if (e.type === "mouseover") {
        this.timer = window.setTimeout(this.show, 800);

        if (window.addEventListener) {
            this.controller.addEventListener('mouseout', this, false);
            document.addEventListener('mousemove', this, false);
        } else if (window.attachEvent) {
            var that = this;

            this.controller.attachEvent('onmouseout', function () {
                that.handleEvent.call(that);
            });
            this.controller.attachEvent('onmousmove', function () {
                that.handleEvent.call(that);
            });
        }
    } else if (e.type === "mouseout") {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
        this.hide();
    } else if (e.type === "mousemove") {
        this.xPosition = e.x;
        this.yPosition = e.y;

        if (this.isVisible) {
            this.setTooltipToMousePosition();
        }
    }
};

Tooltip.prototype.setTooltipToMousePosition = function () {
    this.element.style.left = this.xPosition + 'px';
    this.element.style.top = this.yPosition + 'px';
};

Tooltip.prototype.show = function () {
    this.isVisible = true;
    this.setTooltipToMousePosition();
    this.element.setAttribute('aria-hidden', 'false');
};

Tooltip.prototype.hide = function () {
    this.isVisible = false;
    this.element.setAttribute('aria-hidden', 'true');

    if (window.removeEventListener) {
        document.removeEventListener('mousemove', this, false);
    } else if (window.detachEvent) {
        var that = this;
        document.detachEvent('onmousemove', function () {
            that.handleEvent.call(that);
        });
    }
};

exports["default"] = Tooltip;

},{}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var UniversalHeader = function UniversalHeader(el) {
    this.element = el;
    this.mobileNav = document.querySelector('.c-universal-header > nav');
    this.hamburger = document.querySelector('.c-universal-header .c-action-trigger.glyph-global-nav-button');
};

UniversalHeader.prototype.init = function () {
    if (window.addEventListener) {
        this.hamburger.addEventListener('click', this, false);
    } else if (window.attachEvent) {
        var that = this;
        this.hamburger.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }
};

UniversalHeader.prototype.handleEvent = function (e) {
    if (this.mobileNavShowing()) {
        this.hideMobileNav();
    } else {
        this.showMobileNav();
    }
};

UniversalHeader.prototype.showMobileNav = function () {
    (0, _helpers.removeClass)(this.mobileNav, "f-closed");
    this.mobileNav.setAttribute("aria-hidden", "false");
};

UniversalHeader.prototype.hideMobileNav = function () {
    (0, _helpers.addClass)(this.mobileNav, "f-closed");
    this.mobileNav.setAttribute("aria-hidden", "true");
};

UniversalHeader.prototype.mobileNavShowing = function () {
    if ((0, _helpers.hasClass)(this.mobileNav, "f-closed") && this.mobileNav.getAttribute("aria-hidden") == "true") {
        return false;
    } else {
        return true;
    }
};

exports['default'] = UniversalHeader;

},{"../../../helpers.js":30}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var _Slider = require('../../slider/scripts/Slider.js');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Video = function Video(el) {
    this.element = el;
    this.videoObj = this.element.getElementsByClassName('f-video-player');
    this.videoControls = this.element.querySelector('.f-video-controls');
    if (this.videoObj[0].canPlayType && this.videoControls !== null) {
        return this.init();
    }
    return null;
};

Video.prototype.init = function () {
    this.videoEl = this.element.querySelector('video');
    this.playButton = this.element.querySelector('.f-play-pause');
    this.playTooltip = this.playButton.querySelector('span');
    this.fullScreenButton = this.element.querySelector('.f-full-screen');
    this.fsTooltip = this.fullScreenButton.querySelector('span');
    this.seekSlider = this.element.querySelector('.c-slider.f-progress');
    this.seekBar = this.element.querySelector('.f-seek-bar');
    this.volumeButton = this.element.querySelector('.f-volume-button');
    this.volumeSliderContainer = this.element.querySelector('.f-volume-slider');
    this.volumeCSlider = this.element.querySelector('.f-volume-slider .c-slider');
    this.timeCurr = this.element.querySelector('.f-timecode');
    this.timeDur = this.element.querySelector('.f-timecode span');
    this.optionsButton = this.element.querySelector('.f-options');
    this.optionsContainer = this.element.querySelector('.f-options-dialog');
    this.optionsDialogInit();

    this.eventHandlerReferences = {};

    //Initialize Sliders Manually -- force sliders to be in ltr mode and update
    this.progressSlider = new _Slider2['default'](this.seekSlider);
    this.progressSlider.primaryDirection = 'left';
    this.progressSlider.update();
    this.progressSlider.setCallback(this, this.returnCurrentTime);
    this.volumeSlider = new _Slider2['default'](this.volumeCSlider);
    this.volumeSlider.primaryDirection = 'left';
    this.volumeSlider.update();
    this.volumeOn = true;
    this.volumeLevel = 1;

    //Seek Bar Slider Controls & Volume Slider
    this.thumb = this.element.querySelector('.f-progress button');
    this.tooltip = this.element.querySelector('.f-progress button span');
    this.mockSlider = this.element.querySelector('.f-progress div');
    this.dimensions = (0, _helpers.getClientRect)(this.mockSlider);
    this.maxThumbOffset = this.dimensions.width - this.thumb.clientWidth;
    this.track = this.mockSlider.querySelectorAll('span');
    this.volumeBar = this.element.querySelector('.c-slider .f-volume-bar');
    this.volumeBarButton = this.element.querySelector('.f-volume-slider button');
    this.volumeBarTooltip = this.element.querySelector('.c-slider span');

    (0, _helpers.addEventListeners)(this.playButton, 'click', this);
    (0, _helpers.addEventListeners)(this.playButton, 'mouseover', this);
    (0, _helpers.addEventListeners)(this.playButton, 'mouseout', this);
    (0, _helpers.addEventListeners)(this.videoEl, 'click', this);
    (0, _helpers.addEventListeners)(this.videoEl, 'timeupdate', this);
    (0, _helpers.addEventListeners)(this.videoEl, 'mouseup', this);
    (0, _helpers.addEventListeners)(this.fullScreenButton, 'click', this);
    (0, _helpers.addEventListeners)(this.fullScreenButton, 'mouseover', this);
    (0, _helpers.addEventListeners)(this.fullScreenButton, 'mouseout', this);
    (0, _helpers.addEventListeners)(this.seekBar, 'onchange', this);
    (0, _helpers.addEventListeners)(this.thumb, 'mousedown', this);
    (0, _helpers.addEventListeners)(this.volumeButton, 'click', this);
    (0, _helpers.addEventListeners)(this.volumeButton, 'mouseover', this);
    (0, _helpers.addEventListeners)(this.volumeButton, 'mouseout', this);
    (0, _helpers.addEventListeners)(this.volumeBarButton, 'mouseup', this);
    (0, _helpers.addEventListeners)(this.volumeBarButton, 'mouseout', this);
    (0, _helpers.addEventListeners)(this.volumeBarButton, 'mousemove', this);
    (0, _helpers.addEventListeners)(this.volumeSliderContainer, 'mouseup', this);
    (0, _helpers.addEventListeners)(this.volumeSliderContainer, 'mouseover', this);
    (0, _helpers.addEventListeners)(this.volumeSliderContainer, 'mouseout', this);
    (0, _helpers.addEventListeners)(this.volumeBarTooltip, 'mouseup', this);
    (0, _helpers.addEventListeners)(this.volumeBarTooltip, 'mouseout', this);
    (0, _helpers.addEventListeners)(this.optionsButton, 'click', this);

    var that = this;
    if (window.addEventListener) {
        that.element.addEventListener('mouseover', function () {
            that.cpMouseEvents();
        }.bind(that), false);
        that.element.addEventListener('mouseout', function () {
            that.cpMouseEvents();
        }.bind(that), false);
        window.addEventListener('resize', function () {
            that.handleResize();
        }, true);
        window.addEventListener('scroll', function () {
            that.handleResize();
        }, true);
    } else if (window.attachEvent) {
        that.element.attachEvent('onmouseover', function () {
            that.cpMouseEvents();
        }.bind(that), false);
        that.element.attachEvent('onmouseout', function () {
            that.cpMouseEvents();
        }.bind(that), false);
        window.attachEvent('onresize', function () {
            that.handleResize();
        });
        window.attachEvent('onscroll', function () {
            that.handleResize();
        });
    }

    this.cpTimer = window.setTimeout(function () {
        that.panelTimer();
    }, 3500);
    this.cpActive = true;

    window.onload = function () {
        // Safari volume slider needs to be updated after the components load
        // otherwise the slider dimensions are incorrect
        that.volumeSlider.setupDimensions();
    };

    return this;
};

Video.prototype.optionsDialogInit = function () {
    this.odParent = this.optionsContainer.querySelector('ul');
    this.odDimensions = (0, _helpers.getClientRect)(this.odParent);
    this.optionsContainer.style.height = this.odDimensions.height + "px";
    this.odSubActive = null;

    var that = this;
    if (window.addEventListener) {
        that.odParent.addEventListener('click', function () {
            that.odMouseEvents();
        }.bind(that), false);
    } else if (window.attachEvent) {
        that.odParent.attachEvent('onclick', function () {
            that.odMouseEvents();
        }.bind(that), false);
    }
};

Video.prototype.odMouseEvents = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    this.odDimensions = (0, _helpers.getClientRect)(this.odParent);
    this.videoDimensions = (0, _helpers.getClientRect)(this.element);
    var nextMenuName = target.getAttribute('data-video-options');
    if (nextMenuName && nextMenuName !== "back") {
        var nextMenu = this.optionsContainer.querySelector('.' + nextMenuName);
        nextMenu.style.display = "block";
        var nextHeight = this.calcHeight(nextMenu);
        this.optionsContainer.style.height = nextHeight + "px";
        this.odParent.style.left = "-160px";
        this.odSubActive = nextMenu;
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    } else if (nextMenuName) {
        this.optionsContainer.style.height = this.odDimensions.height + "px";
        this.odParent.style.left = "0";
        this.odResetSubActive();
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }

    if (target.getAttribute('data-video-selectable')) {
        var siblings = target.parentNode.parentNode.querySelectorAll('a');
        for (var j = 0; j < siblings.length; j++) {
            (0, _helpers.removeClass)(siblings[j], 'glyph-check-mark');
        }
        (0, _helpers.addClass)(target, 'glyph-check-mark');
    }
};

Video.prototype.calcHeight = function (nextEl) {
    var nextHeight = (0, _helpers.getClientRect)(nextEl).height;
    if (nextHeight > this.videoDimensions.height - 46) {
        this.optionsContainer.style.overflowY = "scroll";
        return this.videoDimensions.height - 46;
    } else {
        this.optionsContainer.style.overflowY = "hidden";
        return nextHeight;
    }
};

Video.prototype.panelTimer = function () {
    this.cpActive = false;
    this.controlPanelToggle();
    window.clearTimeout(this.cpTimer);
};

Video.prototype.controlPanelToggle = function () {
    if (this.cpActive) {
        (0, _helpers.removeClass)(this.videoControls, 'f-slideout');
        (0, _helpers.addClass)(this.videoControls, 'f-slidein');
    } else {
        (0, _helpers.removeClass)(this.videoControls, 'f-slidein');
        (0, _helpers.addClass)(this.videoControls, 'f-slideout');
        this.volumeSliderContainer.setAttribute('aria-hidden', 'true');
        this.optionsContainer.style.height = this.odDimensions.height + "px";
        this.odParent.style.left = "0";
        this.odResetSubActive();
        this.optionsContainer.setAttribute('aria-hidden', 'true');
    }
};

Video.prototype.odResetSubActive = function () {
    if (this.odSubActive) {
        this.odSubActive.style.display = "none";
        this.odSubActive = null;
    }
};

Video.prototype.cpMouseEvents = function (e) {
    e = e || window.event;
    this.cpActive = true;

    var that = this;
    if (e.type === "mouseover") {
        window.clearTimeout(that.cpTimer);
        this.controlPanelToggle();
    } else if (e.type === "mouseout") {
        e = e.toElement || e.relatedTarget;
        while (e && e.parentNode && e.parentNode !== window) {
            if (e.parentNode === this || e === this) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                return false;
            }
            e = e.parentNode;
        }
        that.cpTimer = window.setTimeout(function () {
            that.panelTimer();
        }, 3500);
    }
};

Video.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (e.type === "click") {
        target.blur();
    }

    switch (target) {
        case this.playButton:
            this.playPause(e);
            this.closeOpenDialogs(e);
            break;

        case this.fullScreenButton:
            this.fullScreen(e);
            this.closeOpenDialogs(e);
            break;

        case this.seekBar:
            this.updateSeekBar();
            this.closeOpenDialogs(e);
            break;

        case this.videoEl:
            this.videoMethods(e);
            this.closeOpenDialogs(e);
            break;

        case this.thumb:
            this.seekVideo(e);
            this.closeOpenDialogs(e);
            break;

        case this.volumeButton:
            if (e.type === "click") {
                this.muteUnmute();
            } else {
                this.volumeToggle(e);
            }
            break;

        case this.optionsButton:
            this.toggleDialogs(this.optionsContainer);
            break;

        case this.volumeSliderContainer:
            if (e.type === "mouseover") {
                this.hoverVolume();
            } else {
                this.updateVolume();
            }
            break;

        case this.volumeBarButton:
        case this.volumeBarTooltip:
            this.updateVolume();
            break;
    }
};

Video.prototype.handleResize = function () {
    this.dimensions = (0, _helpers.getClientRect)(this.mockSlider);
    this.maxThumbOffset = this.dimensions.width - this.thumb.clientWidth;
    this.updateSeekBar();
    this.optionsContainer.setAttribute('aria-hidden', 'true');
};

Video.prototype.playPause = function (e) {
    if (e.type === 'click') {
        if (this.videoObj[0].paused === true) {
            this.videoObj[0].play();
            (0, _helpers.removeClass)(this.playButton, 'glyph-play');
            this.playButton.setAttribute('aria-label', "Pause");
            (0, _helpers.addClass)(this.playButton, 'glyph-pause');
            this.playTooltip.innerHTML = "Pause";
            this.updateVolume();
        } else {
            this.videoObj[0].pause();
            (0, _helpers.removeClass)(this.playButton, 'glyph-pause');
            this.playButton.setAttribute('aria-label', "Play");
            (0, _helpers.addClass)(this.playButton, 'glyph-play');
            this.playTooltip.innerHTML = "Play";
        }
    } else if (e.type === 'mouseover') {
        this.playTooltip.setAttribute('aria-hidden', 'false');
    } else if (e.type === 'mouseout') {
        this.playTooltip.setAttribute('aria-hidden', 'true');
    }
};

Video.prototype.fullScreen = function (e) {
    if (e.type === 'click') {
        if (this.videoObj[0].requestFullscreen) {
            this.videoObj[0].requestFullscreen();
        } else if (this.videoObj[0].mozRequestFullScreen) {
            this.videoObj[0].mozRequestFullScreen();
        } else if (this.videoObj[0].webkitRequestFullscreen) {
            this.videoObj[0].webkitRequestFullscreen();
        }
    } else if (e.type === 'mouseover') {
        this.fsTooltip.setAttribute('aria-hidden', 'false');
    } else if (e.type === 'mouseout') {
        this.fsTooltip.setAttribute('aria-hidden', 'true');
    }
};

Video.prototype.seekVideo = function (e) {
    if (e.type === "mousedown") {
        this.videoObj[0].pause();
        this.eventHandlerReferences.mouseMove = this.seekMouseMove.bind(this);
        this.eventHandlerReferences.mouseUp = this.removeMouseMove.bind(this);
        if (window.addEventListener) {
            document.addEventListener('mousemove', this.eventHandlerReferences.mouseMove, false);
            document.addEventListener('mouseup', this.eventHandlerReferences.mouseUp, false);
        } else if (window.attachEvent) {
            document.attachEvent('onmousemove', this.eventHandlerReferences.mouseMove);
            document.attachEvent('onmouseup', this.eventHandlerReferences.mouseUp);
        }
    }
};

Video.prototype.seekMouseMove = function () {
    var time = this.timeFormat(this.seekBar.value * this.videoObj[0].duration / 100);
    this.tooltip.innerHTML = time;
};

Video.prototype.removeMouseMove = function () {
    this.updateSeekBar();
    if (window.addEventListener) {
        document.removeEventListener('mousemove', this.eventHandlerReferences.mouseMove, false);
        document.removeEventListener('mouseup', this.eventHandlerReferences.mouseUp, false);
    } else if (window.attachEvent) {
        document.detachEvent('onmousemove', this.eventHandlerReferences.mouseMove);
        document.detachEvent('onmouseup', this.eventHandlerReferences.mouseUp);
    }
};

Video.prototype.returnCurrentTime = function (value) {
    this.videoObj[0].pause();
    this.tooltip.innerHTML = this.timeFormat(value * this.videoObj[0].duration / 100);
    var time = value * this.videoObj[0].duration / 100;
    this.videoObj[0].currentTime = time;
};

Video.prototype.updateSeekBar = function () {
    var time = this.seekBar.value * this.videoObj[0].duration / 100;
    this.track[0].innerHTML = this.timeFormat(time.toFixed(0));
    var offsetValue = Math.floor(this.videoObj[0].currentTime * this.maxThumbOffset / this.videoObj[0].duration);
    this.thumb.style.left = offsetValue + 'px';
    this.track[1].style.width = offsetValue + 'px';
};

Video.prototype.videoMethods = function (e) {
    //Update timecode
    this.timeCurr.childNodes[0].nodeValue = this.timeFormat(this.videoObj[0].currentTime.toFixed(0));
    this.timeDur.innerHTML = " / " + this.timeFormat(this.videoObj[0].duration.toFixed(0));

    //Move seekbar with video
    var offsetValue = Math.floor(this.videoObj[0].currentTime * this.maxThumbOffset / this.videoObj[0].duration);
    this.thumb.style.left = offsetValue + 'px';
    this.track[1].style.width = offsetValue + 'px';
    this.track[0].innerHTML = this.timeFormat(this.videoObj[0].currentTime.toFixed(0));
    this.seekBar.setAttribute('value', this.videoObj[0].currentTime.toFixed(0));

    if (e.type === 'click') {
        this.playPause(e);
        if (this.volumeSliderContainer.getAttribute('aria-hidden') === 'false') {
            this.volumeSliderContainer.setAttribute('aria-hidden', 'true');
        }
    } else if (e.type === 'mouseup') {
        this.updateVolume();
    }
};

Video.prototype.updateVolume = function () {
    if (!this.volumeOn) {
        this.videoObj[0].volume = 0;
        return;
    }
    this.videoObj[0].volume = this.volumeBar.value / 100;
    this.volumeLevel = this.videoObj[0].volume;
    this.muteUnmuteGlyph();
};

Video.prototype.muteUnmute = function () {
    if (this.videoObj[0].volume > 0) {
        this.volumeOn = false;
        this.volumeLevel = this.videoObj[0].volume;
        this.videoObj[0].volume = 0;
    } else {
        this.volumeOn = true;
        this.videoObj[0].volume = this.volumeLevel;
    }
    this.muteUnmuteGlyph();
};

Video.prototype.volumeToggle = function (e) {
    if (e.type === "mouseover") {
        this.volumeContainerClosed = false;
    } else if (e.type === "mouseout") {
        if (this.volumeContainerClosed) {
            return;
        }
        this.volumeContainerClosed = true;
    }
    if (this.volumeOn) {
        this.volumeSliderContainer.setAttribute('aria-hidden', this.volumeContainerClosed);
    }
    this.onlyOneDialog(this.volumeSliderContainer);
};

Video.prototype.hoverVolume = function () {
    this.volumeContainerClosed = false;
    if (this.volumeOn) {
        this.volumeSliderContainer.setAttribute('aria-hidden', 'false');
    }
};

Video.prototype.muteUnmuteGlyph = function () {
    if (this.videoObj[0].volume === 0) {
        (0, _helpers.removeClass)(this.volumeButton, 'glyph-volume');
        (0, _helpers.addClass)(this.volumeButton, 'glyph-mute');
        this.volumeSliderContainer.setAttribute('aria-hidden', 'true');
    } else {
        (0, _helpers.removeClass)(this.volumeButton, 'glyph-mute');
        (0, _helpers.addClass)(this.volumeButton, 'glyph-volume');
        this.volumeSliderContainer.setAttribute('aria-hidden', 'false');
    }
};

Video.prototype.closeOpenDialogs = function (e) {
    if (this.volumeSliderContainer.getAttribute('aria-hidden') === 'false' && e.type === "click") {
        this.volumeSliderContainer.setAttribute('aria-hidden', 'true');
    }
    if (this.optionsContainer.getAttribute('aria-hidden') === 'false' && e.type === "click") {
        this.optionsContainer.setAttribute('aria-hidden', 'true');
        this.optionsContainer.style.height = this.odDimensions.height + "px";
        this.odParent.style.left = "0";
        this.odResetSubActive();
    }
};

Video.prototype.toggleDialogs = function (el) {
    if (el.getAttribute('aria-hidden') === 'false') {
        el.setAttribute('aria-hidden', 'true');
        this.optionsContainer.style.height = this.odDimensions.height + "px";
        this.odParent.style.left = "0";
        this.odResetSubActive();
    } else {
        el.setAttribute('aria-hidden', 'false');
    }
    this.onlyOneDialog(el);
};

Video.prototype.onlyOneDialog = function (el) {
    if (this.optionsContainer.getAttribute('aria-hidden') === 'false' && this.volumeSliderContainer.getAttribute('aria-hidden') === 'false') {
        if (el === this.optionsContainer) {
            this.volumeSliderContainer.setAttribute('aria-hidden', 'true');
        } else {
            this.optionsContainer.setAttribute('aria-hidden', 'true');
            this.optionsContainer.style.height = this.odDimensions.height + "px";
            this.odParent.style.left = "0";
            this.odResetSubActive();
        }
    }
};

Video.prototype.timeFormat = function (time) {
    var retTime = "";
    time = Number(time);
    var hour = Math.floor(time / 3600);
    var min = Math.floor(time % 3600 / 60);
    var sec = Math.floor(time % 3600 % 60);

    if (hour > 0) {
        retTime = hour + ":";
    }
    if (min < 10 && min !== 0) {
        retTime = retTime + "0" + min + ":";
    } else if (min > 9) {
        retTime = retTime + min + ":";
    } else if (min === 0) {
        retTime = retTime + "00:";
    }
    if (sec < 10 && sec !== 0) {
        retTime = retTime + "0" + sec;
    } else if (sec > 9) {
        retTime = retTime + sec;
    } else if (sec === 0) {
        retTime = retTime + "00";
    }
    if (retTime === "") {
        retTime = "00:00";
    }

    return retTime;
};

exports['default'] = Video;

},{"../../../helpers.js":30,"../../slider/scripts/Slider.js":21}],28:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = [0, 540, 768, 1084, 1400, 1779];

},{}],29:[function(require,module,exports){
'use strict';

exports.__esModule = true;
window.handleImgError = function (el, size) {
    el.onerror = '';

    if (size === 'small') {
        size = 'small';
    } else {
        size = 'large';
    }

    if (el.previousSibling.srcset !== null) {
        var siblings = el.parentNode.childNodes;

        for (var i = 0; i < siblings.length; i++) {
            if (siblings[i] !== el && siblings[i].nodeName == 'SOURCE') {
                siblings[i].srcset = '';
            }
        }
    }
    el.srcset = '';
    el.src = '/images/content-images/generic-glyph-default-' + size + '.png';

    return true;
};

exports['default'] = handleImgError;

},{}],30:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.hasClass = hasClass;
exports.getWindowHeight = getWindowHeight;
exports.getWindowWidth = getWindowWidth;
exports.addEventListeners = addEventListeners;
exports.removeEventListeners = removeEventListeners;
exports.getClientRect = getClientRect;
exports.isObjectEmpty = isObjectEmpty;
exports.removeFocus = removeFocus;
function addClass(el, classNames) {
    var addedClasses = [];
    classNames = classNames.split(",");

    for (var i = 0; i < classNames.length; i++) {
        var trimmedClass = string.trim(classNames[i]);
        if (el.className.indexOf(trimmedClass) === -1) {
            el.className += " " + trimmedClass;
            addedClasses.push(trimmedClass);
        }
    }

    return addedClasses;
}

function removeClass(el, classNames) {
    var removedClasses = [];
    classNames = classNames.split(",");

    for (var i = 0; i < classNames.length; i++) {
        var trimmedClass = string.trim(classNames[i]);
        if (el.className.indexOf(trimmedClass) !== -1) {
            el.className = string.trim(el.className.replace(trimmedClass, ""));
            removedClasses.push(trimmedClass);
        }
    }
}

function hasClass(el, className) {
    if (!el.className) {
        return false;
    } else {
        var classes = ' ' + el.className + ' ',
            testClass = ' ' + className + ' ';
        return classes.indexOf(testClass) !== -1;
    }
}

var string = exports.string = {
    // Remove preceding and trailing whitespaces. This is necessary as
    // IE8 does not support String.trim.
    trim: function trim(string) {
        return string.replace(/^\s+|\s+$/g, '');
    }
};

function getWindowHeight() {
    return window.innerHeight || document.documentElement.clientHeight;
}

function getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
}

function addEventListeners(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + type, function () {
            return fn.handleEvent.call(fn);
        });
    }
}

function removeEventListeners(obj, type, fn) {
    if (obj.detachEvent) {
        obj.detachEvent('on' + type, obj[type + fn]);
        obj[type + fn] = null;
    } else {
        obj.removeEventListener(type, fn, false);
    }
}

function getClientRect(element) {
    var box = element.getBoundingClientRect(),
        clone = {};

    for (var property in box) {
        // ClientRect's hasOwnProperty fails so we can't use it to check
        // our copy. This just coppies directly
        clone[property] = box[property];
    }

    if (typeof clone.width === 'undefined') {
        clone.width = element.offsetWidth;
    }

    if (typeof clone.height === 'undefined') {
        clone.height = element.offsetHeight;
    }

    return clone;
}

function isObjectEmpty(obj) {
    //IE8 cannot use Object.getOwnPropertyNames(obj).length
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }

    return true;
}

// Required by design to remove focus state outline on whitelisted components on click and touch events, while still allowing keyboard focus outline
function removeFocus() {
    // Whitelist of elements that should not recieve focus
    var actionComponentList = ['.c-action-trigger', '.c-button', '.c-button > span', '.c-call-to-action', '.c-content-toggle button[aria-controls]', '.c-checkbox [type=checkbox]', '.c-drawer > button', '.c-drawer > header > button', '.c-dialog .c-glyph.glyph-cancel', '.c-flipper', '.c-hyperlink', '.c-hyperlink > span', '.c-in-page-navigation a', '.c-menu-item', '.c-pagination a', '.c-pivot a', '.c-product-placement > a', '.m-product-placement-item > a', '.c-radio [type=radio]', '.c-rating button', '.c-refine-item', 'button.c-refine-item', '.c-select-button', '.c-select-menu > a', '.c-select-menu > button', '.c-sequence-indicator button[role=radio]', '.c-social', '.m-social', '.c-slider button', '.c-supplemental-nav a', '.c-table', '.c-toggle button', '.c-video'];
    var actionComponents = document.querySelectorAll(actionComponentList);
    var outline = null;

    for (var i = 0; i < actionComponents.length; i++) {
        if (window.addEventListener) {
            actionComponents[i].addEventListener("mousedown", bindFocusEvent, false);
            actionComponents[i].addEventListener("mouseup", bindBlurEvent, false);
            actionComponents[i].addEventListener("click", bindFocusClick, false);
        } else if (window.attachEvent) {
            actionComponents[i].attachEvent("onmousedown", bindFocusEvent, false);
            actionComponents[i].attachEvent("onmouseup", bindBlurEvent, false);
            actionComponents[i].attachEvent("onclick", bindFocusClick, false);
        }
    }

    function bindFocusEvent(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        var parent = target.parentNode;
        outline = target.style.outline;
        if (!(target.type === 'text' || target.type === 'textarea' || target.type === 'password')) {
            target.style.outline = 'transparent';
            parent.style.outline = 'transparent';
        }
    }

    function bindBlurEvent(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        var parent = target.parentNode;
        if (!(target.type === 'text' || target.type === 'textarea' || target.type === 'password')) {
            target.blur();
            target.style.outline = outline;
            parent.style.outline = 'transparent';
        }
    }

    function bindFocusClick(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        if (target.type === 'checkbox' || target.type === 'radio') {
            target.blur();
        }
    }
}

},{}],31:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var Alert = function Alert(el) {
    this.element = el;

    return this.init();
};

Alert.prototype.init = function () {
    this.closeButton = this.element.querySelector('button.c-action-trigger.glyph-cancel');
    if (window.addEventListener) {
        this.closeButton.addEventListener('click', this, true);
    } else if (window.attachEvent) {
        var that = this;
        this.closeButton.attachEvent('onclick', function () {
            that.handleEvent.call(that);
        });
    }
    return this;
};

Alert.prototype.handleEvent = function () {
    if (window.addEventListener) {
        this.closeButton.removeEventListener('click', this, false);
    } else if (window.attachEvent) {
        var that = this;
        this.closeButton.detachEvent('onclick', that);
    }

    if (this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
    }
    this.element = null;
};

exports['default'] = Alert;

},{}],32:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var BackToTop = function BackToTop(el) {
    this.element = el;

    return this.init();
};

BackToTop.prototype.init = function () {
    var that = this;

    if (window.addEventListener) {
        window.addEventListener('scroll', function () {
            that.handleEvent();
        }, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', function () {
            that.handleEvent.call(that.handleEvent);
        });
    }
};

BackToTop.prototype.handleEvent = function (e) {
    var scrollBarPosition = window.pageYOffset || document.body.scrollTop;
    var h = (0, _helpers.getWindowHeight)();

    if (scrollBarPosition >= 2 * h) {
        this.show();
    } else {
        this.hide();
    }
};

BackToTop.prototype.show = function () {
    this.element.setAttribute("aria-disabled", false);
};

BackToTop.prototype.hide = function () {
    this.element.setAttribute("aria-disabled", true);
};

exports['default'] = BackToTop;

},{"../../../helpers.js":30}],33:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var CompareChart = function CompareChart(el) {
    this.element = el;
    var that = this;
    if (window.addEventListener) {
        window.addEventListener('load', function () {
            //Equalize only after all content has loaded otherwise
            // the rows are off if items haven't fully loaded
            return that.init();
        });
    } else if (window.attachEvent) {
        window.attachEvent('onload', function () {
            return that.init();
        });
    }
};

CompareChart.prototype.init = function () {
    this.columns = this.element.querySelectorAll('.f-column');

    this.getHeights();
    this.attachEvents();
};

CompareChart.prototype.attachEvents = function () {
    (0, _helpers.addEventListeners)(window, 'resize', this);
};

CompareChart.prototype.handleEvent = function () {
    this.getHeights();
};

CompareChart.prototype.getHeights = function () {
    this.contentHeights = [];
    for (var i = 0; i < this.columns.length; i++) {
        var rowEls = this.columns[i].querySelectorAll('.f-row');
        var heights = [];

        for (var j = 0; j < rowEls.length; j++) {
            rowEls[j].style.height = 'auto';
            heights.push({
                element: rowEls[j],
                height: (0, _helpers.getClientRect)(rowEls[j]).height
            });
        }

        this.contentHeights.push(heights);
    }
    this.equalizeHeights();
};

CompareChart.prototype.equalizeHeights = function () {
    for (var l = 0; l < this.columns.length; l++) {
        var tempHeight = null;
        var tempEl = [];
        for (var m = 0; m < this.columns.length; m++) {
            tempEl.push(this.contentHeights[m][l].element);
            if (this.contentHeights[m][l].height > tempHeight || tempHeight === null) {
                tempHeight = this.contentHeights[m][l].height;
            }
        }
        this.equalizeColumns(tempHeight, tempEl);
    }
};

CompareChart.prototype.equalizeColumns = function (height, el) {
    for (var n = 0; n < el.length; n++) {
        el[n].style.height = height + 'px';
    }
};

exports['default'] = CompareChart;

},{"../../../helpers.js":30}],34:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var PageBar = function PageBar(el) {
    this.element = el;
    this.duplicate = this.element.cloneNode(true);
    this.elementTarget = document.querySelectorAll('[data-js-page-bar-target="' + this.duplicate.id + '"]');

    return this.init();
};

PageBar.prototype.init = function () {
    var that = this;
    this.element.removeAttribute('id');
    (0, _helpers.addClass)(this.duplicate, 'f-sticky');
    if ((0, _helpers.hasClass)(this.duplicate, 'f-hidden')) {
        (0, _helpers.removeClass)(this.duplicate, 'f-hidden');
    }
    var tid = setInterval(function () {
        if (document.readyState !== 'complete') return;
        clearInterval(tid);
        document.body.appendChild(that.duplicate);
    }, 100);

    if (window.addEventListener) {
        window.addEventListener('scroll', this, true);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', function () {
            that.handleEvent.call(that);
        });
    }
    return this;
};

PageBar.prototype.handleEvent = function () {
    if (this.elementTarget[0] !== undefined) {
        this.targetOffsetTop = this.elementTarget[0].getBoundingClientRect().bottom;
    } else {
        this.targetOffsetTop = document.body.getBoundingClientRect().top + 800;
    }
    if (this.targetOffsetTop <= 0) {
        this.show();
    } else {
        this.hide();
    }
};

PageBar.prototype.show = function () {
    if (!(0, _helpers.hasClass)(this.duplicate, 'f-show')) {
        (0, _helpers.addClass)(this.duplicate, 'f-show');
    }
};

PageBar.prototype.hide = function () {
    if ((0, _helpers.hasClass)(this.duplicate, 'f-show')) {
        (0, _helpers.removeClass)(this.duplicate, 'f-show');
    }
};

exports['default'] = PageBar;

},{"../../../helpers.js":30}],35:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var ProductPlacement = function ProductPlacement(el) {
    this.element = el;

    return this.init();
}; // This is a module ONLY js file for the Product Placement module
// The module is located in /core/templates/modules/product-placement
// Task # 7690437 is active to track any future js needs for modules and refactor

ProductPlacement.prototype.init = function () {
    this.seeAll = this.element.querySelector('[class^="c-heading"] .c-hyperlink[aria-label]');
    this.container = this.element.querySelector('.c-carousel');
    this.carousel = this.element.querySelector('.c-carousel ul');

    var that = this;
    if (window.addEventListener) {
        window.addEventListener('resize', function () {
            that.handleResize();
        }, true);
    } else if (window.attachEvent) {
        window.attachEvent('onresize', function () {
            that.handleResize();
        });
    }
    this.handleResize();
    return this;
};

ProductPlacement.prototype.handleResize = function () {
    var containerWidth = (0, _helpers.getClientRect)(this.container);
    var carouselWidth = (0, _helpers.getClientRect)(this.carousel);
    if (carouselWidth.width < containerWidth.width) {
        this.seeAll.setAttribute('aria-hidden', 'true');
    } else {
        this.seeAll.removeAttribute('aria-hidden');
    }
};

exports['default'] = ProductPlacement;

},{"../../../helpers.js":30}],36:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('../../../helpers.js');

var Social = function Social(el) {
    this.element = el;

    return this.init();
};

Social.prototype.init = function () {
    this.icons = this.element.querySelectorAll('a[itemprop="sameAs"]');
    this.toggle = this.element.querySelector('button[aria-expanded]');
    this.hidden = true;
    this.overflowLength = 4;
    this.maxIconShowCount = 3;

    if (this.toggle !== null) {
        if (window.addEventListener) {
            this.toggle.addEventListener('click', this, false);
        } else if (window.attachEvent) {
            var that = this;
            this.toggle.attachEvent('onclick', function () {
                that.handleEvent.call(that);
            });
        }

        if (this.icons.length > this.overflowLength) {
            this.toggle.setAttribute('aria-hidden', 'false');
            this.expand();
            this.hide();
        }

        return this;
    }
};

Social.prototype.handleEvent = function (e) {

    if (this.hidden) {
        this.show();
        this.collapse();
    } else if (!this.hidden) {
        this.hide();
        this.expand();
    }
};

Social.prototype.hide = function () {

    if (!this.hidden) {
        for (var i = 0; i < this.maxIconShowCount; i++) {
            (0, _helpers.removeClass)(this.icons[i], "f-hide");
        }
    }

    for (var j = this.maxIconShowCount; j < this.icons.length; j++) {
        (0, _helpers.addClass)(this.icons[j], "f-hide");
    }

    this.hidden = true;
};

Social.prototype.show = function () {
    this.hidden = false;

    for (var k = 0; k < this.maxIconShowCount; k++) {
        (0, _helpers.addClass)(this.icons[k], "f-hide");
    }

    for (var m = this.maxIconShowCount; m < this.icons.length; m++) {
        (0, _helpers.removeClass)(this.icons[m], "f-hide");
    }
};

Social.prototype.expand = function () {
    this.toggle.setAttribute('aria-expanded', 'false');
};
Social.prototype.collapse = function () {
    this.toggle.setAttribute('aria-expanded', 'true');
};

exports['default'] = Social;

},{"../../../helpers.js":30}],37:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _helpers = require('./helpers.js');

var ViewportCollision = {
    collidesWith: function collidesWith(el) {
        var elRect = (0, _helpers.getClientRect)(el);
        var collisionDetected = {};
        //Detecting width to account for lingering listeners and hidden elements - without it collision would be detected at 0,0 (top,left) for hidden elements or non removed listeners.
        if (elRect.width !== 0) {
            if (elRect.top <= 0) {
                collisionDetected.top = true;
            }
            if (elRect.bottom >= (window.innerHeight || document.documentElement.clientHeight)) {
                collisionDetected.bottom = true;
            }
            if (elRect.left <= 0) {
                collisionDetected.left = true;
            }
            if (elRect.right >= (window.innerWidth || document.documentElement.clientWidth)) {
                collisionDetected.right = true;
            }
        }

        if ((0, _helpers.isObjectEmpty)(collisionDetected) === false) {
            return collisionDetected;
        }

        return false;
    }
};

exports['default'] = ViewportCollision;

},{"./helpers.js":30}],38:[function(require,module,exports){
'use strict';

// Source: https://gist.github.com/ShirtlessKirk/ba797df9ccd8156b5948
//
// @preserve Function.bind polyfill for IE8
//
// global define: false, module: false
(function functionModule(definition) {
    // non-exporting module magic dance
    'use strict';

    var amd = 'amd',
        exports = 'exports'; // keeps the method names for CommonJS / AMD from being compiled to single character variable

    if (typeof define === 'function' && define[amd]) {
        define(function definer() {
            return definition();
        });
    } else if (typeof module === 'function' && module[exports]) {
        module[exports] = definition();
    } else {
        definition();
    }
})(function functionPolyfill() {
    'use strict';

    var slice = Array.prototype.slice;

    if (Function.prototype.bind) {
        return;
    }

    function bind(context) {
        var args = slice.call(arguments, 1),
            self = this;

        function Noop() {
            // this has to be internal to ensure that the prototype stays specific to the context
            return this;
        }

        if (typeof this !== 'function') {
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        function bound() {
            return self.apply(this instanceof Noop ? this : context, args.concat(slice.call(arguments)));
        }

        Noop.prototype = this.prototype;
        bound.prototype = new Noop();

        return bound;
    }

    Function.prototype.bind = bind;
});

},{}],39:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function (a, b, c, d) {
  "use strict";
  function e(a, b, c) {
    return setTimeout(j(a, c), b);
  }function f(a, b, c) {
    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
  }function g(a, b, c) {
    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
      b.call(c, a[e], e, a), e++;
    } else for (e in a) {
      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
  }function h(b, c, d) {
    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";return function () {
      var c = new Error("get-stack-trace"),
          d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          f = a.console && (a.console.warn || a.console.log);return f && f.call(a.console, e, d), b.apply(this, arguments);
    };
  }function i(a, b, c) {
    var d,
        e = b.prototype;d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
  }function j(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }function k(a, b) {
    return (typeof a === "undefined" ? "undefined" : _typeof(a)) == oa ? a.apply(b ? b[0] || d : d, b) : a;
  }function l(a, b) {
    return a === d ? b : a;
  }function m(a, b, c) {
    g(q(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }function n(a, b, c) {
    g(q(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }function o(a, b) {
    for (; a;) {
      if (a == b) return !0;a = a.parentNode;
    }return !1;
  }function p(a, b) {
    return a.indexOf(b) > -1;
  }function q(a) {
    return a.trim().split(/\s+/g);
  }function r(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
    }return -1;
  }function s(a) {
    return Array.prototype.slice.call(a, 0);
  }function t(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }function u(a, b) {
    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
      if (c = ma[g], e = c ? c + f : b, e in a) return e;g++;
    }return d;
  }function v() {
    return ua++;
  }function w(b) {
    var c = b.ownerDocument || b;return c.defaultView || c.parentWindow || a;
  }function x(a, b) {
    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      k(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }function y(a) {
    var b,
        c = a.options.inputClass;return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
  }function z(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & Ea && d - e === 0,
        g = b & (Ga | Ha) && d - e === 0;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }function A(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = E(d);b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);var j = F(b.deltaTime, b.deltaX, b.deltaY);b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);var k = a.element;o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
  }function B(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }function C(a, b) {
    var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;if (b.eventType != Ha && (i > Da || h.velocity === d)) {
      var j = b.deltaX - h.deltaX,
          k = b.deltaY - h.deltaY,
          l = F(i, j, k);e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
  }function D(a) {
    for (var b = [], c = 0; c < a.pointers.length;) {
      b[c] = { clientX: pa(a.pointers[c].clientX), clientY: pa(a.pointers[c].clientY) }, c++;
    }return { timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY };
  }function E(a) {
    var b = a.length;if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) {
      c += a[e].clientX, d += a[e].clientY, e++;
    }return { x: pa(c / b), y: pa(d / b) };
  }function F(a, b, c) {
    return { x: b / a || 0, y: c / a || 0 };
  }function G(a, b) {
    return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
  }function H(a, b, c) {
    c || (c = Qa);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
  }function I(a, b, c) {
    c || (c = Qa);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
  }function J(a, b) {
    return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
  }function K(a, b) {
    return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
  }function L() {
    this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
  }function M() {
    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }function N() {
    this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
  }function O(a, b) {
    var c = s(a.touches),
        d = s(a.changedTouches);return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
  }function P() {
    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
  }function Q(a, b) {
    var c = s(a.touches),
        d = this.targetIds;if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
        f,
        g = s(a.changedTouches),
        h = [],
        i = this.target;if (f = c.filter(function (a) {
      return o(a.target, i);
    }), b === Ea) for (e = 0; e < f.length;) {
      d[f[e].identifier] = !0, e++;
    }for (e = 0; e < g.length;) {
      d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
    }return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
  }function R() {
    x.apply(this, arguments);var a = j(this.handler, this);this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
  }function S(a, b) {
    a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
  }function T(a) {
    var b = a.changedPointers[0];if (b.identifier === this.primaryTouch) {
      var c = { x: b.clientX, y: b.clientY };this.lastTouches.push(c);var d = this.lastTouches,
          e = function e() {
        var a = d.indexOf(c);a > -1 && d.splice(a, 1);
      };setTimeout(e, cb);
    }
  }function U(a) {
    for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
      var e = this.lastTouches[d],
          f = Math.abs(b - e.x),
          g = Math.abs(c - e.y);if (db >= f && db >= g) return !0;
    }return !1;
  }function V(a, b) {
    this.manager = a, this.set(b);
  }function W(a) {
    if (p(a, jb)) return jb;var b = p(a, kb),
        c = p(a, lb);return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
  }function X() {
    if (!fb) return !1;var b = {},
        c = a.CSS && a.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
      b[d] = c ? a.CSS.supports("touch-action", d) : !0;
    }), b;
  }function Y(a) {
    this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
  }function Z(a) {
    return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
  }function $(a) {
    return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
  }function _(a, b) {
    var c = b.manager;return c ? c.get(a) : a;
  }function aa() {
    Y.apply(this, arguments);
  }function ba() {
    aa.apply(this, arguments), this.pX = null, this.pY = null;
  }function ca() {
    aa.apply(this, arguments);
  }function da() {
    Y.apply(this, arguments), this._timer = null, this._input = null;
  }function ea() {
    aa.apply(this, arguments);
  }function fa() {
    aa.apply(this, arguments);
  }function ga() {
    Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }function ha(a, b) {
    return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
  }function ia(a, b) {
    this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }function ja(a, b) {
    var c = a.element;if (c.style) {
      var d;g(a.options.cssProps, function (e, f) {
        d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
      }), b || (a.oldCssProps = {});
    }
  }function ka(a, c) {
    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }var la,
      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
      na = b.createElement("div"),
      oa = "function",
      pa = Math.round,
      qa = Math.abs,
      ra = Date.now;la = "function" != typeof Object.assign ? function (a) {
    if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");for (var b = Object(a), c = 1; c < arguments.length; c++) {
      var e = arguments[c];if (e !== d && null !== e) for (var f in e) {
        e.hasOwnProperty(f) && (b[f] = e[f]);
      }
    }return b;
  } : Object.assign;var sa = h(function (a, b, c) {
    for (var e = Object.keys(b), f = 0; f < e.length;) {
      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
    }return a;
  }, "extend", "Use `assign`."),
      ta = h(function (a, b) {
    return sa(a, b, !0);
  }, "merge", "Use `assign`."),
      ua = 1,
      va = /mobile|tablet|ip(ad|hone|od)|android/i,
      wa = "ontouchstart" in a,
      xa = u(a, "PointerEvent") !== d,
      ya = wa && va.test(navigator.userAgent),
      za = "touch",
      Aa = "pen",
      Ba = "mouse",
      Ca = "kinect",
      Da = 25,
      Ea = 1,
      Fa = 2,
      Ga = 4,
      Ha = 8,
      Ia = 1,
      Ja = 2,
      Ka = 4,
      La = 8,
      Ma = 16,
      Na = Ja | Ka,
      Oa = La | Ma,
      Pa = Na | Oa,
      Qa = ["x", "y"],
      Ra = ["clientX", "clientY"];x.prototype = { handler: function handler() {}, init: function init() {
      this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
    }, destroy: function destroy() {
      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
    } };var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
      Ta = "mousedown",
      Ua = "mousemove mouseup";i(L, x, { handler: function handler(a) {
      var b = Sa[a.type];b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: Ba, srcEvent: a }));
    } });var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha },
      Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
      Xa = "pointerdown",
      Ya = "pointermove pointerup pointercancel";a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function handler(a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Va[d],
          f = Wa[a.pointerType] || a.pointerType,
          g = f == za,
          h = r(b, a.pointerId, "pointerId");e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
    } });var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      $a = "touchstart",
      _a = "touchstart touchmove touchend touchcancel";i(N, x, { handler: function handler(a) {
      var b = Za[a.type];if (b === Ea && (this.started = !0), this.started) {
        var c = O.call(this, a, b);b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
      }
    } });var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      bb = "touchstart touchmove touchend touchcancel";i(P, x, { handler: function handler(a) {
      var b = ab[a.type],
          c = Q.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
    } });var cb = 2500,
      db = 25;i(R, x, { handler: function handler(a, b, c) {
      var d = c.pointerType == za,
          e = c.pointerType == Ba;if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
        if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;this.callback(a, b, c);
      }
    }, destroy: function destroy() {
      this.touch.destroy(), this.mouse.destroy();
    } });var eb = u(na.style, "touchAction"),
      fb = eb !== d,
      gb = "compute",
      hb = "auto",
      ib = "manipulation",
      jb = "none",
      kb = "pan-x",
      lb = "pan-y",
      mb = X();V.prototype = { set: function set(a) {
      a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
    }, update: function update() {
      this.set(this.manager.options.touchAction);
    }, compute: function compute() {
      var a = [];return g(this.manager.recognizers, function (b) {
        k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), W(a.join(" "));
    }, preventDefaults: function preventDefaults(a) {
      var b = a.srcEvent,
          c = a.offsetDirection;if (this.manager.session.prevented) return void b.preventDefault();var d = this.actions,
          e = p(d, jb) && !mb[jb],
          f = p(d, lb) && !mb[lb],
          g = p(d, kb) && !mb[kb];if (e) {
        var h = 1 === a.pointers.length,
            i = a.distance < 2,
            j = a.deltaTime < 250;if (h && i && j) return;
      }return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
    }, preventSrc: function preventSrc(a) {
      this.manager.session.prevented = !0, a.preventDefault();
    } };var nb = 1,
      ob = 2,
      pb = 4,
      qb = 8,
      rb = qb,
      sb = 16,
      tb = 32;Y.prototype = { defaults: {}, set: function set(a) {
      return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
    }, recognizeWith: function recognizeWith(a) {
      if (f(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    }, dropRecognizeWith: function dropRecognizeWith(a) {
      return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
    }, requireFailure: function requireFailure(a) {
      if (f(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
    }, dropRequireFailure: function dropRequireFailure(a) {
      if (f(a, "dropRequireFailure", this)) return this;a = _(a, this);var b = r(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
    }, hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    }, canRecognizeWith: function canRecognizeWith(a) {
      return !!this.simultaneous[a.id];
    }, emit: function emit(a) {
      function b(b) {
        c.manager.emit(b, a);
      }var c = this,
          d = this.state;qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
    }, tryEmit: function tryEmit(a) {
      return this.canEmit() ? this.emit(a) : void (this.state = tb);
    }, canEmit: function canEmit() {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (tb | nb))) return !1;a++;
      }return !0;
    }, recognize: function recognize(a) {
      var b = la({}, a);return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
    }, process: function process(a) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function attrTest(a) {
      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
    }, process: function process(a) {
      var b = this.state,
          c = a.eventType,
          d = b & (ob | pb),
          e = this.attrTest(a);return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
    } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function getTouchAction() {
      var a = this.options.direction,
          b = [];return a & Na && b.push(lb), a & Oa && b.push(kb), b;
    }, directionTest: function directionTest(a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    }, attrTest: function attrTest(a) {
      return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
    }, emit: function emit(a) {
      this.pX = a.deltaX, this.pY = a.deltaY;var b = $(a.direction);b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
    } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [jb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
    }, emit: function emit(a) {
      if (1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";a.additionalEvent = this.options.event + b;
      }this._super.emit.call(this, a);
    } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {
      return [hb];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
        this.state = rb, this.tryEmit();
      }, b.time, this);else if (a.eventType & Ga) return rb;return tb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit(a) {
      this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
    } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [jb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
    } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1 }, getTouchAction: function getTouchAction() {
      return ba.prototype.getTouchAction.call(this);
    }, attrTest: function attrTest(a) {
      var b,
          c = this.options.direction;return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
    }, emit: function emit(a) {
      var b = $(a.offsetDirection);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {
      return [ib];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();if (d && f && c) {
        if (a.eventType != Ga) return this.failTimeout();var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;var i = this.count % b.taps;if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
          this.state = rb, this.tryEmit();
        }, b.interval, this), ob) : rb;
      }return tb;
    }, failTimeout: function failTimeout() {
      return this._timer = e(function () {
        this.state = tb;
      }, this.options.interval, this), tb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit() {
      this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    } }), ha.VERSION = "2.0.7", ha.defaults = { domEvents: !1, touchAction: gb, enable: !0, inputTarget: null, inputClass: null, preset: [[ea, { enable: !1 }], [ca, { enable: !1 }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ub = 1,
      vb = 2;ia.prototype = { set: function set(a) {
      return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    }, stop: function stop(a) {
      this.session.stopped = a ? vb : ub;
    }, recognize: function recognize(a) {
      var b = this.session;if (!b.stopped) {
        this.touchAction.preventDefaults(a);var c,
            d = this.recognizers,
            e = b.curRecognizer;(!e || e && e.state & rb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) {
          c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
        }
      }
    }, get: function get(a) {
      if (a instanceof Y) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) {
        if (b[c].options.event == a) return b[c];
      }return null;
    }, add: function add(a) {
      if (f(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    }, remove: function remove(a) {
      if (f(a, "remove", this)) return this;if (a = this.get(a)) {
        var b = this.recognizers,
            c = r(b, a);-1 !== c && (b.splice(c, 1), this.touchAction.update());
      }return this;
    }, on: function on(a, b) {
      if (a !== d && b !== d) {
        var c = this.handlers;return g(q(a), function (a) {
          c[a] = c[a] || [], c[a].push(b);
        }), this;
      }
    }, off: function off(a, b) {
      if (a !== d) {
        var c = this.handlers;return g(q(a), function (a) {
          b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
        }), this;
      }
    }, emit: function emit(a, b) {
      this.options.domEvents && ka(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };for (var d = 0; d < c.length;) {
          c[d](b), d++;
        }
      }
    }, destroy: function destroy() {
      this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u });var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};wb.Hammer = ha, "function" == typeof define && define.amd ? define(function () {
    return ha;
  }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha;
}(window, document, "Hammer");


},{}],40:[function(require,module,exports){
'use strict';

// Source: https://gist.github.com/ShirtlessKirk/662c80f6d7335017fa46
//
// Polyfill of ES5 Array methods for IE < 9
//
// global define: false, module: false
// jslint bitwise: true, forin: true
(function arrayModule(definition) {
    // non-exporting module magic dance
    'use strict';

    var amd = 'amd',
        exports = 'exports'; // keeps the method names for CommonJS / AMD from being compiled to single character variable

    if (typeof define === 'function' && define[amd]) {
        define(function definer() {
            return definition();
        });
    } else if (typeof module === 'function' && module[exports]) {
        module[exports] = definition();
    } else {
        definition();
    }
})(function arrayPolyfill() {
    'use strict';

    var arrayPrototypeFunctions,
        arrayPrototypeFunctionsEnum = {
        EVERY: 'every',
        FILTER: 'filter',
        FOREACH: 'forEach',
        INDEXOF: 'indexOf',
        LASTINDEXOF: 'lastIndexOf',
        MAP: 'map',
        REDUCE: 'reduce',
        REDUCERIGHT: 'reduceRight',
        SOME: 'some'
    },
        hasOwnProperty = Object.prototype.hasOwnProperty,
        keys = Object.keys || function keys(object) {
        var array = [],
            key;

        for (key in object) {
            if (hasOwnProperty.call(object, key)) {
                array.push(key);
            }
        }

        return array;
    },
        noop = function noop() {
        return true;
    },
        toString = Object.prototype.toString,
        // paranoia: some dumb script might redefine the prototype....
    T = TypeError;

    /**
     * @private
     * @param {Function} fn The function to verify
     * @return {Object}
     */
    function check(fn) {
        if (this === null || this === undefined) {
            throw new T('Array is null or undefined');
        }

        if (typeof fn !== 'function') {
            throw new T(fn + ' is not a function');
        }

        return {}.valueOf.call(this); // box `this` to make sure it's an object (see: http://www.2ality.com/2011/04/javascript-converting-any-value-to.html)
    }

    /**
     * Array.prototype.reverse is a mutating function, so to keep the original unchanged a copy needs to be made
     * We don't use the simpler <array>.slice(0) method as that doesn't preserve sparse array contents
     * @private
     * @param {Array} array The array to reverse
     * @return {Array}
     */
    function reverse(array) {
        var object = {}.valueOf.call(array),
            // box the parameter to ensure it's an object in a way that jslint doesn't grumble about
        length = object.length >>> 0,
            cursor = length - 1,
            index = 0,
            result = new Array(length); // jslint complains about using `new Array`, but declaring the container bounds is quicker than pushing to an index

        while (cursor > -1) {
            if (cursor in object) {
                // only set value in result if original contains value at cursor
                result[index] = object[cursor];
            }

            cursor -= 1;
            index += 1;
        }

        return result;
    }

    /**
     * @private
     * @param {Function} fn The function to run for each iteration
     * @param {?Object|undefined} context The context to run the iteration function in
     * @param {string} type The related type for checking yielded values
     */
    function iterator(fn, context, type) {
        var counter, length, object, result, value;

        fn = fn || noop;
        object = check.call(this, fn);
        length = object.length >>> 0;
        counter = 0;

        if (type === arrayPrototypeFunctionsEnum.FILTER) {
            // set up return array
            result = [];
        }

        if (type === arrayPrototypeFunctionsEnum.INDEXOF) {
            // check fromIndex value and adjust cursor
            result = -1; // default to 'not found' value
            if (context.fromIndex > length) {
                return result;
            }

            counter = Math.max(context.fromIndex >= 0 ? context.fromIndex : length - Math.abs(context.fromIndex), 0);
        }

        if (type === arrayPrototypeFunctionsEnum.LASTINDEXOF) {
            // check fromIndex value and adjust length
            if (context.fromIndex !== 0) {
                if (context.fromIndex > 0) {
                    // setting endpoint of range from beginning
                    if (context.fromIndex < length) {
                        length = context.fromIndex;
                    }
                } else {
                    // setting endpoint of range from end
                    length -= Math.abs(context.fromIndex);
                    if (length < 1) {
                        return -1;
                    }
                }
            }

            if (context.fromIndex > 0) {
                return iterator.call(this.slice(0, length), null, { fromIndex: 0, search: context.search }, arrayPrototypeFunctionsEnum.LASTINDEXOF);
            }

            result = iterator.call(reverse(this.slice(0, length)), null, context, arrayPrototypeFunctionsEnum.INDEXOF);
            if (result !== -1) {
                result = length - 1 - result;
            }

            return result;
        }

        if (type === arrayPrototypeFunctionsEnum.MAP) {
            // set up return array
            result = new Array(length);
        }

        if (type === arrayPrototypeFunctionsEnum.REDUCE || type === arrayPrototypeFunctionsEnum.REDUCERIGHT) {
            // check for initialValue and set return value
            if (length === 0 && !hasOwnProperty.call(context, 'initialValue')) {
                throw new T('Reduce of empty array with no initial value');
            }

            if (type === arrayPrototypeFunctionsEnum.REDUCERIGHT) {
                return iterator.call(reverse(this.slice(0, length)), fn, { initialValue: context.initialValue }, arrayPrototypeFunctionsEnum.REDUCE);
            }

            result = context.initialValue;
        }

        while (counter < length) {
            if (counter in object) {
                // don't bother with sparse entries
                value = object[counter];

                if (type === arrayPrototypeFunctionsEnum.EVERY && !fn.call(context, value, counter, object)) {
                    // falsey value check
                    return false;
                }

                if (type === arrayPrototypeFunctionsEnum.FILTER && fn.call(context, value, counter, object)) {
                    // truthy value check
                    result.push(value);
                }

                if (type === arrayPrototypeFunctionsEnum.FOREACH) {
                    // unlike jQuery.each this puppy doesn't care about the return value of fn
                    fn.call(context, value, counter, object);
                }

                if (type === arrayPrototypeFunctionsEnum.INDEXOF && context.search === value) {
                    // absolute equivalence check
                    return counter;
                }

                if (type === arrayPrototypeFunctionsEnum.MAP) {
                    // map to exact same index
                    result[counter] = fn.call(context, value, counter, object);
                }

                if (type === arrayPrototypeFunctionsEnum.REDUCE) {
                    result = result === undefined && value !== undefined ? value // if no initialValue then result is first (valid) value
                    : fn(result, value, counter, object);
                }

                if (type === arrayPrototypeFunctionsEnum.SOME && fn.call(context, value, counter, object)) {
                    // truthy value check
                    return true;
                }
            }

            counter += 1;
        }

        return result !== undefined ? // `filter`, `indexOf`, `lastIndexOf`, `map`, `reduce` and `reduceRight` set result
        result : type !== arrayPrototypeFunctionsEnum.SOME; // if using `every` or `forEach` then true, if using `some` then false
    }

    /**
     * @param {Function} fn The function to run for each iteration
     * @param {Object} [context] The context to run the function in (optional)
     */
    function every(fn, context) {
        return iterator.call(this, fn, context, arrayPrototypeFunctionsEnum.EVERY);
    }

    /**
     * @param {Function} fn The function to run for each iteration
     * @param {Object} [context] The context to run the function in (optional)
     */
    function filter(fn, context) {
        return iterator.call(this, fn, context, arrayPrototypeFunctionsEnum.FILTER);
    }

    /**
     * @param {Function} fn The function to run for each iteration
     * @param {Object} [context] The context to run the function in (optional)
     */
    function forEach(fn, context) {
        iterator.call(this, fn, context, arrayPrototypeFunctionsEnum.FOREACH);
    }

    /**
     * @param {?(boolean|number|string)} search The primitive value to search for
     * @param {number} [fromIndex=0] fromIndex The index to start searching from (optional, default 0)
     */
    function indexOf(search, fromIndex) {
        return iterator.call(this, null, { fromIndex: fromIndex | 0, search: search }, arrayPrototypeFunctionsEnum.INDEXOF);
    }

    /**
     * @param {?(boolean|number|string)} search The primitive value to search for
     * @param {number} [fromIndex=0] fromIndex The index to start searching from (optional, default 0)
     */
    function lastIndexOf(search, fromIndex) {
        return iterator.call(this, null, { fromIndex: fromIndex | 0, search: search }, arrayPrototypeFunctionsEnum.LASTINDEXOF);
    }

    /**
     * @param {Function} fn The function to run for each iteration
     * @param {Object} [context] The context to run the function in (optional)
     */
    function map(fn, context) {
        return iterator.call(this, fn, context, arrayPrototypeFunctionsEnum.MAP);
    }

    /**
     * @param {Function} fn The function to run for each iteration
     * @param {*} [initialValue] The initial value for the reduction (optional)
     */
    function reduce(fn, initialValue) {
        return iterator.call(this, fn, initialValue !== undefined ? { initialValue: initialValue } : {}, arrayPrototypeFunctionsEnum.REDUCE);
    }

    /**
     * @param {Function} fn The function to run for each iteration
     * @param {*} [initialValue] The initial value for the reduction (optional)
     */
    function reduceRight(fn, initialValue) {
        return iterator.call(this, fn, initialValue !== undefined ? { initialValue: initialValue } : {}, arrayPrototypeFunctionsEnum.REDUCERIGHT);
    }

    /**
     * @param {Function} fn The function to run for each iteration
     * @param {Object} [context] The context to run the function in (optional)
     */
    function some(fn, context) {
        return iterator.call(this, fn, context, arrayPrototypeFunctionsEnum.SOME);
    }

    /**
     * @param {*} object The object to check
     */
    function isArray(object) {
        return toString.call(object) === '[object Array]';
    }

    arrayPrototypeFunctions = {
        every: every,
        filter: filter,
        forEach: forEach,
        indexOf: indexOf,
        lastIndexOf: lastIndexOf,
        map: map,
        reduce: reduce,
        reduceRight: reduceRight,
        some: some
    };

    /**
     * Delegates a method from the arrayPrototypeFunctions object if it doesn't exist on `this`
     * @param {string} fnName The function name to verify
     */
    function dogfood(fnName) {
        if (!hasOwnProperty.call(this, fnName)) {
            this[fnName] = arrayPrototypeFunctions[fnName];
        }
    }

    forEach.call(keys(arrayPrototypeFunctions), dogfood, Array.prototype);

    // static methods
    if (Array.isArray === undefined) {
        Array.isArray = isArray;
    }
});

},{}],41:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function (a) {
  var b = navigator.userAgent;a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () {
    var b,
        c = document.createElement("source"),
        d = function d(a) {
      var b,
          d,
          e = a.parentNode;"PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function () {
        e.removeChild(b);
      })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function () {
        a.sizes = d;
      }));
    },
        e = function e() {
      var a,
          b = document.querySelectorAll("picture > img, img[srcset][sizes]");for (a = 0; a < b.length; a++) {
        d(b[a]);
      }
    },
        f = function f() {
      clearTimeout(b), b = setTimeout(e, 99);
    },
        g = a.matchMedia && matchMedia("(orientation: landscape)"),
        h = function h() {
      f(), g && g.addListener && g.addListener(f);
    };return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f;
  }());
}(window), function (a, b, c) {
  "use strict";
  function d(a) {
    return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a;
  }function e(b, c) {
    var d = new a.Image();return d.onerror = function () {
      A[b] = !1, ba();
    }, d.onload = function () {
      A[b] = 1 === d.width, ba();
    }, d.src = c, "pending";
  }function f() {
    M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em;
  }function g(a, b, c, d) {
    var e, f, g, h;return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c;
  }function h(a) {
    var b,
        c = s.getSet(a),
        d = !1;"pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d;
  }function i(a, b) {
    return a.res - b.res;
  }function j(a, b, c) {
    var d;return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d;
  }function k(a, b) {
    var c, d, e;if (a && b) for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++) {
      if (a === s.makeUrl(e[c].url)) {
        d = e[c];break;
      }
    }return d;
  }function l(a, b) {
    var c,
        d,
        e,
        f,
        g = a.getElementsByTagName("source");for (c = 0, d = g.length; d > c; c++) {
      e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({ srcset: f, media: e.getAttribute("media"), type: e.getAttribute("type"), sizes: e.getAttribute("sizes") });
    }
  }function m(a, b) {
    function c(b) {
      var c,
          d = b.exec(a.substring(m));return d ? (c = d[0], m += c.length, c) : void 0;
    }function e() {
      var a,
          c,
          d,
          e,
          f,
          i,
          j,
          k,
          l,
          m = !1,
          o = {};for (e = 0; e < h.length; e++) {
        f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
      }m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o));
    }function f() {
      for (c(T), i = "", j = "in descriptor";;) {
        if (k = a.charAt(m), "in descriptor" === j) {
          if (d(k)) i && (h.push(i), i = "", j = "after descriptor");else {
            if ("," === k) return m += 1, i && h.push(i), void e();if ("(" === k) i += k, j = "in parens";else {
              if ("" === k) return i && h.push(i), void e();i += k;
            }
          }
        } else if ("in parens" === j) {
          if (")" === k) i += k, j = "in descriptor";else {
            if ("" === k) return h.push(i), void e();i += k;
          }
        } else if ("after descriptor" === j) if (d(k)) ;else {
          if ("" === k) return void e();j = "in descriptor", m -= 1;
        }m += 1;
      }
    }for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
      if (c(U), m >= l) return n;g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f();
    }
  }function n(a) {
    function b(a) {
      function b() {
        f && (g.push(f), f = "");
      }function c() {
        g[0] && (h.push(g), g = []);
      }for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
        if (e = a.charAt(j), "" === e) return b(), c(), h;if (k) {
          if ("*" === e && "/" === a[j + 1]) {
            k = !1, j += 2, b();continue;
          }j += 1;
        } else {
          if (d(e)) {
            if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
              j += 1;continue;
            }if (0 === i) {
              b(), j += 1;continue;
            }e = " ";
          } else if ("(" === e) i += 1;else if (")" === e) i -= 1;else {
            if ("," === e) {
              b(), c(), j += 1;continue;
            }if ("/" === e && "*" === a.charAt(j + 1)) {
              k = !0, j += 2;continue;
            }
          }f += e, j += 1;
        }
      }
    }function c(a) {
      return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1;
    }var e,
        f,
        g,
        h,
        i,
        j,
        k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
        l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for (f = b(a), g = f.length, e = 0; g > e; e++) {
      if (h = f[e], i = h[h.length - 1], c(i)) {
        if (j = i, h.pop(), 0 === h.length) return j;if (h = h.join(" "), s.matchesMedia(h)) return j;
      }
    }return "100vw";
  }b.createElement("picture");var o,
      p,
      q,
      r,
      s = {},
      t = !1,
      u = function u() {},
      v = b.createElement("img"),
      w = v.getAttribute,
      x = v.setAttribute,
      y = v.removeAttribute,
      z = b.documentElement,
      A = {},
      B = { algorithm: "" },
      C = "data-pfsrc",
      D = C + "set",
      E = navigator.userAgent,
      F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35,
      G = "currentSrc",
      H = /\s+\+?\d+(e\d+)?w/,
      I = /(\([^)]+\))?\s*(.+)/,
      J = a.picturefillCFG,
      K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
      L = "font-size:100%!important;",
      M = !0,
      N = {},
      O = {},
      P = a.devicePixelRatio,
      Q = { px: 1, "in": 96 },
      R = b.createElement("a"),
      S = !1,
      T = /^[ \t\n\r\u000c]+/,
      U = /^[, \t\n\r\u000c]+/,
      V = /^[^ \t\n\r\u000c]+/,
      W = /[,]+$/,
      X = /^\d+$/,
      Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      Z = function Z(a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c);
  },
      $ = function $(a) {
    var b = {};return function (c) {
      return c in b || (b[c] = a(c)), b[c];
    };
  },
      _ = function () {
    var a = /^([\d\.]+)(em|vw|px)$/,
        b = function b() {
      for (var a = arguments, b = 0, c = a[0]; ++b in a;) {
        c = c.replace(a[b], a[++b]);
      }return c;
    },
        c = $(function (a) {
      return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
    });return function (b, d) {
      var e;if (!(b in N)) if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]];else try {
        N[b] = new Function("e", c(b))(Q);
      } catch (f) {}return N[b];
    };
  }(),
      aa = function aa(a, b) {
    return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a;
  },
      ba = function ba(a) {
    if (t) {
      var c,
          d,
          e,
          f = a || {};if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
        for (s.setupRun(f), S = !0, d = 0; e > d; d++) {
          s.fillImg(c[d], f);
        }s.teardownRun(f);
      }
    }
  };o = a.console && console.warn ? function (a) {
    console.warn(a);
  } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + new Date().getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && !function (a) {
    v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture;
  }(b.createElement("img")), s.supSrcset && !s.supSizes ? !function () {
    var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
        c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        d = b.createElement("img"),
        e = function e() {
      var a = d.width;2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba);
    };d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c;
  }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function (a) {
    return R.href = a, R.href;
  }), s.qsa = function (a, b) {
    return "querySelector" in a ? a.querySelectorAll(b) : [];
  }, s.matchesMedia = function () {
    return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function (a) {
      return !a || matchMedia(a).matches;
    } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments);
  }, s.mMQ = function (a) {
    return a ? _(a) : !0;
  }, s.calcLength = function (a) {
    var b = _(a, !0) || !1;return 0 > b && (b = !1), b;
  }, s.supportsType = function (a) {
    return a ? A[a] : !0;
  }, s.parseSize = $(function (a) {
    var b = (a || "").match(I);return { media: b && b[1], length: b && b[2] };
  }), s.parseSet = function (a) {
    return a.cands || (a.cands = m(a.srcset, a)), a.cands;
  }, s.getEmValue = function () {
    var a;if (!p && (a = b.body)) {
      var c = b.createElement("div"),
          d = z.style.cssText,
          e = a.style.cssText;c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e;
    }return p || 16;
  }, s.calcListLength = function (a) {
    if (!(a in O) || B.uT) {
      var b = s.calcLength(n(a));O[a] = b ? b : Q.width;
    }return O[a];
  }, s.setRes = function (a) {
    var b;if (a) {
      b = s.parseSet(a);for (var c = 0, d = b.length; d > c; c++) {
        aa(b[c], a.sizes);
      }
    }return b;
  }, s.setRes.res = aa, s.applySetCandidate = function (a, b) {
    if (a.length) {
      var c,
          d,
          e,
          f,
          h,
          k,
          l,
          m,
          n,
          o = b[s.ns],
          p = s.DPR;if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h) for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++) {
        if (c = a[d], c.res >= p) {
          e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;break;
        }
      }h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b));
    }
  }, s.setSrc = function (a, b) {
    var c;a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c));
  }, s.getSet = function (a) {
    var b,
        c,
        d,
        e = !1,
        f = a[s.ns].sets;for (b = 0; b < f.length && !e; b++) {
      if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
        "pending" === d && (c = d), e = c;break;
      }
    }return e;
  }, s.parseSets = function (a, b, d) {
    var e,
        f,
        g,
        h,
        i = b && "PICTURE" === b.nodeName.toUpperCase(),
        j = a[s.ns];(j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = { srcset: j.srcset, sizes: w.call(a, "sizes") }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({ url: j.src, d: 1, set: f }))) : j.src && j.sets.push({ srcset: j.src, sizes: null }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0;
  }, s.fillImg = function (a, b) {
    var c,
        d = b.reselect || b.reevaluate;a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a));
  }, s.setupRun = function () {
    (!S || M || P !== a.devicePixelRatio) && f();
  }, s.supPicture ? (ba = u, s.fillImg = u) : !function () {
    var c,
        d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
        e = function e() {
      var a = b.readyState || "";f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f));
    },
        f = setTimeout(e, b.body ? 9 : 99),
        g = function g(a, b) {
      var c,
          d,
          e = function e() {
        var f = new Date() - d;b > f ? c = setTimeout(e, b - f) : (c = null, a());
      };return function () {
        d = new Date(), c || (c = setTimeout(e, b));
      };
    },
        h = z.clientHeight,
        i = function i() {
      M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs();
    };Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e);
  }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = { pf: s, push: function push(a) {
      var b = a.shift();"function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({ reselect: !0 }));
    } };for (; J && J.length;) {
    a.picturefillCFG.push(J.shift());
  }a.picturefill = ba, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function () {
    return ba;
  }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
}(window, document);

},{}]},{},[1]);
