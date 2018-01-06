function DoubleView(){
  DoubleView.prototype.display = function(history){
    return true;
  };
};

function DoubleAccount(name, number){
  this._name = name;
  this._number = number;
  DoubleAccount.prototype.number = function () {
    return this._number;
  };
  DoubleAccount.prototype.receive = function () {};
};
