//
//But additional we want a couple of other properties.
//  1. We would like to not waste memory by
//     redefining copies of functions.
//  2. We don't want to repeat ourselves.
//     DRY (don't repeat yourself.)  We want
//     to minimize the amount of code to create
//     two similar objects.
//  3. Encapsulation!

//Putting return fullName outside of an object
//violates encapsulation, but it does allow
//us to satisfy property 1.
function returnFullName() {
    return this.firstName + " " + this.lastName;
}

//One way we could avoid excess CODE DUPLICATION
//is we could write a function that creates a person!
//In a certain sense, this function becomes a Factory
//for objects...

function personFactory(firstName, lastName, occupation) {

    let object = {
        firstName: firstName,
        lastName: lastName,
        occupation: occupation,
        getFullName: returnFullName
    };
    return object;
}

let person1 = personFactory("Damien", "Esposito", "Race Car Driver");
let person2 = personFactory("Brian", "Compagno", "Pastry Chef");

console.log(person1.occupation);
console.log(person1.getFullName());
console.log(person2.occupation);
console.log(person2.getFullName());

//This works---
//We've dealt with item #1
//We have avoided most code repetition---we've dealt with #2
//
//However we still have the issue we aren't
//properly encapsulated.
