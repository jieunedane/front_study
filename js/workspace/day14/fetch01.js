// 데이터 요청 -> 
// fetch(url, {
//     method: "GET"
// })

// 데이터를 GET 요청한 코드
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET" // "GET" (default)
})
.then((response) => {
    // .json(): response 객체를 -> 데이터
    return response.json()
})
.then((datas) => {
    console.log(datas)
})
.catch((error) => {console.error(err)})