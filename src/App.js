import './App.css';
import Header from './components/Header'
import Tasks from "./components/Tasks";
import {useState} from 'react'


function App() {
  const [tasks, setTask] = useState(
    [
        {
            id: 1,
            title: 'Task 1'
        },
        {
            id: 2,
            title: 'Task 2'
        },
        {
            id: 3,
            title: 'Task 3'
        }
    ]
  );

  //Delete task
  const deleteTask = (id) => {
    setTask(tasks.filter( (task) => task.id !== id ))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks'}
    </div>
  );
}

export default App;
