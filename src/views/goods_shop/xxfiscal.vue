<template>
    <div>
        <div class="fibg clearfix" v-if="$isPC">
            <div class="fiscal" v-loading="load1">
                <p class="top">&nbsp;首页&nbsp;/&nbsp;{{chName}}</p>
                <div class="fiscal_menu">
                    <div class="list">
                        <div class="list1">
                            <div class="list1l">
                                <b>服务分类</b>
                            </div>
                            <div class="list1r" v-for="(tab,k,i) in tabs2" :key="i">
                                <div class="list1r2" :class="{list1r1:code==tab.code}" @click="click(tab.code)">
                                    <p>{{tab.name}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="list2">
                            <div class="list2l">
                                <b>类型</b>
                            </div>
                            <div class="list2div">
                                <div class="list2r" :class="{list1r1:tab.id==pid}" v-for="(tab,k,i) in tabs3" :key="i" @click="click2(tab.id)">
                                    <div class="list1r2">
                                        {{tab.name}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list3">
                            <div class="list3l">
                                <b>服务区域</b>
                            </div>
                            <div class="zone">
                                <select name="" id="">
                                    <option value="">北京</option>
                                </select>
                            </div>
                            <div class="zone1">
                                <select name="" id="">
                                    <option value="">北京市</option>
                                </select>
                            </div>
                            <div class="zone2">
                                <select name="" id="">
                                    <option value="">朝阳区</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wares">
                    <div class="wares_t1" :class="{wares_t3:on3}" @click="click3" onselectstart="return false">
                        <p>综合排序</p>
                    </div>
                    <div class="wares_t2" :class="{wares_t3:on4}" @click="click4" onselectstart="return false">
                        <p>价格&nbsp;{{arrow[ai]}}</p>
                    </div>
                </div>
                <div class="wares_list">
                    <div class="list_top">
                        <p>商品</p>
                        <span>价格</span>
                    </div>
                    <el-alert v-if="err" :title="errmsg" type="error" show-icon></el-alert>
                    <el-alert v-if="!refiscal.length" title="数据为空，请稍后再试。" type="info" show-icon></el-alert>
                    <div v-loading="loading">
                        <div v-for="(item,i) in refiscal" class="wares_list_m" :key="i">
                            <div class="imgdiv">
                                <a :href='"#/shdetail?sid="+item.id+"&tid="+chId+"&code="+pdata.productTypeCode'><img :src="relistimg+item.providerImg" alt=""></a>
                            </div>
                            <a :href='"#/shdetail?sid="+item.id+"&tid="+chId+"&code="+pdata.productTypeCode'>
                                <b>{{item.serviceName}}</b>
                            </a>
                            <a :href='"#/shdetail?sid="+item.id+"&tid="+chId+"&code="+pdata.productTypeCode'>
                                <p>{{item.serviceInfo}}</p>
                            </a>
                            <span class="gongsi">{{item.providerName}}</span>
                            <span class="dizhi">{{item.regionName}}</span>
                            <span class="money">￥&nbsp;{{fmtPrice(item.price)}}</span>
                            <div class="order_div">
                                <a href="javascript:;" class="order" @click="buy(item)">立即购买</a>
                            </div>
                            <div class="joincart_div">
                                <a href="javascript:;" class="joincart" @click="addCart(item)">加入购物车</a>
                            </div>
                        </div>
                    </div>

                    <v-page :curInx="cur" :pageSize="pageSize" :pageChange="pageChange" :totalShow="false"></v-page>
                </div>
            </div>
            <div class="advimg"><img src="../../assets/images/u684.png" alt="" class="right_img"></div>
        </div>
        <div class="xfibg clearfix" v-else>
            <div class="fiscal">
                <div class="xwares">
                    <i class="el-icon-arrow-left" @click="back"></i>
                    <div>
                        <div class="xwares_t1" :class="{wares_t3:on3}" @click="click3" onselectstart="return false">
                            <p>默认排序</p>
                        </div>
                        <div class="xwares_t2" :class="{wares_t3:on4}" @click="click4" onselectstart="return false">
                            <p>价格&nbsp;{{arrow[ai]}}</p>
                        </div>
                    </div>
                </div>
                <div class="xwares_list">
                    <el-alert v-if="err" :title="errmsg" type="error" show-icon></el-alert>
                    <el-alert v-if="!refiscal.length" title="数据为空，请稍后再试。" type="info" show-icon></el-alert>
                    <div>
                        <div v-for="(item,i) in refiscal" class="xwares_list_m" :key="i">
                            <div class="ximgdiv">
                                <a :href='"#/shdetail?sid="+item.id+"&tid="+chId+"&code="+pdata.productTypeCode'><img :src="relistimg+item.providerImg" alt=""></a>
                            </div>
                            <div class="rcnt">
                                <a :href='"#/shdetail?sid="+item.id+"&tid="+chId+"&code="+pdata.productTypeCode'>
                                    <b>{{item.serviceName}}</b>
                                </a>
                                <a :href='"#/shdetail?sid="+item.id+"&tid="+chId+"&code="+pdata.productTypeCode'>
                                    <p>{{item.serviceInfo}}</p>
                                </a>
                                <span class="xdizhi">
                                    <i class="iconfont">&#xe603;</i>{{dealRegion(item.regionName)}}</span>
                                <span class="xmoney">￥{{fmtPrice(item.price)}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="btm-p" v-if="!$isPC&&!loading&&refiscal.length">已加载完所有数据</p>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'fiscal',
    data() {
        return {
            load1: 1,
            loading: 1,
            tabs2: {},
            tabs3: {},
            refiscal: [],
            on3: 1,
            on4: 0,
            arrow: ['↿↾', '⇃⇂'],
            ai: 0,
            au: 1,
            err: 0,
            errmsg: '',
            itemInx: null,
            relistimg: 'http://115.182.107.203:8088/xinda/pic',
            chId: "2e110f0df53243c197fede52fba8e5d0",//财税服务
            chName: "财税服务",
            pageSize: 0,
            cur: 1,
            pdata: {
                start: 0,
                limit: 8,
                productTypeCode: "1",
                productId: "8a82f52b674543e298d2e5f685946e6e",
                sort: '',
            },
            code: '1',
            pid: '8a82f52b674543e298d2e5f685946e6e',
        }
    },
    computed: {
        ...mapGetters(['getCartnum'])
    },
    methods: {
        ...mapActions(['cartAction']),
        back() {
            window.history.back();
        },
        fmtPrice(p) {
            return (parseFloat(p) * 0.01).toFixed(2);
        },
        dealRegion(r) {
            return r.toString().substr(r.indexOf('-') + 1)
        },
        click(code) {
            this.code = this.pdata.productTypeCode = code;
            this.pid = this.pdata.productId = Object.values(this.tabs2[code].itemList)[0].id;
            this.load1 = 1;
            this.loading = 1;
            this.getChoose();
            this.getPack();
        },
        click2(pid) {
            this.pid = this.pdata.productId = pid;
            this.loading = 1;
            this.getPack();
        },
        click3() {
            !this.$isPC ? this.$indicator.open() : 0;
            this.on3 = 1;
            this.on4 = 0;
            this.pdata.sort = '';
            this.loading = 1;
            this.getPack();
        },
        click4() {
            !this.$isPC ? this.$indicator.open() : 0;
            this.loading = 1;
            if (this.on4 == 1) {
                if (this.au == 0) {
                    this.ai = 0;
                    this.au = 1;
                    this.pdata.sort = 2;
                    this.getPack();
                } else {
                    this.ai = 1;
                    this.au = 0;
                    this.pdata.sort = 3;
                    this.getPack();
                }

            } else {
                this.pdata.sort = 2;
                this.getPack();
            }
            this.on3 = 0;
            this.on4 = 1;
        },
        pageChange(curPage) {
            this.cur = curPage;
            this.pdata.start = (curPage - 1) * this.pdata.limit;
            this.getPack();
            window.scrollTo(0, 380);
        },
        getPack() {
            this.$ajax.post('/xinda-api/product/package/grid', this.pdata).then((res) => {
                if (res.data.data) {
                    this.pageSize = res.data.pageSize;
                    this.refiscal = res.data.data;
                    this.loading = 0;
                    !this.$isPC ? this.$indicator.close() : 0;
                } else {
                    this.err = 1;
                    this.errmsg = res.data.msg;
                    if (this.$isPC) {
                        this.$message({ type: 'warning', message: res.data.msg });
                    } else {
                        this.$toast(res.data.msg);
                    }
                }
            })
        },
        getChoose() {
            this.$ajax.post('/xinda-api/product/style/list').then((res) => {
                if (res.data.status == 1) {
                    this.chName = res.data.data[this.chId].name;
                    var tabs = res.data.data[this.chId].itemList;
                    var keys = Object.keys(tabs).sort((a, b) => tabs[a].showOrder - tabs[b].showOrder);
                    for (var k in keys) {
                        this.tabs2[tabs[keys[k]].code] = tabs[keys[k]];
                    }
                    this.tabs3 = this.tabs2[this.code].itemList;
                    this.load1 = 0;
                } else {
                    this.err = 1;
                    this.errmsg = res.data.msg;
                    this.$message({ type: 'warning', message: res.data.msg });
                }
            })
        },
        open(title, content, msg, path, query) {
            this.$alert(content, title, {
                confirmButtonText: '确定',
                lockScroll: false,
                callback: () => {
                    if (query) {
                        this.$message({ type: "info", message: msg, duration: 1000 });
                        setTimeout(() => this.$router.push({ path, query }), 1000);
                    } else {
                        this.$message({ type: "info", message: msg, duration: 1000 });
                        setTimeout(() => this.$router.push(path), 1000);
                    }
                }
            });
        },
        buy(item) {
            this.$ajax.post('/xinda-api/sso/login-info').then((userMsg) => {
                if (userMsg.data.status == 0) {
                    this.open('提示', '未登录，请先登录', '跳转至登录界面', '/Logon', { redirect: this.$route.fullPath });
                } else {
                    this.buyNow(item);
                }
            }).catch((error) => {
                console.log('error', error);
            });
        },
        buyNow(item) {
            this.$ajax.post(
                '/xinda-api/cart/add',
                { id: item.id, num: 1 },
            ).then(res => {
                if (res.data.status == 1) {
                    this.$ajax.post(
                        '/xinda-api/cart/submit'
                    ).then(res => {
                        if (res.data.status == 1) {
                            this.$router.push({ path: '/pay', query: { bno: res.data.data } })
                        } else {
                            this.$message.warning(res.data.msg);
                        }
                    }).catch(res => {
                        console.error('Axios: ', res);
                    });
                } else {
                    this.$message({ type: 'warning', message: res.data.msg, duration: 1000 });
                }
            }).catch(res => {
                console.error('Axios: ', res);
            });
        },
        addCart(item) {
            this.$ajax.post(
                '/xinda-api/cart/add',
                { id: item.id, num: 1 },
            ).then(res => {
                if (res.data.status == 1) {
                    this.$message({ type: 'success', message: res.data.msg, duration: 1000 });
                    this.$ajax.post('/xinda-api/cart/cart-num').then(res => {
                        if (res.data.status == 1) {
                            this.cartAction(res.data.data.cartNum);
                        } else {
                            this.$message({ type: 'warning', message: res.data.msg, duration: 1000 });
                        }
                    });
                } else {
                    this.$message({ type: 'warning', message: res.data.msg, duration: 1000 });
                }
            }).catch(res => {
                console.error('Axios: ', res);
            });
        },
    },
    created() {
        !this.$isPC ? this.$indicator.open() : 0;
        if (this.$route.query.code) {
            this.chId = this.$route.query.id || this.chId;
            this.code = this.$route.query.code || this.code;
            this.pdata.productTypeCode = this.$route.query.code || this.pdata.productTypeCode;
            if (this.$route.query.code && !this.$route.query.pid) {
                this.pid = '';
                this.pdata.productId = '';
            } else if (this.$route.query.pid) {
                this.pid = this.$route.query.pid || this.pid;
                this.pdata.productId = this.$route.query.pid || this.pdata.productId;
            }
            this.$isPC ? this.getChoose() : 0;
            this.getPack();
        }
    },
    watch: {
        $route(val) {
            if (this.$route.query.code) {
                this.tabs2 = {};
                this.tabs3 = {};
                this.chId = val.query.id;
                this.code = this.pdata.productTypeCode = val.query.code;
                this.pid = this.pdata.productId = val.query.pid;
                this.load1 = 1;
                this.getChoose();
                this.getPack();
            }
        }
    },
}
</script>

<style lang="less" scoped>
.fibg {
    width: 1200px;
    margin: 25px auto;
}

a {
    text-decoration: none;
    color: #000;
}

.advimg {
    float: right;
    margin-top: 29px;
}

.top {
    height: 20px;
    margin-bottom: 10px;
}

.fiscal {
    float: left;
    .fiscal_menu {
        .list {
            width: 900px;
            border: 1px solid #bfbfbf;
            margin-top: 13px;
            background-color: #f2f2f2;
            .list1 {
                width: 100%px;
                height: 43px;
                border-bottom: 1px solid #bfbfbf;
                display: flex;
                .list1l {
                    width: 99px;
                    height: 100%;
                    border-right: 1px solid #bfbfbf;
                    b {
                        display: block;
                        text-align: center;
                        line-height: 3;
                    }
                }
                .list1r {
                    display: flex;

                    .list1r1 {
                        background-color: #169bd5;
                        color: white;
                    }
                    .list1r2 {
                        width: 97px;
                        height: 33px;
                        margin-left: 18px;
                        margin-top: 6px;
                        line-height: 33px;
                        border-radius: 5px;
                        text-align: center;
                        line-height: 0;
                        transition: .3s ease-in-out;
                        p {
                            margin: 1em;
                        }
                    }

                    .list1r2:hover {
                        width: 97px;
                        height: 33px;
                        background-color: #169bd5;
                        margin-left: 18px;
                        margin-top: 6px;
                        border-radius: 5px;
                        text-align: center;
                        line-height: 0;
                        color: white;
                        cursor: pointer;
                    }
                }
            }
            .list2 {
                display: flex;
                width: 100%;
                height: auto;
                border-bottom: 1px solid #bfbfbf;
                .list2div {
                    display: flex;
                    flex-wrap: wrap;
                    width: 800px;
                }
                .list2l {
                    width: 99px;
                    height: auto;
                    text-align: center;
                    border-right: 1px solid #bfbfbf;
                    b {
                        line-height: 3;
                    }
                }
                .list2r {
                    width: auto;
                    height: 25px;
                    margin: 5px 0 5px 18px;
                    border-radius: 5px;
                    text-align: center;
                    line-height: 25px;
                    padding: 5px 10px;
                    transition: .3s ease-in-out;
                }
                .list1r1 {
                    background-color: #169bd5;
                    color: white;
                }
                .list2r:hover {
                    background-color: #169bd5;
                    color: white;
                    cursor: pointer;
                }
            }

            .list3 {
                width: 100%px;
                height: 43px;
            }
            .zone {
                display: block;
                margin-top: -30px;
                margin-left: 118px;
                select {
                    width: 65px;
                    height: 23px;
                }
            }
            .zone1 {
                display: block;
                margin-top: -24px;
                margin-left: 195px;
                select {
                    width: 65px;
                    height: 23px;
                }
            }
            .zone2 {
                display: block;
                margin-top: -23px;
                margin-left: 272px;
                select {
                    width: 65px;
                    height: 23px;
                }
            }
            .list3l {
                width: 99px;
                height: 100%;
                border-right: 1px solid #bfbfbf;
                b {
                    display: block;
                    text-align: center;
                    line-height: 3;
                }
            }
        }
    }
    .wares {
        width: 900px;
        border: 1px solid #e5e5e5;
        background-color: #f7f7f7;
        display: flex;
        margin-top: 12px;
        .wares_t1,
        .wares_t2 {
            width: 105px;
            height: 45px;
            line-height: 45px;
            cursor: pointer;
            background-color: #f7f7f7;
            p {
                text-align: center;
            }
        }
        .wares_t3 {
            position: relative;
            background-color: #2693D4;
            p {
                color: white;
            }
            &:after {
                position: absolute;
                bottom: -7px;
                left: 40%;
                content: '';
                width: 0;
                height: 0;
                border-left: 7px solid transparent;
                border-right: 7px solid transparent;
                border-top: 7px solid #2693D4;
            }
        }
    }
    .wares_list {
        width: 880px; // height: 810px;
        margin-bottom: 70px;
        padding: 0 10px;
        border: 1px solid #e5e5e5;
        border-top: 0;
        .list_top {
            height: 50px;
            line-height: 50px;
            p {
                float: left;
                margin-left: 23px;
            }
            span {
                float: right;
                margin-right: 23px;
            }
        }
        .wares_list_m {
            width: 100%;
            padding: 10px 0;
            border-top: 1px solid #e5e5e5;
            margin-bottom: 15px;
            img {
                margin-top: 23px;
                width: 100%;
            }
            .imgdiv {
                width: 109px;
                height: 108px;
                text-align: center;
                border: 1px solid #ccc;
            }
            b {
                margin-left: 130px;
                display: block;
                margin-top: -105px;
                line-height: 2;
            }
            p {
                width: 540px;
                line-height: 2;
                margin-left: 130px;
            }
            .gongsi {
                line-height: 2;
                margin-left: 130px;
            }
            .dizhi {
                margin-left: 57px;
            }
            .money {
                display: block;
                margin-left: 721px;
                margin-top: -90px;
                font-size: 27px;
                color: #ff4740;
            }
            .order_div {
                width: 93px;
                height: 26px;
                background-color: #39a4dd;
                margin-left: 670px;
                border-radius: 5px;
                margin-top: 23px;
                .order {
                    font-size: 13px;
                    color: white;
                    text-decoration: none;
                    margin-left: 20px;
                }
            }
            .joincart_div {
                width: 93px;
                height: 26px;
                background-color: #39a4dd;
                margin-left: 780px;
                margin-top: -26px;
                border-radius: 5px;
                .joincart {
                    font-size: 13px;
                    color: white;
                    text-decoration: none;
                    margin-left: 15px;
                }
            }
        }
    }
    .right_img {
        margin-left: 1140px;
        margin-top: -845px;
        display: block;
    }
}

.xwares {
    display: flex;
    justify-content: center;
    margin-top: 12px;
    margin-bottom: .1rem;
    >div {
        display: flex;
        justify-content: center;
        border: 1px solid #2693D4;
        border-radius: .05rem;
    }
    i {
        position: absolute;
        top: 4%;
        left: 4%;
    }
    .xwares_t1,
    .xwares_t2 {
        width: 1.05rem;
        height: .4rem;
        line-height: .4rem;
        cursor: pointer;
        p {
            text-align: center;
        }
    }
    .xwares_t3 {
        position: relative;
        background-color: #2693D4;
        p {
            color: white;
        }
        &:after {
            position: absolute;
            bottom: -7px;
            left: 40%;
            content: '';
            width: 0;
            height: 0;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 7px solid #2693D4;
        }
    }
    .wares_t3 {
        background: #2693D4;
        color: #fff;
    }
}

.xfibg {
    margin: 0px auto;
    font-size: 0.16rem;
    .fiscal {
        width: 100%;
    }
}

.xwares_list {
    margin-left: .15rem;
    border-bottom: 1px solid #e5e5e5;
    .xwares_list_m {
        display: flex;
        width: 91%;
        min-height: 1.1rem;
        padding: 10px 0;
        border-top: 1px solid #e5e5e5;
        img {
            width: 100%;
        }
        .ximgdiv {
            display: flex;
            align-items: center;
            min-width: 15vh;
            max-width: 15vh;
            height: 15vh;
            margin-right: .1rem;
            text-align: center;
            border: 1px solid #ccc;
        }
        b {
            width: 1.9rem;
            display: block;
            line-height: 2;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        p {
            font-size: .13rem;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .xdizhi {
            font-size: .13rem;
        }
        .xmoney {
            margin-left: .15rem;
            font-size: 27px;
            color: #ff4740;
            font-weight: 600;
        }
    }
    .xwares_list_m:first-child {
        border-top: 0;
    }
}

.btm-p {
    margin-top: 40px;
    margin-bottom: 100px;
    font-size: .16rem;
    color: #666;
    text-align: center;
}

.el-alert {
    width: 300px;
    margin: 50px auto;
}

.page-bar {
    margin-top: 40px;
    text-align: center;
}

.clearfix {
    *zoom: 1;
}

.clearfix:before,
.clearfix:after {
    display: table;
    line-height: 0;
    content: "";
}

.clearfix:after {
    clear: both;
}
</style>
<style lang="less">
.mint-indicator-wrapper {
    width: 1rem;
    height: 1rem;
    z-index: 1;
}

.mint-spinner-snake {
    position: absolute;
    top: 30%;
    left: 30%;
}
</style>
