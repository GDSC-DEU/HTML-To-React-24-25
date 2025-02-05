import './App.css'
import { useState } from 'react';
import TodoList from './components/Todolist'

function App() {
  const [inputValue, setInputValue] = useState('');   // inputValue: 입력 값, setInputValue: 입력 값 set
  const [todos, setTodos] = useState([]);   // todos: 할 일 목록, setTodos: 할 일 목록 set

  // 입력 값을 setInputValue로 set
  const changeTodoInput = (e) => {    // changeTodoInput: 입력 값 변경 함수, e: 이벤트 객체
    setInputValue(e.target.value);    // e.target.value: 입력 값
  }

  // 할 일 목록에 추가
  const addTodo = () => {
    setTodos([...todos, inputValue]);   // ...todos: 기존 할 일 목록, inputValue: 현재 입력 값
    setInputValue('');  // 입력 값 초기화
  }

  return (
    <>
      <h1>Todo List</h1>

      <input type="text" value={inputValue} onChange={changeTodoInput} placeholder="할 일을 입력해주세요!" />   {/* value: 입력 값, onChange: 입력 값 변경 */}
      <button onClick={addTodo}>추가</button>   {/* 추가 버튼 */}
      <div className='content-list'>    {/* 할 일 목록 */}
        {todos.map((todo, index) => {   // todos.map: 할 일 목록을 순회하며 TodoList 컴포넌트 반환
          return (
            <TodoList key={index} todo={todo} />    // key: index, todo: 할 일 목록
          )
        })}
      </div>
    </>
  )
}

export default App