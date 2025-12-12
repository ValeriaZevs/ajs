const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'ajs',
    libraryTarget: 'umd',
<<<<<<< HEAD
=======
    libraryExport: 'default',  // –Т–Р–Ц–Э–Ю!
>>>>>>> 3435144d5b9c2e84606b95ec2deb18c4279103b3
    globalObject: 'this',
  },
  // ¬ј∆Ќќ: убираем любые rules с babel-loader
  module: {
<<<<<<< HEAD
    rules: []
=======
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            sourceType: 'unambiguous',
          },
        },
      },
    ],
>>>>>>> 3435144d5b9c2e84606b95ec2deb18c4279103b3
  },
};

