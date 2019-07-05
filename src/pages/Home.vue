<template>
  <div class="home">
    Home
    <router-link to="/about?id=1">11111</router-link>
    <router-link to="/about?id=2">22222</router-link>
    <div>{{999|toFixed}}</div>
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getData, getRole } from "../api/home";
import { Table, TableColumn } from "element-ui";
export default {
  name: "home",
  async created() {
    this.eventLoop()
    let res = await getRole();
    let r = await getData();
    this.loading = false;
  },
  components: {
    "el-table": Table,
    "el-table-column": TableColumn
  },
  data() {
    return {
      loading: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    eventLoop() {
      new Promise(resolve => {
        resolve();
      })
        .then(() => {
          new Promise(resolve => {
            resolve();
          }).then(() => {
            console.log(777);
          });
        })
        .then(() => {
          console.log(666);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  color: red;
}
</style>

