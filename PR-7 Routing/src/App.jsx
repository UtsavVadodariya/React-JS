import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Componets/Routing/Home";
import Create from './Componets/Routing/Create';

export default function App() {
  const [data,setData] = useState([
    {id : 1, name}
  ])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
