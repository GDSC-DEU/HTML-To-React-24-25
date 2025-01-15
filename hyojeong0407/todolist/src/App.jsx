import './App.css'
import TodoList from './components/Todolist'

function App() {
  return (
    <>
      <h1>Todo List</h1>

      <input type="text" placeholder="할 일을 입력해주세요!" />
      <button>추가</button>
      <TodoList />
    </>
  )
}

export default App