<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="(item,index) of navList" :key="index">{{item.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
import { Breadcrumb, BreadcrumbItem } from "element-ui";
export default {
  data() {
    return {
      navList: []
    };
  },
  components: {
    elBreadcrumb: Breadcrumb,
    elBreadcrumbItem: BreadcrumbItem
  },
  watch: {
    $route(route) {
      // console.log("TCL: $route -> route", route.matched);
      const homeRoute = {
        title: "home",
        path: "/home"
      };
      const navList = route.matched.filter(
        item => item.meta && item.meta.title
      );

      if (navList.find(item => item.path !== "/home")) {
        navList.unshift(homeRoute);
      }
      // console.log(navList);
      this.navList = navList;
    }
  }
};
</script>
<style scoped lang='less'>
</style>