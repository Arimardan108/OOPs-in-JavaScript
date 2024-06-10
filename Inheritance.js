// Inheritance
/*
inheritance is a fundamental concept where one class (or function constructor in JavaScript) 
inherits the properties and methods of another class.
This allows for code reuse and the creation of hierarchical relationships between classes.
In JavaScript, inheritance can be achieved using both the classical and prototypal inheritance models.
Since the introduction of ES6, the class syntax has made it easier to work with inheritance in a way that is more familiar to those who have experience with other OOP languages.
*/
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

function currentAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  this.transanctionLimit = 50000;
}

currentAccount.prototype.takeBussesionLoan = function (amount) {
  console.log("Taking bussiness loan", amount);
};

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAccount.prototype.withdraw = (amount) => {
  this.balance -= amount;
};
const rakeshAccount = new currentAccount("Rakesh k", 1000);
console.log(rakeshAccount);
