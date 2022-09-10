const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/js/index.js",
        vendors: "./src/js/vendors.js"
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname,"dist"),
        clean: true, 
    },
    watch: false,
    watchOptions:{
        ignored: /node_modules/
    },
    module: {
        rules:[
            {
                test: /\.js$/,                
                exclude:/node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    /*"style-loader",*/
                    MiniCssExtractPlugin.loader,  /* Cambiar style-loader por este para tener archivos css */
                    {
                        loader: "css-loader",
                        options: { url: false }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/index.html", to: "index.html" },
                { from: "./src/favicon.ico", to: "favicon.ico" },
                { from: path.resolve(__dirname,"src","assets"), to: "images" },              
            ],
        })
    ],
};