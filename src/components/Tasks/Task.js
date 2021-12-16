
const Task = (props) => {

  return (
    <div className='task-single'>
      <div className='task-single__field'>{props.title}</div>
      <div className='task-single__field'>{props.tags.join(', ')}</div>
      <div className='task-single__field'>{props.dueDate}</div>
      <div className='task-single__buttons'>
        <button className='task-single__buttons__edit'>edit</button>
        <button className='task-single__buttons__delete'>delete</button>
      </div>
    </div>
  )
}

export default Task

