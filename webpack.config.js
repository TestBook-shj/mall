/*
 * @Author: TestBook-shj
 * @Date:   2018-12-21 22:08:21
 * @Last Modified by:   TestBook-shj
 * @Last Modified time: 2018-12-23 20:40:18
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name) {
  return {
    template: './src/view/' + name + '.html',
    filename: 'view/' + name + '.html',
    inject: true,
    hash: true,
    chunks: ['common', name]
  };
};
// webpack config
var config = {
  entry: {
    'common': ['./src/page/common/index.js'],
    'index': ['./src/page/index/index.js'],
    'login': ['./src/page/login/index.js']
  },
  output: {
    path: './dist',
    filename: 'js/[name].js'
  },
  externals: {
    'jquery': 'window.jQuery'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }]
  },
  plugins: [
    // 独立通用模块到js/base.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    }),
    // 把css单独打包到文件里
    new ExtractTextPlugin('css/[name].css'),
    // html模板的处理
    new HtmlWebpackPlugin(getHtmlConfig('index')),
    new HtmlWebpackPlugin(getHtmlConfig('login')),
  ]
};

module.exports = config;