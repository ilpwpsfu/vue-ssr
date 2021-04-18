const { merge } = require('webpack-merge')
const baseConfig = require('./config.base')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'production'
module.exports = merge(merge(baseConfig, {
    entry: {
        path: './src/vue/entry-client.js'
    },

    output: {
        path: `${ __dirname }/dist`,
        filename: '[name].[hash:8].js',
        publicPath: '/dist/'
    },

    plugins: [
        new VueSSRClientPlugin(),
        new webpack.EnvironmentPlugin({
            IS_CLIENT_BUILD: true
        })
    ],

    // Важно: это разбивает webpack runtime на главный фрагмент так,
    // чтобы асинхронные части могли быть внедрены сразу после него.
    // Это также позволяет лучше кэшировать код вашего приложения / вендоров.
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "manifest",
                    minChunks: Infinity
                }
            }
        }
    }
}), isProduction ? {
    // some minifiers and uglifiers
} : {
    output: {
        filename: '[name].js',
        publicPath: 'http://localhost:8081/dist/',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'source-map',
    devServer: {
        writeToDisk: true,
        contentBase: `${ __dirname }/dist`,
        publicPath: 'http://localhost:8081/dist/',
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: 8081,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
})