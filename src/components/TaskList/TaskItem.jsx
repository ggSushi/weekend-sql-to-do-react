import axios from 'axios';


function TaskItem({ task, getTasks }) {
    let taskStatus = JSON.stringify(task.complete);

    //TODO displayStatus function goes INTO toggleStatus


    const removeTask = (event) => {
        console.log(`in removeTask ${task.id}`);
        axios.delete(`/todo/${task.id}`).then((response) => {
            getTasks();
        }).catch((error) => {
            console.log(`Error in removeTask() ${error}`);
            alert(`Sorry, dawg. Can't DELETE me!`);
        })
    };
    //! Needed to push the 'task' prop into this function!
    const toggleStatus = (event) => {
        const updateTask = { complete: !task.complete }
        // The below if statement needs to be OPPOSITE of what I want because of the order at which it runs.
        // This code will use the status PRIOR to making the status change, meaning 
        // that the status will change AFTER the color is assigned.
        //  So, in this case, it will assign the color first, THEN change to corresponding status
        if (task.complete != true) {
            event.target.parentElement.parentElement.style.backgroundColor = '#0ff04a';
        } else {
            event.target.parentElement.parentElement.style.backgroundColor = 'initial';
        }

        console.log('sanity check', task);
        axios.put(`/todo/${task.id}`, updateTask ).then((response) => {
            getTasks();
        }).catch((error) => {
            console.log(`Error in toggleStatus() ${error}`);
            alert(`Sorry, dawg. You won't PUT me in my place!`);
        })
    }

    return(
        <>
            <tr>
                <td>{task.task}</td>
                {/* This will turn the information from DB object into usable string */}
                <td>{taskStatus}</td>
                <td>
                    <input type="checkbox" value="no" onChange={toggleStatus} />
                    <button onClick={removeTask}>Clear</button>
                </td>
            </tr>
        </>
    )
}

export default TaskItem;