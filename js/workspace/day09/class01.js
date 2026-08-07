class Animal {
  constructor(name, age, speices){
    this.name = name
    this.age = age
    this.speices = speices
  }
}

const rabbit = new Animal("토꺵", 3, "토끼")
const dog = new Animal("누렁이", 10, "강아지")
const cat = new Animal("치즈", 1, "고양이")

console.log(rabbit)
console.log(dog)
console.log(cat)
// 프로토타입 객체와 객체 차이.
// 프로토타입으로 만든 객체