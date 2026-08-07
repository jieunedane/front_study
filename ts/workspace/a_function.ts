// 함축형 문법
function implReturnFunc(){
    return 1234
}
let implFuncResult1:number = implReturnFunc()

const implReturnFunc2 = () => {
    return 1 + 1
}
let implFuncResult2:number = implReturnFunc2()

// 설명형 문법
function explFunc1():boolean {
    return false
}

const explFunc2 = ():string[] => {
    return ["a", "b", "c"]
}

// 리턴 없는 함수
const explFunc3 = (name:string):void => {
    console.log(name)
}

// 매개변수
// 3개 정수를 받으면 모두 더해주는 함수
const funcWithParams1 = (num1:number, num2:number, num3:number): number => {
    return num1 + num2 + num3
}

// 3개 정수를 받으면 모두 더해주는 함수
// 1개를 전달하면 1개
// 2개를 전달하면 2개 더해주고
// 3개를 전달하면 3개를 더해주는 함수
// Optional Parameter
const funcWithOptional = (num1:number, num2?:number, num3?:number) => {
    // ?: 옵셔널 타입은 비즈니스 로직의 타입 검증이 필요하다.
    if(num2 === undefined){
        return num1
    }

    if(num3 === undefined){
        return num1 + num2
    }

    return num1 + num2 + num3
}

funcWithOptional(10)
funcWithOptional(10, 20)
funcWithOptional(10, 20, 30)

// 성과 이름을 전달하고
// 만약 이름이 없다면 성을 전달하기
// 성과 이름을 둘 다 전달했다면 붙여서 콘솔에 출력
const funcWithOptional2 = (lastName:string, firstName?:string):void => {
  if(firstName === undefined){
    console.log(lastName)
    return
  }
  console.log(lastName + firstName)
}

funcWithOptional2("이", "지은")
funcWithOptional2("이")

// Rest Parameter
const funcWithParams3 = (...numbers:number[]):number => {
  let total:number = 0
  for(let num of numbers){
    total += num
  } 
  return total
}

funcWithParams3(10, 20, 30, 40)

