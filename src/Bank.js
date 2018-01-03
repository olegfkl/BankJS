// (function(exports) {
//
//   function Bank() {
//
//     this._name = 0;
//   };
//   // create
//   // deposit
//   // withdraw
//
//   Account.prototype.balance = function () {
//     return this._balance;
//   };
//
//   // Test this function and extract using private function (you may need to do that = this)
//   Account.prototype.deposit = function (amount) {
//     var deposit = new Deposit(amount)
//     var transaction = new Transaction(deposit, this._balance + amount)
//   };
//
//   Account.prototype.withdraw = function (amount) {
//     if(this._balance >= amount) {
//       var deposit = new Withdrawal(amount)
//       this._balance -= amount
//     } else {
//       throw new Error('Insufficient funds')
//     }
//   };
//
//   exports.Account = Account;
//
// })(this);
