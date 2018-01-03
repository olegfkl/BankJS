(function(exports) {

  INCREMENTER = 1

 function Bank(name = 'HSBC') {
    this._name      = name;
    this._accounts  = []
  };

  Bank.prototype.name = function () {
    return this._name;
  };

  Bank.prototype.accounts = function () {
    return this._accounts;
  };

  Bank.prototype.createAccount = function (name) {
    var that = this
    var newNumber = newAccountNumber();
    var account = new Account(name, newNumber)
    save();

    function save() {
      that._accounts.push(account)
    };
    function newAccountNumber() {
      return that.accounts().length + INCREMENTER
    };
    return account;
  };
    // Refactor/exctract
  Bank.prototype.deposit = function (destination, amount) {
    var account;
    var that = this
    findAccount();
    if(account) {
      var deposit = new Deposit(amount)
      var transaction = new Transaction(account.number(), deposit)
      account.credit(transaction.amount())
      account.addLog(transaction)
      return account.balance();
    } else {
      throw new Error('Account was not found')
    };

    function findAccount() {
      that.accounts().map(function(e) {
        if(e.number() === destination) {
          account = e
        }
      });
    };
  };

  Bank.prototype.withdraw = function (amount) {
    if(this._balance >= amount) {
      var deposit = new Withdrawal(amount)
      this._balance -= amount
    } else {
      throw new Error('Insufficient funds')
    }
  };

  exports.Bank = Bank;

})(this);


// function formatter(date) {
//   return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
// }
