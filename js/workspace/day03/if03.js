// 이름: 여러분의 이름
// 국어: 80점
// 수학: 70점
// 영어: 90점
// 과학: 20점

// 평균과 학점 구하기
// if문을 사용해서 60점 이상은 합격, 60점 미만은 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO점, 평균은 OO점으로 (합격 또는 불합격)입니다.

let name = "이지은";
let kor = 80
let math = 70
let eng = 90
let sci = 20
let total = kor + math + eng + sci
let average = total / 4
// console.log(total)
// console.log(average)

// 조건식이 1개라면 if문 사용 X -> 삼항
let pass = average >= 60 ? "합격" : "불합격"

// if(average >= 60){
//   console.log("합격")
// } else {
//   console.log("불합격")
// }

//console.log(name + "님의 이번 총점은" + total + "점", "평균은" + average + "점으로 합격 입니다.");
// `${}`: 템플릿 리터럴
// ``: 문자열
let result = `${name}님의 이번 총 점은 ${total}점, 평균은 ${average}점으로 ${pass}입니다.`

console.log(result);