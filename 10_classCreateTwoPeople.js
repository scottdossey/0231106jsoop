//The new way of creating an object
//blueprint is to creat what is called a
//Javascript "class"

//This was made possible by ECMA Script 6 (2015)
class Person {
    //There are two things than can go inside a class
    //definition:
    //1. Variables that have a default value.--syntax is
    //   as follows:
    occupation = "unknown"; //NO "let" when inside a clas


    //2. We can add "methods". Methods are functions
    //  that are inside class.
    //Inside a class, when we a declare a method
    //we leave out the function keyword.
    getFullName() {
        return this.firstName + " " + this.lastName;
    };

    //To add a constructor to a class, you just add a method
    //called "constructor"
    constructor(firstName, lastName, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        if(occupation !== undefined) {
            this.occupation = occupation;
        }
    }

    speak(message) {
        console.log(this.getFullName()+ " says: " + message);
    }
}


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
