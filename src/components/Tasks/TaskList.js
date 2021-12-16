import { useState, useEffect } from 'react'
import Task from './Task'

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  // Temp
  // Add dummy task
  useEffect(() => {
    setTasks([
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
  }, [])


  return (
    <div className='task-list'>
    {tasks.map(task => {
      return <Task title={task.title} tags={task.tags} dueDate={task.dueDate}/>
    })}
    </div>
  )
}

export default TaskList

