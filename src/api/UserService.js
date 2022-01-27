import axios from 'axios'
import { userAxiosInstance } from "./APIConstants"

class UserService {
  login(username, password) {
    console.log(`${username} and ${password}`)
    return userAxiosInstance.post('/login', { username, password })
  }

  register(username, password) {
    return userAxiosInstance.post('/', { username, password })
  }
}

export default new UserService()

