import './App.css';
import Header from './components/Header'
import Tasks from "./components/Tasks";
import {useState} from 'react'


function App() {
  const [tasks, setTask] = useState(
    [
        {
            id: 1,
            title: 'Task 1',
            reminder: true
        },
        {
            id: 2,
            title: 'Task 2',
            reminder: false
        },
        {
            id: 3,
            title: 'Task 3',
            reminder: false
        } 
    ]
  );

  //Delete task
  const deleteTask = (id) => {
    setTask(tasks.filter( (task) => task.id !== id ))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => 
        task.id === id ? 
        { ...task, reminder: !task.reminder }
        : task
      )
    )
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      /> 
      : 'No Tasks'}
    </div>
  );
}

export default App;
