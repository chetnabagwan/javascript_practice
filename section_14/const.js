const arr = [1,2,3];

function myfunc(){
    const arr = [4,5,6];//works fine as different block scope\
    console.log(arr);
}
myfunc();

// const arr = [4,57,7]; cannot redeclare block scoped const variable agan
arr.push(4); // works fine as we are adding to the array not redeclaring or reassigning it
console.log(arr);

