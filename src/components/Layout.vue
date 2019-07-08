<template>
  <div>
    <el-row class="layout">
      <el-col
        class="nav-line"
        :span="4"
      >
        <div
          class="logo"
          :collapse="isCollapse"
        >
          <img
            class="icon"
            src="../assets/images/logo.png"
            alt
          />
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
          <SlideMenuItem
            v-for="(item,index) of routes"
            :key="index"
            :menuInfo="item"
            :basePath="item.path"
          />
        </el-menu>
      </el-col>
      <el-col
        class="content-container"
        :span="20"
      >
        <div class="header-tool">
          <Header
            :isCollapse="isCollapse"
            @changeCollapse="changeCollapse"
          />
          <BreadCrumb />
        </div>
        <!-- <slot /> -->
        <div class="content">
          <router-view />
        </div>
        <div class="copyRight">copyRIght</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Row, Col, Menu, MenuItem, MenuItemGroup, Submenu } from "element-ui";
import { constantRoutes } from "../routes";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
import SlideMenuItem from "./SlideMenuItem";
export default {
  data() {
    return {
      isCollapse: false,
      routes: constantRoutes
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
    BreadCrumb,
    SlideMenuItem
  }
};
</script>
<style scoped lang='less'>
.layout {
  width: 100vw;
  box-sizing: border-box;
  .nav-line {
    height: 100vh;
    display: flex;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    flex-direction: column;
    .el-menu-vertical-me {
      flex: 1;
    }
  }
  .logo {
    flex-shrink: 0;
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
      font-family: "Myriad Pro","Helvetica Neue",Arial,Helvetica,sans-serif;
      color: #fff;
      font-size: 20px;
      margin-left: 20px;
    }
  }
  .content-container {
    background-color: #f3f3f3;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .content {
      flex: 1;
      padding: 15px;
      background-color: #fff;
      margin: 20px;
      border-radius: 2px;
    }
    .header-tool {
      background-color: #fff;
    }
    .copyRight {
      text-align: center;
      padding-bottom: 15px;
    }
  }
}
</style>