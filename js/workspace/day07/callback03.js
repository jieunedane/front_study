// 1. 어떤 문자 중 숫자를 제거하고 출력
// ex) apple123apple -> appleapple
const removeNum = (msg, callback) => {
    let result = "";
    for (let i = 0; i < msg.length; i++) {
        if(msg[i] >= 0 && msg[i] <= 9){
          continue;
        }
        result += msg[i];
    } 
    callback(result);
};

removeNum("apple123apple", (result) => {
  console.log(result);
});


// 2. 사용자가 입력한 값까지의 누적합을 구하고 출력
const totalNum = (num, callback) => {
  let result = 0
  for (let i = 0; i < num; i++) {
    let num = i + 1
    result += num;
  }
  callback(result);
}

totalNum(5, console.log)


// 3. 1~100까지 중 짝수만 더하고 / 그 값의 2배를 한 후 /출력
// const totalEvenBy100 = (callback) => {
//     let result = 0
//     for(let i = 0; i < 100; i++){
//         let num = i + 1
//         if(num % 2 === 1){ continue; }
//         result += num
//     }
//     callback(result)
// }

// const multipleBy2 = (num, callback) => {
//     callback(num * 2)
// }

// totalEvenBy100((result) => {
//     multipleBy2(result, console.log)
// })