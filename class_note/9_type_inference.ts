// 타입 추론 기본1
var test_a = 10;

function getB(b = 10){
    var c = 'hi'
    return b + c;
}

// 타입 추론 기본2
interface Dropdown<T>{
    value: T,
    title: string
}

var shoppingItem: Dropdown<string>={
    value: 'abc',
    title: 'hello'
}

// 타입 추론 기본3 
interface Dropdown2<T>{
    value: T,
    title: string
}
interface DetaileDropdown<T> extends Dropdown2<T>{
    tag: T,
    description:string
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a'
}
var detailedItem2: DetailedDropdown<number> = {
    title: 'abc',
    description: 'ab',
    value: 10,
    tag: 20
}

//best common type
let arr = [1, 'hi', true]


