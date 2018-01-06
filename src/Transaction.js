
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

  exports.Transaction = Transaction;

})(this);
