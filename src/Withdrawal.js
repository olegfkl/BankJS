(function(exports) {

  'use strict';

  function Withdrawal(amount) {
    this._type   = 'debit'
    this._amount = amount;
  };

  Withdrawal.prototype.amount = function () {
    return this._amount;
  };

  Withdrawal.prototype.type = function () {
    return this._type;
  };

  exports.Withdrawal = Withdrawal;

})(this);
