<template>
  <left-menu class="left-menu"></left-menu>
</template>

<script>
  import LeftMenu from '@/components/leftMenu/'
  export default {
    name: "main",
    components: {
      LeftMenu
    }
  }
</script>

<style scoped>
  .left-menu {
    position: absolute;
    height: 100%;
    width: 200px;
    top: 0;
    left: 0;
    background-color: #2f3238;
  }
</style>
