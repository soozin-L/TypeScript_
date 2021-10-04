// 타입 단언(type assertion)
var abc;
abc =20;
abc = 'a';
var bcd = abc as string; // as를 이용해 string 지정해 주면 bcd는 자동으로 string

// DOM API 조작
// <div id ="app">hi</div>
var div = document.querySelector('div');
if(div){
    div.innerText
}