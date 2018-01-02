
function Bank() {
    'use strict';
    this._balance = 0;
}

Bank.prototype.balance = function () {
  return this._balance;
}

Bank.prototype.deposit = function (amount) {
  this._balance += amount
};

Bank.prototype.withdraw = function (amount) {
  this._balance -= amount

};
