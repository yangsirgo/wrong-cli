var webpack = require('webpack')
var WebpackBroserPlugin = require("webpack-browser-plugin")
var BomPlugin = require('webpack-utf8-bom');//将文件转成utf-8 bom格式，解决中文乱码的问题
var path = require('path')
module.exports = {
    entry:['./src/example5'],
    output: {
        path:path.join(__dirname,"./dist"),
        publicPath: '/dist/',
        filename:'js/bundle.js'
        // publicPath: '/'
    }, //页面引用的文件
    module: {
        loaders: [
            //http://react-china.org/t/webpack-extracttextplugin-autoprefixer/1922/4
            // https://github.com/b82/webpack-basic-starter/blob/master/webpack.config.js
            {test: /\.html$/, loader: 'raw!html-minify'},{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['es3ify']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '']
    },
    plugins:[
        new WebpackBroserPlugin(),
        new BomPlugin(true),
        new webpack.HotModuleReplacementPlugin()
    ]
}

