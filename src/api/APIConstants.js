import axios from 'axios'

export const userAxiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api/user',
  withCredentials: true
})

export const taskAxiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api/task',
  withCredentials: true
})
