(function(e){function t(t){for(var s,o,r=t[0],c=t[1],l=t[2],p=0,f=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},i=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"06c3":function(e,t,a){},4252:function(e,t,a){"use strict";a("fc32")},"56d7":function(e,t,a){"use strict";a.r(t);a("20c5");var s=a("bb76"),n=(a("a71a"),a("b558")),i=(a("e1f5"),a("5efb")),o=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),a("the-footer")],1)},c=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-footer"},[a("div",[e._v(" Contact: https://t.me/rdruska ")])])}],p=(a("dbae"),a("2877")),f={},b=Object(p["a"])(f,l,u,!1,null,"6ba84219",null),d=b.exports,m={name:"app",components:{TheFooter:d}},v=m,h=(a("034f"),Object(p["a"])(v,r,c,!1,null,null,null)),_=h.exports,g=a("8c4f"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("app-header"),a("div",{staticClass:"home__description-and-form"},[a("div",{staticClass:"home__description-and-form__element"},[a("app-description")],1),a("div",{staticClass:"home__description-and-form__element"},[a("app-form")],1)])],1)},w=[],y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-header"},[a("div",{staticClass:"logo"},[e._v(" BinanceStaking"),a("span",{staticClass:"app-header__logo--black"},[e._v("Watcher")])])])}],C={name:"app-header"},D=C,j=(a("931a"),Object(p["a"])(D,y,x,!1,null,"605bdb6d",null)),L=j.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"description"},[a("div",{staticClass:"description__content"},[a("h1",[e._v(" Binance Staking Notification Bot ")]),a("p",[e._v(" Cryptocurrency staking offers a convenient way to earn interest on longer-term crypto holdings. The staking programs offered by Binance, the biggest cryptocurrency exchange by market cap, are usually under high demand and the most lucrative staking options are sold out most of the time. Binance doesn’t have a built-in system that would notify users about availability of its staking options. This bot provides this service by sending notification (Telegram or email) immediately after a specified staking option, which was previously sold out, becomes avaliable. This is possible by constant monitoring of the Binance website ( "),a("a",{attrs:{href:"https://www.binance.com/en/pos",target:"_blank"}},[e._v(" https://www.binance.com/en/pos ")]),e._v(" ). ")]),a("p",[e._v(" Currently it's not possible to track programs with specific length - if you follow e.g. BNB currency and it includes staking options for 30, 60 and 90 days, you will get notified when any of them becomes available. ")]),a("p",[e._v(" To take part, fill in the form on this website to receive notifications on email. Alternatively, chat up with the bot at "),a("a",{attrs:{href:"https://t.me/bstaking_bot",target:"_blank"}},[e._v(" https://t.me/bstaking_bot ")]),e._v(" to receive notifications on Telegram. Telegram notifications work substantially faster. ")]),a("h1",{staticClass:"description__content__header"},[e._v(" About project ")]),a("p",[e._v(" The code behind this bot is available on Github: "),a("a",{attrs:{href:"https://github.com/druskacik/binance-staking-notification-bot",target:"_blank"}},[e._v(" https://github.com/druskacik/binance-staking-notification-bot ")])]),a("p",[e._v(" Providing this bot publicly to everyone may seem anti-purpose, but as long as the community using it remains small it will not be a problem. If the demand will be too high, I will consider what are my options. ")]),a("p",[e._v(" If you want to provide any feedback or suggestions, the fastest way to contact me is via Telegram: "),a("a",{attrs:{href:"https://t.me/rdruska",target:"_blank"}},[e._v(" https://t.me/rdruska ")])]),a("p",[e._v(" Support development of this project: ")]),a("div",{staticClass:"description__addresses"},[a("div",[e._v(" BTC: 1DkQTzGvYvqzjHFYc5Zejx9ZUNE9NbxKBv ")]),a("div",[e._v(" ETH: 0xa58bccec9364c22d2a6e5e8e30b056ff9a0dfc7c ")]),a("div",[e._v(" LTC: LViYjGcuqEwRGFrWieL4NwMTXq1Fng5XBM ")])])])])])}],A={name:"app-description"},T=A,E=(a("c25c"),Object(p["a"])(T,N,O,!1,null,"3a2f545b",null)),I=E.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-form"},[a("h1",[e._v("Set up notifications")]),e._m(0),a("div",{staticClass:"app-form__email-input"},[a("label",{staticClass:"app-form__label"},[e._v("Email address: ")]),a("a-input",{staticClass:"app-form__email-input__field",attrs:{placeholder:"@"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",[a("h4",[e._v("Locked Staking")]),a("div",{staticClass:"app-form__new-assets-checkbox"},[a("a-checkbox",{model:{value:e.subscribeNewAssetsLocked,callback:function(t){e.subscribeNewAssetsLocked=t},expression:"subscribeNewAssetsLocked"}},[e._v(" Notify me when locked staking of a new currency becomes available ")])],1),a("div",{staticClass:"app-form__assets-checkbox-group__label"},[e._v(" Notify me about availability of locked staking in following currencies: ")]),a("a-checkbox-group",{staticClass:"app-form__assets-checkbox-group",model:{value:e.assetIDsLocked,callback:function(t){e.assetIDsLocked=t},expression:"assetIDsLocked"}},e._l(e.optionsLocked,(function(t){return a("div",{key:t.value,staticClass:"app-form__assets-checkbox-group__checkbox"},[a("a-checkbox",{attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])],1)})),0)],1),a("div",[a("h4",[e._v("DeFi Staking")]),a("div",{staticClass:"app-form__new-assets-checkbox"},[a("a-checkbox",{model:{value:e.subscribeNewAssetsDefi,callback:function(t){e.subscribeNewAssetsDefi=t},expression:"subscribeNewAssetsDefi"}},[e._v(" Notify me when DeFi staking of a new currency becomes available ")])],1),a("div",{staticClass:"app-form__assets-checkbox-group__label"},[e._v(" Notify me about availability of DeFi staking in following currencies: ")]),a("a-checkbox-group",{staticClass:"app-form__assets-checkbox-group",model:{value:e.assetIDsDefi,callback:function(t){e.assetIDsDefi=t},expression:"assetIDsDefi"}},e._l(e.optionsDefi,(function(t){return a("div",{key:t.value,staticClass:"app-form__assets-checkbox-group__checkbox"},[a("a-checkbox",{attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])],1)})),0)],1),a("app-form-submit-button",{attrs:{onClick:e.submitRequest,loading:e.loading}})],1)},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" To set up email notifications, fill in the form below. To receive notifications on Telegram, chat up with the bot at "),a("a",{attrs:{href:"https://t.me/bstaking_bot",target:"_blank"}},[e._v(" https://t.me/bstaking_bot ")]),e._v(" and follow his instructions. ")])}],B=(a("04f3"),a("ed3b")),F=a("1da1"),P=(a("d81d"),a("96cf"),a("bc3a")),R=a.n(P),M={apiUrl:"https://bswatcher.com"},q=M,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-form__submit-section"},[a("a-button",{staticClass:"app-form__submit-button",attrs:{type:"primary",loading:e.loading},on:{click:e.onClick}},[a("span",{staticClass:"app-form__submit-button__text"},[e._v(" Submit ")])]),a("div",{staticClass:"app-form__submit-section--text"},[e._v(" It's free ! ")])],1)},G=[],U={name:"app-header",props:{onClick:Function,loading:Boolean}},V=U,Y=(a("7657"),Object(p["a"])(V,H,G,!1,null,"677dcb42",null)),z=Y.exports,J={components:{AppFormSubmitButton:z},name:"app-form",data:function(){return{email:"",optionsLocked:[],optionsDefi:[],subscribeNewAssetsLocked:!1,subscribeNewAssetsDefi:!1,assetIDsLocked:[],assetIDsDefi:[],loading:!1}},methods:{submitRequest:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.emailIsValid(e.email)){t.next=4;break}return e.warning("Please enter valid email address !"),t.abrupt("return");case 4:if(!e.formIsEmpty()){t.next=7;break}return e.warning("Please select at least something which you will subscribe !"),t.abrupt("return");case 7:return e.loading=!0,a={email:e.email,subscribeNewAssetsLocked:e.subscribeNewAssetsLocked,subscribedAssetsLocked:e.assetIDsLocked,subscribeNewAssetsDefi:e.subscribeNewAssetsDefi,subscribedAssetsDefi:e.assetIDsDefi},s="".concat(q.apiUrl,"/api/subscription/create"),t.next=12,R.a.post(s,a);case 12:e.loading=!1,e.success(),t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](0),e.loading=!1,e.error();case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()},success:function(){var e=this.$createElement;B["a"].success({title:"Success",content:e("div",[e("p",["To confirm notification subscription, click on the link in the email we just sent you."])])})},error:function(){var e=this.$createElement;B["a"].error({title:"Error !",content:e("div",[e("p",["Something went wrong, please try again later."])])})},warning:function(e){B["a"].warning({title:e})},emailIsValid:function(e){if(0===e.length)return!1;var t=/\S+@\S+\.\S+/;return t.test(e)},formIsEmpty:function(){return!this.subscribeNewAssetsLocked&&0===this.assetIDsLocked.length&&!this.subscribeNewAssetsDefi&&0===this.assetIDsDefi.length}},created:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var a,s,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a="".concat(q.apiUrl,"/api/get-staking-info"),t.next=4,R.a.get(a);case 4:s=t.sent,n=s.data.assetsLocked.map((function(e){return{label:e.asset_name,value:e.id}})),n.sort((function(e,t){return e.label<t.label?-1:e.label>t.label?1:0})),i=s.data.assetsDefi.map((function(e){return{label:e.asset_name,value:e.id}})),i.sort((function(e,t){return e.label<t.label?-1:e.label>t.label?1:0})),e.optionsLocked=n,e.optionsDefi=i,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}},W=J,X=(a("a28b"),Object(p["a"])(W,S,$,!1,null,"38b09ccc",null)),Z=X.exports,K={name:"Home",components:{AppHeader:L,AppDescription:I,AppForm:Z}},Q=K,ee=(a("4252"),Object(p["a"])(Q,k,w,!1,null,"6e8f6789",null)),te=ee.exports;o["a"].use(g["a"]);var ae=[{path:"/",name:"Home",component:te}],se=new g["a"]({mode:"history",base:"/",routes:ae}),ne=se,ie=a("2f62");o["a"].use(ie["a"]);var oe=new ie["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].use(i["a"]),o["a"].use(n["a"]),o["a"].use(s["a"]),o["a"].config.productionTip=!1,new o["a"]({router:ne,store:oe,render:function(e){return e(_)}}).$mount("#app")},"596e":function(e,t,a){},6968:function(e,t,a){"use strict";a.r(t);var s=a("96a4"),n=a.n(s);a.d(t,"LoadingOutlined",(function(){return n.a}));var i=a("bea9"),o=a.n(i);a.d(t,"ExclamationCircleOutlined",(function(){return o.a}));var r=a("5745"),c=a.n(r);a.d(t,"CheckCircleOutlined",(function(){return c.a}))},7657:function(e,t,a){"use strict";a("06c3")},"85ec":function(e,t,a){},"931a":function(e,t,a){"use strict";a("a5a8")},a28b:function(e,t,a){"use strict";a("e25e")},a5a8:function(e,t,a){},c25c:function(e,t,a){"use strict";a("f66d")},dbae:function(e,t,a){"use strict";a("596e")},e25e:function(e,t,a){},f66d:function(e,t,a){},fc32:function(e,t,a){}});
//# sourceMappingURL=app.563762d4.js.map