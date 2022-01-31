import { taskAxiosInstance } from "./APIConstants"

class TaskService {
  fetch() {
    return taskAxiosInstance.get('/')
  }

  create(task) {
    return taskAxiosInstance.post('/', task)
  }

  update(task) {
    return taskAxiosInstance.put('/', task)
  }

  delete(id) {
    return taskAxiosInstance.delete('/', { data: {id} })
  }
}

export default new TaskService()

