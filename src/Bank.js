
(function(exports) {

  INCREMENTER = 1

 function Bank(name = 'HSBC', printer = new View, account = Account) {
    this._name      = name;
    this._accounts  = [];
    this._printer   = printer;
    this._account   = account
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
    var account = new this._account(name, newNumber)
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

  Bank.prototype.withdraw = function (origin, amount) {
    var account = this.account(origin);
    if(account) {
      isSufficientMoney(account);
      receiveMoney(account.debit(withdrawal))
      return amount
    } else {
      throw new Error("We couldn't identify you")
    };

    function isSufficientMoney(account) {
      if(account.balance() < amount) {
        throw new Error('Insufficient funds')
      }
    };

    function receiveMoney(log){
      var amount  = new Withdrawal(amount)
      var withdrawal = new Transaction(account.number(), amount)
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

  Bank.prototype.viewAccount = function (account) {
    var account = this.account(account)
    return this._printer.display(account.history());
  };

  exports.Bank = Bank;

})(this);
