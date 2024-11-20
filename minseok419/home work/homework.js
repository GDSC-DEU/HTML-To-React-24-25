let todoList = []; //할 일 목록을 저장할 배열 생성

// 할 일을 화면에 표시하는 함수 생성
function renderTodoList() {
  const todoListElement = document.getElementById('todo-list');
  todoListElement.innerHTML = ''; // 기존 목록을 비움

  todoList.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    // 삭제 버튼 생성
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.onclick = () => deleteTodo(index); // 삭제 기능 함수 호출

    li.appendChild(deleteBtn);
    todoListElement.appendChild(li);
  });
}

// 할 일을 배열에 추가하는 함수
function addTodo() {
  const input = document.getElementById('todo-input');
  const newTodo = input.value.trim();

  if (newTodo !== '') {
    todoList.push(newTodo);
    input.value = ''; // 입력 칸 비우기
    renderTodoList(); // 할 일 목록 갱신
  }
}

// 할 일을 배열에서 삭제하는 함수
function deleteTodo(index) {
  todoList.splice(index, 1); // 배열에서 해당 항목 삭제
  renderTodoList(); // 할 일 목록 갱신
}

// 추가 버튼 클릭 시 할 일을 추가
document.getElementById('add-btn').addEventListener('click', addTodo);

// Enter 키를 눌러도 할 일이 추가되도록 설정
document.getElementById('todo-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

// 페이지가 로드되면 할 일 목록을 화면에 표시
renderTodoList();
