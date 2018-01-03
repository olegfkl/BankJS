
describe('Transaction', function() {

  beforeEach(function() {
    transaction = new Transaction(578657, new Deposit(50));
  });
  // { type: 'debit', amount:  50}
  // mock a operation/deposit class
  it('Returns operation type', function(){
    expect(transaction.operation()).toEqual(jasmine.any(Object));
  });
 // this will only pass when you inject doubleOperatiom(amount is a function)
  it('Returns operation amount', function(){
    expect(transaction.amount()).toEqual(50);
  });

  it('Returns destination account', function(){
    expect(transaction.destination(578657)).toEqual(578657);
  });
  // this will only pass when you inject doubleOperatiom(and mock type class too)
  describe('#type', function() {
    it('Returns the type of transaction', function(){
      expect(transaction.type()).toEqual('credit')
    });
  });
});
