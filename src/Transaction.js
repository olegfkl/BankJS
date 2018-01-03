
(function(exports) {

  function Transaction(destination, operation) {
     this._account   = destination;
     this._operation = operation;
  };

  Transaction.prototype.amount = function () {
    return this._operation.amount();
  };

  Transaction.prototype.destination = function () {
    return this._account;
  };

  Transaction.prototype.operation = function () {
    return this._operation;
  };

  Transaction.prototype.type = function () {
    return this._operation instanceof Deposit ? 'credit' : 'debit'
  };

  exports.Transaction = Transaction;

})(this);
