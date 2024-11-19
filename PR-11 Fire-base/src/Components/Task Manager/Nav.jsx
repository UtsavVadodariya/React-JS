import { doc, getDoc } from 'firebase/firestore'
import { auth, database } from '/firebaseConfig'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Link } from 'react-router-dom';
// import { FaUserCircle } from "react-icons/fa";

export default function Nav() {

  const [user, setUser] = useState("");
  const [record, setRecord] = useState("");

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    })

  })

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  })

  const fetchUser = () => {
    getDoc(doc(database, "UserDetails", user.uid))
      .then((data) => {
        setRecord(data.data());
      })
  }

  return (
    <div>

      <nav className='h-[80px] w-[97%] ms-[1.5%] rounded-[15px] bg-[#9a8166] mt-[15px] flex justify-between items-center'>
        <div className="nav1">
          <center>
          <p className='text-2xl text-black font-bold ps-3' style={{fontSize:"25px"}}>Task Manager</p>
          </center>
        </div>
        <div className="nav1">
          <div className="nav2 text-black flex items-center">
<center>
            <Link to={'home'}>Home</Link>
            <Link className='ms-[50px]' to={'addtask'} style={{marginLeft:"10px"}}>Add Task</Link>
            </center>
            <div className="icon flex items-center ms-[50px] me-[50px]" style={{color:"black"}}>
              {
                record && (
                  <p className='ms-2'>{record.name}</p>
                )
              }
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  )
}
