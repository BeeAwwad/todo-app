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
      };
      
    //   const editTask = (Task) => {

    //   };


    return (
    <div>
        <div>
        <h1>What Todo?</h1>
        <h3>{todoList.length} task remaining</h3>
            {todoList.map((task) => {
                return <div className={styles.tasks} style={{backgroundColor: task.completed ? '#7CF47C' : 'white',
                                                            border: task.completed ? 'white 0px none' : '#73c2fb 5px dashed',
                                                            color: task.completed ? 'white' : 'black'}}>
                            <div className={styles.task}>
                                <p>{task.taskName}</p>
                            </div>
                            <div className={styles.buttons}>
                                {/* <button onClick={() => editTask(task) }>edit</button> */}
                                <button className={`${styles.btnHover} ${styles.color11}`} onClick={() => deleteTask(task.id)}>x</button>
                                <button className={`${styles.btnHover} ${styles.color5}`} onClick={() => completed(task.id)}>&#10004;</button>
                            </div>
                        </div>
            })}
        </div>
        <div className={styles.input}>
            <input placeholder="write a task" type="text" value={newTask} onChange={handleInputChange} />
            <button onClick={addTask} className={`${styles.btnHover} ${styles.color9 }`}>+</button>
        </div>
    </div>
    );
};



export default TodoList;