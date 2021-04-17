const baseConfig = require('./config.base')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')

module.exports = merge(baseConfig, {
    entry: {
        path: './src/vue/entry-server.js'
    },
    target: 'node',
    devtool: 'source-map',
    output: {
        libraryTarget: 'commonjs2',
        path: `${ __dirname }/dist`
    },

    plugins: [
        new VueSSRServerPlugin()
    ],

    externals: nodeExternals({
        // не выделяйте зависимости, которые должны обрабатываться Webpack.
        // здесь вы можете добавить больше типов файлов, например сырые *.vue файлы
        // нужно также указывать белый список зависимостей изменяющих `global` (например, полифилы)
        allowlist: /\.css$/
      }),
})