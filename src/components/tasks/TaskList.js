import { useReducer, useState, createContext } from 'react'
import Task from './Task'
import TaskUpdater from './TaskUpdater'
import './Task.scss'

export const TasksContext = createContext()

const TaskList = () => {
  const [taskCreateMode, setTaskCreateMode] = useState(false)

  const [tasks, tasksDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'create':
        return [...state, action.newTask]
      case 'remove':
        let tasksCopy = [...state]
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

  return (
    <div className='task-list'>
      <TasksContext.Provider value={{tasks, tasksDispatch}}>
        <button onClick={() => setTaskCreateMode(true)}>Create Task</button>
        {taskCreateMode && <TaskUpdater/>}
        {tasks.map((task, index) => {
          return <Task title={task.title} tags={task.tags} dueDate={task.dueDate} index={index}/>
        })}
      </TasksContext.Provider>
    </div>
  )
}

export default TaskList

