
describe('Transaction', function() {

  beforeEach(function() {
    transaction = new Transaction({ type: 'debit', amount:  50});
  });
  // mock a operation class
  it('Returns operation type', function(){
    expect(transaction.type()).toEqual(jasmine.any(Object));
  });

  it('Returns operation amount', function(){
    expect(transaction.amount()).toEqual(50);
  });
});
