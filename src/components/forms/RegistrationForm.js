import { Link, useNavigate } from 'react-router-dom'
import Form from './Form'

const RegistrationForm = (props) => {
  const navigate = useNavigate()

  const registrationSubmit = (username, password) => {
    let accounts = JSON.parse(localStorage.getItem('accounts'))
    if (accounts == null) {
      accounts = {}
    }
    if (!(username in accounts)) {
      accounts[username] = password
    }
    localStorage.setItem('accounts', JSON.stringify(accounts))
    navigate('/tasklist')
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

