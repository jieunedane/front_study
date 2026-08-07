// https://jsonplaceholder.typicode.com/posts
// 1) fetching 후 전체를 console.log로 출력
// 2) fetching 후 모두 타입을 붙이세요
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const getPosts = async ():Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    return posts
}

const getTitles = (posts: Post[]): string[] => posts.map(({title}: {title: string}) => title)

getPosts()
    .then(getTitles)
    .then(console.log)
    .catch(console.error)