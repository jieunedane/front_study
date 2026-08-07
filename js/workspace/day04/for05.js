// for문 심화
// 구구단
// for(let i = 0; i < 8; i++) {
//   let dan = i + 2
//   for(let j = 0; j < 9; j++) {
//     let value = j + 1
//     console.log(`${dan} x ${value} = ${dan *value}`)
//   }
// }

// 레거시 별찍기(과제)
//     *
//    ***
//   *****
//  *******
// *********

let star = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    star += '*';
  }
  console.log(star);
}