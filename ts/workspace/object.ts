// 함축형 문법
const implObject1 = {
  attr1: 4,
  attr2: "a",
  attr3: true,
  someFunc1: () => {
    console.log("Hello, TS!")
  },
  someFunc2: function(){
    return 1 + 123
  }
}

// implObject1.attr1 = "b";

// 설명형 문법 (객체는 타입이다. 홍길동 자체로 타입임. 클래스 인스턴스 프로토타입 모두 타입이다.)
const exliObject1:{
  attr1: number,
  attr2: string,
  attr3: boolean,
  someFunc1: () => void,
  someFunc2: () => number
} = {
  attr1: 4,
  attr2: "a",
  attr3: true,
  someFunc1: () => {
    console.log("Hello, TS!")
  },
  someFunc2: function(){
    return 1 + 123
  }
}

// 타입가드
// string{}
const indexSigObject:{[index: string]: string} = {
  attr1: "a",
  attr2: "b",
  attr3: "b"
}

// key의 값을 고정
// 1. key가 업으면 추가
// 2. key가 있으면 수정
indexSigObject.attr1 = "ab"

type ExplIndex = "a" | "b" | "c"

// ? 옵셔널
const limitedSigObject1:{[k in ExplIndex]?: number} = {
  a: 10
}

