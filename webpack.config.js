import path from "path"
module.exports = {
    resolve: {
        //取一个路径别名
        alias: {
            "@": path.join(__dirname, "src")
        }
    }
}