var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config');

var app = express();

app.use(webpackDevMiddleware(webpack(webpackConfig), {
    publicPath: '/build/',
    stats: {
        colors: true
    }
}));

app.use(express.static(__dirname));

app.listen(3000, function() {
    console.log('Server Listening on http://localhost:3000, Ctrl+C to stop');
})
