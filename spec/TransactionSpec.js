
describe('Transaction', function() {

  beforeEach(function() {
    transaction = new Transaction({ type: 'debit', amount:  50}, 30, '2018/1/1');
  });

  it('Returns the date of the transaction', function(){
    expect(transaction.date()).toEqual('2018/1/1');
  });

  it('Returns the current balance', function(){
    expect(transaction.currentBalance()).toEqual(30);
  });

  it('Returns the type of transaction', function(){
    expect(transaction.type()).toEqual('debit');
  });

  it('Returns the amount of transaction', function(){
    expect(transaction.amount()).toEqual(50);
  });

});
