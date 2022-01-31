import { useState, useEffect } from 'react'
import TaskService from '../../api/TaskService'
import Task from './Task'
import TaskUpdater from './TaskUpdater'
import './Task.scss'

const TaskList = () => {
  const [taskToUpdate, setTaskToUpdate] = useState({
    isUpdating: false,
    newTask: false,
    task: {}
  })
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    refreshTasks()
  }, [])
  
  const refreshTasks = () => {
    TaskService.fetch().then((res) => {
      setTasks(res.data.tasks)
      closePrompt()
    }).catch((err) => {
      console.log(err)
    })
  }

  const openUpdateTaskPrompt = (task) => {
    setTaskToUpdate({
      isUpdating: true,
      newTask: false,
      task
    })
  }

  const openNewTaskPrompt = () => {
    setTaskToUpdate({
      isUpdating: true,
      newTask: true,
      task: {
        title: '',
        tags: [''],
        dueDate: ''
      }
    })
  }

  const closePrompt = () => {
    setTaskToUpdate({
      isUpdating: false,
      newTask: false,
      task: {}
    })
  }

  const createTask = (task) => {
    TaskService.create(task).then((res) => {
      refreshTasks()
    })
  }

  const updateTask = (task) => {
    TaskService.update(task).then((res) => {
      refreshTasks()
    })
  }

  const deleteTask = (id) => {
    TaskService.delete(id).then((res) => {
      refreshTasks()
    })
  }

  return (
    <div className='task-list'>
      {!taskToUpdate.isUpdating && <button className='task-create-button' onClick={openNewTaskPrompt}>Create Task</button>}
      {taskToUpdate.isUpdating && <TaskUpdater {...{createTask, updateTask, closePrompt, ...taskToUpdate}}/>}
      {tasks.map((task) => {
        return <Task {...{task, openUpdateTaskPrompt, deleteTask}} />
      })}
    </div>
  )
}

export default TaskList

