// about prototype
/* 
In JavaScript, prototypes are a powerful mechanism that allows objects to inherit properties and methods from other objects.
Understanding prototypes is essential for understanding how JavaScript's inheritance model works.
*/

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposite = function (amount) {
    this.balance = amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

// const rakeshAccount = new BankAccount("Rakesh k");
// const johnAccount = new BankAccount("johnAccpunt");

// console.log(rakeshAccount, johnAccount);
