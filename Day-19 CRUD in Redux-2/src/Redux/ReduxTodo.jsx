import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from '../feature/TodoSlice';
import './TodoRedux.css'; // Import your CSS file

export default function TodoRedux() {
    const [name, setname] = useState("");
    const [sub, setsub] = useState("");
    const [editindex, setEditindex] = useState(null);

    const count = useSelector((state) => state.todokey);
    const dispatch = useDispatch();

    const addRecord = () => {
        if (editindex == null) {
            dispatch(addData({ id: Date.now(), name, sub }));
        } else {
            dispatch(updateData({ id: editindex, name, sub }));
            setEditindex(null);
        }
        setname("");
        setsub("");
    };

    const deleteRecord = (id) => {
        dispatch(deleteData(id));
        setname("");
        setsub("");

    };

    const editReord = (id) => {
        let singledata = count.Students.find((item) => item.id == id);
        setname(singledata.name);
        setsub(singledata.sub);
        setEditindex(id);
    };

    return (
        <div className="container">
            <h1>ReduxTodo</h1>
    
            <input type="text" placeholder='Name' value={name} onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='Subject' value={sub} onChange={(e) => setsub(e.target.value)} />
            <button onClick={addRecord}>{editindex ? "Update Data" : "Add Data"}</button>
    
            {
                count ?
                    count.Students.map((e, i) => {
                        return (
                            <ul key={i}>
                                <li>
                                    <span>{e.name} ({e.sub})</span>
                                    <div className="button-group">
                                        <button className="edit-btn" onClick={() => editReord(e.id)}>Edit</button>
                                        <button className="delete-btn" onClick={() => deleteRecord(e.id)}>Delete</button>
                                    </div>
                                </li>
                            </ul>
                        );
                    }) :
                    <p>No Data</p>
            }
        </div>
    );
}    
