// 클래스 없이도 생성자 함수로 사용 가능
function Person(name, age){
    this.name = name;
    this.age = age;
}
var soo = new Person('수진', 12); // 생성되었습니다.
console.log(soo)

// //클래스 로직
class Person{
    constructor(name, age){
        console.log('생성되었습니다');
        this.name = name;
        this.age = age;
    }
}
var soo = new Person('수진', 12); // 생성되었습니다.
console.log(soo)