import { useState } from 'react';
import './App.css'
import List from './List';

function App() {
  const name = '김지홍';
  const nowDate = new Date();
  const todos  = [
    {id : 0, title : '백준 문제풀기', createdAt : nowDate, isFinished : true},
    {id : 1, title : '이력서 초안 작성해보기', createdAt : nowDate, isFinished : false},
    {id : 2, title : '오마이드로우 리팩토링 해보기', createdAt : nowDate, isFinished : false},
  ];
  const [titleInputText, loadTitle] = useState(''); 
  const [todoArray,setTodoArray] = useState(todos); 
  const todoStyle = {
    padding : '1rem',
    boxShadow: '1px 1px 1px rgba(128, 128, 128, 0.258)',
    borderColor: 'rgba(128, 128, 128, 0.419)',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5px' 
  }
  function onClickAddButton() {
    setTodoArray(
      [{
        title : titleInputText,
        id : 10,
        createdAt : new Date(),
        isFinished : false

      }, ...todoArray]
    );
  }
  function onTextInputChange(event) {
    loadTitle(event.target.value);
  }
  return (
    <>
      <div>
        <h1>{name}의 할 일 목록</h1>
        <div className='input-block'>
          <input className='input-block__title-input' type='text' placeholder='제목을 입력해주세요' onChange={onTextInputChange}/>
          <button type='button' className='input-block__add-button' onClick={onClickAddButton}>추가</button>
        </div>
      </div>
      <List
        todoArray={todoArray}
        todoStyle={todoStyle}
      /> 
    </>
  )
}

export default App