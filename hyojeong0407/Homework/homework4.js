const input = document.querySelector('#inputValue');        // 할 일 입력 input
const addTodoButton = document.querySelector('#addTodo');       // 할 일 추가 버튼
const todoContainer = document.querySelector('#todoContainer');         // 할 일 목록이 들어갈 div

const todoManager = {       // 할 일 목록을 관리하는 객체
    todos: [],      // 할 일 목록을 담을 배열
    nextId: 0,      // 할 일 목록의 id를 관리할 변수

    init: async function() {     // 초기 화면에서 할 일 목록을 가져오는 함수
        try {
            const response = await fetch('http://146.56.111.208:7080/users/hyojeong0407/todolist');     // 서버에서 할 일 목록을 가져옴
            const data = await response.json();     // json 형태로 변환
            this.todos = data;      // todos 배열에 할 일 목록을 저장
            this.nextId = this.todos.length ? Math.max(...(this.todos.map(todo => todo.id))) + 1 : 0;     // nextId를 설정
            this.render();      // 할 일 목록을 그림
        } catch (error) {
            console.error('할 일 목록을 가져오는 데 오류 발생:', error);        // 오류 발생 시 콘솔에 출력
        }
    },

    add: async function(title) {      // 할 일 목록을 추가하는 함수
        if(!title.trim()) {     // 할 일이 입력되지 않았을 때
            alert('할 일을 입력해주세요!!');        // alert로 알림
            return;     // 함수 종료
        }

        const todo = {      // 할 일 목록 객체
            title: title,       // 입력받은 할 일
            id: this.nextId,        // 할 일 목록의 id
            createdAt: new Date().toLocaleString(),     // 할 일 목록이 생성된 시간
        };

        try {
            const response = await fetch('http://146.56.111.208:7080/users/hyojeong0407/todolist', {        // 서버에 할 일 목록을 추가
                method: 'POST',    // POST 방식으로 요청
                headers: {
                    'Content-Type': 'application/json'      // json 형태로 전달
                },
                body: JSON.stringify(todo)      // todo 객체를 json 형태로 변환
            });
            if (!response.ok) throw new Error('할 일 목록을 추가하는 데 실패하였습니다:');      // 응답이 정상적이지 않을 때 오류 발생
            this.todos.tasks.push(todo);      // todos 배열에 todo 객체 추가
            this.nextId++;      // nextId 증가
            input.value = '';       // input 초기화
            this.render();      // 할 일 목록을 그림
        } catch (error) {
            console.error('할 일 목록을 추가하는 데 오류 발생:', error);
        }
    },

    delete: async function(index) {       // 할 일 목록을 삭제하는 함수
        const todo = this.todos.tasks[index];     // 삭제할 할 일 목록
        try {
            const response = await fetch(`http://146.56.111.208:7080/users/hyojeong0407/todolist/${todo.id}`, {     // 서버에서 할 일 목록 삭제
                method: 'DELETE',        // DELETE 방식으로 요청
            });
            if (!response.ok) throw new Error('할 일 목록을 삭제하는 데 실패하였습니다:');      // 응답이 정상적이지 않을 때 오류 발생
            this.todos.tasks.splice(index, 1);      // todos 배열에서 해당 할 일 목록 삭제
            this.render();      // 할 일 목록을 그림
        } catch (error) {
            console.error('할 일 목록을 삭제하는 데 오류 발생:', error);
        }
    },

    render: function() {        // 할 일 목록을 그리는 함수
        todoContainer.innerHTML = '';       // 할 일 목록을 초기화
        const todoList = document.createElement('ol');      // 할 일 목록을 담을 ol 태그
        todoContainer.appendChild(todoList);        // todoContainer에 todoList 추가

        console.log(this.todos);

        this.todos.tasks.forEach((todo, index) => {       // todos 배열을 순회하며 할 일 목록을 그림
            const listItem = document.createElement('li');      // 할 일 목록을 담을 li 태그
            listItem.innerText = `${todo.title}`;       // 할 일 목록의 제목

            const deleteButton = document.createElement('button');      // 삭제 버튼
            deleteButton.innerText = '삭제';        // 버튼 텍스트
            deleteButton.onclick = () => this.delete(index);        // 클릭 시 delete 함수 호출
            listItem.appendChild(deleteButton);     // listItem에 deleteButton 추가

            todoList.appendChild(listItem);     // todoList에 listItem 추가
        });
    },
};

document.addEventListener('DOMContentLoaded', () => {
    todoManager.init();       // 초기 화면에서 할 일 목록을 그림
});

addTodoButton.addEventListener('click', () => {
    todoManager.add(input.value);       // 할 일 목록 추가 버튼 클릭 시 add 함수 호출
});

// 어찌저찌 됐네요 ㅎ..