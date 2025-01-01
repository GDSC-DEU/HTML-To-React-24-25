// 할 일 목록 
const todoApp = {
    todos: [], // 목록 배열
  
    // 추가 
    addTodo: function (title) {
      const todo = {
        id: Date.now(), // 현재시간을 기준으로 생성
        title: title,
        dateAdded: new Date()
      };
      this.todos.push(todo);
      this.render(); //추가할때 진행되는 랜더링
    },
  
    // 삭제 
    deleteTodo: function (id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.render(); //삭제할때 진행되는 랜더링
    },
  
    // 렌더링 
    render: function () {
      const listElement = document.getElementById('todoList');
      listElement.innerHTML = ''; // 항목 초기화
  
      this.todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = `${todo.title} - ${todo.dateAdded.toLocaleString()}`;
  
        // 삭제 버튼 생성
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.addEventListener('click', () => {
          this.deleteTodo(todo.id);
        });
  
        listItem.appendChild(deleteButton);
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
  