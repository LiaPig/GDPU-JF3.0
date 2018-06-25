<template>
  <div class="leftMenu-container" v-on:mouseover="isCloseNav(false)" @mouseout="isCloseNav(true)">
    <el-row class="tac">
      <el-menu
        router
        :collapse="isCollapse"
        :default-active="$route.path"
        background-color="#2f3238"
        text-color="#fff"
        active-text-color="#45aed6"
        style="border-right: none">
        <div v-if="!isCollapse" class="menu-title">计服3.0后台管理系统</div>
        <div v-else class="menu-title">管理后台</div>
        <template v-for="item in menuList">
          <!--有二级菜单-->
          <template v-if="item.children && item.children.length > 0">
            <el-submenu :index="item.path" v-bind:key="item.key">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="children in item.children" v-bind:key="children.key" :index="children.path">
                  <i :class="children.icon"></i>
                  {{ children.title }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
          <!--没有-->
          <template v-else>
            <el-menu-item :index="item.path" :key="item.key">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "index",
    mounted() {
    },
    computed: {
      ...mapGetters(['isCollapse', 'menuList'])
    },
    data() {
      return {
      };
    },
    methods: {
      // 是否收起导航条
      isCloseNav(value) {
        this.$store.dispatch('setIsCollapse',value)
      },
    }
  }
</script>

<style lang="scss">
  .leftMenu-container {
    .menu-title {
      display: inline-block;
      width: 100%;
      height: 56px;
      line-height: 56px;
      color: #fff;
      background-color: #000;
    }
    .el-menu-item,  .el-submenu__title {
      text-align: left;
    }
    .el-menu-item span, .el-submenu__title span {
      margin-left: 10px;
    }
  }
</style>
