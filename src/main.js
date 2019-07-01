import "current-script-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filters from "./utils/filters";

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
