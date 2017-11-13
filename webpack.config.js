var webpack=require('webpack');
var path=require('path');
module.exports={
    entry:{
        bundle:'./src/main.js'
    },
    output:{
        path:'/dist',
        filename:'[name].js'
    },
    module:{
        rules:[
            {
               test:/\.css$/,
               use:['style-loader','css-loader'] 
            },
            {
                test:/\.(png|jpg|gif)/,
                use:['url-loader']
            },
            {
                test:/\.vue$/,
                use:['vue-loader'] 
             },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool:'cheap-eval-source-map',
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        },
        extensions:['.js','.vue']
    },
    devServer:{
        port:9000,
        compress:true,
        open:true,
        hot:true
    }

}