
(function(exports) {

  function Deposit(amount) {
     this._amount = amount;
  };

  Deposit.prototype.amount = function () {
    return this._amount;
  };

  exports.Deposit = Deposit;

})(this);
