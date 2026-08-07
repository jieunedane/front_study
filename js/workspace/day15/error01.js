try {
  let num = 10
  console.log(num)  

  num / 0
} catch (error) {
  // SyntaxError : 문법의 오류는 try~catch로 잡을 수 없다.
  console.log(error.name)
  // 객체 instanceof 타입
  if(error instanceof ReferenceError){
    console.log("num를 찾을 수 없습니다.")
  }
} finally {
  console.log("무조건 한 번 실행!")
}

// (프로토타입) 클래스는 타입이다. 에러도 타입.


