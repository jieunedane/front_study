// 11분
// 프로토타입을 만들어서 유저 3명의 정보를 객체화(for instance) 시키시오
function User(name, age, point){
    this.name = name
    this.age = age
    this.point = point
}

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500
const hong = new User("홍길동", 30, 3500)
const lee = new User("이순신", 22, 0)
const jang = new User("장보고", 66, 9500)

console.log(hong.point)
console.log(lee)
console.log(jang)