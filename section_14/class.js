class MakeName{
    constructor(first,last){
        this.fistName = first;
        this.lastName = last;
    }
    completeName(){
        console.log(this);
        console.log(this.fistName + " " + this.lastName);
    }
}
let friend = new MakeName("John","Smith");
friend.completeName();