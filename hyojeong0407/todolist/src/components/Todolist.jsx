import { useState, useEffect } from 'react';
import './TodoList.css';

// TodoList 컴포넌트
function TodoList({ todo, isFinished, toggleFinished, deleteTodo }) {       // todo: 할 일 목록
    const [bgColor, setBgColor] = useState('');     // bgColor: 배경 색, setBgColor: 배경 색 set

    useEffect(() => {       // useEffect: 컴포넌트 렌더링 후 실행
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);      // randomColor: 랜덤 색
        setBgColor(randomColor);        // 배경 색 set
    }, []);     // 빈 배열: 컴포넌트 렌더링 후 한 번만 실행

    const onClickDelete = () => {       // onClickDelete: 삭제 버튼 클릭 시 실행
        if (isFinished) {       // 완료 여부 확인
            deleteTodo();       // 할 일 목록 삭제
        }
        else {
            alert("아직 완료하지 않았습니다.");     // 완료하지 않은 경우 경고 메시지
        }
    }

    return (
        <li style={{ backgroundColor: bgColor }}>       {/* 배경 색 */}
            <h3 style={{ textDecoration: isFinished? 'line-through' : 'none',  color: isFinished? 'lightcoral' : 'black'}} onClick={toggleFinished}>{todo}</h3>
            {/* textDecoration: 완료 여부에 따라 취소선, color: 완료 여부에 따라 색, onClick: 완료 여부 변경 */}
            {/* todo: 할 일 목록 */}
            <button onClick={onClickDelete}>삭제</button>
        </li>
    )
}

export default TodoList;