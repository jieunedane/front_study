// 회사의 회사원 3명이 존재하는데
// 회사원이 벌어온 수입을 회사에서 관리해야하는 상황
// 인스턴스끼리 공용의 값을 가지고 싶으면 static 키워드를 써라.

class Company {
  static totalIncome = 0;

  constructor(name, age){
    this.name = name
    this.age = age
  }
  
  work(income){
    Company.totalIncome += income
  }
}

const hong = new Company("홍길동", 20)
const jang = new Company("장보고", 40)
const lee = new Company("이순신", 30)

hong.work(10000)
jang.work(20000)
lee.work(-20000)

console.log(Company.totalIncome)