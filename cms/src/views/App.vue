<template>
  <div>
    <left-menu class="left-menu" :style="{ width: leftWidth }"></left-menu>
    <div class="right" :style="{ width: rightWidth }">
      <top-nav class="top-nav"></top-nav>
      <div class="bread-tab">这里是面包屑</div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
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
        isCollapse: false,
        leftWidth: '200px',
        rightWidth: 'calc(100% - 200px)'
      };
    },
    watch:{
      isCollapse(val, oldVal){//普通的watch监听
        if(val) {
          this.leftWidth = '200px'
          this.rightWidth = 'calc(100% - 200px)'
        }
        else {
          this.leftWidth = '64px'
          this.rightWidth = 'calc(100% - 64px)'
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .left-menu {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #2f3238;
    z-index: 9;
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
  .top-nav {
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
  }
  .bread-tab {
    position: absolute;
    top: 56px;
    right: 0;
    width: 100%;
    height: 34px;
    line-height: 34px;
    text-align: left;
    border-bottom: 1px solid #E4E7ED;
  }
  .content {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
  }
</style>
