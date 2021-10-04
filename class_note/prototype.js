var user = { name: 'soo', age: 20};
var admin = {};

admin.__proto__ = user;

console.log(user); // { __proto__ ame: 'soo', age: 20}

admin.rol = 'admin'
console.log(`admin.rol = `)
console.log(admin)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain


// 프로토 타입 활용사례 - 객체
var obj = {a: 10};
var result = Object.keys(obj);
console.log(`result = ${result}`)

obj.hasOwnProperty('a');

console.log(obj)

