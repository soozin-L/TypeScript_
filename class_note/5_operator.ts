function logMessage(value: any){
    console.log(value);
}

logMessage('hello');
logMessage(51);

// 유니온 타입 | or

var sooj: string | number | boolean;

function logMessage1(value: string | number){
   if(typeof value === 'number'){
       value.toLocaleString();
   }
   if(typeof value === 'string'){
       value.toString();
   }
   throw new TypeError('value must be string or number')
}
logMessage1('hello');
logMessage1(100);

interface Developer3{ 
    name: string;
    skill: string;
}

interface Person3 {
    name: string;
    age: number;
}

//유니온의 경우 공통적인 내용만 사용 할 수 있다
function askSomeone(someone: Developer3 | Person3){
    someone.name;
// someone.skill;
// someone.age;
}
askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 200})

//인터세셥 경우 모든 속성 사용 가능
function askSomeone1(someone: Developer3 & Person3){
    someone.name;
    someone.skill;
    someone.age;
}

askSomeone1({name: '디벨로퍼', skill: '웹 개발', age: 20})