const express = require('express')
const { json } = require('body-parser')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')
const { api } = require('./api')

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

server.use('/api', api)

server.get('/*', async (req, res) => {
    const context = { title: 'Vue SSR Boilerplate', url: req.url }

    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.code == 404) return res.status(404).end('Not found')
            return res.status(500).end('Internal server error')
        }

        res.setHeader('Content-Type', 'text/html; charset=utf-8')

        res.end(html)
    })
})

exports.server = server
