//string 타입을 사용할 때
const name_ : string = 'capt';

//타입 별칭을 사용 할 때
type Myname = string;
const userName: Myname ='capt';



// 인터페이스 옵션 속성
//  interface Person{
//     name:string;
//     age:number;
// }


  type Person = {
     name:string;
     age:number;
 }
 // 특정 타입에 대한 별칭을 보여준다.

var seho : Person ={
    name: '세호',
    age:30
}

type MyString = string;
var str : MyString = 'hello';

type Todo = {id: string; title:string, done:boolean}; 
function getTodo(todo:Todo){
}

// 가능한한 type 보다는 interface사용 권장 -> 확장성을 위해서