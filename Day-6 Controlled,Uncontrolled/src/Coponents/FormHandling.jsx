import React, { useState } from 'react'

export default function FormHandling() {
    const[name,setName] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Form submitted");
    }
  return (
    <div>
        <h1>Controlled and Uncontrolled component</h1>
        <h1>{name}</h1>
        <button onClick={()=> setName("student")}>Click</button>
        <form action="" onSubmit={(event)=> handleSubmit(event)}>
            <input type="text" />
            <input type="text" />
            <input type="Submit" />
        </form>

    </div>
  )
}
