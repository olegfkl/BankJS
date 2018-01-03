(function(exports) {

  function Balance() {
    this._amount = 0
  };

  Balance.prototype.amount = function () {
    return this._amount;
  };

  exports.Balance = Balance;

})(this);
