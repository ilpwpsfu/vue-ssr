const { VueLoaderPlugin } = require('vue-loader')
const autoprefixer = require('autoprefixer')

const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
    mode: isProduction ? 'production' : 'development',

    plugins: [
        new VueLoaderPlugin(),
    ],

    module: {
        rules: [
            { test: /\.pug$/, use: 'pug-plain-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 10000,
                    name: 'images/[name].[hash:8].[ext]',
                  },
                },
            },
        ]
    },
}