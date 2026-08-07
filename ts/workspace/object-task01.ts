// 확장형 문법
// 유저의 타입 붙이기
const user:{
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        city: string,
        zipcode: number,
        geo: {
            lat: number,
            func: () => number[]
        }
    }
} = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: 92998-3874,
        geo: {
            lat: -37.3159,
            func: () => { return [1,2,3] }
        }
    }
}