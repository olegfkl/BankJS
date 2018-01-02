(function(exports) {

  function Transaction(operation, currentBalance, today = new Date) {
     this._date             = today;
     this._currentBalance   = currentBalance;
     this._type             = operation.type;
     this._amount           = operation.amount;
  };

  Transaction.prototype.currentBalance = function () {
    return this._currentBalance;
  };

  Transaction.prototype.date = function () {
    return this._date;
  };

  Transaction.prototype.type = function () {
    return this._type;
  };

  Transaction.prototype.amount = function () {
    return this._amount;
  };

  exports.Transaction = Transaction;

})(this);
