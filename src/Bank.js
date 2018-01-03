(function(exports) {

  function Bank(name = 'HSBC') {
    this._name       = name;
    this._accounts   = []
  };
  // create
  // deposit
  // withdraw

  Bank.prototype.name = function () {
    return this._name;
  };

  Bank.prototype.numberOfAccounts = function () {
    return this._accounts.length;
  };

  Bank.prototype.createAccount = function (name) {
    var that = this
    var newNumber = newAccountsNumber();
    var account = new Account(name, newNumber)
    save(account);

    function save(account) {
      that._accounts.push(account)
    };
    function newAccountsNumber() {
      return that._accounts.length + 1
    };
    return account;
  };

  // Test this function and extract using private function (you may need to do that = this)
  Bank.prototype.deposit = function (amount) {
    var deposit = new Deposit(amount)
    var transaction = new Transaction(deposit, this._balance + amount)
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
