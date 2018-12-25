const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /(node_modules)/
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            // 一定要用 vue-template-compiler 来解析html，否则 .vue 文件中的 template 不会渲染出来
            test: /\.html$/,
            use: 'vue-template-compiler'
        }]
    },
    plugins: [
        // "https://vue-loader.vuejs.org/zh/migrating.html#值得注意的不兼容变更"
        new VueLoaderPlugin()
    ]
};