import { useState } from 'react';


const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');
    
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
      };

      const addTask = () => {
        setTodoList([...todoList, newTask]);
      };


    return (
        <>
        <div>
            <input type="text" value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>+</button>
        </div>
        <div>
            {todoList.map((task) => {
                return <div>
                    <p>{task}</p>;
                    {/* <button onClick={() => deleteTask(task)}>x</button> */}
                </div>
            })}
        </div>
        </>
    );
}



export default TodoList;