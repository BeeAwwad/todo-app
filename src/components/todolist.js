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

      const deleteTask = (taskName) => {
        const newTodoList = todoList.filter(task => {
            if (task === taskName){
                return false;
            }else{
                return true;
            }
        });

        setTodoList(newTodoList);
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
                    <p>{task}</p>
                    <button onClick={() => deleteTask(task)}>x</button>
                </div>
            })}
        </div>
        </>
    );
}



export default TodoList;