function fetchItems(){
    let items = ['a', 'b', 'c'];
    return items;
}
let result = fetchItems();
console.log(result);

function fetchItem(): Promise<string[]>{
    let item: string[] = ['a', 'b', 'c'];
    return new Promise(function(resolve){
        resolve(item)
    });
}
fetchItem();