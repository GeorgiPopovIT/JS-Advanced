function createPerson(firstName, lastName){
    const result = {
        firstName,
        lastName,
        fullName : ''
    };

    Object.defineProperty(result, 'fullName', {
        get(){
            return `${this.firstName} ${this.lastName}`
        },
        set(value){
            const [first, last] = value.split(' ');

            if(first != undefined && last != undefined){
                this.firstName = first;
                this.lastName = last;
            }
        },
        configurable : true,
        enumerable : true
    });
    
    return result;
}


let person = new createPerson("Peter", "Ivanov");

console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla

let person2 = new createPerson("Albert", "Simpson");
console.log(person2.fullName); //Albert Simpson
person2.firstName = "Simon";
console.log(person2.fullName); //Simon Simpson
person2.fullName = "Peter";
console.log(person2.firstName); // Simon
console.log(person2.lastName); // Simpson