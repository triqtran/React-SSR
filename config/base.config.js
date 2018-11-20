module.exports = {
  module: {
    rules: [
      {
        oneOf:[
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
              ],
              plugins:[
                'babel-plugin-transform-class-properties',
                'babel-plugin-transform-decorators-legacy'
              ]
            }
          },
          {
            test: /\.scss$/,
            exclude: /\.module\.scss$/,
            use: ['isomorphic-style-loader','css-loader', 'sass-loader']
          },
          {
            test: /\.module\.scss$/,
            use: [
              'isomorphic-style-loader',
              {
                loader: 'css-loader',
                options:{
                  modules: true,
                  sourceMap: true,
                  localIdentName: '[local]__[hash:base64:5]',
                  minimize: true,
                  importLoaders: 1
                }
              }, 'sass-loader']
          }
        ]
      }
    ]
  }
}