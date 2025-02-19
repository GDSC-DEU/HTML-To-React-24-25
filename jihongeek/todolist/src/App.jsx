import { useState, useEffect } from 'react';
import './App.css';
import List from './List';

const todoStyle = {
  padding: '1rem',
  boxShadow: '1px 1px 1px rgba(128, 128, 128, 0.258)',
  borderColor: 'rgba(128, 128, 128, 0.419)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '5px',
};

function App() {
  const name = '김지홍';
  const API_URL = 'http://146.56.111.208:7080/users/jihongeek/todolist/';
  const [responseTime, setResponseTime] = useState(new Date());
  const [titleInputText, setTitleInputText] = useState('');
  const [todoArray, setTodoArray] = useState([]);
  /**
   * 추가 버튼 클릭 이벤트 핸들러
   */
  function onClickAddButton() {
    addTodo();
  }
  /**
   * 텍스트 인풋 변경 이벤트 핸들러
   * @param {Event} event
   */
  function onTextInputChange(event) {
    setTitleInputText(event.target.value);
  }
  /**
   * 서버로 부터 할 일 데이터 불러오고 State를 갱식하는 함수
   */
  async function fetchAndSetTodoArray() {
    // 서버로 부터 할 일 데이터 불러오기
    const response = await fetch(API_URL);
    const fetchedJson = await response.json();
    // 할 일 목록 State 업데이트
    setTodoArray(fetchedJson.tasks);
  }
  /**
   * 할 일 항목 추가 요청 함수
   */
  async function addTodo() {
    await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ title: titleInputText }),
      headers: { 'Content-Type': 'application/json' },
    });
    setResponseTime(new Date());
  }
  /**
   * 할 일 항목 삭제 요청 함수
   */
  async function deleteTodo(id) {
    await fetch(API_URL + id, {
      method: 'DELETE',
    });
    setResponseTime(new Date());
  }
  /**
   * 체크박스 버튼 상태 수정 요청하는 함수
   * @param {string} id
   */
  async function setCheckbox(id) {
    const todo = todoArray.filter((x) => parseInt(id) === x.id)[0];
    await fetch(API_URL + id, {
      method: 'PUT',
      body: JSON.stringify({
        title: todo.title,
        isFinished: !todo.isFinished,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    setResponseTime(new Date());
  }
  // useEffect 훅
  useEffect(() => {
    fetchAndSetTodoArray();
  }, [responseTime]);
  return (
    <>
      <div>
        <h1>{name}의 할 일 목록</h1>
        <div className='input-block'>
          <input
            className='input-block__title-input'
            type='text'
            placeholder='제목을 입력해주세요'
            onChange={onTextInputChange}
          />
          <button
            type='button'
            className='input-block__add-button'
            onClick={onClickAddButton}
          >
            추가
          </button>
        </div>
      </div>
      <List
        todoArray={todoArray}
        todoStyle={todoStyle}
        deleteTodo={deleteTodo}
        setCheckbox={setCheckbox}
      />
    </>
  );
}

export default App;
