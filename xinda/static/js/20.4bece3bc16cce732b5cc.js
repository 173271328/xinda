webpackJsonp([20],{"7QIo":function(o,e,i){var t=i("Ex5t");"string"==typeof t&&(t=[[o.i,t,""]]),t.locals&&(o.exports=t.locals),i("rjj0")("77ce4a48",t,!0)},"7bxy":function(o,e,i){"use strict";function t(o){i("7QIo")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("CpD4"),A=i("Z0bo"),r=i("VU/8"),s=t,h=r(n.a,A.a,s,null,null);e.default=h.exports},CpD4:function(o,e,i){"use strict";e.a={created:function(){var o=this;this.$isPC&&(this.$router.push({path:"/shop",query:{id:this.$route.query.id}}),window.location.reload());var e={id:this.$route.query.id};this.$ajax.post("/xinda-api/provider/detail",e,{}).then(function(e){o.shopinfo=e.data.data,o.getServCont()}).catch(function(o){console.error("axios error",o)})},data:function(){return{shopinfo:{providerImg:"",businessCertPath:""},activeName:"first",start:0,limit:0,contentList:[],all:!1,bkshow:!1}},methods:{logoImg:function(o){return"/"==o.substr(0,1)?"http://115.182.107.203:8088/xinda/pic"+o:o},getServCont:function(){var o=this;this.limit+=6,this.$indicator.open();var e={start:this.start,limit:this.limit,providerId:this.$route.query.id};this.$ajax.post("/xinda-api/product/package/grid",e,{}).then(function(e){o.contentList=e.data.data,o.$indicator.close(),o.all=o.limit>o.contentList.length}).catch(function(o){console.error("axios error",o)})},scrollMethod:function(){var o=document.body.scrollHeight;document.documentElement.clientHeight+document.body.scrollTop===o&&this.limit===this.contentList.length&&this.$route.path.indexOf("shopweb")>-1&&this.getServCont()}},mounted:function(){window.addEventListener("scroll",this.scrollMethod)}}},Ex5t:function(o,e,i){e=o.exports=i("FZ+f")(!0),e.push([o.i,".webshop{margin:5%;text-align:center;font-size:.14rem}.webshop img{padding-top:.3rem;max-width:100%}.webshop h5{padding:.1rem;font-size:.2rem}.webshop p{padding:.2rem 0;text-align:left;line-height:2}.webmoduleTitle{height:.38rem;border-bottom:2px solid #2693d4;line-height:.38rem;margin:.2rem 0}.webmoduleTitle h6{padding-left:.2rem;font-size:.2rem;font-weight:400}.Shopboxbody{overflow:hidden;margin:0 auto 1rem;width:90%}.Shopboxbody a{text-decoration:none;color:#000}.Shopboxbody .shopBox{padding:.2rem 0;border-bottom:1px solid #ccc;overflow:hidden;font-size:.13rem}.Shopboxbody .shopBox .boxleft{float:left;margin-right:.12rem;width:.9rem;line-height:.9rem;height:.9rem;text-align:center;vertical-align:middle;border:1px solid #ccc}.Shopboxbody .shopBox .boxleft img{max-width:100%;vertical-align:middle}.Shopboxbody .shopBox .boxright{position:relative;text-align:left;line-height:1.5;font-size:.12rem}.Shopboxbody .shopBox .boxright h3{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Shopboxbody .shopBox .boxright div{margin-bottom:.06rem}.Shopboxbody .shopBox .boxright>:first-child{font-size:.16rem;font-weight:700}.Shopboxbody .shopBox .boxright p{font-size:.13rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.Shopboxbody .shopBox .boxright .address{margin:.12rem;font-size:.1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Shopboxbody .shopBox .boxright .price{position:absolute;right:0;bottom:-.05rem}.Shopboxbody .shopBox .boxright .price span{font-size:.18rem;color:red}.Shopboxbody .all{margin-top:.2rem;font-size:.16rem;color:#999;text-align:center}","",{version:3,sources:["D:/Documents/_FEWKSPACE/_workspace/_xinda-proj/xinda/src/views/goods_shop/mmShopweb.vue"],names:[],mappings:"AACA,SACE,UAAW,AACX,kBAAmB,AACnB,gBAAkB,CACnB,AACD,aACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,YACE,cAAe,AACf,eAAiB,CAClB,AACD,WACE,gBAAiB,AACjB,gBAAiB,AACjB,aAAe,CAChB,AACD,gBACE,cAAe,AACf,gCAAiC,AACjC,mBAAoB,AACpB,cAAgB,CACjB,AACD,mBACE,mBAAoB,AACpB,gBAAiB,AACjB,eAAiB,CAClB,AACD,aACE,gBAAiB,AACjB,mBAAoB,AACpB,SAAW,CACZ,AACD,eACE,qBAAsB,AACtB,UAAY,CACb,AACD,sBACE,gBAAiB,AACjB,6BAA8B,AAC9B,gBAAiB,AACjB,gBAAkB,CACnB,AACD,+BACE,WAAY,AACZ,oBAAqB,AACrB,YAAa,AACb,kBAAmB,AACnB,aAAe,AACf,kBAAmB,AACnB,sBAAuB,AACvB,qBAAuB,CACxB,AACD,mCACE,eAAgB,AAChB,qBAAuB,CACxB,AACD,gCACE,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,gBAAkB,CACnB,AACD,mCACE,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CACrB,AACD,oCACE,oBAAsB,CACvB,AACD,6CACE,iBAAkB,AAClB,eAAiB,CAClB,AACD,kCACE,iBAAkB,AAClB,gBAAiB,AACjB,uBAAwB,AACxB,oBAAqB,AACrB,4BAA6B,AAC7B,oBAAsB,CACvB,AACD,yCACE,cAAe,AACf,gBAAiB,AACjB,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CACrB,AACD,uCACE,kBAAmB,AACnB,QAAS,AACT,cAAiB,CAClB,AACD,4CACE,iBAAkB,AAClB,SAAY,CACb,AACD,kBACE,iBAAmB,AACnB,iBAAkB,AAClB,WAAY,AACZ,iBAAmB,CACpB",file:"mmShopweb.vue",sourcesContent:["\n.webshop {\n  margin: 5%;\n  text-align: center;\n  font-size: .14rem;\n}\n.webshop img {\n  padding-top: .3rem;\n  max-width: 100%;\n}\n.webshop h5 {\n  padding: .1rem;\n  font-size: .2rem;\n}\n.webshop p {\n  padding: .2rem 0;\n  text-align: left;\n  line-height: 2;\n}\n.webmoduleTitle {\n  height: .38rem;\n  border-bottom: 2px solid #2693d4;\n  line-height: .38rem;\n  margin: .2rem 0;\n}\n.webmoduleTitle h6 {\n  padding-left: .2rem;\n  font-size: .2rem;\n  font-weight: 400;\n}\n.Shopboxbody {\n  overflow: hidden;\n  margin: 0 auto 1rem;\n  width: 90%;\n}\n.Shopboxbody a {\n  text-decoration: none;\n  color: #000;\n}\n.Shopboxbody .shopBox {\n  padding: .2rem 0;\n  border-bottom: 1px solid #ccc;\n  overflow: hidden;\n  font-size: .13rem;\n}\n.Shopboxbody .shopBox .boxleft {\n  float: left;\n  margin-right: .12rem;\n  width: .9rem;\n  line-height: .9rem;\n  height: 0.9rem;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid #ccc;\n}\n.Shopboxbody .shopBox .boxleft img {\n  max-width: 100%;\n  vertical-align: middle;\n}\n.Shopboxbody .shopBox .boxright {\n  position: relative;\n  text-align: left;\n  line-height: 1.5;\n  font-size: .12rem;\n}\n.Shopboxbody .shopBox .boxright h3 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Shopboxbody .shopBox .boxright div {\n  margin-bottom: .06rem;\n}\n.Shopboxbody .shopBox .boxright > :nth-child(1) {\n  font-size: .16rem;\n  font-weight: 700;\n}\n.Shopboxbody .shopBox .boxright p {\n  font-size: .13rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.Shopboxbody .shopBox .boxright .address {\n  margin: .12rem;\n  font-size: .1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Shopboxbody .shopBox .boxright .price {\n  position: absolute;\n  right: 0;\n  bottom: -0.05rem;\n}\n.Shopboxbody .shopBox .boxright .price span {\n  font-size: .18rem;\n  color: #F00;\n}\n.Shopboxbody .all {\n  margin-top: 0.2rem;\n  font-size: .16rem;\n  color: #999;\n  text-align: center;\n}\n"],sourceRoot:""}])},Z0bo:function(o,e,i){"use strict";var t=function(){var o=this,e=o.$createElement,i=o._self._c||e;return o.$isPC?o._e():i("div",[i("div",{staticClass:"webshop"},[i("div",[i("img",{attrs:{src:o.logoImg(o.shopinfo.providerImg),alt:"logo"}})]),o._v(" "),i("h5",[o._v(o._s(o.shopinfo.name))]),o._v(" "),i("p",[o._v(o._s(o.shopinfo.providerInfo))])]),o._v(" "),o._m(0),o._v(" "),i("div",{staticClass:"Shopboxbody"},[o._l(o.contentList,function(e,t){return[i("a",{key:e.id,attrs:{href:"#/shdetail?sid="+e.id}},[i("div",{key:e.id,staticClass:"shopBox"},[i("div",{staticClass:"boxleft"},[i("img",{attrs:{src:o.logoImg(e.providerImg)}})]),o._v(" "),i("div",{staticClass:"boxright"},[i("h3",[o._v(o._s(e.serviceName))]),o._v(" "),i("p",[o._v(o._s(e.serviceInfo))]),o._v(" "),i("div",{staticClass:"address"},[i("i",{staticClass:"iconfont"},[o._v("")]),o._v(o._s(e.regionName))]),o._v(" "),i("div",{staticClass:"price"},[i("span",[o._v("￥"+o._s(e.price/100))]),o._v("元")])])])])]}),o._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:o.all,expression:"all"}],staticClass:"all"},[o._v("已加载完所有产品")])],2)])},n=[function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("div",{staticClass:"webmoduleTitle"},[i("h6",[o._v("知识产权")])])}],A={render:t,staticRenderFns:n};e.a=A}});