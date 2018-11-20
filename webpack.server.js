const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./config/base.config')

module.exports = merge(base,{
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build'
  },
  externals: [webpackNodeExternals()],
  plugins: []
})