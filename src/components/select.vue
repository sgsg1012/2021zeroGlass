<template>
  <div class="video-container">
    <!-- 放东西 -->
    <button class="btn review" @click="review">影片推荐</button>
    <button class="btn history" @click="history">电影发展史</button>
    <video autoplay loop muted class="vediocss" v-on:canplay="canplay">
      <source src="../assets/select.mp4" type="video/mp4" />
    </video>
    <sideBar class="sidebar"></sideBar>
  </div>
</template>
<script>
import sideBar from './test.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    sideBar
  },
  methods: {
    review () {
      this.$router.push('/review')
    },
    history () {
      this.$router.push('/history')
    }
  },
  created: function () {
    // this.$router.go(0)
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
  left: 0%;
  top: 10%;
}
.video-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.vediocss {
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.btn {
  width: 400px;
  height: 100px;
  color: aqua;
  background: none;
  border: solid 1;
  cursor: pointer;
  line-height: 1.5;
  font: 700 1.6rem "楷体", sans-serif;
  padding: 1em 2em;
  letter-spacing: 0.05rem;
  &:focus {
    outline: 2px dotted aqua;
  }
}
.review {
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-150%, 160%);
}
.history {
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(50%, 160%);
}
</style>
