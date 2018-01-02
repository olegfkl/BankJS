(function(exports) {

  function Account() {

    this._balance = 0;
  };

  Account.prototype.balance = function () {
    return this._balance;
  };

  Account.prototype.deposit = function (amount) {
    var deposit = new Deposit(amount)
    this._balance += amount
  };

  Account.prototype.withdraw = function (amount) {
    if(this._balance >= amount) {
      var deposit = new Withdrawal(amount)
      this._balance -= amount
    } else {
      throw new Error('Insufficient funds')
    }
  };

  exports.Account = Account;

})(this);
