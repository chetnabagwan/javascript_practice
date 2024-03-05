// .map() goes through all entries then creates a new array using the function supplied

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