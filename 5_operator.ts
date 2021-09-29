// function logMessage(value:any){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

//특정 변수나 파라미터에 1가지 이상의 타입을 사용 할 수 있도록 함

var sehoo : string |number | boolean;

function logMessage(value:string | number){
    if(typeof value ==='number'){
        value.toLocaleString();
    }
    if(typeof value ==='string'){
        value.toString();

    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer{
    name:string;
    skill:string;

}

interface person{
    name:string;
    age:string;

}

function askSomeone(someone:Developer | person){
    someone.name

}
