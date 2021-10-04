//재네릭 - 재사용이 높은 컴포넌트를 만들 때 자주 활용

function logTextAll(text){
    console.log(text)
    return text;
}
// 타입을 지정해 주지 않았기 때문에 타입 상관없이 출력
logTextAll(10);
logTextAll('hello'); 
logTextAll(true); 



// 함수의 중복 사용
// type을 받기 위해중복으로 사용 함
function logTextStr(text: string){
    console.log(text);
    text.split('').reverse().join('');
    return text;
}
logTextStr('hello nice')

function logTextNum(num: number){
    console.log(num);   
    return num;
}
const num = logTextNum(20)

//유니온 타입으로 사용
function logTextUni(text: string | number){
    console.log(text);   
    return text;
}

const a = logTextUni('a');
//a.split('')
// string 에서만 사용가능한 split 사용시 에러 발생 num에서 사용 불가



//재네릭 사용 <T> 어떤 타입을 받을것이고, 타입을 사용할것, 해당 T로 반환
function logText<T>(text:T):T{
    console.log(text)
    return text;
}

const str = logText<string>('hi');
str.split('');
const login = logText<boolean>(true);


//인터페이스에 제네릭을 선언하는 방법
interface Dropdown1{
    value: string,
    selected: boolean
}
const ogj: Dropdown1={value: 'abc', selected: false}

interface Dropdown2<T>{
    value: T,
    selected: boolean
}

const obj2: Dropdown2<number> = {value: 10, selected: false}
const obj3: Dropdown2<string> = {value: 'df', selected: false}

//제네릭 타입 제한
// 제네릭의 특정 타입을 배열로 받겠다
function logTextLength<T>(text:T[]):T[]{
    console.log(text.length); // 
    text.forEach(function (text){
        console.log(text)
    })
    return text;
}

logTextLength<string>(['h1', 'hello']);

// 제네릭 타입 제한2 - 정의된 타입 이용(배열로 지정하지 않아도)
interface LengthType{
    length: number;
}
function logTextLength2<T extends LengthType>(text: T):T{
    text.length;
    return text;
}
logTextLength2('a'); // 문자열에 기본적으로 length 제공
// logTextLength2(10);  숫자 10에는 length 제공x 
logTextLength2({length: 20}); //letnth 속상만 있으면 가능

// 제너릭 타입 제한 3 - keyof
interface ShoopingItem{
    name: string,
    price: number,
    stock: number
}

// ShoopingItem에 선언된 타입만 사용 가능 하다.
function getShoppingItemOption<T extends keyof ShoopingItem>(itemOption: T): T{
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('A')
