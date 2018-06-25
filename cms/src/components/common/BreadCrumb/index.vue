<template>
  <div class="breadcrumb-container">
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="clickTab">
      <el-tab-pane
        v-for="item in breadList"
        :key="item.name"
        :label="item.name"
        :data-path="item.path"
        :name="item.name">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "index",
    computed: {
      ...mapGetters(['breadList', 'activeBread'])
    },
    mounted() {
      this.editableTabsValue = this.activeBread
    },
    data() {
      return {
        editableTabsValue: '/',
      }
    },
    watch: {
      activeBread(val) {
        this.editableTabsValue = val
      }
    },
    methods: {
      removeTab(targetName) {
        this.$store.dispatch('removeBreadList', targetName)
      },
      clickTab(obj) {
        const path = obj.$attrs['data-path']
        this.$router.push({path: path})
      }
    }
  }
</script>

<style lang="scss">
  .breadcrumb-container {
  }

</style>
