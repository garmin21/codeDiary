const htmlwebpackplugin = require('html-webpack-plugin')

const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry : path.join(__dirname, './src/main.js'),
    output : {
        path : path.join(__dirname, './dist'),
        filename : 'bundle.js'
    },
    plugins : [
        // 创建 插件 实例
        new htmlwebpackplugin({
            template : path.join(__dirname, './src/index.html'),
            filename : 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module : {
        // 配置所有第三方模块
        rules : [
            { test : /\.css$/, use: ['style-loader', 'css-loader']},
            { test : /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            { test : /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { 
                test : /\.(jpg|gif|png|bmp|jpeg)$/, 
                use: 'url-loader?name=[hash:8]-[name].[ext]',
            },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
            { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ },
            // 配置vue
            { test: /\.vue$/, use: 'vue-loader' }
        ],
    },
    
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
}