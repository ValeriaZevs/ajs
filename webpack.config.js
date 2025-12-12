const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'ajs',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  // ВАЖНО: убираем любые rules с babel-loader
  module: {
    rules: []
  },
};
