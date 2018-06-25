<template>
  <div>
    <left-menu class="left-menu" :style="{ width: leftWidth }"></left-menu>
    <div class="right" :style="{ width: rightWidth }">
      <top-nav class="top-nav"></top-nav>
      <bread-crumb class="bread-tab"></bread-crumb>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftMenu from '@/components/common/LeftMenu'
  import TopNav from '@/components/common/TopNav'
  import BreadCrumb from '@/components/common/BreadCrumb'
  import { mapGetters } from 'vuex'
  export default {
    name: "main",
    components: {
      LeftMenu,
      TopNav,
      BreadCrumb
    },
    computed: {
      ...mapGetters(['isCollapse'])
    },
    data() {
      return {
        leftWidth: '64px',
        rightWidth: 'calc(100% - 64px)'
      };
    },
    watch:{
      isCollapse(val, oldVal){
        if(val) {
          this.leftWidth = '64px'
          this.rightWidth = 'calc(100% - 64px)'
        }
        else {
          this.leftWidth = '200px'
          this.rightWidth = 'calc(100% - 200px)'
        }
      }
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
    height: 40px;
    line-height: 40px;
    text-align: left;
    border-bottom: 1px solid #E4E7ED;
  }
  .content {
    position: absolute;
    top: 96px;
    left: 0;
    width: 100%;
  }
</style>
