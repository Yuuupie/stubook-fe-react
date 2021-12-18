import { useState, useRef, useContext } from 'react'
import './Task.scss'
import { TasksContext } from './TaskList'

const TaskCreator = () => {
  const titleRef = useRef()
  const tagRefs = useRef([])
  const dueDateRef = useRef()

  const [tagCount, setTagCount] = useState(1)
  const {tasks, setTasks} = useContext(TasksContext)

  const printTags = () => {
    let tags = []
    for (let i = 0; i < tagCount; i++) {
      tags.push(
      <>
        <input className='task-creator__tag' ref={element => {tagRefs.current[i] = element}}/>
        <br/>
      </>
      )
    }
    return tags
  }

  const addTag = (event) => {
    event.preventDefault()
    setTagCount(tagCount + 1)
  }

  const createTask = (event) => {
    event.preventDefault()
    let title = titleRef.current.value
    let tags = [tagRefs.current[0].value]
    let dueDate = dueDateRef.current.value
    setTasks((prev) => [...prev, {title, tags, dueDate}])
  }

  return (
    <form onSubmit={createTask}>
      <div>New Task</div>

      <label>Title:</label>
      <input ref={titleRef} required/><br/>

      <label>Tags:</label>
      {printTags()}
      {tagCount < 5 && <button onClick={addTag}>add tag</button>}

      <label>Due Date:</label>
      <input ref={dueDateRef} required/><br/>

      <button>Submit</button>
    </form>
  )
}

export default TaskCreator
