/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// In webpack 5, we can use "import _ from XYZ"
// with "type": "module" in package.json
const path = require('path');

const { default: merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/main.ts', './src/style.css'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: false,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/logo.png',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[name]-[hash].css',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    // Included for PWA manifest.json
    // currently, html-webpack-plugin does not support manifest...
    new CopyPlugin({
      patterns: ['./src/manifest.json'],
    }),
    // Turn on to analyze (visualize) bundle sizes
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
  output: {
    filename: 'runtime-[hash].bundle.js',
    chunkFilename: '[name]-[hash].bundle.js',
    path: path.resolve(__dirname, 'public/'),
  },
  optimization: {
    usedExports: true,
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          test: /(services\/.*\.ts)|(components\/shared\/.*\.css)/,
          chunks: 'async',
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /style\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /components\/.*\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      //         {
      //             test: /\.(png|svg|jpg|gif)$/,
      //             use: [
      //                 'file-loader'
      //             ]
      //         },
      //         {
      //             test: /\.(woff|woff2|eot|ttf|otf)$/,
      //             use: [
      //                 'file-loader'
      //             ]
      //         },
      //         {
      //             test: /\.(csv|tsv)$/,
      //             use: [
      //                 'csv-loader'
      //             ]
      //         },
      //         {
      //             test: /\.xml$/,
      //             use: [
      //                 'xml-loader'
      //             ]
      //         }
    ],
  },
};
