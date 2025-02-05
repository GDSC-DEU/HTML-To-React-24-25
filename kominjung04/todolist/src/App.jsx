import { useState } from 'react'
import './App.css'
import List from './list.jsx'

function App() {
  const [todos, setTodos] = useState([
    {title:'과제하기',isFinished:true},
    {title:'토익공부하기',isFinished:true},
    {title:'청소하기',isFinished:false},

]);

const [input,setInput] = useState('')

  return (
    <>
    <h1>투두리스트</h1>

    <input type='text' placeholder='할 일 입력' value={input} onChange={(e) => setInput(e.target.value)}/>
    <button onClick={() => {
      if (input.trim() === '') return;
      const newTodo = {title:input,isFinished:false};
      setTodos([...todos,newTodo]);
      console.log("업데이트된 할 일 목록:", [...todos,newTodo])
      setInput('')
    }}>추가</button>
    <List todos={todos} />
    </>

  );
}

export default App;
