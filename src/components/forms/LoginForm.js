import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserService from '../../api/UserService'
import Form from './Form'
import { loginContext } from '../Stubook'

const LoginForm = () => {
  const {setLoggedIn} = useContext(loginContext)
  const navigate = useNavigate()

  const loginSubmit = (username, password) => {
    UserService.login(username, password).then(() => {
      setLoggedIn(true)
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
