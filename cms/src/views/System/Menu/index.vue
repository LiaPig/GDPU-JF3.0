<template>
  <div>
    <el-button @click="dialogVisible = true">点击打开弹窗</el-button>
    <!--选icon的弹窗-->
    <el-dialog
      title="选择图标"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      width="60%">
      <chose-icon @dialog-visible="changeDialogVisible" @icon-data="getIconData"></chose-icon>
    </el-dialog>
  </div>
</template>

<script>
  import ChoseIcon from '@/components/ChoseIcon'

  export default {
    name: "index",
    components: {
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

</style>
