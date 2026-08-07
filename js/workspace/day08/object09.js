function Player(name, age, sport){
 this.name = name
 this.age = age
 this.sport = sport
 this.introduce = () => {
  console.log(`${this.name}은(는) ${sport}선수`)
 }
}

const hong = new Player("홍길동", 20, "축구")
const jang = new Player("장보고", 30, "농구")
const lee = new Player("이순신", 25, "배구")

hong.introduce()
jang.introduce()