import { Link, useNavigate } from 'react-router-dom'
import Form from './Form'

const LoginForm = (props) => {
  const navigate = useNavigate()

  const loginSubmit = (username, password) => {
    let accounts = JSON.parse(localStorage.getItem('accounts'))
    if (username in accounts && password === accounts[username]) {
      navigate('/tasklist')
    }
  }

  return (
    <>
      <Form submitAction={loginSubmit} title='Login' buttonLabel='Login'/>
      <br/>
      <Link to='/register'>
        <button type='button'>Registration Page</button>
      </Link>
    </>
  )
}

export default LoginForm
