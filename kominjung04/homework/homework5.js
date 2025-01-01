//화살표함수 ( => )
let sum = (a,b) => a+b;

/* 위의 화살표 함수 축약 버전
let sum = function(a,b) {
    return a+b;
};*/

//화살표함수에 if문 사용

let age = prompt("나이",20);

let welcome = (age < 20) ?
    () => alert("미성년자") :
    () => alert("성인");

welcome();



/*구조 분해 할당
-배열 또는 객체값을 분해하여 개별 변수에 즉시 할당*/

//배열구조할당
const animals = ["강아지","고양이","오리","소"];

const [dog,cat]=animals; // 배열의 첫 요소가 dog에 값이 들어감
console.log(dog,cat);

const [dog1, ,duck]=animals; //가운데 고양이를 뺌
console.log(dog1,duck); 

//존재하지 않는 요소를 넣을 경우 기본값 넣기
const [dog2,cat2,duck2,cow2="소"]=animals;
console.log(cow2);

//첫번째 두번째만 변수로 보내고 나머지 배열 저장하기
const [dog3,cat3,...rest]=animals;
console.log(dog3,cat3,rest);

//객체구조할당
const drink = {
    juice: "쥬스",
    cola: "콜라",
    milk: "우유",
};

const {juice,cola,milk}=drink;
console.log(juice,cola,milk);



//펄침연산자 - 배열에 포함된 항목을 목록으로 바꿔주는 연산자

const class1=[1,2,3];
const class2=[4,5,6];

const class3 = [...class1,...class2];
console.log(class3);

const student = ['john',19,'A+'];

function intr(name,age,grade)  {
    console.log(`${name}(${age}) - ${grade}`);
}

intr(student[0],student[1],student[2]);

//펄침연산자 사용
intr(...student);


/*모듈 import / export - 변수나 함수 자료형을 다른파일에 저장 후 불러오는 방법
app.js와 Page001.js참고*/
