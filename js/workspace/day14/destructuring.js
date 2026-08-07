// 구조분해할당, 비구조화할당
const arr1 = [10, 20, 30]
const [one, two, three] = arr1

// 객체는 key로만 구조분해할당 할 수 있다.
const user = {
    name: "홍길동",
    age: 20,
    address: "강남"
}

const {name, age, address} = user

console.log(add)