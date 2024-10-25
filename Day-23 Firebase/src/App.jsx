import React from 'react'
import Signup from './Componets/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './Componets/Signin'
import Dashboard from './Componets/Dashboard'

export default function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Signup}></Route>
            <Route path='/signin' Component={Signin}></Route>
            <Route path='/dashboard' Component={Dashboard}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
