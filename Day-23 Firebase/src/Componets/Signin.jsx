import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function Signin() {
    const [email,setEmail]= useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignin = async ()=>{
        let user = await signInWithEmailAndPassword(auth,email,password)
        console.log(user)
        setEmail("")
        setPassword("")

        if(user){
            navigate("/dashboard");
            setEmail("")
            setPassword("")
        }
    }
  return (
    <div>
        <h1>Signin</h1>

        <input type="text" placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Password' onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={handleSignin}>Sign In</button>

        <Link to={"/"}>SignUp..</Link>
    </div>
  )
}
