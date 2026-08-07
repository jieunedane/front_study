// 학교를 다니고 있는 학생의 총 수를 구하시오
// 학교(School) 클래스 하나를 생성
// 학교(School) 프로퍼티(학번, 이름, 나이)
// 3명 이상의 학생을 객체화 후 static 필드를 이용해서 Shcool에 다니는 총 학생의 인원을 출력하시오
class School {
  static count = 0; // 필요할때

  constructor(number, name, age){
    School.count++
    this.number = number
    this.name = name
    this.age = age
  }

  printCountOfStudent(){
    console.log(`총 학생 수: ${School.count}명`)
  }
}

const hong = new School(1, "홍길동", 10)
const jang = new School(2, "장보고", 20)
const lee = new School(3, "이순신", 30)

hong.printCountOfStudent()