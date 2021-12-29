import { useState, useRef, useContext } from 'react'
import './Task.scss'
import { TasksContext } from './TaskList'
import removeIcon from '../../img/remove.png'

const TaskCreator = () => {
  const titleRef = useRef()
  const tagRefs = useRef([])
  const dueDateRef = useRef()

  const [tagCount, setTagCount] = useState(1)
  const {tasks, setTasks} = useContext(TasksContext)

  const removeTag = (index) => {
    for (let i = index; i < tagCount - 1; i++) {
      tagRefs.current[i].value = tagRefs.current[i + 1].value
    }
    setTagCount(tagCount - 1)
  }

  const printTags = () => {
    let tags = []
    for (let i = 0; i < tagCount; i++) {
      tags.push(
        <div className='task-creator__row--tag'> 
          {i === 0 && <label className='task-creator__label'>Tags:</label>}
          <input className='task-creator__input--tag' ref={element => {tagRefs.current[i] = element}}/>
          {i !== 0 && <button type='button' className='task-creator__button--remove-tag' onClick={(event) => removeTag(i)}>
            <img className='task-creator__button--remove-tag__image' src={removeIcon}/>
          </button>}
        </div>
      )
    }

    return tags
  }

  const createTask = (event) => {
    event.preventDefault()
    let title = titleRef.current.value
    let tags = [tagRefs.current[0].value]
    let dueDate = dueDateRef.current.value
    setTasks((prev) => [...prev, {title, tags, dueDate}])
  }

  return (
    <form className='task-creator' onSubmit={createTask}>
      <h1 className='task-creator__heading'>New Task</h1>

      <div className='task-creator__row'>
        <label className='task-creator__label'>Title:</label>
        <input className='task-creator__input' ref={titleRef} required/><br/>
      </div>

      {printTags()}
      {tagCount < 5 &&
      <button className='task-creator__button--add-tag' type='button' onClick={() => setTagCount(tagCount + 1)}>+ Add tag</button>}

      <div className='task-creator__row'>
        <label className='task-creator__label'>Due Date:</label>
        <input className='task-creator__input' ref={dueDateRef} required/><br/>
      </div>

      <button className='task-creator__button--submit'>Submit</button>
    </form>
  )
}

export default TaskCreator

