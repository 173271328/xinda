webpackJsonp([12],{"+740":function(t,o,i){var e=i("I9Tw");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("6cfb50cb",e,!0)},"3uUU":function(t,o,i){o=t.exports=i("FZ+f")(!1),o.push([t.i,".sate select{float:left;margin-left:10px;margin-top:5px;padding:0;padding-left:25px;width:120px;height:30px;font-size:14px}",""])},"7hyO":function(t,o,i){var e=i("3uUU");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("81e55672",e,!0)},BDy2:function(t,o,i){"use strict";var e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",[t.$isPC?i("div",{staticClass:"shoplist container"},[i("div",{staticClass:"Breadcrumb"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),i("el-breadcrumb-item",[t._v("公司工商")])],1)],1),t._v(" "),i("div",{staticClass:"shopsifting"},[i("div",[i("div",{staticClass:"siftingHeader"},[t._v("服务区域")]),t._v(" "),i("v-distpicker",{staticClass:"sate",attrs:{placeholders:t.placeholders},on:{province:t.clearls,selected:t.onSelected}})],1),t._v(" "),i("div",[i("div",{staticClass:"siftingHeader"},[t._v("产品类型")]),t._v(" "),t._l(t.prodType,function(o,e){return i("ul",{key:e,staticClass:"produclist font14"},[i("li",[i("a",{class:{active:e==t.proi},on:{click:function(i){t.proc(e,o.code)}}},[t._v(t._s(o.name))])])])})],2)]),t._v(" "),i("div",{staticClass:"Shopboxtitle font14"},t._l(t.shopSort,function(o,e){return i("ul",{key:e},[i("li",[i("a",{class:{active:e==t.sori},on:{click:function(i){t.sorc(e,o.sort)}}},[t._v(t._s(o.name)+" \n                        "),i("i",{staticClass:"iconfont"},[t._v("")])])])])})),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"Shopboxbody font14"},[t.shopinfo.length?t._e():i("div",{staticClass:"none"},[i("el-alert",{attrs:{title:"所选地区暂未开通服务",type:"info",closable:!1,"show-icon":""}})],1),t._v(" "),t._l(t.shopinfo,function(o){return[i("div",{key:o.id,staticClass:"shopBox"},[i("div",{staticClass:"boxleft"},[i("div",[i("img",{attrs:{src:t.imgurl(o.providerImg)}})]),t._v(" "),t._m(0,!0)]),t._v(" "),i("div",{staticClass:"boxright"},[i("div",[t._v(t._s(o.providerName))]),t._v(" "),t._m(1,!0),t._v(" "),i("div",[t._v(t._s(o.regionName))]),t._v(" "),i("div",[t._v("累计服务客户次数:"+t._s(o.orderNum)+"\n                            "),i("span",{staticClass:"line"},[t._v("|")]),t._v("好评率:"+t._s(t.rate(o.goodJudge,o.totalJudge)))]),t._v(" "),t._l(o.productTypes,function(o,e){return i("ul",{key:e},[i("li",[t._v(t._s(o))])])}),t._v(" "),i("a",{on:{click:function(i){t.enter(o.id)}}},[t._v("进入店铺")])],2)])]})],2),t._v(" "),i("v-page",{attrs:{curInx:t.cur,pageSize:t.pageSize,pageChange:t.pageChange,totalShow:!1}})],1):t._e()])},a=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("img",{attrs:{src:i("ZzoA")}}),t._v("  金牌服务商")])},function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",[t._v("信誉  \n                            "),i("i",{staticClass:"iconfont redicon"},[t._v("")]),t._v(" "),i("i",{staticClass:"iconfont redicon"},[t._v("")]),t._v(" "),i("i",{staticClass:"iconfont redicon"},[t._v("")]),t._v(" "),i("i",{staticClass:"iconfont redicon"},[t._v("")]),t._v(" "),i("i",{staticClass:"iconfont blackicon"},[t._v("")])])}],n={render:e,staticRenderFns:a};o.a=n},I9Tw:function(t,o,i){o=t.exports=i("FZ+f")(!1),o.push([t.i,".redicon[data-v-520b2e65]{color:red}.blackicon[data-v-520b2e65]{color:#000}.container[data-v-520b2e65]{width:1200px;margin:0 auto}.Breadcrumb[data-v-520b2e65]{margin:25px 0 5px}.shopsifting[data-v-520b2e65]{text-align:center;background:#f7f7f7;border-top:1px solid #ccc;margin-bottom:25px}.shopsifting>div[data-v-520b2e65]{height:40px;border:1px solid #ccc;border-top:none}.shopsifting>div .siftingHeader[data-v-520b2e65]{float:left;line-height:40px;width:100px;border-right:1px solid #ccc}.shopsifting li[data-v-520b2e65],.shopsifting ul[data-v-520b2e65]{float:left;line-height:40px}.shopsifting li a[data-v-520b2e65],.shopsifting ul a[data-v-520b2e65]{display:inline-block;margin-left:10px;margin-right:5px;line-height:25px;width:80px;height:25px;border-radius:5px;cursor:pointer;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.shopsifting li .active[data-v-520b2e65],.shopsifting li a[data-v-520b2e65]:hover,.shopsifting ul .active[data-v-520b2e65],.shopsifting ul a[data-v-520b2e65]:hover{color:#fff;background:#2594d4}.Shopboxtitle[data-v-520b2e65]{background:#f7f7f7;border:1px solid #ccc;height:40px;text-align:center}.Shopboxtitle li[data-v-520b2e65],.Shopboxtitle ul[data-v-520b2e65]{float:left;line-height:40px}.Shopboxtitle li a[data-v-520b2e65],.Shopboxtitle ul a[data-v-520b2e65]{display:inline-block;width:110px;height:100%;color:#000}.Shopboxtitle li .active[data-v-520b2e65],.Shopboxtitle li a[data-v-520b2e65]:hover,.Shopboxtitle ul .active[data-v-520b2e65],.Shopboxtitle ul a[data-v-520b2e65]:hover{color:#fff;background:#2594d4;cursor:pointer}.Shopboxbody[data-v-520b2e65]{border:1px solid #ccc;overflow:hidden;border-top:none;width:1198px}.Shopboxbody .shopBox[data-v-520b2e65]{float:left;margin:13px;padding-top:25px;width:570px;height:250px;border:1px solid #ccc;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.Shopboxbody .shopBox[data-v-520b2e65]:hover{-webkit-box-shadow:0 0 5px #2594d4;box-shadow:0 0 5px #2594d4;border:1px solid #2594d4}.Shopboxbody .shopBox .boxleft[data-v-520b2e65]{float:left;margin:0 35px;width:180px;text-align:center}.Shopboxbody .shopBox .boxleft div[data-v-520b2e65]{margin-top:60px}.Shopboxbody .shopBox .boxleft div img[data-v-520b2e65]{vertical-align:middle}.Shopboxbody .shopBox .boxleft[data-v-520b2e65]>:first-child{height:55px;line-height:55px;font-size:30px;font-weight:700}.Shopboxbody .shopBox .boxleft[data-v-520b2e65]>:nth-child(2){height:35px;line-height:35px}.Shopboxbody .shopBox .boxright[data-v-520b2e65]{position:relative;float:left;text-align:left;width:300px;height:250px}.Shopboxbody .shopBox .boxright div[data-v-520b2e65]{margin-bottom:10px}.Shopboxbody .shopBox .boxright .line[data-v-520b2e65]{padding-left:15px;padding-right:25px}.Shopboxbody .shopBox .boxright ul li[data-v-520b2e65]{float:left;width:70px;height:25px;margin-top:5px;margin-right:5px;background:#2594d4;border-radius:5px;color:#fff;line-height:25px;text-align:center}.Shopboxbody .shopBox .boxright a[data-v-520b2e65]{position:absolute;bottom:20px;display:inline-block;margin-top:40px;padding:10px 20px;background:#ff5b1b;color:#fff;border-radius:5px;font-size:14px;cursor:pointer}.none[data-v-520b2e65]{width:1200px;height:200px;padding-top:100px;text-align:center}.el-alert[data-v-520b2e65]{width:500px;height:40px;margin:0 auto;line-height:40px}.el-alert .el-alert__title[data-v-520b2e65]{font-size:16px}.el-alert--info[data-v-520b2e65]{background-color:#2594d4}.page-bar[data-v-520b2e65]{margin:10px auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}",""])},ZzoA:function(t,o){t.exports="data:image/png;base64,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"},kN6X:function(t,o,i){"use strict";function e(t){i("7hyO"),i("+740")}Object.defineProperty(o,"__esModule",{value:!0});var a=i("l5FH"),n=i("BDy2"),s=i("VU/8"),r=e,d=s(a.a,n.a,r,"data-v-520b2e65",null);o.default=d.exports},l5FH:function(t,o,i){"use strict";o.a={data:function(){return{loading:!0,shopinfo:[],isActive:!1,prodType:[{code:"",name:"所有"},{code:"10",name:"专利申请"},{code:"9",name:"版权保护"},{code:"8",name:"商标注册"},{code:"1",name:"代理记账"},{code:"6",name:"企业社保"},{code:"5",name:"公司变更"},{code:"2",name:"税务代办"},{code:"7",name:"个人社保"},{code:"4",name:"公司注册"},{code:"3",name:"审计报告"}],shopSort:[{sort:1,name:"综合排序"},{sort:2,name:"价格"},{sort:3,name:"接单数"}],ajdata:{start:0,limit:8,productTypeCode:"",regionId:"",sort:""},proi:0,sori:0,placeholders:{province:"--- 省 ---",city:"--- 市 ---",area:"--- 区 ---"},cur:1,pageSize:0}},methods:{pageChange:function(t){this.cur=t,this.ajdata.start=(t-1)*this.ajdata.limit,this.loading=!0,this.getShop()},onSelected:function(t){t?(this.ajdata.regionId=t.area.code,this.loading=!0,this.getShop()):console.error("VDistpicker Error.")},clearls:function(t){t.code||(this.ajdata.regionId="",this.loading=!0,this.getShop())},getShop:function(){var t=this;this.$ajax.post("/xinda-api/provider/grid",this.ajdata,{}).then(function(o){t.shopinfo=o.data.data,t.pageSize=o.data.pageSize;for(var i=0;i<t.shopinfo.length;i++)t.shopinfo[i].productTypes=t.shopinfo[i].productTypes.split(",");t.loading=!1}).catch(function(t){console.error("axios error",t)})},rate:function(t,o){var i;return i=0==o?"暂无评价":Math.round(t/o*1e4)/100+"%",i},enter:function(t){this.$router.push({path:"/shop",query:{id:t}})},imgurl:function(t){var o;return o="/"==t.substr(0,1)?"http://115.182.107.203:8088/xinda/pic"+t:t,o},proc:function(t,o){this.proi=t,this.ajdata.productTypeCode=o,this.getShop()},sorc:function(t,o){this.sori=t,this.ajdata.sort=o,this.getShop()}},created:function(){this.$isPC||this.$router.push("/shoplistweb"),this.getShop()}}}});