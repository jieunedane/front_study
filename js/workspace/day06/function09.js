// 입력 받은 문자열을 뒤집어서 반환해주는 함수
// ex) "abcdefg" -> "gfedcba"
// .at(-1) 
// .at(-2) 


// 다이아(심화)
// 1. 한글을 정수로 바꿔주는 함수
// ex) "일공이사" -> 1024

// 알고리즘
// 1. 한글을 받는다 (매개변수)
// const changeToInteger = (hangle) => {
//     // hangle: "일공이사"
//     // 2. "일공이사"
//     // 반복문으로 글자를 하나씩 쪼갠다 
//     let result = ""
//     for(let i = 0; i < hangle.length; i++){
//         let c = hangle[i]
//         switch (c){
//             case "공":
//                 result += 0
//                 break;
//             case "일":
//                 result += 1
//                 break;
//             case "이":
//                 result += 2
//                 break;
//             case "삼":
//                 result += 3
//                 break;
//             case "사":
//                 result += 4
//                 break;
//             case "오":
//                 result += 5
//                 break;
//             case "육":
//                 result += 6
//                 break;
//             case "칠":
//                 result += 7
//                 break;
//             case "팔":
//                 result += 8
//                 break;
//             case "구":
//                 result += 9
//                 break;
//             default:
//                 break;
//         }
//     }

//     return result
// }

// let result1 = changeToInteger("일공이사")
// console.log(result1)


const changeToInteger = (hangle) => {
    let hangles = "공일이삼사오육칠팔구"
    let result = ""
    for(let i = 0; i < hangle.length; i++){
        result += hangles.indexOf(hangle[i])
    }

    return result
}

let result1 = changeToInteger("일공이사")
console.log(result1)

// 2. 정수를 한글로 바꿔주는 함수
// ex) "1024" -> "일공이사"
const changeToHangle = (number) => {
    let hangles = "공일이삼사오육칠팔구"
    let result = ""
    for(let i = 0; i < number.length; i++){
        result += hangles[number[i]]
    }
    return result
}

let result2 = changeToHangle("1024")
console.log(result2)