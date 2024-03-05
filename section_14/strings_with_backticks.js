// using backticks we can create multi line strings without using new line escape characters,
// create template literals

let m = "line one \n\Line two";
console.log(m);
console.log(m.length);

let b = `Line one 
 " " " ''' " 
            Line two`;

console.log(b);
console.log(b.length);


// In template strings replacing value with the another string
let name = "Rahul";
let greet = `Good day ${name}!`;

console.log(greet);

function updateMessage(p) {
 
    let message = `${p} was here today.`;

    console.log(message);

    return message;

}  

updateMessage("John");