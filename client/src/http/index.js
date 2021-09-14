import axios from 'axios'
import serverUrl from '../env'

export const $host=axios.create({
    baseURL: serverUrl
})