import axios from 'axios'

const instance = axios.create()
/**
 * Initialize axios configurations
 */
instance.defaults.baseURL = '/'

const token = document.querySelector('meta[name="csrf-token"]').content;

instance.defaults.headers.common.Accept = 'application/json'
instance.defaults.headers.common['X-CSRF-TOKEN'] = token;

export const fetcher = (...args) => instance.get(...args).then(res => res.data)

export default instance
