import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Routing/Home'
import About from './Components/Routing/About'
import Contact from './Components/Routing/Contact'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>  
            <Route path='/About/:id' element={<About/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
