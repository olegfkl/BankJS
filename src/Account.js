(function(exports) {

  function Account(name, number, balance = new Balance) {
    this._name    = name;
    this._number  = number;
    this._balance = balance;
    this._history = []
  };

  Account.prototype.name = function () {
    return this._name;
  };

  Account.prototype.number = function () {
    return this._number;
  };

  Account.prototype.balance = function () {
    return this._balance.amount();
  };

  Account.prototype.log = function () {
    return this._log;
  };

  // refactor this method - exctract and see dependency injection
  Account.prototype.addToHistory = function (transaction) {
    var log = new Log(transaction, this.balance)
    return this._history.push(log);
  };

  Account.prototype.history = function () {
    return this._history;
  };

  exports.Account = Account;

})(this);
