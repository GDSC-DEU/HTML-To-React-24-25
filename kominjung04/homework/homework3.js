        let data = [];
        let nid = 0;

       
        function input(todotext){ 
            data.push(todotext);
            console.log(data);
        }

        function dele(index){
            data.splice(index,1); 
            console.log(data);
        }

        //화면에 나타나게 하는 함수
        function add(self){
        const todoinput = document.querySelector('#todo');
        const todotext = todoinput.value.trim(); //trim() - 좌우 공백 제거 함수

        if(todotext === ""){
            alert("할 일의 제목을 입력해주세요!");
            return;
        }

        //객체만들기
        const todo = {
            id : nid++,
            title: todotext,
            createdAt: new Date().toLocaleString(),
        };

        data.push(todo) //데이터 배열에 저장
        console.log(todo);

            const todolist = document.querySelector('#todolist');
            const inputlist = document.createElement('li'); 
           inputlist.textContent = todo.title; //할일 제목 표시
            // inputlist.innerHTML += todotext;
            todolist.appendChild(inputlist); 
            //input(todotext);

            const check = document.createElement('input');
            check.type= 'checkbox';
            inputlist.appendChild(check);

            check.onclick = function(){
                if(check.checked) { //체크박스 클릭 시
                    inputlist.style.textDecoration = 'line-through';
                }
                else{
                    inputlist.style.textDecoration = 'none';
                }
            };

            
            //삭제버튼 클릭 시 관련 인덱스 삭제 후 보여주기
            const del = document.createElement('input');
            del.type= 'button';
            del.value = '삭제';
            inputlist.appendChild(del);

            del.onclick = function(){
                //indexOf - 찾으려는 값과 정확하게 일치하는 첫번째 인덱스 리턴
                //array.from - 객체를 배열로 바꾸는 함수
                const index = Array.from(todolist.children).indexOf(inputlist);
                dele(index);
                todolist.removeChild(inputlist);
            };
            todoinput.value = "";
        }


