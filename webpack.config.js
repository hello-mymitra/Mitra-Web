const path = require('path');

module.exports = {
    // The entry point file described above
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    entry: ['./dist/index.js'],
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    watch: true,
    devServer: {
        allowedHosts: 'all',
    }
};