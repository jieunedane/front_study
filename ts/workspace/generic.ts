// 제네릭
// 1. 어떤 타입을 받을 건지
// genericFunc<T>
// 2. params의 타입 정의
// data: T
// 3. 리턴할 타입 정의
// (): T
function genericFunc<T>(data: T): T{
  return data
}

genericFunc<number>(10)

const genericFunc2 = <T>(data: T): T => data
genericFunc2<string>("a")
genericFunc2<boolean>(true)

// 타입가드
const genericFunc3 = <T>(data: T): T => {
  if(typeof data === "string"){
    console.log(data.length)
  }
  return data
}

// 타입을 제안
interface ProductItem {
  name: string;
  price: number;
  stock: number;
}

// 함수의 값을 제한
const getProductItem = <T extends keyof ProductItem>(item: T): T => {
  return item
}

getProductItem("name")
getProductItem("price")
getProductItem("stock")

const item: ProductItem = {
  name: "마우스",
  price: 100000,
  stock: 50
}

const getProductItem2 = <T extends ProductItem>(item: T): T => {
  return item
}

// getProductItem2(item)
// getProductItem2({

// })


