//
//But additional we want a couple of other properties.
//  1. We would like to not waste memory by
//     redefining copies of functions.
//  2. We don't want to repeat ourselves.
//     DRY (don't repeat yourself.)  We want
//     to minimize the amount of code to create
//     two similar objects.
//  3. Encapsulation!


//One of the first things we're going to
//do is we are going to imagine
//we have a lot of functions...
//and if we have multiple functions
//it really makes sense
//to have a protoype.
let PersonPrototype = {
    occupation: "unknown",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    speak: function(message) {
        console.log(this.getFullName()+ " says: " + message);
    }
};


//One way we could avoid excess CODE DUPLICATION
//is we could write a function that creates a person!
//In a certain sense, this function becomes a Factory
//for objects...


//ONE WAY TO DO THINGS.
function personFactory(firstName, lastName, occupation) {

     let object = {
         firstName: firstName,
         lastName: lastName,
         occupation: occupation,
     };
     Object.setPrototypeOf(object, PersonPrototype);

     return object;
}

let person1 = personFactory("Damien", "Esposito", "Race Car Driver");
let person2 = personFactory("Brian", "Compagno", "Pastry Chef");

console.log(person1.occupation);
console.log(person1.getFullName());
console.log(person2.occupation);
console.log(person2.getFullName());
person1.speak("Hello there");
person2.speak("I like tigers");

//This works---
//We've dealt with item #1
//We have avoided most code repetition---we've dealt with #2
//
//However we still have the issue we aren't
//properly encapsulated.
