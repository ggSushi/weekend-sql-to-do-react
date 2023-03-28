import axios from 'axios';


function TaskItem({ task, getTasks, taskList }) {

    // let initialColor = document.querySelector('td');
    // for ( let item of taskList) {
    //     if (item.complete === true) {
    //         initialColor.style.backgroundColor = '#0ff04a';
    //     } else {
    //         initialColor.style.backgroundColor = 'initial';
    //     }
    // }


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

        //! Possible solution. Still need to fix
            // const getDecoration = () => {
            // if( creature.name === 'a' ) {
            //         return 'line-through';
            //     } else {
            //         return 'none';
            // }
            // }

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
                <td >{task.task}</td>
                {/* This will turn the information from DB object into usable string */}
                <td>{JSON.stringify(task.complete)}</td>
                <td>
                    <input type="checkbox" value="no" onChange={toggleStatus} />
                    <button onClick={removeTask}>Clear</button>
                </td>
            </tr>
        </>
    )
}

export default TaskItem;