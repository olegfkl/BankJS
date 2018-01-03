(function(exports) {

  function Balance() {
    this._amount = 0
  };

  Balance.prototype.amount = function () {
    return this._amount;
  };

  Balance.prototype.addMoney = function (amount) {
    return this._amount += amount;
  };

  Balance.prototype.reduceMoney = function (amount) {
    return this._amount -= amount;
  };

  exports.Balance = Balance;

})(this);
