import React from 'react'
import { useState } from 'react'

export default function UseState() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Name")
  const [prr, setArr] = useState(["1,2,3,4,5"])
  const [obj, setObj] = useState({ name: "utsav", surname: "Vadodariya" })

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>UseState</h1>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h1>{name}</h1>


      {
        prr.map((e, i) => {
          return <p key={i} >{e}</p>
        })

      }
    </div>
  )
}
