
function TaskItem({ task }) {

    return(
        <>
            <tr>
                <td>{task.task}</td>
                <td>{task.complete}</td>
            </tr>
        </>
    )
}

export default TaskItem;