let f1 = function(value){
    console.log(value);
}

// arrow function for f1
let f2 = (value) => {
    console.log(value);
}

// If it's a one line function we can ever remove the {}
let f3 = (value) => console.log(value);

f1(1);
f2(2);
f3(3);