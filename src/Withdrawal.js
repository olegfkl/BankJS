
(function(exports) {

  function Withdrawal(amount) {
    this._amount = amount;
  };

  Withdrawal.prototype.amount = function () {
    return this._amount;
  };

  exports.Withdrawal = Withdrawal;

})(this);
