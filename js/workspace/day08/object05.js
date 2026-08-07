// 프로토타입
// 토끼, 강아지, 고양이
// 추상화
  
function Animal(name, age){
  this.name = name
  this.age = age
}

const rabbit = new Animal("토깽이", 20)
const dog = new Animal("누렁이", 10)
const cat = new Animal("치즈", 5)

console.log(rabbit.name)
