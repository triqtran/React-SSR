const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: './server.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build'
  },
  mode: 'production',
  module: {
    rules: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            'react', 
            'es2015',
            'stage-0', 
            [
              'env', 
              {
                target: {browser: ['last 2 versions']}
              }
            ]
          ]
        }
      },

    ]
  },
  externals: [webpackNodeExternals()]
}