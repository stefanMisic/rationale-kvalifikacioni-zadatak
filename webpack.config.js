const path = require('path');
const webpack = require('webpack');
const bundlePath = path.resolve(__dirname, '/dist/');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    publicPath: bundlePath,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
