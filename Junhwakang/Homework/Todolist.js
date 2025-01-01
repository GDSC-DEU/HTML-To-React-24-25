const tasks = []; 
/*할 일을 저장하는 배열*/

function addTask() {
  /*새로운 할 일을 추가하는 함수*/
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();
  /*입력창의 값을 가져옴, 공백 제거*/
  if (taskValue) {
    tasks.push({ text: taskValue, priority: false });
    taskInput.value = '';
    renderTasks();
  }
  /*새로운 할 일을 객체로 배열에 추가, rendertasks 할 일 리스트를 화면에 업데이트*/

}

function deleteTask(index) {
  tasks.splice(index, 1); 
  renderTasks();
}

function togglePriority(index) {
  tasks[index].priority = !tasks[index].priority; /*우선순위 값 반전*/
  renderTasks();
  /*우선순위를 토글*/
}

function deleteAllTasks() {
  tasks.length = 0; /*배열의 길이를 0으로 설정하고 삭제*/
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <sapn class = "task-number">${index + 1}.</span>
      <span class="${task.priority ? 'priority' : ''}">${task.text}</span>
      <div>
        <button onclick="togglePriority(${index})"> 
          ${task.priority ? 'Remove Priority' : 'Set Priority'}
        </button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    /*우선순위 변경 , 리스트 항목에 추가 
    ${} 템플릿 리터럴 js에서 문자열 내에 변수를 삽입할 때 사용함
     true일때 class ="priority" false이면 빈 문자열로 클래스*/
    taskList.appendChild(taskItem);
  });
}