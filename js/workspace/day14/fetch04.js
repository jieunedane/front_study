// https://jsonplaceholder.typicode.com/todos

// ES12, async await
// 함수
const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await response.json()
    return todos
}

getTodos()

// const getTodos2 = () => {
//     return fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res) => res.json())
// }

// console.log(getTodos2())