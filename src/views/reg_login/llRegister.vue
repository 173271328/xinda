<template>
    <div class="Register">
        <div class="mobileBG" v-if="!$isPC"></div>
        <div class="lineLogoMobile" v-if="!$isPC" @click="backHistory">
            <div class="iconfont">
                &#xe61f;
            </div>
            <p>注册</p>
        </div>
        <div class="lineLogo" v-if="$isPC">
            <div class="LinePosition">
                <a href="#/" class="Logo">
                    <img src="../../assets/images/QQ图片20170517185752.png" alt="">
                    <p>信达</p>
                </a>
                <div class="setget">
                    <!-- 这是一条分隔线 -->
                </div>
                <div class="wel">
                    欢迎注册
                </div>
                <div v-if="$isPC">
                    <el-alert class="errorEl" :title="errormsg" type="error" :closable="false" show-icon v-if="errorShow">
                    </el-alert>
                    <el-alert class="successEl" :title="successmsg" type="success" :closable="false" show-icon v-if="successShow">
                    </el-alert>
                </div>

            </div>
        </div>
        <div class="mainBody">
            <div class="registerLeft">
                <input type="number" placeholder="请输入手机号码" v-model="phone" @focus="noError" @blur="phoneBlur">
                <input type="text" placeholder="请输入图片验证码" v-model="imgCode" @focus="noErr">
                <div class="verCode">
                    <!-- 这里是验证码图片 -->
                    <img :src="src" alt="" @click="F5">
                </div>
                <input type="text" class="VerCode" placeholder="请输入短信验证码" v-model="messageTest" @focus="noErr">
                <button class="clickGet" @click="getMessage">{{getMessageBtn}}</button>
                <div class="area" v-if="!$isPC">
                    <button v-show="btshow" @click="selectArea">点击选择地区</button>
                    <button v-show="seshow" class="selreg" @click="selectArea">{{selReg}}</button>
                    <transition name="el-zoom-in-bottom">
                        <v-distpicker v-show="dpshow" type="mobile" class="addr" @selected="onSelected"></v-distpicker>
                    </transition>
                    <!-- <select name="" id="province" @change="ChaProvinceEl" v-model="provinceVal">
                                <option value="all" selected>省</option>
                                <option v-for="(province,i) in ProvinceAll" :value="province.item_code" :key="i">{{province.item_name}}</option>
                            </select>
                            <select name="" id="city" @change="ChaCityEl" v-model="cityVal">
                                <option value="all" selected>市</option>
                                <option v-for="(city,i) in CityAll" :value="city.item_code" :key="i">{{city.item_name}}</option>
                            </select>
                            <select name="" id="district" v-model="districtVal">
                                <option value="all" selected>区</option>
                                <option v-for="(district,i) in DistrictAll" :value="district.item_code" :key="i">{{district.item_name}}</option>
                            </select> -->
                </div>
                <div class="area" v-if="$isPC">
                    <v-distpicker v-if="dpshow" class="" @selected="onSelected"></v-distpicker>
                </div>
                <input type="password" placeholder="请设置密码" v-model="PSD" @focus="noErr" @blur="testPassword">
                <div class="error">
                    <!-- 这里显示错误信息 -->
                    <!-- 错误信息已经放到Element ui中 -->
                </div>
                <button class="registerNow" @click="registeNow">立即注册</button>
                <div class="agreement">
                    <p>注册即同意遵守</p>
                    <a>《服务协议》</a>
                </div>
            </div>
            <div class="setget" v-if="$isPC">
                <!-- 这是一个用来间隔的div -->
            </div>
            <div class="registerRight" v-if="$isPC">
                <p>已有帐号？</p>
                <p>
                    <a href="#/Logon">立即登录>></a>
                </p>
                <div class="getRight">
                    <img src="../../assets/getRight.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MD5 from 'js-md5';
import VDistpicker from 'v-distpicker';
export default {
    components: {
        'v-distpicker': VDistpicker
    },
    created() {
        // this.$ajax.get('static/city.json').then(res => {
        //     console.log(res);
        //     // this.cityJson = res.data.cityJson;
        //     // this.getProvinceData();
        // }).catch(err => {
        //     console.error('Axios error:' + err);
        // });
        onkeydown = (e) => {
            if (e.keyCode == 13) {
                this.registeNow();
            }
        }
    },
    data() {
        return {
            btshow: true,
            dpshow: this.$isPC ? true : false,
            selReg: '',
            errormsg: '',//显示错误信息
            successmsg: '',//注册成功显示信息
            phone: '',//绑定手机号的Value值
            imgCode: '',//图片验证码的Value值
            messageTest: '',//短信验证码的Value值
            PSD: '',//密码输入的Value值
            getMessageBtn: '点击获取',//点击获取按钮
            src: '/xinda-api/ajaxAuthcode',//图片获取地址
            errorShow: false,//错误信息
            successShow: false,//注册成功信息
            //下面是省市区三级联动的所有应用元素👇
            cityJson: [],
            ProvinceAll: [],//所有的省元素
            provinceVal: 'all',//默认选中的省元素
            CityAll: [],//对应省元素的所有市元素
            cityVal: 'all',//默认选中的市元素
            DistrictAll: [],//对应区元素的所有区元素
            districtVal: 'all',//默认选中的区元素
        }
    },
    methods: {
        selectArea() {
            this.dpshow = true;
        },
        onSelected(data) {
            if (data) {
                this.selReg = data.province.value + '-' + data.city.value + '-' + data.area.value;
                this.districtVal = data.area.code;
                this.btshow = false;
                this.dpshow = this.$isPC ? true : false;
                this.seshow = true;
            }
        },
        noError() {
            this.errormsg = '';
            this.errorShow = false;
        },
        getMessage(e) {
            //点击获取短信验证码
            if (this.testPhone()) {
                var message = {
                    cellphone: this.phone,
                    smsType: 1,
                    imgCode: this.imgCode
                };
                this.$ajax.post('/xinda-api/register/sendsms', message, {}).then((fontMessage) => {
                    if (fontMessage.data.status == 1) {
                        this.successmsg = fontMessage.data.msg;
                        this.successShow = true;
                        if (!this.$isPC) {
                            this.$toast({
                                message: this.successmsg,
                                position: 'top',
                                duration: 5000
                            });
                        };
                        setTimeout(() => {
                            this.successShow = false;
                        }, 2000);
                        this.getMessageBtn = 59;
                        e.target.disabled = true;
                        e.target.style.backgroundColor = '#f1f1f1';
                        var timeLoop = setInterval(() => {
                            this.getMessageBtn -= 1;
                            if (this.getMessageBtn == 0) {
                                this.getMessageBtn = '点击获取';
                                e.target.disabled = false;
                                e.target.style.backgroundColor = '#fff';
                                this.F5();
                                clearInterval(timeLoop);
                            }
                        }, 1000);
                    } else {
                        this.errormsg = fontMessage.data.msg;
                        this.errorShow = true;
                        if (!this.$isPC) {
                            this.$toast({
                                message: this.errormsg,
                                position: 'top',
                                duration: 5000
                            });
                        };
                        this.F5();
                    }
                }).catch((error) => {
                    console.log('e', error);
                });
            }
        },
        F5() {//刷新验证码
            this.src = '/xinda-api/ajaxAuthcode?' + Math.random().toString().substr(2, 4);
        },
        noErr() {
            this.errormsg.indexOf('手机') == -1 ? this.noError() : 0;
            if (event.target.type == 'password') {
                this.testDistrict();
            }
        },
        // 验证手机号是否已被注册
        phoneBlur() {
            if (this.testPhone()) {
                this.$ajax.post('/xinda-api/register/valid-sms', {
                    cellphone: this.phone,
                    smsType: 1,
                    validCode: this.messageTest,
                }).then(rTP => {
                    // console.log('rTP: ', rTP);
                    if (rTP.data.status == -2) {
                        this.errormsg = rTP.data.msg;
                        this.errorShow = true;
                        if (!this.$isPC) {
                            this.$toast({
                                message: this.errormsg,
                                position: 'top',
                                duration: 5000
                            });
                        };
                    }
                }).catch((error) => {
                    console.log('error', error);
                });
            }
        },
        testPhone() {
            if (!this.phone) {
                this.errormsg = '请填写手机号码！';
                this.errorShow = true;
                if (!this.$isPC) {
                    this.$toast({
                        message: this.errormsg,
                        position: 'top',
                        duration: 5000
                    });
                };
                return false;
            } else {
                // 手机号本地校验正则
                var testPhone = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (!testPhone.test(this.phone)) {
                    this.errormsg = '请输入正确的11位手机号码！';
                    this.errorShow = true;
                    if (!this.$isPC) {
                        this.$toast({
                            message: this.errormsg,
                            position: 'top',
                            duration: 5000
                        });
                    };
                    return false;
                };
                return true;
            }
        },
        testPassword() {
            if (!this.PSD) {
                this.errormsg = '请填写密码！';
                this.errorShow = true;
                if (!this.$isPC) {
                    this.$toast({
                        message: this.errormsg,
                        position: 'top',
                        duration: 5000
                    });
                };
                return false;
            } else {
                // 密码本地校验正则
                var testPassword = /^(\w){6,20}$/;
                if (!testPassword.test(this.PSD)) {
                    this.errormsg = '密码不符合规范！';
                    this.errorShow = true;
                    if (!this.$isPC) {
                        this.$toast({
                            message: this.errormsg,
                            position: 'top',
                            duration: 5000
                        });
                    };
                    return false;
                };
                return true;
            }
        },
        testDistrict() {
            if (this.districtVal == 'all') {
                this.errormsg = '请选择正确的地区！';
                this.errorShow = true;
                if (!this.$isPC) {
                    this.$toast({
                        message: this.errormsg,
                        position: 'top',
                        duration: 5000
                    });
                };
                return false;
            }
            return true;
        },
        testCodeEmpty() {
            if (!this.imgCode || !this.messageTest) {
                this.errormsg = '请填写验证码！';
                this.errorShow = true;
                if (!this.$isPC) {
                    this.$toast({
                        message: this.errormsg,
                        position: 'top',
                        duration: 5000
                    });
                };
                return false;
            }
            return true;
        },
        registeNow() {
            this.testPhone() && this.testCodeEmpty() && this.testDistrict() && this.testPassword() ? this.validReg() : 0;
        },
        validReg() {
            var registerTP = {
                cellphone: this.phone,
                smsType: 1,
                validCode: this.messageTest,
            };
            this.$ajax.post('/xinda-api/register/valid-sms', registerTP, {}).then((rTP) => {
                // console.log('rtp', rTP);
                if (rTP.data.status == 1) {
                    this.goToRegister();
                } else {
                    this.errormsg = rTP.data.msg;
                    this.errorShow = true;
                    if (!this.$isPC) {
                        this.$toast({
                            message: this.errormsg,
                            position: 'top',
                            duration: 5000
                        });
                    };
                    this.F5();
                }
            }).catch((error) => {
                console.log('error', error);
            });
        },
        // 通过，开始注册
        goToRegister() {
            var shuju = {
                cellphone: this.phone,
                smsType: 1,
                validCode: this.messageTest,
                password: MD5(this.PSD),
                regionId: this.districtVal,
            };
            this.$ajax.post('/xinda-api/register/register', shuju, {}).then((canLog) => {
                // console.log(canLog);
                if (canLog.data.status == 1) {
                    this.successmsg = canLog.data.msg;
                    this.successShow = true;
                    if (!this.$isPC) {
                        this.$toast({
                            message: this.successmsg,
                            position: 'top',
                            duration: 5000
                        });
                    };
                    setTimeout(() => {
                        // 页面自动跳转到登录页
                        this.$router.push('/Logon');
                    }, 2000);
                } else {
                    this.errormsg = canLog.data.msg;
                    this.errorShow = true;
                    if (!this.$isPC) {
                        this.$toast({
                            message: this.errormsg,
                            position: 'top',
                            duration: 5000
                        });
                    };
                }
            }).catch((error) => {
                console.error(error);
            })
        },
        //👇👇👇👇👇👇👇👇👇👇👇👇省市区三级联动 纯手写源生js👇👇👇👇👇👇👇👇👇👇👇👇👇
        //获取省市区的select元素
        // var provinceEl = document.getElementById("province");
        // var cityEl = document.getElementById("city");
        // var districtEl = document.getElementById("district");
        //获取省元素
        // getProvinceData: function() {
        //     for (var i = 0; i < this.cityJson.length; i++) {
        //         if (this.cityJson[i].item_code.substr(2, 2) == "00") {
        //             this.ProvinceAll.push(this.cityJson[i]);
        //         }
        //     }
        // },
        // //添加省元素 ---→ 通过v-for遍历数组添加省元素

        // //根据省元素 添加/删除 市 元素
        // ChaProvinceEl: function() {
        //     this.cityVal = 'all';
        //     this.districtVal = 'all';
        //     if (this.provinceVal == "all") {
        //         this.deleteCity();
        //         this.deleteDistrict();
        //     } else {
        //         this.deleteCity();
        //         this.deleteDistrict();
        //         var cityData = this.getCityDataByP(this.provinceVal);
        //     }
        // },
        // //根据省份获取城市元素
        // getCityDataByP: function(code) {
        //     var prev = code.substr(0, 2);
        //     for (var i = 0; i < this.cityJson.length; i++) {
        //         var ic = this.cityJson[i].item_code;
        //         if (ic.indexOf(prev) == 0 && ic.substr(4, 2) == "00" && ic.substr(2, 2) != "00") {
        //             this.CityAll.push(this.cityJson[i]);
        //         }
        //     }
        //     // console.log(this.CityAll)
        // },
        // //根据市元素 添加/删除 区元素
        // ChaCityEl: function() {
        //     this.districtVal = 'all';
        //     if (this.value == "all") {
        //         this.deleteDistrict();
        //     } else {
        //         this.deleteDistrict();
        //         var districtData = this.getdistrictByC(this.cityVal);
        //     }
        // },
        // //根据城市获取区元素
        // getdistrictByC: function(sode) {
        //     var prev = sode.substr(0, 2);
        //     var cit = sode.substr(2, 2);
        //     for (var i = 0; i < this.cityJson.length; i++) {
        //         var ic = this.cityJson[i].item_code;
        //         if (ic.indexOf(prev) == 0 && ic.indexOf(cit) == 2 && ic.substr(4, 2) != "00") {
        //             this.DistrictAll.push(this.cityJson[i]);
        //         }
        //     }
        // },
        // //删除市元素
        // deleteCity: function() {
        //     this.CityAll = [];
        // },
        // //删除区元素
        // deleteDistrict: function() {
        //     this.DistrictAll = [];
        // },
        // 返回上一页
        backHistory: function() {
            history.go(-1);
        },
    }
}
</script>

<style lang="less">
.Register {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #f5f5f5;
    .lineLogo {
        width: 100%;
        height: 97px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        .LinePosition {
            width: 1200px;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
            .Logo {
                margin-right: 12px;
                display: flex;
                align-items: center;
                margin-right: 38px;
                user-select: none;
                p {
                    font-size: 30px;
                    font-weight: 600;
                    color: black;
                }
            }
            .setget {
                width: 1px;
                height: 47px;
                background-color: #b4b4b4;
                margin-right: 26px;
            }
            .wel {
                font-size: 18px;
                color: #2a2a2a;
            }
            .errorEl,
            .successEl {
                position: absolute;
                width: 283px;
                height: 30px;
                left: 25.8%;
                top: 150%;
                margin-left: -150px;
                .el-alert__content {
                    display: table-cell;
                    padding: 0 8px;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
    .mainBody {
        width: 1200px;
        height: 435px;
        display: flex;
        background-color: #fff;
        margin-top: 42px;
        margin-bottom: 176px;
        align-items: center;
        .registerLeft {
            width: 599px;
            height: 435px;
            padding: 0 100px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            box-sizing: border-box;
            align-content: flex-start;
            input {
                padding: 0 15px;
                outline: none;
            }
            button {
                outline: none;
                color: #2693d4;
                border: 1px solid #2693d4;
                border-radius: 3px;
                box-sizing: border-box;
                background-color: #fff;
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none !important;
                margin: 0;
            }
            input[type="number"] {
                -moz-appearance: textfield;
            }
            input[type=number] {
                width: 283px;
                height: 36px;
                border: 1px solid #cbcbcb;
                border-radius: 3px;
                box-sizing: border-box;
                margin-top: 53px;
            }
            input[type=text] {
                width: 174px;
                height: 36px;
                border: 1px solid #cbcbcb;
                border-radius: 3px;
                box-sizing: border-box;
                margin-top: 19px;
                margin-right: 9px;
            }
            .verCode {
                width: 85px;
                height: 36px;
                background-color: #000;
                margin-top: 19px;
                margin-right: 15px;
                display: flex;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .clickGet {
                //获取验证码按钮
                width: 100px;
                height: 36px;
                margin-top: 19px;
                font-size: 16px;
            }
            .area {
                width: 283px;
                height: 36px;
                margin-top: 21px;
                display: flex;
                justify-content: space-between;
                select {
                    width: 31.3%;
                    height: 36px;
                    font-size: 15px;
                    margin-right: 2px;
                    padding: 0;
                    padding-left: 25px;
                    border-radius: 5px;
                    box-sizing: border-box;
                }
            }
            input[type=password] {
                width: 283px;
                height: 36px;
                border: 1px solid #cbcbcb;
                border-radius: 3px;
                box-sizing: border-box;
                margin-top: 25px;
            }
            .error {
                width: 283px;
                height: 26px;
                font-size: 12px;
                color: red;
                line-height: 36px;
                padding-left: 15px;
                box-sizing: border-box;
            }
            .registerNow {
                width: 283px;
                height: 36px;
                font-size: 16px;
            }
            .agreement {
                width: 283px;
                display: flex;
                justify-content: center;
                line-height: 36px;
                font-size: 14px;
            }
        }
        .setget {
            width: 1px;
            height: 261px;
            background-color: #b4b4b4;
        }
        .registerRight {
            width: 599px;
            height: 435px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-content: flex-start;
            p {
                width: 100%;
                height: 18px;
                font-size: 18px;
                line-height: 18px;
                margin-top: 53px;
                display: flex;
                justify-content: center;
                &:nth-child(2) {
                    margin-top: 23px;
                }
            }
            .getRight {
                margin-top: 15px;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .lineLogoMobile {
        width: 100%;
        border-bottom: .01rem solid #b1b1b1;
        height: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        position: relative;
        .iconfont {
            position: absolute;
            top: 0;
            left: 0;
            width: .5rem;
            height: .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .3rem;
        }
        p {
            font-size: .3rem;
        }
    }
    .Register {
        width: 100%;
        .mainBody {
            width: 100%;
            margin: 0;
            background-color: #f2f2f2;
            .registerLeft {
                width: 100%;
                padding: 0;
            }
        }
    }
    .addr {
        z-index: 10020;
        position: fixed;
        left: 0;
        bottom: 0.5rem;
        width: 100%;
        margin-top: -10px;
        font-size: .16rem;
        .address-container {
            height: 3rem;
        }
    }
    .area {
        button {
            width: 100%;
        }
    }
}
</style>
