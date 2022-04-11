import { Link, useNavigate } from 'react-router-dom'
import UserService from '../../api/UserService'
import Form from './Form'

const RegistrationForm = () => {
  const navigate = useNavigate()

  const registrationSubmit = (username, password) => {
    UserService.register(username, password).then(() => {
      navigate('/')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Form submitAction={registrationSubmit} title='Registration' buttonLabel='Register'/>
      <br/>
      <Link to='/login'>
        <button type='button'>Login Page</button>
      </Link>
    </>
  )
}

export default RegistrationForm

