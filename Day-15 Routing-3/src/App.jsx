import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Delete from './Components/Delete'
import Update from './Components/Update'

export default function App() {
  const [data, setData] = useState([
      { id: 1, name: "Utsav", subject: "React" },
      { id: 2, name: "Vadodariya", subject: "React" }
    ])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data} />}></Route>
          <Route path='/create' element={<Create data={data} setData={setData}/>}></Route>
          <Route path='/delete' element={<Delete data={data} setData={setData}/>}></Route>
          <Route path='/update' element={<Update data={data} setData={setData}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
