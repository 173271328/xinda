<template>
  <div id="app">
    <Top v-if="$isPC"></Top>
    <!-- <transition name="el-zoom-in-center" mode="out-in"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <Bottom v-show="btms"></Bottom>
    <transition name="el-zoom-in-top">
      <div class="bktop el-icon-arrow-up" @click="bktop" v-show="bkshow"></div>
    </transition>
  </div>
</template>

<script>
import Top from './components/llpublicHeader'
import Contents from './views/llContent'
import Bottom from './components/llpublicFooter'
export default {
  name: 'app',
  components: {
    Top,
    Bottom,
    Contents,
  },
  data() {
    return {
      bkshow: false,
      btms: false,
    }
  },
  watch: {
    $route(val) {
      if (val) {
        this.$router.afterEach((to, from, next) => window.scrollTo(0, 0));
      }
    }
  },
  methods: {
    scrollMethod() {
      const viewH = document.documentElement.clientHeight;
      const scrollH = document.documentElement.scrollTop || document.body.scrollTop;
      this.bkshow = scrollH > (viewH * 0.5) ? true : false;
    },
    bktop() {
      this.bkshow = false;
      var currScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currScroll > 0) {
        requestAnimationFrame(this.bktop);
        scrollTo(0, currScroll - currScroll / 5);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      let l = document.getElementById("loading");
      l.style.display = 'none';
      setTimeout(() => {
        this.btms = true;
      }, 500);
      if (document.addEventListener) {
        document.addEventListener('scroll', this.scrollMethod);
      }
      document.onscroll = this.scrollMethod;
    });
  },
  created() {
    if (/Mobile/i.test(navigator.userAgent)) {
      document.querySelector('html').style.fontSize = window.screen.width / 3.75 / 16 * 100 + '%';
      window.onresize = () => {
        document.querySelector('html').style.fontSize = window.screen.width / 3.75 / 16 * 100 + '%';
      }
    }
  }
}
</script>

<style lang="less">
html {
  font-size: 625%;
}

body {
  font-size: .16rem;
}

#app .content {
  min-width: 70vh;
  min-height: 70vh;
}

li {
  list-style-type: none;
}

.font14 {
  font-size: 14px;
}

select {
  outline: none;
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

.mint-indicator-wrapper {
  width: 1rem;
  height: 1rem;
  z-index: 1;
}

.el-message {
  top: 25%;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  p {
    color: #fff;
    text-align: center;
  }
  .el-message__img {
    opacity: .9;
  }
}

.mint-spinner-snake {
  position: absolute;
  top: 30%;
  left: 30%;
}

.slide-enter-active {
  transition: all .3s ease-in-out;
  transform: translate3d(0, 0, 0);
}

.slide-enter {
  transform: translate3d(-100%, 0, 0);
}

.slide-leave-active {
  transition: all .3s ease-in-out;
  transform: translate3d(-100%, 0, 0);
}

.slide-leave {
  transform: translate3d(0, 0, 0);
}

.slideDown-enter-active {
  transition: all .3s ease-in-out;
  transform: translate3d(0, 0, 0);
}

.slideDown-enter {
  transform: translate3d(0, -100%, 0);
}

.slideDown-leave-active {
  transition: all .3s ease-in-out;
  transform: translate3d(0, -100%, 0);
}

.slideDown-leave {
  transform: translate3d(0, 0, 0);
}

.bktop {
  position: fixed;
  bottom: 10vh;
  right: 2%;
  width: 40px;
  height: 40px;
  background: #ccc;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
}

[v-cloak] {
  display: none !important;
}

@media screen and (max-width:767px) {
  .mobileBG {
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: #f2f2f2;
    z-index: -1;
  }
  #app .content {
    min-width: 30vh;
    min-height: 30vh;
  }
  .address{
    
  }
}
</style>
