const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* TARGET ENV */
const TARGET_ENV = process.env.NODE_ENV;

const common = {
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(TARGET_ENV),
      }
    }),
    new ExtractTextPlugin('css/styles.css')
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
  }
};


switch(TARGET_ENV) {

  case 'dev':
  case 'development':
  
    module.exports = merge.smart(common, {
      devtool: 'eval-source-map',
      devServer: {
        disableHostCheck: true,
        hot: true,
        inline: true,
        host: "0.0.0.0",
        port: 9090
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
      ]
    });

    break;

  case 'production':

    module.exports = merge.smart(common, {
      entry: {
        vendor: ["react", "react-dom", "redux", "react-redux", "axios", "react-transition-group"]
      },
      devtool: 'source-map',
      plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'vendor.bundle.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
          },
          output: {
            comments: false,
          }
        })
      ]
    });

    break;

}


