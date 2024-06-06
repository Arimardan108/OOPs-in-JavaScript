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
console.log(rakeshAccount);
console.log(johanSccount);
console.log(rakeshAccount.accountNumber);
