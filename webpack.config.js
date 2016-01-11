var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/app',

    devtool: 'inline-source-map',

    entry: [
        'babel-polyfill',
        './app.js'
    ],

    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/build/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.css$/,
                loader: 'style!css' //loaders: ['style', 'css']
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },

    resolve: {
        fallback: [
            path.join(__dirname, 'node_modules')
        ],
        extendsions: ['', '.js', '.css']
    },

    resolveLoader: {
        fallback: [
            path.join(__dirname, 'node_modules')
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
}
