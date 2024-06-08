function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposite = function (amount) {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance += amount;
  };
}

// const rakeshAccount = new BankAccount("Rakesh k", 1000);
// const johanSccount = new BankAccount("Johan Deo");

// rakeshAccount.deposite(5000);
// johanSccount.deposite(5000);
// rakeshAccount.withdraw(2000);

// console.log(rakeshAccount.accountNumber);

// #######################################################

const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});
