<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[14,13],{191:function(e,t,n){(function(t){for(var a=n(203),l="undefined"==typeof window?t:window,c=["moz","webkit"],u="AnimationFrame",r=l["request"+u],o=l["cancel"+u]||l["cancelRequest"+u],i=0;!r&&i<c.length;i++)r=l[c[i]+"Request"+u],o=l[c[i]+"Cancel"+u]||l[c[i]+"CancelRequest"+u];if(!r||!o){var f=0,s=0,d=[];r=function(e){if(0===d.length){var t=a(),n=Math.max(0,1e3/60-(t-f));f=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(f)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++s,callback:e,cancelled:!1}),s},o=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return r.call(l,e)},e.exports.cancel=function(){o.apply(l,arguments)},e.exports.polyfill=function(e){e||(e=l),e.requestAnimationFrame=r,e.cancelAnimationFrame=o}}).call(this,n(94))},192:function(e,t,n){e.exports=n.p+"src/img/net-f796e650.png"},203:function(e,t,n){(function(t){(function(){var n,a,l,c,u,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-u)/1e6},a=t.hrtime,c=(n=function(){var e;return 1e9*(e=a())[0]+e[1]})(),r=1e9*t.uptime(),u=c-r):Date.now?(e.exports=function(){return Date.now()-l},l=Date.now()):(e.exports=function(){return(new Date).getTime()-l},l=(new Date).getTime())}).call(this)}).call(this,n(93))},205:function(e,t,n){e.exports=n.p+"src/img/phone-2a72bd67.png"},206:function(e,t,n){e.exports=n.p+"src/img/kaleidascope-497f9add.svg"},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(1)),l=c(n(192));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement("div",null,a.default.createElement("div",{className:"net"},a.default.createElement("img",{src:l.default,alt:"",className:"net--img"})))}},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(n(29)),l=m(n(30)),c=m(n(31)),u=m(n(32)),r=m(n(33)),o=n(1),i=m(o),f=(n(34),m(n(205))),s=m(n(208)),d=m(n(40)),p=m(n(206));function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"ocean"},i.default.createElement("div",{className:"ocean__flex"},i.default.createElement("img",{src:f.default,alt:"",className:"ocean__phone"}),i.default.createElement("div",{className:"ocean__text-content"},i.default.createElement("h1",null,"I create",i.default.createElement(s.default,{key:"a",loop:!0},i.default.createElement("span",null,"fast, responsive web applications."),i.default.createElement(s.default.Backspace,{key:"c",count:43,delay:2e3}),i.default.createElement("span",null,"bespoke applications using the latest tools."),i.default.createElement(s.default.Backspace,{key:"e",count:47,delay:2e3}),i.default.createElement("span",null,"visually appealing and modern web designs."),i.default.createElement(s.default.Backspace,{key:"g",count:40,delay:2e3}))))),i.default.createElement("div",{className:"ocean__text-content--mobile"},i.default.createElement("img",{src:p.default,alt:"",width:"100%"})),i.default.createElement(d.default,null))}}]),t}(o.Component);t.default=h}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{194:function(e,t,n){e.exports=n.p+"docs/img/net-f796e650.png"},195:function(e,t,n){(function(t){for(var a=n(205),l="undefined"==typeof window?t:window,c=["moz","webkit"],u="AnimationFrame",o=l["request"+u],r=l["cancel"+u]||l["cancelRequest"+u],i=0;!o&&i<c.length;i++)o=l[c[i]+"Request"+u],r=l[c[i]+"Cancel"+u]||l[c[i]+"CancelRequest"+u];if(!o||!r){var f=0,d=0,s=[];o=function(e){if(0===s.length){var t=a(),n=Math.max(0,1e3/60-(t-f));f=n+t,setTimeout(function(){var e=s.slice(0);s.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(f)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return s.push({handle:++d,callback:e,cancelled:!1}),d},r=function(e){for(var t=0;t<s.length;t++)s[t].handle===e&&(s[t].cancelled=!0)}}e.exports=function(e){return o.call(l,e)},e.exports.cancel=function(){r.apply(l,arguments)},e.exports.polyfill=function(e){e||(e=l),e.requestAnimationFrame=o,e.cancelAnimationFrame=r}}).call(this,n(69))},202:function(e,t,n){e.exports=n.p+"docs/img/kaleidascope-497f9add.svg"},203:function(e,t,n){e.exports=n.p+"docs/img/phone-2a72bd67.png"},205:function(e,t,n){(function(t){(function(){var n,a,l,c,u,o;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-u)/1e6},a=t.hrtime,c=(n=function(){var e;return 1e9*(e=a())[0]+e[1]})(),o=1e9*t.uptime(),u=c-o):Date.now?(e.exports=function(){return Date.now()-l},l=Date.now()):(e.exports=function(){return(new Date).getTime()-l},l=(new Date).getTime())}).call(this)}).call(this,n(97))},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(1)),l=c(n(194));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement("div",null,a.default.createElement("div",{className:"net"},a.default.createElement("img",{src:l.default,alt:"",className:"net--img"})))}},46:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=h(n(35)),l=h(n(34)),c=h(n(33)),u=h(n(32)),o=h(n(31)),r=n(1),i=h(r),f=n(36),d=h(n(203)),s=h(n(214)),p=h(n(41)),m=h(n(202));function h(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"ocean"},i.default.createElement("div",{className:"ocean__flex"},i.default.createElement("img",{src:d.default,alt:"",className:"ocean__phone"}),i.default.createElement("div",{className:"ocean__text-content"},i.default.createElement("h1",null,"I create",i.default.createElement(s.default,{key:"a",loop:!0},i.default.createElement("span",null,"fast, responsive web applications."),i.default.createElement(s.default.Backspace,{key:"c",count:43,delay:2e3}),i.default.createElement("span",null,"bespoke applications using the latest tools."),i.default.createElement(s.default.Backspace,{key:"e",count:47,delay:2e3}),i.default.createElement("span",null,"visually appealing and modern web designs."),i.default.createElement(s.default.Backspace,{key:"g",count:40,delay:2e3}))))),i.default.createElement("div",{className:"ocean__text-content--mobile"},i.default.createElement("img",{src:m.default,alt:"",width:"100%"})),i.default.createElement(p.default,null))}}]),t}(r.Component);t.default=(0,f.hot)(e)(v)}).call(this,n(17)(e))}}]);
>>>>>>> 4831d0b68790a766da8a38a8add946435f414510
