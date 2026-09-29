/* Scenario:
You are tasked with designing a library management system. The library
lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each
type has unique properties and behaviors. For example:
● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and publisher.

1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).

2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.

3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.

Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class
*/
class LibraryItem {
    constructor(title, id, isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut() {
        if  (this.isAvailable === true) {
            console.log(`This title, ${this.title} is available. Checkout Successful!`);
        }
        else {
            console.log(`Sorry, this title, ${this.title} is not currently available.`);
        }
    }
    returnItem() {
        if (this.isAvailable === false) {
            console.log(`Would you like to return ${this.title}?`);
        }
        else {
            console.log(`Would you like to rent this title: ${this.title}?`);
        }
    }
}
class Book extends LibraryItem {
    constructor(title, id, isAvailable, author, genre) {
        super(title, id, isAvailable);
        this.author = author;
        this.genre = genre;
}
}
class DVD extends LibraryItem {
    constructor(title, id, isAvailable, director, duration) {
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    }
}
class Magazine extends LibraryItem {
    constructor(title, id, isAvailable, issueNumber, publisher) {
        super(title, id, isAvailable);
        this.issueNUmber = issueNumber;
        this.publisher = publisher;
    }
}
let mistBorn = new Book ("MistBorn", 63276, true, "Brandon Sanderson", "Sci-Fi");
let pulpFiction = new DVD ("Pulp Fiction", 651848, false, "Quintin Tarentino", 120);
let time = new Magazine ("Time Magazine", 848481, true, 14, "Times NY");

console.log(mistBorn);
console.log(pulpFiction);
console.log(time);

mistBorn.checkOut();
pulpFiction.checkOut();

mistBorn.returnItem();
pulpFiction.returnItem();

console.log(mistBorn.id);
console.log(time.publisher);