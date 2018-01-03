(function(exports) {

  function Balance() {
    this._amount = 0
  };

  Balance.prototype.amount = function () {
    return this._amount;
  };
 // write test
  Balance.prototype.addAmount = function (amount) {
    return this._amount += amount;
  };

  exports.Balance = Balance;

})(this);
