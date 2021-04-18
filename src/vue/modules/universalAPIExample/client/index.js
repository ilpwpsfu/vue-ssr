import axios from 'axios'

export default {
    getData: async () => {
        const req = await axios.get('/api/fetchtest')
        return req.data
    }
}