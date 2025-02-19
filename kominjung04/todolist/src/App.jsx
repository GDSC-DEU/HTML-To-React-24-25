import { useState, useEffect } from 'react'
import './App.css'
import List from './list.jsx'

const URL = 'http://146.56.111.208:7080/users/kominjung04/todolist'


function App() {
  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('')

  useEffect(() => {
    const ftodos= async () => {
      try {
        const respond = await fetch(URL)
        const data = await respond.json()
        console.log("서버에서 받아온 데이터:", data);
        setTodos(data.tasks);
      }catch (error){
        console.error('read쪽 에러',error)
      }
    }
    ftodos()
  },[])

  
  const addtodo = async () => {
    if (input.trim() === '') return;

    const newTodo = {id:Date.now(),title:input,isFinished:false};

    try{
      const respond = await fetch(URL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(newTodo),
      })

      const addedtodo = await respond.json()
      setTodos([...todos,addedtodo]);
      setInput('')
    } catch (error) {
      console.error('create오류:',error);
    }
  }


  const deletetodo = async(id)=>{
    try{
      const respond = await fetch(`${URL}/${id}`,{
        method: 'DELETE',
      })

      if(respond.ok) {
        const updateTodos = todos.filter(todo => todo.id !== id)
        setTodos(updateTodos)
      }
      else{
        console.error('할일 삭제 실패')
      }
      }
      catch(error){
        console.error('삭제 중 오류',error)
    }
  }

  return (
    <>
    <h1>투두리스트</h1>

    <input type='text' placeholder='할 일 입력' value={input} onChange={(e) => setInput(e.target.value)}/>
    <button onClick={addtodo}>추가</button>
    <List todos={todos} onDelete={deletetodo}/>
    </>

  );
}

export default App;