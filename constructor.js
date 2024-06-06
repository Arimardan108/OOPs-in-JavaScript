function BankAccount(custumerName, balance = 0) {
  this.custumerName = custumerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}
const rakeshAccount = new BankAccount("Rakesh k", 10000);
console.log(rakeshAccount);
