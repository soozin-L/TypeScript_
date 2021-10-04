//인터페이스
interface DeveloperType {
    name: string;
    skill: string;
}

interface PersonType {
    name: string
}

class PersonTypeClass{
    name: string
}

//호환 여부 확인을 위한 변수 선언
var developer : DeveloperType;
var person : PersonType;

// person타입이 developer보다 적은 타입을 가지고 있기 때문에 (부분집합으로 이해) 담을 수 없다
// developer엔  skill속성이 필수이나, person엔 skill속성이 없음으로 담을 수 없다
// developer = person;
// developer = new PersonTypeClass();

// persone(1) 타입이 작기 때문에  developer(2) 담을 수 있음.
person = developer;

// 함수
// addFnc(인자값 1) < sumFcn(인자값 2)
var addFnc = function(a: number){
    //....
}
var sumFnc = function(a: number, b: number){
    // .....
}
//smFnc는 2개의 인자값을 받아야 하기 때문에 addFnc할당되지 않음
// addFnc = sumFnc;
 sumFnc = addFnc;

 // 제네릭
 interface Empty<T>{
 }

 var empty1: Empty<string>;
 var empty2: Empty<number>;
 empty1 = empty2;
 empty2 = empty1;

 
 interface NotEmpty<T>{
     data: T;     
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;

