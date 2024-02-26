/*ES6 introduced a new and shorter way of declaring an anonymous
function, which is known as Arrow Functions. In an Arrow function, 
everything remains the same, except here we don’t need the 
function keyword also.*/

var greet = () => {
    console.log("Hello,I am arrow function!");
}

greet();

//if we have only a single statement in the function body,we can
//even remove the curly braces.

var greet1 = () => console.log("Hello,I am greet1 function!");

greet1();