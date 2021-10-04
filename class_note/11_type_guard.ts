interface Developer{
    name: string,
    skill: string
}

interface Person{
    name: string,
    age: number
}

function introduce(): Developer | Person{
    return{name: 'Tony', age: 30, skill: 'Iron Making'}
}
var tony = introduce();
//console.log(tony.skill)

if((tony as Developer).skill){
    var skill = (tony as Developer).skill
    console.log(skill);
} else if((tony as Person).age){
    var age = (tony as Person).age;
    console.log(age)
}
// ^ 타입가드를 위한 초석

// 타입가드 정의 function is()
function isDeveloper(target: Developer | Person): target is Developer{
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){
    tony.skill
}else{
    tony.age
}