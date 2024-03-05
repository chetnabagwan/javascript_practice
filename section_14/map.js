// .map() goes through all entries then creates a new array using the function supplied
// .map() transforms an array, it is an higher order function(function inside function)
// mapping an array to a new array with some logic 
let myArr = [1,2,3,42,3,5,4,3,2,4,7,9,5,7,9];

let mapArr = myArr.map(function(a){
    return a *= 10;
})

console.log(mapArr);

// creating a new map object
let myMap = new Map();

// to add values into the map or set it
myMap.set("name","John");
myMap.set("age",21);
myMap.set("age",21);
console.log(myMap);

// to delete an element using key in map
myMap.delete("name");
console.log(myMap);

console.log(myMap.size);//to get length of map object

//we can access any element by its key in map
console.log(myMap.has("age"));//returns true or false

// We can pull out data from array of objects using map
let items = [{
    name: 'iPhone'
    , details: 'White'
    , cost: 50000
}, {
    name: 'iPad'
    , details: 'White'
    , cost: 80000
}, {
    name: 'Cable'
    , details: '3 foot'
    , cost: 1000
}, {
    name: 'Camera'
    , details: '25MP'
    , cost: 30000
}, {
    name: 'Laptop'
    , details: 'Intel i7'
    , cost: 120000
}, {
    name: 'LCD Monitor'
    , details: '24 inch'
    , cost: 20000
}, {
    name: 'TV'
    , details: '50 inch'
    , cost: 45000
}];

console.log(items);

let holderNames = items.map(function (items) {
    return items.name;
})
console.log(holderNames);

let holderCosts = items.map(items => items.cost);
console.log(holderCosts);

// to filter elements inside an array take an array filter it on some logic for ex: to get even/odd elements
let a = [1,2,3,4,5,6];

console.log(a.filter(function(x){
    return x % 2
}));//filters odd numbers

// reduce() = It doesn't reduce anything it just gives us the combined value of array or shortens/summarises it like sum/max/min/avg

function Sum(arr){
    let sum =0;
    for(let i =0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.log(Sum(a));//21

// like this sum function reduce also does the same thing
// reduce takes two arguments reduce(callback function(accumulator/previous value,current value),initialization value), it is called on each element of an array
const s = a.reduce(function(acc,curr){
    acc =acc + curr;
    return acc;
},0);

console.log(s);//21

// another example can be to find maximum value in an array using reduce()

console.log(a.reduce(function(max,curr){
    if(curr>max){
        max = curr;
    }
    return max;
},0));

// assume a JSON data is coming from an API response