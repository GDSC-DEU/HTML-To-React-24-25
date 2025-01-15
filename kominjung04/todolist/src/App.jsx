import './App.css'
import List from './list.jsx'

function App() {

  return (
    <>
    <h1>투두리스트</h1>

    <input type='text' placeholder='할 일 입력' /><button>추가</button>
    <List />
    </>

  )
}

export default App
