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
  devtool: 'eval-cheap-source-map',
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin('css/build-styles.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract({
          loader: 'css-loader?-url&importLoaders=1&modules=true&localIdentName=[name]_[local]_[sha1:hash:hex:5]',
        }),
      }		
    ]
  }
};

