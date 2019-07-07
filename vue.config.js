const { VUE_APP_PREFIX_URL, PROXY_URL, NODE_ENV, ANALYZE } = process.env;
const path = require("path");
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
    },
    // chainWebpack: config => {
    //     config.when(process.env.NODE_ENV !== "development", config => {
    //         config.optimization.splitChunks({
    //             chunks: "all",
    //             cacheGroups: {
    //                 libs: {
    //                     name: "chunk-libs",
    //                     test: /[\\/]node_modules[\\/]/,
    //                     priority: 10,
    //                     chunks: "initial" // only package third parties that are initially dependent
    //                 },
    //                 elementUI: {
    //                     name: "chunk-elementUI", // split elementUI into a single package
    //                     priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //                     test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
    //                 },
    //                 commons: {
    //                     name: "chunk-commons",
    //                     test: path.resolve(__dirname, "src/components"), // can customize your rules
    //                     minChunks: 3, //  minimum common number
    //                     priority: 5,
    //                     reuseExistingChunk: true
    //                 }
    //             }
    //         });
    //         config.optimization.runtimeChunk("single");
    //     });
    // }
};
