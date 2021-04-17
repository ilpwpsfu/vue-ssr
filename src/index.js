const { server } = require('./express')

module.exports = () => {
    server.listen(25565)
}