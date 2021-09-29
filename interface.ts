/* 인터페이스
상호간의 정의한 약속 or 규칙 

사용 범주 
-객체의 스펙(속성과 속성의 타입)
-함수의 파라미터
-함수의 스펙(파라미터, 반환 타입 등)
-배열과 객체를 접근하는 방식
-클래스

*/

let person = {name: 'capt', age:28};

function logAge(obj:{age:number}){
    console.log(obj.age);
}
logAge(person);


// 인터페이스 적용 후 
interface personAge{
    age:number;
}

function logAge1(obj:personAge){
    console.log(obj.age);
}
let person1 = {name: 'capt', age:28};
logAge1(person1);


// 인터페이스 옵션 속성
interface CraftBeer{
    name:string;
    hop?:number;
}

let myBeer ={
    name: 'max'
};
function brewBeer(beer: CraftBeer){
    console.log(beer.name) //max
}
brewBeer(myBeer);

/* brewBeer()에서 beer인터페이스를 인자값으로 선언했음에도 인자로 넘긴 객체에 hop속성이 없음. 
 hop를 옵션 속성으로 선언했기때문에 */

 

