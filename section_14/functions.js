//default value
function func(msg="No value"){
    console.log(msg);
    console.log(arguments.callee.name);
}
func("Hello");
func();

//arguments in a function
function myFunc(a,b,c){
    console.log(arguments);
    console.log(arguments.length);//gives the number of arguments passed
    console.log(arguments.callee.length); // it gives the no of expected argumnets in a function
    console.log(arguments.callee.name);//gives us the name of the function
}

myFunc(1,2);
myFunc(1,2,3);

// function hello(){
//     myFunc(1,2,3);
// }
// hello();

function checkArgs(a,b,c,d,e){
    if(arguments.length == arguments.callee.length){
        console.log("Okay!");
    }
    else{
        console.log("Missing " + (arguments.callee.length - arguments.length) + " arguments.");
    }
}

checkArgs(1,2,3,4,5);
checkArgs(1,2);

// rest parameter ...