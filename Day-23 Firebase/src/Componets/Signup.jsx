import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignup = async ()=>{
        let user = await createUserWithEmailAndPassword(auth,email,password)
        console.log(user);
        if(user){
            navigate("/dashboard")
            setEmail("")
            setPassword("")

        }
        
    }

  return (
    <div>
        <h1>Signup</h1>

        <input type="text" placeholder='Enter email' onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Password' onChange={(e)=> setPassword(e.target.value)}/>

        <button onClick={handleSignup}>SignUp</button>

        <Link to={"/signin"}>sign in ?</Link>
    </div>
  )
}
