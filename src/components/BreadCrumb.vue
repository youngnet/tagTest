<template>
  <el-breadcrumb class="breadcrumb">
    <el-breadcrumb-item
      v-for="(item,index) of navList"
      :key="index"
    >
      <span v-if="item.redirect==='noRedirect'">{{item.meta.title}}</span>
      <router-link
        v-else
        :to="item.path"
      >{{item.meta.title}}</router-link>
    </el-breadcrumb-item>
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
        const homeRoute = {
          meta: { title: "首页", icon: "home" },
          path: "/home"
        };
        const navList = route.matched.filter(
          item => item.meta && item.meta.title
        );

        if (navList.find(item => item.path !== "/home")) {
          navList.unshift(homeRoute);
        }
        this.navList = navList;
      },
      immediate: true
    }
  },
  methods: {}
};
</script>
<style scoped lang='less'>
.breadcrumb{
  padding: 15px 20px;
}
</style>