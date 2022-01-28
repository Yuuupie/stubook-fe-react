import { useReducer, useState, createContext, useEffect } from 'react'
import TaskService from '../../api/TaskService'
import Task from './Task'
import TaskUpdater from './TaskUpdater'
import './Task.scss'

export const TasksContext = createContext()

const TaskList = () => {
  const [isUpdatingTask, setIsUpdatingTask] = useState(false)
  const [updateIndex, setUpdateIndex] = useState(-1)

  const [tasks, tasksDispatch] = useReducer((state, action) => {
    setIsUpdatingTask(false)
    setUpdateIndex(-1)
    let tasksCopy = [...state]
    switch (action.type) {
      case 'init':
        return action.tasks
      case 'create':
        return [...state, action.newTask]
      case 'update':
        tasksCopy.splice(action.index, 1, action.newTask)
        return tasksCopy
      case 'remove':
        tasksCopy.splice(action.index, 1)
        return tasksCopy
      default:
        alert('error')
        return state
    }
  }, [])

  useEffect(() => {
    TaskService.fetch().then((res) => {
      tasksDispatch({ type: 'init', tasks: res.data.tasks })
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const updateTask = (index) => {
    setUpdateIndex(index)
    setIsUpdatingTask(true)
  }

  const closePrompt = () => {
    setUpdateIndex(-1)
    setIsUpdatingTask(false)
  }

  return (
    <div className='task-list'>
      <TasksContext.Provider value={{tasks, tasksDispatch}}>
        {!isUpdatingTask && <button className='task-create-button' onClick={() => setIsUpdatingTask(true)}>Create Task</button>}
        {isUpdatingTask && <TaskUpdater index={updateIndex} {...{closePrompt}}/>}
        {tasks.map((task, index) => {
          return <Task {...{task, index, updateTask}} />
        })}
      </TasksContext.Provider>
    </div>
  )
}

export default TaskList

