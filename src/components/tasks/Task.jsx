import './Task.scss'
import deleteButton from '../../img/delete.png'
import editButton from '../../img/editing.png'

const Task = (props) => {

  const formattedDate = () => {
    let date = new Date(props.task.dueDate)
    return date.toLocaleDateString()
  }

  return (
    <div className='task-single'>
      <div className='task-single__field'>{props.task.title}</div>
      <div className='task-single__field'>{props.task.tags.join(', ')}</div>
      <div className='task-single__field'>{formattedDate()}</div>
      <div className='task-single__buttons'>
        <button className='task-single__buttons__button' onClick={() => props.openUpdateTaskPrompt(props.task)}>
          <img className='button-image' alt='edit' src={editButton}/>
        </button>
        <button className='task-single__buttons__button' onClick={() => props.deleteTask(props.task.id)}>
          <img className='button-image' alt='delete' src={deleteButton}/>
        </button>
      </div>
    </div>
  )
}

export default Task

