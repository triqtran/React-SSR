const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./config/base.config')

module.exports = merge(base,{
  target: 'node',
  entry: './src/client.js',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public'
  },
  plugins: []
})