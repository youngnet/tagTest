import "current-script-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filters from "./utils/filters";
import moment from "./assets/js/moment";
import "./assets/js/moment/locale/zh-cn";
import { Loading } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./index.css";

Vue.use(Loading);
Vue.prototype.$moment = moment;
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;

// 注册全局过滤器
Object.entries(filters).forEach(([key, val]) => {
    Vue.filter(key, val);
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
