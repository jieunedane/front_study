// 1. Partial(파셜)
// 인터페이스 타입을 옵셔널로 지정하는 속성

interface Address {
    email: string;
    address: string;
}

type MyAddress = Partial<Address>

const myEmail:MyAddress = {}
const myEmail2:MyAddress = {
    email: "test123@gmail.com"
}
const myEmail3:MyAddress = {
   address: "경기도 수원시"
}

// Omit
// - 특정 속성만 제거하여 새로운 타입을 만들고 싶을 때
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

type MyProduct = Omit<Product, "brand">
const myNotebook: MyProduct = {
    id: 1,
    name: "노트북",
    price: 100000,
    stock: 100
}

type MyProduct2 = Omit<Product, "brand" | "name">
const myNotebook2: MyProduct2 = {
    id: 1,
    price: 100000,
    stock: 100
}

// Pick
// - 기존의 타입들로 새로운 타입을 만들어주는 문법
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

type MyProduct3 = Pick<Product, "name" | "price">
