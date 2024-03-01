func();
console.log(a); //2

function func(){
    a=2; //global variable a
}

//using strict mode for above code

func();
console.log(a); //2

function func(){
    "use strict";
    a=2; //global variable a
}