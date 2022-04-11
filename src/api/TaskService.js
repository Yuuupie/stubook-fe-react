import { taskAxiosInstance } from "./APIConstants"

/* Service for task related API requests */
class TaskService {
  // Fetches all tasks belonging to logged in user. Logged in user determined by session token.
  fetch() {
    return taskAxiosInstance.get('/')
  }

  // Creates new task
  create(task) {
    return taskAxiosInstance.post('/', task)
  }

  // Updates pre-existing task
  update(task) {
    return taskAxiosInstance.put('/', task)
  }

  // Deletes task
  delete(id) {
    return taskAxiosInstance.delete('/', { data: {id} })
  }
}

export default new TaskService()

