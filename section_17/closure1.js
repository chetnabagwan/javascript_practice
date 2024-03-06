// closure in javascript is a function  that has access to variables in its parent scope.

function myCount(){
    let count = 0;
    return function(){
        return count++;//count is accessible here, it has access to count variable which is outside this function
    }
}
// closure allows the data to be closed over or remembered
//  by the inner function even after the function has 
// returned some value or even after the function is executed.
let c = myCount();

for(let x = 0;x<10;x++){
    console.log(c());
}

function myCount2(){
    let count = 0;
    return count++;
}
 let c1 = myCount2;

 for(let x =0; x<10;x++){
    console.log(c1());//0 everytine as it is a normal function it doesnot remember the last value of count
 }