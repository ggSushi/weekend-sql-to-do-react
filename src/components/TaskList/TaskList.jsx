import TaskItem from './TaskItem.jsx';

function TaskList({ taskList, getTasks }) {

    return(
        <>
            <h2>To Do List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Task To Do</th>
                        <th>Completed</th>
                        <th>Check-off</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.map(task => (
                        <TaskItem 
                            key={task.id}
                            task={task}
                            getTasks={getTasks}
                            taskList={taskList}
                        />
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default TaskList;