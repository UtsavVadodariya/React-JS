import React from 'react'

export default function Local() {

    localStorage.setItem("Name","Utsav Vadodariya")

    localStorage.removeItem("Name")

    let obj = {Name : "Utsav Vadodariya" , Subject : "Full-Stack"}

    localStorage.setItem("Myobj" , JSON.stringify(obj));


    let objData = JSON.parse(localStorage.getItem("Myobj"))

    console.log(objData)
  return (
    <div>
    </div>
  )
}
