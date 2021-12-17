import { useRef } from 'react'
import './Form.scss'

const Form = (props) => {
  const usernameRef = useRef('')
  const passwordRef = useRef('')

  const submit = (event) => {
    event.preventDefault()
    let username = usernameRef.current.value
    let password = passwordRef.current.value
    props.submitAction(username, password)
  }

  return (
    <form className='form' onSubmit={submit}>
      <h1 className='form__title'>{props.title}</h1>

      <div className='form__row'>
        <label className='form__row__label'>Username:</label>
        <input className='form__row__input' ref={usernameRef} required/>
      </div><br/>

      <div className='form__row'>
        <label className='form__row__label'>Password:</label>
        <input className='form__row__input' ref={passwordRef} required type='password'/>
      </div><br/>

      <button type='submit'>{props.buttonLabel}</button>
    </form>
  )
}

export default Form
