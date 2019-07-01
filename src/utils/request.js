import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_PREFIX_URL;

axios.interceptors.request.use(config => {
    return config;
});

axios.interceptors.response.use(
    res => {
        return res.data;
    },
    err => {
        // 处理错误
        // console.log("TCL: err", err.response);
        return Promise.resolve(err.response);
    }
);

export default axios;
