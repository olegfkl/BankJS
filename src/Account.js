(function(exports) {

  function Account(name, number) {

    this._name = name;
    this._number = number;
  };

  Account.prototype.name = function () {
    return this._name;
  };

  Account.prototype.number = function () {
    return this._number;
  };

  exports.Account = Account;

})(this);
