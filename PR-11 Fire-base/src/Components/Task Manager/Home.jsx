import React, { useEffect, useState } from 'react'
import { database } from '/firebaseConfig';
import { useNavigate } from 'react-router-dom'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';

export default function Home() {

    const [taskRecord, setTaskRecord] = useState([]);

    useEffect(() => {
        const fetchTask = async () => {
            let taskData = await getDocs(collection(database, "TaskDetails"));
            setTaskRecord(taskData.docs.map((doc) => ({ docId: doc.id, ...doc.data() })));

        }

        fetchTask();
    }, [])

    //Delete
    const deleteTask = async (id) => {
        const taskDelete = doc(database, "TaskDetails", id);
        await deleteDoc(taskDelete);

        setTaskRecord(taskRecord.filter(task => task.docId !== id));
    }

    
    const editTask = async (task) => {
        navigate("/taskmanager/addtask", { state: { task } });

    }

    const navigate = useNavigate();
    const navigateAddTask = () => {
        navigate("/taskmanager/addtask");
    }


    return (
        <div>

            <div className="div1 h-auto w-[97%] ms-[1.5%] mt-[30px]" style={{color:"black"}}>

                <div className="allTask flex justify-start gap-[20px] flex-wrap" style={{color:"black"}}>
                    {
                        taskRecord && (
                            taskRecord.map((tasks) => {
                                return (
                                    <div className='task-card w-[23%] h-auto pt-[30px] pb-[30px] mt-[30px]'>
                                        <p className='task-title'>Title: {tasks.task}</p>
                                        <p className='mt-3' task-description><b>Description:</b> {tasks.description}</p>
                                        <p className='mt-3'><b>Assign To:</b> {tasks.taskassignto}</p>
                                        <p className='mt-3'><b>Date:</b> {tasks.date}</p>
                                        <p className='mt-3'><b>Category:</b> {tasks.category}</p>
                                        
                                        <div className="status flex items-center">
                                        <label className='font-bold' htmlFor="">Status:</label>
                                        <div className={`task-status h-[50px] w-[150px] mt-3 ms-2 flex justify-center items-center
                                             ${tasks.status === 'pending' ? 'bg-red-700' : tasks.status === 'ongoing' ? 'bg-yellow-600' : 'bg-green-700'}`} style={{color:"black"}}>
                                            {tasks.status}
                                        </div>
                                        </div>
                                         
                                        <p><b>Priority:</b> {tasks.priority}</p>
                                        <div className="task-actions mt-5">
                                            <button onClick={() => editTask(tasks)} className="btn-edit">Edit</button>
                                            <button onClick={() => deleteTask(tasks.docId)} className="btn-delete">Delete</button>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>

                <div className="add-task-card h-[200px] w-[23%] mt-[50px] flex justify-center items-center] rounded-[15px]">
                    <div className="text cursor-pointer text-center" onClick={navigateAddTask}>
                        <p className='text-5xl'>+</p>
                        <p className='text-xl'>Add Task</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
