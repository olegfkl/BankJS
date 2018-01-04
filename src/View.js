
(function(exports) {

  function View() {};

  View.prototype.display = function (history) {
    var dates    = []
    var credits  = []
    var debits   = []
    var balances = []

    sort();

    console.log('date' + '      ||' + 'credit' + '||' + ' debit' + ' ||' + 'balance')
    for(i = 0; i < dates.length; i++) {
    console.log(dates[i], ' || ', credits[i], ' || ', debits[i], ' || ', balances[i])
  }




    function sort() {
      history.forEach(function(e){
      dates.push(formatter(e._date))
      balances.push(e.balance())
      if(e._transaction instanceof Deposit) {
        credits.push(e._transaction._amount)
        debits.push('  ')
      } if(e._transaction instanceof Withdrawal) {
        debits.push(e._transaction._amount)
        credits.push('  ')
        }
      });
    }
  }

    function formatter(date){
      return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    };

  exports.View = View;

})(this);
