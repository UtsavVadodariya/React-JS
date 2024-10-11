import React, { useContext } from 'react'
import { myContext } from './Context'

export default function Context2() {
  const count = useContext(myContext)
  return (
    <div>
      <h1>Context2 {count}</h1>

    </div>
  )
}
