let path = require("path");
module.exports = {
    entry: "./Client/Index.js",
    output: {
        filename: "react.bundle.js",
        path: path.resolve(__dirname, "Server/public/javascripts")
    },
    // performance: {
    //     hints: false
    // },
    watch: true,
    module: {
        rules: [
            /*babel loader*/
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["env", "stage-2", "stage-0", "react"]
                    }
                },
            },
            /*css/sas loader*/
            {
                test: /\.(css|scss)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            /*url loader*/
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
            },
            /*file loader*/
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: 3005
    // },
    resolve: {
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', 'html','.png','.css','.scss','.svg','.gif','.png','.woff','.woff2','.eot','.ttf','.svg'],
        alias: {
            // Support React Native Web
            'react-native': 'react-native-web','rxjs': 'rxjs-es'
        }
    }
};