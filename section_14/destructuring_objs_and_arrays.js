let person = {
    firstname: "Laurence"
    , lastname: "Svekis"
};
console.log(person);

let {firstname, lastname} = person; //destructuring person obj and pulling out firstname and lastname from the obj
console.log(firstname);
console.log(lastname);

let myArr = ["JavaScript", "JS", "JS6", "ECMA","Python","Typescript"];
console.log(myArr);

let [a, b, c,...d] = myArr; //destructuring the array
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// console.log(e);