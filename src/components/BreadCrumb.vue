<template>
  <el-breadcrumb>
    <el-breadcrumb-item
      :to="item.path"
      v-for="(item,index) of navList"
      :key="index"
    >{{item.meta.title}}</el-breadcrumb-item>
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
    $route: {
      handler(route) {
        // console.log("TCL: $route -> route", route.matched);
        const homeRoute = {
          meta: { title: "home", icon: "home" },
          path: "/home"
        };
        const navList = route.matched.filter(
          item => item.meta && item.meta.title
        );

        if (navList.find(item => item.path !== "/home")) {
          navList.unshift(homeRoute);
        }
        console.log(navList);
        this.navList = navList;
      },
      immediate: true
    }
  },
  methods: {
    navItem(item) {
      console.log("TCL: navigate -> item", item);
    }
  }
};
</script>
<style scoped lang='less'>
</style>