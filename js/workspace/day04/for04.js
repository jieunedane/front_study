// 심화 실습
// 1번 문제: 0~10까지 5만 빼고 출력
// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         continue;
//     }
//     console.log(i)
// }

// 2번 문제: 012340123401234 출력
  // let result2 = ""; // 문자열로 바꿈

  // for(let i = 0; i < 3; i++) {
  //   for(let j = 0; j < 5; j++){
  //     result2 += j
  //   }
  // }

  //console.log(result2)
    
  // for(let i = 0; i < 15; i ++){
  //   result2 += i % 5
  // }

  // console.log(result2)

// 3번 문제: 1~10까지 제곱값 구하기 **
// for(let i = 0; i < 10; i++){
//     let num = i + 1
//     console.log(num * num)
//     //console.log((i + 1) ** i)
// }

// 4번 문제: 1~100까지 7의 배수의 개수 세기
// let count = 0;
// for(let i = 0; i < 100; i ++){
//   let num = i + 1
//   if(num % 7 === 0) {
//     count++
//   }
// }

// console.log(count) 

// 5번 문제: 1~5까지 반복후 아래 결과 만들기 
// false, true, false, true, false
// for(let i = 0; i < 5; i++){
//     let num = i + 1
//     console.log(!(num % 2))
//     // let result = num % 2 === 0 ? "true" : "false";
//     // console.log(result)
// }

// 6번 문제 1~5까지 반복후 아래 결과 만들기
// "00001"
// let result6 = "";
// for(let i = 0; i < 5; i++) {
//   let num = i + 1
//   result6 += num === 5 ? 1 : 0
// }

// console.log(result6)

// 7번 문제: 1~20중 10~15를 제외하고 출력하기
// 알고리즘
// 1. 1~20 반복할 수 있게 만들자
// 2. 10~15 사이값을 고를 수 있을까
// 조건식을 만족할 때 -> if
// num >= 10, num <= 15 -> 둘 다 만족 and
// for(let i = 0; i < 20; i++){
//   let num = i + 1
//   if(num >= 10 && num <= 15) {
//     // 10 ~ 15까지는 continue를 만난다.
//     continue;
//   }
//   console.log(num);
// }

// 8번 문제: 1~100까지 홀수만 더한 값과, 짝수만 더한 값의 차를 구하여 출력하기
// 1. 1~100 까지 반복하게 만들자.
// 2. 홀수와 짝수를 나누자.
// let odd = 0
// let even = 0

// for(let i = 0; i < 100; i++){
//   let num = i + 1
//   if(num % 2 === 0) {
//     // 짝수
//     even += num;
//   } else {
//     // 홀수
//     odd += num;
//   }
// }

// let result8 = `홀수의 합: ${odd}, 짝수의 합: ${even}\n두 값의 차이: ${even - odd}`
// console.log(result8);

// 9번 문제: 1~10까지의 총합을 출력하시오

let result9 = 0 
for(let i = 0; i < 10; i++){
  let num = i + 1;
  result9 += num;
}

console.log(result9)