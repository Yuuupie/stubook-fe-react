import { useContext } from 'react'
import { TasksContext } from './TaskList'
import './Task.scss'
import deleteButton from '../../img/delete.png'
import editButton from '../../img/editing.png'

const Task = (props) => {
  const {tasks, tasksDispatch} = useContext(TasksContext)

  return (
    <div className='task-single'>
      <div className='task-single__field'>{props.title}</div>
      <div className='task-single__field'>{props.tags.join(', ')}</div>
      <div className='task-single__field'>{props.dueDate}</div>
      <div className='task-single__buttons'>
        <button className='task-single__buttons__button'>
          <img className='button-image' alt='edit' src={editButton}/>
        </button>
        <button className='task-single__buttons__button' onClick={() => tasksDispatch({type: 'remove', index: props.index})}>
          <img className='button-image' alt='delete' src={deleteButton}/>
        </button>
      </div>
    </div>
  )
}

export default Task
