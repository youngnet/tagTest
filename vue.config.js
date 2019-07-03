const { VUE_APP_PREFIX_URL, PROXY_URL, NODE_ENV, ANALYZE } = process.env;
// const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const plugins = [];
if (ANALYZE === "true") {
    plugins.push(new BundleAnalyzerPlugin());
}
if (NODE_ENV === "production") {
    // plugins.push(new IgnoreEmitPlugin(/^\.\/locale$/, /moment$/))
    // plugins.push(new CompressionPlugin());
}

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
    configureWebpack: {
        plugins
    }
    // chainWebpack: config => {
    //     config.optimization.splitChunks({
    //         chunks: "all",
    //         minSize: 20000,
    //         minChunks: 1,
    //         maxAsyncRequests: 5,
    //         maxInitialRequests: 3
    //         // name: false
    //     });
    //     // config.optimization.runtimeChunk = true;
    // }
};
