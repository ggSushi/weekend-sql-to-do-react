import axios from 'axios';


function TaskItem({ task, getTasks }) {

    const removeTask = (event) => {
        console.log(`in removeTask ${task.id}`);
        axios.delete(`/todo/${task.id}`).then((response) => {
            getTasks();
        }).catch((error) => {
            console.log(`Error in removeTask() ${error}`);
            alert(`Sorry, dawg. Can't DELETE me!`);
        })
    };

    return(
        <>
            <tr>
                <td>{task.task}</td>
                <td>{task.complete}</td>
                <td>
                    <input type="radio" />
                    <button onClick={removeTask}>Clear</button>
                </td>
            </tr>
        </>
    )
}

export default TaskItem;