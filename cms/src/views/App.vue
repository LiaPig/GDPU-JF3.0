<template>
  <div>
    <left-menu class="left-menu"></left-menu>
    <el-button @click="dialogVisible = true">点击打开弹窗</el-button>
    <!--选icon的弹窗-->
    <el-dialog
      title="选择图标"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      width="60%">
      <chose-icon @dialog-visible="changeDialogVisible" @icon-data="getIconData"></chose-icon>
      <div class="btn-group">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import LeftMenu from '@/components/common/LeftMenu'
  import ChoseIcon from '@/components/ChoseIcon'
  export default {
    name: "main",
    components: {
      LeftMenu,
      ChoseIcon
    },
    data() {
      return {
        dialogVisible: false,
        icon: {
          iconName: '',
          iconClass: ''
        }
      };
    },
    methods: {
      // 子组件要你关弹窗
      changeDialogVisible: function (data) {
        this.dialogVisible = data
      },
      // 从子组件获取点击的那个icon信息
      getIconData: function (iconName, iconClass) {
        this.icon.iconName = iconName
        this.icon.iconClass = iconClass
      }
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

  .btn-group {
    position: absolute;
    bottom: 10px;
    right: 20px;
  }
</style>
