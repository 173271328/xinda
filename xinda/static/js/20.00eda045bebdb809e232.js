webpackJsonp([20],{"4hj+":function(o,t,e){var i=e("PYPe");"string"==typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);e("rjj0")("531ae3e4",i,!0)},"7bxy":function(o,t,e){"use strict";function i(o){e("4hj+")}Object.defineProperty(t,"__esModule",{value:!0});var r=e("CpD4"),s=e("Z0bo"),n=e("VU/8"),a=i,l=n(r.a,s.a,a,null,null);t.default=l.exports},CpD4:function(o,t,e){"use strict";t.a={created:function(){var o=this;this.$isPC&&(this.$router.push({path:"/shop",query:{id:this.$route.query.id}}),window.location.reload());var t={id:this.$route.query.id};this.$ajax.post("/xinda-api/provider/detail",t,{}).then(function(t){o.shopinfo=t.data.data,o.getServCont()}).catch(function(o){console.error("axios error",o)})},data:function(){return{shopinfo:{providerImg:"",businessCertPath:""},activeName:"first",start:0,limit:0,contentList:[],all:!1,bkshow:!1}},methods:{logoImg:function(o){return"/"==o.substr(0,1)?"http://115.182.107.203:8088/xinda/pic"+o:o},getServCont:function(){var o=this;this.limit+=6,this.$indicator.open();var t={start:this.start,limit:this.limit,providerId:this.$route.query.id};this.$ajax.post("/xinda-api/product/package/grid",t,{}).then(function(t){o.contentList=t.data.data,setTimeout(function(){o.$indicator.close()},1e3),o.all=o.limit>o.contentList.length}).catch(function(o){console.error("axios error",o)})},scrollMethod:function(){var o=document.documentElement.scrollHeight||document.body.scrollHeight;(document.documentElement.clientHeight||document.body.clientHeight)+(document.documentElement.scrollTop||document.body.scrollTop)===o&&this.limit===this.contentList.length&&this.$route.path.indexOf("shopweb")>-1&&this.getServCont()}},mounted:function(){window.addEventListener("scroll",this.scrollMethod)}}},PYPe:function(o,t,e){t=o.exports=e("FZ+f")(!1),t.push([o.i,".webshop{margin:5%;text-align:center;font-size:.14rem}.webshop img{padding-top:.3rem;max-width:100%}.webshop h5{padding:.1rem;font-size:.2rem}.webshop p{padding:.2rem 0;text-align:left;line-height:2}.webmoduleTitle{height:.38rem;border-bottom:2px solid #2693d4;line-height:.38rem;margin:.2rem 0}.webmoduleTitle h6{padding-left:.2rem;font-size:.2rem;font-weight:400}.Shopboxbody{overflow:hidden;margin:0 auto 1rem;width:90%}.Shopboxbody a{text-decoration:none;color:#000}.Shopboxbody .shopBox{padding:.2rem 0;border-bottom:1px solid #ccc;overflow:hidden;font-size:.13rem}.Shopboxbody .shopBox .boxleft{float:left;margin-right:.12rem;width:.9rem;line-height:.9rem;height:.9rem;text-align:center;vertical-align:middle;border:1px solid #ccc}.Shopboxbody .shopBox .boxleft img{max-width:100%;vertical-align:middle}.Shopboxbody .shopBox .boxright{position:relative;text-align:left;line-height:1.5;font-size:.12rem}.Shopboxbody .shopBox .boxright h3{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Shopboxbody .shopBox .boxright div{margin-bottom:.06rem}.Shopboxbody .shopBox .boxright>:first-child{font-size:.16rem;font-weight:700}.Shopboxbody .shopBox .boxright p{font-size:.13rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.Shopboxbody .shopBox .boxright .iaddress{margin:.12rem;font-size:.1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Shopboxbody .shopBox .boxright .price{position:absolute;right:0;bottom:-.05rem}.Shopboxbody .shopBox .boxright .price span{font-size:.18rem;color:red}.Shopboxbody .all{margin-top:.2rem;font-size:.16rem;color:#999;text-align:center}",""])},Z0bo:function(o,t,e){"use strict";var i=function(){var o=this,t=o.$createElement,e=o._self._c||t;return o.$isPC?o._e():e("div",[e("div",{staticClass:"webshop"},[e("div",[e("img",{attrs:{src:o.logoImg(o.shopinfo.providerImg),alt:"logo"}})]),o._v(" "),e("h5",[o._v(o._s(o.shopinfo.name))]),o._v(" "),e("p",[o._v(o._s(o.shopinfo.providerInfo))])]),o._v(" "),o._m(0),o._v(" "),e("div",{staticClass:"Shopboxbody"},[o._l(o.contentList,function(t,i){return[e("a",{key:t.id,attrs:{href:"#/shdetail?sid="+t.id}},[e("div",{key:t.id,staticClass:"shopBox"},[e("div",{staticClass:"boxleft"},[e("img",{attrs:{src:o.logoImg(t.providerImg)}})]),o._v(" "),e("div",{staticClass:"boxright"},[e("h3",[o._v(o._s(t.serviceName))]),o._v(" "),e("p",[o._v(o._s(t.serviceInfo))]),o._v(" "),e("div",{staticClass:"iaddress"},[e("i",{staticClass:"iconfont"},[o._v("")]),o._v(o._s(t.regionName))]),o._v(" "),e("div",{staticClass:"price"},[e("span",[o._v("￥"+o._s(t.price/100))]),o._v("元")])])])])]}),o._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:o.all,expression:"all"}],staticClass:"all"},[o._v("已加载完所有产品")])],2)])},r=[function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"webmoduleTitle"},[e("h6",[o._v("所有服务")])])}],s={render:i,staticRenderFns:r};t.a=s}});