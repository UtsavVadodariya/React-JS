import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'

export default function App() {
  return (
    <div className='flex main1 h-auto'>
      <div className='w-[17%] fixed'>
        <Nav />
      </div>

      <div className='w-[87%] ml-[17%]'>
        <Home />
      </div>
    </div>
  )
}
