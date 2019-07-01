<template>
  <div class="home">
    Home
    <div>{{999|toFixed}}</div>
  </div>
</template>

<script>
import { getData, getRole } from "../api/home";
export default {
  name: "home",
  async created() {
    await getRole();
    await getData();
  }
};
</script>

<style lang="less" scoped>
.home {
  color: red;
}
</style>

