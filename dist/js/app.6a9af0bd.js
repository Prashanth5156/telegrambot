(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],p=0,f=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"06c3":function(e,t,n){},2790:function(e,t,n){},"3d2a":function(e,t,n){"use strict";n("2790")},4252:function(e,t,n){"use strict";n("fc32")},"4f3c":function(e,t,n){"use strict";n("a95d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("the-footer")],1)},i=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-footer"},[n("div",[e._v(" Contact: https://t.me/rdruska ")])])}],c=(n("dbae"),n("2877")),l={},u=Object(c["a"])(l,r,o,!1,null,"6ba84219",null),p=u.exports,f={name:"app",components:{TheFooter:p}},d=f,b=(n("034f"),Object(c["a"])(d,s,i,!1,null,null,null)),m=b.exports,h=(n("20c5"),n("bb76")),v=(n("a71a"),n("b558")),_=(n("e1f5"),n("5efb")),g=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("app-header"),n("div",{staticClass:"home__description-and-form"},[n("div",{staticClass:"home__description-and-form__element"},[n("app-description")],1),n("div",{staticClass:"home__description-and-form__element"},[n("app-form")],1)])],1)},k=[],y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-header"},[n("div",{staticClass:"logo"},[e._v(" BinanceStaking"),n("span",{staticClass:"app-header__logo--black"},[e._v("Watcher")])])])}],C={name:"app-header"},j=C,O=(n("61b6"),Object(c["a"])(j,y,x,!1,null,"ac531cf0",null)),E=O.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"description"},[n("div",{staticClass:"description__content"},[n("h1",[e._v(" What is it? ")]),n("p",[e._v(" Cryptocurrency staking offers a convenient way to earn interest on longer-term crypto holdings. The staking programs offered by Binance, the biggest cryptocurrency exchange by market cap, are usually under high demand and the most lucrative staking options are sold out most of the time. Binance doesn’t have a built-in system that would notify users about availability of its staking options. This bot provides this service by sending email notification immediately after a specified staking option, which was previously sold out, becomes avaliable. This is possible by constant monitoring of the Binance website ( "),n("a",{attrs:{href:"https://www.binance.com/en/pos"}},[e._v(" https://www.binance.com/en/pos ")]),e._v(" ). ")]),n("p",[e._v(" Currently it's not possible to track programs with specific length - if you follow e.g. BNB currency and it includes staking options for 30, 60 and 90 days, you will get notified when any of them becomes available. ")]),n("p",[e._v(" To take part, just fill in the form below. ")]),n("h1",{staticClass:"description__content__header"},[e._v(" About project ")]),n("p",[e._v(" The code behind this bot is available on Github: "),n("a",{attrs:{href:"https://github.com/druskacik/binance-staking-notification-bot"}},[e._v(" https://github.com/druskacik/binance-staking-notification-bot ")])]),n("p",[e._v(" Providing this bot publicly to everyone may seem anti-purpose, but as long as the community using it remains small it will not be a problem. If the demand will be too high, I will consider what are my options. ")]),n("p",[e._v(" If you want to provide any feedback or suggestions, the fastest way to contact me is via Telegram: "),n("a",{attrs:{href:"https://t.me/rdruska"}},[e._v(" https://t.me/rdruska ")])]),n("p",[e._v(" Support development of this project: ")]),n("div",{staticClass:"description__addresses"},[n("div",[e._v(" BTC: 1DkQTzGvYvqzjHFYc5Zejx9ZUNE9NbxKBv ")]),n("div",[e._v(" ETH: 0xa58bccec9364c22d2a6e5e8e30b056ff9a0dfc7c ")]),n("div",[e._v(" LTC: LViYjGcuqEwRGFrWieL4NwMTXq1Fng5XBM ")])])])])])}],A={name:"app-description"},N=A,S=(n("3d2a"),Object(c["a"])(N,T,I,!1,null,"b3a89328",null)),$=S.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-form"},[n("h1",[e._v("Set up notifications")]),n("div",{staticClass:"app-form__email-input"},[n("label",{staticClass:"app-form__label"},[e._v("Email address: ")]),n("a-input",{staticClass:"app-form__email-input__field",attrs:{placeholder:"@"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("div",{staticClass:"app-form__new-assets-checkbox"},[n("a-checkbox",{model:{value:e.subscribeNewAssets,callback:function(t){e.subscribeNewAssets=t},expression:"subscribeNewAssets"}},[e._v(" Notify me about new currencies that can be staked on Binance ")])],1),n("div",[n("div",{staticClass:"app-form__assets-checkbox-group__label"},[e._v(" Notify me about availability of staking options in following currencies: ")]),n("a-checkbox-group",{staticClass:"app-form__assets-checkbox-group",on:{change:e.assetIDChecked},model:{value:e.assetsIDs,callback:function(t){e.assetsIDs=t},expression:"assetsIDs"}},e._l(e.options,(function(t){return n("div",{key:t.value,staticClass:"app-form__assets-checkbox-group__checkbox"},[n("a-checkbox",{attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])],1)})),0)],1),n("app-form-submit-button",{attrs:{onClick:e.submitRequest,loading:e.loading}})],1)},D=[],P=(n("04f3"),n("ed3b")),F=n("1da1"),R=(n("caad"),n("2532"),n("d81d"),n("96cf"),n("bc3a")),M=n.n(R),q={apiUrl:"https://binance-staking-bot.herokuapp.com"},H=q,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-form__submit-section"},[n("a-button",{staticClass:"app-form__submit-button",attrs:{type:"primary",loading:e.loading},on:{click:e.onClick}},[n("span",{staticClass:"app-form__submit-button__text"},[e._v(" Submit ")])]),n("div",{staticClass:"app-form__submit-section--text"},[e._v(" It's free ! ")])],1)},U=[],L={name:"app-header",props:{onClick:Function,loading:Boolean}},V=L,W=(n("7657"),Object(c["a"])(V,G,U,!1,null,"677dcb42",null)),Y=W.exports,z={components:{AppFormSubmitButton:Y},name:"app-form",data:function(){return{email:"",options:[],subscribeNewAssets:!1,assetsIDs:[],loading:!1}},methods:{assetIDChecked:function(e){console.log("checked = ",e)},submitRequest:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.emailIsValid(e.email)){t.next=4;break}return e.warning("Please enter valid email address !"),t.abrupt("return");case 4:if(e.subscribeNewAssets||0!==e.assetsIDs.length){t.next=7;break}return e.warning("Please select at least something which you will subscribe !"),t.abrupt("return");case 7:return e.loading=!0,n={email:e.email,subscribeNewAssets:e.subscribeNewAssets,subscribedAssetsIDs:e.assetsIDs},a="".concat(H.apiUrl,"/api/subscription/create"),t.next=12,M.a.post(a,n);case 12:s=t.sent,console.log(s.data),e.loading=!1,e.success(),t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](0),e.loading=!1,e.error();case 22:case"end":return t.stop()}}),t,null,[[0,18]])})))()},success:function(){var e=this.$createElement;P["a"].success({title:"Success",content:e("div",[e("p",["To confirm notification subscription, click on the link in the email we just sent you."])])})},error:function(){var e=this.$createElement;P["a"].error({title:"Error !",content:e("div",[e("p",["Something went wrong, please try again later."])])})},warning:function(e){P["a"].warning({title:e})},emailIsValid:function(e){return 0!==e.length&&!!e.includes("@")}},created:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(H.apiUrl,"/api/get-staking-info"),t.next=4,M.a.get(n);case 4:a=t.sent,s=a.data.map((function(e){return{label:e.asset_name,value:e.id}})),s.sort((function(e,t){return e.label<t.label?-1:e.label>t.label?1:0})),e.options=s,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},J=z,X=(n("4f3c"),Object(c["a"])(J,B,D,!1,null,"b7596866",null)),Z=X.exports,K={name:"Home",components:{AppHeader:E,AppDescription:$,AppForm:Z}},Q=K,ee=(n("4252"),Object(c["a"])(Q,w,k,!1,null,"6e8f6789",null)),te=ee.exports;a["a"].use(_["a"]),a["a"].use(v["a"]),a["a"].use(h["a"]),a["a"].use(g["a"]);var ne=[{path:"/",name:"Home",component:te}],ae=new g["a"]({mode:"history",base:"/",routes:ne}),se=ae,ie=n("2f62");a["a"].use(ie["a"]);var re=new ie["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:se,store:re,render:function(e){return e(m)}}).$mount("#app")},"596e":function(e,t,n){},"61b6":function(e,t,n){"use strict";n("ced3")},7657:function(e,t,n){"use strict";n("06c3")},"85ec":function(e,t,n){},a95d:function(e,t,n){},ced3:function(e,t,n){},dbae:function(e,t,n){"use strict";n("596e")},fc32:function(e,t,n){}});
//# sourceMappingURL=app.6a9af0bd.js.map