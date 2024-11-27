const API_BASE_URL = "http://146.56.111.208:7080/users/Junhwakang/todolist"; // API의 기본 URL
let tasks = []; // 클라이언트 측 캐시

// 초기 할 일 목록 가져오기
async function fetchTasks() {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) throw new Error("Failed to fetch tasks");
    const data = await response.json();
    tasks.length = 0; // 기존 데이터를 초기화
    tasks=(data.tasks); // 서버에서 가져온 데이터를 클라이언트 측에 추가
    renderTasks();
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

// 새로운 할 일 추가
async function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();
  if (!taskValue) return;

  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: taskValue })
    });
    if (!response.ok) throw new Error("Failed to add task");
    const newTask = await response.json();
    tasks.push(newTask); // 클라이언트 측 목록에 추가
    taskInput.value = ''; // 입력창 초기화
    renderTasks();
  } catch (error) {
    console.error("Error adding task:", error);
  }
}

// 특정 할 일 삭제
async function deleteTask(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) throw new Error("Failed to delete task");
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) tasks.splice(index, 1); // 클라이언트 측에서 삭제
    renderTasks();
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}

// 할 일 목록 렌더링
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // 기존 리스트 초기화
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span class="task-number">${index + 1}.</span>
      <span>${task.title}</span>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskList.appendChild(taskItem);
  });
}

// 페이지 로드 시 초기화
window.onload = fetchTasks;