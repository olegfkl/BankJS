(function(exports) {

  function Account(name, number, balance = new Balance) {
    this._name   = name;
    this._number = number;
    this._balance = balance;
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

  exports.Account = Account;

})(this);
