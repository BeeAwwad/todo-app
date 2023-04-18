import { useState } from 'react';


const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');
    
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
      };

      const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
        };
        setTodoList([...todoList, task]);
      };

      const deleteTask = (taskId) => {
        const newTodoList = todoList.filter(task => {
            if (task.id === taskId){
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
                    <p>{task.taskName}</p>
                    <button onClick={() => deleteTask(task.id)}>x</button>
                </div>
            })}
        </div>
        </>
    );
}



export default TodoList;