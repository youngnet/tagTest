const { VUE_APP_PREFIX_URL, PROXY_URL } = process.env;
module.exports = {
    devServer: {
        open: true,
        host: "0.0.0.0",
        port: 4000,
        https: false,
        hotOnly: false,
        // 将任何未知请求 (没有匹配到静态文件的请求) 代理到该字段指向的地方
        proxy: {
            [VUE_APP_PREFIX_URL]: {
                target: PROXY_URL
            }
        },
        before: app => {}
    },
    chainWebpack: config => {}
};
