const path = require('path');

module.exports = {
  entry: '/Users/chiazo/read-learn/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    },
    {
        test: /\.scss$/,
        include: /stylesheets/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
    }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
