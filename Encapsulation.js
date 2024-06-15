// Encapsulation
/*
Encapsulation in object-oriented programming (OOP) in JavaScript is a concept where the internal state of an object is hidden from the outside world. This is achieved by using private variables and methods, exposing only the necessary parts through public methods. This helps in protecting the data from being directly accessed or modified, ensuring that the object's state is maintained properly. Encapsulation also makes the code more modular and easier to maintain.
*/

class BankAccount {
  customerName;
  accountNumber;
  #balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposite(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount is not a valid input");
    }
    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimmit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    console.log("Taking business loan", amount);
  }
}
const rakeshAccount = new CurrentAccount("Rakesh K", 5000);

// rakeshAccount.setBalance("hello");
rakeshAccount.setBalance(4000);

console.log(rakeshAccount.getBalance());
