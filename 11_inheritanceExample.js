class Person {
    constructor(firstName, lastName) {
        this.firstName=firstName;
        this.lastName = lastName;
    }

    speak(message) {
        console.log(this.getFullName() +
                    " says: "+
                    message);
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

let scott = new Person("Scott", "Dossey");
scott.speak("Hi.");

//What if we were writing code for a university and
//we wanted to have a class that was based upon Person
//but had additional features (a "subclass").

class Student extends Person {
    constructor(firstName, lastName, enrollmentDate) {
        super(firstName, lastName); //super is a special keyword
            //we use to call the superclesses constructor.
        this.enrollmentDate = enrollmentDate;
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }
    printCourses() {
        console.log(this.courses);
    }
}

let mike = new Student("Mike", "Tate", "20231106");
mike.addCourse("Intro to Underwater Basketweaving");
mike.addCourse("Elementary Quantum Physics for Dummies");
mike.speak("Hi.");
mike.printCourses();
console.log(mike.enrollmentDate);