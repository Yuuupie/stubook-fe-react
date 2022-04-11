import axios from 'axios'

// Axios instance configured for user API
export const userAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_API,
  withCredentials: true
})

// Axios instance configured for task API
export const taskAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_TASK_API,
  withCredentials: true
})
