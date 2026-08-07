// https://jsonplaceholder.typicode.com/todos

// 할 일이 완료가 안 된 데이터들만 출력
const printTodo = (todos) => {
        todos.forEach((todo) => {
            console.log(todo)
        })
    }

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((todos) => todos.filter((todo) => !todo.completed))
    .then(printTodo)
    .catch(console.error)