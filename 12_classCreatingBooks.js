class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    printInfo() {
        console.log(this.title +
                    " written by " +
                    this.author +
                    ", published in " +
                    this.publicationYear);
    }
};

let books = [
    new Book("Heart of Darkness",
             "Joseph Conrad",
             1899),
    new Book("The Adventures of Clifford the Big Red Dog",
             "Norman Birdwell",
             1994)
];

console.log(books[0]);
console.log(books[1]);

books[0].printInfo();
books[1].printInfo();

//IF we wanted to create a special type
//of book..
class Spellbook extends Book {
    constructor(title, author, publicationYear, powerLevel) {
        //To call the constructor of the superclass
        //we use the keyword "super"
        super(title, author, publicationYear);
        this.powerLevel = powerLevel;
    }

    printPowerLevel() {
        console.log(this.powerLevel);
    }

    printInfo() {
        super.printInfo();
        console.log("The power level is "+this.powerLevel);
    }
}

let spellbook = new Spellbook("Taming Wild Dragons", "Erasmus Levi", 1783, 5);
spellbook.printInfo();
//spellbook.printPowerLevel(); //This is a feature only found in spellbook


