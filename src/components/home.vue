<template>
  <div class="login-homepage-hero-module">
    <div class="login-video-container">
      <div :style="fixStyle" class="login-filter">
        <div class="video-box">
          <video-player
            class="video-player"
            :playsinline="true"
            :options="playerOptions"
            @ended="onPlayerEnded($event)"
          ></video-player>
        </div>
      </div>
      <video
        :style="fixStyle"
        autoplay
        loop
        muted
        class="login-fillWidth"
        v-on:canplay="canplay"
      >
        <source src="../assets/bg.mp4" type="video/mp4" />
      </video>
      <div class="login-poster login-hidden" v-if="!videoCanPlay">
        <!-- <img
            :style="fixStyle"
            src="../assets/img/bgVideo.png"
            alt="视频封面"
          /> -->
      </div>
    </div>
    <sideBar class="sidebar"></sideBar>
  </div>
</template>
<script>
import sideBar from './test.vue'
export default {
  data () {
    return {
      videoCanPlay: false,
      fixStyle: '',
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: require('../assets/home_video.mp4') // url地址
        }],
        // poster: '../../static/images/test.jpg', // 你的封面地址
        // width: document.documentElement.clientWidth, // 播放器宽度
        // notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          // timeDivider: false,
          // durationDisplay: false,
          // remainingTimeDisplay: false,
          // fullscreenToggle: false // 全屏按钮
        },
        controls: false
      }
    }
  },
  components: {
    sideBar
  },
  methods: {
    canplay () {
      this.videoCanPlay = true
    },
    // 视频播完回调
    onPlayerEnded (player) {
      // console.log(player)
      console.log('end')
      this.$router.push('/select')
    }
  },
  mounted: function () {
    // 主要是检测窗口缩放视频也同步大小
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    }
    window.onresize()
  }

}
</script>
<style lang="less" scoped>
.sidebar {
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-510%, -140%);
}
.login-homepage-hero-module,
.login-video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.login-video-container .login-poster img,
.login-video-container video {
  z-index: 0;
  position: absolute;
}

.login-video-container .login-filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
}
.home-container {
  height: 100%;
  width: 100%;
  background-color: #253237;
}
.video-box {
  margin: 0 auto;
  width: 88%;
  height: 100%;
  background-color: #253237;
}

.video-player {
  .vjs-control-bar {
    display: none;
  }
}
</style>
