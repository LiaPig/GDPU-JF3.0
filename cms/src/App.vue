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

<style lang="scss">
  $jf-blue: #45aed6;
  $jf-black-bg: #2f3238;
  $jf-black-color: #727b8b;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: absolute;
    height: 100%;
    width: 100%;
    min-width: 1080px;
    overflow: auto;
  }
</style>
