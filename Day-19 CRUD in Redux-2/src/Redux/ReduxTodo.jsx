import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../feature/TodoSlice'

export default function ReduxTodo() {
    const [name, setname] = useState("")
    const [sub, setsub] = useState("")
    const [editindex , setEditindex] = useState(null)

    const count = useSelector((state) => {
        return state.todokey
    })
    const dispatch = useDispatch();

    const addRecord = () => {
        if(editindex == null){
            dispatch(addData({ id:Date.now(), name,sub}))
        }
        else{
            dispatch(updateData({ id: editindex, name, sub }))
            setEditindex(null)
        }
        setname("")
        setsub("")
    }

    const deleteRecord = (id) => {
        dispatch(deleteData(id))
    }

    const editReord =(id)=>{
        let singledata = count.Students.find((item)=> item.id == id);
        setname(singledata.name)
        setsub(singledata.sub)
        setEditindex(id)
    }

    return (
        <div>
            <h1>ReduxTodo</h1>

            <input type="text" placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='subject' value={sub} onChange={(e) => setsub(e.target.value)} />
            <button onClick={addRecord}>{editindex ? "Update Data" : "Add Data"}</button>

            {
                count ?
                    count.Students.map((e, i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.sub}</li>
                            <button onClick={() => deleteRecord(e.id)}>Delete</button>
                            <button onClick={()=> editReord(e.id)}>edit</button>
                        </ul>
                    })

            :
            <p>NO Data</p>
                }
        </div>
    )
}
