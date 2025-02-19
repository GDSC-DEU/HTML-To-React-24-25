import './App.css'
import { useState, useEffect } from 'react';
import TodoList from './components/Todolist'

const API_URL = 'http://146.56.111.208:7080/users/hyojeong0407/todolist';

function App() {
  const [inputValue, setInputValue] = useState('');   // inputValue: 입력 값, setInputValue: 입력 값 set
  const [todos, setTodos] = useState([]);   // todos: 할 일 목록, setTodos: 할 일 목록 set
  const [responseTime, setResponseTime] = useState(new Date());   // responseTime: 응답 시간, setResponseTime: 응답 시간 set

  // useEffect: 컴포넌트 렌더링 후 실행
  useEffect(() => {
    fetchAndSetTodos();   // fetchAndSetTodos: 할 일 목록 불러오기
  }, [responseTime]);   // responseTime: 응답 시간

  // 할 일 목록 불러오기
  async function fetchAndSetTodos() {   
    try {
      const response = await fetch(API_URL);    // API_URL: API 주소
      const fetchedTodos = await response.json();   // fetchedTodos: 불러온 할 일 목록
      setTodos(fetchedTodos.tasks);   // fetchedTodos.tasks: 불러온 할 일 목록
    } catch (error) {
      console.error('데이터를 불러오는 데 실패했습니다: ', error);    // 데이터 불러오기 실패 시 에러 메시지 출력
    }
  }

  // 입력 값을 setInputValue로 set
  const changeTodoInput = (e) => {    // changeTodoInput: 입력 값 변경 함수, e: 이벤트 객체
    setInputValue(e.target.value);    // e.target.value: 입력 값
  }

  // 할 일 목록에 추가
  async function addTodo() {
    if(inputValue.trim() !== '') {    // 입력 값이 공백이 아닌 경우
      const newTodo = { title: inputValue, isFinished: false };   // newTodo: 추가할 할 일 목록
      try {
        const response = await fetch(API_URL, {   // API_URL: API 주소
          method: 'POST',   
          body: JSON.stringify(newTodo),    // newTodo: 추가할 할 일 목록
          headers: { 'Content-Type': 'application/json' },    // 헤더: JSON 형식
        });
        if (!response.ok) throw new Error('할 일 목록을 추가하는 데 실패하였습니다');   // 추가 실패 시 에러 메시지 출력
        setResponseTime(new Date());    // 응답 시간 set
        setInputValue('');    // 입력 값 초기화
      } catch (error) {
        console.error('데이터를 추가하는 데 실패했습니다: ', error);    // 데이터 추가 실패 시 에러 메시지 출력
      }
    }
  }

  // 할 일 목록에서 삭제
  async function deleteTodo (index) {
    const todoToDelete = todos[index];    // todoToDelete: 삭제할 할 일 목록
    try {
      const response = await fetch(`${API_URL}/${todoToDelete.id}`, {   // API_URL: API 주소, todoToDelete.id: 삭제할 할 일 목록 id
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('할 일 목록을 삭제하는 데 실패하였습니다');   // 삭제 실패 시 에러 메시지 출력
      setResponseTime(new Date());    // 응답 시간 set
    } catch(error) {
      console.error('데이터를 삭제하는 데 실패했습니다: ', error);    // 데이터 삭제 실패 시 에러 메시지 출력
    }
  }

  // 할 일 목록 완료 여부 변경
  async function toggleFinished (index) {   // index: 할 일 목록 인덱스
    const newTodos = [...todos];    // newTodos: 기존 할 일 목록
    newTodos[index].isFinished = !newTodos[index].isFinished;   // newTodos[index].isFinished: 완료 여부 변경
    try {
      const response = await fetch(`${API_URL}/${newTodos[index].id}`, {    // API_URL: API 주소, newTodos[index].id: 변경할 할 일 목록 id
        method: 'PUT',    // PUT: 수정
        body: JSON.stringify(newTodos[index]),    // newTodos[index]: 변경할 할 일 목록
        headers: { 'Content-Type': 'application/json' },    // 헤더: JSON 형식
      });
      if (!response.ok) throw new Error('할 일 목록을 수정하는 데 실패하였습니다');   // 수정 실패 시 에러 메시지 출력
      setResponseTime(new Date());    // 응답 시간 set
    } catch (error) {
      console.error('데이터를 수정하는 데 실패했습니다: ', error);    // 데이터 수정 실패 시 에러 메시지 출력
    }
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
              todo={todo.title}    // todo: 할 일 목록
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