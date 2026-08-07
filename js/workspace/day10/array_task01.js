// 1) 0 ~ 10까지 들어가있는 배열을 생성하기
const arr1 = new Array(11).fill(0)
arr1.forEach((data, i, arr) => {
   arr[i] = i
})
console.log(arr1)
// 단 [0, 1, 2, 3] 손으로 쓰지 말고 메서드를 사용할 것
// 2) 그 해당 배열의 값을 반대로 바꾸기 10~0
arr1.reverse()
console.log(arr1)

// 3) 그 배열의 모든 값을 5배 만들기
arr1.forEach((data, i, arr) => {
    arr[i] = data * 5
})
console.log(arr1)