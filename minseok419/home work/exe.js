const todoApp = {
    todos: [], // 목록 배열
  
    // 추가
    addTodo: function (title) {
      const todo = {
        title: title,
        selected: false // 제외할 항목 선택하기
      };
      this.todos.push(todo);
      this.render(); // 추가할때 진행되는 렌더링
    },
  
    // 삭제
    deleteSelectedTodos: function () {
      this.todos = this.todos.filter(todo => !todo.selected); // 선택한 항목 제외하고 재생성
      this.render(); // 삭제할때 진행되는 렌더링
    },
  
    // 렌더링 메소드
    render: function () {
      const listElement = document.getElementById('todoList');
      listElement.innerHTML = ''; // 기존 목록을 초기화
  
      this.todos.forEach(todo => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.selected; // 선택되었는지 여부
        checkbox.addEventListener('change', () => {
          todo.selected = checkbox.checked; // 선택한 여부 업데이트
        });
  
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(todo.title)); // 날짜 제외하고 제목만 표시
        listElement.appendChild(listItem);
      });
    }
  };
  
  // 버튼
  document.getElementById('addButton').addEventListener('click', function () {
    const input = document.getElementById('todoInput');
    const todoTitle = input.value.trim();
    if (todoTitle) {
      todoApp.addTodo(todoTitle);
      input.value = ''; // 입력란 비우기
    }
  });
  
  // Enter 키
  document.getElementById('todoInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      const input = document.getElementById('todoInput');
      const todoTitle = input.value.trim();
      if (todoTitle) {
        todoApp.addTodo(todoTitle);
        input.value = ''; // 입력란 비우기
      }
    }
  });
  
  // 삭제 버튼 클릭시 실행
  document.getElementById('deleteSelectedButton').addEventListener('click', function () {
    todoApp.deleteSelectedTodos();
  });
  