//Ideally we want to actually create two
//people following the principle of OOP

//We want to encapsulate our data and functions
//   into an object.
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

let person1 = {
    firstName: "Damien",
    lastName: "Esposito",
    occupation: "Race Car Driver",
    getFullName: returnFullName
};

let person2 = {
    firstName: "Brian",
    lastName: "Campagno",
    occupation: "Pastry Chef",
    getFullName: returnFullName
};

console.log(person1.occupation);
console.log(person1.getFullName());
console.log(person2.occupation);
console.log(person2.getFullName());

//This works---but we've only really dealt with item#1.
//We have a lot of code repetition,
//and we aren't encapsulated completed..
