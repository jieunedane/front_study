// https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((posts) => {
  // 타이틀만 출력
  posts.forEach((post) => {
    console.log(post.title)
  })
})
.catch((err) => console.error(err))