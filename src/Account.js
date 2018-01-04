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

  Account.prototype.receive = function (deposit) {
     var that = this
     credit();
     this.addLog(deposit)
     return deposit.amount();

    function credit() {
      return that._balance.addMoney(deposit.amount())
    };
  };

  Account.prototype.debit = function (withdrawal) {
    var that = this
    withdraw();
    this.addLog(withdrawal);

    function withdraw() {
      return that._balance.reduceMoney(withdrawal.amount())
    };
  };

  Account.prototype.history = function () {
    return this._history;
  };

  // refactor this method - exctract and see dependency injection
  Account.prototype.addLog = function (transaction) {
    var log = new Log(transaction, this.balance())
    this._history.push(log);
  };

  Account.prototype.history = function () {
    return this._history;
  };

  exports.Account = Account;

})(this);
