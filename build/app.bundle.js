!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";var n=o(1);(0,function(e){return e&&e.__esModule?e:{default:e}}(n).default)({}),$.urlParam=function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null!=t?t[1]||0:null};var r=$.urlParam("chart");"all"==r?$(".slide").show():null!=r&&($(".slide").hide(),$("#"+r).show()),d3.json("./data/weeks.json",function(e,t){function o(e,t,o,n){d3.helper={},d3.helper.tooltip=function(e){return function(t){var o,r=d3.select("body").node();t.on("mouseover",function(t,c){d3.select("body").selectAll("div.tooltip").remove(),o=d3.select("body").append("div").attr("class",n+" tooltip");var i=d3.mouse(r);o.style("left",i[0]+10+"px").style("top",i[1]-15+"px").style("position","absolute").style("z-index",1001);e(t,c)}).on("mousemove",function(t,n){var c=d3.mouse(r);o.style("left",c[0]+10+"px").style("top",c[1]-15+"px");var i=e(t,n)||"";o.html(i)}).on("mouseout",function(e,t){o.remove()})}},d3.select(t).selectAll(".week").data(e).enter().append("div").attr("class",function(t,r){var c="",i="",a="",l=e.length-r;return o>=1978&&17==l&&(i="regular"),o<1978&&15==l&&(i="regular"),"all"==n?("expected"!=t.outcome&&"tie"!=t.outcome&&"lost as expected"!=t.outcome&&"win as expected"!=t.outcome||(c="gray2"),"too close"==t.outcome&&(c="gray3"),"unexpected win"==t.outcome&&(c="win"),"unexpected loss"==t.outcome&&(c="loss")):"post1"==n?c="tie"==t.outcome?"gray2":"lost as expected"==t.outcome?"eloss":"too close"==t.outcome&&"MIN"!=t.winner?"gray3":"unexpected loss"==t.outcome?"loss":"gray2 fademe":"wins"==n?c="unexpected win"==t.outcome?"win":"gray2 fademe":"post2"==n?c=2009==o&&"c"==t.playoff?"eloss":"gray2 fademe":"post3"==n&&(c=2008==o&&"w"==t.playoff?"eloss":2e3==o&&"c"==t.playoff?"eloss":"gray2 fademe"),null!=t.playoff&&(a="postseason"),a+" "+i+" "+c+" week"}).on("click",function(e){}).html(function(e){return" "}).call(d3.helper.tooltip(function(t,n){var r=t.tm1,c=t.tm2,i=t.score1,a=t.score2,l=(t.winner,t.outcome),s=t.playoff,u="W",p="v",d="Week "+(e.length-n),f=r;return"expected"==t.outcome&&(l="gray2"),"too close"==t.outcome&&(l="hard to predict"),"unexpected win"==t.outcome&&(l="unexpected win"),"unexpected loss"==t.outcome&&(l="unexpected loss"),"win as expected"==t.outcome&&(l="expected win"),"lost as expected"==t.outcome&&(l="expected loss"),"MIN"!=t.winner&&(u="L"),"tie"==t.winner&&(u="T"),"MIN"!=c&&(p="@",f=c),"w"==s&&(d="Wild Card"),"d"==s&&(d="Divisional Round"),"c"==s&&(d="Conference Championship"),"s"==s&&(d="Super Bowl"),"<div>"+d+" | "+o+"</div><div>"+u+" "+p+" "+f+" ("+i+"-"+a+")</div><div>"+l+"</div>"}))}function n(e,t){for(var o=0;o<e.length;o++)$("#"+t).append('<div class="fullbar '+e[o].team+'" style="width:'+d3.format("%")(e[o].pct+.12)+';" data="team"><div class="label" style="color:'+e[o].color+';">'+e[o].team+'</div><div class="pct">'+d3.format("%")(e[o].pct)+"</div></div>")}var r=t.weeks;!function(e,t){for(var n,c=e;c<t;c++)n=r.sort(function(e,t){return d3.descending(e.week,t.week)}).filter(function(e){return e.season==c&&null==e.playoff}),o(n,"#r"+c,c,"all");for(var c=e;c<t;c++)n=r.sort(function(e,t){return d3.descending(e.week,t.week)}).filter(function(e){return e.season==c&&null==e.playoff}),o(n,"#rw"+c,c,"wins")}(1966,2018),function(e,t){for(var n,c=e;c<t;c++)n=r.sort(function(e,t){return d3.descending(e.week,t.week)}).filter(function(e){return e.season==c&&null!=e.playoff}),o(n,"#p"+c,c,"all");for(var c=e;c<t;c++)n=r.sort(function(e,t){return d3.descending(e.week,t.week)}).filter(function(e){return e.season==c&&null!=e.playoff}),o(n,"#pm"+c,c,"post1"),o(n,"#po"+c,c,"post2"),o(n,"#pos"+c,c,"post3");for(var c=e;c<t;c++)n=r.sort(function(e,t){return d3.descending(e.week,t.week)}).filter(function(e){return e.season==c&&null!=e.playoff}),o(n,"#pw"+c,c,"wins")}(1966,2018);var c=[{team:"CHIEFS",pct:.67,color:"#C8102E"},{team:"LIONS",pct:.67,color:"#0069B1"},{team:"CHARGERS",pct:.6,color:"#0072CE"},{team:"VIKINGS",pct:.48,color:"#4F2683"},{team:"RAMS",pct:.46,color:"#866D4B"},{team:"TITANS",pct:.45,color:"#4B92DB"},{team:"SAINTS",pct:.44,color:"#D3BC8D"},{team:"EAGLES",pct:.44,color:"#064C53"},{team:"BENGALS",pct:.43,color:"#FC4C02"},{team:"JETS",pct:.39,color:"#2A433A"},{team:"BEARS",pct:.39,color:"#DC4405"},{team:"COLTS",pct:.33,color:"#003A70"},{team:"BROWNS",pct:.33,color:"#EB3300"},{team:"RAIDERS",pct:.31,color:"#101820"},{team:"GIANTS",pct:.3,color:"#001E62"},{team:"DOLPHINS",pct:.29,color:"#008E97"},{team:"COWBOYS",pct:.29,color:"#041E42"},{team:"FALCONS",pct:.29,color:"#A6192E"},{team:"49ERS",pct:.27,color:"#AA0000"},{team:"BUCCANEERS",pct:.25,color:"#C8102E"},{team:"JAGUARS",pct:.25,color:"#006073"},{team:"PANTHERS",pct:.25,color:"#0085CA"},{team:"BRONCOS",pct:.22,color:"#FC4C02"},{team:"SEAHAWKS",pct:.21,color:"#001433"},{team:"PATRIOTS",pct:.21,color:"#0C2340"},{team:"PACKERS",pct:.2,color:"#175E33"},{team:"BILLS",pct:.2,color:"#00338D"},{team:"STEELERS",pct:.18,color:"#000000"},{team:"RAVENS",pct:.14,color:"#241773"},{team:"REDSKINS",pct:.12,color:"#862633"}],i=[{team:"MIN",pct:.48,color:"#4F2683"},{team:"TEN",pct:.45,color:"#4B92DB"},{team:"NO",pct:.44,color:"#D3BC8D"},{team:"PHI",pct:.41,color:"#064C53"},{team:"ATL",pct:.29,color:"#A6192E"},{team:"JAX",pct:.25,color:"#006073"},{team:"NE",pct:.21,color:"#0C2340"},{team:"PIT",pct:.18,color:"#000000"}],a=[{team:1970,pct:.5,color:"#064C53"},{team:1980,pct:.5,color:"#064C53"},{team:1990,pct:1,color:"#064C53"},{team:2e3,pct:.33,color:"#064C53"}],l=[{team:"Van Brocklin (1966*)",pct:.75,color:"#4F2683"},{team:"Grant (1967-1983,1985)",pct:.3,color:"#4F2683"},{team:"Steckel (1984)",pct:.5,color:"#4F2683"},{team:"Burns (1986-1991)",pct:.33,color:"#4F2683"},{team:"Green (1992-2001)",pct:.34,color:"#4F2683"},{team:"Tice (2001-2005)",pct:.34,color:"#4F2683"},{team:"Childress (2006-2010)",pct:.29,color:"#4F2683"},{team:"Frazier (2010-2013)",pct:.5,color:"#4F2683"},{team:"Zimmer (2014-now)",pct:.22,color:"#4F2683"}];n(c,"losersChart"),n(i,"currentChart"),n(a,"decadeChart"),n(l,"coachChart")})},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(2),i=function(e){return e&&e.__esModule?e:{default:e}}(c),a=function(){function e(t){n(this,e),this.options=t||{},this.options.pym=void 0===this.options.pym||this.options.pym,this.options.useView=void 0===this.options.useView||this.options.useView,this.options.views=this.options.views||{develop:/localhost.*|127\.0\.0\.1.*/i,staging:/staging/i},this.parseQuery(),this.setView(),this.options.pym&&(this.pym=_.isUndefined(window.pym)?void 0:new pym.Child({polling:500}))}return r(e,[{key:"setView",value:function(){if(this.options.useView){var e=void 0;if(_.find(this.options.views,function(t,o){return e=o,window.location.href.match(t)?o:void 0}),e){var t=document.createElement("div"),o=document.getElementsByTagName("body")[0];t.className="site-view site-view-"+e,o.insertBefore(t,o.childNodes[0])}}}},{key:"parseQuery",value:function(){this.query=i.default.parse(document.location.search),this.query.pym&&"true"===this.query.pym&&(this.options.pym=!0)}},{key:"deepClone",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"isEmbedded",value:function(){if(!_.isUndefined(this.embedded))return this.embedded;try{this.embedded=window.self!==window.top}catch(e){this.embedded=!0}return this.embedded}},{key:"hasLocalStorage",value:function(){if(!_.isUndefined(this.localStorage))return this.localStorage;try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),this.localStorage=!0}catch(e){this.localStorage=!1}return this.localStorage}},{key:"hasGeolocate",value:function(){return window.navigator&&"geolocation"in window.navigator}},{key:"geolocate",value:function(e){this.hasGeolocate()?window.navigator.geolocation.getCurrentPosition(function(t){e(null,{lat:t.coords.latitude,lng:t.coords.longitude})},function(){e("Unable to find your position.")}):e("Geolocation not available")}},{key:"goTo",value:function(e){var t=_.isElement(e)?e:e[0]&&_.isElement(e[0])?e[0]:document.getElementById(e);t&&(this.isEmbedded()&&this.pym?this.pym.scrollParentToChildEl(t):t.scrollIntoView({behavior:"smooth"}))}},{key:"gaPageUpdate",value:function(e){e=e||document.location.pathname+document.location.search+document.location.hash,window.ga&&(window.ga("set","page",e),window.ga("send","pageview"))}}]),e}();t.default=function(e){return new a(e)}},function(e,t,o){"use strict";function n(e){switch(e.arrayFormat){case"index":return function(t,o,n){return null===o?[c(t,e),"[",n,"]"].join(""):[c(t,e),"[",c(n,e),"]=",c(o,e)].join("")};case"bracket":return function(t,o){return null===o?c(t,e):[c(t,e),"[]=",c(o,e)].join("")};default:return function(t,o){return null===o?c(t,e):[c(t,e),"=",c(o,e)].join("")}}}function r(e){var t;switch(e.arrayFormat){case"index":return function(e,o,n){if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t)return void(n[e]=o);void 0===n[e]&&(n[e]={}),n[e][t[1]]=o};case"bracket":return function(e,o,n){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===n[e]?void(n[e]=[o]):void(n[e]=[].concat(n[e],o)):void(n[e]=o)};default:return function(e,t,o){if(void 0===o[e])return void(o[e]=t);o[e]=[].concat(o[e],t)}}}function c(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}function i(e){return Array.isArray(e)?e.sort():"object"==typeof e?i(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}var a=o(3),l=o(4);t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){t=l({arrayFormat:"none"},t);var o=r(t),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),o(decodeURIComponent(r),c,n)}),Object.keys(n).sort().reduce(function(e,t){var o=n[t];return Boolean(o)&&"object"==typeof o&&!Array.isArray(o)?e[t]=i(o):e[t]=o,e},Object.create(null))):n},t.stringify=function(e,t){t=l({encode:!0,strict:!0,arrayFormat:"none"},t);var o=n(t);return e?Object.keys(e).sort().map(function(n){var r=e[n];if(void 0===r)return"";if(null===r)return c(n,t);if(Array.isArray(r)){var i=[];return r.slice().forEach(function(e){void 0!==e&&i.push(o(n,e,i.length))}),i.join("&")}return c(n,t)+"="+c(r,t)}).filter(function(e){return e.length>0}).join("&"):""}},function(e,t,o){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},function(e,t,o){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var o,a,l=n(e),s=1;s<arguments.length;s++){o=Object(arguments[s]);for(var u in o)c.call(o,u)&&(l[u]=o[u]);if(r){a=r(o);for(var p=0;p<a.length;p++)i.call(o,a[p])&&(l[a[p]]=o[a[p]])}}return l}}]);
//# sourceMappingURL=app.bundle.js.map