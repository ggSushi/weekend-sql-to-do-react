import {useState, useEffect} from 'react';
import axios from 'axios';
import TaskForm from '../TaskList/TaskForm.jsx';
import TaskList from '../TaskList/TaskList.jsx';

function App () {
  let [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTasks()
  }, []);

  const getTasks = () => {
    axios.get('/todo').then((response) => {
      console.log(response.data);
      setTaskList(response.data);
    }).catch((error) => {
      console.log(`Error in getTasks() ${error}`);
      alert('There was an error in App, dawg');
    })
  };

  return (
    <div>
      <h1>TO DO APP</h1>
      <TaskForm getTasks={getTasks}/>
      <TaskList 
        taskList={taskList}
        getTasks={getTasks}
      />
    </div>
  );

}

export default App
