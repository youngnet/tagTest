<template>
  <div>
    <el-row :gutter="16" class="tac">
      <el-col class="nav-line" :span="4">
        <div class="logo" :collapse="isCollapse">
          <img class="icon" src="../assets/images/logo.png" alt />
          <h1>一笑而过</h1>
        </div>
        <el-menu
          class="el-menu-vertical-me"
          @open="handleOpen"
          @close="handleClose"
          background-color="#011528"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse-transition="true"
          :router="true"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="/copy">
            <i class="el-icon-menu"></i>
            <span slot="title">Copy</span>
          </el-menu-item>
          <el-menu-item index="/home">
            <i class="el-icon-document"></i>
            <span slot="title">Home</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <i class="el-icon-setting"></i>
            <span slot="title">About</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <Header :isCollapse="isCollapse" @changeCollapse="changeCollapse" />
        <BreadCrumb />
        <slot />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Row, Col, Menu, MenuItem, MenuItemGroup, Submenu } from "element-ui";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  },
  components: {
    "el-row": Row,
    "el-col": Col,
    "el-menu": Menu,
    "el-menu-item": MenuItem,
    "el-menu-item-group": MenuItemGroup,
    "el-submenu": Submenu,
    Header,
    BreadCrumb
  }
};
</script>
<style scoped lang='less'>
.tac {
  width: 100vw;
  box-sizing: border-box;
  .nav-line {
    height: 100vh;
    display: flex;
    flex-direction: column;
    .el-menu-vertical-me {
      flex: 1;
    }
  }
}
.logo {
  display: flex;
  height: 64px;
  align-items: center;
  background-color: #02223f;
  .icon {
    width: 32px;
    height: 32px;
    margin-left: 30px;
  }
  h1 {
    color: #fff;
    font-size: 20px;
    margin-left: 20px;
  }
}
</style>