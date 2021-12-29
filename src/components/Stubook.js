import LoginForm from './forms/LoginForm'
import RegistrationForm from './forms/RegistrationForm'
import Layout from './layout/Layout'
import TaskList from './tasks/TaskList'
import './Stubook.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Stubook = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<LoginForm/>}/>
            <Route path='login' element={<LoginForm/>}/>
            <Route path='register' element={<RegistrationForm/>}/>
            <Route path='tasklist' element={<TaskList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Stubook

