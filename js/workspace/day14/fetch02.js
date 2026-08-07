// https://jsonplaceholder.typicode.com/users/1

// 데이터 요청할거니까, fetch(url)
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((res) => res.json())
.then((user) => {
  console.log(user.name)
}) // 성공하면
.catch((err) => {console.error(err)}) // 실패하면