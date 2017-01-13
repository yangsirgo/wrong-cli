/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var b_v = navigator.appVersion;
	var IE6 = b_v.search(/MSIE 6/i) != -1;
	var IE7 = b_v.search(/MSIE 7/i) != -1;
	if (IE6||IE7){
	    __webpack_require__(2)
	}

	//require('../ie7-js/lib/IE7.js')

	__webpack_require__(3)
	__webpack_require__(6)
	var $ = __webpack_require__(8)

	var avalon = __webpack_require__(9)
	__webpack_require__(10)
	var a = __webpack_require__(13)
	var b = __webpack_require__(14)
	var c = __webpack_require__(15)

	var vm = avalon.define({
	    $id: 'test',
	    main: '',
	    searchData:{
	        CONTENT:{
	            titledata:{
	                tabs:[{
	                    chexingmingcheng:[]
	                }]
	            }
	        }
	    },
	    //左侧导航列表数据
	    catData:{},
	    //车系频道数据
	    firstbarData:{},
	    //车系频道tabs数据
	    channel_tab:[],
	    //tabs
	    tabspropsdata:[],
	    //车系图片数据
	    chexiimageData:{},
	    //车系视频数据
	    chexivideoDataparent:{},
	    //品牌车系数据
	    brandDataparent:{},
	    //经销商优惠列表数据
	    brandlistDataparent:[],
	    //经销商优惠数据
	    mapchannelData:{},
	    aaa: "第一页的内容",
	    bbb: "第二页的内容",
	    ccc: "第三页的内容",
	    tabToggle:function(arr,e){
	        vm.tabspropsdata = arr;
	        $(e.target.parentNode).find(".underline").removeClass("underline")
	        avalon(e.target).addClass("underline");
	    }
	})
	avalon.ready(getAjax);

	//    车系视频
	avalon.component("Chexivedio-view",{
	    template:heredoc(function () {
	        /*<div class="video_channel">
	         <h6>
	         <a ms-attr="{href:@chexivideoData.chexishipinnameUrl}" target="_blank" title=""><span>{{@chexivideoData.chexishipinname}}</span>-车系视频-原创视频-评测视频</a>
	         </h6>
	         <div class="img_channel_li">
	         <ul>
	         <li ms-for="elem in @chexivideoData.shipinUrl">
	         <a ms-attr="{href:@elem.url}" target="_blank" title="">
	         <img ms-attr="{src:@elem.imageUrl}"  title="" alt=""  width="120" height="90" >
	         </a>
	         <i></i>
	         </li>
	         </ul>
	         </div>
	         <div class="img_channel_link">
	         <a ms-attr="{href:@chexivideoData.gengduoshipinUrl}" target="_blank" title="" alt="">查看更多<span>{{@chexivideoData.chexishipinname}}</span>相关视频 >></a>
	         </div>
	         </div>*/}),
	    defaults:{
	        chexivideoData:{}
	    }
	})
	//经销商优惠列表组件
	var test = avalon.component("brandlist-view",{
	    template:heredoc(function () {
	        /*
	         <div class="brand_list">
	         <dl class="brand_list_dl" ms-for="elem in @brandlistData">
	         <dt><a ms-attr="{href:elem.url}" target="_blank" title="">深圳2013款<span>{{elem.title}}</span>现车供应　购车暂无优惠</a></dt>
	         <dd class="brand_car_str">{{elem.content}}</dd>
	         <dd class="brand_car_ber">{{elem.xinchezixun}}   <i>{{elem.data}}</i>   评论：<span>{{elem.pinglunshuliang}}</span>   赞：<span>{{elem.zanshuliang}}</span>  </dd>
	         </dl>
	         </div>*/
	    }),
	    defaults:{
	        brandlistData:[]
	    }
	})

	var map = {
	    'aaa': a,
	    'bbb': b,
	    'ccc': c
	}

	//添加路由规则
	avalon.router.add("/:tabs", function (param) {
	    vm.main = map[param]
	})

	//启动路由监听
	avalon.history.start({
	    root: "/mmRouter",
	    hashPrefix: ""
	})

	        if (IE6||IE7){
	            // var hash = location.hash.replace(/#!?/, '')
	            avalon.router.navigate(hash || '/aaa', 0)//不记录历史
	        }else{
	            var hash = location.hash.replace(/#!?/, '')
	            avalon.router.navigate(hash || '/aaa', 1)//默认打开
	        }

	avalon.scan(document.body)


	//    获取数据
	function getAjax(){
	    $.ajax({
	        url: 'dist/styles/json/json.json',
	        success: function(data){
	            vm.searchData = data;
	            //左侧导航列表数据
	            vm.catData = data.CAT;
	            //车系频道数据
	            vm.firstbarData = data.CONTENT.titledata.contenttitle;
	            //车系频道tabs数据
	            vm.channel_tab = data.CONTENT.titledata.tabs;
	            vm.tabspropsdata = data.CONTENT.titledata.tabs[0].chexingmingcheng;
	            //车系图片数据
	            vm.chexiimageData = data.CONTENT.chexitupian;
	            //车系视频数据
	            vm.chexivideoDataparent = data.CONTENT.chexishipin;
	            //品牌车系数据
	            vm.brandDataparent = data.CONTENT.chexishipin2;
	            //经销商优惠列表数据
	            vm.brandlistDataparent = data.CONTENT.chexishipin2.chexiguanggaobrand;
	            //经销商优惠数据
	            vm.mapchannelData = data.CONTENT.jingxiaoshangyouhui;
	        }
	    });
	}

	//获取html字符串
	function heredoc(fn) {
	    return fn.toString().replace(/^[^\/]+\/\*!?\s?/, '').
	        replace(/\*\/[^\/]+$/, '').trim().replace(/>\s*</g, '><')
	}



/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
	  IE7/IE8/IE9.js - copyright 2004-2010, Dean Edwards
	  http://code.google.com/p/ie7-js/
	  http://www.opensource.org/licenses/mit-license.php
	*/
	;(function(J,r){var i=J.IE7={version:"2.1(beta4)",toString:bE("[IE7]")};i.compat=7;var t=i.appVersion=navigator.appVersion.match(/MSIE (\d\.\d)/)[1]-0;if(/ie7_off/.test(top.location.search)||t<5.5||t>=i.compat)return;var B=t<6,bc=bE(),bn=r.documentElement,z,w,cc="!",W=":link{ie7-link:link}:visited{ie7-link:visited}",cd=/^[\w\.]+[^:]*$/;function bd(b,a){if(cd.test(b))b=(a||"")+b;return b};function bo(b,a){b=bd(b,a);return b.slice(0,b.lastIndexOf("/")+1)};var bF=r.scripts[r.scripts.length-1],ce=bo(bF.src);try{var P=new ActiveXObject("Microsoft.XMLHTTP")}catch(ex){}var be={};function cf(b,a){try{b=bd(b,a);if(!be[b]){P.open("GET",b,false);P.send();if(P.status==0||P.status==200){be[b]=P.responseText}}}catch(ex){}return be[b]||""};var cZ=Array.prototype.slice,da=/%([1-9])/g,cg=/^\s\s*/,ch=/\s\s*$/,ci=/([\/()[\]{}|*+-.,^$?\\])/g,bG=/\bbase\b/,bH=["constructor","toString"],bf;function C(){};C.extend=function(f,d){bf=true;var c=new this;bg(c,f);bf=false;var b=c.constructor;function a(){if(!bf)b.apply(this,arguments)};c.constructor=a;a.extend=arguments.callee;bg(a,d);a.prototype=c;return a};C.prototype.extend=function(a){return bg(this,a)};var K="#",L="#",X=".",bh="/",db=/\\(\d+)/g,cj=/\[(\\.|[^\]\\])+\]|\\.|\(\?/g,ck=/\(/g,cl=/\$(\d+)/,cm=/^\$\d+$/,cn=/(\[(\\.|[^\]\\])+\]|\\.|\(\?)|\(/g,co=/^<#\w+>$/,cp=/<#(\w+)>/g,D=C.extend({constructor:function(a){this[X]=[];this[L]={};this.merge(a)},add:function(b,a){delete this[bh];if(b instanceof RegExp){b=b.source}if(!this[K+b])this[X].push(String(b));return this[L][K+b]=new D.Item(b,a,this)},compile:function(a){if(a||!this[bh]){this[bh]=new RegExp(this,this.ignoreCase?"gi":"g")}return this[bh]},merge:function(b){for(var a in b)this.add(a,b[a])},exec:function(m){var j=this,l=j[X],k=j[L],h,g=this.compile(true).exec(m);if(g){var f=0,d=1;while((h=k[K+l[f++]])){var c=d+h.length+1;if(g[d]){if(h.replacement===0){return j.exec(m)}else{var b=g.slice(d,c),a=b.length;while(--a)b[a]=b[a]||"";b[0]={match:b[0],item:h};return b}}d=c}}return null},parse:function(m){m+="";var j=this,l=j[X],k=j[L];return m.replace(this.compile(),function(h){var g=[],f,d=1,c=arguments.length;while(--c)g[c]=arguments[c]||"";while((f=k[K+l[c++]])){var b=d+f.length+1;if(g[d]){var a=f.replacement;switch(typeof a){case"function":return a.apply(j,g.slice(d,b));case"number":return g[d+a];default:return a}}d=b}return h})},toString:function(){var f=[],d=this[X],c=this[L],b;for(var a=0;b=c[K+d[a]];a++){f[a]=b.source}return"("+f.join(")|(")+")"}},{IGNORE:null,Item:C.extend({constructor:function(j,l,k){var h=j.indexOf("(")===-1?0:D.count(j),g=k.dictionary;if(g&&j.indexOf("<#")!==-1){if(co.test(j)){var f=g[L][K+j.slice(2,-1)];j=f.replacement;h=f._4}else{j=g.parse(j)}}if(typeof l=="number")l=String(l);else if(l==null)l=0;if(typeof l=="string"&&cl.test(l)){if(cm.test(l)){var d=l.slice(1)-0;if(d&&d<=h)l=d}else{var c=l,b;l=function(a){if(!b){b=new RegExp(j,"g"+(this.ignoreCase?"i":""))}return a.replace(b,c)}}}this.length=h;this.source=String(j);this.replacement=l}}),count:function(a){return(String(a).replace(cj,"").match(ck)||"").length}}),cq=D.extend({parse:function(d){var c=this[L];return d.replace(cp,function(b,a){a=c[K+a];return a?a._5:b})},add:function(f,d){if(d instanceof RegExp){d=d.source}var c=d.replace(cn,cr);if(d.indexOf("(")!==-1){var b=D.count(d)}if(d.indexOf("<#")!==-1){d=this.parse(d);c=this.parse(c)}var a=this.base(f,d);a._5=c;a._4=b||a.length;return a},toString:function(){return"(<#"+this[PATTERNS].join(">)|(<#")+">)"}});function cr(b,a){return a||"(?:"};function bg(g,f){if(g&&f){var d=(typeof f=="function"?Function:Object).prototype;var c=bH.length,b;if(bf)while(b=bH[--c]){var a=f[b];if(a!=d[b]){if(bG.test(a)){bI(g,b,a)}else{g[b]=a}}}for(b in f)if(typeof d[b]=="undefined"){var a=f[b];if(g[b]&&typeof a=="function"&&bG.test(a)){bI(g,b,a)}else{g[b]=a}}}return g};function bI(g,f,d){var c=g[f];g[f]=function(){var b=this.base;this.base=c;var a=d.apply(this,arguments);this.base=b;return a}};function cs(d,c){if(!c)c=d;var b={};for(var a in d)b[a]=c[a];return b};function M(f){var d=arguments,c=new RegExp("%([1-"+arguments.length+"])","g");return String(f).replace(c,function(b,a){return a<d.length?d[a]:b})};function bi(b,a){return String(b).match(a)||[]};function ct(a){return String(a).replace(ci,"\\$1")};function bJ(a){return String(a).replace(cg,"").replace(ch,"")};function bE(a){return function(){return a}};var bK=D.extend({ignoreCase:true}),cu=/'/g,bL=/'(\d+)'/g,dc=/\\/g,bp=/\\([nrtf'"])/g,Q=[],cv=new bK({"<!\\-\\-|\\-\\->":"","\\/\\*[^*]*\\*+([^\\/][^*]*\\*+)*\\/":"","@(namespace|import)[^;\\n]+[;\\n]":"","'(\\\\.|[^'\\\\])*'":bM,'"(\\\\.|[^"\\\\])*"':bM,"\\s+":" "});function cw(a){return cv.parse(a).replace(bp,"$1")};function bq(a){return a.replace(bL,cx)};function bM(b){var a=Q.length;Q[a]=b.slice(1,-1).replace(bp,"$1").replace(cu,"\\'");return"'"+a+"'"};function cx(c,b){var a=Q[b];if(a==null)return c;return"'"+Q[b]+"'"};function bN(a){return a.indexOf("'")===0?Q[a.slice(1,-1)]:a};var cy=new D({Width:"Height",width:"height",Left:"Top",left:"top",Right:"Bottom",right:"bottom",onX:"onY"});function bO(a){return cy.parse(a)};var bP=[];function br(a){cz(a);A(J,"onresize",a)};function A(c,b,a){c.attachEvent(b,a);bP.push(arguments)};function cA(c,b,a){try{c.detachEvent(b,a)}catch(ex){}};A(J,"onunload",function(){var a;while(a=bP.pop()){cA(a[0],a[1],a[2])}});function Y(c,b,a){if(!c.elements)c.elements={};if(a)c.elements[b.uniqueID]=b;else delete c.elements[b.uniqueID];return a};A(J,"onbeforeprint",function(){if(!i.CSS.print)new bQ("print");i.CSS.print.recalc()});var bR=/^\d+(px)?$/i,R=/^\d+%$/,E=function(d,c){if(bR.test(c))return parseInt(c);var b=d.style.left,a=d.runtimeStyle.left;d.runtimeStyle.left=d.currentStyle.left;d.style.left=c||0;c=d.style.pixelLeft;d.style.left=b;d.runtimeStyle.left=a;return c},bs="ie7-",bS=C.extend({constructor:function(){this.fixes=[];this.recalcs=[]},init:bc}),bt=[];function cz(a){bt.push(a)};i.recalc=function(){i.HTML.recalc();i.CSS.recalc();for(var a=0;a<bt.length;a++)bt[a]()};function bj(a){return a.currentStyle["ie7-position"]=="fixed"};function bu(b,a){return b.currentStyle[bs+a]||b.currentStyle[a]};function S(c,b,a){if(c.currentStyle[bs+b]==null){c.runtimeStyle[bs+b]=c.currentStyle[b]}c.runtimeStyle[b]=a};function bT(b){var a=r.createElement(b||"object");a.style.cssText="position:absolute;padding:0;display:block;border:none;clip:rect(0 0 0 0);left:-9999";a.ie7_anon=true;return a};var cB="(e.nextSibling&&IE7._1(e,'next'))",cC=cB.replace(/next/g,"previous"),bU="e.nodeName>'@'",bV="if("+bU+"){",cD="(e.nodeName==='FORM'?IE7._0(e,'id'):e.id)",cE=/a(#[\w-]+)?(\.[\w-]+)?:(hover|active)/i,cF=/(.*)(:first-(line|letter))/,cG=/\s/,cH=/((?:\\.|[^{\\])+)\{((?:\\.|[^}\\])+)\}/g,cI=/(?:\\.|[^,\\])+/g,F=r.styleSheets,cJ=[];i.CSS=new(bS.extend({parser:new bK,screen:"",print:"",styles:[],rules:[],pseudoClasses:t<7?"first\\-child":"",dynamicPseudoClasses:{toString:function(){var b=[];for(var a in this)b.push(a);return b.join("|")}},init:function(){var h="^\x01$",g="\\[class=?[^\\]]*\\]",f=[];if(this.pseudoClasses)f.push(this.pseudoClasses);var d=this.dynamicPseudoClasses.toString();if(d)f.push(d);f=f.join("|");var c=t<7?["[>+~\\[(]|([:.])[\\w-]+\\1"]:[g];if(f)c.push(":("+f+")");this.UNKNOWN=new RegExp(c.join("|")||h,"i");var b=t<7?["\\[[^\\]]+\\]|[^\\s(\\[]+\\s*[+~]"]:[g],a=b.concat();if(f)a.push(":("+f+")");s.COMPLEX=new RegExp(a.join("|")||h,"ig");if(this.pseudoClasses)b.push(":("+this.pseudoClasses+")");Z.COMPLEX=new RegExp(b.join("|")||h,"i");d="not\\(:"+d.split("|").join("\\)|not\\(:")+"\\)|"+d;Z.MATCH=new RegExp(d?"(.*?):("+d+")(.*)":h,"i");this.createStyleSheet();this.refresh()},addEventHandler:function(){A.apply(null,arguments)},addFix:function(b,a){this.parser.add(b,a)},addRecalc:function(g,f,d,c){g=g.source||g;f=new RegExp("([{;\\s])"+g+"\\s*:\\s*"+f+"[^;}]*");var b=this.recalcs.length;if(typeof c=="string")c=g+":"+c;this.addFix(f,function(a){if(typeof c=="function")c=c(a);return(c?c:a)+";ie7-"+a.slice(1)+";ie7_recalc"+b+":1"});this.recalcs.push(arguments);return b},apply:function(){this.getInlineCSS();new bQ("screen");this.trash()},createStyleSheet:function(){r.getElementsByTagName("head")[0].appendChild(r.createElement("style"));this.styleSheet=F[F.length-1];this.styleSheet.ie7=true;this.styleSheet.owningElement.ie7=true;this.styleSheet.cssText=W},getInlineCSS:function(){var c=r.getElementsByTagName("style"),b;for(var a=c.length-1;b=c[a];a--){if(!b.disabled&&!b.ie7){b._6=b.innerHTML}}},getText:function(c,b){try{var a=c.cssText}catch(e){a=""}if(P)a=cf(c.href,b)||a;return a},recalc:function(){this.screen.recalc();var n=/ie7_recalc\d+/g,q=W.match(/[{,]/g).length,m=this.styleSheet.rules,j,l,k,h,g,f,d,c,b;for(f=q;j=m[f];f++){var a=j.style.cssText;if(l=a.match(n)){h=N(j.selectorText);if(h.length)for(d=0;d<l.length;d++){b=l[d];k=i.CSS.recalcs[b.slice(10)][2];for(c=0;(g=h[c]);c++){if(g.currentStyle[b])k(g,a)}}}}},refresh:function(){this.styleSheet.cssText=W+this.screen+this.print},trash:function(){for(var b=0;b<F.length;b++){if(!F[b].ie7){try{var a=F[b].cssText}catch(e){a=""}if(a)F[b].cssText=""}}}}));var bQ=C.extend({constructor:function(a){this.media=a;this.load();i.CSS[a]=this;i.CSS.refresh()},createRule:function(c,b){var a;if(bv&&(a=c.match(bv.MATCH))){return new bv(a[1],a[2],b)}else if(a=c.match(Z.MATCH)){if(!cE.test(a[0])||Z.COMPLEX.test(a[0])){return new Z(c,a[1],a[2],a[3],b)}}else{return new s(c,b)}return c+" {"+b+"}"},getText:function(){var u=/@media\s+([^{]+?)\s*\{([^@]+\})\s*\}/gi,T=/@import[^;\n]+/gi,O=/@import\s+url\s*\(\s*["']?|["']?\s*\)\s*/gi,U=/(url\s*\(\s*['"]?)([\w\.]+[^:\)]*['"]?\))/gi,G=this,H={};function x(j,l,k,h){var g="";if(!h){k=n(j.media);h=0}if(k==="none"){j.disabled=true;return""}if(k==="all"||k===G.media){try{var f=!!j.cssText}catch(exe){}if(h<3&&f){var d=j.cssText.match(T);for(var c=0,b;c<j.imports.length;c++){var b=j.imports[c];var a=j._2||j.href;b._2=d[c].replace(O,"");g+=x(b,bo(a,l),k,h+1)}}g+=cw(j.href?q(j,l):j.owningElement._6);g=y(g,G.media)}return g};for(var v=0;v<F.length;v++){var o=F[v];if(!o.disabled&&!o.ie7)this.cssText+=x(o)}function y(b,a){p.value=a;return b.replace(u,p)};function p(c,b,a){b=n(b);switch(b){case"screen":case"print":if(b!==p.value)return"";case"all":return a}return""};function n(c){if(!c)return"all";var b=c.toLowerCase().split(/\s*,\s*/);c="none";for(var a=0;a<b.length;a++){if(b[a]==="all")return"all";if(b[a]==="screen"){if(c==="print")return"all";c="screen"}else if(b[a]==="print"){if(c==="screen")return"all";c="print"}}return c};function q(d,c){var b=d._2||d.href,a=bd(b,c);if(H[a])return"";H[a]=d.disabled?"":m(i.CSS.getText(d,c),bo(b,c));return H[a]};function m(b,a){return b.replace(U,"$1"+a.slice(0,a.lastIndexOf("/")+1)+"$2")}},load:function(){this.cssText="";this.getText();this.parse();if(cJ.length){this.cssText=parseInherited(this.cssText)}this.cssText=bq(this.cssText);be={}},parse:function(){var h=i.CSS.parser.parse(this.cssText),m="";this.cssText=h.replace(/@charset[^;]+;|@font\-face[^\}]+\}/g,function(a){m+=a+"\n";return""});this.declarations=bq(m);var j=i.CSS.rules.length,l=[],k;while((k=cH.exec(this.cssText))){var h=k[2];if(h){var g=t<7&&h.indexOf("AlphaImageLoader")!==-1;var f=k[1].match(cI),d;for(var c=0;d=f[c];c++){d=bJ(d);var b=i.CSS.UNKNOWN.test(d);f[c]=b?this.createRule(d,h):d+"{"+h+"}";if(g)f[c]+=this.createRule(d+">*","position:relative")}l.push(f.join("\n"))}}this.cssText=l.join("\n");this.rules=i.CSS.rules.slice(j)},recalc:function(){var b,a;for(a=0;(b=this.rules[a]);a++)b.recalc()},toString:function(){return this.declarations+"@media "+this.media+"{"+this.cssText+"}"}}),bv,s=i.Rule=C.extend({constructor:function(c,b){this.id=i.CSS.rules.length;this.className=s.PREFIX+this.id;var a=c.match(cF);this.selector=(a?a[1]:c)||"*";this.selectorText=this.parse(this.selector)+(a?a[2]:"");this.cssText=b;this.MATCH=new RegExp("\\s"+this.className+"(\\s|$)","g");i.CSS.rules.push(this);this.init()},init:bc,add:function(a){a.className+=" "+this.className},recalc:function(){var b=N(this.selector);for(var a=0;a<b.length;a++)this.add(b[a])},parse:function(f){var d=f.replace(s.CHILD," ").replace(s.COMPLEX,"");if(t<7)d=d.replace(s.MULTI,"");var c=bi(d,s.TAGS).length-bi(f,s.TAGS).length,b=bi(d,s.CLASSES).length-bi(f,s.CLASSES).length+1;while(b>0&&s.CLASS.test(d)){d=d.replace(s.CLASS,"");b--}while(c>0&&s.TAG.test(d)){d=d.replace(s.TAG,"$1*");c--}d+="."+this.className;b=Math.min(b,2);c=Math.min(c,2);var a=-10*b-c;if(a>0){d=d+","+s.MAP[a]+" "+d}return d},remove:function(a){a.className=a.className.replace(this.MATCH,"$1")},toString:function(){return M("%1 {%2}",this.selectorText,this.cssText)}},{CHILD:/>/g,CLASS:/\.[\w-]+/,CLASSES:/[.:\[]/g,MULTI:/(\.[\w-]+)+/g,PREFIX:"ie7_class",TAG:/^\w+|([\s>+~])\w+/,TAGS:/^\w|[\s>+~]\w/g,MAP:{"1":"html","2":"html body","10":".ie7_html","11":"html.ie7_html","12":"html.ie7_html body","20":".ie7_html .ie7_body","21":"html.ie7_html .ie7_body","22":"html.ie7_html body.ie7_body"}}),Z=s.extend({constructor:function(f,d,c,b,a){this.negated=c.indexOf("not")===0;if(this.negated)c=c.slice(5,-1);this.attach=d||"*";this.dynamicPseudoClass=i.CSS.dynamicPseudoClasses[c];this.target=b;this.base(f,a)},recalc:function(){var d=N(this.attach),c;for(var b=0;c=d[b];b++){var a=this.target?N(this.target,c):[c];if(a.length)this.dynamicPseudoClass.apply(c,a,this)}}}),cK=C.extend({constructor:function(b,a){this.name=b;this.apply=a;this.instances={};i.CSS.dynamicPseudoClasses[b]=this},register:function(f,d){var c=f[2];if(!d&&c.negated){this.unregister(f,true)}else{f.id=c.id+f[0].uniqueID;if(!this.instances[f.id]){var b=f[1],a;for(a=0;a<b.length;a++)c.add(b[a]);this.instances[f.id]=f}}},unregister:function(f,d){var c=f[2];if(!d&&c.negated){this.register(f,true)}else{if(this.instances[f.id]){var b=f[1],a;for(a=0;a<b.length;a++)c.remove(b[a]);delete this.instances[f.id]}}}}),bk=new cK("hover",function(b){var a=arguments;i.CSS.addEventHandler(b,"onmouseenter",function(){bk.register(a)});i.CSS.addEventHandler(b,"onmouseleave",function(){bk.unregister(a)})});A(r,"onmouseup",function(){var b=bk.instances;for(var a in b)if(!b[a][0].contains(event.srcElement))bk.unregister(b[a])});var bW={"=":"%1==='%2'","~=":"(' '+%1+' ').indexOf(' %2 ')!==-1","|=":"%1==='%2'||%1.indexOf('%2-')===0","^=":"%1.indexOf('%2')===0","$=":"%1.slice(-'%2'.length)==='%2'","*=":"%1.indexOf('%2')!==-1"};bW[""]="%1!=null";var bw={"<#attr>":function(f,d,c,b){var a="IE7._0(e,'"+d+"')";b=bN(b);if(c.length>1){if(!b||c==="~="&&cG.test(b)){return"false&&"}a="("+a+"||'')"}return"("+M(bW[c],a,b)+")&&"},"<#id>":cD+"==='$1'&&","<#class>":"e.className&&(' '+e.className+' ').indexOf(' $1 ')!==-1&&",":first-child":"!"+cC+"&&",":link":"e.currentStyle['ie7-link']=='link'&&",":visited":"e.currentStyle['ie7-link']=='visited'&&"};i.HTML=new(bS.extend({fixed:{},init:bc,addFix:function(){this.fixes.push(arguments)},apply:function(){for(var d=0;d<this.fixes.length;d++){var c=N(this.fixes[d][0]);var b=this.fixes[d][1];for(var a=0;a<c.length;a++)b(c[a])}},addRecalc:function(){this.recalcs.push(arguments)},recalc:function(){for(var h=0;h<this.recalcs.length;h++){var g=N(this.recalcs[h][0]);var f=this.recalcs[h][1],d;var c=Math.pow(2,h);for(var b=0;(d=g[b]);b++){var a=d.uniqueID;if((this.fixed[a]&c)===0){d=f(d)||d;this.fixed[a]|=c}}}}}));if(t<7){r.createElement("abbr");i.HTML.addRecalc("label",function(b){if(!b.htmlFor){var a=N("input,textarea",b,true);if(a){A(b,"onclick",function(){a.click()})}}})}var bl="[.\\d]";(function(){var u=i.Layout={};W+="*{boxSizing:content-box}";u.boxSizing=function(a){if(!a.currentStyle.hasLayout){a.style.height="0cm";if(a.currentStyle.verticalAlign==="auto")a.runtimeStyle.verticalAlign="top";T(a)}};function T(a){if(a!=w&&a.currentStyle.position!=="absolute"){O(a,"marginTop");O(a,"marginBottom")}};function O(f,d){if(!f.runtimeStyle[d]){var c=f.parentElement;var b=d==="marginTop";if(c&&c.currentStyle.hasLayout&&!i._1(f,b?"previous":"next"))return;var a=f[b?"firstChild":"lastChild"];if(a&&a.nodeName<"@")a=i._1(a,b?"next":"previous");if(a&&a.currentStyle.styleFloat==="none"&&a.currentStyle.hasLayout){O(a,d);margin=U(f,f.currentStyle[d]);childMargin=U(a,a.currentStyle[d]);if(margin<0||childMargin<0){f.runtimeStyle[d]=margin+childMargin}else{f.runtimeStyle[d]=Math.max(childMargin,margin)}a.runtimeStyle[d]="0px"}}};function U(b,a){return a==="auto"?0:E(b,a)};var G=/^[.\d][\w]*$/,H=/^(auto|0cm)$/,x={};u.borderBox=function(a){x.Width(a);x.Height(a)};var v=function(o){x.Width=function(a){if(!R.test(a.currentStyle.width))y(a);if(o)T(a)};function y(b,a){if(!b.runtimeStyle.fixedWidth){if(!a)a=b.currentStyle.width;b.runtimeStyle.fixedWidth=G.test(a)?Math.max(0,q(b,a))+"px":a;S(b,"width",b.runtimeStyle.fixedWidth)}};function p(b){if(!bj(b)){var a=b.offsetParent;while(a&&!a.currentStyle.hasLayout)a=a.offsetParent}return(a||w).clientWidth};function n(b,a){if(R.test(a))return parseInt(parseFloat(a)/100*p(b));return E(b,a)};var q=function(d,c){var b=d.currentStyle["ie7-box-sizing"]==="border-box",a=0;if(B&&!b)a+=m(d)+j(d,"padding");else if(!B&&b)a-=m(d)+j(d,"padding");return n(d,c)+a};function m(a){return a.offsetWidth-a.clientWidth};function j(b,a){return n(b,b.currentStyle[a+"Left"])+n(b,b.currentStyle[a+"Right"])};W+="*{minWidth:none;maxWidth:none;min-width:none;max-width:none}";u.minWidth=function(a){if(a.currentStyle["min-width"]!=null){a.style.minWidth=a.currentStyle["min-width"]}if(Y(arguments.callee,a,a.currentStyle.minWidth!=="none")){u.boxSizing(a);y(a);l(a)}};eval("IE7.Layout.maxWidth="+String(u.minWidth).replace(/min/g,"max"));function l(c){if(c==r.body){var b=c.clientWidth}else{var a=c.getBoundingClientRect();b=a.right-a.left}if(c.currentStyle.minWidth!=="none"&&b<q(c,c.currentStyle.minWidth)){c.runtimeStyle.width=c.currentStyle.minWidth}else if(c.currentStyle.maxWidth!=="none"&&b>=q(c,c.currentStyle.maxWidth)){c.runtimeStyle.width=c.currentStyle.maxWidth}else{c.runtimeStyle.width=c.runtimeStyle.fixedWidth}};function k(a){if(Y(k,a,/^(fixed|absolute)$/.test(a.currentStyle.position)&&bu(a,"left")!=="auto"&&bu(a,"right")!=="auto"&&H.test(bu(a,"width")))){h(a);u.boxSizing(a)}};u.fixRight=k;function h(c){var b=n(c,c.runtimeStyle._3||c.currentStyle.left),a=p(c)-n(c,c.currentStyle.right)-b-j(c,"margin");if(parseInt(c.runtimeStyle.width)===a)return;c.runtimeStyle.width="";if(bj(c)||o||c.offsetWidth<a){if(!B)a-=m(c)+j(c,"padding");if(a<0)a=0;c.runtimeStyle.fixedWidth=a;S(c,"width",a)}};var g=0;br(function(){if(!w)return;var f,d=(g<w.clientWidth);g=w.clientWidth;var c=u.minWidth.elements;for(f in c){var b=c[f];var a=(parseInt(b.runtimeStyle.width)===q(b,b.currentStyle.minWidth));if(d&&a)b.runtimeStyle.width="";if(d==a)l(b)}var c=u.maxWidth.elements;for(f in c){var b=c[f];var a=(parseInt(b.runtimeStyle.width)===q(b,b.currentStyle.maxWidth));if(!d&&a)b.runtimeStyle.width="";if(d!==a)l(b)}for(f in k.elements)h(k.elements[f])});if(B){i.CSS.addRecalc("width",bl,x.Width)}if(t<7){i.CSS.addRecalc("max-width",bl,u.maxWidth);i.CSS.addRecalc("right",bl,k)}else if(t==7){if(o)i.CSS.addRecalc("height","[\\d.]+%",function(element){element.runtimeStyle.pixelHeight=parseInt(p(element)*element.currentStyle["ie7-height"].slice(0,-1)/100)})}};eval("var _7="+bO(v));v();_7(true);if(t<7){i.CSS.addRecalc("min-width",bl,u.minWidth);i.CSS.addFix(/\bmin-height\s*/,"height")}})();var bx=bd("blank.gif",ce),by="DXImageTransform.Microsoft.AlphaImageLoader",bX="progid:"+by+"(src='%1',sizingMethod='%2')",ba,bb=[];function bY(b){if(ba.test(b.src)){var a=new Image(b.width,b.height);a.onload=function(){b.width=a.width;b.height=a.height;a=null};a.src=b.src;b.pngSrc=b.src;bz(b)}};if(t<7){i.CSS.addFix(/background(-image)?\s*:\s*([^};]*)?url\(([^\)]+)\)([^;}]*)?/,function(f,d,c,b,a){b=bN(b);return ba.test(b)?"filter:"+M(bX,b,a.indexOf("no-repeat")===-1?"scale":"crop")+";zoom:1;background"+(d||"")+":"+(c||"")+"none"+(a||""):f});i.CSS.addRecalc(/list\-style(\-image)?/,"[^};]*url",function(d){var c=d.currentStyle.listStyleImage.slice(5,-2);if(ba.test(c)){if(d.nodeName==="LI"){bZ(d,c)}else if(d.nodeName==="UL"){for(var b=0,a;a=d.childNodes[b];b++){if(a.nodeName==="LI")bZ(a,c)}}}});function bZ(g,f){var d=g.runtimeStyle,c=g.offsetHeight,b=new Image;b.onload=function(){var a=g.currentStyle.paddingLeft;a=a==="0px"?0:E(g,a);d.paddingLeft=(a+this.width)+"px";d.marginLeft=-this.width+"px";d.listStyleType="none";d.listStyleImage="none";d.paddingTop=Math.max(c-g.offsetHeight,0)+"px";bz(g,"crop",f);g.style.zoom="100%"};b.src=f};i.HTML.addRecalc("img,input",function(a){if(a.nodeName==="INPUT"&&a.type!=="image")return;bY(a);A(a,"onpropertychange",function(){if(!bA&&event.propertyName==="src"&&a.src.indexOf(bx)===-1)bY(a)})});var bA=false;A(J,"onbeforeprint",function(){bA=true;for(var a=0;a<bb.length;a++)cL(bb[a])});A(J,"onafterprint",function(){for(var a=0;a<bb.length;a++)bz(bb[a]);bA=false})}function bz(d,c,b){var a=d.filters[by];if(a){a.src=b||d.src;a.enabled=true}else{d.runtimeStyle.filter=M(bX,b||d.src,c||"scale");bb.push(d)}d.src=bx};function cL(a){a.src=a.pngSrc;a.filters[by].enabled=false};(function(){if(t>=7)return;i.CSS.addRecalc("position","fixed",m,"absolute");i.CSS.addRecalc("background(-attachment)?","[^};]*fixed",n);var x=B?"body":"documentElement";function v(){if(z.currentStyle.backgroundAttachment!=="fixed"){if(z.currentStyle.backgroundImage==="none"){z.runtimeStyle.backgroundRepeat="no-repeat";z.runtimeStyle.backgroundImage="url("+bx+")"}z.runtimeStyle.backgroundAttachment="fixed"}v=bc};var o=bT("img");function y(a){return a?bj(a)||y(a.parentElement):false};function p(c,b,a){setTimeout("document.all."+c.uniqueID+".runtimeStyle.setExpression('"+b+"','"+a+"')",0)};function n(a){if(Y(n,a,a.currentStyle.backgroundAttachment==="fixed"&&!a.contains(z))){v();h.bgLeft(a);h.bgTop(a);q(a)}};function q(b){o.src=b.currentStyle.backgroundImage.slice(5,-2);var a=b.canHaveChildren?b:b.parentElement;a.appendChild(o);h.setOffsetLeft(b);h.setOffsetTop(b);a.removeChild(o)};function m(a){if(Y(m,a,bj(a))){S(a,"position","absolute");S(a,"left",a.currentStyle.left);S(a,"top",a.currentStyle.top);v();i.Layout.fixRight(a);j(a)}};function j(c,b){r.body.getBoundingClientRect();h.positionTop(c,b);h.positionLeft(c,b,true);if(!c.runtimeStyle.autoLeft&&c.currentStyle.marginLeft==="auto"&&c.currentStyle.right!=="auto"){var a=w.clientWidth-h.getPixelWidth(c,c.currentStyle.right)-h.getPixelWidth(c,c.runtimeStyle._3)-c.clientWidth;if(c.currentStyle.marginRight==="auto")a=parseInt(a/2);if(y(c.offsetParent))c.runtimeStyle.pixelLeft+=a;else c.runtimeStyle.shiftLeft=a}if(!c.runtimeStyle.fixedWidth)h.clipWidth(c);if(!c.runtimeStyle.fixedHeight)h.clipHeight(c)};function l(){var b=n.elements;for(var a in b)q(b[a]);b=m.elements;for(a in b){j(b[a],true);j(b[a],true)}k=0};var k;br(function(){if(!k)k=setTimeout(l,100)});var h={},g=function(f){f.bgLeft=function(a){a.style.backgroundPositionX=a.currentStyle.backgroundPositionX;if(!y(a)){p(a,"backgroundPositionX","(parseInt(runtimeStyle.offsetLeft)+document."+x+".scrollLeft)||0")}};f.setOffsetLeft=function(b){var a=y(b)?"backgroundPositionX":"offsetLeft";b.runtimeStyle[a]=f.getOffsetLeft(b,b.style.backgroundPositionX)-b.getBoundingClientRect().left-b.clientLeft+2};f.getOffsetLeft=function(b,a){switch(a){case"left":case"top":return 0;case"right":case"bottom":return w.clientWidth-o.offsetWidth;case"center":return(w.clientWidth-o.offsetWidth)/2;default:if(R.test(a)){return parseInt((w.clientWidth-o.offsetWidth)*parseFloat(a)/100)}o.style.left=a;return o.offsetLeft}};f.clipWidth=function(d){var c=d.runtimeStyle.fixWidth;d.runtimeStyle.borderRightWidth="";d.runtimeStyle.width=c?f.getPixelWidth(d,c)+"px":"";if(d.currentStyle.width!=="auto"){var b=d.getBoundingClientRect();var a=d.offsetWidth-w.clientWidth+b.left-2;if(a>=0){d.runtimeStyle.borderRightWidth="0px";a=Math.max(E(d,d.currentStyle.width)-a,0);S(d,"width",a);return a}}};f.positionLeft=function(b,a){if(!a&&R.test(b.currentStyle.width)){b.runtimeStyle.fixWidth=b.currentStyle.width}if(b.runtimeStyle.fixWidth){b.runtimeStyle.width=f.getPixelWidth(b,b.runtimeStyle.fixWidth)}b.runtimeStyle.shiftLeft=0;b.runtimeStyle._3=b.currentStyle.left;b.runtimeStyle.autoLeft=b.currentStyle.right!=="auto"&&b.currentStyle.left==="auto";b.runtimeStyle.left="";b.runtimeStyle.screenLeft=f.getScreenLeft(b);b.runtimeStyle.pixelLeft=b.runtimeStyle.screenLeft;if(!a&&!y(b.offsetParent)){p(b,"pixelLeft","runtimeStyle.screenLeft+runtimeStyle.shiftLeft+document."+x+".scrollLeft")}};f.getScreenLeft=function(c){var b=c.offsetLeft,a=1;if(c.runtimeStyle.autoLeft){b=w.clientWidth-c.offsetWidth-f.getPixelWidth(c,c.currentStyle.right)}if(c.currentStyle.marginLeft!=="auto"){b-=f.getPixelWidth(c,c.currentStyle.marginLeft)}while(c=c.offsetParent){if(c.currentStyle.position!=="static")a=-1;b+=c.offsetLeft*a}return b};f.getPixelWidth=function(b,a){return R.test(a)?parseInt(parseFloat(a)/100*w.clientWidth):E(b,a)}};eval("var _8="+bO(g));g(h);_8(h)})();if(t<7){var bB={backgroundColor:"transparent",backgroundImage:"none",backgroundPositionX:null,backgroundPositionY:null,backgroundRepeat:null,borderTopWidth:0,borderRightWidth:0,borderBottomWidth:0,borderLeftStyle:"none",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",borderLeftWidth:0,borderLeftColor:"#000",borderTopColor:"#000",borderRightColor:"#000",borderBottomColor:"#000",height:null,marginTop:0,marginBottom:0,marginRight:0,marginLeft:0,width:"100%"};i.CSS.addRecalc("overflow","visible",function(c){if(c.currentStyle.position==="absolute")return;if(c.parentNode.ie7_wrapped)return;if(i.Layout&&c.currentStyle["max-height"]!=="auto"){i.Layout.maxHeight(c)}if(c.currentStyle.marginLeft==="auto")c.style.marginLeft=0;if(c.currentStyle.marginRight==="auto")c.style.marginRight=0;var b=r.createElement(cc);b.ie7_wrapped=c;for(var a in bB){b.style[a]=c.currentStyle[a];if(bB[a]!=null){c.runtimeStyle[a]=bB[a]}}b.style.display="block";b.style.position="relative";c.runtimeStyle.position="absolute";c.parentNode.insertBefore(b,c);b.appendChild(c)})}function cM(){var p="xx-small,x-small,small,medium,large,x-large,xx-large".split(",");for(var n=0;n<p.length;n++){p[p[n]]=p[n-1]||"0.67em"}i.CSS.addFix(/(font(-size)?\s*:\s*)([\w.-]+)/,function(d,c,b,a){return c+(p[a]||a)});var q=/^\-/,m=/(em|ex)$/i,j=/em$/i,l=/ex$/i;E=function(c,b){if(bR.test(b))return parseInt(b)||0;var a=q.test(b)?-1:1;if(m.test(b))a*=h(c);k.style.width=a<0?b.slice(1):b;z.appendChild(k);b=a*k.offsetWidth;k.removeNode();return parseInt(b)};var k=bT();function h(c){var b=1;k.style.fontFamily=c.currentStyle.fontFamily;k.style.lineHeight=c.currentStyle.lineHeight;while(c!=z){var a=c.currentStyle["ie7-font-size"];if(a){if(j.test(a))b*=parseFloat(a);else if(R.test(a))b*=(parseFloat(a)/100);else if(l.test(a))b*=(parseFloat(a)/2);else{k.style.fontSize=a;return 1}}c=c.parentElement}return b};i.CSS.addFix(/cursor\s*:\s*pointer/,"cursor:hand");i.CSS.addFix(/display\s*:\s*list-item/,"display:block");function g(d){var c=d.parentElement,b=c.offsetWidth-d.offsetWidth-f(c),a=(d.currentStyle["ie7-margin"]&&d.currentStyle.marginRight==="auto")||d.currentStyle["ie7-margin-right"]==="auto";switch(c.currentStyle.textAlign){case"right":b=a?parseInt(b/2):0;d.runtimeStyle.marginRight=b+"px";break;case"center":if(a)b=0;default:if(a)b/=2;d.runtimeStyle.marginLeft=parseInt(b)+"px"}};function f(a){return E(a,a.currentStyle.paddingLeft)+E(a,a.currentStyle.paddingRight)};i.CSS.addRecalc("margin(-left|-right)?","[^};]*auto",function(a){if(Y(g,a,a.parentElement&&a.currentStyle.display==="block"&&a.currentStyle.marginLeft==="auto"&&a.currentStyle.position!=="absolute")){g(a)}});br(function(){for(var b in g.elements){var a=g.elements[b];a.runtimeStyle.marginLeft=a.runtimeStyle.marginRight="";g(a)}})};var I,N=(function(){var cN=/^[>+~]/,bm=false;function cO(d,c,b){d=bJ(d);if(!c)c=r;var a=c;bm=cN.test(d);if(bm){c=c.parentNode;d="*"+d}try{return q.create(d,bm)(c,b?null:[],a)}catch(ex){return b?null:[]}};var cP=/^(\\.|[' >+~#.\[\]:*(),\w-\^|$=]|[^\x00-\xa0])+$/,dd=/^(href|src)$/,ca={"class":"className","for":"htmlFor"},de=/\sie7_\w+/g,cQ=/^(action|cite|codebase|data|dynsrc|href|longdesc|lowsrc|src|usemap|url)$/i;i._0=function(d,c){if(d.getAttributeNode){var b=d.getAttributeNode(c)}c=ca[c.toLowerCase()]||c;if(!b)b=d.attributes[c];var a=b&&b.specified;if(d[c]&&typeof d[c]=="boolean")return c.toLowerCase();if((a&&cQ.test(c))||(!b&&B)||c==="value"||c==="type"){return d.getAttribute(c,2)}if(c==="style")return d.style.cssText.toLowerCase()||null;return a?String(b.nodeValue):null};var cb="colSpan,rowSpan,vAlign,dateTime,accessKey,tabIndex,encType,maxLength,readOnly,longDesc";bg(ca,cs(cb.toLowerCase().split(","),cb.split(",")));i._1=function(b,a){a+="Sibling";do{b=b[a];if(b&&b.nodeName>"@")break}while(b);return b};var cR=/(^|[, >+~])([#.:\[])/g,df=/\)\{/g,cS=/,/,dg=/^['"]/,cT=/\\([\da-f]{2,2})/gi,dh=/last/i;i._9=function(d,c){var b=d.all[c]||null;if(!b||(b.nodeType&&i._0(b,"id")===c))return b;for(var a=0;a<b.length;a++){if(i._0(b[a],"id")===c)return b[a]}return null};var V=D.extend({dictionary:new cq({ident:/\-?(\\.|[_a-z]|[^\x00-\xa0])(\\.|[\w-]|[^\x00-\xa0])*/,combinator:/[\s>+~]/,operator:/[\^~|$*]?=/,nth_arg:/[+-]?\d+|[+-]?\d*n(?:\s*[+-]\s*\d+)?|even|odd/,tag:/\*|<#ident>/,id:/#(<#ident>)/,'class':/\.(<#ident>)/,pseudo:/\:([\w-]+)(?:\(([^)]+)\))?/,attr:/\[(<#ident>)(?:(<#operator>)((?:\\.|[^\[\]#.:])+))?\]/,negation:/:not\((<#tag>|<#id>|<#class>|<#attr>|<#pseudo>)\)/,sequence:/(\\.|[~*]=|\+\d|\+?\d*n\s*\+\s*\d|[^\s>+~,\*])+/,filter:/[#.:\[]<#sequence>/,selector:/[^>+~](\\.|[^,])*?/,grammar:/^(<#selector>)((,<#selector>)*)$/}),ignoreCase:true}),cU=new V({"\\\\.|[~*]\\s+=|\\+\\s+\\d":D.IGNORE,"\\[\\s+":"[","\\(\\s+":"(","\\s+\\)":")","\\s+\\]":"]","\\s*([,>+~]|<#operator>)\\s*":"$1","\\s+$":"","\\s+":" "});function cV(a){a=cU.parse(a.replace(cT,"\\x$1")).replace(bp,"$1").replace(cR,"$1*$2");if(!cP.test(a))bC();return a};function di(a){return a.replace(bL,cW)};function cW(b,a){return Q[a]};var cX=/\{/g,cY=/\\{/g;function bD(a){return Array((a.replace(cY,"").match(cX)||"").length+1).join("}")};bw=new V(bw);var u=/:target/i,T=/:root/i;function O(b){var a="";if(T.test(b))a+=",R=d.documentElement";if(u.test(b))a+=",H=d.location;H=H&&H.hash.replace('#','')";if(a||b.indexOf("#")!==-1){a=",t=c.nodeType,d=t===9?c:c.ownerDocument||(c.document||c).parentWindow.document"+a}return"var ii"+a+";"};var U={" ":";while(e!=s&&(e=e.parentNode)&&e.nodeType===1){",">":".parentElement;if(e){","+":";while((e=e.previousSibling)&&!("+bU+"))continue;if(e){","~":";while((e=e.previousSibling)){"+bV},G=/\be\b/g;I=new V({"(?:(<#selector>)(<#combinator>))?(<#tag>)(<#filter>)?$":function(h,g,f,d,c){var b="";if(d!=="*"){var a=d.toUpperCase();b+="if(e.nodeName==='"+a+(a===d?"":"'||e.nodeName==='"+d)+"'){"}if(c){b+="if("+bw.parse(c).slice(0,-2)+"){"}b=b.replace(G,"e"+this.index);if(f){b+="var e=e"+(this.index++)+U[f];b=b.replace(G,"e"+this.index)}if(g){b+=this.parse(g)}return b}});var H="e0=IE7._9(d,'%1');if(e0){",x="var n=c.getElementsByTagName('%1');",v="if(r==null)return e0;r[k++]=e0;",o=1,y=new V({"^((?:<#selector>)?(?:<#combinator>))(<#tag>)(<#filter>)?$":true}),p={},n=new V({"^(<#tag>)#(<#ident>)(<#filter>)?( [^,]*)?$":function(h,g,f,d,c){var b=M(H,f),a="}";if(d){b+=I.parse(g+d);a=bD(b)}if(c){b+="s=c=e0;"+q.parse("*"+c)}else{b+=v}return b+a},"^([^#,]+)#(<#ident>)(<#filter>)?$":function(f,d,c,b){var a=M(H,c);if(d==="*"){a+=v}else{a+=I.parse(d+b)+v+"break"}return a+bD(a)},"^.*$":""}),q=new V({"<#grammar>":function(j,l,k){if(!this.groups)this.groups=[];var h=y.exec(" "+l);if(!h)bC();this.groups.push(h.slice(1));if(k){return this.parse(k.replace(cS,""))}var g=this.groups,f=g[0][o];for(var b=1;h=g[b];b++){if(f!==h[o]){f="*";break}}var d="",c=v+"continue filtering;";for(var b=0;h=g[b];b++){I.index=0;if(f!=="*")h[o]="*";h=h.join("");if(h===" *"){d=c;break}else{h=I.parse(h);if(bm)h+="if(e"+I.index+"==s){";d+=h+c+bD(h)}}var a=f==="*";return(a?"var n=c.all;":M(x,f))+"filtering:while((e0=n[i++]))"+(a?bV.replace(G,"e0"):"{")+d+"}"},"^.*$":bC}),m=/\&\&(e\d+)\.nodeType===1(\)\{\s*if\(\1\.nodeName=)/g;q.create=function(c){if(!p[c]){c=cV(c);this.groups=null;I.index=0;var b=this.parse(c);this.groups=null;I.index=0;if(c.indexOf("#")!==-1){var a=n.parse(c);if(a){b="if(t===1||t===11|!c.getElementById){"+b+"}else{"+a+"}"}}b=b.replace(m,"$2");b=O(c)+bq(b);p[c]=new Function("return function(c,r,s){var i=0,k=0,e0;"+b+"return r}")()}return p[c]};return cO})();function bC(){throw new SyntaxError("Invalid selector.");};i.loaded=true;(function(){try{if(!r.body)throw"continue";bn.doScroll("left")}catch(ex){setTimeout(arguments.callee,1);return}try{eval(bF.innerHTML)}catch(ex){}if(typeof IE7_PNG_SUFFIX=="object"){ba=IE7_PNG_SUFFIX}else{ba=new RegExp(ct(J.IE7_PNG_SUFFIX||"-trans.png")+"(\\?.*)?$","i")}z=r.body;w=B?z:bn;z.className+=" ie7_body";bn.className+=" ie7_html";if(B)cM();i.CSS.init();i.HTML.init();i.HTML.apply();i.CSS.apply();i.recalc()})()})(this,document);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! JSON v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */
	(function(){function M(r,q){function p(a,l){try{a()}catch(c){l&&l()}}function k(a){if(null!=k[a])return k[a];var l;if("bug-string-char-index"==a)l="a"!="a"[0];else if("json"==a)l=k("json-stringify")&&k("date-serialization")&&k("json-parse");else if("date-serialization"==a){if(l=k("json-stringify")&&v){var c=q.stringify;p(function(){l='"-271821-04-20T00:00:00.000Z"'==c(new z(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==c(new z(864E13))&&'"-000001-01-01T00:00:00.000Z"'==c(new z(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==
	    c(new z(-1))})}}else{var b;if("json-stringify"==a){var c=q.stringify,e="function"==typeof c;e&&((b=function(){return 1}).toJSON=b,p(function(){e="0"===c(0)&&"0"===c(new B)&&'""'==c(new A)&&c(t)===u&&c(u)===u&&c()===u&&"1"===c(b)&&"[1]"==c([b])&&"[null]"==c([u])&&"null"==c(null)&&"[null,null,null]"==c([u,t,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==c({a:[b,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===c(null,b)&&"[\n 1,\n 2\n]"==c([1,2],null,1)},function(){e=!1}));l=e}if("json-parse"==a){var n=
	    q.parse,d;"function"==typeof n&&p(function(){0===n("0")&&!n(!1)&&(b=n('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'),d=5==b.a.length&&1===b.a[0])&&(p(function(){d=!n('"\t"')}),d&&p(function(){d=1!==n("01")}),d&&p(function(){d=1!==n("1.")}))},function(){d=!1});l=d}}return k[a]=!!l}r||(r=f.Object());q||(q=f.Object());var B=r.Number||f.Number,A=r.String||f.String,E=r.Object||f.Object,z=r.Date||f.Date,I=r.SyntaxError||f.SyntaxError,J=r.TypeError||f.TypeError,K=r.Math||f.Math,F=r.JSON||f.JSON;"object"==
	typeof F&&F&&(q.stringify=F.stringify,q.parse=F.parse);var E=E.prototype,t=E.toString,G=E.hasOwnProperty,u,v=new z(-0xc782b5b800cec);p(function(){v=-109252==v.getUTCFullYear()&&0===v.getUTCMonth()&&1===v.getUTCDate()&&10==v.getUTCHours()&&37==v.getUTCMinutes()&&6==v.getUTCSeconds()&&708==v.getUTCMilliseconds()});k["bug-string-char-index"]=k["date-serialization"]=k.json=k["json-stringify"]=k["json-parse"]=null;if(!k("json")){var N=k("bug-string-char-index"),C=function(a,b){var c=0,g,e,n;(g=function(){this.valueOf=
	    0}).prototype.valueOf=0;e=new g;for(n in e)G.call(e,n)&&c++;g=e=null;c?C=function(a,c){var b="[object Function]"==t.call(a),l,e;for(l in a)b&&"prototype"==l||!G.call(a,l)||(e="constructor"===l)||c(l);(e||G.call(a,l="constructor"))&&c(l)}:(e="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),C=function(a,c){var b="[object Function]"==t.call(a),l,g=!b&&"function"!=typeof a.constructor&&D[typeof a.hasOwnProperty]&&a.hasOwnProperty||G;for(l in a)b&&
	"prototype"==l||!g.call(a,l)||c(l);for(b=e.length;l=e[--b];g.call(a,l)&&c(l));});return C(a,b)};if(!k("json-stringify")||!k(" date-serialization")){var L={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},x=function(a,b){return("000000"+(b||0)).slice(-a)},V=function(a){a=a.charCodeAt(0);var b=L[a];return b?b:"\\u00"+x(2,a.toString(16))},O=/[\x00-\x1f\x22\x5c]/g,S=function(a){O.lastIndex=0;return'"'+(O.test(a)?a.replace(O,V):a)+'"'},P=function(a){var b,c,g,e,n,d,h,f,m;if(v)b=function(a){c=
	    a.getUTCFullYear();g=a.getUTCMonth();e=a.getUTCDate();d=a.getUTCHours();h=a.getUTCMinutes();f=a.getUTCSeconds();m=a.getUTCMilliseconds()};else{var w=K.floor,k=[0,31,59,90,120,151,181,212,243,273,304,334],p=function(a,c){return k[c]+365*(a-1970)+w((a-1969+(c=+(1<c)))/4)-w((a-1901+c)/100)+w((a-1601+c)/400)};b=function(a){e=w(a/864E5);for(c=w(e/365.2425)+1970-1;p(c+1,0)<=e;c++);for(g=w((e-p(c,0))/30.42);p(c,g+1)<=e;g++);e=1+e-p(c,g);n=(a%864E5+864E5)%864E5;d=w(n/36E5)%24;h=w(n/6E4)%60;f=w(n/1E3)%60;
	    m=n%1E3}}P=function(a){a>-1/0&&a<1/0?(b(a),a=(0>=c||1E4<=c?(0>c?"-":"+")+x(6,0>c?-c:c):x(4,c))+"-"+x(2,g+1)+"-"+x(2,e)+"T"+x(2,d)+":"+x(2,h)+":"+x(2,f)+"."+x(3,m)+"Z",c=g=e=d=h=f=m=null):a=null;return a};return P(a)},Q=function(a,b,c,g,e,n,d){var h,f,m,k,q,r;p(function(){h=b[a]});"object"==typeof h&&h&&(h.getUTCFullYear&&"[object Date]"==t.call(h)&&h.toJSON===z.prototype.toJSON?h=P(h):"function"==typeof h.toJSON&&(h=h.toJSON(a)));c&&(h=c.call(b,a,h));if(h==u)return h===u?h:"null";f=typeof h;"object"==
	f&&(m=t.call(h));switch(m||f){case "boolean":case "[object Boolean]":return""+h;case "number":case "[object Number]":return h>-1/0&&h<1/0?""+h:"null";case "string":case "[object String]":return S(""+h)}if("object"==typeof h){for(f=d.length;f--;)if(d[f]===h)throw J();d.push(h);k=[];r=n;n+=e;if("[object Array]"==m){q=0;for(f=h.length;q<f;q++)m=Q(q,h,c,g,e,n,d),k.push(m===u?"null":m);f=k.length?e?"[\n"+n+k.join(",\n"+n)+"\n"+r+"]":"["+k.join(",")+"]":"[]"}else C(g||h,function(a){var b=Q(a,h,c,g,e,n,
	    d);b!==u&&k.push(S(a)+":"+(e?" ":"")+b)}),f=k.length?e?"{\n"+n+k.join(",\n"+n)+"\n"+r+"}":"{"+k.join(",")+"}":"{}";d.pop();return f}};q.stringify=function(a,b,c){var g,e,f,d;if(D[typeof b]&&b)if(d=t.call(b),"[object Function]"==d)e=b;else if("[object Array]"==d){f={};for(var h=0,m=b.length,k;h<m;k=b[h++],(d=t.call(k),"[object String]"==d||"[object Number]"==d)&&(f[k]=1));}if(c)if(d=t.call(c),"[object Number]"==d){if(0<(c-=c%1))for(g="",10<c&&(c=10);g.length<c;g+=" ");}else"[object String]"==d&&(g=
	    10>=c.length?c:c.slice(0,10));return Q("",(k={},k[""]=a,k),e,f,g,"",[])}}if(!k("json-parse")){var W=A.fromCharCode,X={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,H,m=function(){b=H=null;throw I();},y=function(){for(var a=H,l=a.length,c,g,e,f,d;b<l;)switch(d=a.charCodeAt(b),d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return c=N?a.charAt(b):a[b],b++,c;case 34:c="@";for(b++;b<l;)if(d=a.charCodeAt(b),32>d)m();else if(92==d)switch(d=
	    a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:c+=X[d];b++;break;case 117:g=++b;for(e=b+4;b<e;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||m();c+=W("0x"+a.slice(g,b));break;default:m()}else{if(34==d)break;d=a.charCodeAt(b);for(g=b;32<=d&&92!=d&&34!=d;)d=a.charCodeAt(++b);c+=a.slice(g,b)}if(34==a.charCodeAt(b))return b++,c;m();default:g=b;45==d&&(f=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&m();b<
	l&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(e=++b;e<l&&(d=a.charCodeAt(e),48<=d&&57>=d);e++);e==b&&m();b=e}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(e=b;e<l&&(d=a.charCodeAt(e),48<=d&&57>=d);e++);e==b&&m();b=e}return+a.slice(g,b)}f&&m();c=a.slice(b,b+4);if("true"==c)return b+=4,!0;if("fals"==c&&101==a.charCodeAt(b+4))return b+=5,!1;if("null"==c)return b+=4,null;m()}return"$"},R=function(a){var b,c;"$"==a&&m();if("string"==typeof a){if("@"==
	    (N?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];;){a=y();if("]"==a)break;c?","==a?(a=y(),"]"==a&&m()):m():c=!0;","==a&&m();b.push(R(a))}return b}if("{"==a){for(b={};;){a=y();if("}"==a)break;c?","==a?(a=y(),"}"==a&&m()):m():c=!0;","!=a&&"string"==typeof a&&"@"==(N?a.charAt(0):a[0])&&":"==y()||m();b[a.slice(1)]=R(y())}return b}m()}return a},U=function(a,b,c){c=T(a,b,c);c===u?delete a[b]:a[b]=c},T=function(a,b,c){var g=a[b],e;if("object"==typeof g&&g)if("[object Array]"==t.call(g))for(e=g.length;e--;U(g,
	    e,c));else C(g,function(a){U(g,a,c)});return c.call(a,b,g)};q.parse=function(a,f){var c,g;b=0;H=""+a;c=R(y());"$"!=y()&&m();b=H=null;return f&&"[object Function]"==t.call(f)?T((g={},g[""]=c,g),"",f):c}}}q.runInContext=M;return q}var I="function"==="function"&&__webpack_require__(5),D={"function":!0,object:!0},A=D[typeof exports]&&exports&&!exports.nodeType&&exports,f=D[typeof window]&&window||this,p=A&&D[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!p||p.global!==p&&p.window!==
	p&&p.self!==p||(f=p);if(A&&!I)M(f,A);else{var J=f.JSON,K=f.JSON3,L=!1,B=M(f,f.JSON3={noConflict:function(){L||(L=!0,f.JSON=J,f.JSON3=K,J=K=null);return B}});f.JSON={parse:B.parse,stringify:B.stringify}}I&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return B}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}).call(this);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module), (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */

	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.Promise = factory());
	}(this, (function () { 'use strict';

	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}

	function isFunction(x) {
	  return typeof x === 'function';
	}

	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}

	var isArray = _isArray;

	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;

	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};

	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}

	function setAsap(asapFn) {
	  asap = asapFn;
	}

	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}

	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }

	  return useSetTimeout();
	}

	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });

	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}

	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}

	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}

	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];

	    callback(arg);

	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }

	  len = 0;
	}

	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vertx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}

	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}

	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;

	  var parent = this;

	  var child = new this.constructor(noop);

	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }

	  var _state = parent._state;

	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }

	  return child;
	}

	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	  Instead of writing the above, your code now simply becomes the following:
	  ```javascript
	  let promise = Promise.resolve(1);
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }

	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}

	var PROMISE_ID = Math.random().toString(36).substring(16);

	function noop() {}

	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;

	var GET_THEN_ERROR = new ErrorObject();

	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}

	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}

	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}

	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}

	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;

	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));

	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}

	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}

	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}

	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}

	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }

	  publish(promise);
	}

	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }

	  promise._result = value;
	  promise._state = FULFILLED;

	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}

	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;

	  asap(publishRejection, promise);
	}

	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;

	  parent._onerror = null;

	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;

	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}

	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;

	  if (subscribers.length === 0) {
	    return;
	  }

	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;

	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];

	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }

	  promise._subscribers.length = 0;
	}

	function ErrorObject() {
	  this.error = null;
	}

	var TRY_CATCH_ERROR = new ErrorObject();

	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}

	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;

	  if (hasCallback) {
	    value = tryCatch(callback, detail);

	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }

	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }

	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}

	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}

	var id = 0;
	function nextId() {
	  return id++;
	}

	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}

	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);

	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }

	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;

	    this._result = new Array(this.length);

	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}

	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};

	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;

	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};

	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;

	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);

	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};

	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;

	  if (promise._state === PENDING) {
	    this._remaining--;

	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }

	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};

	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;

	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};

	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	  Example:
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	  Example:
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}

	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	  Example:
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	  An example real-world use case is implementing timeouts:
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}

	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	  Instead of writing the above, your code now simply becomes the following:
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}

	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}

	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}

	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	  Terminology
	  -----------
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	  Basic Usage:
	  ------------
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	    // on failure
	    reject(reason);
	  });
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	  Advanced Usage:
	  ---------------
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	  Unlike callbacks, promises are great composable primitives.
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	    return values;
	  });
	  ```
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];

	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}

	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;

	Promise.prototype = {
	  constructor: Promise,

	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,

	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};

	function polyfill() {
	    var local = undefined;

	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }

	    var P = local.Promise;

	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }

	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }

	    local.Promise = Promise;
	}

	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;

	return Promise;

	})));
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v1.12.2 | (c) jQuery Foundation | jquery.org/license */
	!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.2",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
	}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
	return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){
	return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"=="function"&&__webpack_require__(5)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	built in 2017-1-4:13:4 version 2.2.4 by 司徒正美
	https://github.com/RubyLouvre/avalon/tree/2.2.3

	修正IE下 orderBy BUG
	更改下载Promise的提示
	修复avalon.modern 在Proxy 模式下使用ms-for 循环对象时出错的BUG
	修复effect内部传参 BUG
	重构ms-validate的绑定事件的机制

	*/(function (global, factory) {
	     true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.avalon = factory();
	})(this, function () {
	    'use strict';

	    var win = typeof window === 'object' ? window : typeof global === 'object' ? global : {};

	    var inBrowser = !!win.location && win.navigator;
	    /* istanbul ignore if  */

	    var document$1 = inBrowser ? win.document : {
	        createElement: Object,
	        createElementNS: Object,
	        documentElement: 'xx',
	        contains: Boolean
	    };
	    var root = inBrowser ? document$1.documentElement : {
	        outerHTML: 'x'
	    };

	    var versions = {
	        objectobject: 7, //IE7-8
	        objectundefined: 6, //IE6
	        undefinedfunction: NaN, // other modern browsers
	        undefinedobject: NaN };
	    /* istanbul ignore next  */
	    var msie = document$1.documentMode || versions[typeof document$1.all + typeof XMLHttpRequest];

	    var modern = /NaN|undefined/.test(msie) || msie > 8;

	    /*
	     https://github.com/rsms/js-lru
	     entry             entry             entry             entry        
	     ______            ______            ______            ______       
	     | head |.newer => |      |.newer => |      |.newer => | tail |      
	     |  A   |          |  B   |          |  C   |          |  D   |      
	     |______| <= older.|______| <= older.|______| <= older.|______|      
	     
	     removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added 
	     */
	    function Cache(maxLength) {
	        // 标识当前缓存数组的大小
	        this.size = 0;
	        // 标识缓存数组能达到的最大长度
	        this.limit = maxLength;
	        //  head（最不常用的项），tail（最常用的项）全部初始化为undefined

	        this.head = this.tail = void 0;
	        this._keymap = {};
	    }

	    Cache.prototype = {
	        put: function put(key, value) {
	            var entry = {
	                key: key,
	                value: value
	            };
	            this._keymap[key] = entry;
	            if (this.tail) {
	                // 如果存在tail（缓存数组的长度不为0），将tail指向新的 entry
	                this.tail.newer = entry;
	                entry.older = this.tail;
	            } else {
	                // 如果缓存数组的长度为0，将head指向新的entry
	                this.head = entry;
	            }
	            this.tail = entry;
	            // 如果缓存数组达到上限，则先删除 head 指向的缓存对象
	            /* istanbul ignore if */
	            if (this.size === this.limit) {
	                this.shift();
	            } else {
	                this.size++;
	            }
	            return value;
	        },
	        shift: function shift() {
	            /* istanbul ignore next */
	            var entry = this.head;
	            /* istanbul ignore if */
	            if (entry) {
	                // 删除 head ，并改变指向
	                this.head = this.head.newer;
	                // 同步更新 _keymap 里面的属性值
	                this.head.older = entry.newer = entry.older = this._keymap[entry.key] = void 0;
	                delete this._keymap[entry.key]; //#1029
	                // 同步更新 缓存数组的长度
	                this.size--;
	            }
	        },
	        get: function get(key) {
	            var entry = this._keymap[key];
	            // 如果查找不到含有`key`这个属性的缓存对象
	            if (entry === void 0) return;
	            // 如果查找到的缓存对象已经是 tail (最近使用过的)
	            /* istanbul ignore if */
	            if (entry === this.tail) {
	                return entry.value;
	            }
	            // HEAD--------------TAIL
	            //   <.older   .newer>
	            //  <--- add direction --
	            //   A  B  C  <D>  E
	            if (entry.newer) {
	                // 处理 newer 指向
	                if (entry === this.head) {
	                    // 如果查找到的缓存对象是 head (最近最少使用过的)
	                    // 则将 head 指向原 head 的 newer 所指向的缓存对象
	                    this.head = entry.newer;
	                }
	                // 将所查找的缓存对象的下一级的 older 指向所查找的缓存对象的older所指向的值
	                // 例如：A B C D E
	                // 如果查找到的是D，那么将E指向C，不再指向D
	                entry.newer.older = entry.older; // C <-- E.
	            }
	            if (entry.older) {
	                // 处理 older 指向
	                // 如果查找到的是D，那么C指向E，不再指向D
	                entry.older.newer = entry.newer; // C. --> E
	            }
	            // 处理所查找到的对象的 newer 以及 older 指向
	            entry.newer = void 0; // D --x
	            // older指向之前使用过的变量，即D指向E
	            entry.older = this.tail; // D. --> E
	            if (this.tail) {
	                // 将E的newer指向D
	                this.tail.newer = entry; // E. <-- D
	            }
	            // 改变 tail 为D 
	            this.tail = entry;
	            return entry.value;
	        }
	    };

	    var delayCompile = {};

	    var directives = {};

	    function directive(name, opts) {
	        if (directives[name]) {
	            avalon.warn(name, 'directive have defined! ');
	        }
	        directives[name] = opts;
	        if (!opts.update) {
	            opts.update = function () {};
	        }
	        if (opts.delay) {
	            delayCompile[name] = 1;
	        }
	        return opts;
	    }

	    function delayCompileNodes(dirs) {
	        for (var i in delayCompile) {
	            if ('ms-' + i in dirs) {
	                return true;
	            }
	        }
	    }

	    var window$1 = win;
	    function avalon(el) {
	        return new avalon.init(el);
	    }

	    avalon.init = function (el) {
	        this[0] = this.element = el;
	    };

	    avalon.fn = avalon.prototype = avalon.init.prototype;

	    function shadowCopy(destination, source) {
	        for (var property in source) {
	            destination[property] = source[property];
	        }
	        return destination;
	    }
	    var rword = /[^, ]+/g;
	    var rnowhite = /\S+/g; //存在非空字符
	    var platform = {}; //用于放置平台差异的方法与属性


	    function oneObject(array, val) {
	        if (typeof array === 'string') {
	            array = array.match(rword) || [];
	        }
	        var result = {},
	            value = val !== void 0 ? val : 1;
	        for (var i = 0, n = array.length; i < n; i++) {
	            result[array[i]] = value;
	        }
	        return result;
	    }

	    var op = Object.prototype;
	    function quote(str) {
	        return avalon._quote(str);
	    }
	    var inspect = op.toString;
	    var ohasOwn = op.hasOwnProperty;
	    var ap = Array.prototype;

	    var hasConsole = typeof console === 'object';
	    avalon.config = { debug: true };
	    function log() {
	        if (hasConsole && avalon.config.debug) {
	            Function.apply.call(console.log, console, arguments);
	        }
	    }
	    function warn() {
	        if (hasConsole && avalon.config.debug) {
	            var method = console.warn || console.log;
	            // http://qiang106.iteye.com/blog/1721425
	            Function.apply.call(method, console, arguments);
	        }
	    }
	    function error(str, e) {
	        throw (e || Error)(str);
	    }
	    function noop() {}
	    function isObject(a) {
	        return a !== null && typeof a === 'object';
	    }

	    function range(start, end, step) {
	        // 用于生成整数数组
	        step || (step = 1);
	        if (end == null) {
	            end = start || 0;
	            start = 0;
	        }
	        var index = -1,
	            length = Math.max(0, Math.ceil((end - start) / step)),
	            result = new Array(length);
	        while (++index < length) {
	            result[index] = start;
	            start += step;
	        }
	        return result;
	    }

	    var rhyphen = /([a-z\d])([A-Z]+)/g;
	    function hyphen(target) {
	        //转换为连字符线风格
	        return target.replace(rhyphen, '$1-$2').toLowerCase();
	    }

	    var rcamelize = /[-_][^-_]/g;
	    function camelize(target) {
	        //提前判断，提高getStyle等的效率
	        if (!target || target.indexOf('-') < 0 && target.indexOf('_') < 0) {
	            return target;
	        }
	        //转换为驼峰风格
	        return target.replace(rcamelize, function (match) {
	            return match.charAt(1).toUpperCase();
	        });
	    }

	    var _slice = ap.slice;
	    function slice(nodes, start, end) {
	        return _slice.call(nodes, start, end);
	    }

	    var rhashcode = /\d\.\d{4}/;
	    //生成UUID http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
	    function makeHashCode(prefix) {
	        /* istanbul ignore next*/
	        prefix = prefix || 'avalon';
	        /* istanbul ignore next*/
	        return String(Math.random() + Math.random()).replace(rhashcode, prefix);
	    }
	    //生成事件回调的UUID(用户通过ms-on指令)
	    function getLongID(fn) {
	        /* istanbul ignore next */
	        return fn.uuid || (fn.uuid = makeHashCode('e'));
	    }
	    var UUID = 1;
	    //生成事件回调的UUID(用户通过avalon.bind)
	    function getShortID(fn) {
	        /* istanbul ignore next */
	        return fn.uuid || (fn.uuid = '_' + ++UUID);
	    }

	    var rescape = /[-.*+?^${}()|[\]\/\\]/g;
	    function escapeRegExp(target) {
	        //http://stevenlevithan.com/regex/xregexp/
	        //将字符串安全格式化为正则表达式的源码
	        return (target + '').replace(rescape, '\\$&');
	    }

	    var eventHooks = {};
	    var eventListeners = {};
	    var validators = {};
	    var cssHooks = {};

	    window$1.avalon = avalon;

	    function createFragment() {
	        /* istanbul ignore next  */
	        return document$1.createDocumentFragment();
	    }

	    var rentities = /&[a-z0-9#]{2,10};/;
	    var temp = document$1.createElement('div');
	    shadowCopy(avalon, {
	        Array: {
	            merge: function merge(target, other) {
	                //合并两个数组 avalon2新增
	                target.push.apply(target, other);
	            },
	            ensure: function ensure(target, item) {
	                //只有当前数组不存在此元素时只添加它
	                if (target.indexOf(item) === -1) {
	                    return target.push(item);
	                }
	            },
	            removeAt: function removeAt(target, index) {
	                //移除数组中指定位置的元素，返回布尔表示成功与否
	                return !!target.splice(index, 1).length;
	            },
	            remove: function remove(target, item) {
	                //移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否
	                var index = target.indexOf(item);
	                if (~index) return avalon.Array.removeAt(target, index);
	                return false;
	            }
	        },
	        evaluatorPool: new Cache(888),
	        parsers: {
	            number: function number(a) {
	                return a === '' ? '' : parseFloat(a) || 0;
	            },
	            string: function string(a) {
	                return a === null || a === void 0 ? '' : a + '';
	            },
	            "boolean": function boolean(a) {
	                if (a === '') return a;
	                return a === 'true' || a === '1';
	            }
	        },
	        _decode: function _decode(str) {
	            if (rentities.test(str)) {
	                temp.innerHTML = str;
	                return temp.innerText || temp.textContent;
	            }
	            return str;
	        }
	    });

	    //============== config ============
	    function config(settings) {
	        for (var p in settings) {
	            var val = settings[p];
	            if (typeof config.plugins[p] === 'function') {
	                config.plugins[p](val);
	            } else {
	                config[p] = val;
	            }
	        }
	        return this;
	    }

	    var plugins = {
	        interpolate: function interpolate(array) {
	            var openTag = array[0];
	            var closeTag = array[1];
	            if (openTag === closeTag) {
	                throw new SyntaxError('interpolate openTag cannot equal to closeTag');
	            }
	            var str = openTag + 'test' + closeTag;

	            if (/[<>]/.test(str)) {
	                throw new SyntaxError('interpolate cannot contains "<" or ">"');
	            }

	            config.openTag = openTag;
	            config.closeTag = closeTag;
	            var o = escapeRegExp(openTag);
	            var c = escapeRegExp(closeTag);

	            config.rtext = new RegExp(o + '(.+?)' + c, 'g');
	            config.rexpr = new RegExp(o + '([\\s\\S]*)' + c);
	        }
	    };
	    function createAnchor(nodeValue) {
	        return document$1.createComment(nodeValue);
	    }
	    config.plugins = plugins;
	    config({
	        interpolate: ['{{', '}}'],
	        debug: true
	    });
	    //============  config ============

	    shadowCopy(avalon, {
	        shadowCopy: shadowCopy,

	        oneObject: oneObject,
	        inspect: inspect,
	        ohasOwn: ohasOwn,
	        rword: rword,
	        version: "2.2.4",
	        vmodels: {},

	        directives: directives,
	        directive: directive,

	        eventHooks: eventHooks,
	        eventListeners: eventListeners,
	        validators: validators,
	        cssHooks: cssHooks,

	        log: log,
	        noop: noop,
	        warn: warn,
	        error: error,
	        config: config,

	        modern: modern,
	        msie: msie,
	        root: root,
	        document: document$1,
	        window: window$1,
	        inBrowser: inBrowser,

	        isObject: isObject,
	        range: range,
	        slice: slice,
	        hyphen: hyphen,
	        camelize: camelize,
	        escapeRegExp: escapeRegExp,
	        quote: quote,

	        makeHashCode: makeHashCode

	    });

	    /**
	     * 此模块用于修复语言的底层缺陷
	     */
	    function isNative(fn) {
	        return (/\[native code\]/.test(fn)
	        );
	    }

	    /* istanbul ignore if*/
	    if (!isNative('司徒正美'.trim)) {
	        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	        String.prototype.trim = function () {
	            return this.replace(rtrim, '');
	        };
	    }
	    if (!Object.create) {
	        Object.create = function () {
	            function F() {}

	            return function (o) {
	                if (arguments.length != 1) {
	                    throw new Error('Object.create implementation only accepts one parameter.');
	                }
	                F.prototype = o;
	                return new F();
	            };
	        }();
	    }
	    var hasDontEnumBug = !{
	        'toString': null
	    }.propertyIsEnumerable('toString');
	    var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
	    var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
	    var dontEnumsLength = dontEnums.length;
	    /* istanbul ignore if*/
	    if (!isNative(Object.keys)) {
	        Object.keys = function (object) {
	            //ecma262v5 15.2.3.14
	            var theKeys = [];
	            var skipProto = hasProtoEnumBug && typeof object === 'function';
	            if (typeof object === 'string' || object && object.callee) {
	                for (var i = 0; i < object.length; ++i) {
	                    theKeys.push(String(i));
	                }
	            } else {
	                for (var name in object) {
	                    if (!(skipProto && name === 'prototype') && ohasOwn.call(object, name)) {
	                        theKeys.push(String(name));
	                    }
	                }
	            }

	            if (hasDontEnumBug) {
	                var ctor = object.constructor,
	                    skipConstructor = ctor && ctor.prototype === object;
	                for (var j = 0; j < dontEnumsLength; j++) {
	                    var dontEnum = dontEnums[j];
	                    if (!(skipConstructor && dontEnum === 'constructor') && ohasOwn.call(object, dontEnum)) {
	                        theKeys.push(dontEnum);
	                    }
	                }
	            }
	            return theKeys;
	        };
	    }
	    /* istanbul ignore if*/
	    if (!isNative(Array.isArray)) {
	        Array.isArray = function (a) {
	            return Object.prototype.toString.call(a) === '[object Array]';
	        };
	    }

	    /* istanbul ignore if*/
	    if (!isNative(isNative.bind)) {
	        /* istanbul ignore next*/
	        Function.prototype.bind = function (scope) {
	            if (arguments.length < 2 && scope === void 0) return this;
	            var fn = this,
	                argv = arguments;
	            return function () {
	                var args = [],
	                    i;
	                for (i = 1; i < argv.length; i++) {
	                    args.push(argv[i]);
	                }for (i = 0; i < arguments.length; i++) {
	                    args.push(arguments[i]);
	                }return fn.apply(scope, args);
	            };
	        };
	    }
	    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
	    /**
	     * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
	     * on host objects like NamedNodeMap, NodeList, and HTMLCollection
	     * (technically, since host objects have been implementation-dependent,
	     * at least before ES6, IE hasn't needed to work this way).
	     * Also works on strings, fixes IE < 9 to allow an explicit undefined
	     * for the 2nd argument (as in Firefox), and prevents errors when
	     * called on other DOM objects.
	     */

	    try {
	        // Can't be used with DOM elements in IE < 9
	        _slice.call(avalon.document.documentElement);
	    } catch (e) {
	        // Fails in IE < 9
	        // This will work for genuine arrays, array-like objects,
	        // NamedNodeMap (attributes, entities, notations),
	        // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
	        // and will not fail on other DOM objects (as do DOM elements in IE < 9)
	        /* istanbul ignore next*/
	        ap.slice = function (begin, end) {
	            // IE < 9 gets unhappy with an undefined end argument
	            end = typeof end !== 'undefined' ? end : this.length;

	            // For native Array objects, we use the native slice function
	            if (Array.isArray(this)) {
	                return _slice.call(this, begin, end);
	            }

	            // For array like object we handle it ourselves.
	            var i,
	                cloned = [],
	                size,
	                len = this.length;

	            // Handle negative value for "begin"
	            var start = begin || 0;
	            start = start >= 0 ? start : len + start;

	            // Handle negative value for "end"
	            var upTo = end ? end : len;
	            if (end < 0) {
	                upTo = len + end;
	            }

	            // Actual expected size of the slice
	            size = upTo - start;

	            if (size > 0) {
	                cloned = new Array(size);
	                if (this.charAt) {
	                    for (i = 0; i < size; i++) {
	                        cloned[i] = this.charAt(start + i);
	                    }
	                } else {
	                    for (i = 0; i < size; i++) {
	                        cloned[i] = this[start + i];
	                    }
	                }
	            }

	            return cloned;
	        };
	    }
	    /* istanbul ignore next*/
	    function iterator(vars, body, ret) {
	        var fun = 'for(var ' + vars + 'i=0,n = this.length; i < n; i++){' + body.replace('_', '((i in this) && fn.call(scope,this[i],i,this))') + '}' + ret;
	        /* jshint ignore:start */
	        return Function('fn,scope', fun);
	        /* jshint ignore:end */
	    }
	    /* istanbul ignore if*/
	    if (!isNative(ap.map)) {
	        avalon.shadowCopy(ap, {
	            //定位操作，返回数组中第一个等于给定参数的元素的索引值。
	            indexOf: function indexOf(item, index) {
	                var n = this.length,
	                    i = ~~index;
	                if (i < 0) i += n;
	                for (; i < n; i++) {
	                    if (this[i] === item) return i;
	                }return -1;
	            },
	            //定位操作，同上，不过是从后遍历。
	            lastIndexOf: function lastIndexOf(item, index) {
	                var n = this.length,
	                    i = index == null ? n - 1 : index;
	                if (i < 0) i = Math.max(0, n + i);
	                for (; i >= 0; i--) {
	                    if (this[i] === item) return i;
	                }return -1;
	            },
	            //迭代操作，将数组的元素挨个儿传入一个函数中执行。Prototype.js的对应名字为each。
	            forEach: iterator('', '_', ''),
	            //迭代类 在数组中的每个项上运行一个函数，如果此函数的值为真，则此元素作为新数组的元素收集起来，并返回新数组
	            filter: iterator('r=[],j=0,', 'if(_)r[j++]=this[i]', 'return r'),
	            //收集操作，将数组的元素挨个儿传入一个函数中执行，然后把它们的返回值组成一个新数组返回。Prototype.js的对应名字为collect。
	            map: iterator('r=[],', 'r[i]=_', 'return r'),
	            //只要数组中有一个元素满足条件（放进给定函数返回true），那么它就返回true。Prototype.js的对应名字为any。
	            some: iterator('', 'if(_)return true', 'return false'),
	            //只有数组中的元素都满足条件（放进给定函数返回true），它才返回true。Prototype.js的对应名字为all。
	            every: iterator('', 'if(!_)return false', 'return true')
	        });
	    }

	    //这里放置存在异议的方法
	    var compaceQuote = function () {
	        //https://github.com/bestiejs/json3/blob/master/lib/json3.js
	        var Escapes = {
	            92: "\\\\",
	            34: '\\"',
	            8: "\\b",
	            12: "\\f",
	            10: "\\n",
	            13: "\\r",
	            9: "\\t"
	        };

	        var leadingZeroes = '000000';
	        var toPaddedString = function toPaddedString(width, value) {
	            return (leadingZeroes + (value || 0)).slice(-width);
	        };
	        var unicodePrefix = '\\u00';
	        var escapeChar = function escapeChar(character) {
	            var charCode = character.charCodeAt(0),
	                escaped = Escapes[charCode];
	            if (escaped) {
	                return escaped;
	            }
	            return unicodePrefix + toPaddedString(2, charCode.toString(16));
	        };
	        var reEscape = /[\x00-\x1f\x22\x5c]/g;
	        return function (value) {
	            /* istanbul ignore next */
	            reEscape.lastIndex = 0;
	            /* istanbul ignore next */
	            return '"' + (reEscape.test(value) ? String(value).replace(reEscape, escapeChar) : value) + '"';
	        };
	    }();
	    try {
	        avalon._quote = JSON.stringify;
	    } catch (e) {
	        /* istanbul ignore next  */
	        avalon._quote = compaceQuote;
	    }

	    var class2type = {};
	    'Boolean Number String Function Array Date RegExp Object Error'.replace(avalon.rword, function (name) {
	        class2type['[object ' + name + ']'] = name.toLowerCase();
	    });

	    avalon.type = function (obj) {
	        //取得目标的类型
	        if (obj == null) {
	            return String(obj);
	        }
	        // 早期的webkit内核浏览器实现了已废弃的ecma262v4标准，可以将正则字面量当作函数使用，因此typeof在判定正则时会返回function
	        return typeof obj === 'object' || typeof obj === 'function' ? class2type[inspect.call(obj)] || 'object' : typeof obj;
	    };

	    var rfunction = /^\s*\bfunction\b/;

	    avalon.isFunction = /* istanbul ignore if */typeof alert === 'object' ? function (fn) {
	        /* istanbul ignore next */
	        try {
	            /* istanbul ignore next */
	            return rfunction.test(fn + '');
	        } catch (e) {
	            /* istanbul ignore next */
	            return false;
	        }
	    } : function (fn) {
	        return inspect.call(fn) === '[object Function]';
	    };

	    // 利用IE678 window == document为true,document == window竟然为false的神奇特性
	    // 标准浏览器及IE9，IE10等使用 正则检测
	    /* istanbul ignore next */
	    function isWindowCompact(obj) {
	        if (!obj) {
	            return false;
	        }
	        return obj == obj.document && obj.document != obj; //jshint ignore:line
	    }

	    var rwindow = /^\[object (?:Window|DOMWindow|global)\]$/;

	    function isWindowModern(obj) {
	        return rwindow.test(inspect.call(obj));
	    }

	    avalon.isWindow = isWindowModern(avalon.window) ? isWindowModern : isWindowCompact;

	    var enu;
	    var enumerateBUG;
	    for (enu in avalon({})) {
	        break;
	    }

	    enumerateBUG = enu !== '0'; //IE6下为true, 其他为false

	    /*判定是否是一个朴素的javascript对象（Object），不是DOM对象，不是BOM对象，不是自定义类的实例*/
	    /* istanbul ignore next */
	    function isPlainObjectCompact(obj, key) {
	        if (!obj || avalon.type(obj) !== 'object' || obj.nodeType || avalon.isWindow(obj)) {
	            return false;
	        }
	        try {
	            //IE内置对象没有constructor
	            if (obj.constructor && !ohasOwn.call(obj, 'constructor') && !ohasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
	                return false;
	            }
	            var isVBscript = obj.$vbthis;
	        } catch (e) {
	            //IE8 9会在这里抛错
	            return false;
	        }
	        /* istanbul ignore if */
	        if (enumerateBUG) {
	            for (key in obj) {
	                return ohasOwn.call(obj, key);
	            }
	        }
	        for (key in obj) {}
	        return key === undefined$1 || ohasOwn.call(obj, key);
	    }

	    /* istanbul ignore next */
	    function isPlainObjectModern(obj) {
	        // 简单的 typeof obj === 'object'检测，会致使用isPlainObject(window)在opera下通不过
	        return inspect.call(obj) === '[object Object]' && Object.getPrototypeOf(obj) === Object.prototype;
	    }
	    /* istanbul ignore next */
	    avalon.isPlainObject = /\[native code\]/.test(Object.getPrototypeOf) ? isPlainObjectModern : isPlainObjectCompact;

	    var rcanMix = /object|function/;

	    //与jQuery.extend方法，可用于浅拷贝，深拷贝
	    /* istanbul ignore next */
	    avalon.mix = avalon.fn.mix = function () {
	        var n = arguments.length,
	            isDeep = false,
	            i = 0,
	            array = [];
	        if (arguments[0] === true) {
	            isDeep = true;
	            i = 1;
	        }
	        //将所有非空对象变成空对象
	        for (; i < n; i++) {
	            var el = arguments[i];
	            el = el && rcanMix.test(typeof el) ? el : {};
	            array.push(el);
	        }
	        if (array.length === 1) {
	            array.unshift(this);
	        }
	        return innerExtend(isDeep, array);
	    };
	    var undefined$1;

	    function innerExtend(isDeep, array) {
	        var target = array[0],
	            copyIsArray,
	            clone,
	            name;
	        for (var i = 1, length = array.length; i < length; i++) {
	            //只处理非空参数
	            var options = array[i];
	            var noCloneArrayMethod = Array.isArray(options);
	            for (name in options) {
	                if (noCloneArrayMethod && !options.hasOwnProperty(name)) {
	                    continue;
	                }
	                try {
	                    var src = target[name];
	                    var copy = options[name]; //当options为VBS对象时报错
	                } catch (e) {
	                    continue;
	                }

	                // 防止环引用
	                if (target === copy) {
	                    continue;
	                }
	                if (isDeep && copy && (avalon.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

	                    if (copyIsArray) {
	                        copyIsArray = false;
	                        clone = src && Array.isArray(src) ? src : [];
	                    } else {
	                        clone = src && avalon.isPlainObject(src) ? src : {};
	                    }

	                    target[name] = innerExtend(isDeep, [clone, copy]);
	                } else if (copy !== undefined$1) {
	                    target[name] = copy;
	                }
	            }
	        }
	        return target;
	    }

	    var rarraylike = /(Array|List|Collection|Map|Arguments)\]$/;
	    /*判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象*/
	    /* istanbul ignore next */
	    function isArrayLike(obj) {
	        if (!obj) return false;
	        var n = obj.length;
	        if (n === n >>> 0) {
	            //检测length属性是否为非负整数
	            var type = inspect.call(obj);
	            if (rarraylike.test(type)) return true;
	            if (type !== '[object Object]') return false;
	            try {
	                if ({}.propertyIsEnumerable.call(obj, 'length') === false) {
	                    //如果是原生对象
	                    return rfunction.test(obj.item || obj.callee);
	                }
	                return true;
	            } catch (e) {
	                //IE的NodeList直接抛错
	                return !obj.window; //IE6-8 window
	            }
	        }
	        return false;
	    }

	    avalon.each = function (obj, fn) {
	        if (obj) {
	            //排除null, undefined
	            var i = 0;
	            if (isArrayLike(obj)) {
	                for (var n = obj.length; i < n; i++) {
	                    if (fn(i, obj[i]) === false) break;
	                }
	            } else {
	                for (i in obj) {
	                    if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
	                        break;
	                    }
	                }
	            }
	        }
	    };
	    (function () {
	        var welcomeIntro = ["%cavalon.js %c" + avalon.version + " %cin debug mode, %cmore...", "color: rgb(114, 157, 52); font-weight: normal;", "color: rgb(85, 85, 85); font-weight: normal;", "color: rgb(85, 85, 85); font-weight: normal;", "color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;"];
	        var welcomeMessage = "You're running avalon in debug mode - messages will be printed to the console to help you fix problems and optimise your application.\n\n" + 'To disable debug mode, add this line at the start of your app:\n\n  avalon.config({debug: false});\n\n' + 'Debug mode also automatically shut down amicably when your app is minified.\n\n' + "Get help and support:\n  https://segmentfault.com/t/avalon\n  http://avalonjs.coding.me/\n  http://www.baidu-x.com/?q=avalonjs\n  http://www.avalon.org.cn/\n\nFound a bug? Raise an issue:\n  https://github.com/RubyLouvre/avalon/issues\n\n";
	        if (typeof console === 'object') {
	            var con = console;
	            var method = con.groupCollapsed || con.log;
	            Function.apply.call(method, con, welcomeIntro);
	            con.log(welcomeMessage);
	            if (method !== console.log) {
	                con.groupEnd(welcomeIntro);
	            }
	        }
	    })();

	    function toFixedFix(n, prec) {
	        var k = Math.pow(10, prec);
	        return '' + (Math.round(n * k) / k).toFixed(prec);
	    }
	    function numberFilter(number, decimals, point, thousands) {
	        //https://github.com/txgruppi/number_format
	        //form http://phpjs.org/functions/number_format/
	        //number 必需，要格式化的数字
	        //decimals 可选，规定多少个小数位。
	        //point 可选，规定用作小数点的字符串（默认为 . ）。
	        //thousands 可选，规定用作千位分隔符的字符串（默认为 , ），如果设置了该参数，那么所有其他参数都是必需的。
	        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	        var n = !isFinite(+number) ? 0 : +number,
	            prec = !isFinite(+decimals) ? 3 : Math.abs(decimals),
	            sep = typeof thousands === 'string' ? thousands : ",",
	            dec = point || ".",
	            s = '';

	        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
	        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	        if (s[0].length > 3) {
	            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	        }
	        /** //好像没有用
	         var s1 = s[1] || ''
	        
	          if (s1.length < prec) {
	                  s1 += new Array(prec - s[1].length + 1).join('0')
	                  s[1] = s1
	          }
	          **/
	        return s.join(dec);
	    }

	    var rscripts = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim;
	    var ron = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g;
	    var ropen = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig;
	    var rsanitize = {
	        a: /\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,
	        img: /\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,
	        form: /\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig
	    };

	    //https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	    //    <a href="javasc&NewLine;ript&colon;alert('XSS')">chrome</a> 
	    //    <a href="data:text/html;base64, PGltZyBzcmM9eCBvbmVycm9yPWFsZXJ0KDEpPg==">chrome</a>
	    //    <a href="jav	ascript:alert('XSS');">IE67chrome</a>
	    //    <a href="jav&#x09;ascript:alert('XSS');">IE67chrome</a>
	    //    <a href="jav&#x0A;ascript:alert('XSS');">IE67chrome</a>
	    function sanitizeFilter(str) {
	        return str.replace(rscripts, "").replace(ropen, function (a, b) {
	            var match = a.toLowerCase().match(/<(\w+)\s/);
	            if (match) {
	                //处理a标签的href属性，img标签的src属性，form标签的action属性
	                var reg = rsanitize[match[1]];
	                if (reg) {
	                    a = a.replace(reg, function (s, name, value) {
	                        var quote = value.charAt(0);
	                        return name + "=" + quote + "javascript:void(0)" + quote; // jshint ignore:line
	                    });
	                }
	            }
	            return a.replace(ron, " ").replace(/\s+/g, " "); //移除onXXX事件
	        });
	    }

	    /*
	     'yyyy': 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
	     'yy': 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
	     'y': 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
	     'MMMM': Month in year (January-December)
	     'MMM': Month in year (Jan-Dec)
	     'MM': Month in year, padded (01-12)
	     'M': Month in year (1-12)
	     'dd': Day in month, padded (01-31)
	     'd': Day in month (1-31)
	     'EEEE': Day in Week,(Sunday-Saturday)
	     'EEE': Day in Week, (Sun-Sat)
	     'HH': Hour in day, padded (00-23)
	     'H': Hour in day (0-23)
	     'hh': Hour in am/pm, padded (01-12)
	     'h': Hour in am/pm, (1-12)
	     'mm': Minute in hour, padded (00-59)
	     'm': Minute in hour (0-59)
	     'ss': Second in minute, padded (00-59)
	     's': Second in minute (0-59)
	     'a': am/pm marker
	     'Z': 4 digit (+sign) representation of the timezone offset (-1200-+1200)
	     format string can also be one of the following predefined localizable formats:
	     
	     'medium': equivalent to 'MMM d, y h:mm:ss a' for en_US locale (e.g. Sep 3, 2010 12:05:08 pm)
	     'short': equivalent to 'M/d/yy h:mm a' for en_US locale (e.g. 9/3/10 12:05 pm)
	     'fullDate': equivalent to 'EEEE, MMMM d,y' for en_US locale (e.g. Friday, September 3, 2010)
	     'longDate': equivalent to 'MMMM d, y' for en_US locale (e.g. September 3, 2010
	     'mediumDate': equivalent to 'MMM d, y' for en_US locale (e.g. Sep 3, 2010)
	     'shortDate': equivalent to 'M/d/yy' for en_US locale (e.g. 9/3/10)
	     'mediumTime': equivalent to 'h:mm:ss a' for en_US locale (e.g. 12:05:08 pm)
	     'shortTime': equivalent to 'h:mm a' for en_US locale (e.g. 12:05 pm)
	     */

	    function toInt(str) {
	        return parseInt(str, 10) || 0;
	    }

	    function padNumber(num, digits, trim) {
	        var neg = '';
	        /* istanbul ignore if*/
	        if (num < 0) {
	            neg = '-';
	            num = -num;
	        }
	        num = '' + num;
	        while (num.length < digits) {
	            num = '0' + num;
	        }if (trim) num = num.substr(num.length - digits);
	        return neg + num;
	    }

	    function dateGetter(name, size, offset, trim) {
	        return function (date) {
	            var value = date["get" + name]();
	            if (offset > 0 || value > -offset) value += offset;
	            if (value === 0 && offset === -12) {
	                /* istanbul ignore next*/
	                value = 12;
	            }
	            return padNumber(value, size, trim);
	        };
	    }

	    function dateStrGetter(name, shortForm) {
	        return function (date, formats) {
	            var value = date["get" + name]();
	            var get = (shortForm ? "SHORT" + name : name).toUpperCase();
	            return formats[get][value];
	        };
	    }

	    function timeZoneGetter(date) {
	        var zone = -1 * date.getTimezoneOffset();
	        var paddedZone = zone >= 0 ? "+" : "";
	        paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
	        return paddedZone;
	    }
	    //取得上午下午
	    function ampmGetter(date, formats) {
	        return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
	    }
	    var DATE_FORMATS = {
	        yyyy: dateGetter("FullYear", 4),
	        yy: dateGetter("FullYear", 2, 0, true),
	        y: dateGetter("FullYear", 1),
	        MMMM: dateStrGetter("Month"),
	        MMM: dateStrGetter("Month", true),
	        MM: dateGetter("Month", 2, 1),
	        M: dateGetter("Month", 1, 1),
	        dd: dateGetter("Date", 2),
	        d: dateGetter("Date", 1),
	        HH: dateGetter("Hours", 2),
	        H: dateGetter("Hours", 1),
	        hh: dateGetter("Hours", 2, -12),
	        h: dateGetter("Hours", 1, -12),
	        mm: dateGetter("Minutes", 2),
	        m: dateGetter("Minutes", 1),
	        ss: dateGetter("Seconds", 2),
	        s: dateGetter("Seconds", 1),
	        sss: dateGetter("Milliseconds", 3),
	        EEEE: dateStrGetter("Day"),
	        EEE: dateStrGetter("Day", true),
	        a: ampmGetter,
	        Z: timeZoneGetter
	    };
	    var rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/;
	    var raspnetjson = /^\/Date\((\d+)\)\/$/;
	    function dateFilter(date, format) {
	        var locate = dateFilter.locate,
	            text = "",
	            parts = [],
	            fn,
	            match;
	        format = format || "mediumDate";
	        format = locate[format] || format;
	        if (typeof date === "string") {
	            if (/^\d+$/.test(date)) {
	                date = toInt(date);
	            } else if (raspnetjson.test(date)) {
	                date = +RegExp.$1;
	            } else {
	                var trimDate = date.trim();
	                var dateArray = [0, 0, 0, 0, 0, 0, 0];
	                var oDate = new Date(0);
	                //取得年月日
	                trimDate = trimDate.replace(/^(\d+)\D(\d+)\D(\d+)/, function (_, a, b, c) {
	                    var array = c.length === 4 ? [c, a, b] : [a, b, c];
	                    dateArray[0] = toInt(array[0]); //年
	                    dateArray[1] = toInt(array[1]) - 1; //月
	                    dateArray[2] = toInt(array[2]); //日
	                    return "";
	                });
	                var dateSetter = oDate.setFullYear;
	                var timeSetter = oDate.setHours;
	                trimDate = trimDate.replace(/[T\s](\d+):(\d+):?(\d+)?\.?(\d)?/, function (_, a, b, c, d) {
	                    dateArray[3] = toInt(a); //小时
	                    dateArray[4] = toInt(b); //分钟
	                    dateArray[5] = toInt(c); //秒
	                    if (d) {
	                        //毫秒
	                        dateArray[6] = Math.round(parseFloat("0." + d) * 1000);
	                    }
	                    return "";
	                });
	                var tzHour = 0;
	                var tzMin = 0;
	                trimDate = trimDate.replace(/Z|([+-])(\d\d):?(\d\d)/, function (z, symbol, c, d) {
	                    dateSetter = oDate.setUTCFullYear;
	                    timeSetter = oDate.setUTCHours;
	                    if (symbol) {
	                        tzHour = toInt(symbol + c);
	                        tzMin = toInt(symbol + d);
	                    }
	                    return '';
	                });

	                dateArray[3] -= tzHour;
	                dateArray[4] -= tzMin;
	                dateSetter.apply(oDate, dateArray.slice(0, 3));
	                timeSetter.apply(oDate, dateArray.slice(3));
	                date = oDate;
	            }
	        }
	        if (typeof date === 'number') {
	            date = new Date(date);
	        }

	        while (format) {
	            match = rdateFormat.exec(format);
	            /* istanbul ignore else */
	            if (match) {
	                parts = parts.concat(match.slice(1));
	                format = parts.pop();
	            } else {
	                parts.push(format);
	                format = null;
	            }
	        }
	        parts.forEach(function (value) {
	            fn = DATE_FORMATS[value];
	            text += fn ? fn(date, locate) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
	        });
	        return text;
	    }

	    var locate = {
	        AMPMS: {
	            0: '上午',
	            1: '下午'
	        },
	        DAY: {
	            0: '星期日',
	            1: '星期一',
	            2: '星期二',
	            3: '星期三',
	            4: '星期四',
	            5: '星期五',
	            6: '星期六'
	        },
	        MONTH: {
	            0: '1月',
	            1: '2月',
	            2: '3月',
	            3: '4月',
	            4: '5月',
	            5: '6月',
	            6: '7月',
	            7: '8月',
	            8: '9月',
	            9: '10月',
	            10: '11月',
	            11: '12月'
	        },
	        SHORTDAY: {
	            '0': '周日',
	            '1': '周一',
	            '2': '周二',
	            '3': '周三',
	            '4': '周四',
	            '5': '周五',
	            '6': '周六'
	        },
	        fullDate: 'y年M月d日EEEE',
	        longDate: 'y年M月d日',
	        medium: 'yyyy-M-d H:mm:ss',
	        mediumDate: 'yyyy-M-d',
	        mediumTime: 'H:mm:ss',
	        'short': 'yy-M-d ah:mm',
	        shortDate: 'yy-M-d',
	        shortTime: 'ah:mm'
	    };
	    locate.SHORTMONTH = locate.MONTH;
	    dateFilter.locate = locate;

	    /**
	    $$skipArray:是系统级通用的不可监听属性
	    $skipArray: 是当前对象特有的不可监听属性
	    
	     不同点是
	     $$skipArray被hasOwnProperty后返回false
	     $skipArray被hasOwnProperty后返回true
	     */
	    var falsy;
	    var $$skipArray = {
	        $id: falsy,
	        $render: falsy,
	        $track: falsy,
	        $element: falsy,
	        $computed: falsy,
	        $watch: falsy,
	        $fire: falsy,
	        $events: falsy,
	        $accessors: falsy,
	        $hashcode: falsy,
	        $mutations: falsy,
	        $vbthis: falsy,
	        $vbsetter: falsy
	    };

	    /*
	    https://github.com/hufyhang/orderBy/blob/master/index.js
	    */

	    function orderBy(array, by, decend) {
	        var type = avalon.type(array);
	        if (type !== 'array' && type !== 'object') throw 'orderBy只能处理对象或数组';
	        var criteria = typeof by == 'string' ? function (el) {
	            return el && el[by];
	        } : typeof by === 'function' ? by : function (el) {
	            return el;
	        };
	        var mapping = {};
	        var temp = [];
	        __repeat(array, Array.isArray(array), function (key) {
	            var val = array[key];
	            var k = criteria(val, key);
	            if (k in mapping) {
	                mapping[k].push(key);
	            } else {
	                mapping[k] = [key];
	            }
	            temp.push(k);
	        });

	        temp.sort();
	        if (decend < 0) {
	            temp.reverse();
	        }
	        var _array = type === 'array';
	        var target = _array ? [] : {};
	        return recovery(target, temp, function (k) {
	            var key = mapping[k].shift();
	            if (_array) {
	                target.push(array[key]);
	            } else {
	                target[key] = array[key];
	            }
	        });
	    }

	    function __repeat(array, isArray$$1, cb) {
	        if (isArray$$1) {
	            array.forEach(function (val, index) {
	                cb(index);
	            });
	        } else if (typeof array.$track === 'string') {
	            array.$track.replace(/[^☥]+/g, function (k) {
	                cb(k);
	            });
	        } else {
	            for (var i in array) {
	                if (array.hasOwnProperty(i)) {
	                    cb(i);
	                }
	            }
	        }
	    }
	    function filterBy(array, search) {
	        var type = avalon.type(array);
	        if (type !== 'array' && type !== 'object') throw 'filterBy只能处理对象或数组';
	        var args = avalon.slice(arguments, 2);
	        var stype = avalon.type(search);
	        if (stype === 'function') {
	            var criteria = search;
	        } else if (stype === 'string' || stype === 'number') {
	            if (search === '') {
	                return array;
	            } else {
	                var reg = new RegExp(avalon.escapeRegExp(search), 'i');
	                criteria = function criteria(el) {
	                    return reg.test(el);
	                };
	            }
	        } else {
	            return array;
	        }
	        var index = 0;
	        var isArray$$1 = type === 'array';
	        var target = isArray$$1 ? [] : {};
	        __repeat(array, isArray$$1, function (key) {
	            var val = array[key];
	            if (criteria.apply(val, [val, index].concat(args))) {
	                if (isArray$$1) {
	                    target.push(val);
	                } else {
	                    target[key] = val;
	                }
	            }
	            index++;
	        });
	        return target;
	    }

	    function selectBy(data, array, defaults) {
	        if (avalon.isObject(data) && !Array.isArray(data)) {
	            var target = [];
	            return recovery(target, array, function (name) {
	                target.push(data.hasOwnProperty(name) ? data[name] : defaults ? defaults[name] : '');
	            });
	        } else {
	            return data;
	        }
	    }

	    function limitBy(input, limit, begin) {
	        var type = avalon.type(input);
	        if (type !== 'array' && type !== 'object') throw 'limitBy只能处理对象或数组';
	        //必须是数值
	        if (typeof limit !== 'number') {
	            return input;
	        }
	        //不能为NaN
	        if (limit !== limit) {
	            return input;
	        }
	        //将目标转换为数组
	        if (type === 'object') {
	            input = convertArray(input, false);
	        }
	        var n = input.length;
	        limit = Math.floor(Math.min(n, limit));
	        begin = typeof begin === 'number' ? begin : 0;
	        if (begin < 0) {
	            begin = Math.max(0, n + begin);
	        }
	        var data = [];
	        for (var i = begin; i < n; i++) {
	            if (data.length === limit) {
	                break;
	            }
	            data.push(input[i]);
	        }
	        var isArray$$1 = type === 'array';
	        if (isArray$$1) {
	            return data;
	        }
	        var target = {};
	        return recovery(target, data, function (el) {
	            target[el.key] = el.value;
	        });
	    }

	    function recovery(ret, array, callback) {
	        for (var i = 0, n = array.length; i < n; i++) {
	            callback(array[i]);
	        }
	        return ret;
	    }

	    //Chrome谷歌浏览器中js代码Array.sort排序的bug乱序解决办法
	    //http://www.cnblogs.com/yzeng/p/3949182.html
	    function convertArray(array, isArray$$1) {
	        var ret = [],
	            i = 0;
	        __repeat(array, isArray$$1, function (key) {
	            ret[i] = {
	                oldIndex: i,
	                value: array[key],
	                key: key
	            };
	            i++;
	        });
	        return ret;
	    }

	    var eventFilters = {
	        stop: function stop(e) {
	            e.stopPropagation();
	            return e;
	        },
	        prevent: function prevent(e) {
	            e.preventDefault();
	            return e;
	        }
	    };
	    var keys = {
	        esc: 27,
	        tab: 9,
	        enter: 13,
	        space: 32,
	        del: 46,
	        up: 38,
	        left: 37,
	        right: 39,
	        down: 40
	    };
	    for (var name$1 in keys) {
	        (function (filter, key) {
	            eventFilters[filter] = function (e) {
	                if (e.which !== key) {
	                    e.$return = true;
	                }
	                return e;
	            };
	        })(name$1, keys[name$1]);
	    }

	    //https://github.com/teppeis/htmlspecialchars
	    function escapeFilter(str) {
	        if (str == null) return '';

	        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
	    }

	    var filters = avalon.filters = {};

	    avalon.composeFilters = function () {
	        var args = arguments;
	        return function (value) {
	            for (var i = 0, arr; arr = args[i++];) {
	                var name = arr[0];
	                var filter = avalon.filters[name];
	                if (typeof filter === 'function') {
	                    arr[0] = value;
	                    try {
	                        value = filter.apply(0, arr);
	                    } catch (e) {}
	                }
	            }
	            return value;
	        };
	    };

	    avalon.escapeHtml = escapeFilter;

	    avalon.mix(filters, {
	        uppercase: function uppercase(str) {
	            return String(str).toUpperCase();
	        },
	        lowercase: function lowercase(str) {
	            return String(str).toLowerCase();
	        },
	        truncate: function truncate(str, length, end) {
	            //length，新字符串长度，truncation，新字符串的结尾的字段,返回新字符串
	            if (!str) {
	                return '';
	            }
	            str = String(str);
	            if (isNaN(length)) {
	                length = 30;
	            }
	            end = typeof end === "string" ? end : "...";
	            return str.length > length ? str.slice(0, length - end.length) + end : /* istanbul ignore else*/
	            str;
	        },

	        camelize: avalon.camelize,
	        date: dateFilter,
	        escape: escapeFilter,
	        sanitize: sanitizeFilter,
	        number: numberFilter,
	        currency: function currency(amount, symbol, fractionSize) {
	            return (symbol || '\xA5') + numberFilter(amount, isFinite(fractionSize) ? /* istanbul ignore else*/fractionSize : 2);
	        }
	    }, { filterBy: filterBy, orderBy: orderBy, selectBy: selectBy, limitBy: limitBy }, eventFilters);

	    var rcheckedType = /^(?:checkbox|radio)$/;

	    /* istanbul ignore next */
	    function fixElement(dest, src) {
	        if (dest.nodeType !== 1) {
	            return;
	        }
	        var nodeName = dest.nodeName.toLowerCase();

	        if (nodeName === "script") {
	            if (dest.text !== src.text) {
	                dest.type = "noexec";
	                dest.text = src.text;
	                dest.type = src.type || "";
	            }
	        } else if (nodeName === 'object') {
	            var params = src.childNodes;
	            if (dest.childNodes.length !== params.length) {
	                avalon.clearHTML(dest);
	                for (var i = 0, el; el = params[i++];) {
	                    dest.appendChild(el.cloneNode(true));
	                }
	            }
	        } else if (nodeName === 'input' && rcheckedType.test(src.nodeName)) {

	            dest.defaultChecked = dest.checked = src.checked;
	            if (dest.value !== src.value) {
	                dest.value = src.value;
	            }
	        } else if (nodeName === 'option') {
	            dest.defaultSelected = dest.selected = src.defaultSelected;
	        } else if (nodeName === 'input' || nodeName === 'textarea') {
	            dest.defaultValue = src.defaultValue;
	        }
	    }

	    /* istanbul ignore next */
	    function getAll(context) {
	        return typeof context.getElementsByTagName !== 'undefined' ? context.getElementsByTagName('*') : typeof context.querySelectorAll !== 'undefined' ? context.querySelectorAll('*') : [];
	    }

	    /* istanbul ignore next */
	    function fixClone(src) {
	        var target = src.cloneNode(true);
	        //http://www.myexception.cn/web/665613.html
	        // target.expando = null
	        var t = getAll(target);
	        var s = getAll(src);
	        for (var i = 0; i < s.length; i++) {
	            fixElement(t[i], s[i]);
	        }
	        return target;
	    }

	    /* istanbul ignore next */
	    function fixContains(root, el) {
	        try {
	            //IE6-8,游离于DOM树外的文本节点，访问parentNode有时会抛错
	            while (el = el.parentNode) {
	                if (el === root) return true;
	            }
	        } catch (e) {}
	        return false;
	    }

	    avalon.contains = fixContains;

	    avalon.cloneNode = function (a) {
	        return a.cloneNode(true);
	    };

	    //IE6-11的文档对象没有contains
	    /* istanbul ignore next */
	    function shimHack() {
	        if (msie < 10) {
	            avalon.cloneNode = fixClone;
	        }
	        if (!document$1.contains) {
	            document$1.contains = function (b) {
	                return fixContains(document$1, b);
	            };
	        }
	        if (avalon.modern) {
	            if (!document$1.createTextNode('x').contains) {
	                Node.prototype.contains = function (child) {
	                    //IE6-8没有Node对象
	                    return fixContains(this, child);
	                };
	            }
	        }
	        //firefox 到11时才有outerHTML
	        function fixFF(prop, cb) {
	            if (!(prop in root) && HTMLElement.prototype.__defineGetter__) {
	                HTMLElement.prototype.__defineGetter__(prop, cb);
	            }
	        }
	        fixFF('outerHTML', function () {
	            var div = document$1.createElement('div');
	            div.appendChild(this);
	            return div.innerHTML;
	        });
	        fixFF('children', function () {
	            var children = [];
	            for (var i = 0, el; el = this.childNodes[i++];) {
	                if (el.nodeType === 1) {
	                    children.push(el);
	                }
	            }
	            return children;
	        });
	        fixFF('innerText', function () {
	            //firefox45+, chrome4+ http://caniuse.com/#feat=innertext
	            return this.textContent;
	        });
	    }

	    if (inBrowser) {
	        shimHack();
	    }

	    function ClassList(node) {
	        this.node = node;
	    }

	    ClassList.prototype = {
	        toString: function toString() {
	            var node = this.node;
	            var cls = node.className;
	            var str = typeof cls === 'string' ? cls : cls.baseVal;
	            var match = str.match(rnowhite);
	            return match ? match.join(' ') : '';
	        },
	        contains: function contains(cls) {
	            return (' ' + this + ' ').indexOf(' ' + cls + ' ') > -1;
	        },
	        add: function add(cls) {
	            if (!this.contains(cls)) {
	                this.set(this + ' ' + cls);
	            }
	        },
	        remove: function remove(cls) {
	            this.set((' ' + this + ' ').replace(' ' + cls + ' ', ' '));
	        },
	        set: function set(cls) {
	            cls = cls.trim();
	            var node = this.node;
	            if (typeof node.className === 'object') {
	                //SVG元素的className是一个对象 SVGAnimatedString { baseVal='', animVal=''}，只能通过set/getAttribute操作
	                node.setAttribute('class', cls);
	            } else {
	                node.className = cls;
	            }
	            if (!cls) {
	                node.removeAttribute('class');
	            }
	            //toggle存在版本差异，因此不使用它
	        }
	    };

	    function classListFactory(node) {
	        if (!('classList' in node)) {
	            node.classList = new ClassList(node);
	        }
	        return node.classList;
	    }

	    'add,remove'.replace(rword, function (method) {
	        avalon.fn[method + 'Class'] = function (cls) {
	            var el = this[0] || {};
	            //https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox/Releases/26
	            if (cls && typeof cls === 'string' && el.nodeType === 1) {
	                cls.replace(rnowhite, function (c) {
	                    classListFactory(el)[method](c);
	                });
	            }
	            return this;
	        };
	    });

	    avalon.shadowCopy(avalon.fn, {
	        hasClass: function hasClass(cls) {
	            var el = this[0] || {};
	            return el.nodeType === 1 && classListFactory(el).contains(cls);
	        },
	        toggleClass: function toggleClass(value, stateVal) {
	            var isBool = typeof stateVal === 'boolean';
	            var me = this;
	            String(value).replace(rnowhite, function (c) {
	                var state = isBool ? stateVal : !me.hasClass(c);
	                me[state ? 'addClass' : 'removeClass'](c);
	            });
	            return this;
	        }
	    });

	    var propMap = { //不规则的属性名映射
	        'accept-charset': 'acceptCharset',
	        'char': 'ch',
	        charoff: 'chOff',
	        'class': 'className',
	        'for': 'htmlFor',
	        'http-equiv': 'httpEquiv'
	    };
	    /*
	    contenteditable不是布尔属性
	    http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/
	    contenteditable=''
	    contenteditable='events'
	    contenteditable='caret'
	    contenteditable='plaintext-only'
	    contenteditable='true'
	    contenteditable='false'
	     */
	    var bools = ['autofocus,autoplay,async,allowTransparency,checked,controls', 'declare,disabled,defer,defaultChecked,defaultSelected,', 'isMap,loop,multiple,noHref,noResize,noShade', 'open,readOnly,selected'].join(',');

	    bools.replace(/\w+/g, function (name) {
	        propMap[name.toLowerCase()] = name;
	    });

	    var anomaly = ['accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan', 'dateTime,defaultValue,contentEditable,frameBorder,longDesc,maxLength,' + 'marginWidth,marginHeight,rowSpan,tabIndex,useMap,vSpace,valueType,vAlign'].join(',');

	    anomaly.replace(/\w+/g, function (name) {
	        propMap[name.toLowerCase()] = name;
	    });

	    //module.exports = propMap

	    function isVML(src) {
	        var nodeName = src.nodeName;
	        return nodeName.toLowerCase() === nodeName && !!src.scopeName && src.outerText === '';
	    }

	    var rvalidchars = /^[\],:{}\s]*$/;
	    var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	    var rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g;
	    var rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;

	    function compactParseJSON(data) {
	        if (typeof data === 'string') {
	            data = data.trim();
	            if (data) {
	                if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
	                    return new Function('return ' + data)(); // jshint ignore:line
	                }
	            }
	            throw TypeError('Invalid JSON: [' + data + ']');
	        }
	        return data;
	    }

	    var rsvg = /^\[object SVG\w*Element\]$/;
	    var ramp = /&amp;/g;
	    function updateAttrs(node, attrs) {
	        for (var attrName in attrs) {
	            try {
	                var val = attrs[attrName];
	                // 处理路径属性
	                /* istanbul ignore if*/

	                //处理HTML5 data-*属性 SVG
	                if (attrName.indexOf('data-') === 0 || rsvg.test(node)) {
	                    node.setAttribute(attrName, val);
	                } else {
	                    var propName = propMap[attrName] || attrName;
	                    /* istanbul ignore if */
	                    if (typeof node[propName] === 'boolean') {
	                        if (propName === 'checked') {
	                            node.defaultChecked = !!val;
	                        }
	                        node[propName] = !!val;
	                        //布尔属性必须使用el.xxx = true|false方式设值
	                        //如果为false, IE全系列下相当于setAttribute(xxx,''),
	                        //会影响到样式,需要进一步处理
	                    }

	                    if (val === false) {
	                        //移除属性
	                        node.removeAttribute(propName);
	                        continue;
	                    }
	                    //IE6中classNamme, htmlFor等无法检测它们为内建属性　
	                    if (avalon.msie < 8 && /[A-Z]/.test(propName)) {
	                        node[propName] = val + '';
	                        continue;
	                    }
	                    //SVG只能使用setAttribute(xxx, yyy), VML只能使用node.xxx = yyy ,
	                    //HTML的固有属性必须node.xxx = yyy
	                    /* istanbul ignore next */
	                    var isInnate = !avalon.modern && isVML(node) ? true : isInnateProps(node.nodeName, attrName);
	                    if (isInnate) {
	                        if (attrName === 'href' || attrName === 'src') {
	                            /* istanbul ignore if */
	                            if (avalon.msie < 8) {
	                                val = String(val).replace(ramp, '&'); //处理IE67自动转义的问题
	                            }
	                        }
	                        node[propName] = val + '';
	                    } else {
	                        node.setAttribute(attrName, val);
	                    }
	                }
	            } catch (e) {
	                // 对象不支持此属性或方法 src https://github.com/ecomfe/zrender 
	                // 未知名称。\/n
	                // e.message大概这样,需要trim
	                //IE6-8,元素节点不支持其他元素节点的内置属性,如src, href, for
	                /* istanbul ignore next */
	                avalon.log(String(e.message).trim(), attrName, val);
	            }
	        }
	    }
	    var innateMap = {};

	    function isInnateProps(nodeName, attrName) {
	        var key = nodeName + ":" + attrName;
	        if (key in innateMap) {
	            return innateMap[key];
	        }
	        return innateMap[key] = attrName in document$1.createElement(nodeName);
	    }
	    try {
	        avalon.parseJSON = JSON.parse;
	    } catch (e) {
	        /* istanbul ignore next */
	        avalon.parseJSON = compactParseJSON;
	    }

	    avalon.fn.attr = function (name, value) {
	        if (arguments.length === 2) {
	            this[0].setAttribute(name, value);
	            return this;
	        } else {
	            return this[0].getAttribute(name);
	        }
	    };

	    var cssMap = {
	        'float': 'cssFloat'
	    };
	    avalon.cssNumber = oneObject('animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom');
	    var prefixes = ['', '-webkit-', '-o-', '-moz-', '-ms-'];
	    /* istanbul ignore next */
	    avalon.cssName = function (name, host, camelCase) {
	        if (cssMap[name]) {
	            return cssMap[name];
	        }
	        host = host || avalon.root.style || {};
	        for (var i = 0, n = prefixes.length; i < n; i++) {
	            camelCase = avalon.camelize(prefixes[i] + name);
	            if (camelCase in host) {
	                return cssMap[name] = camelCase;
	            }
	        }
	        return null;
	    };
	    /* istanbul ignore next */
	    avalon.css = function (node, name, value, fn) {
	        //读写删除元素节点的样式
	        if (node instanceof avalon) {
	            node = node[0];
	        }
	        if (node.nodeType !== 1) {
	            return;
	        }
	        var prop = avalon.camelize(name);
	        name = avalon.cssName(prop) || /* istanbul ignore next*/prop;
	        if (value === void 0 || typeof value === 'boolean') {
	            //获取样式
	            fn = cssHooks[prop + ':get'] || cssHooks['@:get'];
	            if (name === 'background') {
	                name = 'backgroundColor';
	            }
	            var val = fn(node, name);
	            return value === true ? parseFloat(val) || 0 : val;
	        } else if (value === '') {
	            //请除样式
	            node.style[name] = '';
	        } else {
	            //设置样式
	            if (value == null || value !== value) {
	                return;
	            }
	            if (isFinite(value) && !avalon.cssNumber[prop]) {
	                value += 'px';
	            }
	            fn = cssHooks[prop + ':set'] || cssHooks['@:set'];
	            fn(node, name, value);
	        }
	    };
	    /* istanbul ignore next */
	    avalon.fn.css = function (name, value) {
	        if (avalon.isPlainObject(name)) {
	            for (var i in name) {
	                avalon.css(this, i, name[i]);
	            }
	        } else {
	            var ret = avalon.css(this, name, value);
	        }
	        return ret !== void 0 ? ret : this;
	    };
	    /* istanbul ignore next */
	    avalon.fn.position = function () {
	        var offsetParent,
	            offset,
	            elem = this[0],
	            parentOffset = {
	            top: 0,
	            left: 0
	        };
	        if (!elem) {
	            return parentOffset;
	        }
	        if (this.css('position') === 'fixed') {
	            offset = elem.getBoundingClientRect();
	        } else {
	            offsetParent = this.offsetParent(); //得到真正的offsetParent
	            offset = this.offset(); // 得到正确的offsetParent
	            if (offsetParent[0].tagName !== 'HTML') {
	                parentOffset = offsetParent.offset();
	            }
	            parentOffset.top += avalon.css(offsetParent[0], 'borderTopWidth', true);
	            parentOffset.left += avalon.css(offsetParent[0], 'borderLeftWidth', true);

	            // Subtract offsetParent scroll positions
	            parentOffset.top -= offsetParent.scrollTop();
	            parentOffset.left -= offsetParent.scrollLeft();
	        }
	        return {
	            top: offset.top - parentOffset.top - avalon.css(elem, 'marginTop', true),
	            left: offset.left - parentOffset.left - avalon.css(elem, 'marginLeft', true)
	        };
	    };
	    /* istanbul ignore next */
	    avalon.fn.offsetParent = function () {
	        var offsetParent = this[0].offsetParent;
	        while (offsetParent && avalon.css(offsetParent, 'position') === 'static') {
	            offsetParent = offsetParent.offsetParent;
	        }
	        return avalon(offsetParent || avalon.root);
	    };

	    /* istanbul ignore next */
	    cssHooks['@:set'] = function (node, name, value) {
	        try {
	            //node.style.width = NaN;node.style.width = 'xxxxxxx';
	            //node.style.width = undefine 在旧式IE下会抛异常
	            node.style[name] = value;
	        } catch (e) {}
	    };
	    /* istanbul ignore next */
	    cssHooks['@:get'] = function (node, name) {
	        if (!node || !node.style) {
	            throw new Error('getComputedStyle要求传入一个节点 ' + node);
	        }
	        var ret,
	            styles = window$1.getComputedStyle(node, null);
	        if (styles) {
	            ret = name === 'filter' ? styles.getPropertyValue(name) : styles[name];
	            if (ret === '') {
	                ret = node.style[name]; //其他浏览器需要我们手动取内联样式
	            }
	        }
	        return ret;
	    };

	    cssHooks['opacity:get'] = function (node) {
	        var ret = cssHooks['@:get'](node, 'opacity');
	        return ret === '' ? '1' : ret;
	    };

	    'top,left'.replace(avalon.rword, function (name) {
	        cssHooks[name + ':get'] = function (node) {
	            var computed = cssHooks['@:get'](node, name);
	            return (/px$/.test(computed) ? computed : avalon(node).position()[name] + 'px'
	            );
	        };
	    });

	    var cssShow = {
	        position: 'absolute',
	        visibility: 'hidden',
	        display: 'block'
	    };

	    var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
	    /* istanbul ignore next */
	    function showHidden(node, array) {
	        //http://www.cnblogs.com/rubylouvre/archive/2012/10/27/2742529.html
	        if (node.offsetWidth <= 0) {
	            //opera.offsetWidth可能小于0
	            if (rdisplayswap.test(cssHooks['@:get'](node, 'display'))) {
	                var obj = {
	                    node: node
	                };
	                for (var name in cssShow) {
	                    obj[name] = node.style[name];
	                    node.style[name] = cssShow[name];
	                }
	                array.push(obj);
	            }
	            var parent = node.parentNode;
	            if (parent && parent.nodeType === 1) {
	                showHidden(parent, array);
	            }
	        }
	    }
	    /* istanbul ignore next*/
	    avalon.each({
	        Width: 'width',
	        Height: 'height'
	    }, function (name, method) {
	        var clientProp = 'client' + name,
	            scrollProp = 'scroll' + name,
	            offsetProp = 'offset' + name;
	        cssHooks[method + ':get'] = function (node, which, override) {
	            var boxSizing = -4;
	            if (typeof override === 'number') {
	                boxSizing = override;
	            }
	            which = name === 'Width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	            var ret = node[offsetProp]; // border-box 0
	            if (boxSizing === 2) {
	                // margin-box 2
	                return ret + avalon.css(node, 'margin' + which[0], true) + avalon.css(node, 'margin' + which[1], true);
	            }
	            if (boxSizing < 0) {
	                // padding-box  -2
	                ret = ret - avalon.css(node, 'border' + which[0] + 'Width', true) - avalon.css(node, 'border' + which[1] + 'Width', true);
	            }
	            if (boxSizing === -4) {
	                // content-box -4
	                ret = ret - avalon.css(node, 'padding' + which[0], true) - avalon.css(node, 'padding' + which[1], true);
	            }
	            return ret;
	        };
	        cssHooks[method + '&get'] = function (node) {
	            var hidden = [];
	            showHidden(node, hidden);
	            var val = cssHooks[method + ':get'](node);
	            for (var i = 0, obj; obj = hidden[i++];) {
	                node = obj.node;
	                for (var n in obj) {
	                    if (typeof obj[n] === 'string') {
	                        node.style[n] = obj[n];
	                    }
	                }
	            }
	            return val;
	        };
	        avalon.fn[method] = function (value) {
	            //会忽视其display
	            var node = this[0];
	            if (arguments.length === 0) {
	                if (node.setTimeout) {
	                    //取得窗口尺寸
	                    return node['inner' + name] || node.document.documentElement[clientProp] || node.document.body[clientProp]; //IE6下前两个分别为undefined,0
	                }
	                if (node.nodeType === 9) {
	                    //取得页面尺寸
	                    var doc = node.documentElement;
	                    //FF chrome    html.scrollHeight< body.scrollHeight
	                    //IE 标准模式 : html.scrollHeight> body.scrollHeight
	                    //IE 怪异模式 : html.scrollHeight 最大等于可视窗口多一点？
	                    return Math.max(node.body[scrollProp], doc[scrollProp], node.body[offsetProp], doc[offsetProp], doc[clientProp]);
	                }
	                return cssHooks[method + '&get'](node);
	            } else {
	                return this.css(method, value);
	            }
	        };
	        avalon.fn['inner' + name] = function () {
	            return cssHooks[method + ':get'](this[0], void 0, -2);
	        };
	        avalon.fn['outer' + name] = function (includeMargin) {
	            return cssHooks[method + ':get'](this[0], void 0, includeMargin === true ? 2 : 0);
	        };
	    });

	    function getWindow(node) {
	        return node.window || node.defaultView || node.parentWindow || false;
	    }

	    /* istanbul ignore if */
	    if (msie < 9) {
	        cssMap['float'] = 'styleFloat';
	        var rnumnonpx = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i;
	        var rposition = /^(top|right|bottom|left)$/;
	        var ralpha = /alpha\([^)]+\)/i;
	        var ropactiy = /(opacity|\d(\d|\.)*)/g;
	        var ie8 = msie === 8;
	        var salpha = 'DXImageTransform.Microsoft.Alpha';
	        var border = {
	            thin: ie8 ? '1px' : '2px',
	            medium: ie8 ? '3px' : '4px',
	            thick: ie8 ? '5px' : '6px'
	        };
	        cssHooks['@:get'] = function (node, name) {
	            //取得精确值，不过它有可能是带em,pc,mm,pt,%等单位
	            var currentStyle = node.currentStyle;
	            var ret = currentStyle[name];
	            if (rnumnonpx.test(ret) && !rposition.test(ret)) {
	                //①，保存原有的style.left, runtimeStyle.left,
	                var style = node.style,
	                    left = style.left,
	                    rsLeft = node.runtimeStyle.left;
	                //②由于③处的style.left = xxx会影响到currentStyle.left，
	                //因此把它currentStyle.left放到runtimeStyle.left，
	                //runtimeStyle.left拥有最高优先级，不会style.left影响
	                node.runtimeStyle.left = currentStyle.left;
	                //③将精确值赋给到style.left，然后通过IE的另一个私有属性 style.pixelLeft
	                //得到单位为px的结果；fontSize的分支见http://bugs.jquery.com/ticket/760
	                style.left = name === 'fontSize' ? '1em' : ret || 0;
	                ret = style.pixelLeft + 'px';
	                //④还原 style.left，runtimeStyle.left
	                style.left = left;
	                node.runtimeStyle.left = rsLeft;
	            }
	            if (ret === 'medium') {
	                name = name.replace('Width', 'Style');
	                //border width 默认值为medium，即使其为0'
	                if (currentStyle[name] === 'none') {
	                    ret = '0px';
	                }
	            }
	            return ret === '' ? 'auto' : border[ret] || ret;
	        };
	        cssHooks['opacity:set'] = function (node, name, value) {
	            var style = node.style;

	            var opacity = Number(value) <= 1 ? 'alpha(opacity=' + value * 100 + ')' : '';
	            var filter = style.filter || '';
	            style.zoom = 1;
	            //不能使用以下方式设置透明度
	            //node.filters.alpha.opacity = value * 100
	            style.filter = (ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + ' ' + opacity).trim();

	            if (!style.filter) {
	                style.removeAttribute('filter');
	            }
	        };
	        cssHooks['opacity:get'] = function (node) {
	            var match = node.style.filter.match(ropactiy) || [];
	            var ret = false;
	            for (var i = 0, el; el = match[i++];) {
	                if (el === 'opacity') {
	                    ret = true;
	                } else if (ret) {
	                    return el / 100 + '';
	                }
	            }
	            return '1'; //确保返回的是字符串
	        };
	    }

	    /* istanbul ignore next */
	    avalon.fn.offset = function () {
	        //取得距离页面左右角的坐标
	        var node = this[0],
	            box = {
	            left: 0,
	            top: 0
	        };
	        if (!node || !node.tagName || !node.ownerDocument) {
	            return box;
	        }
	        var doc = node.ownerDocument;
	        var body = doc.body;
	        var root$$1 = doc.documentElement;
	        var win = doc.defaultView || doc.parentWindow;
	        if (!avalon.contains(root$$1, node)) {
	            return box;
	        }
	        //http://hkom.blog1.fc2.com/?mode=m&no=750 body的偏移量是不包含margin的
	        //我们可以通过getBoundingClientRect来获得元素相对于client的rect.
	        //http://msdn.microsoft.com/en-us/library/ms536433.aspx
	        if (node.getBoundingClientRect) {
	            box = node.getBoundingClientRect(); // BlackBerry 5, iOS 3 (original iPhone)
	        }
	        //chrome/IE6: body.scrollTop, firefox/other: root.scrollTop
	        var clientTop = root$$1.clientTop || body.clientTop,
	            clientLeft = root$$1.clientLeft || body.clientLeft,
	            scrollTop = Math.max(win.pageYOffset || 0, root$$1.scrollTop, body.scrollTop),
	            scrollLeft = Math.max(win.pageXOffset || 0, root$$1.scrollLeft, body.scrollLeft);
	        // 把滚动距离加到left,top中去。
	        // IE一些版本中会自动为HTML元素加上2px的border，我们需要去掉它
	        // http://msdn.microsoft.com/en-us/library/ms533564(VS.85).aspx
	        return {
	            top: box.top + scrollTop - clientTop,
	            left: box.left + scrollLeft - clientLeft
	        };
	    };

	    //生成avalon.fn.scrollLeft, avalon.fn.scrollTop方法
	    /* istanbul ignore next */
	    avalon.each({
	        scrollLeft: 'pageXOffset',
	        scrollTop: 'pageYOffset'
	    }, function (method, prop) {
	        avalon.fn[method] = function (val) {
	            var node = this[0] || {};
	            var win = getWindow(node);
	            var root$$1 = avalon.root;
	            var top = method === 'scrollTop';
	            if (!arguments.length) {
	                return win ? prop in win ? win[prop] : root$$1[method] : node[method];
	            } else {
	                if (win) {
	                    win.scrollTo(!top ? val : avalon(win).scrollLeft(), top ? val : avalon(win).scrollTop());
	                } else {
	                    node[method] = val;
	                }
	            }
	        };
	    });

	    function getDuplexType(elem) {
	        var ret = elem.tagName.toLowerCase();
	        if (ret === 'input') {
	            return rcheckedType.test(elem.type) ? 'checked' : elem.type;
	        }
	        return ret;
	    }

	    /**
	     * IE6/7/8中，如果option没有value值，那么将返回空字符串。
	     * IE9/Firefox/Safari/Chrome/Opera 中先取option的value值，如果没有value属性，则取option的innerText值。
	     * IE11及W3C，如果没有指定value，那么node.value默认为node.text（存在trim作），但IE9-10则是取innerHTML(没trim操作)
	     */

	    function getOption(node) {
	        if (node.hasAttribute && node.hasAttribute('value')) {
	            return node.getAttribute('value');
	        }
	        var attr = node.getAttributeNode('value');
	        if (attr && attr.specified) {
	            return attr.value;
	        }
	        return node.innerHTML.trim();
	    }

	    var valHooks = {
	        'option:get': msie ? getOption : function (node) {
	            return node.value;
	        },
	        'select:get': function selectGet(node, value) {
	            var option,
	                options = node.options,
	                index = node.selectedIndex,
	                getter = valHooks['option:get'],
	                one = node.type === 'select-one' || index < 0,
	                values = one ? null : [],
	                max = one ? index + 1 : options.length,
	                i = index < 0 ? max : one ? index : 0;
	            for (; i < max; i++) {
	                option = options[i];
	                //IE6-9在reset后不会改变selected，需要改用i === index判定
	                //我们过滤所有disabled的option元素，但在safari5下，
	                //如果设置optgroup为disable，那么其所有孩子都disable
	                //因此当一个元素为disable，需要检测其是否显式设置了disable及其父节点的disable情况
	                if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || option.parentNode.tagName !== 'OPTGROUP')) {
	                    value = getter(option);
	                    if (one) {
	                        return value;
	                    }
	                    //收集所有selected值组成数组返回
	                    values.push(value);
	                }
	            }
	            return values;
	        },
	        'select:set': function selectSet(node, values, optionSet) {
	            values = [].concat(values); //强制转换为数组
	            var getter = valHooks['option:get'];
	            for (var i = 0, el; el = node.options[i++];) {
	                if (el.selected = values.indexOf(getter(el)) > -1) {
	                    optionSet = true;
	                }
	            }
	            if (!optionSet) {
	                node.selectedIndex = -1;
	            }
	        }
	    };

	    avalon.fn.val = function (value) {
	        var node = this[0];
	        if (node && node.nodeType === 1) {
	            var get = arguments.length === 0;
	            var access = get ? ':get' : ':set';
	            var fn = valHooks[getDuplexType(node) + access];
	            if (fn) {
	                var val = fn(node, value);
	            } else if (get) {
	                return (node.value || '').replace(/\r/g, '');
	            } else {
	                node.value = value;
	            }
	        }
	        return get ? val : this;
	    };

	    /* 
	     * 将要检测的字符串的字符串替换成??123这样的格式
	     */
	    var stringNum = 0;
	    var stringPool = {
	        map: {}
	    };
	    var rfill = /\?\?\d+/g;
	    function dig(a) {
	        var key = '??' + stringNum++;
	        stringPool.map[key] = a;
	        return key + ' ';
	    }
	    function fill(a) {
	        var val = stringPool.map[a];
	        return val;
	    }
	    function clearString(str) {
	        var array = readString(str);
	        for (var i = 0, n = array.length; i < n; i++) {
	            str = str.replace(array[i], dig);
	        }
	        return str;
	    }

	    function readString(str) {
	        var end,
	            s = 0;
	        var ret = [];
	        for (var i = 0, n = str.length; i < n; i++) {
	            var c = str.charAt(i);
	            if (!end) {
	                if (c === "'") {
	                    end = "'";
	                    s = i;
	                } else if (c === '"') {
	                    end = '"';
	                    s = i;
	                }
	            } else {
	                if (c === end) {
	                    ret.push(str.slice(s, i + 1));
	                    end = false;
	                }
	            }
	        }
	        return ret;
	    }

	    var voidTag = {
	        area: 1,
	        base: 1,
	        basefont: 1,
	        bgsound: 1,
	        br: 1,
	        col: 1,
	        command: 1,
	        embed: 1,
	        frame: 1,
	        hr: 1,
	        img: 1,
	        input: 1,
	        keygen: 1,
	        link: 1,
	        meta: 1,
	        param: 1,
	        source: 1,
	        track: 1,
	        wbr: 1
	    };

	    var orphanTag = {
	        script: 1,
	        style: 1,
	        textarea: 1,
	        xmp: 1,
	        noscript: 1,
	        template: 1
	    };

	    /* 
	     *  此模块只用于文本转虚拟DOM, 
	     *  因为在真实浏览器会对我们的HTML做更多处理,
	     *  如, 添加额外属性, 改变结构
	     *  此模块就是用于模拟这些行为
	     */
	    function makeOrphan(node, nodeName, innerHTML) {
	        switch (nodeName) {
	            case 'style':
	            case 'script':
	            case 'noscript':
	            case 'template':
	            case 'xmp':
	                node.children = [{
	                    nodeName: '#text',
	                    nodeValue: innerHTML
	                }];
	                break;
	            case 'textarea':
	                var props = node.props;
	                props.type = nodeName;
	                props.value = innerHTML;
	                node.children = [{
	                    nodeName: '#text',
	                    nodeValue: innerHTML
	                }];
	                break;
	            case 'option':
	                node.children = [{
	                    nodeName: '#text',
	                    nodeValue: trimHTML(innerHTML)
	                }];
	                break;
	        }
	    }

	    //专门用于处理option标签里面的标签
	    var rtrimHTML = /<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi;
	    function trimHTML(v) {
	        return String(v).replace(rtrimHTML, '').trim();
	    }

	    //widget rule duplex validate

	    //如果直接将tr元素写table下面,那么浏览器将将它们(相邻的那几个),放到一个动态创建的tbody底下
	    function makeTbody(nodes) {
	        var tbody,
	            needAddTbody = false,
	            count = 0,
	            start = 0,
	            n = nodes.length;
	        for (var i = 0; i < n; i++) {
	            var node = nodes[i];
	            if (!tbody) {
	                if (node.nodeName === 'tr') {
	                    //收集tr及tr两旁的注释节点
	                    tbody = {
	                        nodeName: 'tbody',
	                        props: {},
	                        children: []
	                    };
	                    tbody.children.push(node);
	                    needAddTbody = true;
	                    if (start === 0) start = i;
	                    nodes[i] = tbody;
	                }
	            } else {
	                if (node.nodeName !== 'tr' && node.children) {
	                    tbody = false;
	                } else {
	                    tbody.children.push(node);
	                    count++;
	                    nodes[i] = 0;
	                }
	            }
	        }

	        if (needAddTbody) {
	            for (i = start; i < n; i++) {
	                if (nodes[i] === 0) {
	                    nodes.splice(i, 1);
	                    i--;
	                    count--;
	                    if (count === 0) {
	                        break;
	                    }
	                }
	            }
	        }
	    }

	    function validateDOMNesting(parent, child) {

	        var parentTag = parent.nodeName;
	        var tag = child.nodeName;
	        var parentChild = nestObject[parentTag];
	        if (parentChild) {
	            if (parentTag === 'p') {
	                if (pNestChild[tag]) {
	                    avalon.warn('P element can not  add these childlren:\n' + Object.keys(pNestChild));
	                    return false;
	                }
	            } else if (!parentChild[tag]) {
	                avalon.warn(parentTag.toUpperCase() + 'element only add these children:\n' + Object.keys(parentChild) + '\nbut you add ' + tag.toUpperCase() + ' !!');
	                return false;
	            }
	        }
	        return true;
	    }

	    function makeObject(str) {
	        return oneObject(str + ',template,#document-fragment,#comment');
	    }
	    var pNestChild = oneObject('div,ul,ol,dl,table,h1,h2,h3,h4,h5,h6,form,fieldset');
	    var tNestChild = makeObject('tr,style,script');
	    var nestObject = {
	        p: pNestChild,
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
	        select: makeObject('option,optgroup,#text'),
	        optgroup: makeObject('option,#text'),
	        option: makeObject('#text'),
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
	        // No special behavior since these rules fall back to "in body" mode for
	        // all except special table nodes which cause bad parsing behavior anyway.

	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
	        tr: makeObject('th,td,style,script'),

	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
	        tbody: tNestChild,
	        tfoot: tNestChild,
	        thead: tNestChild,
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
	        colgroup: makeObject('col'),
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
	        // table: oneObject('caption,colgroup,tbody,thead,tfoot,style,script,template,#document-fragment'),
	        // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
	        head: makeObject('base,basefont,bgsound,link,style,script,meta,title,noscript,noframes'),
	        // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
	        html: oneObject('head,body')
	    };

	    /**
	     * ------------------------------------------------------------
	     * avalon2.1.1的新式lexer
	     * 将字符串变成一个虚拟DOM树,方便以后进一步变成模板函数
	     * 此阶段只会生成VElement,VText,VComment
	     * ------------------------------------------------------------
	     */
	    function nomalString(str) {
	        return avalon.unescapeHTML(str.replace(rfill, fill));
	    }
	    //https://github.com/rviscomi/trunk8/blob/master/trunk8.js

	    var ropenTag = /^<([-A-Za-z0-9_]+)\s*([^>]*?)(\/?)>/;
	    var rendTag = /^<\/([^>]+)>/;
	    var rtagStart = /[\!\/a-z]/i; //闭标签的第一个字符,开标签的第一个英文,注释节点的!
	    var rlineSp = /\\n\s*/g;
	    var rattrs = /([^=\s]+)(?:\s*=\s*(\S+))?/;

	    var rcontent = /\S/; //判定里面有没有内容
	    function fromString(str) {
	        return from(str);
	    }
	    avalon.lexer = fromString;

	    var strCache = new Cache(100);

	    function AST() {}
	    AST.prototype = {
	        init: function init(str) {
	            this.ret = [];
	            var stack = [];
	            stack.last = function () {
	                return stack[stack.length - 1];
	            };
	            this.stack = stack;
	            this.str = str;
	        },
	        gen: function gen() {
	            var breakIndex = 999999;
	            do {
	                this.tryGenText();
	                this.tryGenComment();
	                this.tryGenOpenTag();
	                this.tryGenCloseTag();
	                var node = this.node;
	                this.node = 0;
	                if (!node || --breakIndex === 0) {
	                    break;
	                }
	                if (node.end) {
	                    if (node.nodeName === 'table') {
	                        makeTbody(node.children);
	                    }
	                    delete node.end;
	                }
	            } while (this.str.length);
	            return this.ret;
	        },

	        fixPos: function fixPos(str, i) {
	            var tryCount = str.length - i;
	            while (tryCount--) {
	                if (!rtagStart.test(str.charAt(i + 1))) {
	                    i = str.indexOf('<', i + 1);
	                } else {
	                    break;
	                }
	            }
	            if (tryCount === 0) {
	                i = str.length;
	            }
	            return i;
	        },
	        tryGenText: function tryGenText() {
	            var str = this.str;
	            if (str.charAt(0) !== '<') {
	                //处理文本节点
	                var i = str.indexOf('<');
	                if (i === -1) {
	                    i = str.length;
	                } else if (!rtagStart.test(str.charAt(i + 1))) {
	                    //处理`内容2 {{ (idx1 < < <  1 ? 'red' : 'blue' ) + a }} ` 的情况 
	                    i = this.fixPos(str, i);
	                }
	                var nodeValue = str.slice(0, i).replace(rfill, fill);
	                this.str = str.slice(i);
	                this.node = {
	                    nodeName: '#text',
	                    nodeValue: nodeValue
	                };
	                if (rcontent.test(nodeValue)) {
	                    this.tryGenChildren(); //不收集空白节点
	                }
	            }
	        },
	        tryGenComment: function tryGenComment() {
	            if (!this.node) {
	                var str = this.str;
	                var i = str.indexOf('<!--'); //处理注释节点
	                /* istanbul ignore if*/
	                if (i === 0) {
	                    var l = str.indexOf('-->');
	                    if (l === -1) {
	                        avalon.error('注释节点没有闭合' + str);
	                    }
	                    var nodeValue = str.slice(4, l).replace(rfill, fill);
	                    this.str = str.slice(l + 3);
	                    this.node = {
	                        nodeName: '#comment',
	                        nodeValue: nodeValue
	                    };
	                    this.tryGenChildren();
	                }
	            }
	        },
	        tryGenOpenTag: function tryGenOpenTag() {
	            if (!this.node) {
	                var str = this.str;
	                var match = str.match(ropenTag); //处理元素节点开始部分
	                if (match) {
	                    var nodeName = match[1];
	                    var props = {};
	                    if (/^[A-Z]/.test(nodeName) && avalon.components[nodeName]) {
	                        props.is = nodeName;
	                    }
	                    nodeName = nodeName.toLowerCase();
	                    var isVoidTag = !!voidTag[nodeName] || match[3] === '\/';
	                    var node = this.node = {
	                        nodeName: nodeName,
	                        props: {},
	                        children: [],
	                        isVoidTag: isVoidTag
	                    };
	                    var attrs = match[2];
	                    if (attrs) {
	                        this.genProps(attrs, node.props);
	                    }
	                    this.tryGenChildren();
	                    str = str.slice(match[0].length);
	                    if (isVoidTag) {
	                        node.end = true;
	                    } else {
	                        this.stack.push(node);
	                        if (orphanTag[nodeName] || nodeName === 'option') {
	                            var index = str.indexOf('</' + nodeName + '>');
	                            var innerHTML = str.slice(0, index).trim();
	                            str = str.slice(index);
	                            makeOrphan(node, nodeName, nomalString(innerHTML));
	                        }
	                    }
	                    this.str = str;
	                }
	            }
	        },
	        tryGenCloseTag: function tryGenCloseTag() {
	            if (!this.node) {
	                var str = this.str;
	                var match = str.match(rendTag); //处理元素节点结束部分
	                if (match) {
	                    var nodeName = match[1].toLowerCase();
	                    var last = this.stack.last();
	                    /* istanbul ignore if*/
	                    if (!last) {
	                        avalon.error(match[0] + '前面缺少<' + nodeName + '>');
	                        /* istanbul ignore else*/
	                    } else if (last.nodeName !== nodeName) {
	                        var errMsg = last.nodeName + '没有闭合,请注意属性的引号';
	                        avalon.warn(errMsg);
	                        avalon.error(errMsg);
	                    }
	                    var node = this.stack.pop();
	                    node.end = true;
	                    this.node = node;
	                    this.str = str.slice(match[0].length);
	                }
	            }
	        },
	        tryGenChildren: function tryGenChildren() {
	            var node = this.node;
	            var p = this.stack.last();
	            if (p) {
	                validateDOMNesting(p, node);
	                p.children.push(node);
	            } else {
	                this.ret.push(node);
	            }
	        },
	        genProps: function genProps(attrs, props) {

	            while (attrs) {
	                var arr = rattrs.exec(attrs);

	                if (arr) {
	                    var name = arr[1];
	                    var value = arr[2] || '';
	                    attrs = attrs.replace(arr[0], '');
	                    if (value) {
	                        //https://github.com/RubyLouvre/avalon/issues/1844
	                        if (value.indexOf('??') === 0) {
	                            value = nomalString(value).replace(rlineSp, '').slice(1, -1);
	                        }
	                    }
	                    if (!(name in props)) {
	                        props[name] = value;
	                    }
	                } else {
	                    break;
	                }
	            }
	        }
	    };

	    var vdomAst = new AST();

	    function from(str) {
	        var cacheKey = str;
	        var cached = strCache.get(cacheKey);
	        if (cached) {
	            return avalon.mix(true, [], cached);
	        }
	        stringPool.map = {};
	        str = clearString(str);

	        vdomAst.init(str);
	        var ret = vdomAst.gen();
	        strCache.put(cacheKey, avalon.mix(true, [], ret));
	        return ret;
	    }

	    var rhtml = /<|&#?\w+;/;
	    var htmlCache = new Cache(128);
	    var rxhtml = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;

	    avalon.parseHTML = function (html) {
	        var fragment = createFragment();
	        //处理非字符串
	        if (typeof html !== 'string') {
	            return fragment;
	        }
	        //处理非HTML字符串
	        if (!rhtml.test(html)) {
	            return document$1.createTextNode(html);
	        }

	        html = html.replace(rxhtml, '<$1></$2>').trim();
	        var hasCache = htmlCache.get(html);
	        if (hasCache) {
	            return avalon.cloneNode(hasCache);
	        }
	        var vnodes = fromString(html);
	        for (var i = 0, el; el = vnodes[i++];) {
	            var child = avalon.vdom(el, 'toDOM');
	            fragment.appendChild(child);
	        }
	        if (html.length < 1024) {
	            htmlCache.put(html, fragment);
	        }
	        return fragment;
	    };

	    avalon.innerHTML = function (node, html) {
	        var parsed = avalon.parseHTML(html);
	        this.clearHTML(node);
	        node.appendChild(parsed);
	    };

	    //https://github.com/karloespiritu/escapehtmlent/blob/master/index.js
	    avalon.unescapeHTML = function (html) {
	        return String(html).replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
	    };

	    avalon.clearHTML = function (node) {
	        /* istanbul ignore next */
	        while (node.lastChild) {
	            node.removeChild(node.lastChild);
	        }
	        return node;
	    };

	    //http://www.feiesoft.com/html/events.html
	    //http://segmentfault.com/q/1010000000687977/a-1020000000688757
	    var canBubbleUp = {
	        click: true,
	        dblclick: true,
	        keydown: true,
	        keypress: true,
	        keyup: true,
	        mousedown: true,
	        mousemove: true,
	        mouseup: true,
	        mouseover: true,
	        mouseout: true,
	        wheel: true,
	        mousewheel: true,
	        input: true,
	        change: true,
	        beforeinput: true,
	        compositionstart: true,
	        compositionupdate: true,
	        compositionend: true,
	        select: true,
	        //http://blog.csdn.net/lee_magnum/article/details/17761441
	        cut: true,
	        copy: true,
	        paste: true,
	        beforecut: true,
	        beforecopy: true,
	        beforepaste: true,
	        focusin: true,
	        focusout: true,
	        DOMFocusIn: true,
	        DOMFocusOut: true,
	        DOMActivate: true,
	        dragend: true,
	        datasetchanged: true
	    };

	    /* istanbul ignore if */
	    var hackSafari = avalon.modern && document$1.ontouchstart;

	    //添加fn.bind, fn.unbind, bind, unbind
	    avalon.fn.bind = function (type, fn, phase) {
	        if (this[0]) {
	            //此方法不会链
	            return avalon.bind(this[0], type, fn, phase);
	        }
	    };

	    avalon.fn.unbind = function (type, fn, phase) {
	        if (this[0]) {
	            var args = _slice.call(arguments);
	            args.unshift(this[0]);
	            avalon.unbind.apply(0, args);
	        }
	        return this;
	    };

	    /*绑定事件*/
	    avalon.bind = function (elem, type, fn) {
	        if (elem.nodeType === 1) {
	            var value = elem.getAttribute('avalon-events') || '';
	            //如果是使用ms-on-*绑定的回调,其uuid格式为e12122324,
	            //如果是使用bind方法绑定的回调,其uuid格式为_12
	            var uuid = getShortID(fn);
	            var hook = eventHooks[type];
	            /* istanbul ignore if */
	            if (type === 'click' && hackSafari) {
	                elem.addEventListener('click', avalon.noop);
	            }
	            /* istanbul ignore if */
	            if (hook) {
	                type = hook.type || type;
	                if (hook.fix) {
	                    fn = hook.fix(elem, fn);
	                    fn.uuid = uuid;
	                }
	            }
	            var key = type + ':' + uuid;
	            avalon.eventListeners[fn.uuid] = fn;
	            /* istanbul ignore if */
	            if (value.indexOf(type + ':') === -1) {
	                //同一种事件只绑定一次
	                if (canBubbleUp[type] || avalon.modern && focusBlur[type]) {
	                    delegateEvent(type);
	                } else {
	                    avalon._nativeBind(elem, type, dispatch);
	                }
	            }
	            var keys = value.split(',');
	            /* istanbul ignore if */
	            if (keys[0] === '') {
	                keys.shift();
	            }
	            if (keys.indexOf(key) === -1) {
	                keys.push(key);
	                setEventId(elem, keys.join(','));
	                //将令牌放进avalon-events属性中
	            }
	            return fn;
	        } else {
	            /* istanbul ignore next */
	            var cb = function cb(e) {
	                fn.call(elem, new avEvent(e));
	            };

	            avalon._nativeBind(elem, type, cb);
	            return cb;
	        }
	    };

	    function setEventId(node, value) {
	        node.setAttribute('avalon-events', value);
	    }
	    /* istanbul ignore next */
	    avalon.unbind = function (elem, type, fn) {
	        if (elem.nodeType === 1) {
	            var value = elem.getAttribute('avalon-events') || '';
	            switch (arguments.length) {
	                case 1:
	                    avalon._nativeUnBind(elem, type, dispatch);
	                    elem.removeAttribute('avalon-events');
	                    break;
	                case 2:
	                    value = value.split(',').filter(function (str) {
	                        return str.indexOf(type + ':') === -1;
	                    }).join(',');
	                    setEventId(elem, value);
	                    break;
	                default:
	                    var search = type + ':' + fn.uuid;
	                    value = value.split(',').filter(function (str) {
	                        return str !== search;
	                    }).join(',');
	                    setEventId(elem, value);
	                    delete avalon.eventListeners[fn.uuid];
	                    break;
	            }
	        } else {
	            avalon._nativeUnBind(elem, type, fn);
	        }
	    };

	    var typeRegExp = {};

	    function collectHandlers(elem, type, handlers) {
	        var value = elem.getAttribute('avalon-events');
	        if (value && (elem.disabled !== true || type !== 'click')) {
	            var uuids = [];
	            var reg = typeRegExp[type] || (typeRegExp[type] = new RegExp("\\b" + type + '\\:([^,\\s]+)', 'g'));
	            value.replace(reg, function (a, b) {
	                uuids.push(b);
	                return a;
	            });
	            if (uuids.length) {
	                handlers.push({
	                    elem: elem,
	                    uuids: uuids
	                });
	            }
	        }
	        elem = elem.parentNode;
	        var g = avalon.gestureEvents || {};
	        if (elem && elem.getAttribute && (canBubbleUp[type] || g[type])) {
	            collectHandlers(elem, type, handlers);
	        }
	    }

	    var rhandleHasVm = /^e/;

	    function dispatch(event) {
	        event = new avEvent(event);
	        var type = event.type;
	        var elem = event.target;
	        var handlers = [];
	        collectHandlers(elem, type, handlers);
	        var i = 0,
	            j,
	            uuid,
	            handler;
	        while ((handler = handlers[i++]) && !event.cancelBubble) {
	            var host = event.currentTarget = handler.elem;
	            j = 0;
	            while (uuid = handler.uuids[j++]) {
	                if (event.stopImmediate) {
	                    break;
	                }
	                var fn = avalon.eventListeners[uuid];
	                if (fn) {
	                    var vm = rhandleHasVm.test(uuid) ? handler.elem._ms_context_ : 0;
	                    if (vm && vm.$hashcode === false) {
	                        return avalon.unbind(elem, type, fn);
	                    }
	                    var ret = fn.call(vm || elem, event);

	                    if (ret === false) {
	                        event.preventDefault();
	                        event.stopPropagation();
	                    }
	                }
	            }
	        }
	    }

	    var focusBlur = {
	        focus: true,
	        blur: true
	    };

	    function delegateEvent(type) {
	        var value = root.getAttribute('delegate-events') || '';
	        if (value.indexOf(type) === -1) {
	            //IE6-8会多次绑定同种类型的同一个函数,其他游览器不会
	            var arr = value.match(avalon.rword) || [];
	            arr.push(type);
	            root.setAttribute('delegate-events', arr.join(','));
	            avalon._nativeBind(root, type, dispatch, !!focusBlur[type]);
	        }
	    }

	    var eventProto = {
	        webkitMovementY: 1,
	        webkitMovementX: 1,
	        keyLocation: 1,
	        fixEvent: function fixEvent() {},
	        preventDefault: function preventDefault() {
	            var e = this.originalEvent || {};
	            e.returnValue = this.returnValue = false;
	            if (modern && e.preventDefault) {
	                e.preventDefault();
	            }
	        },
	        stopPropagation: function stopPropagation() {
	            var e = this.originalEvent || {};
	            e.cancelBubble = this.cancelBubble = true;
	            if (modern && e.stopPropagation) {
	                e.stopPropagation();
	            }
	        },
	        stopImmediatePropagation: function stopImmediatePropagation() {
	            this.stopPropagation();
	            this.stopImmediate = true;
	        },
	        toString: function toString() {
	            return '[object Event]'; //#1619
	        }
	    };

	    function avEvent(event) {
	        if (event.originalEvent) {
	            return event;
	        }
	        for (var i in event) {
	            if (!eventProto[i]) {
	                this[i] = event[i];
	            }
	        }
	        if (!this.target) {
	            this.target = event.srcElement;
	        }
	        var target = this.target;
	        this.fixEvent();
	        this.timeStamp = new Date() - 0;
	        this.originalEvent = event;
	    }
	    avEvent.prototype = eventProto;
	    //针对firefox, chrome修正mouseenter, mouseleave
	    /* istanbul ignore if */
	    if (!('onmouseenter' in root)) {
	        avalon.each({
	            mouseenter: 'mouseover',
	            mouseleave: 'mouseout'
	        }, function (origType, fixType) {
	            eventHooks[origType] = {
	                type: fixType,
	                fix: function fix(elem, fn) {
	                    return function (e) {
	                        var t = e.relatedTarget;
	                        if (!t || t !== elem && !(elem.compareDocumentPosition(t) & 16)) {
	                            delete e.type;
	                            e.type = origType;
	                            return fn.apply(this, arguments);
	                        }
	                    };
	                }
	            };
	        });
	    }
	    //针对IE9+, w3c修正animationend
	    avalon.each({
	        AnimationEvent: 'animationend',
	        WebKitAnimationEvent: 'webkitAnimationEnd'
	    }, function (construct, fixType) {
	        if (window$1[construct] && !eventHooks.animationend) {
	            eventHooks.animationend = {
	                type: fixType
	            };
	        }
	    });

	    /* istanbul ignore if */
	    if (!("onmousewheel" in document$1)) {
	        /* IE6-11 chrome mousewheel wheelDetla 下 -120 上 120
	         firefox DOMMouseScroll detail 下3 上-3
	         firefox wheel detlaY 下3 上-3
	         IE9-11 wheel deltaY 下40 上-40
	         chrome wheel deltaY 下100 上-100 */
	        var fixWheelType = document$1.onwheel !== void 0 ? 'wheel' : 'DOMMouseScroll';
	        var fixWheelDelta = fixWheelType === 'wheel' ? 'deltaY' : 'detail';
	        eventHooks.mousewheel = {
	            type: fixWheelType,
	            fix: function fix(elem, fn) {
	                return function (e) {
	                    var delta = e[fixWheelDelta] > 0 ? -120 : 120;
	                    e.wheelDelta = ~~elem._ms_wheel_ + delta;
	                    elem._ms_wheel_ = e.wheelDeltaY = e.wheelDelta;
	                    e.wheelDeltaX = 0;
	                    if (Object.defineProperty) {
	                        Object.defineProperty(e, 'type', {
	                            value: 'mousewheel'
	                        });
	                    }
	                    return fn.apply(this, arguments);
	                };
	            }
	        };
	    }

	    /* istanbul ignore if */
	    if (!modern) {
	        delete canBubbleUp.change;
	        delete canBubbleUp.select;
	    }
	    /* istanbul ignore next */
	    avalon._nativeBind = modern ? function (el, type, fn, capture) {
	        el.addEventListener(type, fn, !!capture);
	    } : function (el, type, fn) {
	        el.attachEvent('on' + type, fn);
	    };
	    /* istanbul ignore next */
	    avalon._nativeUnBind = modern ? function (el, type, fn, a) {
	        el.removeEventListener(type, fn, !!a);
	    } : function (el, type, fn) {
	        el.detachEvent('on' + type, fn);
	    };
	    /* istanbul ignore next */
	    avalon.fireDom = function (elem, type, opts) {
	        if (document$1.createEvent) {
	            var hackEvent = document$1.createEvent('Events');
	            hackEvent.initEvent(type, true, true, opts);
	            avalon.shadowCopy(hackEvent, opts);
	            elem.dispatchEvent(hackEvent);
	        } else if (root.contains(elem)) {
	            //IE6-8触发事件必须保证在DOM树中,否则报'SCRIPT16389: 未指明的错误'
	            hackEvent = document$1.createEventObject();
	            if (opts) avalon.shadowCopy(hackEvent, opts);
	            try {
	                elem.fireEvent('on' + type, hackEvent);
	            } catch (e) {
	                avalon.log('fireDom', type, 'args error');
	            }
	        }
	    };

	    var rmouseEvent = /^(?:mouse|contextmenu|drag)|click/;
	    /* istanbul ignore next */
	    avEvent.prototype.fixEvent = function () {
	        var event = this;
	        if (event.which == null && event.type.indexOf('key') === 0) {
	            event.which = event.charCode != null ? event.charCode : event.keyCode;
	        }
	        if (rmouseEvent.test(event.type) && !('pageX' in event)) {
	            var DOC = event.target.ownerDocument || document$1;
	            var box = DOC.compatMode === 'BackCompat' ? DOC.body : DOC.documentElement;
	            event.pageX = event.clientX + (box.scrollLeft >> 0) - (box.clientLeft >> 0);
	            event.pageY = event.clientY + (box.scrollTop >> 0) - (box.clientTop >> 0);
	            event.wheelDeltaY = ~~event.wheelDelta;
	            event.wheelDeltaX = 0;
	        }
	    };

	    //针对IE6-8修正input
	    /* istanbul ignore if */
	    if (!('oninput' in document$1.createElement('input'))) {
	        eventHooks.input = {
	            type: 'propertychange',
	            fix: function fix(elem, fn) {
	                return function (e) {
	                    if (e.propertyName === 'value') {
	                        e.type = 'input';
	                        return fn.apply(this, arguments);
	                    }
	                };
	            }
	        };
	    }

	    var readyList = [];

	    function fireReady(fn) {
	        avalon.isReady = true;
	        while (fn = readyList.shift()) {
	            fn(avalon);
	        }
	    }

	    avalon.ready = function (fn) {
	        readyList.push(fn);
	        if (avalon.isReady) {
	            fireReady();
	        }
	    };

	    avalon.ready(function () {
	        avalon.scan && avalon.scan(document$1.body);
	    });

	    /* istanbul ignore next */
	    function bootstrap() {
	        function doScrollCheck() {
	            try {
	                //IE下通过doScrollCheck检测DOM树是否建完
	                root.doScroll('left');
	                fireReady();
	            } catch (e) {
	                setTimeout(doScrollCheck);
	            }
	        }
	        if (document$1.readyState === 'complete') {
	            setTimeout(fireReady); //如果在domReady之外加载
	        } else if (document$1.addEventListener) {
	            document$1.addEventListener('DOMContentLoaded', fireReady, false);
	        } else if (document$1.attachEvent) {
	            //必须传入三个参数，否则在firefox4-26中报错
	            //caught exception: [Exception... "Not enough arguments"  nsresult: "0x
	            document$1.attachEvent('onreadystatechange', function () {
	                if (document$1.readyState === 'complete') {
	                    fireReady();
	                }
	            });
	            try {
	                var isTop = window$1.frameElement === null;
	            } catch (e) {}
	            if (root.doScroll && isTop && window$1.external) {
	                //fix IE iframe BUG
	                doScrollCheck();
	            }
	        }

	        avalon.bind(window$1, 'load', fireReady);
	    }
	    if (inBrowser) {
	        bootstrap();
	    }

	    /**
	     * ------------------------------------------------------------
	     *                          DOM Api
	     * shim,class,data,css,val,html,event,ready  
	     * ------------------------------------------------------------
	     */

	    function fromDOM(dom) {
	        return [from$1(dom)];
	    }

	    function from$1(node) {
	        var type = node.nodeName.toLowerCase();
	        switch (type) {
	            case '#text':
	            case '#comment':
	                return {
	                    nodeName: type,
	                    dom: node,
	                    nodeValue: node.nodeValue
	                };
	            default:
	                var props = markProps(node, node.attributes || []);
	                var vnode = {
	                    nodeName: type,
	                    dom: node,
	                    isVoidTag: !!voidTag[type],
	                    props: props
	                };
	                if (type === 'option') {
	                    //即便你设置了option.selected = true,
	                    //option.attributes也找不到selected属性
	                    props.selected = node.selected;
	                }
	                if (orphanTag[type] || type === 'option') {
	                    makeOrphan(vnode, type, node.text || node.innerHTML);
	                    if (node.childNodes.length === 1) {
	                        vnode.children[0].dom = node.firstChild;
	                    }
	                } else if (!vnode.isVoidTag) {
	                    vnode.children = [];
	                    for (var i = 0, el; el = node.childNodes[i++];) {
	                        var child = from$1(el);
	                        if (/\S/.test(child.nodeValue)) {
	                            vnode.children.push(child);
	                        }
	                    }
	                }
	                return vnode;
	        }
	    }

	    var rformElement = /input|textarea|select/i;

	    function markProps(node, attrs) {
	        var ret = {};
	        for (var i = 0, n = attrs.length; i < n; i++) {
	            var attr = attrs[i];
	            if (attr.specified) {
	                //IE6-9不会将属性名变小写,比如它会将用户的contenteditable变成contentEditable
	                ret[attr.name.toLowerCase()] = attr.value;
	            }
	        }
	        if (rformElement.test(node.nodeName)) {
	            ret.type = node.type;
	            var a = node.getAttributeNode('value');
	            if (a && /\S/.test(a.value)) {
	                //IE6,7中无法取得checkbox,radio的value
	                ret.value = a.value;
	            }
	        }
	        var style = node.style.cssText;
	        if (style) {
	            ret.style = style;
	        }
	        //类名 = 去重(静态类名+动态类名+ hover类名? + active类名)
	        if (ret.type === 'select-one') {
	            ret.selectedIndex = node.selectedIndex;
	        }
	        return ret;
	    }

	    function VText(text) {
	        this.nodeName = '#text';
	        this.nodeValue = text;
	    }

	    VText.prototype = {
	        constructor: VText,
	        toDOM: function toDOM() {
	            /* istanbul ignore if*/
	            if (this.dom) return this.dom;
	            var v = avalon._decode(this.nodeValue);
	            return this.dom = document$1.createTextNode(v);
	        },
	        toHTML: function toHTML() {
	            return this.nodeValue;
	        }
	    };

	    function VComment(text) {
	        this.nodeName = '#comment';
	        this.nodeValue = text;
	    }
	    VComment.prototype = {
	        constructor: VComment,
	        toDOM: function toDOM() {
	            if (this.dom) return this.dom;
	            return this.dom = document$1.createComment(this.nodeValue);
	        },
	        toHTML: function toHTML() {
	            return '<!--' + this.nodeValue + '-->';
	        }
	    };

	    function VElement(type, props, children, isVoidTag) {
	        this.nodeName = type;
	        this.props = props;
	        this.children = children;
	        this.isVoidTag = isVoidTag;
	    }
	    VElement.prototype = {
	        constructor: VElement,
	        toDOM: function toDOM() {
	            if (this.dom) return this.dom;
	            var dom,
	                tagName = this.nodeName;
	            if (avalon.modern && svgTags[tagName]) {
	                dom = createSVG(tagName);
	                /* istanbul ignore next*/
	            } else if (!avalon.modern && (VMLTags[tagName] || rvml.test(tagName))) {
	                dom = createVML(tagName);
	            } else {
	                dom = document$1.createElement(tagName);
	            }

	            var props = this.props || {};

	            for (var i in props) {
	                var val = props[i];
	                if (skipFalseAndFunction(val)) {
	                    /* istanbul ignore if*/
	                    if (specalAttrs[i] && avalon.msie < 8) {
	                        specalAttrs[i](dom, val);
	                    } else {
	                        dom.setAttribute(i, val + '');
	                    }
	                }
	            }
	            var c = this.children || [];
	            var template = c[0] ? c[0].nodeValue : '';
	            switch (this.nodeName) {
	                case 'script':
	                    dom.type = 'noexec';
	                    dom.text = template;
	                    try {
	                        dom.innerHTML = template;
	                    } catch (e) {}
	                    dom.type = props.type || '';
	                    break;
	                case 'noscript':
	                    dom.textContent = template;
	                case 'style':
	                case 'xmp':
	                case 'template':
	                    try {
	                        dom.innerHTML = template;
	                    } catch (e) {
	                        /* istanbul ignore next*/
	                        hackIE(dom, this.nodeName, template);
	                    }
	                    break;
	                case 'option':
	                    //IE6-8,为option添加文本子节点,不会同步到text属性中
	                    /* istanbul ignore next */
	                    if (msie < 9) dom.text = template;
	                default:
	                    /* istanbul ignore next */
	                    if (!this.isVoidTag && this.children) {
	                        this.children.forEach(function (el) {
	                            return c && dom.appendChild(avalon.vdom(c, 'toDOM'));
	                        });
	                    }
	                    break;
	            }
	            return this.dom = dom;
	        },

	        /* istanbul ignore next */

	        toHTML: function toHTML() {
	            var arr = [];
	            var props = this.props || {};
	            for (var i in props) {
	                var val = props[i];
	                if (skipFalseAndFunction(val)) {
	                    arr.push(i + '=' + avalon.quote(props[i] + ''));
	                }
	            }
	            arr = arr.length ? ' ' + arr.join(' ') : '';
	            var str = '<' + this.nodeName + arr;
	            if (this.isVoidTag) {
	                return str + '/>';
	            }
	            str += '>';
	            if (this.children) {
	                str += this.children.map(function (el) {
	                    return el ? avalon.vdom(el, 'toHTML') : '';
	                }).join('');
	            }
	            return str + '</' + this.nodeName + '>';
	        }
	    };
	    function hackIE(dom, nodeName, template) {
	        switch (nodeName) {
	            case 'style':
	                dom.setAttribute('type', 'text/css');
	                dom.styleSheet.cssText = template;
	                break;
	            case 'xmp': //IE6-8,XMP元素里面只能有文本节点,不能使用innerHTML
	            case 'noscript':
	                dom.textContent = template;
	                break;
	        }
	    }
	    function skipFalseAndFunction(a) {
	        return a !== false && Object(a) !== a;
	    }
	    /* istanbul ignore next */
	    var specalAttrs = {
	        "class": function _class(dom, val) {
	            dom.className = val;
	        },
	        style: function style(dom, val) {
	            dom.style.cssText = val;
	        },
	        type: function type(dom, val) {
	            try {
	                //textarea,button 元素在IE6,7设置 type 属性会抛错
	                dom.type = val;
	            } catch (e) {}
	        },
	        'for': function _for(dom, val) {
	            dom.setAttribute('for', val);
	            dom.htmlFor = val;
	        }
	    };

	    function createSVG(type) {
	        return document$1.createElementNS('http://www.w3.org/2000/svg', type);
	    }
	    var svgTags = avalon.oneObject('circle,defs,ellipse,image,line,' + 'path,polygon,polyline,rect,symbol,text,use,g,svg');

	    var rvml = /^\w+\:\w+/;
	    /* istanbul ignore next*/
	    function createVML(type) {
	        if (document$1.styleSheets.length < 31) {
	            document$1.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
	        } else {
	            // no more room, add to the existing one
	            // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx
	            document$1.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
	        }
	        var arr = type.split(':');
	        if (arr.length === 1) {
	            arr.unshift('v');
	        }
	        var tag = arr[1];
	        var ns = arr[0];
	        if (!document$1.namespaces[ns]) {
	            document$1.namespaces.add(ns, "urn:schemas-microsoft-com:vml");
	        }
	        return document$1.createElement('<' + ns + ':' + tag + ' class="rvml">');
	    }

	    var VMLTags = avalon.oneObject('shape,line,polyline,rect,roundrect,oval,arc,' + 'curve,background,image,shapetype,group,fill,' + 'stroke,shadow, extrusion, textbox, imagedata, textpath');

	    function VFragment(children, key, val, index) {
	        this.nodeName = '#document-fragment';
	        this.children = children;
	        this.key = key;
	        this.val = val;
	        this.index = index;
	        this.props = {};
	    }
	    VFragment.prototype = {
	        constructor: VFragment,
	        toDOM: function toDOM() {
	            if (this.dom) return this.dom;
	            var f = this.toFragment();
	            //IE6-11 docment-fragment都没有children属性 
	            this.split = f.lastChild;
	            return this.dom = f;
	        },
	        dispose: function dispose() {
	            this.toFragment();
	            this.innerRender && this.innerRender.dispose();
	            for (var i in this) {
	                this[i] = null;
	            }
	        },
	        toFragment: function toFragment() {
	            var f = createFragment();
	            this.children.forEach(function (el) {
	                return f.appendChild(avalon.vdom(el, 'toDOM'));
	            });
	            return f;
	        },
	        toHTML: function toHTML() {
	            var c = this.children;
	            return c.map(function (el) {
	                return avalon.vdom(el, 'toHTML');
	            }).join('');
	        }
	    };

	    /**
	     * 虚拟DOM的4大构造器
	     */
	    avalon.mix(avalon, {
	        VText: VText,
	        VComment: VComment,
	        VElement: VElement,
	        VFragment: VFragment
	    });

	    var constNameMap = {
	        '#text': 'VText',
	        '#document-fragment': 'VFragment',
	        '#comment': 'VComment'
	    };

	    var vdom = avalon.vdomAdaptor = avalon.vdom = function (obj, method) {
	        if (!obj) {
	            //obj在ms-for循环里面可能是null
	            return method === "toHTML" ? '' : createFragment();
	        }
	        var nodeName = obj.nodeName;
	        if (!nodeName) {
	            return new avalon.VFragment(obj)[method]();
	        }
	        var constName = constNameMap[nodeName] || 'VElement';
	        return avalon[constName].prototype[method].call(obj);
	    };

	    avalon.domize = function (a) {
	        return avalon.vdom(a, 'toDOM');
	    };

	    avalon.pendingActions = [];
	    avalon.uniqActions = {};
	    avalon.inTransaction = 0;
	    config.trackDeps = false;
	    avalon.track = function () {
	        if (config.trackDeps) {
	            avalon.log.apply(avalon, arguments);
	        }
	    };

	    /**
	     * Batch is a pseudotransaction, just for purposes of memoizing ComputedValues when nothing else does.
	     * During a batch `onBecomeUnobserved` will be called at most once per observable.
	     * Avoids unnecessary recalculations.
	     */

	    function runActions() {
	        if (avalon.isRunningActions === true || avalon.inTransaction > 0) return;
	        avalon.isRunningActions = true;
	        var tasks = avalon.pendingActions.splice(0, avalon.pendingActions.length);
	        for (var i = 0, task; task = tasks[i++];) {
	            task.update();
	            delete avalon.uniqActions[task.uuid];
	        }
	        avalon.isRunningActions = false;
	    }

	    function propagateChanged(target) {
	        var list = target.observers;
	        for (var i = 0, el; el = list[i++];) {
	            el.schedule(); //通知action, computed做它们该做的事
	        }
	    }

	    //将自己抛到市场上卖
	    function reportObserved(target) {
	        var action = avalon.trackingAction || null;
	        if (action !== null) {

	            avalon.track('征收到', target.expr);
	            action.mapIDs[target.uuid] = target;
	        }
	    }

	    var targetStack = [];

	    function collectDeps(action, getter) {
	        if (!action.observers) return;
	        var preAction = avalon.trackingAction;
	        if (preAction) {
	            targetStack.push(preAction);
	        }
	        avalon.trackingAction = action;
	        avalon.track('【action】', action.type, action.expr, '开始征收依赖项');
	        //多个observe持有同一个action
	        action.mapIDs = {}; //重新收集依赖
	        var hasError = true,
	            result;
	        try {
	            result = getter.call(action);
	            hasError = false;
	        } finally {
	            if (hasError) {
	                avalon.warn('collectDeps fail', getter + '');
	                action.mapIDs = {};
	                avalon.trackingAction = preAction;
	            } else {
	                // 确保它总是为null
	                avalon.trackingAction = targetStack.pop();
	                try {
	                    resetDeps(action);
	                } catch (e) {
	                    avalon.warn(e);
	                }
	            }
	            return result;
	        }
	    }

	    function resetDeps(action) {
	        var prev = action.observers,
	            curr = [],
	            checked = {},
	            ids = [];
	        for (var i in action.mapIDs) {
	            var dep = action.mapIDs[i];
	            if (!dep.isAction) {
	                if (!dep.observers) {
	                    //如果它已经被销毁
	                    delete action.mapIDs[i];
	                    continue;
	                }
	                ids.push(dep.uuid);
	                curr.push(dep);
	                checked[dep.uuid] = 1;
	                if (dep.lastAccessedBy === action.uuid) {
	                    continue;
	                }
	                dep.lastAccessedBy = action.uuid;
	                avalon.Array.ensure(dep.observers, action);
	            }
	        }
	        var ids = ids.sort().join(',');
	        if (ids === action.ids) {
	            return;
	        }
	        action.ids = ids;
	        if (!action.isComputed) {
	            action.observers = curr;
	        } else {
	            action.depsCount = curr.length;
	            action.deps = avalon.mix({}, action.mapIDs);
	            action.depsVersion = {};
	            for (var _i in action.mapIDs) {
	                var _dep = action.mapIDs[_i];
	                action.depsVersion[_dep.uuid] = _dep.version;
	            }
	        }

	        for (var _i2 = 0, _dep2; _dep2 = prev[_i2++];) {
	            if (!checked[_dep2.uuid]) {
	                avalon.Array.remove(_dep2.observers, action);
	            }
	        }
	    }

	    function transaction(action, thisArg, args) {
	        args = args || [];
	        var name = 'transaction ' + (action.name || action.displayName || 'noop');
	        transactionStart(name);
	        var res = action.apply(thisArg, args);
	        transactionEnd(name);
	        return res;
	    }
	    avalon.transaction = transaction;

	    function transactionStart(name) {
	        avalon.inTransaction += 1;
	    }

	    function transactionEnd(name) {
	        if (--avalon.inTransaction === 0) {
	            avalon.isRunningActions = false;
	            runActions();
	        }
	    }

	    var keyMap = avalon.oneObject("break,case,catch,continue,debugger,default,delete,do,else,false," + "finally,for,function,if,in,instanceof,new,null,return,switch,this," + "throw,true,try,typeof,var,void,while,with," + /* 关键字*/
	    "abstract,boolean,byte,char,class,const,double,enum,export,extends," + "final,float,goto,implements,import,int,interface,long,native," + "package,private,protected,public,short,static,super,synchronized," + "throws,transient,volatile");

	    var skipMap = avalon.mix({
	        Math: 1,
	        Date: 1,
	        $event: 1,
	        window: 1,
	        __vmodel__: 1,
	        avalon: 1
	    }, keyMap);

	    var rvmKey = /(^|[^\w\u00c0-\uFFFF_])(@|##)(?=[$\w])/g;
	    var ruselessSp = /\s*(\.|\|)\s*/g;
	    var rshortCircuit = /\|\|/g;
	    var brackets = /\(([^)]*)\)/;
	    var rpipeline = /\|(?=\?\?)/;
	    var rregexp = /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/g;
	    var robjectProp = /\.[\w\.\$]+/g; //对象的属性 el.xxx 中的xxx
	    var robjectKey = /(\{|\,)\s*([\$\w]+)\s*:/g; //对象的键名与冒号 {xxx:1,yyy: 2}中的xxx, yyy
	    var rfilterName = /\|(\w+)/g;
	    var rlocalVar = /[$a-zA-Z_][$a-zA-Z0-9_]*/g;

	    var exprCache = new Cache(300);

	    function addScopeForLocal(str) {
	        return str.replace(robjectProp, dig).replace(rlocalVar, function (el) {
	            if (!skipMap[el]) {
	                return "__vmodel__." + el;
	            }
	            return el;
	        });
	    }

	    function addScope(expr, type) {
	        var cacheKey = expr + ':' + type;
	        var cache = exprCache.get(cacheKey);
	        if (cache) {
	            return cache.slice(0);
	        }

	        stringPool.map = {};
	        //https://github.com/RubyLouvre/avalon/issues/1849
	        var input = expr.replace(rregexp, function (a, b) {
	            return b + dig(a.slice(b.length));
	        }); //移除所有正则
	        input = clearString(input); //移除所有字符串
	        input = input.replace(rshortCircuit, dig). //移除所有短路运算符
	        replace(ruselessSp, '$1'). //移除.|两端空白

	        replace(robjectKey, function (_, a, b) {
	            //移除所有键名
	            return a + dig(b) + ':'; //比如 ms-widget="[{is:'ms-address-wrap', $id:'address'}]"这样极端的情况 
	        }).replace(rvmKey, '$1__vmodel__.'). //转换@与##为__vmodel__
	        replace(rfilterName, function (a, b) {
	            //移除所有过滤器的名字
	            return '|' + dig(b);
	        });
	        input = addScopeForLocal(input); //在本地变量前添加__vmodel__

	        var filters = input.split(rpipeline); //根据管道符切割表达式
	        var body = filters.shift().replace(rfill, fill).trim();
	        if (/\?\?\d/.test(body)) {
	            body = body.replace(rfill, fill);
	        }
	        if (filters.length) {
	            filters = filters.map(function (filter) {
	                var bracketArgs = '';
	                filter = filter.replace(brackets, function (a, b) {
	                    if (/\S/.test(b)) {
	                        bracketArgs += ',' + b; //还原字符串,正则,短路运算符
	                    }
	                    return '';
	                });
	                var arg = '[' + avalon.quote(filter.trim()) + bracketArgs + ']';
	                return arg;
	            });
	            filters = 'avalon.composeFilters(' + filters + ')(__value__)';
	            filters = filters.replace(rfill, fill);
	        } else {
	            filters = '';
	        }
	        return exprCache.put(cacheKey, [body, filters]);
	    }
	    var rhandleName = /^__vmodel__\.[$\w\.]+$/;
	    var rfixIE678 = /__vmodel__\.([^(]+)\(([^)]*)\)/;
	    function makeHandle(body) {
	        if (rhandleName.test(body)) {
	            body = body + '($event)';
	        }
	        /* istanbul ignore if */
	        if (msie < 9) {
	            body = body.replace(rfixIE678, function (a, b, c) {
	                return '__vmodel__.' + b + '.call(__vmodel__' + (/\S/.test(c) ? ',' + c : '') + ')';
	            });
	        }
	        return body;
	    }
	    function createGetter(expr, type) {
	        var arr = addScope(expr, type),
	            body;
	        if (!arr[1]) {
	            body = arr[0];
	        } else {
	            body = arr[1].replace(/__value__\)$/, arr[0] + ')');
	        }
	        try {
	            return new Function('__vmodel__', 'return ' + body + ';');
	            /* istanbul ignore next */
	        } catch (e) {
	            avalon.log('parse getter: [', expr, body, ']error');
	            return avalon.noop;
	        }
	    }

	    /**
	     * 生成表达式设值函数
	     * @param  {String}  expr
	     */
	    function createSetter(expr, type) {
	        var arr = addScope(expr, type);
	        var body = 'try{ ' + arr[0] + ' = __value__}catch(e){}';
	        try {
	            return new Function('__vmodel__', '__value__', body + ';');
	            /* istanbul ignore next */
	        } catch (e) {
	            avalon.log('parse setter: ', expr, ' error');
	            return avalon.noop;
	        }
	    }

	    var actionUUID = 1;
	    //需要重构
	    function Action(vm, options, callback) {
	        for (var i in options) {
	            if (protectedMenbers[i] !== 1) {
	                this[i] = options[i];
	            }
	        }

	        this.vm = vm;
	        this.observers = [];
	        this.callback = callback;
	        this.uuid = ++actionUUID;
	        this.ids = '';
	        this.mapIDs = {}; //这个用于去重
	        this.isAction = true;
	        var expr = this.expr;
	        // 缓存取值函数
	        if (typeof this.getter !== 'function') {
	            this.getter = createGetter(expr, this.type);
	        }
	        // 缓存设值函数（双向数据绑定）
	        if (this.type === 'duplex') {
	            this.setter = createSetter(expr, this.type);
	        }
	        // 缓存表达式旧值
	        this.value = NaN;
	        // 表达式初始值 & 提取依赖
	        if (!this.node) {
	            this.value = this.get();
	        }
	    }

	    Action.prototype = {
	        getValue: function getValue() {
	            var scope = this.vm;
	            try {
	                return this.getter.call(scope, scope);
	            } catch (e) {
	                avalon.log(this.getter + ' exec error');
	            }
	        },
	        setValue: function setValue(value) {
	            var scope = this.vm;
	            if (this.setter) {
	                this.setter.call(scope, scope, value);
	            }
	        },


	        // get --> getValue --> getter
	        get: function get(fn) {
	            var name = 'action track ' + this.type;

	            if (this.deep) {
	                avalon.deepCollect = true;
	            }

	            var value = collectDeps(this, this.getValue);
	            if (this.deep && avalon.deepCollect) {
	                avalon.deepCollect = false;
	            }

	            return value;
	        },


	        /**
	         * 在更新视图前保存原有的value
	         */
	        beforeUpdate: function beforeUpdate() {
	            var v = this.value;
	            return this.oldValue = v && v.$events ? v.$model : v;
	        },
	        update: function update(args, uuid) {
	            var oldVal = this.beforeUpdate();
	            var newVal = this.value = this.get();
	            var callback = this.callback;
	            if (callback && this.diff(newVal, oldVal, args)) {
	                callback.call(this.vm, this.value, oldVal, this.expr);
	            }
	            this._isScheduled = false;
	        },
	        schedule: function schedule() {
	            if (!this._isScheduled) {
	                this._isScheduled = true;
	                if (!avalon.uniqActions[this.uuid]) {
	                    avalon.uniqActions[this.uuid] = 1;
	                    avalon.pendingActions.push(this);
	                }

	                runActions(); //这里会还原_isScheduled

	            }
	        },
	        removeDepends: function removeDepends() {
	            var self = this;
	            this.observers.forEach(function (depend) {
	                avalon.Array.remove(depend.observers, self);
	            });
	        },


	        /**
	         * 比较两个计算值是否,一致,在for, class等能复杂数据类型的指令中,它们会重写diff复法
	         */
	        diff: function diff(a, b) {
	            return a !== b;
	        },


	        /**
	         * 销毁指令
	         */
	        dispose: function dispose() {
	            this.value = null;
	            this.removeDepends();
	            if (this.beforeDispose) {
	                this.beforeDispose();
	            }
	            for (var i in this) {
	                delete this[i];
	            }
	        }
	    };

	    var protectedMenbers = {
	        vm: 1,
	        callback: 1,

	        observers: 1,
	        oldValue: 1,
	        value: 1,
	        getValue: 1,
	        setValue: 1,
	        get: 1,

	        removeDepends: 1,
	        beforeUpdate: 1,
	        update: 1,
	        //diff
	        //getter
	        //setter
	        //expr
	        //vdom
	        //type: "for"
	        //name: "ms-for"
	        //attrName: ":for"
	        //param: "click"
	        //beforeDispose
	        dispose: 1
	    };

	    /**
	    * 
	     与Computed等共享UUID
	    */
	    var obid = 1;
	    function Mutation(expr, value, vm) {
	        //构造函数
	        this.expr = expr;
	        if (value) {
	            var childVm = platform.createProxy(value, this);
	            if (childVm) {
	                value = childVm;
	            }
	        }
	        this.value = value;
	        this.vm = vm;
	        try {
	            vm.$mutations[expr] = this;
	        } catch (ignoreIE) {}
	        this.uuid = ++obid;
	        this.updateVersion();
	        this.mapIDs = {};
	        this.observers = [];
	    }

	    Mutation.prototype = {
	        get: function get() {
	            if (avalon.trackingAction) {
	                this.collect(); //被收集
	                var childOb = this.value;
	                if (childOb && childOb.$events) {
	                    if (Array.isArray(childOb)) {
	                        childOb.forEach(function (item) {
	                            if (item && item.$events) {
	                                item.$events.__dep__.collect();
	                            }
	                        });
	                    } else if (avalon.deepCollect) {
	                        for (var key in childOb) {
	                            if (childOb.hasOwnProperty(key)) {
	                                var collectIt = childOb[key];
	                            }
	                        }
	                    }
	                }
	            }
	            return this.value;
	        },
	        collect: function collect() {
	            avalon.track(name, '被收集');
	            reportObserved(this);
	        },
	        updateVersion: function updateVersion() {
	            this.version = Math.random() + Math.random();
	        },
	        notify: function notify() {
	            transactionStart();
	            propagateChanged(this);
	            transactionEnd();
	        },
	        set: function set(newValue) {
	            var oldValue = this.value;
	            if (newValue !== oldValue) {
	                if (avalon.isObject(newValue)) {
	                    var hash = oldValue && oldValue.$hashcode;
	                    var childVM = platform.createProxy(newValue, this);
	                    if (childVM) {
	                        if (hash) {
	                            childVM.$hashcode = hash;
	                        }
	                        newValue = childVM;
	                    }
	                }
	                this.value = newValue;
	                this.updateVersion();
	                this.notify();
	            }
	        }
	    };

	    function getBody(fn) {
	        var entire = fn.toString();
	        return entire.substring(entire.indexOf('{}') + 1, entire.lastIndexOf('}'));
	    }
	    //如果不存在三目,if,方法
	    var instability = /(\?|if\b|\(.+\))/;

	    function __create(o) {
	        var __ = function __() {};
	        __.prototype = o;
	        return new __();
	    }

	    function __extends(child, parent) {
	        if (typeof parent === 'function') {
	            var proto = child.prototype = __create(parent.prototype);
	            proto.constructor = child;
	        }
	    }
	    var Computed = function (_super) {
	        __extends(Computed, _super);

	        function Computed(name, options, vm) {
	            //构造函数
	            _super.call(this, name, undefined, vm);
	            delete options.get;
	            delete options.set;

	            avalon.mix(this, options);
	            this.deps = {};
	            this.type = 'computed';
	            this.depsVersion = {};
	            this.isComputed = true;
	            this.trackAndCompute();
	            if (!('isStable' in this)) {
	                this.isStable = !instability.test(getBody(this.getter));
	            }
	        }
	        var cp = Computed.prototype;
	        cp.trackAndCompute = function () {
	            if (this.isStable && this.depsCount > 0) {
	                this.getValue();
	            } else {
	                collectDeps(this, this.getValue.bind(this));
	            }
	        };

	        cp.getValue = function () {
	            return this.value = this.getter.call(this.vm);
	        };

	        cp.schedule = function () {
	            var observers = this.observers;
	            var i = observers.length;
	            while (i--) {
	                var d = observers[i];
	                if (d.schedule) {
	                    d.schedule();
	                }
	            }
	        };

	        cp.shouldCompute = function () {
	            if (this.isStable) {
	                //如果变动因子确定,那么只比较变动因子的版本
	                var toComputed = false;
	                for (var i in this.deps) {
	                    if (this.deps[i].version !== this.depsVersion[i]) {
	                        toComputed = true;
	                        this.deps[i].version = this.depsVersion[i];
	                    }
	                }
	                return toComputed;
	            }
	            return true;
	        };
	        cp.set = function () {
	            if (this.setter) {
	                avalon.transaction(this.setter, this.vm, arguments);
	            }
	        };
	        cp.get = function () {

	            //当被设置了就不稳定,当它被访问了一次就是稳定
	            this.collect();

	            if (this.shouldCompute()) {
	                this.trackAndCompute();
	                // console.log('computed 2 分支')
	                this.updateVersion();
	                //  this.reportChanged()
	            }

	            //下面这一行好像没用
	            return this.value;
	        };
	        return Computed;
	    }(Mutation);

	    /**
	     * 这里放置ViewModel模块的共用方法
	     * avalon.define: 全框架最重要的方法,生成用户VM
	     * IProxy, 基本用户数据产生的一个数据对象,基于$model与vmodel之间的形态
	     * modelFactory: 生成用户VM
	     * canHijack: 判定此属性是否该被劫持,加入数据监听与分发的的逻辑
	     * createProxy: listFactory与modelFactory的封装
	     * createAccessor: 实现数据监听与分发的重要对象
	     * itemFactory: ms-for循环中产生的代理VM的生成工厂
	     * fuseFactory: 两个ms-controller间产生的代理VM的生成工厂
	     */

	    avalon.define = function (definition) {
	        var $id = definition.$id;
	        if (!$id) {
	            avalon.error('vm.$id must be specified');
	        }
	        if (avalon.vmodels[$id]) {
	            avalon.warn('error:[' + $id + '] had defined!');
	        }
	        var vm = platform.modelFactory(definition);
	        return avalon.vmodels[$id] = vm;
	    };

	    /**
	     * 在未来的版本,avalon改用Proxy来创建VM,因此
	     */

	    function IProxy(definition, dd) {
	        avalon.mix(this, definition);
	        avalon.mix(this, $$skipArray);
	        this.$hashcode = avalon.makeHashCode('$');
	        this.$id = this.$id || this.$hashcode;
	        this.$events = {
	            __dep__: dd || new Mutation(this.$id)
	        };
	        if (avalon.config.inProxyMode) {
	            delete this.$mutations;
	            this.$accessors = {};
	            this.$computed = {};
	            this.$track = '';
	        } else {
	            this.$accessors = {
	                $model: modelAccessor
	            };
	        }
	        if (dd === void 0) {
	            this.$watch = platform.watchFactory(this.$events);
	            this.$fire = platform.fireFactory(this.$events);
	        } else {
	            delete this.$watch;
	            delete this.$fire;
	        }
	    }

	    platform.modelFactory = function modelFactory(definition, dd) {
	        var $computed = definition.$computed || {};
	        delete definition.$computed;
	        var core = new IProxy(definition, dd);
	        var $accessors = core.$accessors;
	        var keys = [];

	        platform.hideProperty(core, '$mutations', {});

	        for (var key in definition) {
	            if (key in $$skipArray) continue;
	            var val = definition[key];
	            keys.push(key);
	            if (canHijack(key, val)) {
	                $accessors[key] = createAccessor(key, val);
	            }
	        }
	        for (var _key in $computed) {
	            if (_key in $$skipArray) continue;
	            var val = $computed[_key];
	            if (typeof val === 'function') {
	                val = {
	                    get: val
	                };
	            }
	            if (val && val.get) {
	                val.getter = val.get;
	                val.setter = val.set;
	                avalon.Array.ensure(keys, _key);
	                $accessors[_key] = createAccessor(_key, val, true);
	            }
	        }
	        //将系统API以unenumerable形式加入vm,
	        //添加用户的其他不可监听属性或方法
	        //重写$track
	        //并在IE6-8中增添加不存在的hasOwnPropert方法
	        var vm = platform.createViewModel(core, $accessors, core);
	        platform.afterCreate(vm, core, keys, !dd);
	        return vm;
	    };
	    var $proxyItemBackdoorMap = {};

	    function canHijack(key, val, $proxyItemBackdoor) {
	        if (key in $$skipArray) return false;
	        if (key.charAt(0) === '$') {
	            if ($proxyItemBackdoor) {
	                if (!$proxyItemBackdoorMap[key]) {
	                    $proxyItemBackdoorMap[key] = 1;
	                    avalon.warn('ms-for\u4E2D\u7684\u53D8\u91CF' + key + '\u4E0D\u518D\u5EFA\u8BAE\u4EE5$\u4E3A\u524D\u7F00');
	                }
	                return true;
	            }
	            return false;
	        }
	        if (val == null) {
	            avalon.warn('定义vmodel时' + key + '的属性值不能为null undefine');
	            return true;
	        }
	        if (/error|date|function|regexp/.test(avalon.type(val))) {
	            return false;
	        }
	        return !(val && val.nodeName && val.nodeType);
	    }

	    function createProxy(target, dd) {
	        if (target && target.$events) {
	            return target;
	        }
	        var vm;
	        if (Array.isArray(target)) {
	            vm = platform.listFactory(target, false, dd);
	        } else if (isObject(target)) {
	            vm = platform.modelFactory(target, dd);
	        }
	        return vm;
	    }

	    platform.createProxy = createProxy;

	    platform.itemFactory = function itemFactory(before, after) {
	        var keyMap = before.$model;
	        var core = new IProxy(keyMap);
	        var state = avalon.shadowCopy(core.$accessors, before.$accessors); //防止互相污染
	        var data = after.data;
	        //core是包含系统属性的对象
	        //keyMap是不包含系统属性的对象, keys
	        for (var key in data) {
	            var val = keyMap[key] = core[key] = data[key];
	            state[key] = createAccessor(key, val);
	        }
	        var keys = Object.keys(keyMap);
	        var vm = platform.createViewModel(core, state, core);
	        platform.afterCreate(vm, core, keys);
	        return vm;
	    };

	    function createAccessor(key, val, isComputed) {
	        var mutation = null;
	        var Accessor = isComputed ? Computed : Mutation;
	        return {
	            get: function Getter() {
	                if (!mutation) {
	                    mutation = new Accessor(key, val, this);
	                }
	                return mutation.get();
	            },
	            set: function Setter(newValue) {
	                if (!mutation) {
	                    mutation = new Accessor(key, val, this);
	                }
	                mutation.set(newValue);
	            },
	            enumerable: true,
	            configurable: true
	        };
	    }

	    platform.fuseFactory = function fuseFactory(before, after) {
	        var keyMap = avalon.mix(before.$model, after.$model);
	        var core = new IProxy(avalon.mix(keyMap, {
	            $id: before.$id + after.$id
	        }));
	        var state = avalon.mix(core.$accessors, before.$accessors, after.$accessors); //防止互相污染

	        var keys = Object.keys(keyMap);
	        //将系统API以unenumerable形式加入vm,并在IE6-8中添加hasOwnPropert方法
	        var vm = platform.createViewModel(core, state, core);
	        platform.afterCreate(vm, core, keys, false);
	        return vm;
	    };

	    function toJson(val) {
	        var xtype = avalon.type(val);
	        if (xtype === 'array') {
	            var array = [];
	            for (var i = 0; i < val.length; i++) {
	                array[i] = toJson(val[i]);
	            }
	            return array;
	        } else if (xtype === 'object') {
	            if (typeof val.$track === 'string') {
	                var obj = {};
	                var arr = val.$track.match(/[^☥]+/g) || [];
	                arr.forEach(function (i) {
	                    var value = val[i];
	                    obj[i] = value && value.$events ? toJson(value) : value;
	                });
	                return obj;
	            }
	        }
	        return val;
	    }

	    var modelAccessor = {
	        get: function get() {
	            return toJson(this);
	        },
	        set: avalon.noop,
	        enumerable: false,
	        configurable: true
	    };

	    platform.toJson = toJson;
	    platform.modelAccessor = modelAccessor;

	    var _splice = ap.splice;
	    var __array__ = {
	        set: function set(index, val) {
	            if (index >>> 0 === index && this[index] !== val) {
	                if (index > this.length) {
	                    throw Error(index + 'set方法的第一个参数不能大于原数组长度');
	                }
	                this.splice(index, 1, val);
	            }
	        },
	        toJSON: function toJSON() {
	            //为了解决IE6-8的解决,通过此方法显式地求取数组的$model
	            return this.$model = platform.toJson(this);
	        },
	        contains: function contains(el) {
	            //判定是否包含
	            return this.indexOf(el) !== -1;
	        },
	        ensure: function ensure(el) {
	            if (!this.contains(el)) {
	                //只有不存在才push
	                this.push(el);
	                return true;
	            }
	            return false;
	        },
	        pushArray: function pushArray(arr) {
	            return this.push.apply(this, arr);
	        },
	        remove: function remove(el) {
	            //移除第一个等于给定值的元素
	            return this.removeAt(this.indexOf(el));
	        },
	        removeAt: function removeAt(index) {
	            //移除指定索引上的元素
	            if (index >>> 0 === index) {
	                return this.splice(index, 1);
	            }
	            return [];
	        },
	        clear: function clear() {
	            this.removeAll();
	            return this;
	        },
	        removeAll: function removeAll(all) {
	            //移除N个元素
	            var size = this.length;
	            var eliminate = Array.isArray(all) ? function (el) {
	                return all.indexOf(el) !== -1;
	            } : typeof all === 'function' ? all : false;

	            if (eliminate) {
	                for (var i = this.length - 1; i >= 0; i--) {
	                    if (eliminate(this[i], i)) {
	                        _splice.call(this, i, 1);
	                    }
	                }
	            } else {
	                _splice.call(this, 0, this.length);
	            }
	            this.toJSON();
	            this.$events.__dep__.notify();
	        }
	    };
	    function hijackMethods(array) {
	        for (var i in __array__) {
	            platform.hideProperty(array, i, __array__[i]);
	        }
	    }
	    var __method__ = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

	    __method__.forEach(function (method) {
	        var original = ap[method];
	        __array__[method] = function () {
	            // 继续尝试劫持数组元素的属性
	            var core = this.$events;

	            var args = platform.listFactory(arguments, true, core.__dep__);
	            var result = original.apply(this, args);

	            this.toJSON();
	            core.__dep__.notify(method);
	            return result;
	        };
	    });

	    function listFactory(array, stop, dd) {
	        if (!stop) {
	            hijackMethods(array);
	            if (modern) {
	                Object.defineProperty(array, '$model', platform.modelAccessor);
	            }
	            platform.hideProperty(array, '$hashcode', avalon.makeHashCode('$'));
	            platform.hideProperty(array, '$events', { __dep__: dd || new Mutation() });
	        }
	        var _dd = array.$events && array.$events.__dep__;
	        for (var i = 0, n = array.length; i < n; i++) {
	            var item = array[i];
	            if (isObject(item)) {
	                array[i] = platform.createProxy(item, _dd);
	            }
	        }
	        return array;
	    }

	    platform.listFactory = listFactory;

	    //如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
	    //标准浏览器使用__defineGetter__, __defineSetter__实现
	    var canHideProperty = true;
	    try {
	        Object.defineProperty({}, '_', {
	            value: 'x'
	        });
	        delete $$skipArray.$vbsetter;
	        delete $$skipArray.$vbthis;
	    } catch (e) {
	        /* istanbul ignore next*/
	        canHideProperty = false;
	    }

	    var protectedVB = { $vbthis: 1, $vbsetter: 1 };
	    /* istanbul ignore next */
	    function hideProperty(host, name, value) {
	        if (canHideProperty) {
	            Object.defineProperty(host, name, {
	                value: value,
	                writable: true,
	                enumerable: false,
	                configurable: true
	            });
	        } else if (!protectedVB[name]) {
	            /* istanbul ignore next */
	            host[name] = value;
	        }
	    }

	    function watchFactory(core) {
	        return function $watch(expr, callback, deep) {
	            var w = new Action(core.__proxy__, {
	                deep: deep,
	                type: 'user',
	                expr: expr
	            }, callback);
	            if (!core[expr]) {
	                core[expr] = [w];
	            } else {
	                core[expr].push(w);
	            }

	            return function () {
	                w.dispose();
	                avalon.Array.remove(core[expr], w);
	                if (core[expr].length === 0) {
	                    delete core[expr];
	                }
	            };
	        };
	    }

	    function fireFactory(core) {
	        return function $fire(expr, a) {
	            var list = core[expr];
	            if (Array.isArray(list)) {
	                for (var i = 0, w; w = list[i++];) {
	                    w.callback.call(w.vm, a, w.value, w.expr);
	                }
	            }
	        };
	    }

	    function wrapIt(str) {
	        return '☥' + str + '☥';
	    }

	    function afterCreate(vm, core, keys, bindThis) {
	        var ac = vm.$accessors;
	        //隐藏系统属性
	        for (var key in $$skipArray) {
	            if (avalon.msie < 9 && core[key] === void 0) continue;
	            hideProperty(vm, key, core[key]);
	        }
	        //为不可监听的属性或方法赋值
	        for (var i = 0; i < keys.length; i++) {
	            var _key2 = keys[i];
	            if (!(_key2 in ac)) {
	                if (bindThis && typeof core[_key2] === 'function') {
	                    vm[_key2] = core[_key2].bind(vm);
	                    continue;
	                }
	                vm[_key2] = core[_key2];
	            }
	        }
	        vm.$track = keys.join('☥');

	        function hasOwnKey(key) {
	            return wrapIt(vm.$track).indexOf(wrapIt(key)) > -1;
	        }
	        if (avalon.msie < 9) {
	            vm.hasOwnProperty = hasOwnKey;
	        }
	        vm.$events.__proxy__ = vm;
	    }

	    platform.hideProperty = hideProperty;
	    platform.fireFactory = fireFactory;
	    platform.watchFactory = watchFactory;
	    platform.afterCreate = afterCreate;

	    var createViewModel = Object.defineProperties;
	    var defineProperty;

	    var timeBucket = new Date() - 0;
	    /* istanbul ignore if*/
	    if (!canHideProperty) {
	        if ('__defineGetter__' in avalon) {
	            defineProperty = function defineProperty(obj, prop, desc) {
	                if ('value' in desc) {
	                    obj[prop] = desc.value;
	                }
	                if ('get' in desc) {
	                    obj.__defineGetter__(prop, desc.get);
	                }
	                if ('set' in desc) {
	                    obj.__defineSetter__(prop, desc.set);
	                }
	                return obj;
	            };
	            createViewModel = function createViewModel(obj, descs) {
	                for (var prop in descs) {
	                    if (descs.hasOwnProperty(prop)) {
	                        defineProperty(obj, prop, descs[prop]);
	                    }
	                }
	                return obj;
	            };
	        }
	        /* istanbul ignore if*/
	        if (msie < 9) {
	            var VBClassPool = {};
	            window.execScript([// jshint ignore:line
	            'Function parseVB(code)', '\tExecuteGlobal(code)', 'End Function' //转换一段文本为VB代码
	            ].join('\n'), 'VBScript');

	            var VBMediator = function VBMediator(instance, accessors, name, value) {
	                // jshint ignore:line
	                var accessor = accessors[name];
	                if (arguments.length === 4) {
	                    accessor.set.call(instance, value);
	                } else {
	                    return accessor.get.call(instance);
	                }
	            };
	            createViewModel = function createViewModel(name, accessors, properties) {
	                // jshint ignore:line
	                var buffer = [];
	                buffer.push('\tPrivate [$vbsetter]', '\tPublic  [$accessors]', '\tPublic Default Function [$vbthis](ac' + timeBucket + ', s' + timeBucket + ')', '\t\tSet  [$accessors] = ac' + timeBucket + ': set [$vbsetter] = s' + timeBucket, '\t\tSet  [$vbthis]    = Me', //链式调用
	                '\tEnd Function');
	                //添加普通属性,因为VBScript对象不能像JS那样随意增删属性，必须在这里预先定义好
	                var uniq = {
	                    $vbthis: true,
	                    $vbsetter: true,
	                    $accessors: true
	                };
	                for (name in $$skipArray) {
	                    if (!uniq[name]) {
	                        buffer.push('\tPublic [' + name + ']');
	                        uniq[name] = true;
	                    }
	                }
	                //添加访问器属性 
	                for (name in accessors) {
	                    if (uniq[name]) {
	                        continue;
	                    }
	                    uniq[name] = true;
	                    buffer.push(
	                    //由于不知对方会传入什么,因此set, let都用上
	                    '\tPublic Property Let [' + name + '](val' + timeBucket + ')', //setter
	                    '\t\tCall [$vbsetter](Me, [$accessors], "' + name + '", val' + timeBucket + ')', '\tEnd Property', '\tPublic Property Set [' + name + '](val' + timeBucket + ')', //setter
	                    '\t\tCall [$vbsetter](Me, [$accessors], "' + name + '", val' + timeBucket + ')', '\tEnd Property', '\tPublic Property Get [' + name + ']', //getter
	                    '\tOn Error Resume Next', //必须优先使用set语句,否则它会误将数组当字符串返回
	                    '\t\tSet[' + name + '] = [$vbsetter](Me, [$accessors],"' + name + '")', '\tIf Err.Number <> 0 Then', '\t\t[' + name + '] = [$vbsetter](Me, [$accessors],"' + name + '")', '\tEnd If', '\tOn Error Goto 0', '\tEnd Property');
	                }

	                for (name in properties) {
	                    if (!uniq[name]) {
	                        uniq[name] = true;
	                        buffer.push('\tPublic [' + name + ']');
	                    }
	                }

	                buffer.push('\tPublic [hasOwnProperty]');
	                buffer.push('End Class');
	                var body = buffer.join('\r\n');
	                var className = VBClassPool[body];
	                if (!className) {
	                    className = avalon.makeHashCode('VBClass');
	                    window.parseVB('Class ' + className + body);
	                    window.parseVB(['Function ' + className + 'Factory(acc, vbm)', //创建实例并传入两个关键的参数
	                    '\tDim o', '\tSet o = (New ' + className + ')(acc, vbm)', '\tSet ' + className + 'Factory = o', 'End Function'].join('\r\n'));
	                    VBClassPool[body] = className;
	                }
	                var ret = window[className + 'Factory'](accessors, VBMediator); //得到其产品
	                return ret; //得到其产品
	            };
	        }
	    }

	    platform.createViewModel = createViewModel;

	    var impDir = avalon.directive('important', {
	        priority: 1,
	        getScope: function getScope(name, scope) {
	            var v = avalon.vmodels[name];
	            if (v) return v;
	            throw 'error! no vmodel called ' + name;
	        },
	        update: function update(node, attrName, $id) {
	            if (!avalon.inBrowser) return;
	            var dom = avalon.vdom(node, 'toDOM');
	            if (dom.nodeType === 1) {
	                dom.removeAttribute(attrName);
	                avalon(dom).removeClass('ms-controller');
	            }
	            var vm = avalon.vmodels[$id];
	            if (vm) {
	                vm.$element = dom;
	                vm.$render = this;
	                vm.$fire('onReady');
	                delete vm.$events.onReady;
	            }
	        }
	    });

	    var impCb = impDir.update;

	    avalon.directive('controller', {
	        priority: 2,
	        getScope: function getScope(name, scope) {
	            var v = avalon.vmodels[name];
	            if (v) {
	                v.$render = this;
	                if (scope && scope !== v) {
	                    return platform.fuseFactory(scope, v);
	                }
	                return v;
	            }
	            return scope;
	        },
	        update: impCb
	    });

	    avalon.directive('skip', {
	        delay: true
	    });

	    var arrayWarn = {};
	    var cssDir = avalon.directive('css', {
	        diff: function diff(newVal, oldVal) {
	            if (Object(newVal) === newVal) {
	                newVal = platform.toJson(newVal); //安全的遍历VBscript
	                if (Array.isArray(newVal)) {
	                    //转换成对象
	                    var b = {};
	                    newVal.forEach(function (el) {
	                        el && avalon.shadowCopy(b, el);
	                    });
	                    newVal = b;
	                    if (!arrayWarn[this.type]) {
	                        avalon.warn('ms-' + this.type + '指令的值不建议使用数组形式了！');
	                        arrayWarn[this.type] = 1;
	                    }
	                }

	                var hasChange = false;
	                var patch = {};
	                if (!oldVal) {
	                    //如果一开始为空
	                    patch = newVal;
	                    hasChange = true;
	                } else {
	                    if (this.deep) {
	                        var deep = typeof this.deep === 'number' ? this.deep : 6;
	                        for (var i in newVal) {
	                            //diff差异点  
	                            if (!deepEquals(newVal[i], oldVal[i], 4)) {
	                                this.value = newVal;
	                                return true;
	                            }
	                            patch[i] = newVal[i];
	                        }
	                    } else {
	                        for (var _i3 in newVal) {
	                            //diff差异点
	                            if (newVal[_i3] !== oldVal[_i3]) {
	                                hasChange = true;
	                            }
	                            patch[_i3] = newVal[_i3];
	                        }
	                    }

	                    for (var _i4 in oldVal) {
	                        if (!(_i4 in patch)) {
	                            hasChange = true;
	                            patch[_i4] = '';
	                        }
	                    }
	                }
	                if (hasChange) {
	                    this.value = patch;
	                    return true;
	                }
	            }
	            return false;
	        },
	        update: function update(vdom, value) {

	            var dom = vdom.dom;
	            if (dom && dom.nodeType === 1) {
	                var wrap = avalon(dom);
	                for (var name in value) {
	                    wrap.css(name, value[name]);
	                }
	            }
	        }
	    });

	    var cssDiff = cssDir.diff;

	    function getEnumerableKeys(obj) {
	        var res = [];
	        for (var key in obj) {
	            res.push(key);
	        }return res;
	    }

	    function deepEquals(a, b, level) {
	        if (level === 0) return a === b;
	        if (a === null && b === null) return true;
	        if (a === undefined && b === undefined) return true;
	        var aIsArray = Array.isArray(a);
	        if (aIsArray !== Array.isArray(b)) {
	            return false;
	        }
	        if (aIsArray) {
	            return equalArray(a, b, level);
	        } else if (typeof a === "object" && typeof b === "object") {
	            return equalObject(a, b, level);
	        }
	        return a === b;
	    }

	    function equalArray(a, b, level) {
	        if (a.length !== b.length) {
	            return false;
	        }
	        for (var i = a.length - 1; i >= 0; i--) {
	            try {
	                if (!deepEquals(a[i], b[i], level - 1)) {
	                    return false;
	                }
	            } catch (noThisPropError) {
	                return false;
	            }
	        }
	        return true;
	    }

	    function equalObject(a, b, level) {
	        if (a === null || b === null) return false;
	        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length) return false;
	        for (var prop in a) {
	            if (!(prop in b)) return false;
	            try {
	                if (!deepEquals(a[prop], b[prop], level - 1)) {
	                    return false;
	                }
	            } catch (noThisPropError) {
	                return false;
	            }
	        }
	        return true;
	    }

	    /**
	     * ------------------------------------------------------------
	     * 检测浏览器对CSS动画的支持与API名
	     * ------------------------------------------------------------
	     */

	    var checker = {
	        TransitionEvent: 'transitionend',
	        WebKitTransitionEvent: 'webkitTransitionEnd',
	        OTransitionEvent: 'oTransitionEnd',
	        otransitionEvent: 'otransitionEnd'
	    };
	    var css3 = void 0;
	    var tran = void 0;
	    var ani = void 0;
	    var name$2 = void 0;
	    var animationEndEvent = void 0;
	    var transitionEndEvent = void 0;
	    var transition = false;
	    var animation = false;
	    //有的浏览器同时支持私有实现与标准写法，比如webkit支持前两种，Opera支持1、3、4
	    for (name$2 in checker) {
	        if (window$1[name$2]) {
	            tran = checker[name$2];
	            break;
	        }
	        /* istanbul ignore next */
	        try {
	            var a = document.createEvent(name$2);
	            tran = checker[name$2];
	            break;
	        } catch (e) {}
	    }
	    if (typeof tran === 'string') {
	        transition = css3 = true;
	        transitionEndEvent = tran;
	    }

	    //animationend有两个可用形态
	    //IE10+, Firefox 16+ & Opera 12.1+: animationend
	    //Chrome/Safari: webkitAnimationEnd
	    //http://blogs.msdn.com/b/davrous/archive/2011/12/06/introduction-to-css3-animat ions.aspx
	    //IE10也可以使用MSAnimationEnd监听，但是回调里的事件 type依然为animationend
	    //  el.addEventListener('MSAnimationEnd', function(e) {
	    //     alert(e.type)// animationend！！！
	    // })
	    checker = {
	        'AnimationEvent': 'animationend',
	        'WebKitAnimationEvent': 'webkitAnimationEnd'
	    };
	    for (name$2 in checker) {
	        if (window$1[name$2]) {
	            ani = checker[name$2];
	            break;
	        }
	    }
	    if (typeof ani === 'string') {
	        animation = css3 = true;
	        animationEndEvent = ani;
	    }

	    var effectDir = avalon.directive('effect', {
	        priority: 5,
	        diff: function diff(effect) {
	            var vdom = this.node;
	            if (typeof effect === 'string') {
	                this.value = effect = {
	                    is: effect
	                };
	                avalon.warn('ms-effect的指令值不再支持字符串,必须是一个对象');
	            }
	            this.value = vdom.effect = effect;
	            var ok = cssDiff.call(this, effect, this.oldValue);
	            var me = this;
	            if (ok) {
	                setTimeout(function () {
	                    vdom.animating = true;
	                    effectDir.update.call(me, vdom, vdom.effect);
	                });
	                vdom.animating = false;
	                return true;
	            }
	            return false;
	        },

	        update: function update(vdom, change, opts) {
	            var dom = vdom.dom;
	            if (dom && dom.nodeType === 1) {
	                //要求配置对象必须指定is属性，action必须是布尔或enter,leave,move
	                var option = change || opts;
	                var is = option.is;

	                var globalOption = avalon.effects[is];
	                if (!globalOption) {
	                    //如果没有定义特效
	                    avalon.warn(is + ' effect is undefined');
	                    return;
	                }
	                var finalOption = {};
	                var action = actionMaps[option.action];
	                if (typeof Effect.prototype[action] !== 'function') {
	                    avalon.warn('action is undefined');
	                    return;
	                }
	                //必须预定义特效

	                var effect = new avalon.Effect(dom);
	                avalon.mix(finalOption, globalOption, option, { action: action });

	                if (finalOption.queue) {
	                    animationQueue.push(function () {
	                        effect[action](finalOption);
	                    });
	                    callNextAnimation();
	                } else {

	                    effect[action](finalOption);
	                }
	                return true;
	            }
	        }
	    });

	    var move = 'move';
	    var leave = 'leave';
	    var enter = 'enter';
	    var actionMaps = {
	        'true': enter,
	        'false': leave,
	        enter: enter,
	        leave: leave,
	        move: move,
	        'undefined': enter
	    };

	    var animationQueue = [];
	    function callNextAnimation() {
	        var fn = animationQueue[0];
	        if (fn) {
	            fn();
	        }
	    }

	    avalon.effects = {};
	    avalon.effect = function (name, opts) {
	        var definition = avalon.effects[name] = opts || {};
	        if (css3 && definition.css !== false) {
	            patchObject(definition, 'enterClass', name + '-enter');
	            patchObject(definition, 'enterActiveClass', definition.enterClass + '-active');
	            patchObject(definition, 'leaveClass', name + '-leave');
	            patchObject(definition, 'leaveActiveClass', definition.leaveClass + '-active');
	        }
	        return definition;
	    };

	    function patchObject(obj, name, value) {
	        if (!obj[name]) {
	            obj[name] = value;
	        }
	    }

	    var Effect = function Effect(dom) {
	        this.dom = dom;
	    };

	    avalon.Effect = Effect;

	    Effect.prototype = {
	        enter: createAction('Enter'),
	        leave: createAction('Leave'),
	        move: createAction('Move')
	    };

	    function execHooks(options, name, el) {
	        var fns = [].concat(options[name]);
	        for (var i = 0, fn; fn = fns[i++];) {
	            if (typeof fn === 'function') {
	                fn(el);
	            }
	        }
	    }
	    var staggerCache = new Cache(128);

	    function createAction(action) {
	        var lower = action.toLowerCase();
	        return function (option) {
	            var dom = this.dom;
	            var elem = avalon(dom);
	            //处理与ms-for指令相关的stagger
	            //========BEGIN=====
	            var staggerTime = isFinite(option.stagger) ? option.stagger * 1000 : 0;
	            if (staggerTime) {
	                if (option.staggerKey) {
	                    var stagger = staggerCache.get(option.staggerKey) || staggerCache.put(option.staggerKey, {
	                        count: 0,
	                        items: 0
	                    });
	                    stagger.count++;
	                    stagger.items++;
	                }
	            }
	            var staggerIndex = stagger && stagger.count || 0;
	            //=======END==========
	            var stopAnimationID;
	            var animationDone = function animationDone(e) {
	                var isOk = e !== false;
	                if (--dom.__ms_effect_ === 0) {
	                    avalon.unbind(dom, transitionEndEvent);
	                    avalon.unbind(dom, animationEndEvent);
	                }
	                clearTimeout(stopAnimationID);
	                var dirWord = isOk ? 'Done' : 'Abort';
	                execHooks(option, 'on' + action + dirWord, dom);
	                if (stagger) {
	                    if (--stagger.items === 0) {
	                        stagger.count = 0;
	                    }
	                }
	                if (option.queue) {
	                    animationQueue.shift();
	                    callNextAnimation();
	                }
	            };
	            //执行开始前的钩子
	            execHooks(option, 'onBefore' + action, dom);

	            if (option[lower]) {
	                //使用JS方式执行动画
	                option[lower](dom, function (ok) {
	                    animationDone(ok !== false);
	                });
	            } else if (css3) {
	                //使用CSS3方式执行动画
	                elem.addClass(option[lower + 'Class']);
	                elem.removeClass(getNeedRemoved(option, lower));

	                if (!dom.__ms_effect_) {
	                    //绑定动画结束事件
	                    elem.bind(transitionEndEvent, animationDone);
	                    elem.bind(animationEndEvent, animationDone);
	                    dom.__ms_effect_ = 1;
	                } else {
	                    dom.__ms_effect_++;
	                }
	                setTimeout(function () {
	                    //用xxx-active代替xxx类名的方式 触发CSS3动画
	                    var time = avalon.root.offsetWidth === NaN;
	                    elem.addClass(option[lower + 'ActiveClass']);
	                    //计算动画时长
	                    time = getAnimationTime(dom);
	                    if (!time === 0) {
	                        //立即结束动画
	                        animationDone(false);
	                    } else if (!staggerTime) {
	                        //如果动画超出时长还没有调用结束事件,这可能是元素被移除了
	                        //如果强制结束动画
	                        stopAnimationID = setTimeout(function () {
	                            animationDone(false);
	                        }, time + 32);
	                    }
	                }, 17 + staggerTime * staggerIndex); // = 1000/60
	            }
	        };
	    }

	    avalon.applyEffect = function (dom, vdom, opts) {
	        var cb = opts.cb;
	        var curEffect = vdom.effect;
	        if (curEffect && dom && dom.nodeType === 1) {
	            var hook = opts.hook;
	            var old = curEffect[hook];
	            if (cb) {
	                if (Array.isArray(old)) {
	                    old.push(cb);
	                } else if (old) {
	                    curEffect[hook] = [old, cb];
	                } else {
	                    curEffect[hook] = [cb];
	                }
	            }
	            getAction(opts);
	            avalon.directives.effect.update(vdom, curEffect, avalon.shadowCopy({}, opts));
	        } else if (cb) {
	            cb(dom);
	        }
	    };
	    /**
	     * 获取方向
	     */
	    function getAction(opts) {
	        if (!opts.action) {
	            return opts.action = opts.hook.replace(/^on/, '').replace(/Done$/, '').toLowerCase();
	        }
	    }
	    /**
	     * 需要移除的类名
	     */
	    function getNeedRemoved(options, name) {
	        var name = name === 'leave' ? 'enter' : 'leave';
	        return Array(name + 'Class', name + 'ActiveClass').map(function (cls) {
	            return options[cls];
	        }).join(' ');
	    }
	    /**
	     * 计算动画长度
	     */
	    var transitionDuration = avalon.cssName('transition-duration');
	    var animationDuration = avalon.cssName('animation-duration');
	    var rsecond = /\d+s$/;
	    function toMillisecond(str) {
	        var ratio = rsecond.test(str) ? 1000 : 1;
	        return parseFloat(str) * ratio;
	    }

	    function getAnimationTime(dom) {
	        var computedStyles = window$1.getComputedStyle(dom, null);
	        var tranDuration = computedStyles[transitionDuration];
	        var animDuration = computedStyles[animationDuration];
	        return toMillisecond(tranDuration) || toMillisecond(animDuration);
	    }
	    /**
	     * 
	    <!DOCTYPE html>
	    <html>
	        <head>
	            <meta charset="UTF-8">
	            <meta name="viewport" content="width=device-width, initial-scale=1.0">
	            <script src="dist/avalon.js"></script>
	            <script>
	                avalon.effect('animate')
	                var vm = avalon.define({
	                    $id: 'ani',
	                    a: true
	                })
	            </script>
	            <style>
	                .animate-enter, .animate-leave{
	                    width:100px;
	                    height:100px;
	                    background: #29b6f6;
	                    transition:all 2s;
	                    -moz-transition: all 2s; 
	                    -webkit-transition: all 2s;
	                    -o-transition:all 2s;
	                }  
	                .animate-enter-active, .animate-leave{
	                    width:300px;
	                    height:300px;
	                }
	                .animate-leave-active{
	                    width:100px;
	                    height:100px;
	                }
	            </style>
	        </head>
	        <body>
	            <div :controller='ani' >
	                <p><input type='button' value='click' :click='@a =!@a'></p>
	                <div :effect="{is:'animate',action:@a}"></div>
	            </div>
	    </body>
	    </html>
	     * 
	     */

	    var none = 'none';
	    function parseDisplay(elem, val) {
	        //用于取得此类标签的默认display值
	        var doc = elem.ownerDocument;
	        var nodeName = elem.nodeName;
	        var key = '_' + nodeName;
	        if (!parseDisplay[key]) {
	            var temp = doc.body.appendChild(doc.createElement(nodeName));
	            val = avalon.css(temp, 'display');
	            doc.body.removeChild(temp);
	            if (val === none) {
	                val = 'block';
	            }
	            parseDisplay[key] = val;
	        }
	        return parseDisplay[key];
	    }

	    avalon.parseDisplay = parseDisplay;
	    avalon.directive('visible', {
	        diff: function diff(newVal, oldVal) {
	            var n = !!newVal;
	            if (oldVal === void 0 || n !== oldVal) {
	                this.value = n;
	                return true;
	            }
	        },
	        ready: true,
	        update: function update(vdom, show) {
	            var dom = vdom.dom;
	            if (dom && dom.nodeType === 1) {
	                var display = dom.style.display;
	                var value;
	                if (show) {
	                    if (display === none) {
	                        value = vdom.displayValue;
	                        if (!value) {
	                            dom.style.display = '';
	                            if (dom.style.cssText === '') {
	                                dom.removeAttribute('style');
	                            }
	                        }
	                    }
	                    if (dom.style.display === '' && avalon(dom).css('display') === none &&
	                    // fix firefox BUG,必须挂到页面上
	                    avalon.contains(dom.ownerDocument, dom)) {
	                        value = parseDisplay(dom);
	                    }
	                } else {

	                    if (display !== none) {
	                        value = none;
	                        vdom.displayValue = display;
	                    }
	                }
	                var cb = function cb() {
	                    if (value !== void 0) {
	                        dom.style.display = value;
	                    }
	                };

	                avalon.applyEffect(dom, vdom, {
	                    hook: show ? 'onEnterDone' : 'onLeaveDone',
	                    cb: cb
	                });
	            }
	        }
	    });

	    avalon.directive('text', {
	        delay: true,
	        init: function init() {

	            var node = this.node;
	            if (node.isVoidTag) {
	                avalon.error('自闭合元素不能使用ms-text');
	            }
	            var child = { nodeName: '#text', nodeValue: this.getValue() };
	            node.children.splice(0, node.children.length, child);
	            if (inBrowser) {
	                avalon.clearHTML(node.dom);
	                node.dom.appendChild(avalon.vdom(child, 'toDOM'));
	            }
	            this.node = child;
	            var type = 'expr';
	            this.type = this.name = type;
	            var directive$$1 = avalon.directives[type];
	            var me = this;
	            this.callback = function (value) {
	                directive$$1.update.call(me, me.node, value);
	            };
	        }
	    });

	    avalon.directive('expr', {
	        update: function update(vdom, value) {
	            value = value == null || value === '' ? '\u200B' : value;
	            vdom.nodeValue = value;
	            //https://github.com/RubyLouvre/avalon/issues/1834
	            if (vdom.dom) vdom.dom.data = value;
	        }
	    });

	    avalon.directive('attr', {
	        diff: cssDiff,
	        update: function update(vdom, value) {
	            var props = vdom.props;
	            for (var i in value) {
	                if (!!value[i] === false) {
	                    delete props[i];
	                } else {
	                    props[i] = value[i];
	                }
	            }
	            var dom = vdom.dom;
	            if (dom && dom.nodeType === 1) {
	                updateAttrs(dom, value);
	            }
	        }
	    });

	    avalon.directive('html', {

	        update: function update(vdom, value) {
	            this.beforeDispose();

	            this.innerRender = avalon.scan('<div class="ms-html-container">' + value + '</div>', this.vm, function () {
	                var oldRoot = this.root;
	                if (vdom.children) vdom.children.length = 0;
	                vdom.children = oldRoot.children;
	                this.root = vdom;
	                if (vdom.dom) avalon.clearHTML(vdom.dom);
	            });
	        },
	        beforeDispose: function beforeDispose() {
	            if (this.innerRender) {
	                this.innerRender.dispose();
	            }
	        },
	        delay: true
	    });

	    avalon.directive('if', {
	        delay: true,
	        priority: 5,
	        init: function init() {
	            this.placeholder = createAnchor('if');
	            var props = this.node.props;
	            delete props['ms-if'];
	            delete props[':if'];
	            this.fragment = avalon.vdom(this.node, 'toHTML');
	        },
	        diff: function diff(newVal, oldVal) {
	            var n = !!newVal;
	            if (oldVal === void 0 || n !== oldVal) {
	                this.value = n;
	                return true;
	            }
	        },
	        update: function update(vdom, value) {
	            if (this.isShow === void 0 && value) {
	                continueScan(this, vdom);
	                return;
	            }
	            this.isShow = value;
	            var placeholder = this.placeholder;

	            if (value) {
	                var p = placeholder.parentNode;
	                continueScan(this, vdom);
	                p && p.replaceChild(vdom.dom, placeholder);
	            } else {
	                //移除DOM
	                this.beforeDispose();
	                vdom.nodeValue = 'if';
	                vdom.nodeName = '#comment';
	                delete vdom.children;
	                var dom = vdom.dom;
	                var p = dom && dom.parentNode;
	                vdom.dom = placeholder;
	                if (p) {
	                    p.replaceChild(placeholder, dom);
	                }
	            }
	        },
	        beforeDispose: function beforeDispose() {
	            if (this.innerRender) {
	                this.innerRender.dispose();
	            }
	        }
	    });

	    function continueScan(instance, vdom) {
	        var innerRender = instance.innerRender = avalon.scan(instance.fragment, instance.vm);
	        avalon.shadowCopy(vdom, innerRender.root);
	        delete vdom.nodeValue;
	    }

	    avalon.directive('on', {
	        beforeInit: function beforeInit() {
	            this.getter = avalon.noop;
	        },
	        init: function init() {
	            var vdom = this.node;
	            var underline = this.name.replace('ms-on-', 'e').replace('-', '_');
	            var uuid = underline + '_' + this.expr.replace(/\s/g, '').replace(/[^$a-z]/ig, function (e) {
	                return e.charCodeAt(0);
	            });
	            var fn = avalon.eventListeners[uuid];
	            if (!fn) {
	                var arr = addScope(this.expr);
	                var body = arr[0],
	                    filters = arr[1];
	                body = makeHandle(body);

	                if (filters) {
	                    filters = filters.replace(/__value__/g, '$event');
	                    filters += '\nif($event.$return){\n\treturn;\n}';
	                }
	                var ret = ['try{', '\tvar __vmodel__ = this;', '\t' + filters, '\treturn ' + body, '}catch(e){avalon.log(e, "in on dir")}'].filter(function (el) {
	                    return (/\S/.test(el)
	                    );
	                });
	                fn = new Function('$event', ret.join('\n'));
	                fn.uuid = uuid;
	                avalon.eventListeners[uuid] = fn;
	            }

	            var dom = avalon.vdom(vdom, 'toDOM');
	            dom._ms_context_ = this.vm;

	            this.eventType = this.param.replace(/\-(\d)$/, '');
	            delete this.param;
	            avalon(dom).bind(this.eventType, fn);
	        },

	        beforeDispose: function beforeDispose() {
	            avalon(this.node.dom).unbind(this.eventType);
	        }
	    });

	    var rforAs = /\s+as\s+([$\w]+)/;
	    var rident = /^[$a-zA-Z_][$a-zA-Z0-9_]*$/;
	    var rinvalid = /^(null|undefined|NaN|window|this|\$index|\$id)$/;
	    var rargs = /[$\w_]+/g;
	    avalon.directive('for', {
	        delay: true,
	        priority: 3,
	        beforeInit: function beforeInit() {
	            var str = this.expr,
	                asName;
	            str = str.replace(rforAs, function (a, b) {
	                /* istanbul ignore if */
	                if (!rident.test(b) || rinvalid.test(b)) {
	                    avalon.error('alias ' + b + ' is invalid --- must be a valid JS identifier which is not a reserved name.');
	                } else {
	                    asName = b;
	                }
	                return '';
	            });

	            var arr = str.split(' in ');
	            var kv = arr[0].match(rargs);
	            if (kv.length === 1) {
	                //确保avalon._each的回调有三个参数
	                kv.unshift('$key');
	            }
	            this.expr = arr[1];
	            this.keyName = kv[0];
	            this.valName = kv[1];
	            this.signature = avalon.makeHashCode('for');
	            if (asName) {
	                this.asName = asName;
	            }

	            delete this.param;
	        },
	        init: function init() {
	            var cb = this.userCb;
	            if (typeof cb === 'string' && cb) {
	                var arr = addScope(cb, 'for');
	                var body = makeHandle(arr[0]);
	                this.userCb = new Function('$event', 'var __vmodel__ = this\nreturn ' + body);
	            }
	            this.node.forDir = this; //暴露给component/index.js中的resetParentChildren方法使用
	            this.fragment = ['<div>', this.fragment, '<!--', this.signature, '--></div>'].join('');
	            this.cache = {};
	        },
	        diff: function diff(newVal, oldVal) {
	            /* istanbul ignore if */
	            if (this.updating) {
	                return;
	            }
	            this.updating = true;
	            var traceIds = createFragments(this, newVal);

	            if (this.oldTrackIds === void 0) return true;

	            if (this.oldTrackIds !== traceIds) {
	                this.oldTrackIds = traceIds;
	                return true;
	            }
	        },
	        update: function update() {

	            if (!this.preFragments) {
	                this.fragments = this.fragments || [];
	                mountList(this);
	            } else {
	                diffList(this);
	                updateList(this);
	            }

	            if (this.userCb) {
	                var me = this;
	                setTimeout(function () {
	                    me.userCb.call(me.vm, {
	                        type: 'rendered',
	                        target: me.begin.dom,
	                        signature: me.signature
	                    });
	                }, 0);
	            }
	            delete this.updating;
	        },
	        beforeDispose: function beforeDispose() {
	            this.fragments.forEach(function (el) {
	                el.dispose();
	            });
	        }
	    });

	    function getTraceKey(item) {
	        var type = typeof item;
	        return item && type === 'object' ? item.$hashcode : type + ':' + item;
	    }

	    //创建一组fragment的虚拟DOM
	    function createFragments(instance, obj) {
	        if (isObject(obj)) {
	            var array = Array.isArray(obj);
	            var ids = [];
	            var fragments = [],
	                i = 0;

	            instance.isArray = array;
	            if (instance.fragments) {
	                instance.preFragments = instance.fragments;
	                avalon.each(obj, function (key, value) {
	                    var k = array ? getTraceKey(value) : key;

	                    fragments.push({
	                        key: k,
	                        val: value,
	                        index: i++
	                    });
	                    ids.push(k);
	                });
	                instance.fragments = fragments;
	            } else {
	                avalon.each(obj, function (key, value) {
	                    if (!(key in $$skipArray)) {
	                        var k = array ? getTraceKey(value) : key;
	                        fragments.push(new VFragment([], k, value, i++));
	                        ids.push(k);
	                    }
	                });
	                instance.fragments = fragments;
	            }
	            return ids.join(';;');
	        } else {
	            return NaN;
	        }
	    }

	    function mountList(instance) {
	        var args = instance.fragments.map(function (fragment, index) {
	            FragmentDecorator(fragment, instance, index);
	            saveInCache(instance.cache, fragment);
	            return fragment;
	        });
	        var list = instance.parentChildren;
	        var i = list.indexOf(instance.begin);
	        list.splice.apply(list, [i + 1, 0].concat(args));
	    }

	    function diffList(instance) {
	        var cache = instance.cache;
	        var newCache = {};
	        var fuzzy = [];
	        var list = instance.preFragments;

	        list.forEach(function (el) {
	            el._dispose = true;
	        });

	        instance.fragments.forEach(function (c, index) {
	            var fragment = isInCache(cache, c.key);
	            //取出之前的文档碎片
	            if (fragment) {
	                delete fragment._dispose;
	                fragment.oldIndex = fragment.index;
	                fragment.index = index; // 相当于 c.index

	                resetVM(fragment.vm, instance.keyName);
	                fragment.vm[instance.valName] = c.val;
	                fragment.vm[instance.keyName] = instance.isArray ? index : fragment.key;
	                saveInCache(newCache, fragment);
	            } else {
	                //如果找不到就进行模糊搜索
	                fuzzy.push(c);
	            }
	        });
	        fuzzy.forEach(function (c) {
	            var fragment = fuzzyMatchCache(cache, c.key);
	            if (fragment) {
	                //重复利用
	                fragment.oldIndex = fragment.index;
	                fragment.key = c.key;
	                var val = fragment.val = c.val;
	                var index = fragment.index = c.index;

	                fragment.vm[instance.valName] = val;
	                fragment.vm[instance.keyName] = instance.isArray ? index : fragment.key;
	                delete fragment._dispose;
	            } else {

	                c = new VFragment([], c.key, c.val, c.index);
	                fragment = FragmentDecorator(c, instance, c.index);
	                list.push(fragment);
	            }
	            saveInCache(newCache, fragment);
	        });

	        instance.fragments = list;
	        list.sort(function (a, b) {
	            return a.index - b.index;
	        });
	        instance.cache = newCache;
	    }

	    function resetVM(vm, a, b) {
	        if (avalon.config.inProxyMode) {
	            vm.$accessors[a].value = NaN;
	        } else {
	            vm.$accessors[a].set(NaN);
	        }
	    }

	    function updateList(instance) {
	        var before = instance.begin.dom;
	        var parent = before.parentNode;
	        var list = instance.fragments;
	        var end = instance.end.dom;
	        for (var i = 0, item; item = list[i]; i++) {
	            if (item._dispose) {
	                list.splice(i, 1);
	                i--;
	                item.dispose();
	                continue;
	            }
	            if (item.oldIndex !== item.index) {
	                var f = item.toFragment();
	                var isEnd = before.nextSibling === null;
	                parent.insertBefore(f, before.nextSibling);
	                if (isEnd && !parent.contains(end)) {
	                    parent.insertBefore(end, before.nextSibling);
	                }
	            }
	            before = item.split;
	        }
	        var ch = instance.parentChildren;
	        var startIndex = ch.indexOf(instance.begin);
	        var endIndex = ch.indexOf(instance.end);

	        list.splice.apply(ch, [startIndex + 1, endIndex - startIndex].concat(list));
	    }

	    /**
	     * 
	     * @param {type} fragment
	     * @param {type} this
	     * @param {type} index
	     * @returns { key, val, index, oldIndex, this, dom, split, vm}
	     */
	    function FragmentDecorator(fragment, instance, index) {
	        var data = {};
	        data[instance.keyName] = instance.isArray ? index : fragment.key;
	        data[instance.valName] = fragment.val;
	        if (instance.asName) {
	            data[instance.asName] = instance.value;
	        }
	        var vm = fragment.vm = platform.itemFactory(instance.vm, {
	            data: data
	        });
	        if (instance.isArray) {
	            vm.$watch(instance.valName, function (a) {
	                if (instance.value && instance.value.set) {
	                    instance.value.set(vm[instance.keyName], a);
	                }
	            });
	        } else {
	            vm.$watch(instance.valName, function (a) {
	                instance.value[fragment.key] = a;
	            });
	        }

	        fragment.index = index;
	        fragment.innerRender = avalon.scan(instance.fragment, vm, function () {
	            var oldRoot = this.root;
	            ap.push.apply(fragment.children, oldRoot.children);
	            this.root = fragment;
	        });
	        return fragment;
	    }
	    // 新位置: 旧位置
	    function isInCache(cache, id) {
	        var c = cache[id];
	        if (c) {
	            var arr = c.arr;
	            /* istanbul ignore if*/
	            if (arr) {
	                var r = arr.pop();
	                if (!arr.length) {
	                    c.arr = 0;
	                }
	                return r;
	            }
	            delete cache[id];
	            return c;
	        }
	    }
	    //[1,1,1] number1 number1_ number1__
	    function saveInCache(cache, component) {
	        var trackId = component.key;
	        if (!cache[trackId]) {
	            cache[trackId] = component;
	        } else {
	            var c = cache[trackId];
	            var arr = c.arr || (c.arr = []);
	            arr.push(component);
	        }
	    }

	    function fuzzyMatchCache(cache) {
	        var key;
	        for (var id in cache) {
	            var key = id;
	            break;
	        }
	        if (key) {
	            return isInCache(cache, key);
	        }
	    }

	    //根据VM的属性值或表达式的值切换类名，ms-class='xxx yyy zzz:flag'
	    //http://www.cnblogs.com/rubylouvre/archive/2012/12/17/2818540.html
	    function classNames() {
	        var classes = [];
	        for (var i = 0; i < arguments.length; i++) {
	            var arg = arguments[i];
	            var argType = typeof arg;
	            if (argType === 'string' || argType === 'number' || arg === true) {
	                classes.push(arg);
	            } else if (Array.isArray(arg)) {
	                classes.push(classNames.apply(null, arg));
	            } else if (argType === 'object') {
	                for (var key in arg) {
	                    if (arg.hasOwnProperty(key) && arg[key]) {
	                        classes.push(key);
	                    }
	                }
	            }
	        }

	        return classes.join(' ');
	    }

	    avalon.directive('class', {
	        diff: function diff(newVal, oldVal) {
	            var type = this.type;
	            var vdom = this.node;
	            var classEvent = vdom.classEvent || {};
	            if (type === 'hover') {
	                //在移出移入时切换类名
	                classEvent.mouseenter = activateClass;
	                classEvent.mouseleave = abandonClass;
	            } else if (type === 'active') {
	                //在获得焦点时切换类名
	                classEvent.tabIndex = vdom.props.tabindex || -1;
	                classEvent.mousedown = activateClass;
	                classEvent.mouseup = abandonClass;
	                classEvent.mouseleave = abandonClass;
	            }
	            vdom.classEvent = classEvent;

	            var className = classNames(newVal);

	            if (typeof oldVal === void 0 || oldVal !== className) {
	                this.value = className;

	                vdom['change-' + type] = className;
	                return true;
	            }
	        },
	        update: function update(vdom, value) {
	            var dom = vdom.dom;
	            if (dom && dom.nodeType == 1) {

	                var dirType = this.type;
	                var change = 'change-' + dirType;
	                var classEvent = vdom.classEvent;
	                if (classEvent) {
	                    for (var i in classEvent) {
	                        if (i === 'tabIndex') {
	                            dom[i] = classEvent[i];
	                        } else {
	                            avalon.bind(dom, i, classEvent[i]);
	                        }
	                    }
	                    vdom.classEvent = {};
	                }
	                var names = ['class', 'hover', 'active'];
	                names.forEach(function (type) {
	                    if (dirType !== type) return;
	                    if (type === 'class') {
	                        dom && setClass(dom, value);
	                    } else {
	                        var oldClass = dom.getAttribute(change);
	                        if (oldClass) {
	                            avalon(dom).removeClass(oldClass);
	                        }
	                        var name = 'change-' + type;
	                        dom.setAttribute(name, value);
	                    }
	                });
	            }
	        }
	    });

	    directives.active = directives.hover = directives['class'];

	    var classMap = {
	        mouseenter: 'change-hover',
	        mouseleave: 'change-hover',
	        mousedown: 'change-active',
	        mouseup: 'change-active'
	    };

	    function activateClass(e) {
	        var elem = e.target;
	        avalon(elem).addClass(elem.getAttribute(classMap[e.type]) || '');
	    }

	    function abandonClass(e) {
	        var elem = e.target;
	        var name = classMap[e.type];
	        avalon(elem).removeClass(elem.getAttribute(name) || '');
	        if (name !== 'change-active') {
	            avalon(elem).removeClass(elem.getAttribute('change-active') || '');
	        }
	    }

	    function setClass(dom, neo) {
	        var old = dom.getAttribute('change-class');
	        if (old !== neo) {
	            avalon(dom).removeClass(old).addClass(neo);
	            dom.setAttribute('change-class', neo);
	        }
	    }

	    getLongID(activateClass);
	    getLongID(abandonClass);

	    function lookupOption(vdom, values) {
	        vdom.children && vdom.children.forEach(function (el) {
	            if (el.nodeName === 'option') {
	                setOption(el, values);
	            } else {
	                lookupOption(el, values);
	            }
	        });
	    }

	    function setOption(vdom, values) {
	        var props = vdom.props;
	        if (!('disabled' in props)) {
	            var value = getOptionValue(vdom, props);
	            value = String(value || '').trim();
	            props.selected = values.indexOf(value) !== -1;

	            if (vdom.dom) {
	                vdom.dom.selected = props.selected;
	                var v = vdom.dom.selected; //必须加上这个,防止移出节点selected失效
	            }
	        }
	    }

	    function getOptionValue(vdom, props) {
	        if (props && 'value' in props) {
	            return props.value + '';
	        }
	        var arr = [];
	        vdom.children.forEach(function (el) {
	            if (el.nodeName === '#text') {
	                arr.push(el.nodeValue);
	            } else if (el.nodeName === '#document-fragment') {
	                arr.push(getOptionValue(el));
	            }
	        });
	        return arr.join('');
	    }

	    function getSelectedValue(vdom, arr) {
	        vdom.children.forEach(function (el) {
	            if (el.nodeName === 'option') {
	                if (el.props.selected === true) arr.push(getOptionValue(el, el.props));
	            } else if (el.children) {
	                getSelectedValue(el, arr);
	            }
	        });
	        return arr;
	    }

	    var updateDataActions = {
	        input: function input(prop) {
	            //处理单个value值处理
	            var field = this;
	            prop = prop || 'value';
	            var dom = field.dom;
	            var rawValue = dom[prop];
	            var parsedValue = field.parseValue(rawValue);

	            //有时候parse后一致,vm不会改变,但input里面的值
	            field.value = rawValue;
	            field.setValue(parsedValue);
	            duplexCb(field);
	            var pos = field.pos;
	            /* istanbul ignore if */
	            if (dom.caret) {
	                field.setCaret(dom, pos);
	            }
	            //vm.aaa = '1234567890'
	            //处理 <input ms-duplex='@aaa|limitBy(8)'/>{{@aaa}} 这种格式化同步不一致的情况 
	        },
	        radio: function radio() {
	            var field = this;
	            if (field.isChecked) {
	                var val = !field.value;
	                field.setValue(val);
	                duplexCb(field);
	            } else {
	                updateDataActions.input.call(field);
	                field.value = NaN;
	            }
	        },
	        checkbox: function checkbox() {
	            var field = this;
	            var array = field.value;
	            if (!Array.isArray(array)) {
	                avalon.warn('ms-duplex应用于checkbox上要对应一个数组');
	                array = [array];
	            }
	            var method = field.dom.checked ? 'ensure' : 'remove';
	            if (array[method]) {
	                var val = field.parseValue(field.dom.value);
	                array[method](val);
	                duplexCb(field);
	            }
	            this.__test__ = array;
	        },
	        select: function select() {
	            var field = this;
	            var val = avalon(field.dom).val(); //字符串或字符串数组
	            if (val + '' !== this.value + '') {
	                if (Array.isArray(val)) {
	                    //转换布尔数组或其他
	                    val = val.map(function (v) {
	                        return field.parseValue(v);
	                    });
	                } else {
	                    val = field.parseValue(val);
	                }
	                field.setValue(val);
	                duplexCb(field);
	            }
	        },
	        contenteditable: function contenteditable() {
	            updateDataActions.input.call(this, 'innerHTML');
	        }
	    };

	    function duplexCb(field) {
	        if (field.userCb) {
	            field.userCb.call(field.vm, {
	                type: 'changed',
	                target: field.dom
	            });
	        }
	    }

	    function updateDataHandle(event) {
	        var elem = this;
	        var field = elem._ms_duplex_;
	        if (elem.composing) {
	            //防止onpropertychange引发爆栈
	            return;
	        }
	        if (elem.value === field.value) {
	            return;
	        }
	        /* istanbul ignore if*/
	        if (elem.caret) {
	            try {
	                var pos = field.getCaret(elem);
	                field.pos = pos;
	            } catch (e) {}
	        }
	        /* istanbul ignore if*/
	        if (field.debounceTime > 4) {
	            var timestamp = new Date();
	            var left = timestamp - field.time || 0;
	            field.time = timestamp;
	            /* istanbul ignore if*/
	            if (left >= field.debounceTime) {
	                updateDataActions[field.dtype].call(field);
	                /* istanbul ignore else*/
	            } else {
	                clearTimeout(field.debounceID);
	                field.debounceID = setTimeout(function () {
	                    updateDataActions[field.dtype].call(field);
	                }, left);
	            }
	        } else {
	            updateDataActions[field.dtype].call(field);
	        }
	    }

	    var rchangeFilter = /\|\s*change\b/;
	    var rdebounceFilter = /\|\s*debounce(?:\(([^)]+)\))?/;
	    function duplexBeforeInit() {
	        var expr = this.expr;
	        if (rchangeFilter.test(expr)) {
	            this.isChanged = true;
	            expr = expr.replace(rchangeFilter, '');
	        }
	        var match = expr.match(rdebounceFilter);
	        if (match) {
	            expr = expr.replace(rdebounceFilter, '');
	            if (!this.isChanged) {
	                this.debounceTime = parseInt(match[1], 10) || 300;
	            }
	        }
	        this.expr = expr;
	    }
	    function duplexInit() {
	        var expr = this.expr;
	        var node = this.node;
	        var etype = node.props.type;
	        this.parseValue = parseValue;
	        //处理数据转换器
	        var parsers = this.param,
	            dtype;
	        var isChecked = false;
	        parsers = parsers ? parsers.split('-').map(function (a) {
	            if (a === 'checked') {
	                isChecked = true;
	            }
	            return a;
	        }) : [];
	        node.duplex = this;
	        if (rcheckedType.test(etype) && isChecked) {
	            //如果是radio, checkbox,判定用户使用了checked格式函数没有
	            parsers = [];
	            dtype = 'radio';
	            this.isChecked = isChecked;
	        }
	        this.parsers = parsers;
	        if (!/input|textarea|select/.test(node.nodeName)) {
	            if ('contenteditable' in node.props) {
	                dtype = 'contenteditable';
	            }
	        } else if (!dtype) {
	            dtype = node.nodeName === 'select' ? 'select' : etype === 'checkbox' ? 'checkbox' : etype === 'radio' ? 'radio' : 'input';
	        }
	        this.dtype = dtype;

	        //判定是否使用了 change debounce 过滤器
	        // this.isChecked = /boolean/.test(parsers)
	        if (dtype !== 'input' && dtype !== 'contenteditable') {
	            delete this.isChange;
	            delete this.debounceTime;
	        } else if (!this.isChecked) {
	            this.isString = true;
	        }

	        var cb = node.props['data-duplex-changed'];
	        if (cb) {
	            var arr = addScope(cb, 'xx');
	            var body = makeHandle(arr[0]);
	            this.userCb = new Function('$event', 'var __vmodel__ = this\nreturn ' + body);
	        }
	    }
	    function duplexDiff(newVal, oldVal) {
	        if (Array.isArray(newVal)) {
	            if (newVal + '' !== this.compareVal) {
	                this.compareVal = newVal + '';
	                return true;
	            }
	        } else {
	            newVal = this.parseValue(newVal);
	            if (!this.isChecked) {
	                this.value = newVal += '';
	            }
	            if (newVal !== this.compareVal) {
	                this.compareVal = newVal;
	                return true;
	            }
	        }
	    }

	    function duplexBind(vdom, addEvent) {
	        var dom = vdom.dom;
	        this.dom = dom;
	        this.vdom = vdom;
	        this.duplexCb = updateDataHandle;
	        dom._ms_duplex_ = this;
	        //绑定事件
	        addEvent(dom, this);
	    }

	    var valueHijack = true;
	    try {
	        //#272 IE9-IE11, firefox
	        var setters = {};
	        var aproto = HTMLInputElement.prototype;
	        var bproto = HTMLTextAreaElement.prototype;
	        var newSetter = function newSetter(value) {
	            // jshint ignore:line
	            setters[this.tagName].call(this, value);
	            var data = this._ms_duplex_;
	            if (!this.caret && data && data.isString) {
	                data.duplexCb.call(this, { type: 'setter' });
	            }
	        };
	        var inputProto = HTMLInputElement.prototype;
	        Object.getOwnPropertyNames(inputProto); //故意引发IE6-8等浏览器报错
	        setters['INPUT'] = Object.getOwnPropertyDescriptor(aproto, 'value').set;

	        Object.defineProperty(aproto, 'value', {
	            set: newSetter
	        });
	        setters['TEXTAREA'] = Object.getOwnPropertyDescriptor(bproto, 'value').set;
	        Object.defineProperty(bproto, 'value', {
	            set: newSetter
	        });
	        valueHijack = false;
	    } catch (e) {
	        //在chrome 43中 ms-duplex终于不需要使用定时器实现双向绑定了
	        // http://updates.html5rocks.com/2015/04/DOM-attributes-now-on-the-prototype
	        // https://docs.google.com/document/d/1jwA8mtClwxI-QJuHT7872Z0pxpZz8PBkf2bGAbsUtqs/edit?pli=1
	    }

	    function parseValue(val) {
	        for (var i = 0, k; k = this.parsers[i++];) {
	            var fn = avalon.parsers[k];
	            if (fn) {
	                val = fn.call(this, val);
	            }
	        }
	        return val;
	    }

	    var updateView = {
	        input: function input() {
	            //处理单个value值处理
	            var vdom = this.node;
	            var value = this.value + '';
	            vdom.dom.value = vdom.props.value = value;
	        },
	        updateChecked: function updateChecked(vdom, checked) {
	            if (vdom.dom) {
	                vdom.dom.defaultChecked = vdom.dom.checked = checked;
	            }
	        },
	        radio: function radio() {
	            //处理单个checked属性
	            var node = this.node;
	            var nodeValue = node.props.value;
	            var checked;
	            if (this.isChecked) {
	                checked = !!this.value;
	            } else {
	                checked = this.value + '' === nodeValue;
	            }
	            node.props.checked = checked;
	            updateView.updateChecked(node, checked);
	        },
	        checkbox: function checkbox() {
	            //处理多个checked属性
	            var node = this.node;
	            var props = node.props;
	            var value = props.value + '';
	            var values = [].concat(this.value);
	            var checked = values.some(function (el) {
	                return el + '' === value;
	            });

	            props.defaultChecked = props.checked = checked;
	            updateView.updateChecked(node, checked);
	        },
	        select: function select() {
	            //处理子级的selected属性
	            var a = Array.isArray(this.value) ? this.value.map(String) : this.value + '';
	            lookupOption(this.node, a);
	        },
	        contenteditable: function contenteditable() {
	            //处理单个innerHTML 

	            var vnodes = fromString(this.value);
	            var fragment = createFragment();
	            for (var i = 0, el; el = vnodes[i++];) {
	                var child = avalon.vdom(el, 'toDOM');
	                fragment.appendChild(child);
	            }
	            avalon.clearHTML(this.dom).appendChild(fragment);
	            var list = this.node.children;
	            list.length = 0;
	            Array.prototype.push.apply(list, vnodes);

	            this.duplexCb.call(this.dom);
	        }
	    };

	    /* 
	     * 通过绑定事件同步vmodel
	     * 总共有三种方式同步视图
	     * 1. 各种事件 input, change, click, propertychange, keydown...
	     * 2. value属性重写
	     * 3. 定时器轮询
	     */

	    function updateDataEvents(dom, data) {
	        var events = {};
	        //添加需要监听的事件
	        switch (data.dtype) {
	            case 'radio':
	            case 'checkbox':
	                events.click = updateDataHandle;
	                break;
	            case 'select':
	                events.change = updateDataHandle;
	                break;
	            case 'contenteditable':
	                /* istanbul ignore if */
	                if (data.isChanged) {
	                    events.blur = updateDataHandle;
	                    /* istanbul ignore else */
	                } else {
	                    /* istanbul ignore if*/

	                    if (avalon.modern) {
	                        if (window$1.webkitURL) {
	                            // http://code.metager.de/source/xref/WebKit/LayoutTests/fast/events/
	                            // https://bugs.webkit.org/show_bug.cgi?id=110742
	                            events.webkitEditableContentChanged = updateDataHandle;
	                        } else if (window$1.MutationEvent) {
	                            events.DOMCharacterDataModified = updateDataHandle;
	                        }
	                        events.input = updateDataHandle;
	                        /* istanbul ignore else */
	                    } else {
	                        events.keydown = updateModelKeyDown;
	                        events.paste = updateModelDelay;
	                        events.cut = updateModelDelay;
	                        events.focus = closeComposition;
	                        events.blur = openComposition;
	                    }
	                }
	                break;
	            case 'input':
	                /* istanbul ignore if */
	                if (data.isChanged) {
	                    events.change = updateDataHandle;
	                    /* istanbul ignore else */
	                } else {
	                    //http://www.cnblogs.com/rubylouvre/archive/2013/02/17/2914604.html
	                    //http://www.matts411.com/post/internet-explorer-9-oninput/
	                    if (msie < 10) {
	                        //IE6-8的propertychange有问题,第一次用JS修改值时不会触发,而且你是全部清空value也不会触发
	                        //IE9的propertychange不支持自动完成,退格,删除,复制,贴粘,剪切或点击右边的小X的清空操作
	                        events.propertychange = updateModelHack;
	                        events.paste = updateModelDelay;
	                        events.cut = updateModelDelay;
	                        //IE9在第一次删除字符时不会触发oninput
	                        events.keyup = updateModelKeyDown;
	                    } else {
	                        events.input = updateDataHandle;
	                        events.compositionstart = openComposition;
	                        //微软拼音输入法的问题需要在compositionend事件中处理
	                        events.compositionend = closeComposition;
	                        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
	                        //处理低版本的标准浏览器,通过Int8Array进行区分
	                        if (!/\[native code\]/.test(window$1.Int8Array)) {
	                            events.keydown = updateModelKeyDown; //safari < 5 opera < 11
	                            events.paste = updateModelDelay; //safari < 5
	                            events.cut = updateModelDelay; //safari < 5 
	                            if (window$1.netscape) {
	                                // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
	                                events.DOMAutoComplete = updateDataHandle;
	                            }
	                        }
	                    }
	                }
	                break;
	        }

	        if (/password|text/.test(dom.type)) {
	            events.focus = openCaret; //判定是否使用光标修正功能 
	            events.blur = closeCaret;
	            data.getCaret = getCaret;
	            data.setCaret = setCaret;
	        }

	        for (var name in events) {
	            avalon.bind(dom, name, events[name]);
	        }
	    }

	    function updateModelHack(e) {
	        if (e.propertyName === 'value') {
	            updateDataHandle.call(this, e);
	        }
	    }

	    function updateModelDelay(e) {
	        var elem = this;
	        setTimeout(function () {
	            updateDataHandle.call(elem, e);
	        }, 0);
	    }

	    function openCaret() {
	        this.caret = true;
	    }
	    /* istanbul ignore next */
	    function closeCaret() {
	        this.caret = false;
	    }
	    /* istanbul ignore next */
	    function openComposition() {
	        this.composing = true;
	    }
	    /* istanbul ignore next */
	    function closeComposition(e) {
	        this.composing = false;
	        updateModelDelay.call(this, e);
	    }
	    /* istanbul ignore next */
	    function updateModelKeyDown(e) {
	        var key = e.keyCode;
	        // ignore
	        //    command            modifiers                   arrows
	        if (key === 91 || 15 < key && key < 19 || 37 <= key && key <= 40) return;
	        updateDataHandle.call(this, e);
	    }

	    getShortID(openCaret);
	    getShortID(closeCaret);
	    getShortID(openComposition);
	    getShortID(closeComposition);
	    getShortID(updateDataHandle);
	    getShortID(updateModelHack);
	    getShortID(updateModelDelay);
	    getShortID(updateModelKeyDown);

	    //IE6-8要处理光标时需要异步
	    var mayBeAsync = function mayBeAsync(fn) {
	        setTimeout(fn, 0);
	    };
	    /* istanbul ignore next */
	    function setCaret(target, cursorPosition) {
	        var range$$1;
	        if (target.createTextRange) {
	            mayBeAsync(function () {
	                target.focus();
	                range$$1 = target.createTextRange();
	                range$$1.collapse(true);
	                range$$1.moveEnd('character', cursorPosition);
	                range$$1.moveStart('character', cursorPosition);
	                range$$1.select();
	            });
	        } else {
	            target.focus();
	            if (target.selectionStart !== undefined) {
	                target.setSelectionRange(cursorPosition, cursorPosition);
	            }
	        }
	    }
	    /* istanbul ignore next*/
	    function getCaret(target) {
	        var start = 0;
	        var normalizedValue;
	        var range$$1;
	        var textInputRange;
	        var len;
	        var endRange;

	        if (target.selectionStart + target.selectionEnd > -1) {
	            start = target.selectionStart;
	        } else {
	            range$$1 = document$1.selection.createRange();

	            if (range$$1 && range$$1.parentElement() === target) {
	                len = target.value.length;
	                normalizedValue = target.value.replace(/\r\n/g, '\n');

	                textInputRange = target.createTextRange();
	                textInputRange.moveToBookmark(range$$1.getBookmark());

	                endRange = target.createTextRange();
	                endRange.collapse(false);

	                if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
	                    start = len;
	                } else {
	                    start = -textInputRange.moveStart('character', -len);
	                    start += normalizedValue.slice(0, start).split('\n').length - 1;
	                }
	            }
	        }

	        return start;
	    }

	    avalon.directive('duplex', {
	        priority: 9999999,
	        beforeInit: duplexBeforeInit,
	        init: duplexInit,
	        diff: duplexDiff,
	        update: function update(vdom, value) {
	            if (!this.dom) {
	                duplexBind.call(this, vdom, updateDataEvents);
	            }
	            //如果不支持input.value的Object.defineProperty的属性支持,
	            //需要通过轮询同步, chrome 42及以下版本需要这个hack
	            pollValue.call(this, avalon.msie, valueHijack);
	            //更新视图

	            updateView[this.dtype].call(this);
	        }
	    });

	    function pollValue(isIE, valueHijack$$1) {
	        var dom = this.dom;
	        if (this.isString && valueHijack$$1 && !isIE && !dom.valueHijack) {
	            dom.valueHijack = updateDataHandle;
	            var intervalID = setInterval(function () {
	                if (!avalon.contains(avalon.root, dom)) {
	                    clearInterval(intervalID);
	                } else {
	                    dom.valueHijack({ type: 'poll' });
	                }
	            }, 30);
	            return intervalID;
	        }
	    }
	    avalon.__pollValue = pollValue; //export to test
	    /* istanbul ignore if */
	    if (avalon.msie < 8) {
	        var oldUpdate = updateView.updateChecked;
	        updateView.updateChecked = function (vdom, checked) {
	            var dom = vdom.dom;
	            if (dom) {
	                setTimeout(function () {
	                    oldUpdate(vdom, checked);
	                    dom.firstCheckedIt = 1;
	                }, dom.firstCheckedIt ? 31 : 16);
	                //IE6,7 checkbox, radio是使用defaultChecked控制选中状态，
	                //并且要先设置defaultChecked后设置checked
	                //并且必须设置延迟(因为必须插入DOM树才生效)
	            }
	        };
	    }

	    avalon.directive('rules', {
	        diff: function diff(rules) {
	            if (isObject(rules)) {
	                var vdom = this.node;
	                vdom.rules = platform.toJson(rules);
	                return true;
	            }
	        }
	    });
	    function isRegExp(value) {
	        return avalon.type(value) === 'regexp';
	    }
	    var rmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
	    var rurl = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
	    function isCorrectDate(value) {
	        if (typeof value === "string" && value) {
	            //是字符串但不能是空字符
	            var arr = value.split("-"); //可以被-切成3份，并且第1个是4个字符
	            if (arr.length === 3 && arr[0].length === 4) {
	                var year = ~~arr[0]; //全部转换为非负整数
	                var month = ~~arr[1] - 1;
	                var date = ~~arr[2];
	                var d = new Date(year, month, date);
	                return d.getFullYear() === year && d.getMonth() === month && d.getDate() === date;
	            }
	        }
	        return false;
	    }
	    //https://github.com/adform/validator.js/blob/master/validator.js
	    avalon.shadowCopy(avalon.validators, {
	        pattern: {
	            message: '必须匹配{{pattern}}这样的格式',
	            get: function get(value, field, next) {
	                var elem = field.dom;
	                var data = field.data;
	                if (!isRegExp(data.pattern)) {
	                    var h5pattern = elem.getAttribute("pattern");
	                    data.pattern = new RegExp('^(?:' + h5pattern + ')$');
	                }
	                next(data.pattern.test(value));
	                return value;
	            }
	        },
	        digits: {
	            message: '必须整数',
	            get: function get(value, field, next) {
	                //整数
	                next(/^\-?\d+$/.test(value));
	                return value;
	            }
	        },
	        number: {
	            message: '必须数字',
	            get: function get(value, field, next) {
	                //数值
	                next(!!value && isFinite(value)); // isFinite('') --> true
	                return value;
	            }
	        },
	        norequired: {
	            message: '',
	            get: function get(value, field, next) {
	                next(true);
	                return value;
	            }
	        },
	        required: {
	            message: '必须填写',
	            get: function get(value, field, next) {
	                next(value !== '');
	                return value;
	            }
	        },
	        equalto: {
	            message: '密码输入不一致',
	            get: function get(value, field, next) {
	                var id = String(field.data.equalto);
	                var other = avalon(document.getElementById(id)).val() || "";
	                next(value === other);
	                return value;
	            }
	        },
	        date: {
	            message: '日期格式不正确',
	            get: function get(value, field, next) {
	                var data = field.data;
	                if (isRegExp(data.date)) {
	                    next(data.date.test(value));
	                } else {
	                    next(isCorrectDate(value));
	                }
	                return value;
	            }
	        },
	        url: {
	            message: 'URL格式不正确',
	            get: function get(value, field, next) {
	                next(rurl.test(value));
	                return value;
	            }
	        },
	        email: {
	            message: 'email格式不正确',
	            get: function get(value, field, next) {
	                next(rmail.test(value));
	                return value;
	            }
	        },
	        minlength: {
	            message: '最少输入{{minlength}}个字',
	            get: function get(value, field, next) {
	                var num = parseInt(field.data.minlength, 10);
	                next(value.length >= num);
	                return value;
	            }
	        },
	        maxlength: {
	            message: '最多输入{{maxlength}}个字',
	            get: function get(value, field, next) {
	                var num = parseInt(field.data.maxlength, 10);
	                next(value.length <= num);
	                return value;
	            }
	        },
	        min: {
	            message: '输入值不能小于{{min}}',
	            get: function get(value, field, next) {
	                var num = parseInt(field.data.min, 10);
	                next(parseFloat(value) >= num);
	                return value;
	            }
	        },
	        max: {
	            message: '输入值不能大于{{max}}',
	            get: function get(value, field, next) {
	                var num = parseInt(field.data.max, 10);
	                next(parseFloat(value) <= num);
	                return value;
	            }
	        },
	        chs: {
	            message: '必须是中文字符',
	            get: function get(value, field, next) {
	                next(/^[\u4e00-\u9fa5]+$/.test(value));
	                return value;
	            }
	        }
	    });

	    var valiDir = avalon.directive('validate', {
	        diff: function diff(validator) {
	            var vdom = this.node;
	            if (vdom.validator) {
	                return;
	            }
	            if (isObject(validator)) {
	                //注意，这个Form标签的虚拟DOM有两个验证对象
	                //一个是vmValidator，它是用户VM上的那个原始子对象，也是一个VM
	                //一个是validator，它是vmValidator.$model， 这是为了防止IE6－8添加子属性时添加的hack
	                //也可以称之为safeValidate
	                vdom.vmValidator = validator;
	                validator = platform.toJson(validator);
	                validator.vdom = vdom;
	                vdom.validator = validator;
	                for (var name in valiDir.defaults) {
	                    if (!validator.hasOwnProperty(name)) {
	                        validator[name] = valiDir.defaults[name];
	                    }
	                }
	                validator.fields = validator.fields || [];
	                return true;
	            }
	        },
	        update: function update(vdom) {

	            var validator = vdom.validator;
	            var dom = validator.dom = vdom.dom;
	            dom._ms_validate_ = validator;
	            var fields = validator.fields;
	            collectFeild(vdom.children, fields, validator);
	            avalon.bind(document, 'focusin', function (e) {
	                var dom = e.target;
	                var duplex = dom._ms_duplex_;
	                var vdom = (duplex || {}).vdom;
	                if (duplex && vdom.rules && !duplex.validator) {
	                    if (avalon.Array.ensure(fields, duplex)) {
	                        bindValidateEvent(duplex, validator);
	                    }
	                }
	            });

	            //为了方便用户手动执行验证，我们需要为原始vmValidate上添加一个onManual方法
	            var v = vdom.vmValidator;
	            try {
	                v.onManual = onManual;
	            } catch (e) {}
	            delete vdom.vmValidator;

	            dom.setAttribute('novalidate', 'novalidate');

	            function onManual() {
	                valiDir.validateAll.call(validator, validator.onValidateAll);
	            }
	            /* istanbul ignore if */
	            if (validator.validateAllInSubmit) {
	                avalon.bind(dom, 'submit', function (e) {
	                    e.preventDefault();
	                    onManual();
	                });
	            }
	        },
	        validateAll: function validateAll(callback) {
	            var validator = this;
	            var vdom = this.vdom;
	            var fields = validator.fields = [];
	            collectFeild(vdom.children, fields, validator);
	            var fn = typeof callback === 'function' ? callback : validator.onValidateAll;
	            var promises = validator.fields.filter(function (field) {
	                var el = field.dom;
	                return el && !el.disabled && validator.dom.contains(el);
	            }).map(function (field) {
	                return valiDir.validate(field, true);
	            });
	            var uniq = {};
	            return Promise.all(promises).then(function (array) {
	                var reasons = array.concat.apply([], array);
	                if (validator.deduplicateInValidateAll) {

	                    reasons = reasons.filter(function (reason) {
	                        var el = reason.element;
	                        var uuid = el.uniqueID || (el.uniqueID = setTimeout('1'));

	                        if (uniq[uuid]) {
	                            return false;
	                        } else {
	                            return uniq[uuid] = true;
	                        }
	                    });
	                }
	                fn.call(validator.dom, reasons); //这里只放置未通过验证的组件
	            });
	        },

	        validate: function validate(field, isValidateAll, event) {
	            var promises = [];
	            var value = field.value;
	            var elem = field.dom;

	            /* istanbul ignore if */
	            if (typeof Promise !== 'function') {
	                //avalon-promise不支持phantomjs
	                avalon.warn('浏览器不支持原生Promise,请下载并<script src=url>引入\nhttps://github.com/RubyLouvre/avalon/blob/master/test/promise.js');
	            }
	            /* istanbul ignore if */
	            if (elem.disabled) return;
	            var rules = field.vdom.rules;
	            var ngs = [],
	                isOk = true;
	            if (!(rules.norequired && value === '')) {
	                for (var ruleName in rules) {
	                    var ruleValue = rules[ruleName];
	                    if (ruleValue === false) continue;
	                    var hook = avalon.validators[ruleName];
	                    var resolve;
	                    promises.push(new Promise(function (a, b) {
	                        resolve = a;
	                    }));
	                    var next = function next(a) {
	                        var reason = {
	                            element: elem,
	                            data: field.data,
	                            message: elem.getAttribute('data-' + ruleName + '-message') || elem.getAttribute('data-message') || hook.message,
	                            validateRule: ruleName,
	                            getMessage: getMessage
	                        };
	                        if (a) {
	                            resolve(true);
	                        } else {
	                            isOk = false;
	                            ngs.push(reason);
	                            resolve(false);
	                        }
	                    };
	                    field.data = {};
	                    field.data[ruleName] = ruleValue;
	                    hook.get(value, field, next);
	                }
	            }

	            //如果promises不为空，说明经过验证拦截器
	            return Promise.all(promises).then(function (array) {
	                if (!isValidateAll) {
	                    var validator = field.validator;
	                    if (isOk) {
	                        validator.onSuccess.call(elem, [{
	                            data: field.data,
	                            element: elem
	                        }], event);
	                    } else {
	                        validator.onError.call(elem, ngs, event);
	                    }
	                    validator.onComplete.call(elem, ngs, event);
	                }
	                return ngs;
	            });
	        }
	    });

	    function collectFeild(nodes, fields, validator) {
	        for (var i = 0, vdom; vdom = nodes[i++];) {
	            var duplex = vdom.rules && vdom.duplex;
	            if (duplex) {
	                fields.push(duplex);
	                bindValidateEvent(duplex, validator);
	            } else if (vdom.children) {
	                collectFeild(vdom.children, fields, validator);
	            } else if (Array.isArray(vdom)) {
	                collectFeild(vdom, fields, validator);
	            }
	        }
	    }

	    function bindValidateEvent(field, validator) {

	        var node = field.dom;
	        if (field.validator) {
	            return;
	        }
	        field.validator = validator;
	        /* istanbul ignore if */
	        if (validator.validateInKeyup && !field.isChanged && !field.debounceTime) {
	            avalon.bind(node, 'keyup', function (e) {
	                validator.validate(field, 0, e);
	            });
	        }
	        /* istanbul ignore if */
	        if (validator.validateInBlur) {
	            avalon.bind(node, 'blur', function (e) {
	                validator.validate(field, 0, e);
	            });
	        }
	        /* istanbul ignore if */
	        if (validator.resetInFocus) {
	            avalon.bind(node, 'focus', function (e) {
	                validator.onReset.call(node, e, field);
	            });
	        }
	    }
	    var rformat = /\\?{{([^{}]+)\}}/gm;

	    function getMessage() {
	        var data = this.data || {};
	        return this.message.replace(rformat, function (_, name) {
	            return data[name] == null ? '' : data[name];
	        });
	    }
	    valiDir.defaults = {
	        validate: valiDir.validate,
	        onError: avalon.noop,
	        onSuccess: avalon.noop,
	        onComplete: avalon.noop,
	        onManual: avalon.noop,
	        onReset: avalon.noop,
	        onValidateAll: avalon.noop,
	        validateInBlur: true, //@config {Boolean} true，在blur事件中进行验证,触发onSuccess, onError, onComplete回调
	        validateInKeyup: true, //@config {Boolean} true，在keyup事件中进行验证,触发onSuccess, onError, onComplete回调
	        validateAllInSubmit: true, //@config {Boolean} true，在submit事件中执行onValidateAll回调
	        resetInFocus: true, //@config {Boolean} true，在focus事件中执行onReset回调,
	        deduplicateInValidateAll: false //@config {Boolean} false，在validateAll回调中对reason数组根据元素节点进行去重
	    };

	    /**
	     * 一个directive装饰器
	     * @returns {directive}
	     */
	    // DirectiveDecorator(scope, binding, vdom, this)
	    // Decorator(vm, options, callback)
	    function Directive(vm, binding, vdom, render) {
	        var type = binding.type;
	        var decorator = avalon.directives[type];
	        if (inBrowser) {
	            var dom = avalon.vdom(vdom, 'toDOM');
	            if (dom.nodeType === 1) {
	                dom.removeAttribute(binding.attrName);
	            }
	            vdom.dom = dom;
	        }
	        var callback = decorator.update ? function (value) {
	            if (!render.mount && /css|visible|duplex/.test(type)) {
	                render.callbacks.push(function () {
	                    decorator.update.call(directive$$1, directive$$1.node, value);
	                });
	            } else {
	                decorator.update.call(directive$$1, directive$$1.node, value);
	            }
	        } : avalon.noop;
	        for (var key in decorator) {
	            binding[key] = decorator[key];
	        }
	        binding.node = vdom;
	        var directive$$1 = new Action(vm, binding, callback);
	        if (directive$$1.init) {
	            //这里可能会重写node, callback, type, name
	            directive$$1.init();
	        }
	        directive$$1.update();
	        return directive$$1;
	    }

	    var eventMap = avalon.oneObject('animationend,blur,change,input,' + 'click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,' + 'mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit', 'on');
	    function parseAttributes(dirs, tuple) {
	        var node = tuple[0],
	            uniq = {},
	            bindings = [];
	        var hasIf = false;
	        for (var name in dirs) {
	            var value = dirs[name];
	            var arr = name.split('-');
	            // ms-click
	            if (name in node.props) {
	                var attrName = name;
	            } else {
	                attrName = ':' + name.slice(3);
	            }
	            if (eventMap[arr[1]]) {
	                arr.splice(1, 0, 'on');
	            }
	            //ms-on-click
	            if (arr[1] === 'on') {
	                arr[3] = parseFloat(arr[3]) || 0;
	            }

	            var type = arr[1];
	            if (type === 'controller' || type === 'important') continue;
	            if (directives[type]) {

	                var binding = {
	                    type: type,
	                    param: arr[2],
	                    attrName: attrName,
	                    name: arr.join('-'),
	                    expr: value,
	                    priority: directives[type].priority || type.charCodeAt(0) * 100
	                };
	                if (type === 'if') {
	                    hasIf = true;
	                }
	                if (type === 'on') {
	                    binding.priority += arr[3];
	                }
	                if (!uniq[binding.name]) {
	                    uniq[binding.name] = value;
	                    bindings.push(binding);
	                    if (type === 'for') {
	                        return [avalon.mix(binding, tuple[3])];
	                    }
	                }
	            }
	        }
	        bindings.sort(byPriority);

	        if (hasIf) {
	            var ret = [];
	            for (var i = 0, el; el = bindings[i++];) {
	                ret.push(el);
	                if (el.type === 'if') {
	                    return ret;
	                }
	            }
	        }
	        return bindings;
	    }
	    function byPriority(a, b) {
	        return a.priority - b.priority;
	    }

	    var rimprovePriority = /[+-\?]/;
	    var rinnerValue = /__value__\)$/;
	    function parseInterpolate(dir) {
	        var rlineSp = /\n\r?/g;
	        var str = dir.nodeValue.trim().replace(rlineSp, '');
	        var tokens = [];
	        do {
	            //aaa{{@bbb}}ccc
	            var index = str.indexOf(config.openTag);
	            index = index === -1 ? str.length : index;
	            var value = str.slice(0, index);
	            if (/\S/.test(value)) {
	                tokens.push(avalon.quote(avalon._decode(value)));
	            }
	            str = str.slice(index + config.openTag.length);
	            if (str) {
	                index = str.indexOf(config.closeTag);
	                var value = str.slice(0, index);
	                var expr = avalon.unescapeHTML(value);
	                if (/\|\s*\w/.test(expr)) {
	                    //如果存在过滤器，优化干掉
	                    var arr = addScope(expr, 'expr');
	                    if (arr[1]) {
	                        expr = arr[1].replace(rinnerValue, arr[0] + ')');
	                    }
	                }
	                if (rimprovePriority) {
	                    expr = '(' + expr + ')';
	                }
	                tokens.push(expr);

	                str = str.slice(index + config.closeTag.length);
	            }
	        } while (str.length);
	        return [{
	            expr: tokens.join('+'),
	            name: 'expr',
	            type: 'expr'
	        }];
	    }

	    function getChildren(arr) {
	        var count = 0;
	        for (var i = 0, el; el = arr[i++];) {
	            if (el.nodeName === '#document-fragment') {
	                count += getChildren(el.children);
	            } else {
	                count += 1;
	            }
	        }
	        return count;
	    }
	    function groupTree(parent, children) {
	        children && children.forEach(function (vdom) {
	            if (!vdom) return;
	            var vlength = vdom.children && getChildren(vdom.children);
	            if (vdom.nodeName === '#document-fragment') {
	                var dom = createFragment();
	            } else {
	                dom = avalon.vdom(vdom, 'toDOM');
	                var domlength = dom.childNodes && dom.childNodes.length;
	                if (domlength && vlength && domlength > vlength) {
	                    if (!appendChildMayThrowError[dom.nodeName]) {
	                        avalon.clearHTML(dom);
	                    }
	                }
	            }
	            if (vlength) {
	                groupTree(dom, vdom.children);
	                if (vdom.nodeName === 'select') {
	                    var values = [];
	                    getSelectedValue(vdom, values);
	                    lookupOption(vdom, values);
	                }
	            }
	            //高级版本可以尝试 querySelectorAll

	            try {
	                if (!appendChildMayThrowError[parent.nodeName]) {
	                    parent.appendChild(dom);
	                }
	            } catch (e) {}
	        });
	    }

	    function dumpTree(elem) {
	        var firstChild;
	        while (firstChild = elem.firstChild) {
	            if (firstChild.nodeType === 1) {
	                dumpTree(firstChild);
	            }
	            elem.removeChild(firstChild);
	        }
	    }

	    function getRange(childNodes, node) {
	        var i = childNodes.indexOf(node) + 1;
	        var deep = 1,
	            nodes = [],
	            end;
	        nodes.start = i;
	        while (node = childNodes[i++]) {
	            nodes.push(node);
	            if (node.nodeName === '#comment') {
	                if (startWith(node.nodeValue, 'ms-for:')) {
	                    deep++;
	                } else if (node.nodeValue === 'ms-for-end:') {
	                    deep--;
	                    if (deep === 0) {
	                        end = node;
	                        nodes.pop();
	                        break;
	                    }
	                }
	            }
	        }
	        nodes.end = end;
	        return nodes;
	    }

	    function startWith(long, short) {
	        return long.indexOf(short) === 0;
	    }

	    var appendChildMayThrowError = {
	        '#text': 1,
	        '#comment': 1,
	        script: 1,
	        style: 1,
	        noscript: 1
	    };

	    /**
	     * 生成一个渲染器,并作为它第一个遇到的ms-controller对应的VM的$render属性
	     * @param {String|DOM} node
	     * @param {ViewModel|Undefined} vm
	     * @param {Function|Undefined} beforeReady
	     * @returns {Render}
	     */
	    avalon.scan = function (node, vm, beforeReady) {
	        return new Render(node, vm, beforeReady || avalon.noop);
	    };

	    /**
	     * avalon.scan 的内部实现
	     */
	    function Render(node, vm, beforeReady) {
	        this.root = node; //如果传入的字符串,确保只有一个标签作为根节点
	        this.vm = vm;
	        this.beforeReady = beforeReady;
	        this.bindings = []; //收集待加工的绑定属性
	        this.callbacks = [];
	        this.directives = [];
	        this.init();
	    }

	    Render.prototype = {
	        /**
	         * 开始扫描指定区域
	         * 收集绑定属性
	         * 生成指令并建立与VM的关联
	         */
	        init: function init() {
	            var vnodes;
	            if (this.root && this.root.nodeType > 0) {
	                vnodes = fromDOM(this.root); //转换虚拟DOM
	                //将扫描区域的每一个节点与其父节点分离,更少指令对DOM操作时,对首屏输出造成的频繁重绘
	                dumpTree(this.root);
	            } else if (typeof this.root === 'string') {
	                vnodes = fromString(this.root); //转换虚拟DOM
	            } else {
	                return avalon.warn('avalon.scan first argument must element or HTML string');
	            }

	            this.root = vnodes[0];
	            this.vnodes = vnodes;
	            this.scanChildren(vnodes, this.vm, true);
	        },
	        scanChildren: function scanChildren(children, scope, isRoot) {
	            for (var i = 0; i < children.length; i++) {
	                var vdom = children[i];
	                switch (vdom.nodeName) {
	                    case '#text':
	                        scope && this.scanText(vdom, scope);
	                        break;
	                    case '#comment':
	                        scope && this.scanComment(vdom, scope, children);
	                        break;
	                    case '#document-fragment':
	                        this.scanChildren(vdom.children, scope, false);
	                        break;
	                    default:
	                        this.scanTag(vdom, scope, children, false);
	                        break;
	                }
	            }
	            if (isRoot) {
	                this.complete();
	            }
	        },


	        /**
	         * 从文本节点获取指令
	         * @param {type} vdom 
	         * @param {type} scope
	         * @returns {undefined}
	         */
	        scanText: function scanText(vdom, scope) {
	            if (config.rexpr.test(vdom.nodeValue)) {
	                this.bindings.push([vdom, scope, {
	                    nodeValue: vdom.nodeValue
	                }]);
	            }
	        },


	        /**
	         * 从注释节点获取指令
	         * @param {type} vdom 
	         * @param {type} scope
	         * @param {type} parentChildren
	         * @returns {undefined}
	         */
	        scanComment: function scanComment(vdom, scope, parentChildren) {
	            if (startWith(vdom.nodeValue, 'ms-for:')) {
	                this.getForBinding(vdom, scope, parentChildren);
	            }
	        },


	        /**
	         * 从元素节点的nodeName与属性中获取指令
	         * @param {type} vdom 
	         * @param {type} scope
	         * @param {type} parentChildren
	         * @param {type} isRoot 用于执行complete方法
	         * @returns {undefined}
	         */
	        scanTag: function scanTag(vdom, scope, parentChildren, isRoot) {
	            var dirs = {},
	                attrs = vdom.props,
	                hasDir,
	                hasFor;
	            for (var attr in attrs) {
	                var value = attrs[attr];
	                var oldName = attr;
	                if (attr.charAt(0) === ':') {
	                    attr = 'ms-' + attr.slice(1);
	                }
	                if (startWith(attr, 'ms-')) {
	                    dirs[attr] = value;
	                    var type = attr.match(/\w+/g)[1];
	                    type = eventMap[type] || type;
	                    if (!directives[type]) {
	                        avalon.warn(attr + ' has not registered!');
	                    }
	                    hasDir = true;
	                }
	                if (attr === 'ms-for') {
	                    hasFor = value;
	                    delete attrs[oldName];
	                }
	            }
	            var $id = dirs['ms-important'] || dirs['ms-controller'];
	            if ($id) {
	                /**
	                 * 后端渲染
	                 * serverTemplates后端给avalon添加的对象,里面都是模板,
	                 * 将原来后端渲染好的区域再还原成原始样子,再被扫描
	                 */
	                var templateCaches = avalon.serverTemplates;
	                var temp = templateCaches && templateCaches[$id];
	                if (temp) {
	                    avalon.log('前端再次渲染后端传过来的模板');
	                    var node = fromString(tmpl)[0];
	                    for (var i in node) {
	                        vdom[i] = node[i];
	                    }
	                    delete templateCaches[$id];
	                    this.scanTag(vdom, scope, parentChildren, isRoot);
	                    return;
	                }
	                //推算出指令类型
	                var type = dirs['ms-important'] === $id ? 'important' : 'controller';
	                //推算出用户定义时属性名,是使用ms-属性还是:属性
	                var attrName = 'ms-' + type in attrs ? 'ms-' + type : ':' + type;

	                if (inBrowser) {
	                    delete attrs[attrName];
	                }
	                var dir = directives[type];
	                scope = dir.getScope.call(this, $id, scope);
	                if (!scope) {
	                    return;
	                } else {
	                    var clazz = attrs['class'];
	                    if (clazz) {
	                        attrs['class'] = (' ' + clazz + ' ').replace(' ms-controller ', '').trim();
	                    }
	                }
	                var render = this;
	                scope.$render = render;
	                this.callbacks.push(function () {
	                    //用于删除ms-controller
	                    dir.update.call(render, vdom, attrName, $id);
	                });
	            }
	            if (hasFor) {
	                if (vdom.dom) {
	                    vdom.dom.removeAttribute(oldName);
	                }
	                return this.getForBindingByElement(vdom, scope, parentChildren, hasFor);
	            }

	            if (/^ms\-/.test(vdom.nodeName)) {
	                attrs.is = vdom.nodeName;
	            }

	            if (attrs['is']) {
	                if (!dirs['ms-widget']) {
	                    dirs['ms-widget'] = '{}';
	                }
	                hasDir = true;
	            }
	            if (hasDir) {
	                this.bindings.push([vdom, scope, dirs]);
	            }
	            var children = vdom.children;
	            //如果存在子节点,并且不是容器元素(script, stype, textarea, xmp...)
	            if (!orphanTag[vdom.nodeName] && children && children.length && !delayCompileNodes(dirs)) {
	                this.scanChildren(children, scope, false);
	            }
	        },


	        /**
	         * 将绑定属性转换为指令
	         * 执行各种回调与优化指令
	         * @returns {undefined}
	         */
	        complete: function complete() {
	            this.yieldDirectives();
	            this.beforeReady();
	            if (inBrowser) {
	                var root$$1 = this.root;
	                if (inBrowser) {
	                    var rootDom = avalon.vdom(root$$1, 'toDOM');
	                    groupTree(rootDom, root$$1.children);
	                }
	            }

	            this.mount = true;
	            var fn;
	            while (fn = this.callbacks.pop()) {
	                fn();
	            }
	            this.optimizeDirectives();
	        },


	        /**
	         * 将收集到的绑定属性进行深加工,最后转换指令
	         * @returns {Array<tuple>}
	         */
	        yieldDirectives: function yieldDirectives() {
	            var tuple;
	            while (tuple = this.bindings.shift()) {
	                var vdom = tuple[0],
	                    scope = tuple[1],
	                    dirs = tuple[2],
	                    bindings = [];
	                if ('nodeValue' in dirs) {
	                    bindings = parseInterpolate(dirs);
	                } else if (!('ms-skip' in dirs)) {
	                    bindings = parseAttributes(dirs, tuple);
	                }
	                for (var i = 0, binding; binding = bindings[i++];) {
	                    var dir = directives[binding.type];
	                    if (!inBrowser && /on|duplex|active|hover/.test(binding.type)) {
	                        continue;
	                    }
	                    if (dir.beforeInit) {
	                        dir.beforeInit.call(binding);
	                    }

	                    var directive$$1 = new Directive(scope, binding, vdom, this);
	                    this.directives.push(directive$$1);
	                }
	            }
	        },


	        /**
	         * 修改指令的update与callback方法,让它们以后执行时更加高效
	         * @returns {undefined}
	         */
	        optimizeDirectives: function optimizeDirectives() {
	            for (var i = 0, el; el = this.directives[i++];) {
	                el.callback = directives[el.type].update;
	                el.update = newUpdate;
	                el._isScheduled = false;
	            }
	        },

	        update: function update() {
	            for (var i = 0, el; el = this.directives[i++];) {
	                el.update();
	            }
	        },

	        /**
	         * 销毁所有指令
	         * @returns {undefined}
	         */
	        dispose: function dispose() {
	            var list = this.directives || [];
	            for (var i = 0, el; el = list[i++];) {
	                el.dispose();
	            }
	            //防止其他地方的this.innerRender && this.innerRender.dispose报错
	            for (var _i5 in this) {
	                if (_i5 !== 'dispose') delete this[_i5];
	            }
	        },


	        /**
	         * 将循环区域转换为for指令
	         * @param {type} begin 注释节点
	         * @param {type} scope
	         * @param {type} parentChildren
	         * @param {type} userCb 循环结束回调
	         * @returns {undefined}
	         */
	        getForBinding: function getForBinding(begin, scope, parentChildren, userCb) {
	            var expr = begin.nodeValue.replace('ms-for:', '').trim();
	            begin.nodeValue = 'ms-for:' + expr;
	            var nodes = getRange(parentChildren, begin);
	            var end = nodes.end;
	            var fragment = avalon.vdom(nodes, 'toHTML');
	            parentChildren.splice(nodes.start, nodes.length);
	            begin.props = {};
	            this.bindings.push([begin, scope, {
	                'ms-for': expr
	            }, {
	                begin: begin,
	                end: end,
	                expr: expr,
	                userCb: userCb,
	                fragment: fragment,
	                parentChildren: parentChildren
	            }]);
	        },


	        /**
	         * 在带ms-for元素节点旁添加两个注释节点,组成循环区域
	         * @param {type} vdom
	         * @param {type} scope
	         * @param {type} parentChildren
	         * @param {type} expr
	         * @returns {undefined}
	         */
	        getForBindingByElement: function getForBindingByElement(vdom, scope, parentChildren, expr) {
	            var index = parentChildren.indexOf(vdom); //原来带ms-for的元素节点
	            var props = vdom.props;
	            var begin = {
	                nodeName: '#comment',
	                nodeValue: 'ms-for:' + expr
	            };
	            if (props.slot) {
	                begin.slot = props.slot;
	                delete props.slot;
	            }
	            var end = {
	                nodeName: '#comment',
	                nodeValue: 'ms-for-end:'
	            };
	            parentChildren.splice(index, 1, begin, vdom, end);
	            this.getForBinding(begin, scope, parentChildren, props['data-for-rendered']);
	        }
	    };
	    var viewID;

	    function newUpdate() {
	        var oldVal = this.beforeUpdate();
	        var newVal = this.value = this.get();
	        if (this.callback && this.diff(newVal, oldVal)) {
	            this.callback(this.node, this.value);
	            var vm = this.vm;
	            var $render = vm.$render;
	            var list = vm.$events['onViewChange'];
	            /* istanbul ignore if */
	            if (list && $render && $render.root && !avalon.viewChanging) {
	                if (viewID) {
	                    clearTimeout(viewID);
	                    viewID = null;
	                }
	                viewID = setTimeout(function () {
	                    list.forEach(function (el) {
	                        el.callback.call(vm, {
	                            type: 'viewchange',
	                            target: $render.root,
	                            vmodel: vm
	                        });
	                    });
	                });
	            }
	        }
	        this._isScheduled = false;
	    }

	    var events = 'onInit,onReady,onViewChange,onDispose,onEnter,onLeave';
	    var componentEvents = avalon.oneObject(events);

	    function toObject(value) {
	        var value = platform.toJson(value);
	        if (Array.isArray(value)) {
	            var v = {};
	            value.forEach(function (el) {
	                el && avalon.shadowCopy(v, el);
	            });
	            return v;
	        }
	        return value;
	    }
	    var componentQueue = [];
	    avalon.directive('widget', {
	        delay: true,
	        priority: 4,
	        deep: true,
	        init: function init() {
	            //cached属性必须定义在组件容器里面,不是template中
	            var vdom = this.node;
	            this.cacheVm = !!vdom.props.cached;
	            if (vdom.dom && vdom.nodeName === '#comment') {
	                var comment = vdom.dom;
	            }
	            var oldValue = this.getValue();
	            var value = toObject(oldValue);
	            //外部VM与内部VM
	            // ＝＝＝创建组件的VM＝＝BEGIN＝＝＝
	            var is = vdom.props.is || value.is;
	            this.is = is;
	            var component = avalon.components[is];
	            //外部传入的总大于内部
	            if (!('fragment' in this)) {
	                if (!vdom.isVoidTag) {
	                    //提取组件容器内部的东西作为模板
	                    var text = vdom.children[0];
	                    if (text && text.nodeValue) {
	                        this.fragment = text.nodeValue;
	                    } else {
	                        this.fragment = avalon.vdom(vdom.children, 'toHTML');
	                    }
	                } else {
	                    this.fragment = false;
	                }
	            }
	            //如果组件还没有注册，那么将原元素变成一个占位用的注释节点
	            if (!component) {
	                this.readyState = 0;
	                vdom.nodeName = '#comment';
	                vdom.nodeValue = 'unresolved component placeholder';
	                delete vdom.dom;
	                avalon.Array.ensure(componentQueue, this);
	                return;
	            }

	            //如果是非空元素，比如说xmp, ms-*, template
	            var id = value.id || value.$id;
	            var hasCache = avalon.vmodels[id];
	            var fromCache = false;
	            // this.readyState = 1
	            if (hasCache) {
	                comVm = hasCache;
	                this.comVm = comVm;
	                replaceRoot(this, comVm.$render);
	                fromCache = true;
	            } else {
	                if (typeof component === 'function') {
	                    component = new component(value);
	                }
	                var comVm = createComponentVm(component, value, is);
	                this.readyState = 1;
	                fireComponentHook(comVm, vdom, 'Init');
	                this.comVm = comVm;

	                // ＝＝＝创建组件的VM＝＝END＝＝＝
	                var innerRender = avalon.scan(component.template, comVm);
	                comVm.$render = innerRender;
	                replaceRoot(this, innerRender);
	                var nodesWithSlot = [];
	                var directives$$1 = [];
	                if (this.fragment || component.soleSlot) {
	                    var curVM = this.fragment ? this.vm : comVm;
	                    var curText = this.fragment || '{{##' + component.soleSlot + '}}';
	                    var childBoss = avalon.scan('<div>' + curText + '</div>', curVM, function () {
	                        nodesWithSlot = this.root.children;
	                    });
	                    directives$$1 = childBoss.directives;
	                    this.childBoss = childBoss;
	                    for (var i in childBoss) {
	                        delete childBoss[i];
	                    }
	                }
	                Array.prototype.push.apply(innerRender.directives, directives$$1);

	                var arraySlot = [],
	                    objectSlot = {};
	                //从用户写的元素内部 收集要移动到 新创建的组件内部的元素
	                if (component.soleSlot) {
	                    arraySlot = nodesWithSlot;
	                } else {
	                    nodesWithSlot.forEach(function (el, i) {
	                        //要求带slot属性
	                        if (el.slot) {
	                            var nodes = getRange(nodesWithSlot, el);
	                            nodes.push(nodes.end);
	                            nodes.unshift(el);
	                            objectSlot[el.slot] = nodes;
	                        } else if (el.props) {
	                            var name = el.props.slot;
	                            if (name) {
	                                delete el.props.slot;
	                                if (Array.isArray(objectSlot[name])) {
	                                    objectSlot[name].push(el);
	                                } else {
	                                    objectSlot[name] = [el];
	                                }
	                            }
	                        }
	                    });
	                }
	                //将原来元素的所有孩子，全部移动新的元素的第一个slot的位置上
	                if (component.soleSlot) {
	                    insertArraySlot(innerRender.vnodes, arraySlot);
	                } else {
	                    insertObjectSlot(innerRender.vnodes, objectSlot);
	                }
	            }

	            if (comment) {
	                var dom = avalon.vdom(vdom, 'toDOM');
	                comment.parentNode.replaceChild(dom, comment);
	                comVm.$element = innerRender.root.dom = dom;
	                delete this.reInit;
	            }

	            //处理DOM节点

	            dumpTree(vdom.dom);
	            comVm.$element = vdom.dom;
	            groupTree(vdom.dom, vdom.children);
	            if (fromCache) {
	                fireComponentHook(comVm, vdom, 'Enter');
	            } else {
	                fireComponentHook(comVm, vdom, 'Ready');
	            }
	        },
	        diff: function diff(newVal, oldVal) {
	            if (cssDiff.call(this, newVal, oldVal)) {
	                return true;
	            }
	        },

	        update: function update(vdom, value) {
	            //this.oldValue = value //★★防止递归

	            switch (this.readyState) {
	                case 0:
	                    if (this.reInit) {
	                        this.init();
	                        this.readyState++;
	                    }
	                    break;
	                case 1:
	                    this.readyState++;
	                    break;
	                default:
	                    this.readyState++;
	                    var comVm = this.comVm;
	                    avalon.viewChanging = true;
	                    avalon.transaction(function () {
	                        for (var i in value) {
	                            if (comVm.hasOwnProperty(i)) {
	                                if (Array.isArray(value[i])) {
	                                    comVm[i] = value[i].concat();
	                                } else {
	                                    comVm[i] = value[i];
	                                }
	                            }
	                        }
	                    });

	                    //要保证要先触发孩子的ViewChange 然后再到它自己的ViewChange
	                    fireComponentHook(comVm, vdom, 'ViewChange');
	                    delete avalon.viewChanging;
	                    break;
	            }
	            this.value = avalon.mix(true, {}, value);
	        },
	        beforeDispose: function beforeDispose() {
	            var comVm = this.comVm;
	            if (!this.cacheVm) {
	                fireComponentHook(comVm, this.node, 'Dispose');
	                comVm.$hashcode = false;
	                delete avalon.vmodels[comVm.$id];
	                this.innerRender && this.innerRender.dispose();
	            } else {
	                fireComponentHook(comVm, this.node, 'Leave');
	            }
	        }
	    });

	    function replaceRoot(instance, innerRender) {
	        instance.innerRender = innerRender;
	        var root$$1 = innerRender.root;
	        var vdom = instance.node;
	        var slot = vdom.props.slot;
	        for (var i in root$$1) {
	            vdom[i] = root$$1[i];
	        }
	        if (vdom.props && slot) {
	            vdom.props.slot = slot;
	        }
	        innerRender.root = vdom;
	        innerRender.vnodes[0] = vdom;
	    }

	    function fireComponentHook(vm, vdom, name) {
	        var list = vm.$events['on' + name];
	        if (list) {
	            list.forEach(function (el) {
	                setTimeout(function () {
	                    el.callback.call(vm, {
	                        type: name.toLowerCase(),
	                        target: vdom.dom,
	                        vmodel: vm
	                    });
	                }, 0);
	            });
	        }
	    }

	    function createComponentVm(component, value, is) {
	        var hooks = [];
	        var defaults = component.defaults;
	        collectHooks(defaults, hooks);
	        collectHooks(value, hooks);
	        var obj = {};
	        for (var i in defaults) {
	            var val = value[i];
	            if (val == null) {
	                obj[i] = defaults[i];
	            } else {
	                obj[i] = val;
	            }
	        }
	        obj.$id = value.id || value.$id || avalon.makeHashCode(is);
	        delete obj.id;
	        var def = avalon.mix(true, {}, obj);
	        var vm = avalon.define(def);
	        hooks.forEach(function (el) {
	            vm.$watch(el.type, el.cb);
	        });
	        return vm;
	    }

	    function collectHooks(a, list) {
	        for (var i in a) {
	            if (componentEvents[i]) {
	                if (typeof a[i] === 'function' && i.indexOf('on') === 0) {
	                    list.unshift({
	                        type: i,
	                        cb: a[i]
	                    });
	                }
	                //delete a[i] 这里不能删除,会导致再次切换时没有onReady
	            }
	        }
	    }

	    function resetParentChildren(nodes, arr) {
	        var dir = arr && arr[0] && arr[0].forDir;
	        if (dir) {
	            dir.parentChildren = nodes;
	        }
	    }

	    function insertArraySlot(nodes, arr) {
	        for (var i = 0, el; el = nodes[i]; i++) {
	            if (el.nodeName === 'slot') {
	                resetParentChildren(nodes, arr);
	                nodes.splice.apply(nodes, [i, 1].concat(arr));
	                break;
	            } else if (el.children) {
	                insertArraySlot(el.children, arr);
	            }
	        }
	    }

	    function insertObjectSlot(nodes, obj) {
	        for (var i = 0, el; el = nodes[i]; i++) {
	            if (el.nodeName === 'slot') {
	                var name = el.props.name;
	                resetParentChildren(nodes, obj[name]);
	                nodes.splice.apply(nodes, [i, 1].concat(obj[name]));
	                continue;
	            } else if (el.children) {
	                insertObjectSlot(el.children, obj);
	            }
	        }
	    }

	    avalon.components = {};
	    avalon.component = function (name, component) {

	        component.extend = componentExtend;
	        return addToQueue(name, component);
	    };
	    function addToQueue(name, component) {
	        avalon.components[name] = component;
	        for (var el, i = 0; el = componentQueue[i]; i++) {
	            if (el.is === name) {
	                componentQueue.splice(i, 1);
	                el.reInit = true;
	                delete el.value;
	                el.update();
	                i--;
	            }
	        }
	        return component;
	    }

	    function componentExtend(child) {
	        var name = child.displayName;
	        delete child.displayName;
	        var obj = { defaults: avalon.mix(true, {}, this.defaults, child.defaults) };
	        if (child.soleSlot) {
	            obj.soleSlot = child.soleSlot;
	        }
	        obj.template = child.template || this.template;
	        return avalon.component(name, obj);
	    }

	    return avalon;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * 
	 * version 1.0
	 * built in 2015.11.19
	 */

	var mmHistory = __webpack_require__(11)
	var storage = __webpack_require__(12)

	function Router() {
	    this.rules = []
	}


	var placeholder = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g
	Router.prototype = storage
	avalon.mix(storage, {
	    error: function (callback) {
	        this.errorback = callback
	    },
	    _pathToRegExp: function (pattern, opts) {
	        var keys = opts.keys = [],
	                //      segments = opts.segments = [],
	                compiled = '^', last = 0, m, name, regexp, segment;

	        while ((m = placeholder.exec(pattern))) {
	            name = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	            regexp = m[4] || (m[1] == '*' ? '.*' : 'string')
	            segment = pattern.substring(last, m.index);
	            var type = this.$types[regexp]
	            var key = {
	                name: name
	            }
	            if (type) {
	                regexp = type.pattern
	                key.decode = type.decode
	            }
	            keys.push(key)
	            compiled += quoteRegExp(segment, regexp, false)
	            //  segments.push(segment)
	            last = placeholder.lastIndex
	        }
	        segment = pattern.substring(last);
	        compiled += quoteRegExp(segment) + (opts.strict ? opts.last : "\/?") + '$';
	        var sensitive = typeof opts.caseInsensitive === "boolean" ? opts.caseInsensitive : true
	        //  segments.push(segment);
	        opts.regexp = new RegExp(compiled, sensitive ? 'i' : undefined);
	        return opts

	    },
	    //添加一个路由规则
	    add: function (path, callback, opts) {
	        var array = this.rules
	        if (path.charAt(0) !== "/") {
	            avalon.error("avalon.router.add的第一个参数必须以/开头")
	        }
	        opts = opts || {}
	        opts.callback = callback
	        if (path.length > 2 && path.charAt(path.length - 1) === "/") {
	            path = path.slice(0, -1)
	            opts.last = "/"
	        }
	        avalon.Array.ensure(array, this._pathToRegExp(path, opts))
	    },
	    //判定当前URL与已有状态对象的路由规则是否符合
	    route: function (path, query) {
	        path = path.trim()
	        var rules = this.rules
	        for (var i = 0, el; el = rules[i++]; ) {
	            var args = path.match(el.regexp)
	            if (args) {
	                el.query = query || {}
	                el.path = path
	                el.params = {}
	                var keys = el.keys
	                args.shift()
	                if (keys.length) {
	                    this._parseArgs(args, el)
	                }
	                return  el.callback.apply(el, args)
	            }
	        }
	        if (this.errorback) {
	            this.errorback()
	        }
	    },
	    _parseArgs: function (match, stateObj) {
	        var keys = stateObj.keys
	        for (var j = 0, jn = keys.length; j < jn; j++) {
	            var key = keys[j]
	            var value = match[j] || ''
	            if (typeof key.decode === 'function') {//在这里尝试转换参数的类型
	                var val = key.decode(value)
	            } else {
	                try {
	                    val = JSON.parse(value)
	                } catch (e) {
	                    val = value
	                }
	            }
	            match[j] = stateObj.params[key.name] = val
	        }
	    },
	    /*
	     *  @interface avalon.router.navigate 设置历史(改变URL)
	     *  @param hash 访问的url hash   
	     */
	    navigate: function (hash, mode) {
	        var parsed = parseQuery(hash)
	        var newHash = this.route(parsed.path, parsed.query)
	        if(isLegalPath(newHash)){
	            hash = newHash
	        }
	        //保存到本地储存或cookie
	        avalon.router.setLastPath(hash)
	        // 模式0, 不改变URL, 不产生历史实体, 执行回调
	        // 模式1, 改变URL, 不产生历史实体,   执行回调
	        // 模式2, 改变URL, 产生历史实体,    执行回调
	        if (mode === 1) {
	          
	            avalon.history.setHash(hash, true)
	        } else if (mode === 2) {
	            avalon.history.setHash(hash)
	        }
	        return hash
	    },
	    /*
	     *  @interface avalon.router.when 配置重定向规则
	     *  @param path 被重定向的表达式，可以是字符串或者数组
	     *  @param redirect 重定向的表示式或者url
	     */
	    when: function (path, redirect) {
	        var me = this,
	                path = path instanceof Array ? path : [path]
	        avalon.each(path, function (index, p) {
	            me.add(p, function () {
	                var info = me.urlFormate(redirect, this.params, this.query)
	                me.navigate(info.path + info.query)
	            })
	        })
	        return this
	    },
	    urlFormate: function (url, params, query) {
	        var query = query ? queryToString(query) : "",
	                hash = url.replace(placeholder, function (mat) {
	                    var key = mat.replace(/[\{\}]/g, '').split(":")
	                    key = key[0] ? key[0] : key[1]
	                    return params[key] !== undefined ? params[key] : ''
	                }).replace(/^\//g, '')
	        return {
	            path: hash,
	            query: query
	        }
	    },
	    /* *
	     `'/hello/'` - 匹配'/hello/'或'/hello'
	     `'/user/:id'` - 匹配 '/user/bob' 或 '/user/1234!!!' 或 '/user/' 但不匹配 '/user' 与 '/user/bob/details'
	     `'/user/{id}'` - 同上
	     `'/user/{id:[^/]*}'` - 同上
	     `'/user/{id:[0-9a-fA-F]{1,8}}'` - 要求ID匹配/[0-9a-fA-F]{1,8}/这个子正则
	     `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	     path into the parameter 'path'.
	     `'/files/*path'` - ditto.
	     */
	    // avalon.router.get("/ddd/:dddID/",callback)
	    // avalon.router.get("/ddd/{dddID}/",callback)
	    // avalon.router.get("/ddd/{dddID:[0-9]{4}}/",callback)
	    // avalon.router.get("/ddd/{dddID:int}/",callback)
	    // 我们甚至可以在这里添加新的类型，avalon.router.$type.d4 = { pattern: '[0-9]{4}', decode: Number}
	    // avalon.router.get("/ddd/{dddID:d4}/",callback)
	    $types: {
	        date: {
	            pattern: "[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])",
	            decode: function (val) {
	                return new Date(val.replace(/\-/g, "/"))
	            }
	        },
	        string: {
	            pattern: "[^\\/]*",
	            decode: function (val) {
	                return val;
	            }
	        },
	        bool: {
	            decode: function (val) {
	                return parseInt(val, 10) === 0 ? false : true;
	            },
	            pattern: "0|1"
	        },
	        'int': {
	            decode: function (val) {
	                return parseInt(val, 10);
	            },
	            pattern: "\\d+"
	        }
	    }
	})


	module.exports = avalon.router = new Router


	function parseQuery(url) {
	    var array = url.split("?"), query = {}, path = array[0], querystring = array[1]
	    if (querystring) {
	        var seg = querystring.split("&"),
	                len = seg.length, i = 0, s;
	        for (; i < len; i++) {
	            if (!seg[i]) {
	                continue
	            }
	            s = seg[i].split("=")
	            query[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
	        }
	    }
	    return {
	        path: path,
	        query: query
	    }
	}
	function isLegalPath(path){
	    if(path === '/')
	        return true
	    if(typeof path === 'string' && path.length > 1 && path.charAt(0) === '/'){
	        return true
	    }
	}

	function queryToString(obj) {
	    if (typeof obj === 'string')
	        return obj
	    var str = []
	    for (var i in obj) {
	        if (i === "query")
	            continue
	        str.push(i + '=' + encodeURIComponent(obj[i]))
	    }
	    return str.length ? '?' + str.join("&") : ''
	}


	function quoteRegExp(string, pattern, isOptional) {
	    var result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!pattern)
	        return result;
	    var flag = isOptional ? '?' : '';
	    return result + flag + '(' + pattern + ')' + flag;
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*!
	 * mmHistory
	 * 用于监听地址栏的变化
	 * https://github.com/flatiron/director/blob/master/lib/director/browser.js
	 * https://github.com/visionmedia/page.js/blob/master/page.js
	 */

	var location = document.location
	var oldIE = avalon.msie <= 7
	var supportPushState = !!(window.history.pushState)
	var supportHashChange = !!("onhashchange" in window && (!window.VBArray || !oldIE))
	var defaults = {
	    root: "/",
	    html5: false,
	    hashPrefix: "!",
	    iframeID: null, //IE6-7，如果有在页面写死了一个iframe，这样似乎刷新的时候不会丢掉之前的历史
	    interval: 50, //IE6-7,使用轮询，这是其时间时隔,
	    autoScroll: false
	}
	var mmHistory = {
	    hash: getHash(location.href),
	    check: function() {
	        var h = getHash(location.href)
	        if (h !== this.hash) {
	            this.hash = h
	            this.onHashChanged()
	        }
	    },
	    start: function(options) {
	        if (this.started)
	            throw new Error('avalon.history has already been started')
	        this.started = true
	            //监听模式
	        if (typeof options === 'boolean') {
	            options = {
	                html5: options
	            }
	        }

	        options = avalon.mix({}, defaults, options || {})
	        if (options.fireAnchor) {
	            options.autoScroll = true
	        }
	        var rootPath = options.root
	        if (!/^\//.test(rootPath)) {
	            avalon.error('root配置项必须以/字符开始, 以非/字符结束')
	        }
	        if (rootPath.length > 1) {
	            options.root = rootPath.replace(/\/$/, '')
	        }
	        var html5Mode = options.html5
	        this.options = options
	        this.mode = html5Mode ? "popstate" : "hashchange"
	        if (!supportPushState) {
	            if (html5Mode) {
	                avalon.warn("浏览器不支持HTML5 pushState，平稳退化到onhashchange!")
	            }
	            this.mode = "hashchange"
	        }
	        if (!supportHashChange) {
	            this.mode = "iframepoll"
	        }
	        avalon.log('avalon run mmHistory in the ', this.mode, 'mode')
	            // 支持popstate 就监听popstate
	            // 支持hashchange 就监听hashchange(IE8,IE9,FF3)
	            // 否则的话只能每隔一段时间进行检测了(IE6, IE7)
	        switch (this.mode) {
	            case "popstate":
	                // At least for now HTML5 history is available for 'modern' browsers only
	                // There is an old bug in Chrome that causes onpopstate to fire even
	                // upon initial page load. Since the handler is run manually in init(),
	                // this would cause Chrome to run it twise. Currently the only
	                // workaround seems to be to set the handler after the initial page load
	                // http://code.google.com/p/chromium/issues/detail?id=63040
	                setTimeout(function() {
	                    window.onpopstate = mmHistory.onHashChanged
	                }, 500)
	                break
	            case "hashchange":
	                window.onhashchange = mmHistory.onHashChanged
	                break
	            case "iframepoll":
	                //也有人这样玩 http://www.cnblogs.com/meteoric_cry/archive/2011/01/11/1933164.html
	                avalon.ready(function() {
	                    var iframe = document.createElement('iframe')
	                    iframe.id = options.iframeID
	                    iframe.style.display = 'none'
	                    document.body.appendChild(iframe)
	                    mmHistory.iframe = iframe
	                    mmHistory.writeFrame('')
	                    if (avalon.msie) {
	                        function onPropertyChange() {
	                            if (event.propertyName === 'location') {
	                                mmHistory.check()
	                            }
	                        }
	                        document.attachEvent('onpropertychange', onPropertyChange)
	                        mmHistory.onPropertyChange = onPropertyChange
	                    }

	                    mmHistory.intervalID = window.setInterval(function() {
	                        mmHistory.check()
	                    }, options.interval)

	                })
	                break
	        }
	        //页面加载时触发onHashChanged
	        this.onHashChanged()
	    },
	    stop: function() {
	        switch (this.mode) {
	            case "popstate":
	                window.onpopstate = avalon.noop
	                break
	            case "hashchange":
	                window.onhashchange = avalon.noop
	                break
	            case "iframepoll":
	                if (this.iframe) {
	                    document.body.removeChild(this.iframe)
	                    this.iframe = null
	                }
	                if (this.onPropertyChange) {
	                    document.detachEvent('onpropertychange', this.onPropertyChange)
	                }
	                clearInterval(this.intervalID)
	                break
	        }
	        this.started = false
	    },
	    setHash: function(s, replace) {
	        switch (this.mode) {
	            case 'iframepoll':
	                if (replace) {
	                    var iframe = this.iframe
	                    if (iframe) {
	                        //contentWindow 兼容各个浏览器，可取得子窗口的 window 对象。
	                        //contentDocument Firefox 支持，> ie8 的ie支持。可取得子窗口的 document 对象。
	                        iframe.contentWindow._hash = s
	                    }
	                } else {
	                    this.writeFrame(s)
	                }
	                break
	            case 'popstate':
	                var path = (this.options.root + '/' + s).replace(/\/+/g, '/')
	                var method = replace ? 'replaceState' : 'pushState'
	                history[method]({}, document.title, path)
	                    // 手动触发onpopstate event
	                this.onHashChanged()
	                break
	            default:
	                //http://stackoverflow.com/questions/9235304/how-to-replace-the-location-hash-and-only-keep-the-last-history-entry
	                var newHash = this.options.hashPrefix + s
	                if (replace && location.hash !== newHash) {
	                    history.back()
	                }
	                location.hash = newHash
	                break
	        }
	    },
	    writeFrame: function(s) {
	        // IE support...
	        var f = mmHistory.iframe
	        var d = f.contentDocument || f.contentWindow.document
	        d.open()
	        d.write("<script>_hash = '" + s + "'; onload = parent.avalon.history.syncHash;<script>")
	        d.close()
	    },
	    syncHash: function() {
	        // IE support...
	        var s = this._hash
	        if (s !== getHash(location.href)) {
	            location.hash = s
	        }
	        return this
	    },

	    getPath: function() {
	        var path = location.pathname.replace(this.options.root, '')
	        if (path.charAt(0) !== '/') {
	            path = '/' + path
	        }
	        return path
	    },
	    onHashChanged: function(hash, clickMode) {
	        if (!clickMode) {
	            hash = mmHistory.mode === 'popstate' ? mmHistory.getPath() :
	                location.href.replace(/.*#!?/, '')
	        }
	        hash = decodeURIComponent(hash)
	        hash = hash.charAt(0) === '/' ? hash : '/' + hash
	        if (hash !== mmHistory.hash) {
	            mmHistory.hash = hash

	            if (avalon.router) { //即mmRouter
	                hash = avalon.router.navigate(hash, 0)
	            }

	            if (clickMode) {
	                mmHistory.setHash(hash)
	            }
	            if (clickMode && mmHistory.options.autoScroll) {
	                autoScroll(hash.slice(1))
	            }
	        }

	    }
	}

	function getHash(path) {
	    // IE6直接用location.hash取hash，可能会取少一部分内容
	    // 比如 http://www.cnblogs.com/rubylouvre#stream/xxxxx?lang=zh_c
	    // ie6 => location.hash = #stream/xxxxx
	    // 其他浏览器 => location.hash = #stream/xxxxx?lang=zh_c
	    // firefox 会自作多情对hash进行decodeURIComponent
	    // 又比如 http://www.cnblogs.com/rubylouvre/#!/home/q={%22thedate%22:%2220121010~20121010%22}
	    // firefox 15 => #!/home/q={"thedate":"20121010~20121010"}
	    // 其他浏览器 => #!/home/q={%22thedate%22:%2220121010~20121010%22}
	    var index = path.indexOf("#")
	    if (index === -1) {
	        return ''
	    }
	    return decodeURI(path.slice(index))
	}



	//劫持页面上所有点击事件，如果事件源来自链接或其内部，
	//并且它不会跳出本页，并且以"#/"或"#!/"开头，那么触发updateLocation方法
	avalon.bind(document, "click", function(e) {
	    //https://github.com/asual/jquery-address/blob/master/src/jquery.address.js
	    //https://github.com/angular/angular.js/blob/master/src/ng/location.js
	    //下面十种情况将阻止进入路由系列
	    //1. 路由器没有启动
	    if (!mmHistory.started) {
	        return
	    }
	    //2. 不是左键点击或使用组合键
	    if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2 ) {
	        return
	    }
	    //3. 此事件已经被阻止
	    if (e.returnValue === false) {
	        return
	    }
	    //4. 目标元素不A标签,或不在A标签之内
	    var el = e.path ? e.path[0] : (e.target || e.srcElement || {})
	    while (el.nodeName !== "A") {
	        el = el.parentNode
	        if (!el || el.tagName === "BODY") {
	            return
	        }
	    }
	    //5. 没有定义href属性或在hash模式下,只有一个#
	    //IE6/7直接用getAttribute返回完整路径
	    var href = el.getAttribute('href', 2) || el.getAttribute("xlink:href") || ''
	    if (href.slice(0, 2) !== '#!') {
	        return
	    }

	    //6. 目标链接是用于下载资源或指向外部
	    if (el.getAttribute('download') != null || el.getAttribute('rel') === 'external')
	        return

	    //7. 只是邮箱地址
	    if (href.indexOf('mailto:') > -1) {
	        return
	    }
	    //8. 目标链接要新开窗口
	    if (el.target && el.target !== '_self') {
	        return
	    }

	    e.preventDefault()
	        //终于达到目的地
	    mmHistory.onHashChanged(href.replace('#!', ''), true)

	})

	//得到页面第一个符合条件的A标签
	function getFirstAnchor(name) {
	    var list = document.getElementsByTagName('A')
	    for (var i = 0, el; el = list[i++];) {
	        if (el.name === name) {
	            return el
	        }
	    }
	}

	function getOffset(elem) {
	    var position = avalon(elem).css('position'),
	        offset
	    if (position !== 'fixed') {
	        offset = 0
	    } else {
	        offset = elem.getBoundingClientRect().bottom
	    }

	    return offset
	}

	function autoScroll(hash) {
	    //取得页面拥有相同ID的元素
	    var elem = document.getElementById(hash)
	    if (!elem) {
	        //取得页面拥有相同name的A元素
	        elem = getFirstAnchor(hash)
	    }
	    if (elem) {
	        elem.scrollIntoView()
	        var offset = getOffset(elem)
	        if (offset) {
	            var elemTop = elem.getBoundingClientRect().top
	            window.scrollBy(0, elemTop - offset.top)
	        }
	    } else {
	        window.scrollTo(0, 0)
	    }
	}


	module.exports = avalon.history = mmHistory


/***/ },
/* 12 */
/***/ function(module, exports) {

	
	function supportLocalStorage() {
	    try {//看是否支持localStorage
	        localStorage.setItem("avalon", 1)
	        localStorage.removeItem("avalon")
	        return true
	    } catch (e) {
	        return false
	    }
	}
	function escapeCookie(value) {
	    return String(value).replace(/[,;"\\=\s%]/g, function (character) {
	        return encodeURIComponent(character)
	    });
	}
	var ret = {}
	if (supportLocalStorage()) {
	    ret.getLastPath = function () {
	        return localStorage.getItem('msLastPath')
	    }
	    var cookieID
	    ret.setLastPath = function (path) {
	        if (cookieID) {
	            clearTimeout(cookieID)
	            cookieID = null
	        }
	        localStorage.setItem("msLastPath", path)
	        cookieID = setTimeout(function () {//模拟过期时间
	            localStorage.removItem("msLastPath")
	        }, 1000 * 60 * 60 * 24)
	    }
	} else {

	    ret.getLastPath = function () {
	        return getCookie.getItem('msLastPath')
	    }
	    ret.setLastPath = function (path) {
	        setCookie('msLastPath', path)
	    }
	    function setCookie(key, value) {
	        var date = new Date()//将date设置为1天以后的时间 
	        date.setTime(date.getTime() + 1000 * 60 * 60 * 24)
	        document.cookie = escapeCookie(key) + '=' + escapeCookie(value) + ';expires=' + date.toGMTString()
	    }
	    function getCookie(name) {
	        var m = String(document.cookie).match(new RegExp('(?:^| )' + name + '(?:(?:=([^;]*))|;|$)')) || ["", ""]
	        return decodeURIComponent(m[1])
	    }
	}

	module.exports = ret

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=list_lf><dl ms-for=\"cat in catData.Catigrade\"><dt><i></i> <a href=javascript:void(0)>分类</a></dt><dd><a href=javascript:void(0)>不限</a></dd><dd ms-for=\"elem in cat.catcontent\"><a ms-attr={href:elem.catUrl}>{{elem.catname}}</a></dd><dd><a href=javascript:void(0)></a></dd></dl></div><div class=main><div class=car_channel><div><div class=channel_h6><a ms-attr={href:@firstbarData.titlenameUrl} target=_blank alt><span>{{@firstbarData.titlename}}</span>-车系频道</a></div><div class=channel_content><dl><dt><img ms-attr={src:@firstbarData.image}> <a ms-attr={href:@firstbarData.imageUrl} target=_blank>图片实拍<span>（{{@firstbarData.tupianshipaishuliang}}张）</span></a></dt><dd><p class=h31><span class=w88>本地参考价：</span> <span class=w167><a ms-attr={href:@firstbarData.tupianshipaishuliangUrl} target=_blank>{{@firstbarData.accordPrice}}</a> 万</span> <span class=w46></span> <span class=w140></span></p><p><span class=w88>厂商指导价：</span> <span class=w167>{{@firstbarData.changshangaccordPrice}} 万</span> <span class=w46>级别：</span> <span class=w140>{{@firstbarData.jibie}}</span></p><p><span class=w88>排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</span> <span class=w167>{{@firstbarData.pailiang}}</span> <span class=w46>车身：</span> <span class=w140>{{@firstbarData.cheshen}}</span></p><p><span class=w88>变&nbsp;&nbsp;&nbsp;速&nbsp;&nbsp;&nbsp;&nbsp;箱：</span> <span class=w167>{{@firstbarData.biansuxiang}}</span> <span class=w46>保修：</span> <span class=w140>{{@firstbarData.baoxiu}}</span></p><div class=channel_btn><a ms-attr={href:@firstbarData.xundiejiaUrl} target=_blank alt>询底价</a> <a ms-attr={href:@firstbarData.zhihuan} target=_blank alt>置换</a> <a ms-attr={href:@firstbarData.shijia} target=_blank alt>试驾</a></div><div class=channel_link><a ms-attr={href:@firstbarData.canshupeizhi} target=_blank alt>参数配置</a> <a ms-attr={href:@firstbarData.youhao} target=_blank alt>油耗</a> <a ms-attr={href:@firstbarData.baojia} target=_blank alt>报价</a> <a ms-attr={href:@firstbarData.ershouche} target=_blank alt>二手车</a> <a ms-attr={href:@firstbarData.luntan} target=_blank alt>论坛</a></div></dd></dl></div></div><div class=channel_tab><div class=channel_tab_nav><a href=javascript:void(0); ms-for=\"($index,titleelem) in @channel_tab\" :class=\"[ ($index==0)&& 'underline']\" ms-click=@tabToggle(titleelem.chexingmingcheng,$event)>{{titleelem.tabsrementitlename}}</a></div><div class=channel_tab_text><table width border=0 cellspacing=0 cellpadding=0><thead><tr><td width=240 class=p_19>车型名称</td><td width=72>变速箱</td><td width=67>排量</td><td width=85>指导价</td><td width=75>参考价</td><td width=80></td></tr></thead></table><table width border=0 cellspacing=0 cellpadding=0 style=\"margin-top: 6px;\"><tbody><tr ms-for=\"elem in tabspropsdata\"><td width=240 class=p_19><a href=### target=_blank class=channel_tab_link1>{{elem.name}}</a></td><td width=72>{{elem.biansuxiang}}</td><td width=67>{{elem.pailiang}}</td><td width=85>{{elem.zhidaojia}}</td><td width=75>{{elem.cankaojia}}</td><td width=80><a href=### target=_blank class=car_channe2>询底价</a></td></tr><tr><td width=240 class=p_19><a href=### target=_blank class=channel_tab_link1>查看全部在售车型 >></a></td><td width=72></td><td width=67></td><td width=85></td><td width=75></td><td width=80></td></tr></tbody></table></div></div></div><div class=img_channel><h6><a ms-attr={href:@chexiimageData.chexinameUrl} target=_blank><span>{{@chexiimageData.chexiname}}</span>-车系图片-实拍图-车展图</a></h6><div class=img_channel_li><ul><li ms-for=\"elem in @chexiimageData.tupianUrl\"><a ms-attr={href:@elem.url} target=_blank><img ms-attr={src:@elem.imageUrl} width=120 height=90></a> <i></i></li></ul></div><div class=img_channel_link><a ms-attr={href:@chexiimageData.chakangenguoUrl} target=_blank alt>查看更多<span>{{@chexiimageData.chexishipinname}}</span>相关图片 >></a></div></div><xmp ms-widget=\"{is:'Chexivedio-view',chexivideoData:@chexivideoDataparent,id:'ddd'}\" cached=true></xmp><div class=brand_channel><h6><a ms-attr={href:@brandDataparent.gengduochexishipin2Url} target=_blank><span>{{@brandDataparent.chexishipin2titlename}}</span>-车系视频-原创视频-评测视频</a></h6><div class=brand_channel_list><div class=\"brand_car brand_car_1\" ms-for=\"elem in @brandDataparent.chexizhonglei\"><a ms-attr={href:@elem.chexinameUrl} target=_blank alt><img ms-attr={src:@elem.chexinameImage} width=120 height=90> <span class=brand_link1>{{elem.chexiname}}</span> <span class=brand_link2>{{elem.chexinameprice}}万</span></a></div></div><div class=brand_channel_linke><a href=### target=_blank alt>查看更多<span>大众</span>品牌车系 >></a></div><wbr :widget=\"{is:'brandlist-view',brandlistData:@brandlistDataparent}\"></div><div class=map_channel><div class=map_h6><a ms-attr={href:@mapchannelData.titleUrl} target=_blank alt><span>{{@mapchannelData.title}}</span>-经销商优惠-行情促销</a></div><div class=map_channel_service><dl ms-for=\"($index elem) in @mapchannelData.jignxiaoshang\"><dt><a ms-attr={href:elem.jingxiaoshangnamUrl} target=_blank>{{$index+1}}.{{elem.jingxiaoshangnam}}</a><i>4S店</i></dt><dd class=map_phone><i></i>{{elem.iphone}}<span>认证</span></dd><dd class=map_gps><i></i>{{elem.address}}</dd><dd class=map_dat><i></i>{{elem.cuxiao}}<b>{{elem.cuxiaoxiangguan}}</b></dd></dl><div class=dea_map></div></div><div class=map_channel_link><a ms-attr={href:@mapchannelData.gengduotitleUrl} target=_blank>查看更多<span>{{@mapchannelData.title}}</span>经销商行情 >></a></div></div><wbr ms-widget=\"{is:'brandlist-view',brandlistData:@brandlistDataparent,id:'brandlist'}\" cached=true></div>"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div><p id=pp>2sadfaadf</p><p>{{@bbb}}</p></div><script type=javascript>document.getElementById(\"pp\").innerHtml = \"切换卡\"</script>"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div><p>切换卡3</p><p>{{@ccc}}</p><p>{{new Date | date('yyyy-mm-dd HH:MM:ss')}}</p></div>"

/***/ }
/******/ ]);