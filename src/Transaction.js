(function(exports) {

  function Transaction(operation) {
     this._operation = operation
     this._amount    = operation.amount;
  };

  Transaction.prototype.amount = function () {
    return this._amount;
  };

  Transaction.prototype.operation = function () {
    return this._operation;
  };

  exports.Transaction = Transaction;

})(this);
