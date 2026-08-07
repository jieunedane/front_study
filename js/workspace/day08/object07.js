// new라고 붙어있는 프로토타입은 메모리힙에 올라가있음. => 참조하는거임.

// let과 const의 차이
//    - let은 값의 변경이 아닌 메모리의 주소의 변경(재할당)이 가능함의 의미이다.
//    - let은 주소 변경의 재할당이 가능하다
//    - const는 주소 변경의 재할당이 불가능하다.

// https://pythontutor.com/visualize.html#mode=display

// 얕은 복사
// 깊은 복사
const animal1  = {
    cat: "야옹이",
    dog: "누렁이",
    cow: "얼룩이",
    tiger: "어흥이"
}

const animal2 = animal1

// 얕은 복사
// console.log(animal1)
// console.log(animal2)

// 깊은 복사
const animal3 = Object.assign({}, animal1)
animal1.dog = "점박이"
console.log(animal1)
console.log(animal3)