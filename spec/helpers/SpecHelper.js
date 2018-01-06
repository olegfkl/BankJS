
function DoubleView(){
  DoubleView.prototype.display = function(history){
    return true;
  };
};

function DoubleAccount(name, number){
  DoubleAccount.prototype.number = function () {return 1};
  DoubleAccount.prototype.balance = function () {return 20};
  DoubleAccount.prototype.history = function () {};
  DoubleAccount.prototype.receive = function () {};
  DoubleAccount.prototype.debit = function () {};
};
