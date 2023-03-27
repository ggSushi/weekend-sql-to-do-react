import { useState, useEffect } from 'react';
import axios from 'axios';

function TaskForm({ getTasks }) {
    let [newTask, setNewTask] = useState('');
    // Below line isn't technically needed, so long as the object key exists in the Database
    // let [status, setNewStatus] = useState(false)

    const addTask = (event) => {
        axios.post('/todo', {
            task: newTask,
        }).then ((response) => {
            setNewTask('');

            getTasks();
        }).catch((error) => {
            console.log(`Error in TaskForm() ${error}`);
        })
    };



    return(
        <div>
            <h3>New Task</h3>
            <form onSubmit={addTask}>
                <input type="text" placeholder="Add new task" onChange={(event) => setNewTask(event.target.value)}/>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default TaskForm;