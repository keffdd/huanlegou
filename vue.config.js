// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     productionSourceMap: false,
//     transpileDependencies: true,
//     devServer: {
//         proxy: {
//             "/api": {
//                 target: "http://gmall-h5-api.atguigu.cn",
//             },
//         },
//     },
// })
module.exports = {
    productionSourceMap: false,
    // 关闭ESLINT校验工具
    publicPath: './',
    lintOnSave: false,
    // 配置代理跨域
    devServer: {
        proxy: {
            "/api": {
                target: "http://gmall-h5-api.atguigu.cn",
            },
        },
    },
};