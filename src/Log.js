(function(exports) {

  function Log(transaction, currentBalance, today = new Date) {
    this._transaction = transaction;
    this._balance     = currentBalance;
    this._date        = today
  };

  Log.prototype.view = function () {
    return this._transaction;
  };

  Log.prototype.balance = function () {
    return this._balance;
  };

  Log.prototype.date = function () {
    return this._date;
  };

  exports.Log = Log;

})(this);
