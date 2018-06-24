<template>
  <div class="topNav-container">
    <div class="name">
      <el-dropdown>
      <span class="el-dropdown-link">
        {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        name: '黄猪崽'
      };
    },
    methods: {
    }
  }
</script>

<style scoped>
  .topNav-container {
    display: inline-block;
    width: calc(100% - 20px);
    padding-right: 20px;
    line-height: 56px;
    text-align: right;
    background-color: #2f3238;
    color: #fff;
    .name {

    }
  }
  .el-dropdown {
    color: #fff;
  }
  .el-dropdown-menu__item:hover {
    background-color: #2f3238;
    color: #fff;
  }
</style>
