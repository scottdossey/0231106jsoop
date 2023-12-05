

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


//So right now we have a function which we call
//personFactory that we use to create a person.

//Instead of using a normal function, we can use
//a special type of function in Javascript
//called a constructor!

//A constructor is a specia type of function.
//The main difference between the constructor
//we are going to write and the personFactory
//function we have written is that inside
//the personFactory function we have to
//create an object with a let statement, and
//then set all the values and return the object.

// EXAMPLE:
// function personFactory(firstName, lastName, occupation) {

//     let object = {
//         firstName: firstName,
//         lastName: lastName,
//         occupation: occupation,
//     };
//     Object.setPrototypeOf(object, PersonPrototype);

//     return object;
// }

//In the constructor, we are going to do this
//differently. In a constructor we assume that
//the object is already created and that
//we can use the "this" keywod to set properties
//of that object at the time of the function call.
//
//We will set all the properties we want to set on "this"
//and we don't need to return anything.

//Constructors by convention usually have the first
//letter of their name CAPITALIZED, and are usually
//named after what they create.

//This is a constructor. Note we use it to create
//a person, so we call it Person!
function Person(firstName, lastName, occupation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
    //NOT NEEDED ANYMORE:
    //Object.setPrototypeOf(this, PersonPrototype);
}
//If we set the property ".prototype" on
//a constructor function, the "new"
//keyword will automatically create an
//empty object with the prototype
//specified..
Person.prototype = PersonPrototype;




//So how do we call a constructor?
//if I just said
//  Person("Damien", "Esposito", "Race Car")
//when I called that function, "this" would
//not be set appropriately...

//So instead is there is a keyword in Javascript
//called "new".  If you use "new" before you
//call a function, a new object is created
//and the function is called with "this" set
//to the empty object.

let person1 = new Person("Damien", "Esposito", "Race Car Driver");
//this is basically the same as saying:
//  let person1 = {};
//  person1.call(this, "Damien", "Esposito", "Race Car Driver");


let person2 = new Person("Brian", "Campagno", "Pastry Chef");


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
