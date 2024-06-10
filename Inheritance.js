// // Inheritance
// /*
// inheritance is a fundamental concept where one class (or function constructor in JavaScript)
// inherits the properties and methods of another class.
// This allows for code reuse and the creation of hierarchical relationships between classes.
// In JavaScript, inheritance can be achieved using both the classical and prototypal inheritance models.
// Since the introduction of ES6, the class syntax has made it easier to work with inheritance in a way that is more familiar to those who have experience with other OOP languages.
// */
// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.amount += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.amount -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);

//   this.transanctionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log("Taking bussiness loan", amount);
// };

// function SavingAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transanctionLimit = 10000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//   console.log("Taking personal Loan", amount);
// };

// const rakeshAccount = new SavingAccount("Rakesh k", 500);
// rakeshAccount.deposit(500);
// rakeshAccount.withdraw(100);
// rakeshAccount.takePersonalLoan(40000);
// console.log(rakeshAccount);

// classes
/*
classes are the special type of functions.
We can define the class just like function declarations and function expressions.
The JavaScript class contains various class members within a body including methods or constructor
*/

class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposite(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

const rakeshAccount = new BankAccount("Rakesh K", 1000);
rakeshAccount.deposite(5000);
const johnAccount = new BankAccount("John");
johnAccount.deposite(2000);
johnAccount.withdraw(200);
console.log(rakeshAccount);
console.log(johnAccount);
