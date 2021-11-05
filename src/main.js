import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery'
import sideBar from '../src/components/test.vue'

// 导入全局样式表
import './assets/css/global.css'
// 导入视频组件

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(sideBar)
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
