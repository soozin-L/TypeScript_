interface Person{
    name: string,
    age: number,
}

type Person1={
    name: string,
    age: number,
}

var seho: Person = {
    name: '세호',
    age: 30
}

var soo: Person1 = {
    name: '수지',
    age: 30
}

type MyString = string;
var mystr: string = 'hello';

type Todo = { id: string, title: string, done: boolean};
function getTodo(todo:Todo){

}

// type- 확장불가 interface-확장 가능 즉, 확장성 차이이며
// 컨트롤 누른상태에서 마우스 가져다 대면 인터페이스에 정의한 타입 확인가능

