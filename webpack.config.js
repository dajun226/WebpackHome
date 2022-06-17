const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports={
    // 入口文件
    entry:'./src/main.js',
    output:{
        // 输出的目录
        path:join(__dirname,'lib'),
        // 输出的文件名
        filename:"index.js",
        clean:true
    },
    module:{
        rules:[
            // 能引入css
            {
                test:/\.css/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less/i,
                use:['style-loader','css-loader', 'less-loader']
            },
            {
                test:/\.(png|gif|jpeg|)$/i,
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize:2 * 1024
                    }
                },
                generator:{
                    filename:'images/[hash:6][ext]'
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/i,
                type:'asset/resource',
                generator:{
                    filename:'fonts/[hash:6][ext]'
                }
            },
            {
                test:/\.js$/i,
                use:['babel-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            // 调用函数
            template:join(__dirname,'./public/index.html')
        }),
        new VueLoaderPlugin()
    ],
    // 指定模式
    mode:"development",
    devServer:{
        open:true,
        port:30000,
    },
    
}