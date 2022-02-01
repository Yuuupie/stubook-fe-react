import LoginForm from './forms/LoginForm'
import RegistrationForm from './forms/RegistrationForm'
import Layout from './layout/Layout'
import TaskList from './tasks/TaskList'
import './Stubook.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, createContext } from 'react'

export const loginContext = createContext()

const Stubook = (props) => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <loginContext.Provider value={{loggedIn, setLoggedIn}}>
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
      </loginContext.Provider>
    </div>
  )
}

export default Stubook

