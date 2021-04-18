import client from './client'
import server from './server'

export default process.env.IS_CLIENT_BUILD ? client : server