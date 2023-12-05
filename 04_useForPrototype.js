
//We can use prototypes to define
//a bunch of methods and share them via lots of objects.

let personPrototype = {
    occupation: "student",

    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    speak: function(message) {
        console.log(this.getFullName()+ " says:" + message);
    }
}

let person1 = {
    firstName: "Dylan",
    lastName: "Carvajal",
    occupation: "Florist"
};
Object.setPrototypeOf(person1, personPrototype); // person1.__proto__ = personPrototype

person1.speak("Hello");
console.log(person1.occupation);

let person2 = {
    firstName: "Bilal",
    lastName: "Smith",
};
Object.setPrototypeOf(person2, personPrototype);
person2.speak("Hello");
console.log(person2.occupation);


