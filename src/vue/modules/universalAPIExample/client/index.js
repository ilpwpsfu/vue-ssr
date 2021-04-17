import axios from 'axios'

export default {
    getData: async () => {
        const req = await axios.get('/prefetchTest')
        return req.data
    }
}