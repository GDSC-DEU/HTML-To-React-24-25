const input = document.querySelector('#inputValue');        // 할 일 입력 input
const addTodoButton = document.querySelector('#addTodo');       // 할 일 추가 버튼
const todoContainer = document.querySelector('#todoContainer');         // 할 일 목록이 들어갈 div

const todoManager = {       // 할 일 목록을 관리하는 객체
    todos: [],      // 할 일 목록을 담을 배열
    nextId: 0,      // 할 일 목록의 id를 관리할 변수

    add: function(title) {      // 할 일 목록을 추가하는 함수
        if(!title.trim()) {     // 할 일이 입력되지 않았을 때
            alert('할 일을 입력해주세요!!');        // alert로 알림
            return;     // 함수 종료
        }

        const id = this.nextId;     // id를 할 일 목록의 다음 id로 설정
        const todo = {      // 할 일 목록 객체 생성
            title: title,       // 할 일 목록의 제목
            id: id,     // 할 일 목록의 id
            createdAt: new Date().toLocaleString(),     // 할 일 목록의 생성 시간
        };
        this.todos.push(todo);      // 할 일 목록에 추가

        console.log(this.todos);        // 할 일 목록 출력
        
        this.nextId++;      // 다음 id로 설정
        input.value = '';       // input 초기화
        this.render();      // 할 일 목록을 다시 그림
    },

    delete: function(index) {       // 할 일 목록을 삭제하는 함수
        delete this.todos.splice(index, 1);     // 할 일 목록 삭제
        console.log(this.todos);        // 할 일 목록 출력
        this.render();      // 할 일 목록을 다시 그림
    },

    render: function() {        // 할 일 목록을 그리는 함수
        todoContainer.innerHTML = '';       // 할 일 목록 초기화
        const todoList = document.createElement('ol');      // 순서 있는 목록 생성
        todoContainer.appendChild(todoList);        // 할 일 목록에 추가

        this.todos.forEach((todo, index) => {       // 할 일 목록을 순회하며
            const listItem = document.createElement('li');      // 목록 항목 생성
            listItem.innerText = `${todo.title}`;       // 목록 항목에 할 일 제목 추가

            const deleteButton = document.createElement('button');      // 삭제 버튼 생성
            deleteButton.innerText = '삭제';        // 삭제 버튼에 '삭제' 텍스트 추가
            deleteButton.onclick = () => this.delete(index);        // 삭제 버튼 클릭 시 삭제 함수 실행
            listItem.appendChild(deleteButton);     // 목록 항목에 삭제 버튼 추가

            todoList.appendChild(listItem);     // 목록에 항목 추가
        });
    },
};

addTodoButton.onclick = () => todoManager.add(input.value);     // 추가 버튼 클릭 시 추가 함수 실행

todoManager.render();       // 할 일 목록 그리기

// new Date() : 현재 시간을 Date 객체로 반환
// new Date().toLocaleString() : 현재 시간을 문자열로 반환
// trim() : 문자열의 앞뒤 공백 제거
// this : 현재 객체를 가리키는 키워드
// splice() : 배열의 요소를 삭제하거나 추가하는 메서드
// createElement() : HTML 요소를 생성하는 메서드
// appendChild() : 자식 요소를 추가하는 메서드
// forEach() : 배열을 순회하며 요소에 대해 함수 실행
// ` : 템플릿 리터럴, 문자열을 표현하는 방법 중 하나
// $ : 템플릿 리터럴 내에서 변수를 사용할 때 사용하는 기호