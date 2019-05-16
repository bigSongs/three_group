<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


@font-face {
  font-family: 'iconfont';  /* project id 1181798 */
  src: url('//at.alicdn.com/t/font_1181798_37drdwp0y1a.eot');
  src: url('//at.alicdn.com/t/font_1181798_37drdwp0y1a.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1181798_37drdwp0y1a.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1181798_37drdwp0y1a.woff') format('woff'),
  url('//at.alicdn.com/t/font_1181798_37drdwp0y1a.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1181798_37drdwp0y1a.svg#iconfont') format('svg');
}

.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}


</style>
