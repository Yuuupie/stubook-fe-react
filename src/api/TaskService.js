import { taskAxiosInstance } from "./APIConstants"

class TaskService {
  fetch() {
    return taskAxiosInstance.get('/')
  }

  create(title, dueDate) {
    return taskAxiosInstance.post('/', { title, dueDate })
  }
}

export default new TaskService()

