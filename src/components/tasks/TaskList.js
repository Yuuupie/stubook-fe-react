import { useReducer, useState, createContext } from 'react'
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
      case 'create':
        return [...state, action.newTask]
      case 'update':
        tasksCopy.splice(action.index, 1, action.newTask)
        return tasksCopy
      case 'remove':
        tasksCopy.splice(action.index, 1)
        return tasksCopy
    }
  }, [
    {
      title: 'dummy task',
      tags: [
        'tag 1',
        'tag 2'
      ],
      dueDate: '21-12-2021'
    },
    {
      title: 'another dummy task',
      tags: [
        'tag 3',
        'tag 4'
      ],
      dueDate: '22-12-2021'
    },
    {
      title: 'another another dummy task',
      tags: [
        'tag 3',
        'tag 5'
      ],
      dueDate: '23-12-2021'
    }
  ])

  const updateTask = (index) => {
    setUpdateIndex(index)
    setIsUpdatingTask(true)
  }

  return (
    <div className='task-list'>
      <TasksContext.Provider value={{tasks, tasksDispatch}}>
        {!isUpdatingTask && <button className='task-create-button' onClick={() => setIsUpdatingTask(true)}>Create Task</button>}
        {isUpdatingTask && <TaskUpdater index={updateIndex}/>}
        {tasks.map((task, index) => {
          return <Task title={task.title} tags={task.tags} dueDate={task.dueDate} index={index} updateTask={updateTask}/>
        })}
      </TasksContext.Provider>
    </div>
  )
}

export default TaskList

