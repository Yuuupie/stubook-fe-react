import { userAxiosInstance } from "./APIConstants"

/* Service for user related API requests
 * TODO: Hash passwords
 */
class UserService {
  // Authenticates using user's credentials, providing session token if successful
  login(username, password) {
    return userAxiosInstance.post('/login', { username, password })
  }

  // Registers new user
  register(username, password) {
    return userAxiosInstance.post('/', { username, password })
  }
}

export default new UserService()

