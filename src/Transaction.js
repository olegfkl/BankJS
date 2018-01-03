(function(exports) {

  function Transaction(operation) {
     this._operation = operation
  };

  Transaction.prototype.amount = function () {
    return this._operation.amount;
  };

  Transaction.prototype.type = function () {
    return this._operation;
  };

  exports.Transaction = Transaction;

})(this);
