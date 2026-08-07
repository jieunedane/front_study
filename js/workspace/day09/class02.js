// 클래스 실습
// 은행 클래스
// 프로퍼티(이름, 규모, 인원)
// 3개를 객체화

class Bank {
  // 초기화할때 생성하는 생성자
  constructor(name, scale, people){
    this.name = name
    this.scale = scale
    this.people = people
  }

  introduce = () => {
    console.log(this.name)
  }
}

// 참조 레퍼런스니까 const
const kakao = new Bank("카카오", 100, 5)
kakao.introduce()
const kb = new Bank("국민", 1000, 10)
kb.introduce()
const wori = new Bank("우리", 500, 35)
wori.introduce()

console.log(kakao)
console.log(kb)
console.log(wori)