import React, { useState } from 'react'

export default function Funtion() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("utsav")
    const [isVisible,setIsVisible] = useState(false)

    const submit =(event) =>{
        event.preventDefault()
        console.log("form Submitted");
        let obj ={
            name: name
        }
        console.log(obj)
    }
  return (
    <div>
        <h1>{count}</h1>

        <button onClick={()=> setCount(count +1)}>Increse</button>
        <button onClick={()=> setCount(count -1)}>Decrese</button>

        <form onSubmit={(event)=> submit(event)}>
            <input type="text" placeholder='Enter your Name'/>
            <input type="text" placeholder='Enter your Subject'/>

            <button type='submit'>Submit</button>
        </form>

        {
            isVisible ? <h1>bye</h1>:<h1>hiiii</h1>
        }
        <button onClick={()=> setIsVisible(!isVisible)}>click</button>
    </div>
  )
}
