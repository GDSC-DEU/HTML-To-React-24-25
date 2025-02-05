import { useState, useEffect } from 'react';
import './TodoList.css';

// TodoList 컴포넌트
function TodoList({ todo }) {       // todo: 할 일 목록
    const [isFinished, setIsFinished] = useState(false);        // isFinished: 완료 여부, setIsFinished: 완료 여부 set
    const [bgColor, setBgColor] = useState('');     // bgColor: 배경 색, setBgColor: 배경 색 set

    useEffect(() => {       // useEffect: 컴포넌트 렌더링 후 실행
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);      // randomColor: 랜덤 색
        setBgColor(randomColor);        // 배경 색 set
    }, []);     // 빈 배열: 컴포넌트 렌더링 후 한 번만 실행

    // 완료 여부 변경
    const toggleFinished = () => {      // toggleFinished: 완료 여부 변경 함수
        setIsFinished(!isFinished);     // 완료 여부 반전
    }

    return (
        <li style={{ backgroundColor: bgColor }}>       {/* 배경 색 */}
            <span style={{ textDecoration: isFinished? 'line-through' : 'none',  color: isFinished? 'blue' : 'black'}} onClick={toggleFinished}>{todo}</span>
            {/* textDecoration: 완료 여부에 따라 취소선, color: 완료 여부에 따라 색, onClick: 완료 여부 변경 */}
            {/* todo: 할 일 목록 */}
        </li>
    )
}

export default TodoList;