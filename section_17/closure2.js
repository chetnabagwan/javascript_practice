//   mean function
function adder(val){
    return function(val2){
        return val + val2;
    }
}

let a1 = adder(15);
console.log(a1(2));

for(let x = 0; x < 10;x++){
    console.log(a1(x+2));
}