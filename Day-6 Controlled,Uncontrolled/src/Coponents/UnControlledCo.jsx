import React, { useRef } from 'react'

export default function UnControlledCo() {
    const inputRef = useRef();
    const handleClick =()=>{
        let value = inputRef.current.value
        alert(`input value is ${value}`)
    }
  return (
    <div>
        <h1>Controlled and Uncontrolled component</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
