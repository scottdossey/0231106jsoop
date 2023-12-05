
//We are going to create an example
//we are going to create pultiple objects.....

//In our example we are going to create People.....

let person1 = {
    firstName: "Damien",
    lastName: "Esposito",
    occupation: "Race Car Driver",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.getFullName());

//If we wanted to create a person2.....
//with what we know currenty we would
//basically have to start from scratch.
let person2 = {
    firstName: "Brian",
    lastName: "Campagno",
    occupation: "Pastry Chef",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.getFullName());

//We also could copy an object......
//and there is a way to do that with
//a function called Object.assign()

let person3 = Object.assign({whatever: "hello"}, person1);
console.log(person3);






