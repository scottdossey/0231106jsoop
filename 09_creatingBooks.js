
//Step 1. Create a prototype that has base
//functionality.
let BookPrototype = {
    printInfo: function() {
        console.log(this.title +
                    " written by " +
                    this.author +
                    ", published in " +
                    this.publicationYear);
    }
};

//Step 2. Create a constructor to initialize
//a book object.
function Book(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
};

//Step 3. Set the .prototype property of the
//construction function to the prototype we created
Book.prototype = BookPrototype;

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