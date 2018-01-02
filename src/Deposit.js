(function(exports) {

  'use strict';

  function Deposit(amount, today = new Date()) {
     this._amount = amount;
     this._date   = today;
  };

  // function formatter(date) {
  //   return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  // }

  Deposit.prototype.amount = function () {
    return this._amount;
  };

  Deposit.prototype.date = function () {
    return this._date;
  };

  exports.Deposit = Deposit;

})(this);
