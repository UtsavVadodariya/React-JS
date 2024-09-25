import React, { useEffect, useState } from 'react'

export default function LocalStorage() {
    const [name, setName] = useState("")
    const [sub, setSub] = useState("")
    const [city, setCity] = useState("")

    const [record, setRecord] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Student")) || []
        setRecord(data)
    }, [record])

    const add = () => {
        let user = { id: Date.now(), name, sub, city }
        record.push(user)
        localStorage.setItem("Student", JSON.stringify(record))
    }

    return (
        <div>
            <h1>Curd Opration</h1>

            <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter Sub' onChange={(e) => setSub(e.target.value)} />
            <input type="text" placeholder='Enter City' onChange={(e) => setCity(e.target.value)} />

            <button onClick={add}>Add</button>


            <table border='1' width="50%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>Subject</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ?
                            record.map((e, i) => {
                                return <tr key={i}>
                                    <td>{e.id} </td>
                                    <td>{e.name} </td>
                                    <td>{e.sub} </td>
                                    <td>{e.city} </td>
                                </tr>
                            })
                            :
                            " "
                    }
                </tbody>
            </table>
        </div>
    )
}
