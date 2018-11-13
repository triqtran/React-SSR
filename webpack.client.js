const path = require('path')

module.exports = {
  target: 'node',
  entry: './src/client.js',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public'
  },
  mode: 'development',
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
  }
}