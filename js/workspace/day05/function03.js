// 디폴트 파라미터
// num1: 매개변수, 인자, 파라미터, 파람
function add(num1, num2 = 0) {
  // if(!num2) {
  //   num2 = 0
  // }
  return num1 + num2;
}

// 10: 인수, 파라미터
console.log(add(10))

// 타입이 없을 때 undefined