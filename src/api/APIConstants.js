import axios from 'axios'

export const userAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_API,
  withCredentials: true
})

export const taskAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_TASK_API,
  withCredentials: true
})
