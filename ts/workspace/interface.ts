// 인터페이스란?
// - 인터페이스는 객체로 구현되기 위한 틀이다.
// - key와 type을 미리 선언해놓고 가독성 및 재사용성을 향상시킨다.
// - 클래스를 고도화 시킨 문법으로 강제성을 부여하는 문법이다.
// 클래스(타입)
interface Animal {
    name: string;
    species: string;
    canSpeak: boolean;
    numberOfLegs?: number;
}

const dog: Animal = {
    name: "누렁이",
    species: "강아지",
    canSpeak: true
}

// dog.age = 20
dog.numberOfLegs = 4

// 포유류
interface Mammal extends Animal {
    // name: string;
    // species: string;
    // canSpeak: boolean;
    // numberOfLegs?: number;
    age: number;
}

const human:Mammal = {
    name: "홍길동",
    age: 20,
    species: "인간",
    canSpeak: true
}

// Type-alias
type AnimalAlias = Animal

const myDog:Animal = {
    name: "누렁이",
    species: "강아지",
    canSpeak: true
}

const myCat:AnimalAlias = {
    name: "치즈",
    species: "고양이",
    canSpeak: true
}

const myRabbit:AnimalAlias | Animal = {
    name: "토깽이",
    species: "토끼",
    canSpeak: true
}


// Fixed Value 
interface Machine {
    powerLevel: number;
    meterial: "metal" | "plastic"
}

const myMachine: Machine = {
    powerLevel: 1,
    meterial: "plastic"
}

// Union types
type MyUnionType = Animal & Machine

const myUnionValue:MyUnionType = {
    name: "홍길동",
    canSpeak: true,
    powerLevel: 2,
    species: "인조인간",
    meterial: "plastic"
}

type MyUnionType2 = Animal | Machine
const myUnionValue2: MyUnionType2 = {
    powerLevel: 2,
    meterial: "metal"
}

function add(data1: string | number, data2: string | number): string | number {
    if(typeof(data1) === "string" && typeof(data2) === "string"){
        return String(data1) + String(data2)
    }

    return Number(data1) + Number(data2)
}

