<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@font-face {
  font-family: 'iconfont';
  src: url('./assets/iconfont/iconfont.eot');
  src: url('/assets/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./assets/iconfont/iconfont.woff') format('woff'),
  url('./assets/iconfont/iconfont.ttf') format('truetype'),
  url('./assets/iconfont/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
