function Arrow_Function() {     // 화살표 함수수
    let hello;      // 변수 선언

    hello = function() {        // 함수 선언
        return "Hello World!";      // 반환 값
    }
    document.getElementById("before").innerHTML = hello();      // id가 before인 요소에 hello() 함수 호출 결과 출력

    hello = () => {     // 화살표 함수 선언
        return "Hello World!";
    }
    document.getElementById("after").innerHTML = hello();       // id가 after인 요소에 hello() 함수 호출 결과 출력

    hello = (val) => "Hello " + val;        // 화살표 함수 선언

    document.getElementById("parameter").innerHTML = hello("User!");        // id가 parameter인 요소에 hello("User!") 함수 호출 결과 출력
}

function Destructuring_Assignment() {       // 구조 분해 할당
    let vehicles = ['Grandeur', 'Santa Fe', 'Elec City'];       // 배열 선언

    let car = vehicles[0];      // 배열 요소 할당
    let suv = vehicles[1];
    let bus = vehicles[2];

    document.getElementById("array").innerHTML = car + ", " + suv + ", " + bus;     // id가 array인 요소에 car, suv, bus 출력

    [car, suv, bus] = vehicles;     // 배열 구조 분해 할당

    document.getElementById("destructuring").innerHTML = car + ", " + suv + ", " + bus;     // id가 destructuring인 요소에 car, suv, bus 출력

    [car, , bus] = vehicles;

    document.getElementById("skip").innerHTML = car + ", " + bus;       // id가 skip인 요소에 car, bus 출력

    let vehicleOne = {      // 객체 선언
        brand: 'Hyundai',
        model: 'Grandeur',
        type: 'Sedan',
        year: 2022,
        color: 'Black'
    }

    myVehicle(vehicleOne);      // myVehicle 함수 호출

    function myVehicle({model, color, brand}) {     // 객체 구조 분해 할당
        const introduce = 'My car is ' + model + ' color is ' + color + ' and brand is ' + brand;       // 문자열 생성

        document.getElementById("object").innerHTML = introduce;        // id가 object인 요소에 introduce 출력
    }
}

function Spread_Operator() {        // 전개 구문
    let numbersOne = [1, 2, 3];     // 배열 선언
    let numbersTwo = [4, 5, 6];
    let numbersCombined = [...numbersOne, ...numbersTwo];       // 배열 전개 구문

    document.getElementById("spread").innerHTML = numbersCombined;      // id가 spread인 요소에 numbersCombined 출력

    let numbers = [1, 2, 3, 4, 5, 6];       // 배열 선언

    let [one, two, ...rest] = numbers;      // 배열 구조 분해 할당

    document.getElementById("One").innerHTML = one;     // id가 One인 요소에 one 출력
    document.getElementById("Two").innerHTML = two;     // id가 Two인 요소에 two 출력
    document.getElementById("Rest").innerHTML = rest;       // id가 Rest인 요소에 rest 출력

    let myVehicle = {       // 객체 선언
        brand: 'Hyundai',
        model: 'Grandeur',
        color: 'Black'
    }

    let updateMyVehicle = {     // 객체 선언
        type: 'Sedan',
        year: 2022,
        color: 'White'
    }

    let myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};      // 객체 전개 구문

    document.getElementById("objectSpread").innerHTML = 'My car is ' + myUpdatedVehicle.model + ' color is ' + myUpdatedVehicle.color + ' and brand is ' + myUpdatedVehicle.brand;    // id가 objectSpread인 요소에 myUpdatedVehicle 출력
}

Arrow_Function();
Destructuring_Assignment();
Spread_Operator();