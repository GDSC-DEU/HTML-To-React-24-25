var Links = {       // Links 객체 생성
    setColor : function(color){     // setColor 메소드 생성
        var alist = document.querySelectorAll('a');     // a 태그를 모두 찾아서 alist에 저장
        var i = 0;      // i 변수 선언 및 초기화
        while(i < alist.length){        // i가 alist의 길이보다 작을 때 반복
            alist[i].style.color = color;       // alist의 i번째 요소의 색상을 color로 변경
            i += 1;     // i 증가
        }
    }
}

var Body = {        // Body 객체 생성
    setColor : function(color){     // setColor 메소드 생성
        document.querySelector('body').style.color = color;     // body 태그의 색상을 color로 변경
    },      // ','를 사용하는 이유는 메소드를 구분하기 위함
    setBackgroundColor : function(color){       // setBackgroundColor 메소드 생성
        document.querySelector('body').style.backgroundColor = color;       // body 태그의 배경색을 color로 변경
    }
}

function nightDayHandler(self){     // nightDayHandler 함수 생성
    var target = document.querySelector('body');        // body 태그를 target에 저장
    if(self.value === 'night'){     // self의 value가 night일 때
        Body.setBackgroundColor('black');       // body의 배경색을 검정색으로 변경
        Body.setColor('white');     // body의 글자색을 흰색으로 변경
        self.value = 'day';     // self의 value를 day로 변경

        Links.setColor('powderblue');       // Links 객체의 setColor 메소드를 호출하여 링크의 색상을 파란색으로 변경
    } else {
        Body.setBackgroundColor('white');       // body의 배경색을 흰색으로 변경
        Body.setColor('black');     // body의 글자색을 검정색으로 변경
        self.value = 'night';       // self의 value를 night로 변경

        Links.setColor('blue');     // Links 객체의 setColor 메소드를 호출하여 링크의 색상을 파란색으로 변경
    }
}