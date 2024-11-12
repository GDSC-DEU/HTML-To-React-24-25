const input = document.querySelector('#inputValue');        // 할 일을 입력하는 input 요소
const addTodoButton = document.querySelector('#addTodo');       // 할 일을 추가하는 버튼
const todoContainer = document.querySelector('#todoContainer');     // 할 일 목록을 표시하는 컨테이너

let todos = [];     // 할 일 목록을 저장하는 배열

// 할 일 목록을 화면에 다시 표시하는 함수 (READ)
function renderTodos() {
    todoContainer.innerHTML = '';       // 할 일 목록을 모두 지우고 다시 표시
    const todoList = document.createElement('ol');      // 할 일 목록을 나타내는 순서 있는 목록 요소
    todoContainer.appendChild(todoList);    // todoContainer에 todoList를 자식 요소로 추가

    todos.forEach((todo, index) => {        // todos 배열을 순회하며 할 일을 화면에 표시
        const listItem = document.createElement('li');      // 할 일을 나타내는 목록 요소
        listItem.innerText = todo;      // 목록 요소의 텍스트를 할 일로 설정

        const deleteButton = document.createElement('button');    // 할 일을 삭제하는 버튼
        deleteButton.innerText = '삭제';        // 버튼의 텍스트를 '삭제'로 설정
        deleteButton.onclick = () => deleteTodo(index);         // 버튼을 클릭하면 deleteTodo 함수를 호출하여 할 일을 삭제
        listItem.appendChild(deleteButton);     // 목록 요소에 삭제 버튼을 자식 요소로 추가

        todoList.appendChild(listItem);     // todoList에 목록 요소를 자식 요소로 추가
    });
}

// 새로운 할 일을 추가하는 함수 (CREATE)
function addTodo() {
    if (!input.value) { 
        alert('할 일의 제목을 입력해주세요!');      // 할 일의 제목이 없으면 경고창을 띄움
    } else {
        todos.push(input.value);        // 할 일 목록에 새로운 할 일을 추가
        input.value = '';       // 할 일 입력 input을 초기화
        renderTodos();      // 할 일 목록을 다시 표시
    }
}

// 특정 할 일을 삭제하는 함수 (DELETE)
function deleteTodo(index) {
    todos.splice(index, 1);     // todos 배열에서 특정 인덱스의 할 일을 삭제
    renderTodos();      // 할 일 목록을 다시 표시
}

addTodoButton.onclick = addTodo;        // 추가 버튼을 클릭하면 addTodo 함수를 호출하여 할 일을 추가

renderTodos();      // 초기 할 일 목록을 화면에 표시