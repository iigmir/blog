(function(t){function e(e){for(var r,c,o=e[0],s=e[1],u=e[2],l=0,p=[];l<o.length;l++)c=o[l],a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function c(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b48258c7"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=c(t),i=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");c.type=r,c.request=i,n[1](c)}a[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/blog/",o.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"026d":function(t,e,n){"use strict";var r=n("9e01"),a=n.n(r);a.a},"0942":function(t,e,n){},"0c15":function(t,e,n){},"31ba":function(t,e,n){},"3af5":function(t,e,n){"use strict";var r=n("0c15"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"is-container-large",attrs:{id:"app"}},[n("loading-modal"),n("Navigator"),n("router-view")],1)},i=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"is-navbar-container"},[n("div",{staticClass:"is-brand"},[n("h1",{staticClass:"is-logo"},[n("router-link",{attrs:{to:"/"}},[t._v(" My Web Blog ")])],1)]),n("div",{staticClass:"is-navbar"},[n("nav",[n("ul",[n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("li",[n("router-link",{attrs:{to:"/tags"}},[t._v("Tags")])],1)])])])])},s=[],u=(n("3af5"),n("2877")),l={},f=Object(u["a"])(l,o,s,!1,null,"919baa54",null),p=f.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-box",class:{"is-hidden":!t.data_loading},attrs:{id:"main-loading"}},[t._m(0)])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading modal is-open"},[n("div",{staticClass:"modal-body"},[n("div",{staticClass:"akadama"},[n("div")]),n("p",[t._v(" Loading... ")])])])}],d=n("2f62");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var h={name:"LoadingModal",computed:m({},Object(d["e"])(["data_loading"]))},v=h,O=(n("8ec3"),Object(u["a"])(v,_,g,!1,null,"3f8978f7",null)),y=O.exports;function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var P={name:"App",components:{Navigator:p,LoadingModal:y},created:function(){this.set_data_loading(!0),this.ajax_get_categories(),this.ajax_get_contents()},methods:w({},Object(d["b"])(["ajax_get_categories","ajax_get_contents"]),{},Object(d["d"])(["set_data_loading"]))},x=P,k=Object(u["a"])(x,a,i,!1,null,null,null),C=k.exports,D=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t.contents.length>0?n("div",{staticClass:"article-container"},t._l(t.current_articles,function(e,r){return n("article",{key:e.id,staticClass:"card"},[n("section",{on:{click:function(n){return t.read_article(e.id)}}},[n("h2",[t._v(" "+t._s(e.title)+" ")]),t._l(t.current_categories[r],function(e,r){return n("span",{key:r,staticClass:"label"},[t._v("\n                    "+t._s(e)+"\n                ")])}),e.category_id.length<1?n("span",{staticClass:"empty-label"}):t._e()],2)])}),0):n("div",{staticClass:"article-container"},[n("p",[t._v(" 抱歉，外部資料載入失敗。一段時間後，再回來看吧？ ")])]),n("footpage-pager")],1)},S=[],$=n("75fc"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"pager"},[n("a",{staticClass:"is-prev",class:{"is-disabled":0===t.main_page_index},attrs:{href:"#"},on:{click:function(e){return t.switch_pages_by_arrow("prev")}}}),t._l(t.contents_pages,function(e){return n("a",{key:e,staticClass:"desktop-mode",class:{"is-active":t.main_page_index===e-1},on:{click:function(n){return t.switch_pages_by_number(e)}}},[t._v("\n        "+t._s(e)+"\n    ")])}),n("span",{staticClass:"is-current mobile-mode"},[t._v(" "+t._s(t.main_page_index+1)+" of "+t._s(t.contents_pages)+" ")]),n("a",{staticClass:"is-next",class:{"is-disabled":t.main_page_index===t.contents_pages-1},attrs:{href:"#"},on:{click:function(e){return t.switch_pages_by_arrow("next")}}})],2)},T=[];function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var F={name:"FootpagePager",computed:L({},Object(d["e"])(["main_page_index"]),{},Object(d["c"])(["contents_by_groups"]),{contents_pages:function(){return this.contents_by_groups.length}}),methods:L({},Object(d["d"])(["set_main_page_index"]),{switch_pages_by_number:function(t){this.set_main_page_index(t-1)},switch_pages_by_arrow:function(t){var e={prev:0,next:this.contents_pages-1},n={prev:-1,next:1};this.main_page_index!==e[t]&&this.set_main_page_index(this.main_page_index+n[t])}})},I=F,J=(n("8124"),Object(u["a"])(I,M,T,!1,null,"331dec3f",null)),N=J.exports;function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var V={name:"Main",components:{FootpagePager:N},computed:B({},Object(d["e"])(["categories","contents","main_page_index"]),{},Object(d["c"])(["contents_by_groups"]),{contents_from_new_by_group:function(){var t=Object($["a"])(this.contents_by_groups);return t.reverse()},current_articles:function(){var t=[];return this.contents_from_new_by_group.length>0&&(t=Object($["a"])(this.contents_from_new_by_group[this.main_page_index])),t.reverse()},current_categories:function(){var t=this,e=this.contents_from_new_by_group.length>0&&this.categories.length>0;return e?this.current_articles.map(function(t){return t.category_id}).map(function(e){return e.map(function(e){return t.categories.filter(function(t){return e===t.id})[0].tag_name})}):[]}}),methods:B({},Object(d["b"])(["ajax_get_article"]),{read_article:function(t){this.ajax_get_article(t),this.$router.push({name:"Article",params:{id:t}})}})},W=V,z=(n("f791"),Object(u["a"])(W,E,S,!1,null,"85692930",null)),G=z.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[!0===t.article_exist&&!1===t.article_empty?n("article",[n("div",{staticClass:"article-gap"},[n("h2",[t._v(" "+t._s(t.article_info.title)+" ")])]),n("div",{staticClass:"article-gap"},t._l(t.current_categories,function(e,r){return n("router-link",{key:r,staticClass:"label",attrs:{to:t.tag_link(r)}},[t._v("\n                "+t._s(e)+"\n            ")])}),1),n("div",{staticClass:"article-gap"},[n("vue-markdown",{attrs:{source:t.article}})],1)]):n("article",[n("div",{staticClass:"article-gap"},[n("h2",[t._v(" 載入失敗！ ")]),n("p",[t._v(" 可能有很多原因使載入失敗，要不要"),n("router-link",{attrs:{to:"/"}},[t._v("回首頁")]),t._v("看其他文章？ ")],1)])])])},K=[],Q=n("9ce6"),R=n.n(Q);function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Y={name:"Article",components:{VueMarkdown:R.a},computed:X({},Object(d["e"])(["article","categories","contents"]),{article_empty:function(){return""===this.article},article_info:function(){var t=this;return this.contents.filter(function(e){return e.id===parseInt(t.$route.params.id,10)})[0]},article_exist:function(){return void 0!==this.article_info},current_categories:function(){var t=this,e=this.article_exist&&this.categories.length>0,n=[];return e&&(n=this.article_info.category_id.map(function(e){return t.categories.filter(function(t){return e===t.id})[0].tag_name})),n}}),methods:X({},Object(d["d"])(["set_article"]),{},Object(d["b"])(["ajax_get_article"]),{tag_link:function(t){var e="Tags",n={id:this.article_info.category_id[t]};return{name:e,params:n}}}),created:function(){this.article_empty&&this.ajax_get_article(this.$route.params.id)},beforeDestroy:function(){this.set_article("")}},Z=Y,tt=(n("e2d7"),Object(u["a"])(Z,H,K,!1,null,"1e6266f6",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[!0===t.modal_flag?n("TagListModal",{attrs:{tag:t.selected_tag},on:{clear_tag:function(e){return t.clear_tag()}}}):t._e(),t._l(t.categories,function(e){return n("button",{key:e.id,staticClass:"button is-large",on:{click:function(n){return t.change_tag(e)}}},[t._v("\n        "+t._s(e.tag_name)+"\n    ")])})],2)},rt=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-box",attrs:{id:"tag-has-article"},on:{click:function(e){return t.clear_tag()}}},[n("div",{staticClass:"loading modal is-open"},[n("span",{staticClass:"close",on:{click:function(e){return t.clear_tag()}}}),n("div",{staticClass:"modal-header"},[t._v(t._s(t.tag.tag_name)+" 的文章：")]),n("div",{staticClass:"modal-body"},[n("ol",t._l(t.articles_has_current_tag,function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"Article",params:{id:e.id}}}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])],1)}),0)])])])},it=[];function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var st={name:"TagList",props:{tag:{type:Object,default:function(){return{tag_name:"",id:null}}}},computed:ot({},Object(d["e"])(["data_loading","contents"]),{},Object(d["c"])(["contents_by_groups"]),{articles_has_current_tag:function(){var t=this;return this.contents.filter(function(e){return e.category_id.some(function(e){return e===t.tag.id})})}}),methods:{clear_tag:function(){this.$emit("clear_tag")}}},ut=st,lt=(n("687b"),Object(u["a"])(ut,at,it,!1,null,"f7001fa6",null)),ft=lt.exports,pt={name:"Tags",data:function(){return{modal_flag:!1,selected_tag:{}}},components:{TagListModal:ft},computed:Object(d["e"])(["categories","contents"]),watch:{categories:function(){var t=this,e=function(e){var n=parseInt(t.$route.params.id,10);return e.id===n},n=[];void 0!==this.$route.params.id&&(n=this.categories.filter(function(t){return e(t)}),n.length>0&&this.change_tag(n[0]))}},created:function(){var t=this;if(void 0!==this.$route.params.id){var e=this.categories.filter(function(e){return String(e.id)===String(t.$route.params.id)})[0];this.change_tag(e)}},methods:{change_tag:function(t){this.modal_flag=!0,this.selected_tag=t},clear_tag:function(){this.modal_flag=!1,this.selected_tag={}}}},_t=pt,gt=(n("026d"),Object(u["a"])(_t,nt,rt,!1,null,"0c4e10ab",null)),dt=gt.exports;r["a"].use(D["a"]);var bt=new D["a"]({mode:"hash",base:"/blog/",routes:[{path:"/",name:"Main",component:G},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/article/:id",name:"Article",component:et},{path:"/tags/:id?",name:"Tags",component:dt}]}),mt=n("bc3a"),ht=n.n(mt);r["a"].use(d["a"]);var vt="https://raw.githubusercontent.com/iigmir/blog-source/master/",Ot=new d["a"].Store({state:{categories:[],contents:[],article:"",main_page_index:0,data_loading:!0},getters:{contents_by_groups:function(t){var e=function(e,n){var r=5,a=t.contents.slice(n,n+r);return n%r===0?a:null},n=t.contents.map(function(t,n){return e(t,n)}).filter(function(t){return t});return n}},mutations:{set_categories:function(t,e){t.categories=e},set_contents:function(t,e){t.contents=e},set_main_page_index:function(t,e){t.main_page_index=e},set_article:function(t,e){t.article=e},set_data_loading:function(t,e){t.data_loading=e}},actions:{ajax_get_categories:function(t){var e=t.commit,n=vt+"info-files/categories.json",r=ht.a.get(n);r.then(function(t){return e("set_categories",t.data)})},ajax_get_contents:function(t){var e=t.commit,n=vt+"info-files/contents.json",r=ht.a.get(n);r.then(function(t){return e("set_contents",t.data)}),r.finally(function(){return e("set_data_loading",!1)})},ajax_get_article:function(t,e){var n=t.commit,r=["","00","0"][String(e).length]||"",a="".concat(vt,"articles/").concat(r+String(e),".md"),i=ht.a.get(a);n("set_data_loading",!0),i.then(function(t){return n("set_article",t.data)}),i.finally(function(){return n("set_data_loading",!1)})}}});n("df2c"),n("ffb9");r["a"].config.productionTip=!1,new r["a"]({router:bt,store:Ot,render:function(t){return t(C)}}).$mount("#app")},"5a95":function(t,e,n){},6292:function(t,e,n){},"687b":function(t,e,n){"use strict";var r=n("0942"),a=n.n(r);a.a},8124:function(t,e,n){"use strict";var r=n("84dc"),a=n.n(r);a.a},"84dc":function(t,e,n){},"8ec3":function(t,e,n){"use strict";var r=n("6292"),a=n.n(r);a.a},"9e01":function(t,e,n){},df2c:function(t,e,n){},e2d7:function(t,e,n){"use strict";var r=n("5a95"),a=n.n(r);a.a},f791:function(t,e,n){"use strict";var r=n("31ba"),a=n.n(r);a.a},ffb9:function(t,e,n){}});
//# sourceMappingURL=app.02cfbdd9.js.map