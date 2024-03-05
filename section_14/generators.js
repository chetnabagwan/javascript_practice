function* gen(){
    let count = 0;
    while(count<20){
        yield count++;
    }
}

console.log(gen);

let p = gen();
console.log(p);

for(let i =0;i<16;i++){
    let holder = p.next();
    if(holder.done){
        break;
    }
    console.log(holder.value);
}
console.log(p.next());
console.log(p.next());
console.log(p.next());
console.log(p.next());
console.log(p.next());
