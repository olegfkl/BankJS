(function(exports) {

  'use strict';

  function Withdrawal(amount, today = new Date()) {
     this._amount = amount;
     this._date   = today;
  };

  Deposit.prototype.amount = function () {
    return this._amount;
  };

  Deposit.prototype.date = function () {
    return this._date;
  };

  exports.Deposit = Deposit;

})(this);
