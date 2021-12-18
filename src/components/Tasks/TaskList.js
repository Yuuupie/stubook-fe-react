import { useState, useEffect, createContext } from 'react'
import Task from './Task'
import TaskCreator from './TaskCreator'
import './Task.scss'

export const TasksContext = createContext()

const TaskList = () => {
  const [tasks, setTasks] = useState([
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
    }
  ])

  return (
    <div className='task-list'>
      <TasksContext.Provider value={{tasks, setTasks}}>
        <TaskCreator/>
        {tasks.map(task => {
          return <Task title={task.title} tags={task.tags} dueDate={task.dueDate}/>
        })}
      </TasksContext.Provider>
    </div>
  )
}

export default TaskList

