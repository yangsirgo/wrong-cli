var b_v = navigator.appVersion;
var IE6 = b_v.search(/MSIE 6/i) != -1;
var IE7 = b_v.search(/MSIE 7/i) != -1;
if (IE6||IE7){
    //require('../ie7-js/lib/IE7.js')
}

//require('../ie7-js/lib/IE7.js')

require('../json3/json.js')
require('../json3/promise.js')
var $ = require('../jquery/jquery-1.12.2.js')

var avalon = require('avalon2')
require('./mmRouter.js')
var a = require('../dist/tab1.html')
var b = require('../dist/tab2.html')
var c = require('../dist/tab3.html')

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

