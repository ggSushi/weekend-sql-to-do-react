import axios from 'axios';


function TaskItem({ task, getTasks }) {
    let taskStatus = JSON.stringify(task.complete);


    const removeTask = (event) => {
        console.log(`in removeTask ${task.id}`);
        axios.delete(`/todo/${task.id}`).then((response) => {
            getTasks();
        }).catch((error) => {
            console.log(`Error in removeTask() ${error}`);
            alert(`Sorry, dawg. Can't DELETE me!`);
        })
    };
    
    //TODO if statement
    const toggleStatus = () => {
        let taskStatusDisplay = document.querySelector('.taskStatus');
        // if (task.complete != true) {
        //     taskStatusDisplay.innerHTML = `
        //     ${taskStatus}
        // }
        taskStatusDisplay.innerHTML = `
            <>${taskStatus}</>
            `;
    };

    return(
        <>
            <tr>
                <td>{task.task}</td>
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