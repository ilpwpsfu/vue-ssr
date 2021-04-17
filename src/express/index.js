const express = require('express')
const { json } = require('body-parser')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require('../webpack/dist/vue-ssr-server-bundle.json')
const clientManifest = require('../webpack/dist/vue-ssr-client-manifest.json')
const template = fs.readFileSync(`${ __dirname }/../vue/templates/index.html`, 'utf-8')

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    inject: false,
    template,
    clientManifest
})

const server = express()
server.use(json())
server.use('/dist', express.static(`${ __dirname }/../webpack/dist`))
server.disable('x-powered-by')

server.get('/landings*', async (req, res) => {
    const context = { title: 'LANDOS', url: req.url }

    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.log(err)
            return res.status(500).end('LOL DUNNO')
        }

        res.setHeader('Content-Type', 'text/html; charset=utf-8')

        res.end(html)
    })
})

server.get('/prefetchTest', (req, res) => {
    const data = { text: 'Данные с API' }
    res.json(data)
})

exports.server = server