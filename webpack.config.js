const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/app.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use:
        [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCSSExtractPlugin(),
  ],
};
