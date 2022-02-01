import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { loginContext } from '../Stubook'

const Header = () => {
  const {loggedIn, setLoggedIn} = useContext(loginContext)

  return (
    <div className='header'>
      <Link className='header__logout' onClick={() => setLoggedIn(false)} to='/login'>Log Out</Link>
    </div>
  )
}

export default Header

