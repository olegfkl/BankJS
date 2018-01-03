
describe('Transaction', function() {

  beforeEach(function() {
    transaction = new Transaction(5, { type: 'debit', amount:  50});
  });
  // mock a operation/deposit class
  it('Returns operation type', function(){
    expect(transaction.type()).toEqual(jasmine.any(Object));
  });

  it('Returns operation amount', function(){
    expect(transaction.amount()).toEqual(50);
  });

  it('Returns destination account', function(){
    expect(transaction.destination(5)).toEqual(5);
  });
});
