let path = require('path');

let config = {
	entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'www')
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015']
      }
    }]
  }
}

module.exports = config;