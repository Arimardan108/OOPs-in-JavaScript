// Static
/*
Object-Oriented Programming (OOP) in JavaScript is a programming style that uses objects to organize code, utilizing concepts like encapsulation, inheritance, and polymorphism to structure and manage code more efficiently. JavaScript supports OOP through prototypes and classes, allowing for reusable and modular code.
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Rakesh k", 24);

console.log(user1.name, user1.age);
