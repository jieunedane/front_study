// 배열에 1~10까지 담고, 홀수라면 "홀수", 짝수라면 "짝수"로 데이터 변경
// 최종 배열 
// ex) ["홀수", "짝수", ..., "짝수"]

// const arr1 = new Array(10).map((_, i) => (i + 1) % 2 === 0 ? "짝수" : "홀수")
// 단일책임의 원칙
// 체이닝
const arr1 = new Array(10)
    .fill(0)
    .map((_, i) => i + 1)
    .map((data) => data % 2 === 0 ? "짝수" : "홀수")
    
console.log(arr1)