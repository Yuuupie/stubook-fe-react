import { Link, useNavigate } from 'react-router-dom'
import UserService from '../../api/UserService'
import Form from './Form'

const LoginForm = (props) => {
  const navigate = useNavigate()

  const loginSubmit = (username, password) => {
    UserService.login(username, password).then((res) => {
      navigate('/tasklist')
    }).catch((err) => {
      console.log(err)
    })
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
