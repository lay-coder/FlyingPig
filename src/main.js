// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "@/assets/css/swiper.min.css"
import "@/assets/js/swiper.min.js"
import "@/assets/css/iconfont.css"
import "@/assets/css/common.css"
import "@/assets/css/index.css"
import "@/assets/css/gateTicket.css"
import "@/assets/css/allType.css"

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    FlyPigindexInfo:{}
  },
  router,
  render(h){
    return h(App)
  }
})