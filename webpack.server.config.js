const path = require('path');
const fs = require('fs');
const nodeModules = {};
fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => {
        nodeModules[mod] = `commonjs ${mod}`;
    });
module.exports = {
    name: 'server',
    entry: "./Server/server.js",
    context: __dirname,
    node: {
        __dirname: false,
        __filename: false
    },
    target: 'node',
    output: {
        filename: "server.bundle.js",
        path: path.resolve(`${__dirname}/Server`)
    },
    watch: true,
    externals: nodeModules,
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["env", "stage-2","stage-0", "react"]
                    }
                },
                exclude: /node_modules/
            },
            {test: /\.json$/, loader: 'json-loader'},
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
    resolve: {
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', 'html'],
        alias: {
            // Support React Native Web
            'react-native': 'react-native-web',
        }
    }
};