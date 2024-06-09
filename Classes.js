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

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
  }
}

const rakeshAccount = new BankAccount("Rakesh K", 1000);
