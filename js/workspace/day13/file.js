// require: 모듈
const file = require("fs")

const user = new Object()
user.name = "김세환"
user.id = "ksh1234"
user.password = "1234"

// JSON으로 바꾸자
// Object -> JSON
const userJSON = JSON.stringify(user)
// console.log(userJson)

// JSON -> Object(객체)
const parseUser = JSON.parse(userJSON)
// console.log(parseUser)

// .writeFile("경로", "내용", "인코딩방식", "콜백함수")
// file.writeFile("hgd.json", userJSON, "utf-8", (error) => {
//     if(error){
//         console.error(error)
//     }else {
//         console.log("파일 출력 성공!")
//     }
// })

// 동기
// readFileSync("경로", "인코딩", "콜백함수")
const hgd = file.readFileSync("./hgd.json", "utf-8")

// new Object()
// JSON -> Object(자바스크립트의 모든 타입)
console.log(JSON.parse(hgd))
console.log(JSON.parse("[1, 2, 3, 4]")) 
console.log(JSON.parse("true"))
