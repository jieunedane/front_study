// 배열의 고차함수
// 매개변수의 함수(콜백함수)를 받는 메서드
// *) .forEach(): 배열의 빠른 for문
// const arr1 = [10, 20, 30, 40, 50]
// arr1.forEach((data, index, arr) => {
//     console.log(data)
// })
// arr1.forEach((data, index, arr) => {
//     arr[index] = arr[index] * 10 // 가능
//     arr[index] = data * 10 // 가능
//     data = data * 10 // 불가능
// })

// void는 값이 아니다. 

// const arr2 = new Array(10).fill(0)
// arr2.forEach((_, i) => { arr2[i] = i + 1 })
// console.log(arr2)

// *) .map(): array 메서드, 기존의 배열의 값을 콜백함수의 리턴 값으로 변경하여 [새로운 배열]을 리턴하는 메서드
// const arr3 = new Array(10).fill(0).map((data, i, arr) => i * 10)

// // 기존의 있는 arr3의 값을 2배로 변경
// const arr4 = arr3.map((data) => data * 2)

// console.log(arr3)
// console.log(arr4)


// * .filter(): array메서드, 콜백함수의 조건식에 해당하는 값들만 [새로운 배열]로 반환해주는 메서드
// 0 ~ 9 -> 1 ~ 10
const arr5 = new Array(10).fill(0).map((_, i) => i + 1)

// 조건식: 리턴이 true 또는 false로 반환하는 식
const arr6 = arr5.filter((data) => !!(data % 2))
const arr7 = arr5.filter((data) => {
    if(data % 2 === 1){
        return true
    }
    return false
})

// console.log(arr7)

// .indexOf(): string, array 메서드 문자열 또는 배열의 해당 값을 찾고, 값의 인덱스를 반환
// console.log(new Array(5).fill(0).map((_, i) => i + 1).indexOf(4))
// console.log("abcde".indexOf("d"))

// .find(): array 메서드 조건식을 만족하는 첫 번째 값을 리턴
const str2 = ["기린", "기린", "기린"].find((data) => data === "기린")
console.log(str2)

// 나이가 30살인 유저를 찾는 방법 
const arr8 = [
    {
        name: "홍길동", 
        age: 20
    },
    {
        name: "김길동", 
        age: 30
    },
    {
        name: "장길동", 
        age: 30
    },
]

console.log(arr8.find((data) => data.age === 30))
console.log(arr8.filter((data) => data.age === 30))


// .some(): array 메서드, 조건식에 만족하는 값이 하나라도 있으면 true, 없으면 false
console.log(arr8.some((data) => data.age <= 19))
console.log(arr8.some((data) => data.age >= 20))

// .from(): array 메서드, 유사 배열 객체를 객체로 바꿔주는 메서드
const obj = {
    0: "1번 값",
    1: "2번 값",
    length: 2
}

// console.log(Array.from(obj))

// .reduce((누적값, 현재값, 인덱스, 원본배열) => {}, 초기값)
// array 메서드: 콜백함수의 리턴 값을 누적합하여 모든 반복이 끝났을 때 리턴해주는 메서드
// [10, 20, 30, 40, 50]
const arr9 = new Array(5).fill(0).map((_, i) => i + 1).map((data) => data * 10)
const arr9Result = arr9.reduce((acc, data, i, arr) => {
    return acc + data 
}, 0)

console.log(arr9Result)