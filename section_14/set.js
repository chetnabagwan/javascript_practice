// key and value are same in  a set

let testSet = Object.create(null);
let a = null;
let b = null;
testSet[a] = "whatever";
console.log(testSet[b]);

let testSet2 = new Set();

testSet2.add("h");
testSet2.add("e");
testSet2.add("l");
testSet2.add("l");
testSet2.add("o");

testSet2.delete("h");

testSet2.forEach(function(key,value){
    console.log(key + " " + value);
})

let myArr = [1,2,3,42,3,5,4,3,2,4,7,9,5,7,9];

console.log(myArr);

function removeDup(a){
    console.log(new Set(a));
    return [...new Set(a)];// to get set as an array 
}

console.log(removeDup(myArr));
