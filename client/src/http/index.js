import axios from 'axios'
import serverUrl from '../env.js'

export const $host=axios.create({
    baseURL: serverUrl
})