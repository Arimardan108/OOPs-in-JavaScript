function BankAccount(custumerName, balance = 0) {
  this.custumerName = custumerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposite = function (amount) {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance += amount;
  };
}

const rakeshAccount = new BankAccount("Rakesh k", 1000);
const johanSccount = new BankAccount("Johan Deo");

rakeshAccount.deposite(5000);
johanSccount.deposite(5000);
rakeshAccount.withdraw(2000);

console.log(rakeshAccount.accountNumber);
