import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import TaskService from '../../api/TaskService'
import Task from './Task'
import TaskUpdater from './TaskUpdater'
import './Task.scss'
import { loginContext } from '../Stubook'

const TaskList = () => {
  const navigate = useNavigate()
  const {loggedIn, setLoggedIn} = useContext(loginContext)
  const [taskToUpdate, setTaskToUpdate] = useState({
    // Status to determine if task prompt should be open
    isUpdating: false,
    // Var to determine if task is created or updated in prompt
    newTask: false,
    // Task to update if updating
    task: {}
  })
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login')
    }
    refreshTasks()
  }, [])
  
  /* Fetch tasks from API */
  const refreshTasks = () => {
    TaskService.fetch().then((res) => {
      setTasks(res.data.tasks)
      closePrompt()
    }).catch((err) => {
      console.log(err)
    })
  }

  /* Open task prompt with fields pre-filled with properties of task to update */
  const openUpdateTaskPrompt = (task) => {
    setTaskToUpdate({
      isUpdating: true,
      newTask: false,
      task
    })
  }

  /* Open task prompt with empty fields to create task */
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

  /* close the create/update task prompt */
  const closePrompt = () => {
    setTaskToUpdate({
      isUpdating: false,
      newTask: false,
      task: {}
    })
  }

  /* API calls for creating, updating, and deleting tasks */
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
      {/* Show 'Create Task' button or task prompt depending on if isUpdating is true or not */}
      {!taskToUpdate.isUpdating && <button className='task-create-button' onClick={openNewTaskPrompt}>Create Task</button>}
      {taskToUpdate.isUpdating && <TaskUpdater {...{createTask, updateTask, closePrompt, ...taskToUpdate}}/>}
      {/* List tasks */}
      {tasks.map((task) => {
        return <Task {...{task, openUpdateTaskPrompt, deleteTask}} />
      })}
    </div>
  )
}

export default TaskList

