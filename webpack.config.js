var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var common = {
  entry: __dirname + '/app/index.js',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        include: __dirname + '/app'
      }
    ]
  }
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
