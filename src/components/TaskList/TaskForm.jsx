import { useState, useEffect } from 'react';
import axios from 'axios';

function TaskForm({ getTasks }) {
    let [newTask, setNewTask] = useState('');
    let [status, setNewStatus] = useState('no')

    const addTask = () => {
        axios.post('/todo', {
            task: newTask,
            complete: status
        }).then ((response) => {
            setNewTask('');
            setNewStatus('no');

            getTasks();
        }).catch((error) => {
            console.log(`Error in TaskForm() ${error}`);
        })
    };



    return(
        <div>
            <h3>New Task</h3>
            <form onSubmit={addTask}>
                <input type="text" placeholder="Add new task" onChange={(e) => setNewTask(e.target.value)}/>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default TaskForm;