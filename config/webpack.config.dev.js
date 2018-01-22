const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

 module.exports = merge(common, {
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        overlay: {
            errors: true,
            warnings: true
        }
    }
 });