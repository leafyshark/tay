<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,5,6,7,10,18],{185:function(e,t,a){e.exports=a.p+"src/img/home-9edd9757.svg"},186:function(e,t,a){e.exports=a.p+"src/img/envelope-21b61457.svg"},187:function(e,t,a){e.exports=a.p+"src/img/portfolio-6ca7d966.svg"},188:function(e,t,a){e.exports=a.p+"src/img/tay-7befbe14.svg"},189:function(e,t,a){e.exports={default:a(190),__esModule:!0}},190:function(e,t,a){var n=a(4),l=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},35:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(a(29)),l=h(a(30)),r=h(a(31)),u=h(a(32)),i=h(a(33)),o=a(1),s=h(o),d=a(92),c=(a(34),a(15)),f=h(a(185)),m=h(a(186)),_=h(a(187));function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"drawer__inner"},s.default.createElement(c.MyContext.Consumer,null,(function(e){return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:"drawer__inner-item"},s.default.createElement(d.Link,{onClick:e.handleClickOutside,className:"drawer__inner-item--title",to:"/"},s.default.createElement("img",{src:f.default,alt:"",width:"100px"}),s.default.createElement("h1",null,"Home"))),s.default.createElement("div",{className:"drawer__inner-item"},s.default.createElement(d.Link,{onClick:e.handleClickOutside,className:"drawer__inner-item--title",to:"/portfolio"},s.default.createElement("img",{src:_.default,alt:"",width:"100px"}),s.default.createElement("h1",null,"Portfolio"))),s.default.createElement("div",{className:"drawer__inner-item"},s.default.createElement(d.Link,{onClick:e.handleClickOutside,className:"drawer__inner-item--title",to:"/contact"},s.default.createElement("img",{src:m.default,alt:"",width:"100px"})," ",s.default.createElement("h1",null,"Contact"))))})))}}]),t}(o.Component);t.default=p},36:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(a(29)),l=m(a(30)),r=m(a(31)),u=m(a(32)),i=m(a(33)),o=a(1),s=m(o),d=a(196),c=m(a(35)),f=a(15);function m(e){return e&&e.__esModule?e:{default:e}}a(34);var _=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement(f.MyContext.Consumer,null,(function(e){return s.default.createElement(d.Motion,{style:{x:(0,d.spring)(e.state.open?25:0),y:(0,d.spring)(e.state.open?1:0)}},(function(t){var a=t.x,n=t.y;return s.default.createElement("div",{className:"drawer",style:{width:a+"vw",opacity:""+n,visibility:e.state.open?"visible":"hidden"}},s.default.createElement(c.default,null))}))}))}}]),t}(o.Component);t.default=_},37:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(a(29)),l=m(a(30)),r=m(a(31)),u=m(a(32)),i=m(a(33)),o=a(1),s=m(o),d=(a(34),m(a(198))),c=m(a(188)),f=a(92);function m(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.el=document.querySelector("#vivus"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(new d.default("vivus",{file:c.default}),this.el.classList.add("finished")):new d.default("vivus",{file:c.default,type:"sync",duration:100,animTimingFunction:d.default.EASE_IN},(function(t){e.el.classList.add("finished"),setTimeout((function(){return t.play(-1)}),2e3)}))}},{key:"render",value:function(){return s.default.createElement("div",{className:"header"},s.default.createElement(f.Link,{to:"/"},s.default.createElement("div",{id:"vivus",className:"header__title wrapper"})))}}]),t}(o.Component);t.default=_},38:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(189)),l=c(a(29)),r=c(a(30)),u=c(a(31)),i=c(a(32)),o=c(a(33)),s=a(1),d=c(s);function c(e){return e&&e.__esModule?e:{default:e}}a(34);var f=function(e){function t(e){(0,r.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.handleChange=function(e){return a.setState({name:e.target.value,review:e.target.value,rating:e.target.value})},a.state={formSent:!1,formNotSent:!1,name:"",email:"",message:""},a.handleSubmit=a.handleSubmit.bind(a),a.handleChange=a.handleChange.bind(a),a}return(0,o.default)(t,e),(0,u.default)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("/api/contact",{method:"POST",redirect:"follow",headers:{Accept:"application/json","Content-Type":"application/json"},body:(0,n.default)({name:this.state.name,email:this.state.email,message:this.state.message})}).then((function(e){e.redirected?t.setState({formSent:!0}):t.setState({formNotSent:!0})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this;return d.default.createElement("form",{className:"contact",onSubmit:this.handleSubmit},d.default.createElement("div",{className:"contact__container"},d.default.createElement("label",{htmlFor:"name"},d.default.createElement("h5",{className:"contact__label contact__label--name"},"Name*")),d.default.createElement("input",{type:"text",className:"contact__name contact__input",onChange:function(t){return e.setState({name:t.target.value})},required:!0})),d.default.createElement("div",{className:"contact__container"},d.default.createElement("label",{htmlFor:"email"},d.default.createElement("h5",{className:"contact__label"},"Email*")),d.default.createElement("input",{type:"email",className:"contact__email contact__input",onChange:function(t){return e.setState({email:t.target.value})},required:!0})),d.default.createElement("div",{className:"contact__container"},d.default.createElement("label",{htmlFor:"message"},d.default.createElement("h5",{className:"contact__label"},"Message*")),d.default.createElement("textarea",{rows:"10",cols:"30",type:"input",className:"contact__message contact__input",onChange:function(t){return e.setState({message:t.target.value})},required:!0})),d.default.createElement("input",{className:"contact--btn",type:"submit",value:this.state.formSent?"Message Sent":"Submit",disabled:this.state.formSent}))}}]),t}(s.Component);t.default=f},42:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(29)),l=c(a(30)),r=c(a(31)),u=c(a(32)),i=c(a(33)),o=a(1),s=c(o),d=(a(34),c(a(38)));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"sun wrapper"},s.default.createElement("div",{className:"sun__four"},s.default.createElement("h1",{className:"sun--title"},"About Me"),s.default.createElement("h5",{className:"sun--about"},"Let me introduce myself... Hey, I'm Taylor. I'm 25 years young. I was born in Jersey, the Channel Island and I lived in Scotland for 10 years as I was growing up. At the age of 19 I was broke, I had no real qualifications other than C's and D's. And that's when I decided to change my life, for good."),s.default.createElement("h5",{className:"sun--about"},"I decided that I would go back into education and do it properly this time around. I committed to 5 more years in education, and soon realised I had committed to a life time. I have now graduated with a 1:1 Honours Degree in Business Entrepreneurship, I've set up 2 companies and I was President & Founder of the Web Design & Development Society at Falmouth University."),s.default.createElement("h5",{className:"sun--about"},"I learnt to code in between completing my degree, working part-time, running my business and running the Web Design & Development society. I have an extreme passion for coding, I'm a veracious reader and I love surfing in my spare time. Please do get in touch, I'd really like to hear from you!")),s.default.createElement("div",{className:"sun__three sun__three--bg"}),s.default.createElement("div",{className:"sun__three"},s.default.createElement("h1",{className:"sun--title sun--mobile-margin-off"},"Get in Touch"),s.default.createElement(d.default,null)))}}]),t}(o.Component);t.default=f},43:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(29)),l=d(a(30)),r=d(a(31)),u=d(a(32)),i=d(a(33)),o=a(1),s=d(o);function d(e){return e&&e.__esModule?e:{default:e}}a(34);var c=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"footer"},s.default.createElement("h6",{className:"footer--copyright"},"© 2018 Taylor Lindores-Reeves"))}}]),t}(o.Component);t.default=c},48:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=_(a(29)),l=_(a(30)),r=_(a(31)),u=_(a(32)),i=_(a(33)),o=a(1),s=_(o),d=(a(34),_(a(42))),c=_(a(36)),f=_(a(37)),m=_(a(43));function _(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"main-background"},s.default.createElement(c.default,null),s.default.createElement("div",{onClick:this.props.clickOutsideHandler},s.default.createElement(f.default,null),s.default.createElement(d.default,null)),s.default.createElement(m.default,null))}}]),t}(o.Component);t.default=h}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,11,14,15,16,17],{187:function(e,t,a){e.exports=a.p+"docs/img/portfolio-6ca7d966.svg"},188:function(e,t,a){e.exports=a.p+"docs/img/envelope-21b61457.svg"},189:function(e,t,a){e.exports=a.p+"docs/img/home-9edd9757.svg"},190:function(e,t,a){e.exports=a.p+"docs/img/tay-7befbe14.svg"},196:function(e,t,a){var n=a(5),l=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},197:function(e,t,a){e.exports={default:a(196),__esModule:!0}},37:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=p(a(35)),l=p(a(34)),u=p(a(33)),r=p(a(32)),i=p(a(31)),o=a(1),s=p(o),d=a(96),c=a(36),f=a(15),m=p(a(189)),h=p(a(188)),_=p(a(187));function p(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"drawer__inner"},s.default.createElement(f.MyContext.Consumer,null,function(e){return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:"drawer__inner-item"},s.default.createElement(d.Link,{onClick:e.handleClickOutside,className:"drawer__inner-item--title",to:"/"},s.default.createElement("img",{src:m.default,alt:"",width:"100px"}),s.default.createElement("h1",null,"Home"))),s.default.createElement("div",{className:"drawer__inner-item"},s.default.createElement(d.Link,{onClick:e.handleClickOutside,className:"drawer__inner-item--title",to:"/portfolio"},s.default.createElement("img",{src:_.default,alt:"",width:"100px"}),s.default.createElement("h1",null,"Portfolio"))),s.default.createElement("div",{className:"drawer__inner-item"},s.default.createElement(d.Link,{onClick:e.handleClickOutside,className:"drawer__inner-item--title",to:"/contact"},s.default.createElement("img",{src:h.default,alt:"",width:"100px"})," ",s.default.createElement("h1",null,"Contact"))))}))}}]),t}(o.Component);t.default=(0,c.hot)(e)(v)}).call(this,a(17)(e))},38:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=h(a(35)),l=h(a(34)),u=h(a(33)),r=h(a(32)),i=h(a(31)),o=a(1),s=h(o),d=a(36),c=h(a(199)),f=h(a(190)),m=a(96);function h(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.el=document.querySelector("#vivus"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(new c.default("vivus",{file:f.default}),this.el.classList.add("finished")):new c.default("vivus",{file:f.default,type:"sync",duration:100,animTimingFunction:c.default.EASE_IN},function(t){e.el.classList.add("finished"),setTimeout(function(){return t.play(-1)},2e3)})}},{key:"render",value:function(){return s.default.createElement("div",{className:"header"},s.default.createElement(m.Link,{to:"/"},s.default.createElement("div",{id:"vivus",className:"header__title wrapper"})))}}]),t}(o.Component);t.default=(0,d.hot)(e)(_)}).call(this,a(17)(e))},39:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=h(a(35)),l=h(a(34)),u=h(a(33)),r=h(a(32)),i=h(a(31)),o=a(1),s=h(o),d=a(201),c=h(a(37)),f=a(15),m=a(36);function h(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return s.default.createElement(f.MyContext.Consumer,null,function(e){return s.default.createElement(d.Motion,{style:{x:(0,d.spring)(e.state.open?25:0),y:(0,d.spring)(e.state.open?1:0)}},function(t){var a=t.x,n=t.y;return s.default.createElement("div",{className:"drawer",style:{width:a+"vw",opacity:""+n,visibility:e.state.open?"visible":"hidden"}},s.default.createElement(c.default,null))})})}}]),t}(o.Component);t.default=(0,m.hot)(e)(_)}).call(this,a(17)(e))},43:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(197)),l=f(a(35)),u=f(a(34)),r=f(a(33)),i=f(a(32)),o=f(a(31)),s=a(1),d=f(s),c=a(36);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.handleChange=function(e){return a.setState({name:e.target.value,review:e.target.value,rating:e.target.value})},a.state={formSent:!1,formNotSent:!1,name:"",email:"",message:""},a.handleSubmit=a.handleSubmit.bind(a),a.handleChange=a.handleChange.bind(a),a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("/api/contact",{method:"POST",redirect:"follow",headers:{Accept:"application/json","Content-Type":"application/json"},body:(0,n.default)({name:this.state.name,email:this.state.email,message:this.state.message})}).then(function(e){console.log(e),e.redirected?t.setState({formSent:!0}):t.setState({formNotSent:!0})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this;return d.default.createElement("form",{className:"contact",onSubmit:this.handleSubmit},d.default.createElement("div",{className:"contact__container"},d.default.createElement("label",{htmlFor:"name"},d.default.createElement("h5",{className:"contact__label contact__label--name"},"Name*")),d.default.createElement("input",{type:"text",className:"contact__name contact__input",onChange:function(t){return e.setState({name:t.target.value})},required:!0})),d.default.createElement("div",{className:"contact__container"},d.default.createElement("label",{htmlFor:"email"},d.default.createElement("h5",{className:"contact__label"},"Email*")),d.default.createElement("input",{type:"email",className:"contact__email contact__input",onChange:function(t){return e.setState({email:t.target.value})},required:!0})),d.default.createElement("div",{className:"contact__container"},d.default.createElement("label",{htmlFor:"message"},d.default.createElement("h5",{className:"contact__label"},"Message*")),d.default.createElement("textarea",{rows:"10",cols:"30",type:"input",className:"contact__message contact__input",onChange:function(t){return e.setState({message:t.target.value})},required:!0})),d.default.createElement("input",{className:"contact--btn",type:"submit",value:this.state.formSent?"Message Sent":"Submit",disabled:this.state.formSent}))}}]),t}(s.Component);t.default=(0,c.hot)(e)(m)}).call(this,a(17)(e))},48:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(35)),l=c(a(34)),u=c(a(33)),r=c(a(32)),i=c(a(31)),o=a(1),s=c(o),d=a(36);function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"footer"},s.default.createElement("h6",{className:"footer--copyright"},"© 2018 Taylor Lindores-Reeves"))}}]),t}(o.Component);t.default=(0,d.hot)(e)(f)}).call(this,a(17)(e))},49:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(35)),l=f(a(34)),u=f(a(33)),r=f(a(32)),i=f(a(31)),o=a(1),s=f(o),d=a(36),c=f(a(43));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"sun wrapper"},s.default.createElement("div",{className:"sun__four"},s.default.createElement("h1",{className:"sun--title"},"About Me"),s.default.createElement("h5",{className:"sun--about"},"Let me introduce myself... Hey, I'm Taylor. I'm 25 years young. I was born in Jersey, the Channel Island and I lived in Scotland for 10 years as I was growing up. At the age of 19 I was broke, I had no real qualifications other than C's and D's. And that's when I decided to change my life, for good."),s.default.createElement("h5",{className:"sun--about"},"I decided that I would go back into education and do it properly this time around. I committed to 5 more years in education, and soon realised I had committed to a life time. I have now graduated with a 1:1 Honours Degree in Business Entrepreneurship, I've set up 2 companies and I was President & Founder of the Web Design & Development Society at Falmouth University."),s.default.createElement("h5",{className:"sun--about"},"I learnt to code in between completing my degree, working part-time, running my business and running the Web Design & Development society. I have an extreme passion for coding, I'm a veracious reader and I love surfing in my spare time. Please do get in touch, I'd really like to hear from you!")),s.default.createElement("div",{className:"sun__three sun__three--bg"}),s.default.createElement("div",{className:"sun__three"},s.default.createElement("h1",{className:"sun--title sun--mobile-margin-off"},"Get in Touch"),s.default.createElement(c.default,null)))}}]),t}(o.Component);t.default=(0,d.hot)(e)(m)}).call(this,a(17)(e))},52:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=_(a(35)),l=_(a(34)),u=_(a(33)),r=_(a(32)),i=_(a(31)),o=a(1),s=_(o),d=a(36),c=_(a(49)),f=_(a(39)),m=_(a(38)),h=_(a(48));function _(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"main-background"},s.default.createElement(f.default,null),s.default.createElement("div",{onClick:this.props.clickOutsideHandler},s.default.createElement(m.default,null),s.default.createElement(c.default,null)),s.default.createElement(h.default,null))}}]),t}(o.Component);t.default=(0,d.hot)(e)(p)}).call(this,a(17)(e))}}]);
>>>>>>> 4831d0b68790a766da8a38a8add946435f414510
