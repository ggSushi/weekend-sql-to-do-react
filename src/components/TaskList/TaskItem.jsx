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

    const toggleStatus = () => {
        axios.put( '/todo' ).then((response) => {
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
                <td>{task.complete}</td>
                <td>
                    <input type="checkbox" value="no" onChange={toggleStatus} />
                    <button onClick={removeTask}>Clear</button>
                </td>
            </tr>
        </>
    )
}

export default TaskItem;