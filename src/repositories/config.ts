import axios from 'axios'

export const AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000'
})

AxiosInstance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem('access_token')
  config.headers['x-authorization'] = accessToken
  return config
})
