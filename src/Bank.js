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

  Bank.prototype.deposit = function (destination, amount) {
    var account = this.account(destination);
    if(account) {
      sendMoney(account.receive(deposit))
      return amount
    } else {
      throw new Error('Account was not found')
    };

    function sendMoney(log){
      var amount  = new Deposit(amount)
      var deposit = new Transaction(account.number(), amount)
      log;
    }
  };

  Bank.prototype.account = function(number){
    var account;
    this.accounts().map(function(e) {
      if(e.number() === number) {
        account = e
      }
    });
    return account;
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
