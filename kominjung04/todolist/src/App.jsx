import { useState } from 'react'
import './App.css'
import List from './list.jsx'

function App() {
  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('')

  const Delete = (id) => {
    const updateTodo = todos.filter(todo => todo.id !== id)
    setTodos(updateTodo)
    console.log(updateTodo)
  }
  return (
    <>
    <h1>투두리스트</h1>

    <input type='text' placeholder='할 일 입력' value={input} onChange={(e) => setInput(e.target.value)}/>
    <button onClick={() => {
      if (input.trim() === '') return;

      const newTodo = {id:Date.now(),title:input,isFinished:false};
      setTodos([...todos,newTodo]);
      console.log("업데이트된 할 일 목록:", [...todos,newTodo])
      setInput('')
    }}>추가</button>
    <List todos={todos} onDelete={Delete}/>
    </>

  );
}

export default App;
