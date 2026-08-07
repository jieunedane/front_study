// 함수의 선언
// 이름을 받으면 이름을 출력해주는 함수
function print (name){ // 선언
  console.log(name) // 사용
}

// 함수를 사용
print("이지은")

// 2개 정수를 전달하면 2개를 더한 결과를 출력해주는 함수
function add (num1, num2) { //매개 변수 -> 선언한 곳과 사용한 곳을 이어줌
  console.log(num1 + num2)
}
add(1,5)

// 성과 이름을 받아서 풀네임을 출력해주는 함수 선언 후 사용
function fullName (name1, name2) {
  console.log(name1 + name2)
}

fullName("이", "지은")