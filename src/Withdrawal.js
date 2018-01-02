(function(exports) {

  'use strict';

  function Withdrawal(amount, today = new Date()) {
     this._amount = amount;
     this._date   = today;
  };

  Withdrawal.prototype.amount = function () {
    return this._amount;
  };

  Withdrawal.prototype.date = function () {
    return this._date;
  };

  exports.Withdrawal = Withdrawal;

})(this);
