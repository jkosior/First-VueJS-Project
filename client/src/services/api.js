/* eslint-disable no-console */
/* eslint-disable indent */

import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://localhost:8081`
    })
}
