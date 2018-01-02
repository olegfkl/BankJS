(function(exports) {
function Account() {
    'use strict';
    this._balance = 0;
}

Account.prototype.balance = function () {
  return this._balance;
}

Account.prototype.deposit = function (amount) {
  this._balance += amount
};

Account.prototype.withdraw = function (amount) {
  this._balance -= amount

}
exports.Account = Account;
})(this);
