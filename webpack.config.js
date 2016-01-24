var webpack = require('webpack');
var merge   = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var common = {
  entry: __dirname + '/app/index.js',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        include: __dirname + '/app'
      },

      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        include: __dirname + '/app'
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};

if (TARGET === 'build') {
  module.exports = common;
}

if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: __dirname + '/build',
      progress: true,
      host: '0.0.0.0'
    }
  });
}
