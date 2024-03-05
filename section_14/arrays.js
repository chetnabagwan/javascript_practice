let arr = ["hello",2,3,"world"];

let e = arr.entries();//Object [Array Iterator] {}
//returns an entries object which contains arrays of enumerated elements key-value

console.log(e);
console.log(e.next().value); //[0,"hello"]

//converting entries object back into array
let arr1 = [...e];
console.log(arr1);

//We can also make an array from a set
let mySet = new Set([1,2,3,4,5,6,7,8,4]);
console.log(mySet);

let arr2 = Array.from(mySet);
console.log(arr2);

console.log(arr2.copyWithin(4,1));

console.log(arr2.fill(1));