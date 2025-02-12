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
    if(inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, isFinished: false }]);   // ...todos: 기존 할 일 목록, inputValue: 현재 입력 값
      console.log("할 일 목록: ", [...todos, { text: inputValue, isFinished: false }]);
      setInputValue('');  // 입력 값 초기화
    }
  }

  // 할 일 목록에서 삭제
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));    // filter: 할 일 목록에서 삭제, _: 할 일 목록, i: 할 일 목록 인덱스
  }

  // 할 일 목록 완료 여부 변경
  const toggleFinished = (index) => {   // index: 할 일 목록 인덱스
    const newTodos = [...todos];    // newTodos: 기존 할 일 목록
    newTodos[index].isFinished = !newTodos[index].isFinished;   // newTodos[index].isFinished: 완료 여부 변경
    setTodos(newTodos);   // setTodos(newTodos): 할 일 목록 set
  }

  return (
    <>
      <h1>Todo List</h1>

      <input type="text" value={inputValue} onChange={changeTodoInput} />   {/* value: 입력 값, onChange: 입력 값 변경 */}
      <button className='content-add' onClick={addTodo}>추가</button>   {/* 추가 버튼 */}
      <div className='content-list'>    {/* 할 일 목록 */}
        {todos.map((todo, index) => {   // todos.map: 할 일 목록을 순회하며 TodoList 컴포넌트 반환
          return (
            <TodoList
              key={index}   // key: 인덱스
              todo={todo.text}    // todo: 할 일 목록
              isFinished={todo.isFinished}    // isFinished: 완료 여부
              toggleFinished={() => toggleFinished(index)}    // toggleFinished: 완료 여부 변경
              deleteTodo={() => deleteTodo(index)}    // deleteTodo: 할 일 목록 삭제
            />
          )
        })}
      </div>
    </>
  )
}

export default App