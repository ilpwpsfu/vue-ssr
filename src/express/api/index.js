const { Router } = require('express')
const { fetchtest } = require('./routers/test')

const api = Router()

api.use('/fetchtest', fetchtest)

exports.api = api