
<template>
  <div v-if="!menuInfo.hidden">
    <el-menu-item
      v-if="hasOneShowingChild(menuInfo.children,menuInfo)"
      :index="resolvePath(onlyOneChild.path||menuInfo.path)"
    >
      <i class="el-icon-document"></i>
      <span slot="title">{{onlyOneChild.meta.title}}</span>
    </el-menu-item>
    <el-submenu
      v-else
      :index="menuInfo.path"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{menuInfo.meta.title}}</span>
      </template>
      <SideMenuItem
        v-for="(item,index) of menuInfo.children"
        :menuInfo="item"
        :key="index"
        :basePath="menuInfo.path"
      />
      <!-- <el-menu-item
        v-for="(item,index) of menuInfo.children"
        :key="index"
        :index="item.path"
      >{{item.meta.title}}</el-menu-item> -->
    </el-submenu>
  </div>
</template>
<script>
import { MenuItem, Submenu } from "element-ui";
import path from "path";
import { isExternal } from "../utils/utils";

export default {
  name: "SideMenuItem",
  props: {
    menuInfo: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      onlyOneChild: {}
    };
  },
  components: {
    elMenuItem: MenuItem,
    elSubmenu: Submenu
  },
  methods: {
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    }
  },

  mounted() {}
};
</script>
<style scoped lang='less'>
</style>