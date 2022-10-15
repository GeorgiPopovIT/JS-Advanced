class Stringer{
    constructor(string,length){
        this.innerString  = string;
        this.innerLength = length;
    }

    increase(length){

    }
    decrease(length){

    }
    toString(){
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); //Test
