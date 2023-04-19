import styles from '../App.module.css';
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
            completed: false,
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

      const completed = (id) => {
        setTodoList(
            todoList.map((task) => {
                if (task.id === id) {
                    return{...task, completed: true};
                }else {
                    return task;
                }
            })
        )
      } 


    return (
    <>
        <div>
            <h1>What Todo?</h1>
            <input type="text" value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>+</button>
            <h3>{todoList.length} task remaining</h3>
        </div>
        <div>
            {todoList.map((task) => {
                return <div className={styles.tasks} style={{backgroundColor: task.completed ? '#7CF47C' : 'none'}}>
                            <p>{task.taskName}</p>
                            <button onClick={() => deleteTask(task.id)}>x</button>
                            <button onClick={() => completed(task.id)}>&#10004;</button>
                        </div>
            })}
        </div>
    </>
    );
}



export default TodoList;