const common = require('./webpack.config.common.js');
const webpackMerge = require("webpack-merge");
const config = require("./config");
module.exports = webpackMerge(common, {
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    fix: true,
                    emitWarning: true,
                }
            },
        ]
    },
    devServer: {
        contentBase: "../dist",
        overlay: {
            errors: true,
            warnings: true
        }
    }
});
