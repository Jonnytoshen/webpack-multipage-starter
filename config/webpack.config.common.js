const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = require("./config");

let HTMLPlugins = [];
let Entries = {};

config.pages.forEach((page) => {
    HTMLPlugins.push(new HTMLWebpackPlugin({
        title: page.title,
        filename: page.filename,
        template: path.resolve(__dirname, `${page.template}/index.html`),
        favicon: 'src/favicon.ico',
        hash: true,
        chunks: [page.name, 'commons']
    }));
    Entries[page.name] = path.resolve(__dirname, `${page.template}/index.js`);
});

module.exports = {
    entry: Entries,
    output: {
        filename: `[name]/bundle.[hash].js`,
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        ...HTMLPlugins
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { 
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { 
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            }
        ]
    }
};