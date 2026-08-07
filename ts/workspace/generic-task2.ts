export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

// https://jsonplaceholder.typicode.com/users
// 1) fetching 후 전체를 console.log로 출력
// 2) fetching 후 유저의 이름들만 출력 후 모두 타입을 붙이기