(function(exports) {

  function Account(name, number, balance = new Balance) {
    this._name    = name;
    this._number  = number;
    this._balance = balance;
    this._history = history;
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

  Account.prototype.addToHistory = function (transaction) {
    return this._history.add(transaction);
  };

  Account.prototype.history = function () {
    return this._history.view();
  };

  exports.Account = Account;

})(this);
