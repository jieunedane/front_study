// 0 -> fasle
// 1 -> true

// 자동 형변환
// 문자열 + 정수 = 문자열(연결)
// "10" + 10 = "1010"

// 정수 + 정수 = 정수(연산)
// -"10" + 10 = 0 -10 + 10 => 0

// 강제 형변환
// number
// "10" -> 10
console.log(Number("10"))
// 10 -> true
console.log(Boolean(10))
// 17.3 -> "17.3"
console.log(String(17.3))

// 문자열 -> 실수
console.log(parseFloat("10.1"))
// 문자열 -> 정수 (소수점이 무시가 됨 반올림 X)
console.log(parseInt("10.5"))

// 실수 -> 정수
// 소수점 자리를 버린다.
console.log(parseInt(10.3))

