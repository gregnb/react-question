var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  /*devtool: 'eval-cheap-source-map',*/
  devtool: 'source-map',
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        use:  ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader", options: { sourceMap: true } }, 
            { loader: "less-loader", options: { sourceMap: true } }
          ]
        })
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    hot: true,
    inline: true,
    host: "0.0.0.0",
    port: 9090
  }
};

