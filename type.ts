//string
let str: string = 'hi';

//number
let num: number = 10;

//array
let arr: number[] = [1,2,3];
let arr1: Array<number> = [1,2,3];
let str1: string[] = ['가', '나'];
let str2: Array<string> = ['집에', '가고', '싶다'];

// Tuple  배열의 길이가 고정되고 각 요소의 타입이 지정
let arr3 :[string, number] = ['hello', 20];

//Any 모든 타입에 허용
let string:any ='hi'
let number:any = 10;
let array:any = ['a', 12, true];

//void 반환값 설정
function notuse():void{
    console.log('test');
}

//Never 함수에 끝에 도달하지 않는 의미
function neverEnd(): never{
    while(true){
        
    }
}




