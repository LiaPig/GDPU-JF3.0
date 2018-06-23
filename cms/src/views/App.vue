<template>
  <div>
    <left-menu class="left-menu"></left-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import LeftMenu from '@/components/common/LeftMenu'
  export default {
    name: "main",
    components: {
      LeftMenu
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
  }

</style>
