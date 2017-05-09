import Axios from 'axios'

const Api = {
    getThing: query => Axios.get(`https://path-to-api/endpoint?q=${query}`)
}

export default Api
