<template>
  <div class="sideBarcontainer">
    <div class="all">
      <div class="box">
        <a href="http://localhost:8080/#/home" @click="home">
          <div class="card bg-01">
            <span class="card-content">Start</span>
          </div>
        </a>
      </div>
      <div class="box">
        <a href="http://localhost:8080/#/select">
          <div class="card bg-02">
            <span class="card-content">Home</span>
          </div>
        </a>
      </div>
      <div class="box">
        <a href="http://localhost:8080/#/review">
          <div class="card bg-03">
            <span class="card-content">Intro</span>
          </div>
        </a>
      </div>
      <div class="box">
        <a href="http://localhost:8080/#/history">
          <div class="card bg-04">
            <span class="card-content">History</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='less' scoped>
.sideBarcontainer {
  z-index: 100;
  width: 150px;
  height: 240px;
  margin: 0;
  padding: 0;
}
a:link,
a:hover,
a:visited,
a:active {
  color: #fff;
  text-decoration: none;
}
body {
}
.all {
  position: fixed;
  width: 0px;
  overflow: visible;
}
.box {
  display: inline-block;
  float: right;
  clear: both;
}
.card {
  position: relative;
  left: 32px;
  padding: 16px 32px 16px 64px;
  margin: 8px;
  x-box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 8px 0 8px -8px rgba(0, 0, 0, 0.5);
  background: #fff;
  transition: all 0.3s ease-in-out 0.1s; /* 過渡*/
}
.card:hover {
  position: relative;
  left: 100%;
  margin-left: -32px;
  box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.5),
    0 8px 8px -8px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
}
.card-content {
  color: #fff;
  font-family: "Droid Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
}
.bg-01 {
  background: #539770;
}
.bg-02 {
  background: #4b7d74;
}
.bg-03 {
  background: #8dc2bc;
}
.bg-04 {
  background: #ecbe79;
}
.bg-05 {
  background: #be7467;
}
.bg-06 {
  background: #e2ae63;
}
</style>
