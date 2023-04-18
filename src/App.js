import styles from './App.module.css';
import TodoList from './components/todolist';

function App() {

  return (
    <div className={styles.App}>
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
