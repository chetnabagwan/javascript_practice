// find() returns the first match according to the condition and if not found it returns undefined
let myArr = [12,3,15,3,6,7,4,4,3,15];

var a = myArr.find(function(x){
    return x>7;
})

console.log(a);

let b = myArr.find(x => x>7);
console.log(b);

let c = myArr.findIndex(x => x>7);
console.log(c);

function makeArray(){
    return Array.from(arguments);
}

let d = makeArray("hello",1,"world");
console.log(d);