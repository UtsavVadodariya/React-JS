import React, { useState } from 'react'

export default function ControlledCo() {
    const [name, setName] =useState("");
    const handleChange =(e)=>{
        console.log(e.target.value);
    }
  return (
    <div>
        <h1>Controlled and Uncontrolled component</h1>
        <input type="text" placeholder='enter name' onChange={(e)=> handleChange(e)}/>

    </div>
  )
}
