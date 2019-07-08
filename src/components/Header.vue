<template>
  <div class="header">
    <i @click="clickIcon" v-if="isCollapse" class="headerMenu el-icon-s-unfold"></i>
    <i @click="clickIcon" v-else class="headerMenu el-icon-s-fold"></i>
    <el-dropdown>
      <span class="el-dropdown-link">admin</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item disabled>个人中心</el-dropdown-item>
        <el-dropdown-item disabled>设置</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { Icon, Button, Dropdown, DropdownItem, DropdownMenu } from "element-ui";
export default {
  props: {
    isCollapse: Boolean
  },
  data() {
    return {};
  },
  methods: {
    clickIcon() {
      this.$emit("changeCollapse");
    }
  },
  components: {
    elIcon: Icon,
    elButton: Button,
    elDropdown: Dropdown,
    elDropdownItem: DropdownItem,
    elDropdownMenu: DropdownMenu
  }
};
</script>
<style scoped lang='less'>
.header {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
  .headerMenu {
    font-size: 26px;
  }
  .el-dropdown-link{
    cursor: pointer;
  }
}
</style>