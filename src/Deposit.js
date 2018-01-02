(function(exports) {

  function Deposit(amount) {
     this._amount = amount;
  };

  Deposit.prototype.amount = function () {
    return this._amount;
  };

  exports.Deposit = Deposit;

})(this);


// function formatter(date) {
//   return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
// }
