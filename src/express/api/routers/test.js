const { Router } = require('express')

const fetchtest = Router()

fetchtest.get('/', (req, res) => {
    const data = { text: 'Data from Server' }
    res.json(data)
})

exports.fetchtest = fetchtest