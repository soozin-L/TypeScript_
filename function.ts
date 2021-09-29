// 함수의 기본적인 타입 선언
    /* .js
        function sum(a,b){
        return a+b;
    }
    */

function sum(a:number, b:number): number{ // 매개변수와 반환값에 타입추가 (반환값에 타입 정하지 않을 경우 void 사용)
    return a+b;
}

//함수의 인자
    /*  함수의 인자를 필수값으로 간주하기 때문에, 매개변수를 설정하면 undefined, null 값이라도 넘겨야함.
    정의된 매개변수 값만 받을 수 있고 추가 불가 */

function add(a:number, b:number):number{
    return a+b;
}
add(10,20);
sum(10, undefined);
// add(10, 30, 50);
// sum(10);


function add1(a:number, b?:number, c?:number):number{
    return a+b;
}
add1(10,20);
add1(10, 30, 50);
add1(10);
add1(10);
