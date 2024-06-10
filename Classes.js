// // classes
// /*
// classes are the special type of functions.
// We can define the class just like function declarations and function expressions.
// The JavaScript class contains various class members within a body including methods or constructor
// */

// class BankAccount {
//   customerName;
//   accountNumber;
//   balance = 0;

//   constructor(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//   }

//   deposite(amount) {
//     this.balance += amount;
//   }

//   withdraw(amount) {
//     this.balance -= amount;
//   }
// }

// const rakeshAccount = new BankAccount("Rakesh K", 1000);
// rakeshAccount.deposite(5000);
// const johnAccount = new BankAccount("John");
// johnAccount.deposite(2000);
// johnAccount.withdraw(200);
// console.log(rakeshAccount);
// console.log(johnAccount);

hello();

function hello() {
  console.log("Hello World!");
}
