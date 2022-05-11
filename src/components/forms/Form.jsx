import { useState } from 'react'
import './Form.scss'

const Form = (props) => {
  const [fields, setFields] = useState({username: '', password: ''})

  /* Login or register on submission depending on function passed as prop */
  const submit = (event) => {
    event.preventDefault()
    props.submitAction(fields.username, fields.password)
  }

  const handleChange = (event) => {
    setFields((prev) => ({...prev, [event.target.name]: event.target.value}))
  }

  return (
    <form className='form' onSubmit={submit}>
      <h1 className='form__title'>{props.title}</h1>

      <div className='form__row'>
        <label className='form__row__label'>Username:</label>
        <input className='form__row__input' name='username' value={fields.username} onChange={handleChange} required/>
      </div><br/>

      <div className='form__row'>
        <label className='form__row__label'>Password:</label>
        <input className='form__row__input' name='password' value={fields.password} onChange={handleChange} required type='password'/>
      </div><br/>

      <button type='submit'>{props.buttonLabel}</button>
    </form>
  )
}

export default Form
