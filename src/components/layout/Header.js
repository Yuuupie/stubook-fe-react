import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
   return (
     <div className='header'>
       <Link className='header__logout' to='/login'>logout</Link>
     </div>
   )
}

export default Header

