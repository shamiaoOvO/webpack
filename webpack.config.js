const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    // 打包模式  development |  production
    mode: "production",
    // 项目入口
    entry: {
        main: ["babel-polyfill", "./src/index.js"],
        login: "./src/login.js"
    },
    // 项目出口
    output: {
        path: path.resolve(__dirname, "dist"),
        // [name]默认的名称为main（如果需要分目录，可以在名字前加文件夹名字）
        filename: "[name]-[contentHash:10].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "jQuery的隔行变色"
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: "url-loader?limit=16940"
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        //取一个路径别名
        alias: {
            "@": path.join(__dirname, "src")
        },
        extensions: [".js"],
    },
    /* externals: {
        jquery: 'jQuery'
    } */
}