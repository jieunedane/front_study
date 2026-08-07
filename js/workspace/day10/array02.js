// .push(): array 메서드
const arr1 = ["홍길동", "장보고", "이순신"]
arr1Length = arr1.push("김철수", "김영희")

// console.log(arr1)
// console.log(arr1Length)

// *) .concat(): 두개의 배열을 연결하여 [새로운 배열]로 리턴한다.
// const arr2 = ["사과", "멜론"]
// const arr3 = ["바나나", "자몽", "자두"]

// const newArr2 = arr2.concat(arr3, ["123"])

// console.log(arr2)
// console.log(newArr2)


// .pop(): array 메서드, 마지막의 요소를 제거하고 그 값을 반환하는 메서드
const arr4 = [1, 2, 3, 4, 5]
// console.log(arr4[4])
// console.log(arr4.pop())
// console.log(arr4)

// .unshift(): array 메서드, 맨 앞의 요소를 추가하는 메서드
const arr5 = [10, 20, 30, 40]
const newArr5Length = arr5.unshift(100, 200)
// console.log(arr5)
// console.log(newArr5Length)

// .shift(): array 메서드, 맨 앞의 요소를 제거하는 메서드
// console.log(arr5)
const first = arr5.shift()
// console.log(first)
// console.log(arr5)

// *) .slice(): array의 메서드, start 인덱스 부터 end 인덱스까지 요소를 복사하여 [새로운 배열]로 반환
// const arr6 = [10, 20, 30, 40, 50, 60]
// console.log(arr6.slice(2, 4))
// console.log(arr6)

// *) splice(): array 메서드, start 인덱스부터 deleteCount 개수를 지우고 원본 배열을 수정한다.
// 그리고 지운 값을 리턴한다.
const arr7 = ["a", "b", "c", "d", "e"]
// console.log(arr7.splice(3, 2))
// console.log(arr7)

const arr8 = ["a", "b", "c", "d", "e"]
// 세 번째 매개변수 이상부터 값을 추가하면 삭제된 위치에 값을 추가한다.
arr8.splice(3, 1, 100, 200, 300)
// console.log(arr8)

// .sort(): array 메서드, 무작위로 들어간 데이터의 값을 정렬하는 메서드
const arr9 = [10, 150, 20, 17, 700, 600, 35, 40, 95]
arr9.sort((a, b) => a - b) // 오름차순
arr9.sort((a, b) => b - a) // 내림차순

// console.log(arr9)
// .reverse(): array 메서드, 배열의 값을 뒤집어주는 반환하는 메서드
// console.log(arr9.reverse())

// .includes(): string, array 메서드, 특정값이 포함되어 있는 지 여부를 확인해주는 메서드
const arr10 = [10, 20, 30, 40, 50]
const isTrue = arr10.includes(40)
const isFalse = arr10.includes(100)

console.log("apple".includes("a"))