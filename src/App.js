import styles from './App.module.css';
import TodoList from './components/todolist';

function App() {

  return (
    <div className={styles.App}>
      <TodoList />
    </div>
  );
}

export default App;
