<template>
  <div>
    <left-menu class="left-menu"></left-menu>
    <top-nav class="top-nav"></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import LeftMenu from '@/components/common/LeftMenu'
  import TopNav from '@/components/common/TopNav'
  export default {
    name: "main",
    components: {
      LeftMenu,
      TopNav
    },
    data() {
      return {

      };
    },
    methods: {

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
    z-index: 9;
  }
  .top-nav {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
