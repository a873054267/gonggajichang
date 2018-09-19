//>>built
define("dgrid1/util/misc",["dojo/has"],function(m){var e=[],c,l,h,n=/([^A-Za-z0-9_\u00A0-\uFFFF-])/g,k=setTimeout,p=clearTimeout;m.add("requestidlecallback",function(a){return"function"===typeof a.requestIdleCallback});var f={defaultDelay:15,throttle:function(a,c,d){var b=!1;d=d||f.defaultDelay;return function(){b||(b=!0,a.apply(c,arguments),k(function(){b=!1},d))}},throttleDelayed:function(a,c,d){var b=!1;d=d||f.defaultDelay;return function(){if(!b){b=!0;var g=arguments;k(function(){b=!1;a.apply(c,
g)},d)}}},debounce:function(a,c,d){var b;d=d||f.defaultDelay;return function(){b&&(p(b),b=null);var g=arguments;b=k(function(){b=null;a.apply(c,g)},d)}},each:function(a,c,d){var b,g;if(a)if("number"===typeof a.length)for(b=0,g=a.length;b<g;b++)c.call(d,a[b],b,a);else for(b in a)c.call(d,a[b],b,a)},addCssRule:function(a,f){c||(c=document.createElement("style"),document.getElementsByTagName("head")[0].appendChild(c),c=c.sheet||c.styleSheet,l=c.deleteRule?"deleteRule":"removeRule",h=c.cssRules?"cssRules":
"rules");var d=e.length;e[d]=(c.cssRules||c.rules).length;c.addRule?c.addRule(a,f):c.insertRule(a+"{"+f+"}",e[d]);return{get:function(b){return c[h][e[d]].style[b]},set:function(b,a){"undefined"!==typeof e[d]&&(c[h][e[d]].style[b]=a)},remove:function(){var b=e[d],a,f;if(void 0!==b)for(c[l](b),e[d]=void 0,a=d+1,f=e.length;a<f;a++)e[a]>b&&e[a]--}}},escapeCssIdentifier:function(a,c){return"string"===typeof a?a.replace(n,c||"\\$1"):a}};return f});