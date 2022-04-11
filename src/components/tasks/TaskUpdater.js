import { useEffect, useReducer } from 'react'
import './Task.scss'
import removeIcon from '../../img/remove.png'

const TaskUpdater = (props) => {
  // Fields on form. Decision to use useReducer instead of useState made for easier maintainability.
  const [fields, fieldsDispatch] = useReducer((state, action) => {
    switch (action.operation) {
      // Set all fields
      case 'init':
        return action.task
      // Update non-tag fields
      case 'updateField':
        return {...state, [action.field]: action.value} 
      // Update tag fields (including adding and removing)
      case 'updateTag':
        let tagsCopy = [...state.tags]
        if ('value' in action) {
          tagsCopy.splice(action.index, 1, action.value)
        } else {
          tagsCopy.splice(action.index, 1)
        }
        return {...state, tags: tagsCopy}
    }
  }, props.task)

  /* Update fields on form if second task is chosen to edit while prompt is already open for first task */
  useEffect(() => {
    fieldsDispatch({operation: 'init', task: props.task})
  }, [props])

  /* Handle input change for non-tag fields */
  const handleChange = (event) => {
    fieldsDispatch({operation: 'updateField', field: event.target.name, value: event.target.value})
  }

  /* Handle input change for tag fields */
  const handleTagChange = (event, index) => {
    fieldsDispatch({operation: 'updateTag', value: event.target.value, index})
  }

  /* Add additional tag field */
  const addTag = () => {
    fieldsDispatch({operation: 'updateTag', value: '', index: fields.tags.length})
  }

  /* Remove selected tag field */
  const removeTag = (index) => {
    fieldsDispatch({operation: 'updateTag', index})
  }

  /* Create or update task depending on 'newTask' prop */
  const submitTask = (event) => {
    event.preventDefault()
    let newTask = {...fields}
    if (props.newTask) {
      props.createTask(newTask)
    } else {
      props.updateTask(newTask)
    }
  }

  return (
    <form className='task-creator' onSubmit={submitTask}>
      <button className='task-creator__button--exit' type='button' onClick={() => props.closePrompt()}>
        {/* Generated image for top-right 'X' on prompt for closing */}
        <svg className='button-image' xmlns="http://www.w3.org/2000/svg">
          <line x1='1' y1='1' x2='10' y2='10' stroke='black' strokeWidth='2'/>
          <line x1='1' y1='10' x2='10' y2='1' stroke='black' strokeWidth='2'/>
        </svg>
      </button>

      <h1 className='task-creator__heading'>{props.newTask ? 'Create Task' : 'Update Task'}</h1>

      <div className='task-creator__row'>
        <label className='task-creator__label'>Title:</label>
        <input name='title' className='task-creator__input' value={fields.title} onChange={handleChange} required/><br/>
      </div>

      {fields.tags.map((tag, index) => {
        return <div className='task-creator__row--tag'>
          {index === 0 && <label className='task-creator__label'>Tags:</label>}
          <input name='tags' className='task-creator__input--tag' onChange={(event) => handleTagChange(event, index)} value={tag}/>
          {index !== 0 &&
          <button type='button' className='task-creator__button--remove-tag' onClick={() => removeTag(index)}>
            <img className='task-creator__button--remove-tag__image' alt='remove-tag' src={removeIcon}/>
          </button>}
        </div>
      })}
      {fields.tags.length < 5 &&
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

