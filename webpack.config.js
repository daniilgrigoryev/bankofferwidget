const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VuetifyLoaderPlugin } = require('vuetify-loader')

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { argv } = require('process')

module.exports = (env, argv) => {
  const { mode = 'development' } = argv
  const dev = mode === 'development'
  const production = mode === 'production'
  const widgets = ['BankOfferWidget']

  let entries = {}
  widgets.forEach((widget) => (entries[widget] = path.resolve(__dirname, `${widget}/index.js`)))

  let htmlWebpackPlugins = []

  widgets.forEach((widget) => {
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        chunks: [widget],
        template: `./${widget}/index.html`,
        filename: `./${widget}/widget.html`,
        templateParameters: {
          dev: dev,
        },
      })
    )
  })
  return {
    devtool: 'eval',
    target: 'web',
    entry: entries,
    mode: dev ? 'development' : 'production',
    output: {
      pathinfo: false,
      publicPath: dev ? '' : '/assets/js/_build/',
      path: path.join(__dirname, '_build'),
      filename: '[name]/[name].bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, '_build'),
      compress: true,
      hot: true,
      inline: true,
      index: 'widget.html',
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
    },
    stats: {
      warnings: false,
    },
    experiments: {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      outputModule: true,
      topLevelAwait: true,
    },
    module: {
      rules: [
        {
          test: /\.s(c|a)ss$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: 'vue-style-loader',
                  options: {
                    shadowMode: true,
                  },
                },
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    esModule: false,
                  },
                },
                'sass-loader',
              ],
            },
            {
              use: [
                {
                  loader: 'vue-style-loader',
                  options: {
                    shadowMode: true,
                  },
                },
                'css-loader',
                'sass-loader',
              ],
            },
          ],
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                shadowMode: true,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
          type: 'asset/inline',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.vue', '.json', '.css'],
      alias: {
        '~': path.resolve(__dirname),
      },
    },
    optimization: {
      minimize: true,
      moduleIds: 'size',
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new VuetifyLoaderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            ['svgo', { plugins: [{ removeViewBox: false }] }],
          ],
        },
      }),
      ...htmlWebpackPlugins,
    ],
  }
}
