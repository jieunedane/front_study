// 선언
const obj1 = new Object()
const obj2 = {}

// console.log(obj1)
// console.log(obj2)

const hong = {
    name: "홍길동", 
    age: 20,
    address: "서울시 강남구"
}

// 홍길동의 이름
console.log(hong.name)
console.log(hong["age"])

// key는 set 자료구조
// set 중복값을 허용하지 않는다.

// 객체의 특징
// 1. key가 존재하면 값을 수정
hong["name"] = "장길동"
hong["phone"] = "01012341234"

// 2. key가 존재하지 않으면 값을 추가
console.log(hong.name)
console.log(hong)
