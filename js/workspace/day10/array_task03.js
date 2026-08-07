// "1*3*5*7*9*11*13"
// 문자열을 배열로 바꾸고 숫자만 배열에 담아서 출력하기
// [1, 3, 5, 7, 9, 11, 13]

const arr1 = "1*3*5*7*9*11*13".split("*")
// console.log(arr1)

const arr2 = "1*3*5*7*9*11*13".split("").filter((s) => s !== "*").map(data => Number(data))
arr2.splice(5, 4, 11, 13)
console.log(arr2)