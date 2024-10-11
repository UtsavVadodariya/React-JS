import React, { createContext, useState } from 'react'
import Context1 from './Context1';

export const myContext = createContext();

export default function Context() {
  const [count,setCount] = useState(0);
  return (
    <div>
      <h1>Context</h1>
      <myContext.Provider value={count}>
        <Context1/>
      </myContext.Provider>
    </div>
  )
}
