import { userAxiosInstance } from "./APIConstants"

class UserService {
  login(username, password) {
    return userAxiosInstance.post('/login', { username, password })
  }

  register(username, password) {
    return userAxiosInstance.post('/', { username, password })
  }
}

export default new UserService()

