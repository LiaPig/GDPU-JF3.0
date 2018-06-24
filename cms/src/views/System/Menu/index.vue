<template>
  <div class="el-row menu-container">
    <div class="el-row btn-search">
      <el-button type="primary" size="small" @click="showAdd">新增</el-button>
      <el-button type="danger" size="small">删除</el-button>
      <el-button type="primary" plain size="small">启用</el-button>
      <el-button type="danger" plain size="small">禁用</el-button>
    </div>
    <div class="el-row table">
      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%;text-align: left"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="title"
          label="菜单名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="path"
          label="路径"
          width="120"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="icon"
          label="图标"
          width="300">
        </el-table-column>
        <el-table-column
          sortable
          prop="key"
          label="顺序"
          width="100">
        </el-table-column>
        <el-table-column
          sortable
          label="状态"
          width="100">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status" type="success">正常</el-tag>
            <el-tag v-else type="danger">禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="small" type="text" @click="showEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="text">管理子菜单</el-button>
          </template>
          <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      :title="AddEditTitle"
      :visible.sync="showAddEdit">
      <el-form :model="formData">
        <el-row>
          <el-col :span="18">
            <el-form-item label="菜单名称" label-width="100px">
              <el-input v-model="formData.title" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="菜单路径" label-width="100px">
              <el-input v-model="formData.path" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="15">
            <el-form-item label="菜单图标" label-width="100px">
              <el-input v-model="formData.icon" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-button @click="chooseVisible = true">选择</el-button>
          </el-col>
          <el-col :span="4">
            <i :class="formData.icon" style="line-height: 40px;font-size: 20px;"></i>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="菜单顺序" label-width="100px">
              <el-input-number v-model="formData.key" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="菜单状态" label-width="100px">
              <el-select v-model="formData.status" placeholder="请选择活动区域" style="width: 100%">
                <el-option label="正常" :value="1"></el-option>
                <el-option label="禁用" :value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showAddEdit = false">取 消</el-button>
        <el-button type="primary" @click="showAddEdit = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--选icon的弹窗-->
    <el-dialog
      title="选择图标"
      :visible.sync="chooseVisible"
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
        // 表格
        tableData: [
          {
            path: '/',
            icon: 'icon iconfont icon-zhuye',
            title: '首页',
            key: 1,
            status: 1
          },
          {
            path: '/system',
            icon: 'icon iconfont icon-wxbgongju',
            title: '系统管理',
            key: 2,
            status: 1,
            children: [
              {
                path: '/system',
                icon: 'icon iconfont icon-chengyuan',
                title: '成员管理',
                key: 21
              },
              {
                path: '/system',
                icon: 'icon iconfont icon-jiaoseziliao',
                title: '角色管理',
                key: 22
              },
              {
                path: '/system/menu',
                icon: 'icon iconfont icon-caidanshezhi',
                title: '菜单管理',
                key: 23
              },
              {
                path: '/system/',
                icon: 'icon iconfont icon-wangzhan',
                title: '网站配置',
                key: 24
              }
            ]
          },
          {
            path: '/b',
            icon: 'icon iconfont icon-dongtaiwenben',
            title: '文章管理',
            key: 3,
            status: 1,
            children: [
              {
                path: '/',
                icon: 'icon iconfont icon-ai-article',
                title: '文章管理',
                key: 31
              },
              {
                path: '/',
                icon: 'icon iconfont icon-dingdanguanli',
                title: '内容发布',
                key: 32
              },
              {
                path: '/',
                icon: 'icon iconfont icon-guanli',
                title: '分类管理',
                key: 33
              }
            ]
          },
          {
            path: '/ab',
            icon: 'icon iconfont icon-iconfonthuagongyuanliao',
            title: '文件管理',
            key: 4,
            status: 1,
            children: [
              {
                path: '/',
                icon: 'icon iconfont icon-xiangce',
                title: '图册管理',
                key: 41
              },
              {
                path: '/',
                icon: 'icon iconfont icon-wenjian1',
                title: '附件管理',
                key: 42
              }
            ]
          },
          {
            path: '/abc',
            icon: 'icon iconfont icon-shouye',
            title: '服务管理',
            key: 5,
            status: 1,
            children: [
              {
                path: '/',
                icon: 'icon iconfont icon-weixiu',
                title: '报障单管理',
                key: 51
              },
              {
                path: '/',
                icon: 'icon iconfont icon-fuwuguwen',
                title: '其他服务管理',
                key: 52
              }
            ]
          }
        ],
        selection: [],
        // 新增或者编辑弹出框
        AddEditTitle: '',
        showAddEdit: false,
        formData: {
          title: '',
          path: '',
          icon: '',
          key: 1,
          status: 1,
          children: []
        },
        // 选择icon
        chooseVisible: false

      };
    },
    methods: {
      // 点击新增按钮
      showAdd() {
        this.AddEditTitle = '新增菜单'
        this.showAddEdit = true
        this.formData = {
          title: '',
            path: '',
            icon: '',
            key: 1,
            status: 1,
            children: []
        }
      },
      // 点击编辑按钮
      showEdit(row) {
        this.AddEditTitle = '编辑菜单'
        this.showAddEdit = true
        this.formData = {
          title: row.title,
          path: row.path,
          icon: row.icon,
          key: row.key,
          status: row.status,
          children: row.children
        }
      },
      // 表格中的多选发生了变化
      handleSelectionChange(selection) {
        this.selection = selection
      },
      // 子组件要你关弹窗
      changeDialogVisible: function (data) {
        this.chooseVisible = data
      },
      // 从子组件获取点击的那个icon信息
      getIconData: function (iconName, iconClass) {
        this.formData.icon = iconClass
      }
    }
  }
</script>

<style lang="scss">
  .btn-search {
    margin-top: 20px;
    padding-left: 10px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: rgba(245, 245, 245, 1);
    text-align: left;
  }
  .table {
    margin: 20px;
  }
</style>
