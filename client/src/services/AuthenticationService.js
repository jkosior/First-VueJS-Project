/* eslint-disable no-console */
/* eslint-disable indent */

import api from '@/services/api'

export default{
    register (credentials) {
        return api().post('register', credentials)
    }
}