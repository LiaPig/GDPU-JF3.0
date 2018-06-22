<template>
  <div class="leftMenu-container">
    <el-row class="tac">
      <el-menu
        router
        :collapse="false"
        class="el-menu-vertical-demo"
        background-color="#2f3238"
        text-color="#fff"
        active-text-color="#45aed6"
        style="border-right: none">
        <div class="menu-title">计服3.0后台管理系统</div>
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
  export default {
    name: "index",
    data() {
      return {
        menuList: [
          {
            path: '/',
            icon: 'el-icon-setting',
            title: '首页',
            key: 1
          },
          {
            path: '/a',
            icon: 'el-icon-setting',
            title: '系统管理',
            key: 2,
            children: [
              {
                path: '/',
                icon: 'icon iconfont icon-chengyuan',
                title: '成员管理',
                key: 21
              },
              {
                path: '/',
                icon: 'icon iconfont icon-jiaoseziliao',
                title: '角色管理',
                key: 22
              },
              {
                path: '/',
                icon: 'icon iconfont icon-caidanshezhi',
                title: '菜单管理',
                key: 23
              },
              {
                path: '/',
                icon: 'icon iconfont icon-wangzhan',
                title: '网站配置',
                key: 24
              }
            ]
          },
          {
            path: '/b',
            icon: 'icon iconfont icon-ai-article',
            title: '文章管理',
            key: 3,
            children: [
              {
                path: '/',
                icon: 'icon iconfont icon-ai-article',
                title: '文章管理',
                key: 31
              },
              {
                path: '/',
                icon: '',
                title: '内容发布',
                key: 32
              },
              {
                path: '/',
                icon: '',
                title: '分类管理',
                key: 33
              }
            ]
          },
          {
            path: '/ab',
            icon: 'el-icon-setting',
            title: '文件管理',
            key: 4,
            children: [
              {
                path: '/',
                icon: '',
                title: '图册管理',
                key: 41
              },
              {
                path: '/',
                icon: '',
                title: '附件管理',
                key: 42
              }
            ]
          },
          {
            path: '/abc',
            icon: 'el-icon-setting',
            title: '服务管理',
            key: 5,
            children: [
              {
                path: '/',
                icon: '',
                title: '报障单管理',
                key: 51
              },
              {
                path: '/',
                icon: '',
                title: '其他服务管理',
                key: 52
              }
            ]
          }
        ]
      };
    },
    methods: {

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
  }
</style>
