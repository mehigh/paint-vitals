!function(t){"use strict";function e(t){if(this.options=h({appendTarget:"",bodyLock:!0,closeButtonAriaLabel:"Close this dialog window",closeButtonClasses:"a11y-dialog__close-button",contentClasses:"a11y-dialog__content",effect:"none",effectSpeed:300,effectEasing:"ease-in-out",overlayClasses:"a11y-dialog__overlay",overlayClickCloses:!0,trigger:null,wrapperClasses:"a11y-dialog"},t),this._rendered=!1,this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.trigger=a(this.options.trigger)?o(this.options.trigger,!1,document,!0)[0]:this.options.trigger,this.node=null,!this.trigger)return void console.warn("Lookup for a11y target node failed.");this._listeners={},this.create()}function i(t){var e=[],i=t.length;for(i;i--;e.unshift(t[i]));return e}function o(t,e,o,n){o||(o=document);var s=n?t:'[data-js="'+t+'"]',r=o.querySelectorAll(s);return e&&(r=i(r)),r}function n(t,e){return i((e||document).querySelectorAll(t))}function s(t){var e=d(t);e.length&&e[0].focus()}function r(t,e){e.parentNode.insertBefore(t,e.nextElementSibling)}function d(t){return n(p.join(","),t).filter(function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)})}function a(t){return"[object String]"===Object.prototype.toString.call(t)}function h(t,e){return Object.keys(e).forEach(function(i){t[i]=e[i]}),t}function c(t,e){var i=d(t),o=i.indexOf(document.activeElement);e.shiftKey&&0===o?(i[i.length-1].focus(),e.preventDefault()):e.shiftKey||o!==i.length-1||(i[0].focus(),e.preventDefault())}function l(){g=b.scrollTop,document.body.classList.add("a11y-dialog__body-locked"),document.body.style.position="fixed",document.body.style.width="100%",document.body.style.marginTop="-"+g+"px"}function u(){document.body.style.marginTop="",document.body.style.position="",document.body.style.width="",b.scrollTop=g,document.body.classList.remove("a11y-dialog__body-locked")}var f,p=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],y=function(){var t=/(android)/i.test(navigator.userAgent),e=!!window.chrome,i="undefined"!=typeof InstallTrigger,o=document.documentMode,n=!o&&!!window.StyleMedia,s=!!navigator.userAgent.match(/(iPod|iPhone|iPad)/i),r=!!navigator.userAgent.match(/(iPod|iPhone)/i),d=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0;return{android:t,chrome:e,edge:n,firefox:i,ie:o,ios:s,iosMobile:r,opera:d,safari:Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||!e&&!d&&"undefined"!==window.webkitAudioContext,os:navigator.platform}}(),g=0,b=y.ie||y.firefox||y.chrome&&!y.edge?document.documentElement:document.body;e.prototype.create=function(){return this.shown=!1,this.trigger.addEventListener("click",this._show),this._fire("create"),this},e.prototype.render=function(t){var e=o(this.trigger.dataset.content)[0];if(!e)return this;var i=document.createElement("div");i.setAttribute("aria-hidden","true"),i.classList.add(this.options.wrapperClasses),i.innerHTML='<div data-js="a11y-overlay" tabindex="-1" class="'+this.options.overlayClasses+'"></div>\n  <div class="'+this.options.contentClasses+'" role="dialog">\n    <div role="document">\n      <button            data-js="a11y-close-button"           class="'+this.options.closeButtonClasses+'"            type="button"            aria-label="'+this.options.closeButtonAriaLabel+'"       ></button>\n      '+e.innerHTML+"    </div>\n  </div>";var n=this.trigger;return this.options.appendTarget.length&&(n=document.querySelectorAll(this.options.appendTarget)[0]||this.trigger),r(i,n),this.node=i,this.overlay=o("a11y-overlay",!1,this.node)[0],this.closeButton=o("a11y-close-button",!1,this.node)[0],this.options.overlayClickCloses&&this.overlay.addEventListener("click",this._hide),this.closeButton.addEventListener("click",this._hide),this._rendered=!0,this._fire("render",t),this},e.prototype.show=function(t){return this.shown?this:(this._rendered||this.render(t),this._rendered?(this.shown=!0,this._applyOpenEffect(),this.node.setAttribute("aria-hidden","false"),this.options.bodyLock&&l(),f=document.activeElement,s(this.node),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",t),this):this)},e.prototype.hide=function(t){return this.shown?(this.shown=!1,this.node.setAttribute("aria-hidden","true"),this._applyCloseEffect(),this.options.bodyLock&&u(),f&&f.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",t),this):this},e.prototype.destroy=function(){return this.hide(),this.trigger.removeEventListener("click",this._show),this.options.overlayClickCloses&&this.overlay.removeEventListener("click",this._hide),this.closeButton.removeEventListener("click",this._hide),this._fire("destroy"),this._listeners={},this},e.prototype.on=function(t,e){return void 0===this._listeners[t]&&(this._listeners[t]=[]),this._listeners[t].push(e),this},e.prototype.off=function(t,e){var i=this._listeners[t].indexOf(e);return i>-1&&this._listeners[t].splice(i,1),this},e.prototype._fire=function(t,e){(this._listeners[t]||[]).forEach(function(t){t(this.node,e)}.bind(this))},e.prototype._bindKeypress=function(t){this.shown&&27===t.which&&(t.preventDefault(),this.hide()),this.shown&&9===t.which&&c(this.node,t)},e.prototype._maintainFocus=function(t){this.shown&&!this.node.contains(t.target)&&s(this.node)},e.prototype._applyOpenEffect=function(){var t=this;"fade"===this.options.effect&&(this.node.style.opacity="0",this.node.style.transition="opacity "+this.options.effectSpeed+"ms "+this.options.effectEasing,setTimeout(function(){t.node.style.opacity="1"},50))},e.prototype._applyCloseEffect=function(){var t=this;"fade"===this.options.effect&&(this.node.setAttribute("aria-hidden","false"),this.node.style.opacity="0",setTimeout(function(){t.node.style.transition="",t.node.setAttribute("aria-hidden","true")},this.options.effectSpeed))},"undefined"!=typeof module&&void 0!==module.exports?module.exports=e:"function"==typeof define&&define.amd?define("A11yDialog",[],function(){return e}):"object"==typeof t&&(t.A11yDialog=e)}("undefined"!=typeof global?global:window);
/*!
 * enquire.js v2.1.6 - Awesome Media Queries in JavaScript
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT */

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.enquire=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b){this.query=a,this.isUnconditional=b,this.handlers=[],this.mql=window.matchMedia(a);var c=this;this.listener=function(a){c.mql=a.currentTarget||a,c.assess()},this.mql.addListener(this.listener)}var e=a(3),f=a(4).each;d.prototype={constuctor:d,addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var b=this.handlers;f(b,function(c,d){if(c.equals(a))return c.destroy(),!b.splice(d,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){f(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";f(this.handlers,function(b){b[a]()})}},b.exports=d},{3:3,4:4}],2:[function(a,b,c){function d(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}var e=a(1),f=a(4),g=f.each,h=f.isFunction,i=f.isArray;d.prototype={constructor:d,register:function(a,b,c){var d=this.queries,f=c&&this.browserIsIncapable;return d[a]||(d[a]=new e(a,f)),h(b)&&(b={match:b}),i(b)||(b=[b]),g(b,function(b){h(b)&&(b={match:b}),d[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},b.exports=d},{1:1,4:4}],3:[function(a,b,c){function d(a){this.options=a,!a.deferSetup&&this.setup()}d.prototype={constructor:d,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},b.exports=d},{}],4:[function(a,b,c){function d(a,b){var c=0,d=a.length;for(c;c<d&&b(a[c],c)!==!1;c++);}function e(a){return"[object Array]"===Object.prototype.toString.apply(a)}function f(a){return"function"==typeof a}b.exports={isFunction:f,isArray:e,each:d}},{}],5:[function(a,b,c){var d=a(2);b.exports=new d},{2:2}]},{},[5])(5)});

!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
( function() {
	
		'use strict';
	
		// Define global TenUp object if it doesn't exist
		if ( 'object' !== typeof window.TenUp ) {
			window.TenUp = {};
		}
	
	
		// Start defining methods here
		TenUp.socialLinks = function( options, callback ) {
	
			// Default variables
			var defaults = {
				'target'            : '.social-links',
				'window_height' : 450,
				'window_width'  : 625
			}
			var defaults_count = defaults.length;
			var el = document.querySelectorAll( options.target );
	
			// If there's no element to target, bail
			if ( 0 === el.length ) {
				return;
			}
	
			var el_count = el.length;
			var obj;
			var i;
			var j;
	
			// Loop through all options
			for ( i = 0; i < defaults_count; i = i + 1 ) {
	
				// Map all default settings to user defined options
				if ( typeof options[i] === "undefined" ) {
					options[i] = defaults[i];
				}
	
			}
	
	
			// Loop through all the potential menus on the page (there may be more than one)
			for ( j = 0; j < el_count; j = j + 1 ) {
	
				obj = el[j];
				obj.addEventListener( 'click', function( event ) {
					listenerClick( options, event );
				} );
	
			}
	
			// Accept a callback function
			if ( typeof callback === 'function' ) {
				callback.call( this );
			}
	
		}; // build_links
	
		function listenerClick( options, event ) {
			// Stop links from firing
			event.preventDefault();
	
			// Stop events from bubbling up the DOM
			event.stopPropagation();
	
			var currentTarget = event.currentTarget;
			var target = event.currentTarget;
			var location = target.getAttribute('href');
			var random_number = Math.random() * (9999 - 1) + 1;
			var social_window;
	
			// if you're clicking something that isn't a link, try the parent
			if( !location ) {
				location = target.parentNode.getAttribute('href');
			}
	
			// If still no location set, bail out
			if( !location ) { return; }
	
			// if the target OR its parent is a link, run it.
			if( target.nodeName === 'A' || target.parentNode.nodeName === 'A') {
	
				// Open the window
				social_window = window.open( location, 'share-window-' + random_number, 'width='+ options.window_width + ',height=' +  options.window_height +'menubar=no,location=no,resizable=no,scrollbars=no,status=no' );
	
				// Reset the opener
				social_window.opener = null;
			}
	
		};
	} )();
	

	
( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	window.MSB.contactForm = ( function() {
		var init = function() {
			if ( $('[data-js="mmj-contact-form__content"]').length == 0 ) {
				return;
			}

			// Check how many characters reamin
			mmjTextCount();

			// disable submit until checkbox checked
			mmjTerms();
		}

		var mmjTextCount = function() {
			var maxLength = 1000;

			$('.mmj-contact-form__textarea').keyup(function() {
				var length = $(this).val().length;
				length = maxLength-length;
				$('[data-js="mmj-count"]').text(length);
			});
		}

		var mmjTerms = function() {
			var formButton = $('[data-js="mmj-contact-button"]');
			$('[data-js="mmj-checkbox"]').on('change', function() {
				if ( $(this).is(':checked') ) {
					formButton.removeAttr('disabled');
				} else {
					formButton.attr('disabled', true);
				}
			});
		}

		return {
			init: init
		};
	} )();

	$( document ).ready( function() {
		window.MSB.contactForm.init();
	} );
} )( jQuery, this );

( function( window, $, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	/**
	 * Moves title of featured content depending on screen size.
	 */
	window.MSB.featuredContent = ( function() {
		var cache = {
			featuredSections: null
		};

		/**
		 * Register initial hook and init cache
		 */
		var init = function() {
			cache.featuredSections = document.querySelectorAll( '.moi-m-feature-combo' );

			if ( ! cache.featuredSections ) {
				return;
			}

			registerQuery();
		};

		/**
		 * Use enquire to detect screen size
		 */
		var registerQuery = function() {
			if ( 'object' !== typeof enquire ) {
				return;
			}

			enquire.register( "screen and ( min-width: 1084px )", {
				match: function() {
					_.each( cache.featuredSections, moveInside );
				},

				unmatch: function() {
					_.each( cache.featuredSections, moveOutside );
				}
			} );
		};

		/**
		 * Move element depending on selection
		 * 
		 * @param {*} direction Place where the element will be moved to.
		 * @param {*} element   Element to move.
		 */
		var moveTitle = function( direction, element ) {
			if ( ! element ) {
				return;
			}

			var title     = element.querySelector( '.featured-title' ),
				container = element.querySelector( '.posts' );

			if ( ! title || ! container ) {
				return;
			}

			switch( direction ) {
				case 'inside' :
					title.classList.add( '-desktop' );
					container.insertBefore( title, container.firstChild );
					break;
				case 'outside' :
					title.classList.remove( '-desktop' );
					element.insertBefore( title, element.firstChild );
					break;
			}

		};

		/**
		 * Move element inside container
		 * 
		 * @param {*} element Element to move.
		 */
		var moveInside = function( element ) {
			moveTitle( 'inside', element );
		};

		/**
		 * Move element outside container
		 * 
		 * @param {*} element Element to move.
		 */
		var moveOutside = function( element ) {
			moveTitle( 'outside', element );
		}

		/**
		 * Return functions for sharing
		 */
		return {
			init: init
		};
	} )();

	window.addEventListener( 'DOMContentLoaded', window.MSB.featuredContent.init );
} )( this, jQuery );

// On document ready
document.addEventListener('DOMContentLoaded', function () {
	// matching class name
	var className = 'animate-viewport';

	// matching elements
	var elementList = document.getElementsByClassName(className);

	// cached variables
	var elements, positions, scrollY, height;

	// on resize
	function onresize() {
		// update viewport scroll and inner-height metrics
		scrollY = window.pageYOffset;
		height  = window.innerHeight;

		// reset elements and positions
		elements  = {};
		positions = [];

		// update elements and positions
		Array.prototype.forEach.call(elementList, function (element) {
			var top  = element.getBoundingClientRect().top + scrollY;

			elements[top] = element.classList;

			positions.push(top);
		});

		// trigger update
		onupdate();
	}

	// on update
	function onupdate() {
		scrollY = window.pageYOffset;

		// for each classList top
		positions.forEach(function (top, index) {
			// if the top appears above the viewport bottom
			if (top <= scrollY + height) {
				elements[ top ].add('active');

				// remove the element from lists
				positions.splice(index, 1);

				delete elements[ top ];
			}
		});
	}

	$( '#interstitial-button' ).on( 'click', function ( e ) {
		var copyText = $("#interstitial-copy-link");
		copyText.select();
		document.execCommand("copy");
	});

	// bind events
	window.addEventListener('scroll', _.debounce( onupdate, 250 ) );
	window.addEventListener('resize', _.debounce( onupdate, 250 ) );

	// trigger resize
	onresize();
});

( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	window.MSB.fragmentwork = ( function() {
		/**
		 * Find hero in page.
		 */
		var init = function() {
			var workcarousel = document.querySelectorAll( '[data-js="mmj-work__content"]' );

			if ( 0 === workcarousel.length ) {
				return;
			}

			Array.prototype.forEach.call( workcarousel, workcarouselInit );
		};

		/**
		 * kickoff owl carousel on the work item
		 * @param {*} work 
		 * @param {*} index 
		 */
		var workcarouselInit = function( work, index ) {
			$(work).owlCarousel({
				center: false,
				loop: false,
				margin: 12,
				responsiveClass: true,
				dots: false,
				nav: true,
				items: 1,
				responsive:{
					600: {
						items:2,
						margin: 28
					},
					900: {
						items:3,
						margin: 28
					},
					1200: {
						items:4,
						margin: 28
					}
				}
			});
		};

		return {
			init: init
		};
	} )();

	document.addEventListener( 'DOMContentLoaded', window.MSB.fragmentwork.init );

} )( jQuery, window );
( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	window.MSB.hero = ( function() {
		/**
		 * Find hero in page.
		 */
		var init = function() {
			var heroes = document.querySelectorAll( '.m-feed-hero-item' );

			if ( 0 === heroes.length ) {
				return;
			}

			Array.prototype.forEach.call( heroes, findLastWord );
		};

		/**
		 * Find last word in heading and surround in <strong/> tags
		 * @param {*} hero 
		 * @param {*} index 
		 */
		var findLastWord = function( hero, index ) {
			var heading = hero.querySelector( '.c-heading' ),
				headingText,
				lastWord;

			if ( 0 === heading.length ) {
				return;
			}

			headingText = heading.innerText;
			headingText = headingText.split( ' ' );

			if ( 0 === headingText.length ) {
				return;
			}

			lastWord = headingText[ headingText.length - 1 ];

			lastWord = '<strong>' + lastWord + '</strong>';

			headingText[ headingText.length - 1 ] = lastWord;

			heading.innerHTML = headingText.join( ' ' );
		};

		return {
			init: init
		};
	} )();

	document.addEventListener( 'DOMContentLoaded', window.MSB.hero.init );

} )( jQuery, window );
( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	window.MSB.matchColHeight = ( function() {
		var init = function() {
			matchColHeights();
		};

		var matchColHeights = function() {
			var $cols = $( '.f-col-height-match' ),
				height;

			$( '.m-preview' ).css( 'display', 'block' );

			if ( 0 === $cols.length ) {
				return;
			}

			$cols.each( function() {
				var $self = $( this );

				if ( height < $self.outerHeight( true ) ) {
					var $previews = $self.find( '.m-preview' ),
						newHeight = 0;

					if ( 0 === $previews.length ) {
						return;
					}

					$previews.each( function() {
						var $preview = $( this );

						if ( newHeight < ( height - 64 ) ) {
							newHeight += $preview.outerHeight( true );
						} else {
							$preview.css( 'display', 'none' );
						}
					} );
				}
			} );
		};

		return {
			init: init
		};
	} )();

	$( document ).ready( function() {
		window.MSB.matchColHeight.init();

		$( window ).on( 'resize', window.MSB.matchColHeight.init );
	} );
} )( jQuery, this );

( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	window.MSB.placementToggle = ( function() {
		var init = function() {
			mPlacementToggle();
		};

		var mPlacementToggle = function() {
			var $mPlacement = $('.m-preview.f-horiztonal-placement'),
				$mPlacementTop = $('.m-preview.f-vertical-placement');

			if ( 0 === $mPlacement.length ) {
				return;
			}

			if ( 400 > $mPlacement.width() ) {
				$mPlacement.addClass( 'f-vertical-placement' );
				$mPlacement.removeClass( 'f-horiztonal-placement' );
			}

			if ( 0 === $mPlacementTop.length ) {
				return;
			}

			if ( 352 <= $mPlacementTop || ( Modernizr.mq( '(max-width: 768px)' ) && Modernizr.mq( '(min-width: 336px)' ) ) ) {
				$mPlacementTop.addClass( 'f-horiztonal-placement' );
				$mPlacementTop.removeClass( 'f-vertical-placement' );
			}
		}

		return {
			init: init
		};
	} )();

	$( document ).ready( function() {
		window.MSB.placementToggle.init();

		$( window ).on( 'resize', window.MSB.placementToggle.init );
	} );
} )( jQuery, this );

( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	window.MSB.pomloadmore = ( function() {
		var init = function() {
			if ( $('[data-js="pom__loadmore"]').length == 0 ) {
				return;
			}

			var pageNumber = 2;


			$('[data-js="pom__loadmore"]').on('click', function(){

				var $lastSection = $('.pom__loadmore-section').prev();

				var button = $(this),
					data = {
					'type': pom_ajax_data.type,
					'post_id': pom_ajax_data.post_id,
					'term_id': pom_ajax_data.term_id,
					'page': pageNumber,
				};

				$.ajax({
					url : 'wp-admin/admin-ajax.php?action=pom_load_more',
					data : data,
					type : 'POST',
					beforeSend : function ( xhr ) {
						button.text('Loading...');
					},
					success : function( data ){
						if( data ) {
							button.text( 'LOAD MORE' ); // insert new posts
							$(data.data.results).insertBefore('.pom__loadmore-section');

							if ( ( data.data.max_pages == pageNumber ) || data.data.max_pages == 0 ) {
								$('[data-js="pom__loadmore-section"]').remove();
							} else {
								pageNumber++;
							}

						} else {
							button.remove();
						}

						$lastSection.next().find('a:first')[0].focus();
					}
				});
			});
		}

		return {
			init: init
		};
	} )();

	$( document ).ready( function() {
		window.MSB.pomloadmore.init();
	} );
} )( jQuery, this );

document.addEventListener( 'DOMContentLoaded', function () {
	'use strict';

	var videos = document.querySelectorAll( '.post-roll-video' );
	var vimeoRegexp = /(?:https:)?\/\/(?:\w+.)?vimeo.com\/(?:\w+\/)*([\d]+)/;
	var isMobileDevice = ( ( typeof window.orientation !== "undefined" ) || ( navigator.userAgent.indexOf( 'IEMobile' ) !== -1 ) );
	var isTouchDevice = ( ( 'ontouchstart' in window ) || ( navigator.MaxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 ) );

	var iconTemplates = {
		play: '' +
			'<span class="icon--pressed icon pause" role="presentation"></span>' +
			'<span class="icon--not-pressed icon play" role="presentation"></span>',
		mute: '' +
			'<span class="icon--pressed icon mute" role="presentation"></span>' +
			'<span class="icon--not-pressed icon volume" role="presentation"></span>',
		restart: '' +
			'<span class="icon--pressed icon pause" role="presentation"></span>' +
			'<span class="icon--not-pressed icon restart" role="presentation"></span>'
	};

	var controlTemplates = {
		play: '' +
			'<button type="button" data-control="plyr" data-control-type="playback" class="plyr__control plyr-button--large" aria-label="Play, {title}" data-plyr="play">' +
			iconTemplates.play +
			'</button>',
		mute: '' +
			'<button type="button" data-control="plyr" data-control-type="audio" class="plyr__control plyr-button--large" aria-label="Mute" data-plyr="mute">' +
			iconTemplates.mute +
			'</button>',
		progress: '' +
			'<div class="plyr__progress">' +
			'<input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">' +
			'<progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>' +
			'</div>'
	};

	// Takes a Vimeo url and returns the video id or null if not found.
	function getVideoId( vimeoUrl ) {
		vimeoUrl = vimeoUrl ? vimeoUrl : '';
		var videoId = null;

		if ( vimeoUrl.indexOf( 'vimeo' ) !== -1 ) {
			var match = vimeoUrl.match( vimeoRegexp );
			videoId = match[ 1 ];
		}

		return videoId;
	}

	// Add click handling.
	for ( var i = 0; i < videos.length; i++ ) {

		var item = videos[ i ].querySelector( '.plyr__video-embed' );

		var videoId = getVideoId( item.dataset.src );

		var hideProgress = 'true';
		var endBehavior = 'reset';
		var loopActive = ( endBehavior === "loop" );
		var resetOnEnd = ( endBehavior === "reset" );
		var hideControls = isMobileDevice || isTouchDevice; // fade out controls on mobile devices

		var plyrControls = '' +
			'<div class="plyr__controls">' +
			controlTemplates.play +
			( hideProgress ? '' : controlTemplates.progress ) +
			'</div>';

		var playerSettings = {
			hideControls: hideControls,
			controls: plyrControls,
			resetOnEnd: resetOnEnd,
			autopause: true,
			autoplay: false,
			transparent: true,
			loop: {
				active: loopActive
			}
		};

		var player = new Plyr( item, playerSettings );

		player.on( 'ready', function ( event ) {
			var plyr = event.detail.plyr;
			var elements = plyr.elements;
			var plyrWrapper = elements.container;

			$( plyrWrapper ).click( function ( e ) {
				if ( e.target.classList.contains('plyr__controls') ) {
					plyr.togglePlay();
				}
			} );
		} );
	}
} );
( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	window.MSB.mncSearchCards = ( function() {
		var cardContent;

		var card;

		var init = function() {
			cardContent = $( '.context-mnc-search .m-preview-content' );
			card        = $( '.context-mnc-search .m-preview' );

			format();
		};

		var format = function() {
			if ( 0 === card ) {
				return;
			}

			window.MSB.utils.setCol( card, 'col-4', 'col-6' );

			setCardHeight();
		};

		var setCardHeight = function() {
			if ( 0 === cardContent.length ) {
				return;
			}

			cardContent.css( 'height', 'auto' );

			if ( Modernizr.mq( '(min-width: 767px)' ) || 9 > $.ieVersion ) {
				var cardHeight = 0;

				cardContent.each( function() {
					var $self = $( this );

					if ( cardHeight < $self.height() ) {
						cardHeight = $self.height();
					}
				} );

				cardContent.height( cardHeight );
			}
		};

		return {
			init: init,
			format: format
		};
	} )();

	$( document ).ready( function() {
		window.MSB.mncSearchCards.init();

		$( window ).on( 'resize', window.MSB.mncSearchCards.format );
	} );
} )( jQuery, this );

( function() {
	'use strict';

	// Define global object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	/**
	 * Shortens large text blocks and adds a trigger to expand.
	 * 
	 * @example
	 * <p class="toggle-more-less" data-char-limit="200">Lorem ipsum</p>
	 * 
	 * @author Mario Aguiar, 10up <mario.aguiar@10up.com>
	 */
	window.MSB.toggleMoreLess = ( function() {
		var config = {
			target: '.toggle-more-less',
			toggleClass: '',
			triggerClass: ''
		};

		/**
		 * Attach hooks
		 */
		var init = function() {
			var elements = document.querySelectorAll( config.target );

			if ( ! elements ) {
				return;
			}

			_.each( elements, trimElement );
		};

		/**
		 * Decide if element needs to be trimmed based on set character limit
		 * 
		 * @param {*} element Element to trim
		 */
		var trimElement = function( element ) {
			if ( ! element ) {
				return;
			}

			var charLimit = parseInt( element.getAttribute( 'data-char-limit' ) ) || 50,
				splittedText;

			if ( charLimit >= element.innerText.trim().length ) {
				return;
			}

			splittedText = splitText( element.innerText, charLimit );

			replaceText( element, splittedText );
		};

		/**
		 * Breaks the text in an array of two parts, one will be displayed,
		 * the rest will be hidden.
		 * 
		 * @param {*} text  Text string to check.
		 * @param {*} limit Maximum characters to show.
		 */
		var splitText = function( text, limit ) {
			var string = text.trim();

			return [
				string.substring( 0, limit + 1 ),
				string.substring( limit + 1 )
			];
		};

		/**
		 * Builds HTML around the both texts and add trigger to show/hide
		 * 
		 * @param {*} element   Element with text to trim.
		 * @param {*} textArray Array with text to show/hide.
		 */
		var replaceText = function( element, textArray ) {
			if ( ! element || 0 === textArray.length ) {
				return;
			}

			element.innerHTML = '';
			var container = document.createElement( 'span' ),
				hiddenContent = document.createElement( 'span' ),
				trigger = document.createElement( 'button' );

			container.classList.add( 'toggle-more-less__container', 'toggle-hidden' );
			container.innerHTML = textArray[0] + '<span class="separator">&hellip;</span>';

			hiddenContent.classList.add( 'toggle-more-less__contents' );
			hiddenContent.setAttribute( 'aria-hidden', true );
			hiddenContent.innerText = textArray[1];

			trigger.classList.add( 'toggle-more-less__trigger', 'c-button' );
			trigger.setAttribute( 'aria-expanded', false );
			trigger.setAttribute( 'aria-haspopup', true );
			trigger.setAttribute( 'aria-label', ms_i18n.triggerLabel );
			trigger.innerText = ms_i18n.showMore;

			container.appendChild( hiddenContent );

			element.appendChild( container );
			element.appendChild( trigger );

			trigger.addEventListener( 'click', toggleText );
		};

		/**
		 * Hide/show text depending on current state
		 * 
		 * @param {*} event Triggered event
		 */
		var toggleText = function( event ) {
			var element = event.target,
				container,
				content;

			if ( ! element ) {
				return;
			}

			container = element.previousElementSibling;
			content   = container.lastElementChild;

			if ( 'true' === element.getAttribute( 'aria-expanded' ) ) {
				container.classList.add( 'toggle-hidden' );
				content.setAttribute( 'aria-hidden', true );
				element.setAttribute( 'aria-expanded', false );
				element.innerText = ms_i18n.showMore;
			} else {
				container.classList.remove( 'toggle-hidden' );
				content.setAttribute( 'aria-hidden', false );
				element.setAttribute( 'aria-expanded', true );
				element.innerText = ms_i18n.showLess;
			}
		};

		/**
		 * Return functions for sharing purposes.
		 */
		return {
			init: init
		};
	} )();

	window.addEventListener( 'DOMContentLoaded', window.MSB.toggleMoreLess.init );
} )();

( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	window.MSB.togglePivots = ( function() {
		var init = function() {
			var $pivot = $( '.f-pivot-toggle' ),
				$panels;

			if ( 0 === $pivot.length ) {
				return;
			}

			$panels = $pivot.find( '.f-pivot-panel' );

			if ( Modernizr.mq( '(min-width: 768px)' ) ) {
				$pivot.removeClass( 'c-pivot' );
				$panels.removeAttr( 'aria-hidden' );
			} else if ( Modernizr.mq( '(max-width: 767px)' ) ) {
				if ( ! $pivot.hasClass( 'c-pivot' ) ) {
					$pivot.addClass( 'c-pivot' );
					$panels.att( 'aria-hidden', true );
					$pivot.find( '#pivot-target-1' ).attr( 'aria-hidden', false );
					$pivot.find( 'header a' ).removeClass( 'f-active' );
					$pivot.find( 'header a:first-of-type' ).addClass( 'f-active' );
				}
			}
		};

		return {
			init: init
		};
	} )();

	$( document ).ready( function() {
		window.MSB.togglePivots.init();

		$( window ).on( 'resize', window.MSB.togglePivots.init );
	} );
} )( jQuery, this );

( function ( $, window, Modernizr ) {
	'use strict';

	var $win = $( window ),
		$body = $( 'body' ),
		$columnArea = $( '.content-grid' ),

		/**
		 * Adjust the data-grid attribute based on the current browser viewport.
		 * @param {obj}    cols A jQuery collection of items to adjust.
		 * @param {string} colSm The col-* value for smaller breakpoints.
		 * @param {string} colLg The col-* value for larger breakpoints.
		 * @return {void}
		 */
		setCol = function ( cols, colSm, colLg, colXl ) {

			if ( colXl ) {
				if ( Modernizr.mq( '(min-width: 1079px)' ) ) {
					cols.attr( 'data-grid', colSm );
				} else if ( Modernizr.mq( '(min-width: 768px)' ) && Modernizr.mq( '(max-width: 1078px)' ) ) {
					cols.attr( 'data-grid', colLg );
				} else if ( Modernizr.mq( '(max-width: 768px)' ) ) {
					cols.attr( 'data-grid', colXl );
				}
			}
			else {
				if ( Modernizr.mq( '(min-width: 1079px)' ) ) {
					cols.attr( 'data-grid', colSm );
				} else if ( Modernizr.mq( '(max-width: 1078px)' ) ) {
					cols.attr( 'data-grid', colLg );
				}
			}

			if ( $( '.sidebar-home' ).length ) {
				if ( Modernizr.mq( '(max-width: 767px)' ) ) {
					cols.attr( 'data-grid', 'col-12' );
				}
			}

		},

		/**
		 * Equalize heights + adjust grid widths for search/archive elements.
		 * @returns {void}
		 */
		adjustSearchResults = function () {
			var items = $columnArea.find( '.m-content-placement-item' );

			// Determine the grid width for the cards.
			if ( $( '.sidebar-home' ).length ) {
				setCol( items, 'col-4', 'col-6' );
			}
			else {
				setCol( items, 'col-3', 'col-4', 'col-6' );
			}

		};

	// Detect version of IE for special circumstances where feature detection is useless.
	if ( 'undefined' !== typeof document.documentMode ) {
		$.ieVersion = document.documentMode;
	}

	// Event handlers.
	$win.on( 'resize', adjustSearchResults );

	// Functions to run on init.
	$( function init() {
		$.ieVersion = null;

		// Trigger init functions.
		$win.trigger( 'resize' );
	} );

	setTimeout( function ( ) {
		$win.trigger( 'resize' );
	}, 2500 );

}( jQuery, window, window.Modernizr ) );

( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	MSB.utils = ( function() {
		var setCol = function( cols, colSm, colLg ) {
			if ( Modernizr.mq( '(min-width: 1079px)' ) ) {
				cols.attr( 'data-grid', colSm );
			} else if ( Modernizr.mq( '(max-width: 1078px)' ) ) {
				cols.attr( 'data-grid', colLg );
			}
		};

		/**
		 * Detect version of IE for special circumstances where feature detection is useless
		 */
		var detectIE = function() {
			$.ieVersion = null;
			if ( "undefined" !== typeof document.documentMode ) {
				$.ieVersion = document.documentMode;
			}
		};

		return {
			setCol: setCol,
			detectIE: detectIE
		};
	} )();

	$( document ).ready( function() {
		window.MSB.utils.detectIE();
	} );
} )( jQuery, this );

( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	window.MSB.videomodal = ( function() {

		var instances = {
			dialogs: {},
		};

		var idGenerate = function() {
	 
			this.length = 8;
			this.timestamp = +new Date;
			
			var _getRandomInt = function( min, max ) {
			   return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
			}
			
			this.generate = function() {
				var ts = this.timestamp.toString();
				var parts = ts.split( "" ).reverse();
				var id = "";
				
				for( var i = 0; i < this.length; ++i ) {
				   var index = _getRandomInt( 0, parts.length - 1 );
				   id += parts[index];	 
				}
				
				return id;
			}
		}

		var init = function() {
			// for each video button, create a new dialog script
			$('[data-trigger="video-popup"]').each(function(){
				var dialogID = new idGenerate();
				var $scriptItem = $(this).parents('.mmj-video-parent').find('[data-item="video-popup"]');
				dialogID = dialogID.generate();

				$(this).attr('data-trigger', 'video-popup-' + dialogID);
				$(this).attr('data-content', 'video-popup-' + dialogID);
				$scriptItem.attr('data-js', 'video-popup-' + dialogID);

				instances.dialogs[dialogID] = new A11yDialog({
					appendTarget: 'body',
					effect: 'fade',
					effectSpeed: 300,
					trigger: '[data-trigger="video-popup-'+dialogID+'"]',
				});

				instances.dialogs[dialogID].on('hide', function (dialogEl, event) {
					var container = dialogEl.querySelector( 'iframe' );
					var orgSrc = container.getAttribute('src');
					
					container.setAttribute( 'src', orgSrc );
				});
			});

		};

		return {
			init: init
		};
	} )();

	document.addEventListener( 'DOMContentLoaded', window.MSB.videomodal.init );

} )( jQuery, window );
document.addEventListener( 'DOMContentLoaded', function() {
	'use strict';

	var videos = document.querySelectorAll( '.card-media.video-container, .video-container button' ),
		regexStrings = {
			youtube: /^https?:\/\/(www\.youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_\-]{11})/,
			oneplayer: /^https?:\/\/(www\.)?microsoft\.com\/(\w{2}\-\w{2})\/videoplayer\/embed\/(\w+)\/?/
	},

		/**
		 * Load a video embed.
		 * @returns {void}
		 */
		playVideo = function() {
			var player = this,
				iframe = document.createElement( 'iframe' ),
				youtube = player.dataset.src.match( regexStrings['youtube'] ),
				oneplayer = player.dataset.src.match( regexStrings['oneplayer'] );

			// Normalize youtube URLs and add autoplay=1 so it plays with a single click
			if ( null !== youtube && youtube.length > 2 ) {
				player.dataset.src = 'https://www.youtube-nocookie.com/embed/' + youtube[2] + '/?autoplay=1';
			}
			// Add autoplay=1 to oneplayer URLs
			else if ( null !== oneplayer && oneplayer.length > 2 ) {
				player.dataset.src = 'https://www.microsoft.com/'+ oneplayer[2] +'/videoplayer/embed/'+ oneplayer[3] + '/?autoplay=1';
			}

			iframe.setAttribute( 'src', player.dataset.src );
			iframe.setAttribute( 'frameborder', 0 );
			iframe.setAttribute( 'allowfullscreen', '' );

			if ( 'BUTTON' === this.tagName ) {
				player = player.parentElement.parentElement;
			}

			// Overwrite the player markup.
			player.innerHTML = iframe.outerHTML;
			player.classList.add( 'video-active' );
		};

	// Add click handling.
	for ( var i = 0; i < videos.length; i++ ) {
		videos[ i ].addEventListener( 'click', playVideo );
	}
} );


( function( $, window, undefined ) {
	'use strict';

	// Define global TenUp object if it doesn't exist
	if ( 'object' !== typeof window.MSB ) {
		window.MSB = {};
	}

	window.MSB.weWork = ( function() {
		var init = function() {
			if ( $('[data-js="mmj-tab-one"]').length == 0 ) {
				return;
			}

			$('[data-js="mmj-tab-one"]').on('click', function() {
				if ( !$(this).hasClass('is-active') ) {
					toggleActive();
				}
			});

			$('[data-js="mmj-tab-two"]').on('click', function() {
				if ( !$(this).hasClass('is-active') ) {
					toggleActive();
				}
			});

		}

		var toggleActive = function() {
			$('.mmj-desktop .mmj-how__tab-item').each(function() {
				$(this).toggleClass('is-active');
			});

			$('.mmj-desktop .mmj-how__content-section').each(function() {
				$(this).toggleClass('is-active');
			});

			$('.mmj-desktop .mmj-how__content-selection').each(function() {
				$(this).toggleClass('is-active');
			});
		}

		return {
			init: init
		};
	} )();

	$( document ).ready( function() {
		window.MSB.weWork.init();
	} );
} )( jQuery, this );
