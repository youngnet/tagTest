<template>
  <div>
    about
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="活动名称"
        prop="name"
      >
        <el-input
          style="width:300px"
          v-model="ruleForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="活动区域"
        prop="region"
      >
        <el-select
          v-model="ruleForm.region"
          placeholder="请选择活动区域"
        >
          <el-option
            label="区域一"
            value="shanghai"
          ></el-option>
          <el-option
            label="区域二"
            value="beijing"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Layout from "../components/Layout";
import { Form, FormItem, Input, Select, Option } from "element-ui";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "change" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "change" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ]
      },
      msg: "hello world",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    showConfirm() {
      this.$confirm("确定要删除吗", {
        title: "请输入",
        beforeClose: (action, instance, close) => {
          close();
        }
      });
    }
  },
  components: {
    Layout,
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input,
    elSelect: Select,
    elOption: Option
  },
  created() {}
};
</script>
<style scoped lang='less'>
</style>
