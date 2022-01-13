import { useState, useContext, useEffect, useReducer } from 'react'
import './Task.scss'
import { TasksContext } from './TaskList'
import removeIcon from '../../img/remove.png'

const TaskUpdater = (props) => {
  const {tasks, tasksDispatch} = useContext(TasksContext)
  const [tagCount, setTagCount] = useState()
  const [fields, fieldsDispatch] = useReducer((state, action) => {
    switch (action.field) {
      case 'all':
        return {...action.value}
      case 'tags':
        let tags = [...state.tags]
        tags.splice(action.index, 1, action.value)
        return {...state, tags}
      default:
        return {...state, [action.field]: action.value}
    }
  }, {title: '', tags: [''], dueDate: ''})

  useEffect(() => {
    if (props.index !== -1) {
      let task = tasks[props.index]
      // setFields({title: task.title, tags: task.tags, dueDate: task.dueDate})
      fieldsDispatch({field: 'all', value: task})
      setTagCount(task.tags.length)
    } else {
      setTagCount(1)
    }
  }, [props])

  const handleChange = (event) => {
    fieldsDispatch({field: event.target.name, value: event.target.value})
  }

  const handleTagChange = (event, index) => {
    fieldsDispatch({field: 'tags', value: event.target.value, index})
  }

  const addTag = () => {
    fieldsDispatch({field: 'tags', value: '', index: tagCount})
    setTagCount((prev) => prev + 1)
  }

  const removeTag = (index) => {
    fields.tags.splice(index, 1)
    setTagCount(tagCount - 1)
  }

  const createTask = (event) => {
    event.preventDefault()
    let newTask = {...fields}
    if (props.index === -1) {
      tasksDispatch({type: 'create', newTask})
    } else {
      tasksDispatch({type: 'update', newTask, index: props.index})
    }
  }

  return (
    <form className='task-creator' onSubmit={createTask}>
      <button className='task-creator__button--exit' type='button' onClick={() => props.closePrompt()}>
        <svg className='button-image' xmlns="http://www.w3.org/2000/svg">
          <line x1='1' y1='1' x2='10' y2='10' stroke='black' strokeWidth='2'/>
          <line x1='1' y1='10' x2='10' y2='1' stroke='black' strokeWidth='2'/>
        </svg>
      </button>
      <h1 className='task-creator__heading'>{props.index !== -1 ? 'Update Task' : 'Create Task'}</h1>

      <div className='task-creator__row'>
        <label className='task-creator__label'>Title:</label>
        <input name='title' className='task-creator__input' value={fields.title} onChange={handleChange} required/><br/>
      </div>

      {/* {printTags()} */}
      {fields.tags.map((tag, index) => {
        return <div className='task-creator__row--tag'>
          {index === 0 && <label className='task-creator__label'>Tags:</label>}
          <input name='tags' className='task-creator__input--tag' onChange={(event) => handleTagChange(event, index)} value={fields.tags[index]}/>
          {index !== 0 &&
          <button type='button' className='task-creator__button--remove-tag' onClick={() => removeTag(index)}>
            <img className='task-creator__button--remove-tag__image' src={removeIcon}/>
          </button>}
      </div>
      })}
      {tagCount < 5 &&
      <button className='task-creator__button--add-tag' type='button' onClick={addTag}>+ Add tag</button>}

      <div className='task-creator__row'>
        <label className='task-creator__label'>Due Date:</label>
        <input name='dueDate' className='task-creator__input' value={fields.dueDate} onChange={handleChange} required/><br/>
      </div>

      <button className='task-creator__button--submit'>Submit</button>
    </form>
  )
}

export default TaskUpdater

