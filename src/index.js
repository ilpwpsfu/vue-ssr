const { server } = require('./express')

module.exports = () => {
    server.listen(8080)
}