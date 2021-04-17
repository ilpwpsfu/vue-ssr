import client from './client'
import server from './server'

export default process.env.CLIENT ? client : server