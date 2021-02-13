import {useState} from 'react'

const Tasks = () => {
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
    return(
        <>
            {tasks.map((task) => (
                <h3>{task.title}</h3>
            ))}
        </>
    )
}
export default Tasks