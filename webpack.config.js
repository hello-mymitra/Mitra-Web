const path = require('path');

module.exports = {
    // The entry point file described above
    mode: 'development',
    // target: 'web',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    entry: [
        './src/Config/firebase.config.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle/main.js',
    },
    devtool: 'eval-source-map',
    watch: true,
    devServer: {
        allowedHosts: 'all',
    }
};